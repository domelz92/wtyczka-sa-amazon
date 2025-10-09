// Amazon Sellasist Extension - Content Script
// Zabezpieczenie przed wielokrotnym ładowaniem
if (!window.amazonSellasistExtensionLoaded) {
  window.amazonSellasistExtensionLoaded = true;

// Deklaracja zmiennych globalnych - zoptymalizowana
const globalVars = {
  isProcessingOrder: false,
  currentOrderId: null,
  processingTimestamp: 0,
  logLevel: 'info',
  debugMode: false,
  countriesCache: null,
  cacheTimestamp: null,
  CACHE_DURATION: 24 * 60 * 60 * 1000 // 24 godziny
};

// Inicjalizuj zmienne tylko jeśli nie istnieją
Object.keys(globalVars).forEach(key => {
  if (typeof window[key] === 'undefined') {
    window[key] = globalVars[key];
  }
});

// Cache dla zamówień Pending przeniesiony do sidebar.js

// Pobierz debugMode z chrome.storage.local przy starcie
chrome.storage.local.get(['debugMode'], function(result) {
  window.debugMode = !!result.debugMode;
  
  // Wyślij statystyki uruchomienia wtyczki (raz dziennie)
  sendDailyUsageStats();
});

// Funkcja do wysyłania dziennych statystyk użytkowania
async function sendDailyUsageStats() {
  try {
    const today = new Date().toDateString();
    const lastSent = localStorage.getItem('lastStatsSent');
    
    if (lastSent !== today) {
      await sendUsageStats('extension_loaded');
      localStorage.setItem('lastStatsSent', today);
    }
  } catch (error) {
    // Ignoruj błędy
  }
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  try {
    if (msg.type === 'preloadCountries') {
      // Preloaduj kraje do cache
      fetchCountriesFromAPI(msg.apiKey, msg.apiEndpoint).then(countries => {
        const count = countries ? countries.length : 0;
        sendResponse({ success: !!countries, count: count });
      }).catch(error => {
        sendResponse({ success: false, error: error.message });
      });
      return true;
    }
    else if (msg.type === 'scrapOrder') {
    // Sprawdź duplikat na podstawie timestampu i ID zamówienia
    const currentTime = Date.now();
    const isDuplicate = window.isProcessingOrder && 
                         window.currentOrderId === msg.order?.amazon_order_id && 
                         (currentTime - window.processingTimestamp < 5000); // 5 sekund bufor czasowy
    
    if (isDuplicate) {
      //sendLog("Zamówienie jest już przetwarzane, ignoruję duplikat żądania", 'warning'); // Usunięte logowanie duplikatu
      sendResponse({ status: "already_processing" });
      return true;
    }
    
    // Ustaw flagę przetwarzania, zapamiętaj ID i znacznik czasowy
    window.isProcessingOrder = true;
    window.currentOrderId = msg.order?.amazon_order_id;
    window.processingTimestamp = currentTime;
    
    // Rozpocznij scrapowanie asynchronicznie, ale od razu zwróć odpowiedź
    scrapAndUpdateOrder(msg)
      .then(() => {
        // Resetuj flagę po zakończeniu
        window.isProcessingOrder = false;
      })
      .catch(error => {
        // Resetuj flagę również w przypadku błędu
        window.isProcessingOrder = false;
        console.error("Błąd podczas scrapowania i aktualizacji zamówienia:", error);
      });
    
    // Zwróć odpowiedź natychmiast, żeby browser nie pokazywał błędu
    sendResponse({ status: "processing" });
    return true; // Informuje Chrome, że odpowiedź będzie asynchroniczna
    }
  } catch (error) {
    console.error('Błąd w chrome.runtime.onMessage.addListener:', error);
    sendResponse({ status: "error", message: error.message });
    return true;
  }
});

// Pomocnicza funkcja do pobierania danych z storage
function getStoredData(keys) {
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (data) => {
      resolve(data);
    });
  });
}

// Funkcja do formatowania numeru telefonu
function formatPhoneNumber(phone, country) {
  if (!phone) return ''; // Zwróć pusty string jeśli brak numeru

  // Usuń wszystkie znaki niebędące cyframi i plusa
  let cleaned = phone.replace(/[^\d+]/g, '');

  // Jeśli po czyszczeniu nic nie zostało, zwróć pusty string
  if (!cleaned) return '';

  // Jeśli numer zaczyna się od '+', zostaw jak jest (zakładamy, że jest poprawny)
  if (cleaned.startsWith('+')) return cleaned;

  // Jeśli zaczyna się od '00', zamień na '+'
  if (cleaned.startsWith('00')) {
    cleaned = '+' + cleaned.slice(2);
    return cleaned;
  }

  // Jeśli numer wygląda na lokalny (9 cyfr), dodaj odpowiedni kierunkowy
  if (cleaned.length === 9 && country) {
    if (country.toLowerCase().includes('pol')) return '+48' + cleaned;
    if (country.toLowerCase().includes('de')) return '+49' + cleaned;
    if (country.toLowerCase().includes('fr')) return '+33' + cleaned;
    if (country.toLowerCase().includes('es')) return '+34' + cleaned;
    if (country.toLowerCase().includes('it')) return '+39' + cleaned;
    if (country.toLowerCase().includes('uk') || country.toLowerCase().includes('kingdom')) return '+44' + cleaned;
  }

  // Jeśli numer ma 10-15 cyfr, zostaw jak jest (może już zawiera kierunkowy)
  if (cleaned.length >= 10 && cleaned.length <= 15) return cleaned;

  // Jeśli numer jest zbyt krótki (mniej niż 9 cyfr), zwróć pusty string
  if (cleaned.length < 9) return '';

  // W innych przypadkach zwróć oczyszczony numer
  return cleaned;
}

// Funkcja do zapewnienia, że zawsze mamy jakikolwiek numer telefonu
function getValidPhoneNumber(scrapedPhone, existingPhone, country) {
  // Priorytet 1: Użyj sformatowanego numeru ze scrapingu jeśli jest prawidłowy
  if (scrapedPhone && scrapedPhone.trim() !== '') {
    sendLog(`Używam numeru telefonu ze scrapingu: ${scrapedPhone}`, 'debug');
    return scrapedPhone;
  }
  
  // Priorytet 2: Użyj istniejącego numeru z Sellasist jeśli jest prawidłowy
  if (existingPhone && existingPhone.trim() !== '' && 
      existingPhone !== '000000000' && 
      existingPhone !== '---' && 
      existingPhone !== '-') {
    sendLog(`Używam istniejącego numeru telefonu z Sellasist: ${existingPhone}`, 'debug');
    return existingPhone;
  }
  
  // Priorytet 3: Wygeneruj domyślny numer na podstawie kraju
  const defaultPhone = generateDefaultPhone(country);
  sendLog(`Brak prawdziwego numeru telefonu - używam domyślnego: ${defaultPhone}`, 'info');
  return defaultPhone;
}

// Funkcja do generowania domyślnego numeru telefonu - zoptymalizowana
const generateDefaultPhone = () => '000000000';

// Funkcja do sprawdzania czy zamówienie jest Pending na Amazon
function isOrderPendingOnAmazon(orderId) {
  try {
    // Sprawdź różne wskaźniki zamówienia Pending na stronie Amazon
    const pageText = document.body.innerText || document.body.textContent || '';
    
    // Szukaj statusu "Pending" w tekście
    const pendingIndicators = [
      'Pending',
      'pending',
      'Awaiting payment',
      'Payment pending',
      'Unshipped',
      'Not yet shipped',
      'Processing',
      'Nie wysłano',
      'Oczekuje na płatność',
      'W trakcie przetwarzania'
    ];
    
    const hasPendingStatus = pendingIndicators.some(indicator => 
      pageText.toLowerCase().includes(indicator.toLowerCase())
    );
    
    // 2. Sprawdź czy brak danych adresowych (typowe dla Pending)
    const addressDiv = findAddressElement();
    if (!addressDiv) {
      sendLog('Brak elementu adresowego - możliwe zamówienie Pending', 'debug');
      addToPendingCache(orderId);
      return true;
    }
    
    const addressData = extractAddressData(addressDiv);
    if (!addressData.isValid || !addressData.name || !addressData.surname) {
      sendLog('Niepełne dane adresowe - możliwe zamówienie Pending', 'debug');
      addToPendingCache(orderId);
      return true;
    }
    
    // 4. Sprawdź czy produkty mają status "Pending" (ale NIE "Cancelled")
    const productRows = document.querySelectorAll('table.a-keyvalue tbody tr');
    if (productRows && productRows.length > 0) {
      let hasPendingProducts = false;
      let hasCancelledProducts = false;
      
      for (const row of productRows) {
        const statusLabel = row.querySelector('[data-test-id="item-status-label"]');
        if (statusLabel) {
          const status = statusLabel.innerText.trim().toLowerCase();
          
          if (status.includes('cancelled') || status.includes('canceled')) {
            hasCancelledProducts = true;
            sendLog(`Znaleziono produkt anulowany: ${status}`, 'debug');
          } else if (status.includes('pending') || status.includes('unshipped')) {
            hasPendingProducts = true;
            sendLog(`Znaleziono produkt ze statusem Pending: ${status}`, 'debug');
          }
        }
      }
      
      // Jeśli są produkty anulowane, NIE dodawaj do cache Pending - przetwórz jako anulowane
      if (hasCancelledProducts) {
        sendLog('Zamówienie zawiera produkty anulowane - będzie przetworzone jako anulowane', 'info');
        return false; // NIE jest Pending - przetwórz jako anulowane
      }
      
      // Jeśli są tylko produkty Pending (bez anulowanych), dodaj do cache
      if (hasPendingProducts) {
        addToPendingCache(orderId);
        return true;
      }
    }
    
    if (hasPendingStatus) {
      sendLog('Wykryto wskaźniki zamówienia Pending w tekście strony', 'debug');
      addToPendingCache(orderId);
      return true;
    }
    
    return false;
  } catch (error) {
    sendLog(`Błąd sprawdzania statusu Pending: ${error.message}`, 'error');
    return false; // W przypadku błędu, kontynuuj przetwarzanie
  }
}

// Funkcja do dodawania zamówienia do cache Pending - wysyła do sidebar
function addToPendingCache(orderId) {
  // Wyślij wiadomość do sidebar żeby dodał do cache
  chrome.runtime.sendMessage({ 
    type: 'addToPendingCache', 
    orderId: orderId 
  });
  sendLog(`Wysłano żądanie dodania zamówienia ${orderId} do cache Pending`, 'debug');
}

// Cache Pending przeniesiony do sidebar.js

// Funkcja do preloadowania krajów na początku sesji
async function preloadCountriesCache() {
  try {
    // Sprawdź czy już mamy cache
    if (window.countriesCache && window.cacheTimestamp) {
      const hoursLeft = Math.round((window.CACHE_DURATION - (Date.now() - window.cacheTimestamp)) / 1000 / 60 / 60);
      sendLog(`Cache krajów już istnieje (${window.countriesCache.length} krajów, ważny jeszcze ${hoursLeft}h)`, 'debug');
      return;
    }

    // Pobierz konfigurację API z storage
    const { apiKey, apiEndpoint } = await getStoredData(['apiKey', 'apiEndpoint']);
    if (!apiKey || !apiEndpoint) {
      sendLog('Brak konfiguracji API - nie można preloadować krajów', 'debug');
      return;
    }

    // Preloaduj kraje w tle
    sendLog('Preloadowanie krajów z API w tle...', 'debug');
    await fetchCountriesFromAPI(apiKey, apiEndpoint);
    
  } catch (error) {
    sendLog(`Błąd preloadowania krajów: ${error.message}`, 'warning');
  }
}

// Funkcja do scrapowania i aktualizacji zamówienia

async function scrapAndUpdateOrder(msg) {
  try {
    sendLog(`Scrapowanie zamówienia: ${msg.order?.amazon_order_id}`, 'debug');
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // NOWE: Sprawdź czy zamówienie jest Pending na Amazon
    const isPending = isOrderPendingOnAmazon(msg.order?.amazon_order_id);
    if (isPending) {
      sendLog(`Zamówienie ${msg.order?.amazon_order_id} jest Pending na Amazon - PRZERYWAM PRZETWARZANIE`, 'warning');
      // Wyślij informację o pominięciu zamówienia
      chrome.runtime.sendMessage({ 
        type: 'orderSkipped', 
        orderId: msg.order?.sellasist_order_id,
        reason: 'Pending'
      });
      return; // PRZERWIJ przetwarzanie
    }
    
    let allProductsCancelled = false;
    if (!msg.orderDetails) {
      sendLog(`Błąd: Brak szczegółów zamówienia z Sellasist`, 'error');
      sendOrderError(msg.order?.sellasist_order_id, 'Brak szczegółów zamówienia z Sellasist');
      return;
    }
    const { apiEndpoint } = await getStoredData(['apiEndpoint']);
    if (!apiEndpoint) {
      sendLog(`Błąd: Brak skonfigurowanego endpointu API. Przejdź do ustawień i wprowadź wymagany endpoint API.`, 'error');
      sendOrderError(msg.order?.sellasist_order_id, 'Brak skonfigurowanego endpointu API');
      return;
    }
    sendLog(`Używam endpointu API: ${apiEndpoint}`, 'debug');
    sendLog(`Otrzymano dane zamówienia z Sellasist: ID ${msg.orderDetails.id}`, 'debug');
    let paymentAmount = 0;
    let paymentCurrency = 'EUR';
    if (msg.orderDetails.payment && msg.orderDetails.payment.paid) {
      paymentAmount = parseFloat(msg.orderDetails.payment.paid);
      paymentCurrency = normalizeCurrency(msg.orderDetails.payment.currency || 'EUR');
      sendLog(`Znaleziono kwotę płatności w danych z API: ${paymentAmount} ${paymentCurrency}`, 'debug');
    }
    const addressDiv = findAddressElement();
    if (!addressDiv) {
      sendLog(`Błąd: Nie znaleziono elementu z adresem dostawy dla zamówienia ${msg.order?.amazon_order_id || 'nieznane'}`, 'error');
      sendOrderError(msg.order?.sellasist_order_id, 'Nie znaleziono elementu z adresem dostawy');
      return;
    }
    const addressData = extractAddressData(addressDiv);
    let orderStatus = 'normal'; // normal, pending, cancelled, error
    
    if (!addressData.isValid) {
      sendLog('Niepełne dane adresowe – aktualizuję zamówienie jako anulowane: imię=Order, nazwisko=Canceled', 'warning');
      allProductsCancelled = true;
    }
    sendLog(`Znaleziono adres dostawy: ${addressData.formattedAddress}`, 'debug');
    
    // Formatuj numer telefonu
    const formattedPhone = formatPhoneNumber(addressData.phone, addressData.country);
    sendLog(`Numer telefonu z Amazona: "${addressData.phone}"`, 'debug');
    sendLog(`Sformatowany numer telefonu: "${formattedPhone}"`, 'debug');
    const finalPhoneNumber = getValidPhoneNumber(formattedPhone, msg.orderDetails.shipment_address?.phone, addressData.country);
    sendLog(`Finalny numer telefonu dla zamówienia: ${finalPhoneNumber}`, 'info');

    const scrapedCurrency = detectCurrency();
    let currency = scrapedCurrency || paymentCurrency || 'EUR';
    
    try {
      currency = normalizeCurrency(currency);
    } catch (currencyError) {
      sendLog(`Błąd waluty: ${currencyError.message}`, 'error');
      sendOrderError(msg.order?.sellasist_order_id, `Nieobsługiwana waluta: ${currency}`);
      return;
    }
    
    sendLog(`Waluta z scraping Amazona: ${scrapedCurrency}`, 'debug');
    sendLog(`Waluta z płatności Sellasist: ${paymentCurrency}`, 'debug');
    sendLog(`Wykryta waluta zamówienia: ${currency}`, 'debug');
    // Sprawdź czy to zamówienie UK i czy włączona jest opcja UK VAT 0%
    const { ukVatZero } = await getStoredData(['ukVatZero']);
    const isUK = isUKOrder(addressData, currency);
    const useUkVatZero = ukVatZero && isUK;
    
    const productData = extractProductData(useUkVatZero);
    if (!allProductsCancelled) {
      const hasRealCancelledProducts = productData.products.length > 0 && 
                                      productData.products.every(p => p.status && p.status.toLowerCase().includes('cancelled'));
      const hasNoProducts = productData.products.length === 0;
      
      if (hasRealCancelledProducts) {
        allProductsCancelled = true;
        orderStatus = 'cancelled';
        sendLog('Wszystkie produkty w zamówieniu mają status anulowany', 'warning');
      } else if (hasNoProducts && orderStatus === 'normal') {
        // Brak produktów, ale normalne dane adresowe - może być zamówienie w toku
        allProductsCancelled = true;
        orderStatus = 'pending';
        sendLog('Brak produktów - prawdopodobnie zamówienie w toku', 'info');
      }
    }
    if (productData.products.length === 0) {
      sendLog(`Ostrzeżenie: Nie znaleziono produktów dla zamówienia ${msg.order?.amazon_order_id || 'nieznane'}`, 'warning');
      sendOrderError(msg.order?.sellasist_order_id, 'Nie znaleziono produktów');
      return;
    }
    if (window.debugMode) sendLog(`Znaleziono ${productData.products.length} produktów`, 'debug');
    const orderValues = extractOrderValues();
    if (window.debugMode) sendLog(`Wartości zamówienia z scraping: ${JSON.stringify(orderValues)}`, 'debug');
    
    if (useUkVatZero) {
      sendLog('Opcja UK VAT 0% jest włączona i wykryto zamówienie do UK - używam cen netto', 'info');
      
      // Dla UK VAT 0% używamy "Sales proceeds net of VAT" jako wartości produktów i wysyłki
      if (orderValues.netProceeds !== null && orderValues.netProceeds > 0) {
        // Znajdź wartość netto produktów i wysyłki z "Sales proceeds net of VAT"
        const netProceedsTotal = orderValues.netProceeds;
        sendLog(`UK VAT 0%: Używam "Sales proceeds net of VAT" jako podstawy: ${netProceedsTotal} ${currency}`, 'info');
        
        // Zastąp wartości zamówienia wartościami netto
        orderValues.subtotal = netProceedsTotal - (orderValues.shippingNet || 0);
        orderValues.total = netProceedsTotal;
        orderValues.tax = 0; // VAT = 0% dla UK
        orderValues.shipping = orderValues.shippingNet || 0;
        
        sendLog(`UK VAT 0%: Przeliczone wartości - produkty netto: ${orderValues.subtotal}, wysyłka netto: ${orderValues.shipping}, razem netto: ${orderValues.total}`, 'info');
      }
    }
    if ((orderValues.subtotal === null || orderValues.subtotal === 0) && paymentAmount > 0) {
      orderValues.total = paymentAmount;
      if (productData.products.length === 1 && productData.products[0].tax_rate > 0) {
        const vatRate = productData.products[0].tax_rate / 100;
        orderValues.subtotal = paymentAmount / (1 + vatRate);
        orderValues.tax = paymentAmount - orderValues.subtotal;
        sendLog(`Obliczono wartości zamówienia na podstawie płatności i stawki VAT: netto=${orderValues.subtotal}, VAT=${orderValues.tax}, brutto=${orderValues.total}`, 'debug');
      }
    }
    // Ustaw cenę produktu tylko jeśli jest 0 lub null
    if (productData.products.length === 1 && (productData.products[0].price === 0 || productData.products[0].price === null)) {
      const shippingCost = orderValues.shipping || msg.orderDetails.shipment?.total || 0;
      let baseAmount = null;
      let baseLabel = '';
      let shouldSubtractShipping = true;
      
      // Priorytet 1: subtotal (wartość produktów netto) - NIE odejmuj wysyłki
      if (orderValues.subtotal !== null && orderValues.subtotal > 0) {
        baseAmount = orderValues.subtotal;
        baseLabel = 'orderValues.subtotal';
        shouldSubtractShipping = false; // subtotal to już wartość samych produktów
      } 
      // Priorytet 2: total (suma brutto) - odejmij wysyłkę
      else if (orderValues.total !== null && orderValues.total > 0) {
        baseAmount = orderValues.total;
        baseLabel = 'orderValues.total';
        shouldSubtractShipping = true;
      } 
      // Priorytet 3: paymentAmount - odejmij wysyłkę
      else if (paymentAmount > 0) {
        baseAmount = paymentAmount;
        baseLabel = 'paymentAmount';
        shouldSubtractShipping = true;
      }
      
      if (baseAmount !== null) {
        const quantity = productData.products[0].quantity || 1;
        let unitPrice;
        
        if (shouldSubtractShipping) {
          const productsTotal = baseAmount - shippingCost;
          unitPrice = productsTotal / quantity;
          sendLog(`Ustawiono cenę jednostkową produktu: (${baseLabel}=${baseAmount} - shippingCost=${shippingCost}) / quantity=${quantity} = ${unitPrice}`, 'debug');
        } else {
          unitPrice = baseAmount / quantity;
          sendLog(`Ustawiono cenę jednostkową produktu: ${baseLabel}=${baseAmount} / quantity=${quantity} = ${unitPrice} (subtotal nie zawiera kosztów wysyłki)`, 'debug');
        }
        
        productData.products[0].price = unitPrice;
      } else {
        sendLog('Nie można wyliczyć ceny produktu: brak sumy zamówienia, subtotalu i kwoty płatności', 'warning');
      }
    } else if (productData.products.length === 1 && productData.products[0].price > 0) {
      sendLog(`Cena produktu już ustawiona na ${productData.products[0].price}, nie nadpisuję.`, 'debug');
    }
    const totalProductPrice = productData.products.reduce((sum, product) => sum + (product.price || 0) * (product.quantity || 1), 0);
    if (window.debugMode) sendLog(`Łączna wartość produktów: ${totalProductPrice}`, 'debug');
    const { apiKey } = await getStoredData(['apiKey']);
    if (!apiKey) {
      sendLog('Błąd: Brak klucza API', 'error');
      sendOrderError(msg.order?.sellasist_order_id, 'Brak klucza API');
      return;
    }
    if (!msg.order?.sellasist_order_id) {
      sendLog('Błąd: Brak ID zamówienia Sellasist', 'error');
      sendOrderError(msg.order?.sellasist_order_id, 'Brak ID zamówienia Sellasist');
      return;
    }
    const countryName = addressData.country || '';
    let countryID = null;
    
    // Najpierw spróbuj wykryć kraj na podstawie adresu z Amazona
    countryID = await getCountryID(countryName, apiKey, apiEndpoint);
    if (countryID) {
      sendLog(`Wykryto kraj na podstawie nazwy z Amazona: ${countryName} -> ID ${countryID}`, 'debug');
    } else {
      // Jeśli nie udało się wykryć po nazwie, spróbuj na podstawie kodu pocztowego i miasta
      const postCodeAndCity = `${addressData.postcode} ${addressData.city}`;
      if (/^\d{5}$/.test(addressData.postcode)) {
        if (/León|Madrid|Barcelona|Valencia|Sevilla/i.test(addressData.city)) {
          countryID = '209';
          sendLog(`Wykryto Hiszpanię na podstawie kodu pocztowego i miasta`, 'debug');
        } else if (/Paris|Lyon|Marseille|Toulouse|Nice/i.test(addressData.city)) {
          countryID = '74';
          sendLog(`Wykryto Francję na podstawie kodu pocztowego i miasta`, 'debug');
        } else if (/Berlin|Hamburg|München|Frankfurt|Köln|Kindsbach/i.test(addressData.city)) {
          countryID = '81';
          sendLog(`Wykryto Niemcy na podstawie kodu pocztowego i miasta`, 'debug');
        }
      } else if (/^[A-Z]{1,2}[\d]{1,2}[A-Z]?\s?[\d][A-Z]{2}$/i.test(addressData.postcode)) {
        countryID = '230';
        sendLog(`Wykryto UK na podstawie formatu kodu pocztowego`, 'debug');
      }
      
      // Jeśli nadal nie wykryto, użyj danych oryginalnych jako fallback
      if (!countryID && msg.orderDetails.shipment_address?.country?.id) {
        countryID = msg.orderDetails.shipment_address.country.id;
        sendLog(`Używam ID kraju z danych oryginalnych jako fallback: ${countryID} (${msg.orderDetails.shipment_address.country.name})`, 'debug');
      }
    }
    if (window.debugMode) sendLog(`Finalny ID kraju: ${countryID || 'nieznany'}`, 'debug');
    // Sprawdź czy trzeba zaktualizować walutę płatności
    let finalCurrency = paymentCurrency;
    if (currency !== paymentCurrency) {
      sendLog(`Wykryta różna waluta: Amazon=${currency}, Sellasist=${paymentCurrency}. Aktualizuję walutę płatności.`, 'info');
      finalCurrency = currency.toLowerCase(); // API oczekuje małych liter np. "eur", "pln"
    }

    // Debugowanie produktów przed aktualizacją
    sendLog(`Produkty oryginalne w Sellasist: ${msg.orderDetails.carts?.length || 0}`, 'debug');
    sendLog(`Produkty ze scraping Amazona: ${productData.products.length}`, 'debug');

    try {
      // Użyj wartości z Amazona gdy waluta się różni
      let finalPaidAmount = paymentAmount > 0 ? paymentAmount : (msg.orderDetails.payment?.paid || 0);
      if (currency !== paymentCurrency && orderValues.total !== null && orderValues.total > 0) {
        finalPaidAmount = orderValues.total;
        sendLog(`Używam kwoty płatności z Amazona ze względu na różną walutę: ${finalPaidAmount} ${currency}`, 'info');
      }
      
      const orderUpdateData = {
        id: msg.orderDetails.id,
        currency: finalCurrency,
        payment_status: msg.orderDetails.payment?.status || "pending",
        paid: finalPaidAmount,
        status: msg.orderDetails.status?.id || 1,
        email: msg.orderDetails.email,
        date: msg.orderDetails.date,
        shipment_price: orderValues.shipping || msg.orderDetails.shipment?.total || 0,
        deadline: msg.orderDetails.deadline,
        important: msg.orderDetails.important,
        payment_id: msg.orderDetails.payment?.id,
        payment_name: msg.orderDetails.payment?.name,
        shipment_id: msg.orderDetails.shipment?.id,
        shipment_name: msg.orderDetails.shipment?.name,
        invoice: msg.orderDetails.invoice,
        document_number: msg.orderDetails.document_number,
        comment: msg.orderDetails.comment,
        bill_address: {
          name: allProductsCancelled ? 'Order' : (addressData.name || msg.orderDetails.bill_address?.name || '-'),
          surname: allProductsCancelled ? getOrderStatusSurname(orderStatus) : (addressData.surname || msg.orderDetails.bill_address?.surname || '-'),
          street: addressData.street || msg.orderDetails.bill_address?.street || '-',
          home_number: addressData.homeNumber || msg.orderDetails.bill_address?.home_number || '',
          flat_number: msg.orderDetails.bill_address?.flat_number || null,
          description: msg.orderDetails.bill_address?.description || '',
          postcode: addressData.postcode || msg.orderDetails.bill_address?.postcode || '-',
          city: addressData.city || msg.orderDetails.bill_address?.city || '-',
          state: msg.orderDetails.bill_address?.state || null,
          phone: getValidPhoneNumber(formattedPhone, msg.orderDetails.bill_address?.phone, addressData.country),
          company_name: msg.orderDetails.bill_address?.company_name || null,
          company_nip: msg.orderDetails.bill_address?.company_nip || null,
          country: { 
            id: countryID || (msg.orderDetails.bill_address?.country?.id || '81'),
            name: countryID ? (addressData.country || msg.orderDetails.bill_address?.country?.name || 'Germany') : (msg.orderDetails.bill_address?.country?.name || 'Germany'),
            code: countryID ? getCountryCode(addressData.country) || msg.orderDetails.bill_address?.country?.code || 'DE' : (msg.orderDetails.bill_address?.country?.code || 'DE')
          }
        },
        shipment_address: {
          name: allProductsCancelled ? 'Order' : (addressData.name || msg.orderDetails.shipment_address?.name || '-'),
          surname: allProductsCancelled ? getOrderStatusSurname(orderStatus) : (addressData.surname || msg.orderDetails.shipment_address?.surname || '-'),
          street: addressData.street || msg.orderDetails.shipment_address?.street || '-',
          home_number: addressData.homeNumber || msg.orderDetails.shipment_address?.home_number || '',
          flat_number: msg.orderDetails.shipment_address?.flat_number || null,
          description: msg.orderDetails.shipment_address?.description || '',
          postcode: addressData.postcode || msg.orderDetails.shipment_address?.postcode || '-',
          city: addressData.city || msg.orderDetails.shipment_address?.city || '-',
          state: msg.orderDetails.shipment_address?.state || null,
          phone: getValidPhoneNumber(formattedPhone, msg.orderDetails.shipment_address?.phone, addressData.country),
          company_name: msg.orderDetails.shipment_address?.company_name || null,
          company_nip: msg.orderDetails.shipment_address?.company_nip || null,
          country: { 
            id: countryID || (msg.orderDetails.shipment_address?.country?.id || '81'),
            name: countryID ? (addressData.country || msg.orderDetails.shipment_address?.country?.name || 'Germany') : (msg.orderDetails.shipment_address?.country?.name || 'Germany'),
            code: countryID ? getCountryCode(addressData.country) || msg.orderDetails.shipment_address?.country?.code || 'DE' : (msg.orderDetails.shipment_address?.country?.code || 'DE')
          }
        },
        pickup_point: msg.orderDetails.pickup_point || null,
        additional_fields: msg.orderDetails.additional_fields || [],
        // Produkty aktualizujemy w tym samym zapytaniu przez carts
        // POPRAWIONE MAPOWANIE - lepsze dopasowanie produktów
        carts: productData.products.map((scrapedProduct, index) => {
          // Najpierw spróbuj znaleźć po nazwie/SKU/ASIN
          let originalProduct = msg.orderDetails.carts?.find(cart => {
            // Dokładne dopasowanie po nazwie
            if (cart.name && scrapedProduct.name && cart.name.trim() === scrapedProduct.name.trim()) {
              sendLog(`Dopasowano produkt po nazwie: ${cart.name}`, 'debug');
              return true;
            }
            
            // Dopasowanie po EAN/SKU
            if (cart.ean && scrapedProduct.ean && cart.ean === scrapedProduct.ean) {
              sendLog(`Dopasowano produkt po EAN: ${cart.ean}`, 'debug');
              return true;
            }
            
            // Dopasowanie po catalog_number/ASIN
            if (cart.catalog_number && scrapedProduct.catalog_number && 
                cart.catalog_number === scrapedProduct.catalog_number) {
              sendLog(`Dopasowano produkt po catalog_number: ${cart.catalog_number}`, 'debug');
              return true;
            }
            
            return false;
          });
          
          // Jeśli nie znaleziono po identyfikatorach, użyj po indeksie (ale z ostrzeżeniem)
          if (!originalProduct && msg.orderDetails.carts && msg.orderDetails.carts[index]) {
            originalProduct = msg.orderDetails.carts[index];
            sendLog(`UWAGA: Nie znaleziono dokładnego dopasowania dla produktu "${scrapedProduct.name}", używam produktu po indeksie ${index}: "${originalProduct.name}"`, 'warning');
          }

          if (originalProduct && originalProduct.line_id) {
            sendLog(`Aktualizuję line_id: ${originalProduct.line_id} -> cena: ${scrapedProduct.price}, tax: ${scrapedProduct.tax_rate}%`, 'info');
            return {
              line_id: originalProduct.line_id,
              price: scrapedProduct.price,
              tax: scrapedProduct.tax_rate || 0
            };
          }
          
          sendLog(`Nie znaleziono line_id dla produktu: ${scrapedProduct.name}`, 'warning');
          return null;
        }).filter(Boolean)
      };
      if (orderValues.subtotal !== null && orderValues.subtotal > 0) {
        orderUpdateData.total_price_netto = orderValues.subtotal;
      } else if (msg.orderDetails.total_price_netto) {
        orderUpdateData.total_price_netto = msg.orderDetails.total_price_netto;
      }
      if (orderValues.tax !== null && orderValues.tax > 0) {
        orderUpdateData.vat = orderValues.tax;
        orderUpdateData.tax = Math.round(orderValues.tax);
      } else if (msg.orderDetails.vat) {
        orderUpdateData.vat = msg.orderDetails.vat;
      } else if (msg.orderDetails.tax) {
        orderUpdateData.tax = Math.round(msg.orderDetails.tax);
      }
      if (orderValues.total !== null && orderValues.total > 0) {
        orderUpdateData.total_price_brutto = orderValues.total;
        // Usuń pole total - może API automatycznie je oblicza
        sendLog(`Ustawiono total_price_brutto na podstawie orderValues: ${orderValues.total}`, 'debug');
      } else if (msg.orderDetails.total_price_brutto) {
        orderUpdateData.total_price_brutto = msg.orderDetails.total_price_brutto;
      } else if (totalProductPrice > 0) {
        orderUpdateData.total_price_brutto = totalProductPrice;
        sendLog(`Ustawiono total_price_brutto na podstawie sumy produktów: ${totalProductPrice}`, 'debug');
      } else if (paymentAmount > 0) {
        orderUpdateData.total_price_brutto = paymentAmount;
        sendLog(`Ustawiono total_price_brutto na podstawie płatności: ${paymentAmount}`, 'debug');
      }
      const orderUrl = `https://${apiEndpoint}/api/v1/orders/${msg.order.sellasist_order_id}`;
      if (allProductsCancelled) {
        const statusMessage = getOrderStatusMessage(orderStatus);
        sendLog(statusMessage, orderStatus === 'pending' ? 'info' : 'warning');
      }
      sendLog(`Aktualizacja danych zamówienia: ${orderUrl}`, 'debug');
      const orderResponse = await fetch(orderUrl, {
        method: 'PUT',
        headers: {
          'accept': 'application/json',
          'apiKey': apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderUpdateData)
      });
      if (!orderResponse.ok) {
        const errorText = await orderResponse.text();
        throw new Error(`Błąd aktualizacji zamówienia: ${orderResponse.status} ${orderResponse.statusText}. Treść: ${errorText}`);
      }
      sendLog(`Dane zamówienia ${msg.order.sellasist_order_id} zaktualizowane pomyślnie (wraz z produktami przez carts)`, 'info');
      
      sendLog(`Zamówienie ${msg.order.sellasist_order_id} zaktualizowane (wraz z produktami).`, 'info');
      try {
        sendLog(`Sprawdzam poprawność aktualizacji zamówienia ${msg.order.sellasist_order_id}...`, 'debug');
        const verificationUrl = `https://${apiEndpoint}/api/v1/orders/${msg.order.sellasist_order_id}`;
        const verificationResponse = await fetch(verificationUrl, {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'apiKey': apiKey,
            'Content-Type': 'application/json'
          }
        });
        if (verificationResponse.ok) {
          const updatedOrder = await verificationResponse.json();
          sendLog(`Zamówienie po aktualizacji:`, 'debug');
          sendLog(`Total: ${updatedOrder.total} ${updatedOrder.currency || updatedOrder.payment?.currency}`, 'debug');
          
          // Sprawdź czy waluta została zaktualizowana
          if (currency !== paymentCurrency) {
            const currentCurrency = updatedOrder.currency || updatedOrder.payment?.currency;
            const expectedCurrency = currency.toLowerCase();
            if (currentCurrency && currentCurrency.toLowerCase() === expectedCurrency) {
              sendLog(`✅ Waluta płatności pomyślnie zaktualizowana na: ${currency}`, 'success');
            } else {
              sendLog(`⚠️ Waluta płatności nie została zaktualizowana. Obecna: ${currentCurrency}, oczekiwana: ${currency}`, 'warning');
            }
          }
          
          if (updatedOrder.carts && updatedOrder.carts.length > 0) {
            for (const product of updatedOrder.carts) {
              sendLog(`Produkt: ${product.name} - cena: ${product.price}, tax: ${product.tax}`, 'debug');
            }
          }
        } else {
          const errorText = await verificationResponse.text();
          sendLog(`Nie udało się pobrać zaktualizowanego zamówienia: ${verificationResponse.status} ${errorText}`, 'warning');
        }
      } catch (verificationError) {
        sendLog(`Błąd podczas weryfikacji aktualizacji: ${verificationError.message}`, 'warning');
      }
      sendOrderUpdated(msg.order.sellasist_order_id);
    } catch (fetchError) {
      sendLog(`Błąd podczas aktualizacji zamówienia: ${fetchError.message}`, 'error');
      sendOrderError(msg.order?.sellasist_order_id, fetchError.message);
    }
  } catch (e) {
    sendLog(`Błąd scrapowania: ${e.message}`, 'error');
    sendOrderError(msg.order?.sellasist_order_id, e.message);
  }
}


// Funkcja usunięta - używamy teraz carts w głównym PUT

// Funkcja usunięta - używamy teraz carts w głównym PUT

// Normalizacja waluty
function normalizeCurrency(currency) {
  if (!currency) return 'EUR';
  
  // Zamień na małe litery dla porównania
  let normalizedCurrency = currency.toLowerCase().trim();
  
  // Obsługa znanych formatów i symboli
  switch (normalizedCurrency) {
    case '€':
    case 'eur':
    case 'euro':
      return 'EUR';
    case '£':
    case 'gbp':
    case 'pound':
    case 'sterling':
      return 'GBP';
    case '$':
    case 'usd':
    case 'dollar':
    case 'dollars':
      return 'USD';
    case 'pln':
    case 'zl':
    case 'zł':
    case 'złoty':
    case 'zloty':
      return 'PLN';
    case 'sek':
    case 'kr':
    case 'kronor':
    case 'krona':
    case 'swedish':
      return 'SEK';
    case 'nok':
    case 'norwegian':
    case 'norske':
      return 'NOK';
    case 'dkk':
    case 'danish':
    case 'danske':
      return 'DKK';
    case 'chf':
    case 'swiss':
    case 'franc':
      return 'CHF';
    case 'cad':
    case 'canadian':
      return 'CAD';
    case 'aud':
    case 'australian':
      return 'AUD';
    case 'jpy':
    case 'yen':
    case 'japanese':
      return 'JPY';
    case 'czk':
    case 'czech':
    case 'koruna':
      return 'CZK';
    case 'huf':
    case 'hungarian':
    case 'forint':
      return 'HUF';
    case 'ron':
    case 'romanian':
    case 'leu':
      return 'RON';
    case 'bgn':
    case 'bulgarian':
    case 'lev':
      return 'BGN';
    default:
      // Jeśli waluta ma 3 znaki i wygląda jak kod ISO, sprawdź czy jest obsługiwana
      if (/^[A-Z]{3}$/i.test(currency.trim())) {
        const upperCurrency = currency.trim().toUpperCase();
        
        if (isCurrencySupported(upperCurrency)) {
          sendLog(`Nieznana waluta "${currency}", ale wygląda jak obsługiwany kod ISO - używam: ${upperCurrency}`, 'info');
          return upperCurrency;
        } else {
          sendLog(`BŁĄD: Nieobsługiwana waluta "${upperCurrency}" - przetwarzanie przerwane`, 'error');
          throw new Error(`Nieobsługiwana waluta: ${upperCurrency}. Wtyczka obsługuje tylko: EUR, GBP, USD, SEK, NOK, DKK, PLN, CHF, CAD, AUD, JPY, CZK, HUF, RON, BGN`);
        }
      }
      
      // Jeśli waluta nie wygląda jak kod ISO, też przerwij
      sendLog(`BŁĄD: Nierozpoznana waluta "${currency}" - przetwarzanie przerwane`, 'error');
      throw new Error(`Nierozpoznana waluta: "${currency}". Wtyczka obsługuje tylko: EUR, GBP, USD, SEK, NOK, DKK, PLN, CHF, CAD, AUD, JPY, CZK, HUF, RON, BGN`);
  }
}

// Funkcja do wykrywania cen produktów - więcej metod
function extractProductPrice(row) {
  let price = 0;
  
  try {
    // Metoda 1: Standardowy selektor
    const priceElement = row.querySelector('td.a-text-right:nth-child(8) span, .price, [data-test-id="price"]');
    if (priceElement) {
      const priceText = priceElement.innerText || priceElement.textContent;
      const priceMatch = priceText.match(/[€£$¥]?\s*([\d.,]+)/);
      if (priceMatch && priceMatch[1]) {
        price = parseFloat(priceMatch[1].replace(/[^0-9,.]/g, '').replace(',', '.').trim());
        sendLog(`Znaleziono cenę metodą 1: ${price}`, 'info');
        return price;
      }
    }
    
    // Metoda 2: Szukaj w całym tekście wiersza
    const rowText = row.innerText || row.textContent || '';
    
    // Szukaj wzorców z walutą: €19.95, 19,95€, EUR 19.95, 19,95 kr itp.
    const currencyPriceMatches = [
      ...rowText.matchAll(/[€£$¥]\s*([\d,.]+)/g),
      ...rowText.matchAll(/([\d,.]+)\s*[€£$¥]/g),
      ...rowText.matchAll(/([\d,.]+)\s*kr\b/gi), // SEK, NOK, DKK
      ...rowText.matchAll(/([\d,.]+)\s*zł/gi), // PLN
      ...rowText.matchAll(/EUR\s*([\d,.]+)/gi),
      ...rowText.matchAll(/GBP\s*([\d,.]+)/gi),
      ...rowText.matchAll(/USD\s*([\d,.]+)/gi),
      ...rowText.matchAll(/SEK\s*([\d,.]+)/gi),
      ...rowText.matchAll(/NOK\s*([\d,.]+)/gi),
      ...rowText.matchAll(/DKK\s*([\d,.]+)/gi),
      ...rowText.matchAll(/PLN\s*([\d,.]+)/gi),
      ...rowText.matchAll(/CHF\s*([\d,.]+)/gi),
      ...rowText.matchAll(/CAD\s*([\d,.]+)/gi),
      ...rowText.matchAll(/AUD\s*([\d,.]+)/gi),
      ...rowText.matchAll(/JPY\s*([\d,.]+)/gi)
    ];
    
    if (currencyPriceMatches.length > 0) {
      for (const match of currencyPriceMatches) {
        if (match[1]) {
          price = parseFloat(match[1].replace(/[^0-9,.]/g, '').replace(',', '.').trim());
          if (price > 0) {
            sendLog(`Znaleziono cenę metodą 2: ${price}`, 'info');
            return price;
          }
        }
      }
    }
    
    // Metoda 3: Szukaj słów kluczowych
    const priceKeywordsMatches = rowText.match(/(?:price|preis|cena|precio|subtotal|total)[\s:]*[€£$¥]?\s*([\d,.]+)/i);
    if (priceKeywordsMatches && priceKeywordsMatches[1]) {
      price = parseFloat(priceKeywordsMatches[1].replace(/[^0-9,.]/g, '').replace(',', '.').trim());
      if (price > 0) {
        sendLog(`Znaleziono cenę metodą 3: ${price}`, 'info');
        return price;
      }
    }
    
    // Jeśli nie znaleziono ceny, zwróć 0
    return 0;
    
  } catch (e) {
    sendLog(`Błąd podczas wykrywania ceny: ${e.message}`, 'error');
    return 0;
  }
}

// Cache dla krajów z API - zmienne przeniesione do góry pliku

// Pobierz kraje z API Sellasist - z inteligentnym cache
async function fetchCountriesFromAPI(apiKey, apiEndpoint) {
  try {
    // Sprawdź cache - 24h dla krajów (rzadko się zmieniają)
    if (window.countriesCache && window.cacheTimestamp && (Date.now() - window.cacheTimestamp < window.CACHE_DURATION)) {
      sendLog(`Używam cache krajów (${window.countriesCache.length} krajów, cache ważny jeszcze ${Math.round((window.CACHE_DURATION - (Date.now() - window.cacheTimestamp)) / 1000 / 60 / 60)}h)`, 'debug');
      return window.countriesCache;
    }

    sendLog('Pobieram kraje z API Sellasist (pierwsze uruchomienie lub cache wygasł)...', 'info');
    const response = await fetch(`https://${apiEndpoint}/api/v1/countries`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'apiKey': apiKey,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Błąd pobierania krajów: ${response.status}`);
    }

    const countries = await response.json();
    
    // Zapisz do cache na 24h
    window.countriesCache = countries;
    window.cacheTimestamp = Date.now();
    
    sendLog(`✅ Pobrano i zapisano do cache ${countries.length} krajów (ważne przez 24h)`, 'success');
    return countries;
  } catch (error) {
    sendLog(`Błąd pobierania krajów z API: ${error.message}`, 'error');
    return null;
  }
}

// Znajdź ID kraju na podstawie nazwy używając API
async function getCountryID(countryName, apiKey, apiEndpoint) {
  if (!countryName || typeof countryName !== 'string') return null;
  
  // Ignoruj wartości które wyglądają jak kody pocztowe
  if (/^\d+$/.test(countryName)) {
    sendLog(`Wartość "${countryName}" wygląda jak kod pocztowy, nie jak nazwa kraju`, 'warning');
    return null;
  }
  
  const normalizedName = countryName.toLowerCase().trim();
  
  try {
    const countries = await fetchCountriesFromAPI(apiKey, apiEndpoint);
    if (!countries) {
      sendLog('Nie udało się pobrać krajów z API, używam fallback', 'warning');
      return getCountryIDFallback(countryName);
    }

    // Szukaj kraju po nazwie (różne języki)
    const foundCountry = countries.find(country => {
      const countryNameLower = country.name.toLowerCase();
      const countryCodeLower = country.code.toLowerCase();
      
      return countryNameLower === normalizedName || 
             countryCodeLower === normalizedName ||
             countryNameLower.includes(normalizedName) ||
             normalizedName.includes(countryNameLower);
    });

    if (foundCountry) {
      sendLog(`Znaleziono kraj w API: ${foundCountry.name} (${foundCountry.code}) -> ID ${foundCountry.id}`, 'info');
      return foundCountry.id;
    }

    sendLog(`Nie znaleziono kraju "${countryName}" w API, używam fallback`, 'warning');
    return getCountryIDFallback(countryName);
    
  } catch (error) {
    sendLog(`Błąd podczas wyszukiwania kraju: ${error.message}`, 'error');
    return getCountryIDFallback(countryName);
  }
}

// Mapowanie nazw krajów na kody ISO
function getCountryCode(countryName) {
  if (!countryName) return null;
  
  const normalizedName = countryName.toLowerCase().trim();
  
  const countryCodeMap = {
    'germany': 'DE',
    'deutschland': 'DE',
    'niemcy': 'DE',
    
    'france': 'FR',
    'francja': 'FR',
    'frankreich': 'FR',
    
    'netherlands': 'NL',
    'holandia': 'NL',
    'niederlande': 'NL',
    
    'united kingdom': 'GB',
    'uk': 'GB',
    'great britain': 'GB',
    
    'italy': 'IT',
    'włochy': 'IT',
    'italien': 'IT',
    
    'spain': 'ES',
    'hiszpania': 'ES',
    'spanien': 'ES',
    
    'poland': 'PL',
    'polska': 'PL',
    
    'sweden': 'SE',
    'szwecja': 'SE',
    'sverige': 'SE'
  };
  
  return countryCodeMap[normalizedName] || null;
}

// Fallback mapowanie krajów (na wypadek problemów z API)
function getCountryIDFallback(countryName) {
  if (!countryName || typeof countryName !== 'string') return null;
  
  const countryNameLower = countryName.toLowerCase().trim();
  
  // Podstawowe mapowanie krajów
  const countryMap = {
    // Niemcy
    'germany': '81',
    'niemcy': '81',
    'deutschland': '81',
    
    // Francja
    'france': '73',
    'francja': '73',
    'frankreich': '73',
    
    // Wielka Brytania
    'united kingdom': '230',
    'uk': '230',
    'great britain': '230',
    
    // Włochy
    'italy': '105',
    'włochy': '105',
    
    // Hiszpania
    'spain': '209',
    'hiszpania': '209',
    
    // Polska
    'poland': '170',
    'polska': '170',
    
    // Szwecja
    'sweden': '210',
    'szwecja': '210',
    'sverige': '210'
  };
  
  // Sprawdź dokładne dopasowanie
  if (countryMap[countryNameLower]) {
    sendLog(`Znaleziono kraj w fallback: ${countryNameLower} -> ID ${countryMap[countryNameLower]}`, 'info');
    return countryMap[countryNameLower];
  }
  
  // Określenie kraju na podstawie domeny Amazona
  const url = window.location.href;
  
  if (url.includes('amazon.de')) {
    sendLog(`Ustalono domyślny kraj na podstawie domeny amazon.de -> Niemcy (ID: 81)`, 'info');
    return '81';
  } else if (url.includes('amazon.co.uk')) {
    sendLog(`Ustalono domyślny kraj na podstawie domeny amazon.co.uk -> UK (ID: 230)`, 'info');
    return '230';
  } else if (url.includes('amazon.fr')) {
    sendLog(`Ustalono domyślny kraj na podstawie domeny amazon.fr -> Francja (ID: 73)`, 'info');
    return '73';
  } else if (url.includes('amazon.it')) {
    sendLog(`Ustalono domyślny kraj na podstawie domeny amazon.it -> Włochy (ID: 105)`, 'info');
    return '105';
  } else if (url.includes('amazon.es')) {
    sendLog(`Ustalono domyślny kraj na podstawie domeny amazon.es -> Hiszpania (ID: 209)`, 'info');
    return '209';
  } else if (url.includes('amazon.se')) {
    sendLog(`Ustalono domyślny kraj na podstawie domeny amazon.se -> Szwecja (ID: 210)`, 'info');
    return '210';
  }
  
  sendLog(`Nie udało się ustalić ID kraju dla: ${countryName}`, 'warning');
  return null;
}

// Funkcja do scrapowania wartości całego zamówienia (suma, VAT, suma brutto)
function extractOrderValues() {
  const result = {
    subtotal: null, // suma netto
    tax: null,      // VAT
    total: null,    // suma brutto
    shipping: null, // koszty wysyłki
    shippingVat: null, // VAT od wysyłki
    netProceeds: null, // "Sales proceeds net of VAT" - wartość netto dla UK
    shippingNet: null // koszty wysyłki netto
  };

  try {
    // Próba znalezienia wartości zamówienia - sprawdzamy różne możliwe selektory
    
    // Szukamy tabeli podsumowania
    const summaryElements = document.querySelectorAll('.order-summary, [data-test-id="order-summary"], .summary-section, .order-details-bordered-box-sale-proceeds');
    
    if (summaryElements && summaryElements.length > 0) {
      // Szukamy wartości w znalezionej tabeli
      for (const summary of summaryElements) {
        const text = summary.innerText || summary.textContent || '';
        
        // Szukamy w tekście wartości z etykietami
        const subtotalMatch = text.match(/subtotal|suma netto|wartość netto|zwischensumme|artikelsumme|items total/i);
        const taxMatch = text.match(/tax|vat|podatek|steuer|mwst|included vat/i);
        const totalMatch = text.match(/total|suma|razem|gesamtsumme|gesamt|grand total/i);
        const shippingMatch = text.match(/shipping total|koszty wysyłki|versandkosten/i);
        
        if (subtotalMatch || taxMatch || totalMatch || shippingMatch) {
          // Analizuj tekst linijka po linijce
          const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
          
          for (let i = 0; i < lines.length; i++) {
            const line = lines[i].toLowerCase();
            
            // Szukamy wartości numerycznych (z ewentualnym symbolem waluty)
            const valueMatch = line.match(/([€£$¥]?\s*[\d.,]+(?:\s*kr|\s*zł)?)/);
            
            if (line.includes('items total') || line.includes('subtotal') || line.includes('suma netto') || line.includes('zwischensumme') || line.includes('artikelsumme')) {
              if (valueMatch) {
                result.subtotal = parseFloat(valueMatch[1].replace(/[^0-9,.]/g, '').replace(',', '.'));
              }
            } else if (line.includes('included vat') || line.includes('tax') || line.includes('vat') || line.includes('podatek') || line.includes('steuer') || line.includes('mwst')) {
              if (valueMatch) {
                result.tax = parseFloat(valueMatch[1].replace(/[^0-9,.]/g, '').replace(',', '.'));
              }
            } else if (line.includes('shipping total') || line.includes('koszty wysyłki') || line.includes('versandkosten')) {
              if (valueMatch) {
                result.shipping = parseFloat(valueMatch[1].replace(/[^0-9,.]/g, '').replace(',', '.'));
              }
            } else if (line.includes('sales proceeds net of vat') || line.includes('net proceeds')) {
              if (valueMatch) {
                result.netProceeds = parseFloat(valueMatch[1].replace(/[^0-9,.]/g, '').replace(',', '.'));
                sendLog(`Znaleziono "Sales proceeds net of VAT": ${result.netProceeds}`, 'debug');
              }
            }
          }
          
          // Specjalne przetwarzanie dla UK VAT 0% - znajdź koszty wysyłki netto
          // W przykładzie: wysyłka netto = Sales proceeds net of VAT - cena produktu netto
          if (text.includes('sales proceeds net of vat') && text.includes('unit price')) {
            const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
            
            let unitPriceNet = null;
            let salesProceedsNet = null;
            
            for (const line of lines) {
              const valueMatch = line.match(/([€£$¥]?\s*[\d.,]+(?:\s*kr|\s*zł)?)/);
              
              if (line.toLowerCase().includes('unit price') && line.toLowerCase().includes('vat exclusive') && valueMatch) {
                unitPriceNet = parseFloat(valueMatch[1].replace(/[^0-9,.]/g, '').replace(',', '.'));
                sendLog(`UK VAT 0%: Znaleziono cenę jednostkową netto: ${unitPriceNet}`, 'debug');
              }
              
              if (line.toLowerCase().includes('sales proceeds net of vat') && valueMatch) {
                salesProceedsNet = parseFloat(valueMatch[1].replace(/[^0-9,.]/g, '').replace(',', '.'));
                sendLog(`UK VAT 0%: Znaleziono Sales proceeds net of VAT: ${salesProceedsNet}`, 'debug');
              }
            }
            
            // Oblicz koszty wysyłki netto
            if (unitPriceNet !== null && salesProceedsNet !== null) {
              result.shippingNet = salesProceedsNet - unitPriceNet;
              sendLog(`UK VAT 0%: Obliczono koszty wysyłki netto: ${salesProceedsNet} - ${unitPriceNet} = ${result.shippingNet}`, 'debug');
            }
          }
          
          for (let i = 0; i < lines.length; i++) {
            const line = lines[i].toLowerCase();
            
            // Szukamy wartości numerycznych (z ewentualnym symbolem waluty)
            const valueMatch = line.match(/([€£$¥]?\s*[\d.,]+(?:\s*kr|\s*zł)?)/);
            
            if (line.includes('grand total') || line.includes('total') || line.includes('suma') || line.includes('razem') || line.includes('gesamtsumme') || line.includes('gesamt')) {
              // Upewniamy się, że to nie jest subtotal
              if (!line.includes('subtotal') && !line.includes('sub-total') && valueMatch) {
                result.total = parseFloat(valueMatch[1].replace(/[^0-9,.]/g, '').replace(',', '.'));
              }
            }
          }
        }
      }
    }
    
    // Jeśli nie znaleziono wartości, próbujemy inne selektory
    if (result.subtotal === null || result.tax === null || result.total === null) {
      // Alternatywne selektory dla wartości zamówienia
      const subtotalElement = document.querySelector('[data-test-id="subtotal"], .subtotal-value, .subtotal');
      const taxElement = document.querySelector('[data-test-id="tax"], .tax-value, .vat');
      const totalElement = document.querySelector('[data-test-id="total"], .total-value, .grand-total');
      const shippingElement = document.querySelector('[data-test-id="shipping"], .shipping-value, .shipping-total');
      
      if (subtotalElement) {
        const text = subtotalElement.innerText || subtotalElement.textContent;
        const value = text.match(/([€£$¥]?\s*[\d.,]+(?:\s*kr|\s*zł)?)/);
        if (value) {
          result.subtotal = parseFloat(value[1].replace(/[^0-9,.]/g, '').replace(',', '.'));
        }
      }
      
      if (taxElement) {
        const text = taxElement.innerText || taxElement.textContent;
        const value = text.match(/([€£$¥]?\s*[\d.,]+(?:\s*kr|\s*zł)?)/);
        if (value) {
          result.tax = parseFloat(value[1].replace(/[^0-9,.]/g, '').replace(',', '.'));
        }
      }
      
      if (totalElement) {
        const text = totalElement.innerText || totalElement.textContent;
        const value = text.match(/([€£$¥]?\s*[\d.,]+(?:\s*kr|\s*zł)?)/);
        if (value) {
          result.total = parseFloat(value[1].replace(/[^0-9,.]/g, '').replace(',', '.'));
        }
      }
      
      if (shippingElement) {
        const text = shippingElement.innerText || shippingElement.textContent;
        const value = text.match(/([€£$¥]?\s*[\d.,]+(?:\s*kr|\s*zł)?)/);
        if (value) {
          result.shipping = parseFloat(value[1].replace(/[^0-9,.]/g, '').replace(',', '.'));
        }
      }
    }
    
    // Jeśli brakuje total, a mamy subtotal i tax, możemy go obliczyć
    if (result.total === null && result.subtotal !== null && result.tax !== null) {
      result.total = result.subtotal + result.tax;
      sendLog(`Obliczono total na podstawie subtotal + tax: ${result.subtotal} + ${result.tax} = ${result.total}`, 'debug');
    }
    
    // UWAGA: NIE dodawaj shipping do total - Grand total już zawiera koszty wysyłki!
    // Amazon pokazuje:
    // Items total: 14,99 GBP (produkty)
    // Shipping total: 0,49 GBP (wysyłka)  
    // Grand total: 15,48 GBP (już zawiera shipping!)
    
    sendLog(`Wykryte wartości zamówienia: subtotal=${result.subtotal}, tax=${result.tax}, total=${result.total}, shipping=${result.shipping}`, 'debug');
    
    return result;
  } catch (e) {
    sendLog(`Błąd podczas ekstrakcji wartości zamówienia: ${e.message}`, 'warning');
    return result;
  }
}

// Funkcja do wykrywania waluty na stronie
function detectCurrency() {
  try {
    // Różne metody wykrywania waluty
    const pageText = document.body.innerText;
    const url = window.location.href;
    
    sendLog(`Wykrywanie waluty dla URL: ${url}`, 'debug');
    
    // 1. PRIORYTET NAJWYŻSZY: Szukaj walut w tabelach podsumowania zamówienia (najbardziej precyzyjne)
    const summarySelectors = [
      '.order-summary td',
      '.order-details-bordered-box-sale-proceeds td',
      'table.a-keyvalue td',
      'td.a-text-right',
      'td.a-text-right span',
      '.summary-section td'
    ];
    
    // Sprawdź tabele podsumowania - szukaj "Grand total", "Items total" itp.
    for (const selector of summarySelectors) {
      try {
        const elements = document.querySelectorAll(selector);
        for (const element of elements) {
          const text = element.textContent || element.innerText || '';
          
          // Szukaj linii z "total", "shipping", "items" + waluta
          if (text.includes('total') || text.includes('Total') || text.includes('shipping') || text.includes('Shipping') || text.includes('Items')) {
            const currencyMatch = text.match(/\b(GBP|EUR|USD|SEK|NOK|DKK|PLN|CHF|CAD|AUD|JPY|CZK|HUF|RON|BGN)\b/gi);
            if (currencyMatch && currencyMatch.length > 0) {
              const currency = currencyMatch[0].toUpperCase();
              sendLog(`Wykryto walutę z tabeli podsumowania "${selector}": ${currency} (tekst: "${text.trim()}")`, 'debug');
              
              if (!isCurrencySupported(currency)) {
                sendLog(`BŁĄD: Nieobsługiwana waluta "${currency}" - przetwarzanie przerwane`, 'error');
                throw new Error(`Nieobsługiwana waluta: ${currency}. Wtyczka obsługuje tylko: EUR, GBP, USD, SEK, NOK, DKK, PLN, CHF, CAD, AUD, JPY, CZK, HUF, RON, BGN`);
              }
              
              return currency;
            }
          }
        }
      } catch (e) {
        if (e.message.includes('Nieobsługiwana waluta')) {
          throw e; // Przekaż błędy walut dalej
        }
        // Ignoruj inne błędy selektorów
      }
    }
    
    // 2. PRIORYTET 2: Szukaj walut w innych elementach DOM z cenami
    const priceSelectors = [
      'td.a-text-right span',
      '.a-price-currency',
      '.a-price .a-price-symbol',
      '[data-test-id="price"]',
      '.price',
      '.currency'
    ];
    
    for (const selector of priceSelectors) {
      try {
        const elements = document.querySelectorAll(selector);
        for (const element of elements) {
          const text = element.textContent || element.innerText || '';
          
          // Szukaj wzorców: "30,99 GBP", "30,99&nbsp;GBP", "€30,99", "£30,99"
          const currencyMatch = text.match(/(?:\d+[.,]\d+\s*(?:&nbsp;)?\s*(GBP|EUR|USD|SEK|NOK|DKK|PLN|CHF|CAD|AUD|JPY|CZK|HUF|RON|BGN))|([€£$¥])\s*\d+[.,]\d+|(GBP|EUR|USD|SEK|NOK|DKK|PLN|CHF|CAD|AUD|JPY|CZK|HUF|RON|BGN)\s*\d+[.,]\d+/gi);
          
          if (currencyMatch) {
            // Wyciągnij kod waluty z dopasowania
            let currency = null;
            for (const match of currencyMatch) {
              if (match.includes('GBP')) currency = 'GBP';
              else if (match.includes('EUR') || match.includes('€')) currency = 'EUR';
              else if (match.includes('USD') || match.includes('$')) currency = 'USD';
              else if (match.includes('SEK')) currency = 'SEK';
              else if (match.includes('NOK')) currency = 'NOK';
              else if (match.includes('DKK')) currency = 'DKK';
              else if (match.includes('PLN')) currency = 'PLN';
              else if (match.includes('CHF')) currency = 'CHF';
              else if (match.includes('CAD')) currency = 'CAD';
              else if (match.includes('AUD')) currency = 'AUD';
              else if (match.includes('JPY') || match.includes('¥')) currency = 'JPY';
              else if (match.includes('CZK')) currency = 'CZK';
              else if (match.includes('HUF')) currency = 'HUF';
              else if (match.includes('RON')) currency = 'RON';
              else if (match.includes('BGN')) currency = 'BGN';
              else if (match.includes('£')) currency = 'GBP';
              
              if (currency) {
                sendLog(`Wykryto walutę z elementu DOM "${selector}": ${currency} (tekst: "${text.trim()}")`, 'debug');
                
                // Sprawdź czy waluta jest obsługiwana
                if (!isCurrencySupported(currency)) {
                  sendLog(`BŁĄD: Nieobsługiwana waluta "${currency}" - przetwarzanie przerwane`, 'error');
                  throw new Error(`Nieobsługiwana waluta: ${currency}. Wtyczka obsługuje tylko: EUR, GBP, USD, SEK, NOK, DKK, PLN, CHF, CAD, AUD, JPY, CZK, HUF, RON, BGN`);
                }
                
                return currency;
              }
            }
          }
        }
      } catch (e) {
        // Ignoruj błędy selektorów, które mogą nie działać
      }
    }
    
    // 2. PRIORYTET 2: Szukaj symboli walut w tekście strony (fallback)
    if (pageText.includes('€')) {
      const currency = 'EUR';
      sendLog('Wykryto walutę z tekstu strony: EUR (symbol €)', 'debug');
      if (!isCurrencySupported(currency)) {
        sendLog(`BŁĄD: Nieobsługiwana waluta "${currency}" - przetwarzanie przerwane`, 'error');
        throw new Error(`Nieobsługiwana waluta: ${currency}`);
      }
      return currency;
    }
    if (pageText.includes('£')) {
      const currency = 'GBP';
      sendLog('Wykryto walutę z tekstu strony: GBP (symbol £)', 'debug');
      if (!isCurrencySupported(currency)) {
        sendLog(`BŁĄD: Nieobsługiwana waluta "${currency}" - przetwarzanie przerwane`, 'error');
        throw new Error(`Nieobsługiwana waluta: ${currency}`);
      }
      return currency;
    }
    if (pageText.includes('$')) {
      const currency = 'USD';
      sendLog('Wykryto walutę z tekstu strony: USD (symbol $)', 'debug');
      if (!isCurrencySupported(currency)) {
        sendLog(`BŁĄD: Nieobsługiwana waluta "${currency}" - przetwarzanie przerwane`, 'error');
        throw new Error(`Nieobsługiwana waluta: ${currency}`);
      }
      return currency;
    }
    if (pageText.includes('kr') && (pageText.includes('SEK') || url.includes('amazon.se'))) {
      sendLog('Wykryto walutę z tekstu strony: SEK (kr + kontekst)', 'debug');
      return 'SEK';
    }
    if (pageText.includes('kr') && (pageText.includes('NOK') || url.includes('amazon.no'))) {
      sendLog('Wykryto walutę z tekstu strony: NOK (kr + kontekst)', 'debug');
      return 'NOK';
    }
    if (pageText.includes('kr') && (pageText.includes('DKK') || url.includes('amazon.dk'))) {
      sendLog('Wykryto walutę z tekstu strony: DKK (kr + kontekst)', 'debug');
      return 'DKK';
    }
    if (pageText.includes('zł') || pageText.includes('PLN')) {
      sendLog('Wykryto walutę z tekstu strony: PLN (zł/PLN)', 'debug');
      return 'PLN';
    }
    if (pageText.includes('¥') || pageText.includes('JPY')) {
      sendLog('Wykryto walutę z tekstu strony: JPY (¥/JPY)', 'debug');
      return 'JPY';
    }
    if (pageText.includes('CHF')) {
      sendLog('Wykryto walutę z tekstu strony: CHF', 'debug');
      return 'CHF';
    }
    
    // 2. Szukaj kodów walut w tekście
    const currencyMatches = pageText.match(/\b(EUR|GBP|USD|SEK|NOK|DKK|PLN|CHF|CAD|AUD|JPY|CZK|HUF|RON|BGN)\b/gi);
    if (currencyMatches && currencyMatches.length > 0) {
      const mostCommon = currencyMatches[0].toUpperCase();
      sendLog(`Wykryto walutę z tekstu strony (kod): ${mostCommon}`, 'debug');
      return mostCommon;
    }
    
    // 3. FALLBACK: Sprawdź URL tylko jako ostateczność
    if (url.includes('amazon.de')) {
      sendLog('Wykryto walutę z URL (fallback) amazon.de: EUR', 'debug');
      return 'EUR';
    }
    if (url.includes('amazon.co.uk')) {
      sendLog('Wykryto walutę z URL (fallback) amazon.co.uk: GBP', 'debug');
      return 'GBP';
    }
    if (url.includes('amazon.com')) {
      sendLog('Wykryto walutę z URL (fallback) amazon.com: USD', 'debug');
      return 'USD';
    }
    if (url.includes('amazon.fr')) {
      sendLog('Wykryto walutę z URL (fallback) amazon.fr: EUR', 'debug');
      return 'EUR';
    }
    if (url.includes('amazon.it')) {
      sendLog('Wykryto walutę z URL (fallback) amazon.it: EUR', 'debug');
      return 'EUR';
    }
    if (url.includes('amazon.es')) {
      sendLog('Wykryto walutę z URL (fallback) amazon.es: EUR', 'debug');
      return 'EUR';
    }
    if (url.includes('amazon.nl')) {
      sendLog('Wykryto walutę z URL (fallback) amazon.nl: EUR', 'debug');
      return 'EUR';
    }
    if (url.includes('amazon.se')) {
      sendLog('Wykryto walutę z URL (fallback) amazon.se: SEK', 'debug');
      return 'SEK';
    }
    if (url.includes('amazon.no')) {
      sendLog('Wykryto walutę z URL (fallback) amazon.no: NOK', 'debug');
      return 'NOK';
    }
    if (url.includes('amazon.dk')) {
      sendLog('Wykryto walutę z URL (fallback) amazon.dk: DKK', 'debug');
      return 'DKK';
    }
    if (url.includes('amazon.pl')) {
      sendLog('Wykryto walutę z URL (fallback) amazon.pl: PLN', 'debug');
      return 'PLN';
    }
    if (url.includes('amazon.ca')) {
      sendLog('Wykryto walutę z URL (fallback) amazon.ca: CAD', 'debug');
      return 'CAD';
    }
    if (url.includes('amazon.au')) {
      sendLog('Wykryto walutę z URL (fallback) amazon.au: AUD', 'debug');
      return 'AUD';
    }
    if (url.includes('amazon.jp')) {
      sendLog('Wykryto walutę z URL (fallback) amazon.jp: JPY', 'debug');
      return 'JPY';
    }
    
    // 4. Szukaj tekstowych nazw walut
    if (pageText.includes('Euro')) return 'EUR';
    if (pageText.includes('Pound') || pageText.includes('Sterling')) return 'GBP';
    if (pageText.includes('Dollar')) return 'USD';
    if (pageText.includes('Krona') || pageText.includes('Kronor')) return 'SEK';
    if (pageText.includes('Krone') || pageText.includes('Kroner')) {
      // Może być NOK lub DKK - sprawdź kontekst
      if (pageText.includes('Norwegian') || pageText.includes('Norge')) return 'NOK';
      if (pageText.includes('Danish') || pageText.includes('Danmark')) return 'DKK';
      return 'NOK'; // Domyślnie NOK jeśli nie można rozróżnić
    }
    
    // 5. Sprawdź elementy DOM z atrybutami walut
    const currencyElements = document.querySelectorAll('[data-currency], [currency], .currency');
    for (const element of currencyElements) {
      const currencyAttr = element.getAttribute('data-currency') || 
                          element.getAttribute('currency') || 
                          element.textContent;
      if (currencyAttr && /^[A-Z]{3}$/.test(currencyAttr.trim())) {
        sendLog(`Wykryto walutę z atrybutu DOM: ${currencyAttr.trim()}`, 'debug');
        return currencyAttr.trim().toUpperCase();
      }
    }
    
    // Nie znaleziono jednoznacznej waluty
    sendLog('Nie udało się wykryć waluty ze strony Amazon', 'debug');
    return null;
  } catch (e) {
    sendLog(`Błąd podczas wykrywania waluty: ${e.message}`, 'warning');
    return null;
  }
}

// Funkcja do znajdowania elementu z adresem (wypróbuje różne selektory)
function findAddressElement() {
  // Różne możliwe selektory dla adresu (Amazon może mieć różne struktury DOM)
  const selectors = [
    '[data-test-id="shipping-section-buyer-address"]',
    '.buyer-address',
    '.shipping-address',
    '.ship-to',
    '[aria-labelledby="ship-to-header"]',
    // Selektory dla elementów zawierających słowo "ship to" lub podobne
    'div:contains("Ship to")',
    'div:contains("Shipping address")',
    'div:contains("Buyer address")'
  ];

  // Sprawdź każdy selektor
  for (const selector of selectors) {
    try {
      const element = document.querySelector(selector);
      if (element) {
        sendLog(`Znaleziono adres używając selektora: ${selector}`);
        return element;
      }
    } catch (e) {
      // Ignoruj błędy przy selektorach, które nie działają
    }
  }

  // Próba alternatywnej metody - wyszukaj tekst "Ship to" i znajdź najbliższy element zawierający adres
  const allElements = document.querySelectorAll('div, section, p, span');
  for (const el of allElements) {
    if (el.textContent.includes('Ship to') || 
        el.textContent.includes('Shipping address') || 
        el.textContent.includes('Buyer address')) {
      // Spróbuj znaleźć adres w tym elemencie lub najbliższych potomkach
      return el.closest('div') || el;
    }
  }

  // Szukaj dowolnego elementu zawierającego możliwy kod pocztowy
  const postalCodeRegex = /\b\d{5}\b/; // podstawowy wzorzec kodu pocztowego
  for (const el of allElements) {
    if (postalCodeRegex.test(el.textContent)) {
      // To może być adres
      return el.closest('div') || el;
    }
  }

  // Nie znaleziono adresu
  return null;
}

// Funkcja do ekstrahowania danych adresowych
function extractAddressData(addressElement) {
  // Domyślne wartości
  const result = {
    name: '',
    surname: '',
    street: '',
    homeNumber: '',
    city: '',
    postcode: '',
    country: '',
    phone: '',
    formattedAddress: '',
    isValid: false
  };

  try {
    // Pobierz tekst adresu, usuń zbędne białe znaki i podziel na linie
    const addressText = addressElement.innerText || addressElement.textContent;
    const addressLines = addressText.split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);

    result.formattedAddress = addressLines.join(', ');

    // Szukaj numeru telefonu w całym elemencie adresu
    const phoneElement = addressElement.closest('.a-box-inner')?.querySelector('[data-test-id="shipping-section-phone"]');
    if (phoneElement) {
      result.phone = phoneElement.textContent.trim();
      sendLog(`Znaleziono numer telefonu: ${result.phone}`, 'debug');
    } else {
      // Próbuj znaleźć numer telefonu w tekście
      const phoneMatch = addressText.match(/Telefon:\s*(\d+)/);
      if (phoneMatch && phoneMatch[1]) {
        result.phone = phoneMatch[1].trim();
        sendLog(`Znaleziono numer telefonu w tekście: ${result.phone}`, 'debug');
      }
    }

    // Linia 1 - zazwyczaj imię i nazwisko
    if (addressLines.length > 0) {
      const fullName = addressLines[0].trim();
      
      // Próbujemy znaleźć imię i nazwisko w różnych formatach
      const namePatterns = [
        // Format: "Imię Nazwisko"
        /^([A-Za-zÀ-ÿ]+)\s+([A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)*)$/,
        // Format: "Nazwisko, Imię"
        /^([A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)*),\s*([A-Za-zÀ-ÿ]+)$/,
        // Format: "Imię Nazwisko Nazwisko"
        /^([A-Za-zÀ-ÿ]+)\s+([A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)*)$/
      ];

      let nameFound = false;
      for (const pattern of namePatterns) {
        const match = fullName.match(pattern);
        if (match) {
          // Sprawdź czy to format "Nazwisko, Imię"
          if (fullName.includes(',')) {
            result.surname = match[1].trim();
            result.name = match[2].trim();
          } else {
            result.name = match[1].trim();
            result.surname = match[2].trim();
          }
          nameFound = true;
          break;
        }
      }

      // Jeśli nie znaleziono wzorca, spróbuj prostszego podziału
      if (!nameFound) {
        const nameParts = fullName.split(' ');
        if (nameParts.length > 0) {
          result.name = nameParts[0];
          result.surname = nameParts.slice(1).join(' ');
        }
      }

      // Jeśli imię lub nazwisko jest puste, spróbuj użyć całej linii jako nazwiska
      if (!result.name && !result.surname) {
        result.surname = fullName;
      }
    }

    // Linia 2 - zazwyczaj ulica
    if (addressLines.length > 1) {
      const streetLine = addressLines[1].trim();
      const lastSpace = streetLine.lastIndexOf(' ');
      if (lastSpace !== -1) {
        result.street = streetLine.substring(0, lastSpace);
        result.homeNumber = streetLine.substring(lastSpace + 1);
      } else {
        result.street = streetLine;
      }
    }

    // Pozostałe linie - miasto, kod pocztowy, kraj
    let cityFound = false;
    let postcodeFound = false;
    let countryFound = false;

    // Najpierw próbujemy znaleźć typowy kod pocztowy wśród wszystkich linii
    const postCodePattern = /\b(?:\d{5}|\d{4,5}-\d{3,4}|[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2})\b/;
    
    for (let i = 2; i < addressLines.length; i++) {
      const line = addressLines[i].trim();
      
      // Szukanie kodu pocztowego
      const postCodeMatch = line.match(postCodePattern);
      if (postCodeMatch && !postcodeFound) {
        result.postcode = postCodeMatch[0];
        postcodeFound = true;
        
        // Jeśli w linii z kodem pocztowym jest też miasto, wyciągnij je
        const cityPart = line.replace(postCodeMatch[0], '').trim();
        if (cityPart && !cityFound) {
          result.city = cityPart;
          cityFound = true;
        }
        continue;
      }
      
      // Typowe nazwy krajów
      const countryNames = ['Germany', 'Deutschland', 'Niemcy', 'Spain', 'España', 'Hiszpania', 
                            'France', 'Frankreich', 'Francja', 'United Kingdom', 'UK', 'Wielka Brytania',
                            'Italy', 'Italien', 'Włochy', 'Poland', 'Polen', 'Polska'];
      
      // Sprawdź czy linia zawiera nazwę kraju
      if (!countryFound && countryNames.some(country => line.includes(country))) {
        result.country = line;
        countryFound = true;
        continue;
      }
      
      // Jeśli nie znaleźliśmy jeszcze miasta, zakładamy, że bieżąca linia to miasto
      if (!cityFound) {
        result.city = line;
        cityFound = true;
        continue;
      }
      
      // Jeśli nie znaleźliśmy kodu pocztowego i linia ma tylko cyfry, to może być kod pocztowy
      if (!postcodeFound && /^\d+$/.test(line)) {
        result.postcode = line;
        postcodeFound = true;
        continue;
      }
      
      // Ostatnia linia często jest krajem
      if (i === addressLines.length - 1 && !countryFound) {
        result.country = line;
      }
    }
    
    // Dodatkowa logika walidacyjna - jeśli miasto jest w polu kodu pocztowego i odwrotnie
    if (!cityFound && result.postcode && isLikelyCity(result.postcode)) {
      result.city = result.postcode;
      result.postcode = '';
    }
    
    // Jeśli nie znaleźliśmy kodu pocztowego, sprawdź czy w mieście jest kod pocztowy
    if (!postcodeFound && result.city) {
      const cityPostCodeMatch = result.city.match(postCodePattern);
      if (cityPostCodeMatch) {
        result.postcode = cityPostCodeMatch[0];
        result.city = result.city.replace(cityPostCodeMatch[0], '').trim();
      }
    }
    
    // Sprawdź, czy mamy wystarczające dane
    if ((result.name || result.surname) && (result.city || result.street || result.postcode)) {
      result.isValid = true;
    }

    // Logowanie znalezionych danych
    sendLog(`Znaleziono dane adresowe: Imię: "${result.name}", Nazwisko: "${result.surname}"`, 'debug');
    sendLog(`Numer telefonu: ${result.phone || 'nie znaleziono'}`, 'debug');
    sendLog(`Pełny adres: ${result.formattedAddress}`, 'debug');

    return result;
  } catch (e) {
    sendLog(`Błąd podczas ekstrakcji danych adresowych: ${e.message}`, 'error');
    return result;
  }
}

// Funkcja sprawdzająca czy tekst jest prawdopodobnie nazwą miasta, a nie kodem pocztowym
function isLikelyCity(text) {
  // Typowe nazwy miast w krajach europejskich
  const commonCities = ['Berlin', 'Hamburg', 'Munchen', 'Frankfurt', 'Koln', 'Madrid', 'Barcelona', 'Valencia', 
                        'Sevilla', 'Burgos', 'Paris', 'Lyon', 'Marseille', 'London', 'Manchester', 'Liverpool',
                        'Rome', 'Milan', 'Warsaw', 'Krakow'];
  
  // Sprawdź czy tekst zawiera jakąś znaną nazwę miasta
  for (const city of commonCities) {
    if (text.includes(city)) return true;
  }
  
  // Sprawdź czy to nie jest format kodu pocztowego
  const isPostCodeFormat = /^\d{4,5}(-\d{3,4})?$/.test(text) || // Format ES, DE, FR, IT, PL
                           /^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/.test(text); // Format UK
  
  // Jeśli to nie jest format kodu pocztowego i zawiera litery, to prawdopodobnie jest miastem
  return !isPostCodeFormat && /[a-zA-Z]/.test(text);
}

// Funkcja do obliczania stawki VAT jako liczby całkowitej (bez symbolu %)
function calculateTaxRate(matchedProduct, orderLine) {
  // Próbujemy znaleźć stawkę VAT z różnych źródeł
  
  // 1. Jeśli mamy kwotę VAT i cenę netto, obliczymy dokładną stawkę
  if (matchedProduct && matchedProduct.tax_amount > 0 && matchedProduct.price_net > 0) {
    const exactRate = Math.round((matchedProduct.tax_amount / matchedProduct.price_net) * 100);
    sendLog(`Obliczono dokładną stawkę VAT z kwoty podatku i ceny netto: ${exactRate}%`, 'info');
    return exactRate;
  }
  
  // 2. Jeśli mamy cenę netto i brutto, obliczymy dokładną stawkę
  if (matchedProduct && matchedProduct.price_net > 0 && matchedProduct.price > matchedProduct.price_net) {
    const vatAmount = matchedProduct.price - matchedProduct.price_net;
    const exactRate = Math.round((vatAmount / matchedProduct.price_net) * 100);
    sendLog(`Obliczono dokładną stawkę VAT z ceny brutto i netto: ${exactRate}%`, 'info');
    return exactRate;
  }
  
  // 3. Jeśli produkt ma już wartość tax_rate
  if (matchedProduct && matchedProduct.tax_rate > 0) {
    return Math.round(matchedProduct.tax_rate);
  }
  
  // 4. Jeśli mamy tax_rate z oryginalnego zamówienia
  if (orderLine.tax_rate && orderLine.tax_rate > 0) {
    return Math.round(orderLine.tax_rate);
  }
  
  // 5. Jeśli mamy tax z oryginalnego zamówienia
  if (orderLine.tax && orderLine.tax > 0) {
    return Math.round(orderLine.tax);
  }
  
  // 6. Sprawdź na podstawie kraju przypisanego do zamówienia
  const countryCode = window.location.href.includes('amazon.de') ? 'DE' :
                     window.location.href.includes('amazon.co.uk') ? 'GB' :
                     window.location.href.includes('amazon.fr') ? 'FR' :
                     window.location.href.includes('amazon.es') ? 'ES' :
                     window.location.href.includes('amazon.it') ? 'IT' : 'EU';
                     
  // Standardowe stawki VAT w Europie
  const vatRates = {
    'DE': 19, // Niemcy (standardowa stawka)
    'DE_REDUCED': 7, // Niemcy (obniżona stawka) - żywność, książki
    'GB': 20, // UK (standardowa stawka)
    'FR': 20, // Francja (standardowa stawka)
    'FR_REDUCED': 10, // Francja (obniżona stawka)
    'ES': 21, // Hiszpania (standardowa stawka)
    'ES_REDUCED': 10, // Hiszpania (obniżona stawka) - żywność, leki
    'IT': 22, // Włochy (standardowa stawka)
    'PL': 23, // Polska (standardowa stawka)
    'EU': 21  // Domyślnie dla EU
  };
  
  // Dla Hiszpanii sprawdzamy czy to może być żywność (obniżona stawka)
  if (countryCode === 'ES' && 
     (orderLine.name.toLowerCase().includes('piruleta') || 
      orderLine.name.toLowerCase().includes('dulce') || 
      orderLine.name.toLowerCase().includes('caramelo') ||
      orderLine.name.toLowerCase().includes('chocolate') ||
      orderLine.name.toLowerCase().includes('comida'))) {
    
    sendLog(`Produkt wygląda na żywność w Hiszpanii, używam obniżonej stawki VAT: ${vatRates['ES_REDUCED']}%`, 'info');
    return vatRates['ES_REDUCED'];
  }
  
  // Dla Niemiec sprawdzamy czy to może być żywność (obniżona stawka)
  if (countryCode === 'DE' && 
     (orderLine.name.toLowerCase().includes('lebensmittel') || 
      orderLine.name.toLowerCase().includes('essen') || 
      orderLine.name.toLowerCase().includes('nahrung') ||
      orderLine.name.toLowerCase().includes('süßigkeit') ||
      orderLine.name.toLowerCase().includes('lutscher'))) {
    
    sendLog(`Produkt wygląda na żywność w Niemczech, używam obniżonej stawki VAT: ${vatRates['DE_REDUCED']}%`, 'info');
    return vatRates['DE_REDUCED'];
  }
  
  // Dla Francji sprawdzamy czy to może być żywność (obniżona stawka)
  if (countryCode === 'FR' && 
     (orderLine.name.toLowerCase().includes('nourriture') || 
      orderLine.name.toLowerCase().includes('aliment') || 
      orderLine.name.toLowerCase().includes('sucre') ||
      orderLine.name.toLowerCase().includes('chocolat'))) {
    
    sendLog(`Produkt wygląda na żywność we Francji, używam obniżonej stawki VAT: ${vatRates['FR_REDUCED']}%`, 'info');
    return vatRates['FR_REDUCED'];
  }
  
  sendLog(`Używam standardowej stawki VAT dla kraju ${countryCode}: ${vatRates[countryCode]}%`, 'info');
  return vatRates[countryCode] || 21;
}

// Funkcja do wykrywania transakcji WDT (0% VAT dla B2B)
function detectWDTTransaction(row, priceGross, vatAmount) {
  try {
    const rowText = row.innerText || row.textContent || '';
    
    // 1. Sprawdź czy kwota VAT = 0 ale cena > 0 (typowe dla WDT)
    if (priceGross > 0 && (vatAmount === 0 || vatAmount === null)) {
      sendLog(`Możliwa transakcja WDT: cena ${priceGross}, VAT ${vatAmount}`, 'debug');
      
      // 2. Szukaj wskaźników transakcji B2B/WDT w tekście
      const wdtIndicators = [
        'VAT exclusive',
        'VAT-free',
        'No VAT',
        'B2B',
        'Business',
        'Intra-community',
        'WDT',
        'Wewnątrzwspólnotowa',
        '0% VAT',
        'VAT 0%',
        'Tax-free',
        'Exempt'
      ];
      
      const hasWDTIndicator = wdtIndicators.some(indicator => 
        rowText.toLowerCase().includes(indicator.toLowerCase())
      );
      
      if (hasWDTIndicator) {
        sendLog(`Wykryto wskaźnik WDT w tekście produktu`, 'info');
        return true;
      }
      
      // 3. Sprawdź czy w tabeli podsumowania nie ma podziału na netto/brutto
      const summaryTable = row.querySelector('td:nth-child(8) > div > table.a-normal.a-spacing-none');
      if (summaryTable) {
        const summaryText = summaryTable.innerText || '';
        
        // Jeśli nie ma słów "VAT", "Tax", "Included" to może być WDT
        const hasVatInfo = summaryText.toLowerCase().includes('vat') || 
                          summaryText.toLowerCase().includes('tax') ||
                          summaryText.toLowerCase().includes('included');
        
        if (!hasVatInfo && priceGross > 0) {
          sendLog(`Brak informacji o VAT w tabeli podsumowania - możliwa transakcja WDT`, 'debug');
          return true;
        }
      }
    }
    
    return false;
  } catch (error) {
    sendLog(`Błąd wykrywania transakcji WDT: ${error.message}`, 'error');
    return false;
  }
}

// Funkcja do ekstrahowania danych produktów - zoptymalizowana
function extractProductData(useUkVatZero = false) {
  const result = { products: [] };

  try {
    // Zoptymalizowane selektory DOM - sprawdź wszystkie naraz
    const selectors = [
      'table.a-keyvalue tbody tr',
      '[data-test-id="item-row"]', 
      '.item-row', 
      '.product-row'
    ];
    
    let productRows = null;
    let usedSelector = '';
    
    for (const selector of selectors) {
      productRows = document.querySelectorAll(selector);
      if (productRows.length > 0) {
        usedSelector = selector;
        break;
      }
    }
    
    if (productRows && productRows.length > 0) {
      sendLog(`Znaleziono ${productRows.length} wierszy używając selektora: ${usedSelector}`, 'debug');
      productRows.forEach(row => processProductRow(row, useUkVatZero));
      sendLog(`Przetworzono ${productRows.length} produktów`, 'debug');
    } else {
      sendLog('Nie znaleziono żadnych wierszy produktów!', 'warning');
    }

    // Usuń duplikaty na podstawie nazwy produktu i SKU
    const uniqueProducts = [];
    const seenProducts = new Set();
    
    for (const product of result.products) {
      const productKey = `${product.name}-${product.ean}-${product.catalog_number}`;
      if (!seenProducts.has(productKey)) {
        seenProducts.add(productKey);
        uniqueProducts.push(product);
      } else {
        sendLog(`Usunięto duplikat produktu: ${product.name} (SKU: ${product.ean})`, 'warning');
      }
    }
    
    result.products = uniqueProducts;
    sendLog(`Po usunięciu duplikatów pozostało ${result.products.length} produktów`, 'info');
    return result;
  } catch (e) {
    sendLog(`Błąd podczas ekstrakcji danych produktów: ${e.message}`, 'error');
    return result;
  }

  // Funkcja do przetwarzania wiersza produktu
  function processProductRow(row, useUkVatZero = false) {
    try {
      // Sprawdź status, czy nie jest anulowany
      let status = '';
      const statusLabel = row.querySelector('[data-test-id="item-status-label"]');
      if (statusLabel) {
        status = statusLabel.innerText.trim();
      }
      if (status && status.toLowerCase().includes('cancelled')) {
        sendLog(`Produkt anulowany został dodany do listy produktów (status: ${status})`, 'warning');
        // NIE returnuj! Produkt musi być dodany do listy produktów!
      }
      
      // Bezpieczne pobieranie danych produktu
      const productNameElement = row.querySelector('.myo-list-orders-product-name-cell a, .item-name, .product-name');
      const productName = productNameElement ? productNameElement.innerText.trim() : '';
      
      const asinElement = row.querySelector('.product-name-column-word-wrap-break-all b, [data-test-id="asin"], .asin');
      const asin = asinElement ? asinElement.innerText.trim() : '';
      
      // ULEPSZONE POBIERANIE SKU
      let sku = '';
      
      // Metoda 1: Szukaj bezpośrednio elementów z SKU
      const skuElements = row.querySelectorAll('.product-name-column-word-wrap-break-all, [data-test-id="sku"], .sku');
      for (const el of skuElements) {
        const text = el.innerText || '';
        if (text.includes('SKU:') || text.includes('sku:')) {
          sku = text.split(':')[1]?.trim() || '';
          sendLog(`Znaleziono SKU metodą 1: ${sku}`, 'info');
          break;
        }
      }
      
      // Metoda 2: Szukaj w całej zawartości wiersza tekstów "SKU" i "EAN"
      if (!sku) {
        const rowText = row.innerText || '';
        const skuMatch = rowText.match(/SKU:?\s*([A-Za-z0-9\-\.]+)/i);
        if (skuMatch && skuMatch[1]) {
          sku = skuMatch[1].trim();
          sendLog(`Znaleziono SKU metodą 2: ${sku}`, 'info');
        } else {
          const eanMatch = rowText.match(/EAN:?\s*([0-9]{8,13})/i);
          if (eanMatch && eanMatch[1]) {
            sku = eanMatch[1].trim();
            sendLog(`Znaleziono EAN jako SKU metodą 2: ${sku}`, 'info');
          }
        }
      }
      
      // Metoda 3: Sprawdź, czy ASIN może służyć jako SKU
      if (!sku && asin) {
        sku = asin;
        sendLog(`Używam ASIN jako SKU: ${sku}`, 'info');
      }
      
      const quantityElement = row.querySelector('td[data-test-id="item-quantity-heading"], td:nth-child(5), .quantity');
      const quantity = quantityElement ? parseInt(quantityElement.innerText.trim(), 10) || 1 : 1;
      
      // DOKŁADNE WYKRYWANIE CEN I STAWKI VAT
      let priceNet = 0;    // Cena netto
      let priceGross = 0;  // Cena brutto
      let vatAmount = 0;   // Kwota VAT
      let vatRate = 0;     // Stawka VAT w procentach
      
      // 1. Pobieranie ceny brutto z tabeli podsumowania
      const priceGrossElement = row.querySelector('td:nth-child(8) > div > table.a-normal.a-spacing-none > tbody > div:nth-child(2) > div:nth-child(2) > span');
      if (priceGrossElement) {
        const priceText = priceGrossElement.innerText || priceGrossElement.textContent;
        const priceMatch = priceText.match(/([€£$]?\s*[\d.,]+)/);
        if (priceMatch && priceMatch[1]) {
          priceGross = parseFloat(priceMatch[1].replace(/[^0-9,.]/g, '').replace(',', '.').trim());
          sendLog(`Znaleziono cenę brutto z tabeli podsumowania: ${priceGross}`, 'info');
        }
      }
      
      // 1a. Dla UK VAT 0% - pobierz cenę netto z kolumny "Unit price (VAT exclusive)"
      if (useUkVatZero) {
        const priceNetElement = row.querySelector('td:nth-child(6) span, td.a-text-right:nth-child(6) span');
        if (priceNetElement) {
          const priceNetText = priceNetElement.innerText || priceNetElement.textContent;
          const priceNetMatch = priceNetText.match(/([€£$]?\s*[\d.,]+)/);
          if (priceNetMatch && priceNetMatch[1]) {
            priceNet = parseFloat(priceNetMatch[1].replace(/[^0-9,.]/g, '').replace(',', '.').trim());
            priceGross = priceNet; // Dla UK VAT 0%, cena netto = cena brutto
            sendLog(`UK VAT 0%: Znaleziono cenę netto z kolumny VAT exclusive: ${priceNet}`, 'info');
          }
        }
      }
      
      // 2. Pobieranie kwoty VAT z tabeli podsumowania
      const vatElement = row.querySelector('td:nth-child(8) > div > table.a-normal.a-spacing-none > tbody > div:nth-child(2) > div:nth-child(3) > span');
      if (vatElement) {
        const vatText = vatElement.innerText || vatElement.textContent;
        const vatMatch = vatText.match(/([€£$]?\s*[\d.,]+)/);
        if (vatMatch && vatMatch[1]) {
          vatAmount = parseFloat(vatMatch[1].replace(/[^0-9,.]/g, '').replace(',', '.').trim());
          sendLog(`Znaleziono kwotę VAT z tabeli podsumowania: ${vatAmount}`, 'info');
        }
      }
      
      // 3. Obliczanie stawki VAT
      
      // Sprawdź czy to transakcja WDT (0% VAT dla B2B)
      const isWDTTransaction = detectWDTTransaction(row, priceGross, vatAmount);
      
      if (useUkVatZero) {
        // Dla UK VAT 0% używamy cen netto (bez VAT)
        vatRate = 0;
        priceNet = priceGross; // Cena brutto to faktycznie cena netto dla UK VAT 0%
        vatAmount = 0;
        sendLog(`UK VAT 0%: Ustawiono stawkę VAT na 0%, cena netto: ${priceNet}`, 'info');
      } else if (isWDTTransaction) {
        // Transakcja WDT - 0% VAT dla B2B
        vatRate = 0;
        priceNet = priceGross; // Cena bez VAT
        vatAmount = 0;
        sendLog(`WDT B2B: Wykryto transakcję 0% VAT, cena netto: ${priceNet}`, 'info');
      } else if (vatAmount > 0 && priceGross > 0) {
        const priceNet = priceGross - vatAmount;
        vatRate = Math.round((vatAmount / priceNet) * 100);
        sendLog(`Obliczono stawkę VAT na podstawie kwoty VAT i ceny brutto: ${vatRate}%`, 'info');
      } else {
        // Użyj funkcji calculateTaxRate
        const countryCode = window.location.href.includes('amazon.de') ? 'DE' :
                           window.location.href.includes('amazon.co.uk') ? 'GB' :
                           window.location.href.includes('amazon.fr') ? 'FR' :
                           window.location.href.includes('amazon.es') ? 'ES' :
                           window.location.href.includes('amazon.it') ? 'IT' : 'EU';
                               
        const vatRates = {
          'DE': 19, // Niemcy
          'GB': 20, // UK
          'FR': 20, // Francja
          'ES': 21, // Hiszpania
          'IT': 22, // Włochy
          'PL': 23, // Polska
          'EU': 21  // Domyślnie dla EU
        };
        
        vatRate = vatRates[countryCode] || 21;
        sendLog(`Używam stawki VAT na podstawie kraju (${countryCode}): ${vatRate}%`, 'info');
      }
      
      const orderItemElement = row.querySelector('td:nth-child(4), [data-test-id="order-item-id"]');
      let orderItemId = '';
      if (orderItemElement) {
        const orderItemText = orderItemElement.innerText;
        orderItemId = orderItemText.includes(':') ? orderItemText.split(':')[1].trim() : '';
      }
      
      // Dodaj produkt tylko jeśli mamy nazwę
      if (productName) {
        // WYKRYWANIE PROMOCJI - sprawdź czy jest "Item total" po promocji
        let finalItemTotal = null;
        let promotionAmount = 0;
        let hasPromotion = false;
        
        // Szukaj w kolumnie "Proceeds" tabeli z "Item subtotal", "Promotion", "Item total"
        const proceedsElement = row.querySelector('td:nth-child(8), td:last-child');
        if (proceedsElement) {
          const proceedsText = proceedsElement.innerText || proceedsElement.textContent || '';
          
          // Sprawdź czy są informacje o promocji
          if (proceedsText.includes('Promotion') && proceedsText.includes('Item total')) {
            hasPromotion = true;
            
            // Wyciągnij kwotę promocji
            const promotionMatch = proceedsText.match(/Promotion[:\s]*-?\s*([€£$¥]?\s*[\d.,]+)/i);
            if (promotionMatch && promotionMatch[1]) {
              promotionAmount = parseFloat(promotionMatch[1].replace(/[^0-9,.]/g, '').replace(',', '.').trim());
              sendLog(`Znaleziono promocję: -${promotionAmount}`, 'info');
            }
            
            // Wyciągnij "Item total" (cena po promocji)
            const itemTotalMatch = proceedsText.match(/Item total[:\s]*([€£$¥]?\s*[\d.,]+)/i);
            if (itemTotalMatch && itemTotalMatch[1]) {
              finalItemTotal = parseFloat(itemTotalMatch[1].replace(/[^0-9,.]/g, '').replace(',', '.').trim());
              sendLog(`Znaleziono Item total po promocji: ${finalItemTotal}`, 'info');
            }
          }
        }
        
        // Oblicz cenę jednostkową - użyj ceny po promocji jeśli dostępna
        let pricePerUnit = priceGross;
        
        if (hasPromotion && finalItemTotal !== null && quantity > 0) {
          // Użyj ceny po promocji
          pricePerUnit = finalItemTotal / quantity;
          sendLog(`PROMOCJA: Obliczono cenę jednostkową po promocji: ${finalItemTotal} / ${quantity} = ${pricePerUnit} (zamiast standardowej ${priceGross})`, 'info');
        } else if (quantity > 1 && priceGross > 0) {
          // Standardowe obliczenie bez promocji
          pricePerUnit = priceGross / quantity;
          sendLog(`Przeliczono cenę jednostkową: ${priceGross} / ${quantity} = ${pricePerUnit}`, 'info');
        }
        const product = {
          name: productName,
          ean: sku,  // Używamy SKU jako EAN
          quantity,
          price: pricePerUnit, // Używamy ceny jednostkowej (po promocji jeśli dostępna)
          tax_rate: vatRate,  // Używamy stawki VAT w procentach
          tax_amount: vatAmount, // Zachowujemy kwotę VAT
          catalog_number: asin,
          additional_information: `Order Item ID: ${orderItemId}${hasPromotion ? `, Promotion: -${promotionAmount}` : ''}`,
          status: status // Dodajemy status produktu
        };
        result.products.push(product);
        const promotionInfo = hasPromotion ? ` [PROMOCJA: -${promotionAmount}]` : '';
        sendLog(`Dodano produkt: ${productName} (${quantity}x) - ${pricePerUnit}${promotionInfo}, SKU/EAN: ${sku || 'brak'}, Stawka VAT: ${vatRate}%`, 'success');
      } else {
        sendLog('Pominięto produkt bez nazwy', 'warning');
      }
    } catch (productError) {
      sendLog(`Błąd przy scrapowaniu produktu: ${productError.message}`, 'error');
    }
  }
}

// Ulepszona funkcja sendLog z obsługą trybu debugowania
function sendLog(message, level = 'info') {
  if (level === 'debug' && !window.debugMode) {
    return; // Nie loguj wiadomości debug, jeśli tryb debugowania jest wyłączony
  }
  chrome.runtime.sendMessage({ type: 'log', data: message, level: level });
}

// Funkcja do informowania o zakończeniu aktualizacji zamówienia
function sendOrderUpdated(orderId) {
  chrome.runtime.sendMessage({ 
    type: 'orderUpdated', 
    orderId: orderId 
  });
  
  // Wyślij statystyki użytkowania (anonimowe)
  sendUsageStats('order_processed', { orderId: orderId });
}

// Funkcja do wysyłania anonimowych statystyk użytkowania
async function sendUsageStats(action, data = {}) {
  try {
    const manifest = chrome.runtime.getManifest();
    const statsData = {
      action: action,
      version: manifest.version,
      timestamp: Date.now(),
      ...data
    };
    
    await fetch('https://appsbusters.pl/stats/extension-stats-endpoint.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(statsData)
    });
  } catch (error) {
    // Ignoruj błędy - statystyki nie mogą przeszkadzać w działaniu wtyczki
    if (window.debugMode) {
      console.log('Stats error (ignored):', error);
    }
  }
}

// Funkcja do informowania o błędzie aktualizacji zamówienia
function sendOrderError(orderId, error) {
  chrome.runtime.sendMessage({ 
    type: 'orderError', 
    orderId: orderId,
    error: error
  });
}

// Funkcja zwracająca odpowiednie nazwisko na podstawie statusu zamówienia
function getOrderStatusSurname(orderStatus) {
  switch (orderStatus) {
    case 'pending':
      return 'Pending';
    case 'cancelled':
      return 'Canceled';
    case 'error':
      return 'DataError';
    default:
      return 'Unknown';
  }
}

// Funkcja zwracająca odpowiedni komunikat na podstawie statusu zamówienia
function getOrderStatusMessage(orderStatus) {
  switch (orderStatus) {
    case 'pending':
      return 'Zamówienie w toku - Amazon nie udostępnił jeszcze pełnych danych: imię=Order, nazwisko=Pending';
    case 'cancelled':
      return 'Zamówienie anulowane - wszystkie produkty mają status anulowany: imię=Order, nazwisko=Canceled';
    case 'error':
      return 'Błąd danych zamówienia - niepełne lub nieprawidłowe dane: imię=Order, nazwisko=DataError';
    default:
      return 'Nieznany status zamówienia: imię=Order, nazwisko=Unknown';
  }
}

// Funkcje czyszczenia zamówień Pending zostały usunięte
// Wtyczka teraz ignoruje zamówienia Pending/nieopłacone

// Funkcja sprawdzająca czy waluta jest obsługiwana przez wtyczkę
function isCurrencySupported(currency) {
  if (!currency) return false;
  
  const supportedCurrencies = [
    'EUR', 'GBP', 'USD', 'SEK', 'NOK', 'DKK', 'PLN', 
    'CHF', 'CAD', 'AUD', 'JPY', 'CZK', 'HUF', 'RON', 'BGN'
  ];
  
  return supportedCurrencies.includes(currency.toUpperCase());
}

// Funkcja sprawdzająca czy zamówienie jest wysyłane do UK
function isUKOrder(addressData, currency) {
  // Sprawdź URL - czy to amazon.co.uk
  if (window.location.href.includes('amazon.co.uk')) {
    sendLog('Wykryto zamówienie UK na podstawie domeny amazon.co.uk', 'debug');
    return true;
  }
  
  // Sprawdź walutę - GBP wskazuje na UK
  if (currency === 'GBP') {
    sendLog('Wykryto zamówienie UK na podstawie waluty GBP', 'debug');
    return true;
  }
  
  // Sprawdź kod pocztowy UK (format: AB12 3CD lub AB1 2CD)
  if (addressData && addressData.postcode) {
    const ukPostcodeRegex = /^[A-Z]{1,2}[\d]{1,2}[A-Z]?\s?[\d][A-Z]{2}$/i;
    if (ukPostcodeRegex.test(addressData.postcode.trim())) {
      sendLog(`Wykryto zamówienie UK na podstawie kodu pocztowego: ${addressData.postcode}`, 'debug');
      return true;
    }
  }
  
  // Sprawdź nazwę kraju
  if (addressData && addressData.country) {
    const countryLower = addressData.country.toLowerCase();
    if (countryLower.includes('united kingdom') || 
        countryLower.includes('uk') || 
        countryLower === 'gb' ||
        countryLower === 'great britain') {
      sendLog(`Wykryto zamówienie UK na podstawie nazwy kraju: ${addressData.country}`, 'debug');
      return true;
    }
  }
  
  return false;
}

} // Zamknięcie bloku else 