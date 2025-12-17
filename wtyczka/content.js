// Amazon Sellasist Extension - Content Script
// Zabezpieczenie przed wielokrotnym ładowaniem
if (!window.amazonSellasistExtensionLoaded) {
  window.amazonSellasistExtensionLoaded = true;

// Helper function for safe parseFloat with validation
function safeParseFloat(value, defaultValue = 0) {
  if (value === null || value === undefined || value === '') {
    return defaultValue;
  }
  const valueStr = String(value);
  const parsed = parseFloat(valueStr.replace(/[^0-9,.]/g, '').replace(',', '.').trim());
  return isNaN(parsed) ? defaultValue : parsed;
}

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

// Funkcja do wykrywania zamówień UK
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

// Funkcja do formatowania numeru telefonu z poprawionym wykrywaniem kraju
function formatPhoneNumber(phone, country) {
  if (!phone) return '';
  
  // Usuń wszystko oprócz cyfr, plus i spacji
  let cleaned = phone.replace(/[^\d+ ]/g, '').trim();
  
  // Jeśli numer zaczyna się od +, zostaw go
  if (cleaned.startsWith('+')) {
    sendLog(`Zachowano międzynarodowy numer telefonu: ${cleaned}`, 'debug');
    return cleaned;
  }
  
  // Jeśli zaczyna się od '00', zamień na '+'
  if (cleaned.startsWith('00') && cleaned.length >= 12) {
    cleaned = '+' + cleaned.slice(2);
    sendLog(`Konwertowano numer z '00' na '+': ${cleaned}`, 'debug');
    return cleaned;
  }

  // Nowa logika: sprawdzaj czy numer może być pełnym międzynarodowym numerem bez +
  if (cleaned.length >= 11 && cleaned.length <= 15) {
    // Sprawdź czy numer zaczyna się od kodu krajowego (bez +)
    const countryPrefixes = {
      '49': '+49', // Niemcy
      '44': '+44', // UK
      '33': '+33', // Francja
      '34': '+34', // Hiszpania
      '39': '+39', // Włochy
      '31': '+31', // Holandia
      '46': '+46', // Szwecja
      '48': '+48', // Polska
      '43': '+43', // Austria
      '32': '+32', // Belgia
      '351': '+351', // Portugalia
    };
    
    for (const [prefix, international] of Object.entries(countryPrefixes)) {
      if (cleaned.startsWith(prefix)) {
        const fullNumber = international + cleaned.slice(prefix.length);
        sendLog(`Wykryto pełny numer międzynarodowy: ${cleaned} -> ${fullNumber}`, 'debug');
        return fullNumber;
      }
    }
  }

  // Jeśli numer wygląda na lokalny (9-10 cyfr), dodaj odpowiedni kierunkowy
  if (cleaned.length >= 9 && cleaned.length <= 10) {
    let countryCode = '';
    
    // Priorytet: Sales Channel, potem kraj z adresu
    const marketplace = getMarketplaceFromSalesChannel();
    if (marketplace) {
      const marketplaceToPhonePrefix = {
        'se': '+46', // Szwecja
        'es': '+34', // Hiszpania  
        'fr': '+33', // Francja
        'it': '+39', // Włochy
        'nl': '+31', // Holandia
        'de': '+49', // Niemcy
        'uk': '+44', // UK
        'pl': '+48'  // Polska
      };
      
      if (marketplaceToPhonePrefix[marketplace]) {
        countryCode = marketplaceToPhonePrefix[marketplace];
        // Usuń wiodące 0 przed dodaniem prefixu kraju
        const phoneWithoutLeadingZero = cleaned.startsWith('0') ? cleaned.slice(1) : cleaned;
        sendLog(`Dodano kierunkowy z Sales Channel (${marketplace}): ${cleaned} -> ${countryCode}${phoneWithoutLeadingZero}`, 'debug');
        return countryCode + phoneWithoutLeadingZero;
      }
    }
    
    // Fallback: wykrywanie z nazwy kraju
    if (country) {
        if (country.toLowerCase().includes('pol')) countryCode = '+48';
        else if (country.toLowerCase().includes('sweden') || country.toLowerCase().includes('sverige')) countryCode = '+46';
        else if (country.toLowerCase().includes('de') || country.toLowerCase().includes('german')) countryCode = '+49';
        else if (country.toLowerCase().includes('fr')) countryCode = '+33';
        else if (country.toLowerCase().includes('es') || country.toLowerCase().includes('spain')) countryCode = '+34';
        else if (country.toLowerCase().includes('it') || country.toLowerCase().includes('ital')) countryCode = '+39';
        else if (country.toLowerCase().includes('uk') || country.toLowerCase().includes('britain') || country.toLowerCase().includes('united kingdom')) countryCode = '+44';
        else if (country.toLowerCase().includes('at') || country.toLowerCase().includes('austria')) countryCode = '+43';
        else if (country.toLowerCase().includes('be') || country.toLowerCase().includes('belg')) countryCode = '+32';
        else if (country.toLowerCase().includes('pt') || country.toLowerCase().includes('portugal')) countryCode = '+351';
        else if (country.toLowerCase().includes('gr') || country.toLowerCase().includes('greece')) countryCode = '+30';
        else if (country.toLowerCase().includes('cz') || country.toLowerCase().includes('czech')) countryCode = '+420';
        else if (country.toLowerCase().includes('hu') || country.toLowerCase().includes('hungary')) countryCode = '+36';
        else if (country.toLowerCase().includes('ro') || country.toLowerCase().includes('romania')) countryCode = '+40';
        else if (country.toLowerCase().includes('sk') || country.toLowerCase().includes('slovakia')) countryCode = '+421';
        else if (country.toLowerCase().includes('dk') || country.toLowerCase().includes('denmark')) countryCode = '+45';
        else if (country.toLowerCase().includes('fi') || country.toLowerCase().includes('finland')) countryCode = '+358';
        else if (country.toLowerCase().includes('ie') || country.toLowerCase().includes('ireland')) countryCode = '+353';
        else if (country.toLowerCase().includes('lu') || country.toLowerCase().includes('luxembourg')) countryCode = '+352';
        else if (country.toLowerCase().includes('nl') || country.toLowerCase().includes('netherlands')) countryCode = '+31';
        else if (country.toLowerCase().includes('no') || country.toLowerCase().includes('norway')) countryCode = '+47';
        else if (country.toLowerCase().includes('se') || country.toLowerCase().includes('sweden')) countryCode = '+46';
        else if (country.toLowerCase().includes('ch') || country.toLowerCase().includes('switzerland')) countryCode = '+41';
        else if (country.toLowerCase().includes('tr') || country.toLowerCase().includes('turkey')) countryCode = '+90';
        else if (country.toLowerCase().includes('bg') || country.toLowerCase().includes('bulgaria')) countryCode = '+359';
        else if (country.toLowerCase().includes('hr') || country.toLowerCase().includes('croatia')) countryCode = '+385';
        else if (country.toLowerCase().includes('cy') || country.toLowerCase().includes('cyprus')) countryCode = '+357';
        else if (country.toLowerCase().includes('ee') || country.toLowerCase().includes('estonia')) countryCode = '+372';
        else if (country.toLowerCase().includes('lt') || country.toLowerCase().includes('lithuania')) countryCode = '+370';
        else if (country.toLowerCase().includes('lv') || country.toLowerCase().includes('latvia')) countryCode = '+371';
        else if (country.toLowerCase().includes('mt') || country.toLowerCase().includes('malta')) countryCode = '+356';
        else if (country.toLowerCase().includes('si') || country.toLowerCase().includes('slovenia')) countryCode = '+386';
      
      if (countryCode) {
        // Usuń wiodące 0 przed dodaniem prefixu kraju
        const phoneWithoutLeadingZero = cleaned.startsWith('0') ? cleaned.slice(1) : cleaned;
        sendLog(`Dodano kierunkowy z nazwy kraju (${country}): ${cleaned} -> ${countryCode}${phoneWithoutLeadingZero}`, 'debug');
        return countryCode + phoneWithoutLeadingZero;
      }
    }
  }

  // Jeśli numer ma odpowiednią długość (10-15 cyfr) i nie ma kierunkowego, dodaj kierunkowy
  if (cleaned.length >= 10 && cleaned.length <= 15) {
    // Sprawdź czy to numer UK i czy nie ma prefiksu +44
    if (cleaned.startsWith('07') && country && country.toLowerCase().includes('united kingdom')) {
      // Usuń wiodące 0 przed dodaniem prefixu UK
      const phoneWithoutLeadingZero = cleaned.slice(1);
      sendLog(`Wykryto numer UK bez prefiksu: ${cleaned} -> +44${phoneWithoutLeadingZero}`, 'debug');
      return '+44' + phoneWithoutLeadingZero;
    }
    sendLog(`Użyto numeru telefonu bez zmian: ${cleaned}`, 'debug');
    return cleaned;
  }

  // Jeśli numer jest zbyt krótki, zwróć pusty string
  sendLog(`Numer telefonu zbyt krótki lub nieprawidłowy: ${phone}`, 'warning');
  return '';
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
    // Inicjalizuj tablicę logów debugowych na samym początku
    window.sellasistDebugLogs = [];
    
    sendLog(`=== ROZPOCZYNAM PRZETWARZANIE ZAMÓWIENIA ${msg.order?.amazon_order_id} ===`, 'info');
    sendLog(`Sellasist ID: ${msg.order?.sellasist_order_id}`, 'info');
    
    // CZEKAJ NA ZAŁADOWANIE STRONY
    await new Promise(resolve => setTimeout(resolve, 1500)); // Zwiększono z 500ms do 1500ms
    
    // WERYFIKACJA: Sprawdź czy jesteśmy na właściwej stronie zamówienia
    const currentUrl = window.location.href;
    const expectedOrderId = msg.order?.amazon_order_id;
    
    sendLog(`Sprawdzam URL strony...`, 'debug');
    sendLog(`Aktualny URL: ${currentUrl}`, 'debug');
    sendLog(`Oczekiwane ID zamówienia: ${expectedOrderId}`, 'debug');
    
    if (!currentUrl.includes(expectedOrderId)) {
      sendLog(`⚠ BŁĄD: Strona nie zawiera oczekiwanego ID zamówienia!`, 'error');
      sendLog(`Czekam dodatkowe 3 sekundy na załadowanie właściwej strony...`, 'warning');
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Sprawdź ponownie
      const currentUrlAfterWait = window.location.href;
      sendLog(`URL po oczekiwaniu: ${currentUrlAfterWait}`, 'debug');
      
      if (!currentUrlAfterWait.includes(expectedOrderId)) {
        sendLog(`❌ BŁĄD KRYTYCZNY: Nadal nie jesteśmy na właściwej stronie zamówienia!`, 'error');
        sendLog(`Wymagane: ${expectedOrderId}, Aktualne: ${currentUrlAfterWait}`, 'error');
        sendOrderError(msg.order?.sellasist_order_id, `Nie można załadować strony zamówienia ${expectedOrderId}`);
        return;
      }
    }
    
    sendLog(`✓ Weryfikacja URL: Jesteśmy na właściwej stronie zamówienia ${expectedOrderId}`, 'info');
    
    
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
    
    // === PANEL SELLASIST INFO ===
    sendLog(`=== 📋 PANEL SELLASIST INFO ===`, 'info');
    sendLog(`🌐 API Endpoint: ${apiEndpoint}`, 'info');
    sendLog(`🏪 Panel: ${apiEndpoint.includes('masszone') ? 'MASSZONE (Production)' : 'UNKNOWN'}`, 'info');
    sendLog(`📦 Zamówienie ID: ${msg.orderDetails.id}`, 'info');
    sendLog(`💰 Status płatności: ${msg.orderDetails.payment?.status || 'unknown'}`, 'info');
    
    // === STAN POCZĄTKOWY SELLASIST ===
    sendLog(`=== 🔄 STAN POCZĄTKOWY SELLASIST ===`, 'info');
    sendLog(`👤 Klient: ${msg.orderDetails.customer?.name || 'unknown'}`, 'info');
    sendLog(`📧 Email: ${msg.orderDetails.customer?.email || 'unknown'}`, 'info');
    sendLog(`📞 Telefon: ${msg.orderDetails.customer?.phone || 'unknown'}`, 'info');
    sendLog(`🏠 Adres: ${msg.orderDetails.address?.street || 'unknown'}, ${msg.orderDetails.address?.city || 'unknown'}, ${msg.orderDetails.address?.postcode || 'unknown'}, ${msg.orderDetails.address?.country || 'unknown'}`, 'info');
    sendLog(`💵 Total: ${msg.orderDetails.total_price_brutto || 'unknown'} ${msg.orderDetails.currency || 'unknown'}`, 'info');
    sendLog(`📦 Produkty (${msg.orderDetails.carts?.length || 0}):`, 'info');
    if (msg.orderDetails.carts) {
      msg.orderDetails.carts.forEach((cart, index) => {
        sendLog(`  ${index + 1}. ${cart.name} - ${cart.price || 'unknown'} ${msg.orderDetails.currency || 'unknown'} (qty: ${cart.quantity || 1}, VAT: ${cart.tax || 'unknown'}%)`, 'info');
      });
    }
    
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
    const addressData = extractAddressData(addressDiv.innerText || addressDiv.textContent);
    let orderStatus = 'normal'; // normal, cancelled, error
    
    if (!addressData.isValid) {
      sendLog('Niepełne dane adresowe – aktualizuję zamówienie jako anulowane: imię=Order, nazwisko=Canceled', 'warning');
      allProductsCancelled = true;
    }
    sendLog(`Znaleziono adres dostawy: ${addressData.formattedAddress}`, 'debug');
    
    // Ekstrakcja numeru telefonu z sekcji "Contact Buyer" na stronie Amazon
    let amazonPhone = '';
    try {
      sendLog(`🔍 Szukam telefonu w sekcji Contact Buyer...`, 'info');
      
      // Proste: znajdź "Phone:" i weź wszystko co po nim
      const bodyText = document.body.textContent;
      const phoneMatch = bodyText.match(/Phone:\s*([+]?\d[\d\s\-\(\)]+)/i);
      if (phoneMatch) {
        amazonPhone = phoneMatch[1].trim();
        sendLog(`✅ Znaleziono telefon: "${amazonPhone}"`, 'success');
      } else {
        sendLog(`⚠️ Nie znaleziono telefonu po "Phone:"`, 'warning');
      }
      
    } catch (e) {
      sendLog(`❌ Błąd podczas ekstrakcji telefonu: ${e.message}`, 'error');
    }
    
    // Formatuj numer telefonu
    const formattedPhone = formatPhoneNumber(amazonPhone, addressData.country);
    sendLog(`Numer telefonu z Amazona: "${amazonPhone}"`, 'debug');
    sendLog(`Sformatowany numer telefonu: "${formattedPhone}"`, 'debug');
    const finalPhoneNumber = getValidPhoneNumber(formattedPhone, msg.orderDetails.shipment_address?.phone, addressData.country);
    sendLog(`Finalny numer telefonu dla zamówienia: ${finalPhoneNumber}`, 'info');

    const scrapedCurrency = detectCurrency();
    let currency = scrapedCurrency || paymentCurrency || 'EUR';
    
    sendLog(`=== ANALIZA WALUTY ===`, 'info');
    sendLog(`Waluta z scraping Amazona: ${scrapedCurrency}`, 'info');
    sendLog(`Waluta z płatności Sellasist: ${paymentCurrency}`, 'info');
    sendLog(`URL strony: ${window.location.href}`, 'debug');
    
    try {
      currency = normalizeCurrency(currency);
      sendLog(`Znormalizowana waluta: ${currency}`, 'info');
    } catch (currencyError) {
      sendLog(`BŁĄD WALUTY: ${currencyError.message}`, 'error');
      sendLog(`Szczegóły: scrapedCurrency=${scrapedCurrency}, paymentCurrency=${paymentCurrency}`, 'error');
      sendOrderError(msg.order?.sellasist_order_id, `Nieobsługiwana waluta: ${currency}`);
      return;
    }
    
    sendLog(`✓ Finalna waluta zamówienia: ${currency}`, 'info');
    // Sprawdź czy to zamówienie UK - dla GB zawsze VAT 0%
    const { skipProductUpdate, skipProductPrices, ukVatZero } = await getStoredData(['skipProductUpdate', 'skipProductPrices', 'ukVatZero']);
    sendLog(`🇬🇧 Dane do wykrycia UK - waluta: ${currency}, kraj: ${addressData?.country || 'unknown'}`, 'info');
    const isUK = isUKOrder(addressData, currency);
    sendLog(`🇬🇧 Wynik wykrywania UK: ${isUK}`, 'info');
    // Dla GB zawsze VAT 0% - niezależnie od ustawienia checkboxa
    const useUkVatZero = isUK;
    sendLog(`🇬🇧 Finalna decyzja UK VAT 0%: ${useUkVatZero} (wykryto UK: ${isUK} - dla GB zawsze VAT 0%)`, 'info');
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
        // Brak produktów - traktuj jako anulowane
        allProductsCancelled = true;
        orderStatus = 'cancelled';
        sendLog('Brak produktów - zamówienie traktowane jako anulowane', 'warning');
      }
    }
    if (productData.products.length === 0) {
      sendLog(`Ostrzeżenie: Nie znaleziono produktów dla zamówienia ${msg.order?.amazon_order_id || 'nieznane'}`, 'warning');
      sendOrderError(msg.order?.sellasist_order_id, 'Nie znaleziono produktów');
      return;
    }
    
    sendLog(`=== PRODUKTY ZAMÓWIENIA ===`, 'info');
    sendLog(`Znaleziono ${productData.products.length} produktów`, 'info');
    productData.products.forEach((product, index) => {
      sendLog(`Produkt ${index + 1}: ${product.name} (${product.quantity}x) - ${product.price} ${currency}, VAT: ${product.tax_rate}%, SKU: ${product.ean || 'brak'}`, 'info');
    });
    
    const orderValues = extractOrderValues(currency, paymentAmount);
    
    // === DANE Z AMAZONA ===
    sendLog(`=== 🛍️ DANE Z AMAZONA ===`, 'info');
    sendLog(`👤 Klient Amazon: ${addressData.name} ${addressData.surname}`, 'info');
    sendLog(`🏠 Adres Amazon: ${addressData.street || 'unknown'}, ${addressData.homeNumber || 'unknown'} ${addressData.city || 'unknown'}, ${addressData.postcode || 'unknown'}, ${addressData.country || 'unknown'}`, 'info');
    sendLog(`📞 Telefon Amazon: ${addressData.phone || 'unknown'}`, 'info');
    sendLog(`💵 Waluta Amazon: ${currency}`, 'info');
    sendLog(`📦 Produkty Amazon (${productData.products.length}):`, 'info');
    productData.products.forEach((product, index) => {
      sendLog(`  ${index + 1}. ${product.name} - ${product.price} ${currency} (qty: ${product.quantity}, VAT: ${product.tax_rate}%)`, 'info');
    });
    sendLog(`💰 Wartości Amazon: Subtotal=${orderValues.subtotal} ${currency}, Tax=${orderValues.tax} ${currency}, Total=${orderValues.total} ${currency}, Shipping=${orderValues.shipping} ${currency}`, 'info');
    
    // Dodaj log z finalnym numerem telefonu (ten, który faktycznie trafi do zamówienia)
    sendLog(`📞 Finalny telefon dla zamówienia: ${addressData.phone || 'unknown'}`, 'info');
    
    sendLog(`=== WARTOŚCI ZAMÓWIENIA ===`, 'info');
    sendLog(`Subtotal (netto): ${orderValues.subtotal} ${currency}`, 'info');
    sendLog(`Tax (VAT): ${orderValues.tax} ${currency}`, 'info');
    sendLog(`Total (brutto): ${orderValues.total} ${currency}`, 'info');
    sendLog(`Shipping (wysyłka): ${orderValues.shipping} ${currency}`, 'info');
    if (orderValues.hasShippingDiscount) {
      sendLog(`⚠ Shipping Promotion (rabat na wysyłkę): -${orderValues.shippingPromotion} ${currency}`, 'warning');
      sendLog(`⚠ Wysyłka zostanie ustawiona na 0 lub pomniejszona o rabat`, 'warning');
    }
    if (orderValues.netProceeds) {
      sendLog(`Net Proceeds (UK): ${orderValues.netProceeds} ${currency}`, 'info');
    }
    
    sendLog(`🔍 DEBUG Amazon Total: ${orderValues.total} ${currency}`, 'info');
    sendLog(`🔍 DEBUG Payment Amount: ${paymentAmount} ${paymentCurrency}`, 'info');
    if (orderValues.netProceeds) {
      sendLog(`🔍 DEBUG Net Proceeds: ${orderValues.netProceeds} ${currency}`, 'info');
    }
    
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
    sendLog(`=== MAPOWANIE PRODUKTÓW ===`, 'info');
    sendLog(`🔍 DEBUG: Produkty oryginalne w Sellasist: ${msg.orderDetails.carts?.length || 0}`, 'info');
    sendLog(`🔍 DEBUG: Produkty ze scraping Amazona: ${productData.products.length}`, 'info');
    
    if (msg.orderDetails.carts && msg.orderDetails.carts.length > 0) {
      sendLog(`🔍 DEBUG: Produkty w Sellasist:`, 'info');
      msg.orderDetails.carts.forEach((cart, index) => {
        sendLog(`  ${index + 1}. "${cart.name}" (line_id: ${cart.line_id}, EAN: ${cart.ean || 'brak'}, catalog: ${cart.catalog_number || 'brak'})`, 'info');
      });
    } else {
      sendLog(`❌ DEBUG: BRAK PRODUKTÓW W SELLASIST - carts array jest puste lub undefined`, 'error');
      sendLog(`🔍 DEBUG: msg.orderDetails type: ${typeof msg.orderDetails}`, 'debug');
      sendLog(`🔍 DEBUG: msg.orderDetails.carts type: ${typeof msg.orderDetails?.carts}`, 'debug');
      sendLog(`🔍 DEBUG: msg.orderDetails.carts length: ${msg.orderDetails?.carts?.length}`, 'debug');
      sendLog(`🔍 DEBUG: msg.orderDetails: ${JSON.stringify(msg.orderDetails, null, 2)}`, 'debug');
      
      // Jeśli to nowe zamówienie bez produktów, stwórz je na podstawie danych Amazona
      if (productData.products.length > 0) {
        sendLog(`🆕 NOWE ZAMÓWIENIE: Tworzę produkty na podstawie danych Amazona (${productData.products.length} produktów)`, 'info');
      }
    }

    try {
      // Użyj wartości z Amazona gdy waluta się różni
      let finalPaidAmount = paymentAmount > 0 ? paymentAmount : (msg.orderDetails.payment?.paid || 0);
      if (currency !== paymentCurrency && orderValues.total !== null && orderValues.total > 0) {
        finalPaidAmount = orderValues.total;
        sendLog(`Używam kwoty płatności z Amazona ze względu na różną walutę: ${finalPaidAmount} ${currency}`, 'info');
      }
      
      // Oblicz rzeczywisty koszt wysyłki (jeśli jest rabat na wysyłkę, ustaw na 0)
      let finalShippingCost = orderValues.shipping || msg.orderDetails.shipment?.total || 0;
      
      if (orderValues.hasShippingDiscount && orderValues.shippingPromotion) {
        sendLog(`=== RABAT NA WYSYŁKĘ ===`, 'info');
        sendLog(`Koszt wysyłki przed rabatem: ${orderValues.shipping}`, 'info');
        sendLog(`Rabat na wysyłkę: -${orderValues.shippingPromotion}`, 'info');
        
        // POPRAWKA: Zawsze ustaw na 0 gdy jest promotion na shipping
        finalShippingCost = 0;
        sendLog(`Wykryto promotion na wysyłkę - ustawiam koszt wysyłki na 0 (fix dla problemu z kosztem wysyłki)`, 'info');
      }
      
      // Określ standardową stawkę VAT dla wysyłki na podstawie kraju/domeny - POPRAWIONA LOGIKA
      let shippingVatRate = 21; // Domyślnie 21% (EU)
      const url = window.location.href;
      
      // Specjalny przypadek: UK VAT 0% - jeśli opcja jest włączona, nadpisz stawkę
      if (useUkVatZero) {
        shippingVatRate = 0;
        sendLog(`UK VAT 0%: Ustawiam stawkę VAT dla wysyłki na 0%`, 'info');
      } else if (url.includes('amazon.co.uk')) {
        shippingVatRate = 0; // UK VAT 0%
      } else if (url.includes('amazon.de')) {
        shippingVatRate = 19; // Niemcy
      } else if (url.includes('amazon.fr')) {
        shippingVatRate = 20; // Francja
      } else if (url.includes('amazon.es')) {
        shippingVatRate = 21; // Hiszpania
      } else if (url.includes('amazon.it')) {
        shippingVatRate = 22; // Włochy
      } else if (url.includes('amazon.pl')) {
        shippingVatRate = 23; // Polska
      } else if (url.includes('amazon.se')) {
        shippingVatRate = 25; // Szwecja
      } else if (url.includes('amazon.com')) {
        shippingVatRate = 0; // USA - bez VAT
      }
      
      sendLog(`Stawka VAT dla wysyłki (standardowa): ${shippingVatRate}%`, 'info');
      
      // Automatyczna aktualizacja statusu płatności
      let paymentStatus = msg.orderDetails.payment?.status || "unpaid";
      if (finalPaidAmount > 0 && paymentStatus === "unpaid") {
        paymentStatus = "paid";
        sendLog(`Automatyczna zmiana statusu płatności: unpaid -> paid (kwota: ${finalPaidAmount})`, 'info');
      }
      
      // Zbieraj logi do wysłania do Sellasist - tablica już zainicjalizowana na początku funkcji
      window.sellasistDebugLogs.push(`=== 🚀 START PRZETWARZANIA ZAMÓWIENIA ${msg.order.sellasist_order_id} ===`);
      window.sellasistDebugLogs.push(`Amazon ID: ${msg.order.amazon_order_id}`);
      window.sellasistDebugLogs.push(`URL: ${window.location.href}`);
      window.sellasistDebugLogs.push(`Kwota płatności: ${paymentAmount} ${paymentCurrency}`);
      // Szczegółowe logi są już dodawane przez sendLog() wcześniej w funkcji
      
      const orderUpdateData = {
        id: msg.orderDetails.id,
        currency: finalCurrency,
        payment_status: paymentStatus,
        paid: finalPaidAmount,
        status: msg.orderDetails.status?.id || 1,
        email: msg.orderDetails.email,
        date: msg.orderDetails.date,
        shipment_price: finalShippingCost,
        shipment_tax: shippingVatRate, // Standardowa stawka VAT dla wysyłki
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
          company_name: addressData.company || msg.orderDetails.shipment_address?.company_name || null,
          company_nip: msg.orderDetails.shipment_address?.company_nip || null,
          country: { 
            id: countryID || (msg.orderDetails.shipment_address?.country?.id || '81'),
            name: countryID ? (addressData.country || msg.orderDetails.shipment_address?.country?.name || 'Germany') : (msg.orderDetails.shipment_address?.country?.name || 'Germany'),
            code: countryID ? getCountryCode(addressData.country) || msg.orderDetails.shipment_address?.country?.code || 'DE' : (msg.orderDetails.shipment_address?.country?.code || 'DE')
          }
        },
        pickup_point: msg.orderDetails.pickup_point || null,
        additional_fields: msg.orderDetails.additional_fields || []
      };
      
      // Produkty aktualizujemy w tym samym zapytaniu przez carts
      // POPRAWIONE MAPOWANIE - lepsze dopasowanie produktów + zachowanie istniejących
      let cartsArray = [];
      
      // Jeśli skipProductUpdate jest włączone, nie aktualizuj produktów wcale
      if (skipProductUpdate) {
        sendLog('⚠️ skipProductUpdate jest włączone - pomijam aktualizację produktów', 'warning');
        // Użyj istniejących produktów bez zmian
        cartsArray = msg.orderDetails.carts?.map(cart => ({
          line_id: cart.line_id,
          price: cart.price,
          tax: cart.tax,
          quantity: cart.quantity || 1
        })) || [];
      } else if (skipProductPrices) {
        // skipProductPrices: aktualizuj szczegóły produktów ale zachowaj oryginalne ceny
        sendLog('⚠️ skipProductPrices jest włączone - aktualizuję szczegóły produktów, zachowuję ceny', 'warning');
        
        const updatedProducts = productData.products.map((scrapedProduct, index) => {
          sendLog(`Mapowanie produktu ${index + 1}/${productData.products.length}: "${scrapedProduct.name}" (EAN: ${scrapedProduct.ean || 'brak'}, ASIN: ${scrapedProduct.catalog_number || 'brak'})`, 'info');
          
          // Najpierw spróbuj znaleźć po nazwie/SKU/ASIN
          let originalProduct = msg.orderDetails.carts?.find(cart => {
            // Dokładne dopasowanie po nazwie
            if (cart.name && scrapedProduct.name && cart.name.trim() === scrapedProduct.name.trim()) {
              sendLog(`✓ Dopasowano produkt po nazwie: "${cart.name}" -> line_id: ${cart.line_id}`, 'info');
              return cart;
            }
            
            // Dopasowanie po EAN/SKU
            if (cart.ean && scrapedProduct.ean && cart.ean === scrapedProduct.ean) {
              sendLog(`✓ Dopasowano produkt po EAN: ${cart.ean} -> line_id: ${cart.line_id}`, 'info');
              return cart;
            }
            
            // Dopasowanie po catalog_number/ASIN
            if (cart.catalog_number && scrapedProduct.catalog_number && 
                cart.catalog_number === scrapedProduct.catalog_number) {
              sendLog(`✓ Dopasowano produkt po catalog_number: ${cart.catalog_number} -> line_id: ${cart.line_id}`, 'info');
              return cart;
            }
            
            return false;
          });
          
          // Jeśli nie znaleziono po identyfikatorach, użyj po indeksie (ale z ostrzeżeniem)
          if (!originalProduct && msg.orderDetails.carts && msg.orderDetails.carts[index]) {
            originalProduct = msg.orderDetails.carts[index];
            sendLog(`⚠ UWAGA: Nie znaleziono dokładnego dopasowania dla produktu "${scrapedProduct.name}"`, 'warning');
            sendLog(`⚠ Używam produktu po indeksie ${index}: "${originalProduct.name}" (line_id: ${originalProduct.line_id})`, 'warning');
          }
          
          if (!originalProduct) {
            sendLog(`Nie znaleziono line_id dla produktu: ${scrapedProduct.name}`, 'warning');
            return null;
          }
          
          // skipProductPrices: zachowaj oryginalną cenę i VAT - ALE DLA UK VAT 0% użyj poprawnych cen
          if (useUkVatZero) {
            // Dla UK VAT 0% użyj poprawnych cen netto
            sendLog(`UK VAT 0%: Używam poprawnej ceny netto ${scrapedProduct.price} zamiast oryginalnej ${originalProduct.price}`, 'info');
            return {
              line_id: originalProduct.line_id,
              price: scrapedProduct.price, // Użyj ceny netto z Amazona
              tax: 0,                       // VAT 0% dla UK
              quantity: originalProduct.quantity || 1
            };
          } else {
            // Standardowe zachowanie: zachowaj oryginalną cenę i VAT
            return {
              line_id: originalProduct.line_id,
              price: originalProduct.price, // ZACHOWAJ oryginalną cenę
              tax: originalProduct.tax,     // ZACHOWAJ oryginalny VAT
              quantity: originalProduct.quantity || 1
            };
          }
        }).filter(Boolean);
        
        // Zbierz ID zaktualizowanych produktów
        const updatedLineIds = new Set(updatedProducts.map(p => p.line_id));
        
        // Dodaj istniejące produkty, które nie zostały zaktualizowane
        const preservedProducts = msg.orderDetails.carts?.filter(cart => !updatedLineIds.has(cart.line_id))
          .map(cart => {
            sendLog(`🔒 Zachowuję istniejący produkt: "${cart.name}" (line_id: ${cart.line_id}) - cena: ${cart.price}, VAT: ${cart.tax}%`, 'info');
            return {
              line_id: cart.line_id,
              price: cart.price,
              tax: cart.tax,
              quantity: cart.quantity || 1
            };
          }) || [];
        
        // Połącz zaktualizowane i zachowane produkty
        cartsArray = [...updatedProducts, ...preservedProducts];
        sendLog(`📊 Podsumowanie produktów (skipProductPrices): zaktualizowane ${updatedProducts.length}, zachowane ${preservedProducts.length}, razem ${cartsArray.length}`, 'info');
      } else {
        // Zbierz zaktualizowane produkty z Amazona
        const updatedProducts = productData.products.map((scrapedProduct, index) => {
          sendLog(`Mapowanie produktu ${index + 1}/${productData.products.length}: "${scrapedProduct.name}" (EAN: ${scrapedProduct.ean || 'brak'}, ASIN: ${scrapedProduct.catalog_number || 'brak'})`, 'info');
          
          // Najpierw spróbuj znaleźć po nazwie/SKU/ASIN
          let originalProduct = msg.orderDetails.carts?.find(cart => {
            // Dokładne dopasowanie po nazwie
            if (cart.name && scrapedProduct.name && cart.name.trim() === scrapedProduct.name.trim()) {
              sendLog(`✓ Dopasowano produkt po nazwie: "${cart.name}" -> line_id: ${cart.line_id}`, 'info');
              return cart;
            }
            
            // Dopasowanie po EAN/SKU
            if (cart.ean && scrapedProduct.ean && cart.ean === scrapedProduct.ean) {
              sendLog(`✓ Dopasowano produkt po EAN: ${cart.ean} -> line_id: ${cart.line_id}`, 'info');
              return cart;
            }
            
            // Dopasowanie po catalog_number/ASIN
            if (cart.catalog_number && scrapedProduct.catalog_number && 
                cart.catalog_number === scrapedProduct.catalog_number) {
              sendLog(`✓ Dopasowano produkt po catalog_number: ${cart.catalog_number} -> line_id: ${cart.line_id}`, 'info');
              return cart;
            }
            
            return false;
          });
          
          // Jeśli nie znaleziono po identyfikatorach, użyj po indeksie (ale z ostrzeżeniem)
          if (!originalProduct && msg.orderDetails.carts && msg.orderDetails.carts[index]) {
            originalProduct = msg.orderDetails.carts[index];
            sendLog(`⚠ UWAGA: Nie znaleziono dokładnego dopasowania dla produktu "${scrapedProduct.name}"`, 'warning');
            sendLog(`⚠ Używam produktu po indeksie ${index}: "${originalProduct.name}" (line_id: ${originalProduct.line_id})`, 'warning');
          }
          
          if (!originalProduct) {
            sendLog(`Nie znaleziono line_id dla produktu: ${scrapedProduct.name}`, 'warning');
            return null;
          }
          
          // Oblicz finalPrice i finalTax dla produktu
          const finalPrice = scrapedProduct.price;
          const finalTax = scrapedProduct.tax_rate || 0;
          
          sendLog(`✅ Aktualizuję produkt: "${originalProduct.name}" (line_id: ${originalProduct.line_id}) - cena: ${finalPrice}, VAT: ${finalTax}%`, 'info');
          
          return {
            line_id: originalProduct.line_id,
            price: finalPrice,
            tax: finalTax,
            quantity: originalProduct.quantity || 1
          };
        }).filter(Boolean);
        
        // Zbierz ID zaktualizowanych produktów
        const updatedLineIds = new Set(updatedProducts.map(p => p.line_id));
        
        // Dodaj istniejące produkty, które nie zostały zaktualizowane (zachowuj je!)
        const preservedProducts = msg.orderDetails.carts?.filter(cart => !updatedLineIds.has(cart.line_id))
          .map(cart => {
            sendLog(`🔒 Zachowuję istniejący produkt: "${cart.name}" (line_id: ${cart.line_id}) - cena: ${cart.price}, VAT: ${cart.tax}%`, 'info');
            return {
              line_id: cart.line_id,
              price: cart.price,
              tax: cart.tax,
              quantity: cart.quantity || 1
            };
          }) || [];
        
        // Połącz zaktualizowane i zachowane produkty
        cartsArray = [...updatedProducts, ...preservedProducts];
        
        // Poprawka zaokrąglania: jeśli suma jest mniejsza niż zapłacona, dodaj brakujący cent
        if (orderValues && orderValues.total > 0 && cartsArray.length > 0) {
          const calculatedTotal = cartsArray.reduce((sum, cart) => sum + (cart.price || 0) * (cart.quantity || 1), 0);
          const actualTotal = orderValues.total;
          const difference = actualTotal - calculatedTotal;
          
          // Jeśli różnica jest dodatnia i mniejsza niż 0.05 (typowo 0.01), dodaj do pierwszego produktu
          if (difference > 0 && difference < 0.05) {
            const firstProduct = cartsArray.find(cart => cart.line_id);
            if (firstProduct) {
              const originalPrice = firstProduct.price;
              firstProduct.price = Math.round((firstProduct.price + difference) * 100) / 100;
              sendLog(`💰 Poprawka zaokrąglania: dodano ${difference.toFixed(2)} EUR do pierwszego produktu`, 'info');
              sendLog(`💰 Cena produktu zmieniona: ${originalPrice} -> ${firstProduct.price} EUR`, 'info');
              sendLog(`💰 Suma po poprawce: ${calculatedTotal} -> ${calculatedTotal + difference} EUR`, 'info');
            }
          }
        }
        
        sendLog(`📊 Podsumowanie produktów: zaktualizowane ${updatedProducts.length}, zachowane ${preservedProducts.length}, razem ${cartsArray.length}`, 'info');
      }
      
      // Dodaj carts do orderUpdateData
      orderUpdateData.carts = cartsArray;
      
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
      // Dodaj logi debugowe do payloadu przed wysłaniem
      window.sellasistDebugLogs.push(`=== 🏁 KONIEC PRZETWARZANIA ZAMÓWIENIA ${msg.order.sellasist_order_id} ===`);
      window.sellasistDebugLogs.push(`Status zamówienia: ${orderStatus}`);
      window.sellasistDebugLogs.push(`Liczba produktów: ${cartsArray.length}`);
      window.sellasistDebugLogs.push(`Waluta końcowa: ${finalCurrency}`);
      window.sellasistDebugLogs.push(`Total: ${orderValues.total} ${finalCurrency}`);
      
      // Ogranicz logi do ostatnich 200 wpisów aby uniknąć zbyt dużego payloadu
      const limitedLogs = window.sellasistDebugLogs.slice(-200);
      
      // Dodaj logi do danych zamówienia
      orderUpdateData.debug_logs = limitedLogs;
      orderUpdateData.scraping_status = {
        amazon_order_id: msg.order.amazon_order_id,
        processing_status: orderStatus,
        products_found: cartsArray.length,
        currency_detected: finalCurrency,
        total_amount: orderValues.total,
        timestamp: new Date().toISOString()
      };
      
      const orderUrl = `https://${apiEndpoint}/api/v1/orders/${msg.order.sellasist_order_id}`;
      
      // === PORÓWNANIE STANÓW PRZED AKTUALIZACJĄ ===
      sendLog(`=== 🔄 PORÓWNANIE STANÓW (PRZED/Po) ===`, 'info');
      sendLog(`📋 Adres:`, 'info');
      sendLog(`  PRZED: ${msg.orderDetails.address?.street || 'unknown'}, ${msg.orderDetails.address?.city || 'unknown'}, ${msg.orderDetails.address?.postcode || 'unknown'}, ${msg.orderDetails.address?.country || 'unknown'}`, 'info');
      sendLog(`  PO:    ${addressData.street || 'unknown'}, ${addressData.homeNumber || 'unknown'} ${addressData.city || 'unknown'}, ${addressData.postcode || 'unknown'}, ${addressData.country || 'unknown'}`, 'info');
      sendLog(`📞 Telefon:`, 'info');
      sendLog(`  PRZED: ${msg.orderDetails.customer?.phone || 'unknown'}`, 'info');
      sendLog(`  PO:    ${addressData.phone || 'unknown'}`, 'info');
      sendLog(`💰 Total:`, 'info');
      sendLog(`  PRZED: ${msg.orderDetails.total_price_brutto || 'unknown'} ${msg.orderDetails.currency || 'unknown'}`, 'info');
      sendLog(`  PO:    ${orderValues.total} ${finalCurrency}`, 'info');
      sendLog(`📦 Produkty:`, 'info');
      sendLog(`  PRZED (${msg.orderDetails.carts?.length || 0}):`, 'info');
      if (msg.orderDetails.carts) {
        msg.orderDetails.carts.forEach((cart, index) => {
          sendLog(`    ${index + 1}. ${cart.name} - ${cart.price || 'unknown'} ${msg.orderDetails.currency || 'unknown'} (qty: ${cart.quantity || 1}, VAT: ${cart.tax || 'unknown'}%)`, 'info');
        });
      }
      sendLog(`  PO (${cartsArray.length}):`, 'info');
      cartsArray.forEach((cart, index) => {
        sendLog(`    ${index + 1}. ${cart.name || 'unknown'} - ${cart.price || 'unknown'} ${finalCurrency} (qty: ${cart.quantity || 1}, VAT: ${cart.tax || 'unknown'}%)`, 'info');
      });
      
      sendLog(`Aktualizacja danych zamówienia: ${orderUrl}`, 'debug');
      sendLog(`📤 Wysyłanie ${limitedLogs.length} logów debugowych do Sellasist`, 'info');
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
      
      // Wyślij logi debugowe na serwer użytkownika po pomyślnej aktualizacji
      sendDebugLogsToServer(limitedLogs, {
        amazon_order_id: msg.order.amazon_order_id,
        sellasist_order_id: msg.order.sellasist_order_id
      }, orderStatus);
      
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
function extractOrderValues(currency = null, paymentAmount = 0) {
  const result = {
    subtotal: null, // suma netto
    tax: null,      // VAT
    total: null,    // suma brutto
    shipping: null, // koszty wysyłki
    shippingVat: null, // VAT od wysyłki
    netProceeds: null, // "Sales proceeds net of VAT" - wartość netto dla UK
    shippingNet: null, // koszty wysyłki netto
    shippingPromotion: null, // rabat na wysyłkę
    hasShippingDiscount: false // czy jest rabat na wysyłkę
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
          // Sprawdzamy każdą linię tekstu w poszukiwaniu wartości
          const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
          sendLog(`🔍 DEBUG: Analizuję ${lines.length} linii z tabeli podsumowania`, 'debug');
          
          for (let i = 0; i < lines.length; i++) {
            const line = lines[i].toLowerCase();
            const originalLine = lines[i];
            const valueMatch = originalLine.match(/([€£$¥]?\s*[\d.,]+(?:\s*kr|\s*zł)?)/);
            
            sendLog(`🔍 DEBUG: Linia ${i+1}: "${originalLine}" -> match: ${valueMatch ? valueMatch[1] : 'brak'}`, 'debug');
            
            if (line.includes('item subtotal')) {
              if (valueMatch) {
                result.subtotal = parseFloat(valueMatch[1].replace(/[^0-9,.]/g, '').replace(',', '.'));
                sendLog(`🔍 DEBUG: Subtotal extracted: ${result.subtotal}`, 'debug');
              }
            } else if (line.includes('vat total') || line.includes('tax total')) {
              if (valueMatch) {
                result.tax = parseFloat(valueMatch[1].replace(/[^0-9,.]/g, '').replace(',', '.'));
                sendLog(`🔍 DEBUG: Tax extracted: ${result.tax}`, 'debug');
              }
            } else if (line.includes('item total') || line.includes('grand total')) {
              if (valueMatch) {
                result.total = parseFloat(valueMatch[1].replace(/[^0-9,.]/g, '').replace(',', '.'));
                sendLog(`🔍 DEBUG: Total extracted: ${result.total}`, 'debug');
              }
            } else if (line.includes('shipping total') || line.includes('shipment')) {
              if (valueMatch) {
                result.shipping = parseFloat(valueMatch[1].replace(/[^0-9,.]/g, '').replace(',', '.'));
                sendLog(`🔍 DEBUG: Shipping extracted: ${result.shipping}`, 'debug');
              }
            } else if (line.includes('shipping promotion') || line.includes('shipping discount') || (line.includes('promotion') && line.includes('shipping'))) {
              // Wykryj rabat na wysyłkę
              if (valueMatch) {
                result.shippingPromotion = Math.abs(parseFloat(valueMatch[1].replace(/[^0-9,.]/g, '').replace(',', '.')));
                result.hasShippingDiscount = true;
                sendLog(`Wykryto rabat na wysyłkę: ${result.shippingPromotion}`, 'info');
              }
            } else if (line.includes('sales proceeds net of vat') || line.includes('net proceeds')) {
              if (valueMatch) {
                result.netProceeds = parseFloat(valueMatch[1].replace(/[^0-9,.]/g, '').replace(',', '.'));
                sendLog(`Znaleziono "Sales proceeds net of VAT": ${result.netProceeds}`, 'debug');
              } else {
                sendLog(`🔍 DEBUG: Linia zawiera 'sales proceeds/net proceeds' ale nie ma wartości: "${originalLine}"`, 'debug');
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
      
      sendLog(`🔍 DEBUG DOM Elements - Sprawdzam alternatywne selektory:`, 'debug');
      
      if (subtotalElement) {
        const text = subtotalElement.innerText || subtotalElement.textContent;
        sendLog(`🔍 DEBUG Subtotal Element: "${text.trim()}"`, 'debug');
        const value = text.match(/([€£$¥]?\s*[\d.,]+(?:\s*kr|\s*zł)?)/);
        if (value) {
          result.subtotal = parseFloat(value[1].replace(/[^0-9,.]/g, '').replace(',', '.'));
          sendLog(`🔍 DEBUG Subtotal extracted: ${result.subtotal}`, 'debug');
        }
      }
      
      if (taxElement) {
        const text = taxElement.innerText || taxElement.textContent;
        sendLog(`🔍 DEBUG Tax Element: "${text.trim()}"`, 'debug');
        const value = text.match(/([€£$¥]?\s*[\d.,]+(?:\s*kr|\s*zł)?)/);
        if (value) {
          result.tax = parseFloat(value[1].replace(/[^0-9,.]/g, '').replace(',', '.'));
          sendLog(`🔍 DEBUG Tax extracted: ${result.tax}`, 'debug');
        }
      }
      
      if (totalElement) {
        const text = totalElement.innerText || totalElement.textContent;
        sendLog(`🔍 DEBUG Total Element: "${text.trim()}"`, 'debug');
        const value = text.match(/([€£$¥]?\s*[\d.,]+(?:\s*kr|\s*zł)?)/);
        if (value) {
          result.total = parseFloat(value[1].replace(/[^0-9,.]/g, '').replace(',', '.'));
          sendLog(`🔍 DEBUG Total extracted: ${result.total}`, 'debug');
        }
      }
      
      if (shippingElement) {
        const text = shippingElement.innerText || shippingElement.textContent;
        sendLog(`🔍 DEBUG Shipping Element: "${text.trim()}"`, 'debug');
        const value = text.match(/([€£$¥]?\s*[\d.,]+(?:\s*kr|\s*zł)?)/);
        if (value) {
          result.shipping = parseFloat(value[1].replace(/[^0-9,.]/g, '').replace(',', '.'));
          sendLog(`🔍 DEBUG Shipping extracted: ${result.shipping}`, 'debug');
        }
      }
    }
    
    // Jeśli brakuje total, a mamy subtotal i tax, możemy go obliczyć
    if (result.total === null && result.subtotal !== null && result.tax !== null) {
      result.total = result.subtotal + result.tax;
      sendLog(`Obliczono total na podstawie subtotal + tax: ${result.subtotal} + ${result.tax} = ${result.total}`, 'debug');
    }
    
    // 🔍 WALIDACJA MATEMATYCZNA - Sprawdzamy czy wartości mają sens
    if (result.subtotal !== null && result.tax !== null && result.total !== null) {
      const calculatedTotal = result.subtotal + result.tax;
      const difference = Math.abs(result.total - calculatedTotal);
      
      if (difference > 0.5) { // Tolerancja 0.5 dla różnic zaokrągleń
        sendLog(`⚠️ UWAGA: Niezgodność matematyczna! Subtotal(${result.subtotal}) + Tax(${result.tax}) = ${calculatedTotal}, ale Total = ${result.total}`, 'warning');
        
        // Dla UK zawsze używamy dedykowanej logiki
        if (currency === 'GBP') {
          // Priorytet 1: Sales proceeds net of VAT (prawdziwa cena produktu)
          if (result.netProceeds !== null && result.netProceeds > 0) {
            sendLog(`🔧 Korekta UK: Używam Sales proceeds net of VAT: ${result.netProceeds} GBP (cena produktu)`, 'info');
            result.total = result.netProceeds;
            result.subtotal = result.netProceeds;
            result.tax = 0; // VAT 0% dla UK
          } 
          // Priorytet 2: Payment amount (ostateczna alternatywa)
          else if (paymentAmount > 0) {
            sendLog(`🔧 Korekta UK: Używam paymentAmount jako totalu: ${paymentAmount} GBP`, 'info');
            result.total = paymentAmount;
            result.subtotal = paymentAmount;
            result.tax = 0;
          }
        } else {
          // Dla innych krajów używamy paymentAmount
          sendLog(`🔧 Korekta: Używam paymentAmount jako autorytatywnego total`, 'info');
          result.total = paymentAmount;
        }
      }
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

// Funkcja do wykrywania marketplace z Sales Channel (prawdziwy rynek)
function getMarketplaceFromSalesChannel() {
  try {
    const salesChannelElement = document.querySelector('[data-test-id="sales-channel-value"]');
    if (salesChannelElement) {
      const salesChannel = salesChannelElement.textContent || salesChannelElement.innerText || '';
      sendLog(`Wykryto Sales Channel: "${salesChannel.trim()}"`, 'info');
      
      if (salesChannel.includes('Amazon.se')) return 'se';
      else if (salesChannel.includes('Amazon.es')) return 'es';
      else if (salesChannel.includes('Amazon.fr')) return 'fr';
      else if (salesChannel.includes('Amazon.it')) return 'it';
      else if (salesChannel.includes('Amazon.nl')) return 'nl';
      else if (salesChannel.includes('Amazon.de')) return 'de';
      else if (salesChannel.includes('Amazon.co.uk')) return 'uk';
      else if (salesChannel.includes('Amazon.pl')) return 'pl';
    }
  } catch (e) {
    sendLog(`Nie udało się odczytać Sales Channel: ${e.message}`, 'debug');
  }
  return null;
}

// Funkcja do wykrywania waluty na stronie
function detectCurrency() {
  try {
    // Różne metody wykrywania waluty
    const pageText = document.body.innerText;
    
    sendLog(`Wykrywanie waluty - ignorowanie URL (niewiarygodny dla cross-border)`, 'debug');
    
    // 0. PRIORYTET NAJWYŻSZY: Sprawdź Sales Channel (prawdziwy marketplace)
    const marketplace = getMarketplaceFromSalesChannel();
    if (marketplace) {
      if (marketplace === 'se') {
        sendLog('✅ Wykryto Amazon.se z Sales Channel - wymuszam walutę SEK', 'success');
        return 'SEK';
      } else if (marketplace === 'es' || marketplace === 'fr' || marketplace === 'it' || marketplace === 'nl' || marketplace === 'de') {
        sendLog(`✅ Wykryto Amazon.${marketplace} z Sales Channel - wymuszam walutę EUR`, 'success');
        return 'EUR';
      } else if (marketplace === 'uk') {
        sendLog('✅ Wykryto Amazon.co.uk z Sales Channel - wymuszam walutę GBP', 'success');
        return 'GBP';
      } else if (marketplace === 'pl') {
        sendLog('✅ Wykryto Amazon.pl z Sales Channel - wymuszam walutę PLN', 'success');
        return 'PLN';
      }
    } else {
      sendLog('⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM', 'warning');
    }
    
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
    
    // 1.5. PRIORYTET WYSOKI: Sales Channel już obsłużony wyżej
    
    // 2. PRIORYTET NAJWYŻSZY: Szukaj walut w innych elementach DOM z cenami
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
          
          // Szukaj wzorców: "30,99 GBP", "30,99&nbsp;GBP", "€30,99", "£30,99", "489,60 kr"
          const currencyMatch = text.match(/(?:\d+[.,]\d+\s*(?:&nbsp;)?\s*(GBP|EUR|USD|SEK|NOK|DKK|PLN|CHF|CAD|AUD|JPY|CZK|HUF|RON|BGN))|([€£$¥])\s*\d+[.,]\d+|(GBP|EUR|USD|SEK|NOK|DKK|PLN|CHF|CAD|AUD|JPY|CZK|HUF|RON|BGN)\s*\d+[.,]\d+|\d+[.,]\d+\s*(?:&nbsp;)?\s*(kr|€|£|$|¥)/gi);
          
          if (currencyMatch) {
            // Wyciągnij kod waluty z dopasowania
            let currency = null;
            for (const match of currencyMatch) {
              if (match.includes('GBP')) currency = 'GBP';
              else if (match.includes('EUR') || match.includes('€')) currency = 'EUR';
              else if (match.includes('USD') || match.includes('$')) currency = 'USD';
              else if (match.includes('SEK') || match.includes('kr')) currency = 'SEK';
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
    if (pageText.includes('kr') && pageText.includes('SEK')) {
      sendLog('Wykryto walutę z tekstu strony: SEK (kr + SEK)', 'debug');
      return 'SEK';
    }
    if (pageText.includes('kr') && pageText.includes('NOK')) {
      sendLog('Wykryto walutę z tekstu strony: NOK (kr + NOK)', 'debug');
      return 'NOK';
    }
    if (pageText.includes('kr') && pageText.includes('DKK')) {
      sendLog('Wykryto walutę z tekstu strony: DKK (kr + DKK)', 'debug');
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
    
    // 3. FALLBACK: Użyj waluty z płatności Sellasist jako ostateczność
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
    function extractAddressData(addressText) {
      sendLog(`=== 🚀 ROZPOCZYNAM EXTRACTADDRESSDATA ===`, 'info');
      sendLog(`Input addressText: "${addressText}"`, 'info');
      
      const result = {
        name: '',
        surname: '',
        company: '',
        street: '',
        homeNumber: '',
        flatNumber: '',
        city: '',
        state: '',
        postcode: '',
        country: '',
        phone: ''
      };

      try {
        // Podziel adres na linie
        const addressLines = addressText.split('\n').map(line => line.trim()).filter(line => line !== '');
        sendLog(`📋 Adres podzielony na ${addressLines.length} linii: [${addressLines.map(l => `"${l}"`).join(', ')}]`, 'info');
        
        // Wykryj kraj na początku (jedna deklaracja dla całej funkcji)
        const isFrance = addressLines.some(line => /France|Frankreich|Francja/i.test(line));
        const isSpain = addressLines.some(line => /Spain|España|Hiszpania/i.test(line));
        const isItaly = addressLines.some(line => /Italy|Italien|Włochy/i.test(line));
        const isBelgium = addressLines.some(line => /Belgium|Belgique|België|Belgia/i.test(line));
        const isNetherlands = addressLines.some(line => /Netherlands|Nederland|Holandia/i.test(line));
        const isGermany = addressLines.some(line => /Germany|Deutschland|Niemcy/i.test(line));
        const isUnitedKingdom = addressLines.some(line => /United Kingdom|UK|GB|England|Scotland|Wales|Northern Ireland/i.test(line));
        
        sendLog(`🌍 Wykryto kraje: FR=${isFrance}, ES=${isSpain}, IT=${isItaly}, BE=${isBelgium}, NL=${isNetherlands}, DE=${isGermany}, UK=${isUnitedKingdom}`, 'info');
        
        // Linia 1 - imię i nazwisko
        if (addressLines.length > 0) {
          const fullName = addressLines[0].trim();
          sendLog(`👤 Parsowanie imienia/nazwiska z: "${fullName}"`, 'info');
          
          if (fullName.includes(',')) {
            const nameParts = fullName.split(',').map(part => part.trim());
            if (nameParts.length >= 2) {
              result.surname = nameParts[0];
              result.name = nameParts[1];
              sendLog(`📝 Imię/nazwisko z przecinkiem: nazwisko="${result.surname}", imię="${result.name}"`, 'info');
            } else {
              const nameArray = fullName.split(' ');
              if (nameArray.length > 1) {
                result.name = nameArray[0];
                result.surname = nameArray.slice(1).join(' ');
                sendLog(`📝 Imię/nazwisko (fallback): imię="${result.name}", nazwisko="${result.surname}"`, 'info');
              } else {
                result.surname = fullName;
                sendLog(`📝 Tylko nazwisko: "${result.surname}"`, 'info');
              }
            }
          } else {
            const nameArray = fullName.split(' ');
            let nameFound = false;
            
            for (let i = 1; i < nameArray.length; i++) {
              if (nameArray[i] && nameArray[i][0] === nameArray[i][0].toUpperCase() && nameArray[i].length > 1) {
                result.name = nameArray.slice(0, i).join(' ');
                result.surname = nameArray.slice(i).join(' ');
                nameFound = true;
                sendLog(`📝 Imię/nazwisko (wielkie litery): imię="${result.name}", nazwisko="${result.surname}"`, 'info');
                break;
              }
            }

            if (!nameFound) {
              const nameParts = fullName.split(' ');
              if (nameParts.length > 0) {
                result.name = nameParts[0];
                result.surname = nameParts.slice(1).join(' ');
                sendLog(`📝 Imię/nazwisko (standard): imię="${result.name}", nazwisko="${result.surname}"`, 'info');
              }
            }

            if (!result.name && !result.surname) {
              result.surname = fullName;
              sendLog(`📝 Imię/nazwisko (ostateczność): nazwisko="${result.surname}"`, 'info');
            }
          }
        }

        // Linia 2 - ulica (z logiką krajową)
        if (addressLines.length > 1) {
          const streetLine = addressLines[1].trim();
          sendLog(`🏠 Parsowanie ulicy z: "${streetLine}"`, 'info');
          let handled = false;
          
          if (isNetherlands) {
            sendLog(`🇳🇱 Logika holenderska dla: "${streetLine}"`, 'info');
            const dutchStreetPattern = /^(straat|laan|weg|gracht|singel|pad|hof|plantsoen|park|plein)\s+/i;
            if (dutchStreetPattern.test(streetLine)) {
              result.street = streetLine;
              handled = true;
              sendLog(`✅ Adres holenderski (wzorzec): ulica="${result.street}"`, 'info');
            } else {
              result.street = streetLine;
              handled = true;
              sendLog(`✅ Adres holenderski (standard): ulica="${result.street}"`, 'info');
            }
          } else if (isGermany) {
            sendLog(`🇩🇪 Logika niemiecka dla: "${streetLine}"`, 'info');
            
            // Niemieckie słowa kluczowe ulic
            const germanStreetWords = ['straße', 'strasse', 'str\.', 'str ', 'weg', 'platz', 'allee', 'gasse', 'ring', 'damm', 'ufer', 'chaussee'];
            const hasGermanStreetWord = germanStreetWords.some(word => 
              new RegExp(word, 'i').test(streetLine)
            );
            
            if (hasGermanStreetWord) {
              // Linia wygląda na ulicę - spróbuj wyodrębnić numer
              const numberMatch = streetLine.match(/^(.+?)\s+(\d+[a-zA-Z]?)\s*$/);
              if (numberMatch) {
                result.street = numberMatch[1].trim();
                result.homeNumber = numberMatch[2].trim();
                sendLog(`✅ Adres niemiecki (ulica+numer): ulica="${result.street}", numer="${result.homeNumber}"`, 'success');
                handled = true;
              } else {
                result.street = streetLine;
                sendLog(`✅ Adres niemiecki (tylko ulica): ulica="${result.street}"`, 'info');
                handled = true;
              }
            } else {
              // Linia 2 nie wygląda na ulicę - prawdopodobnie to firma
              // Szukaj ulicy w kolejnych liniach
              sendLog(`🏢 Linia "${streetLine}" nie wygląda na niemiecką ulicę - traktuję jako firmę`, 'info');
              result.company = streetLine;
              
              // Szukaj ulicy w liniach 3, 4, 5...
              for (let i = 2; i < addressLines.length; i++) {
                const nextLine = addressLines[i].trim();
                const nextHasStreetWord = germanStreetWords.some(word => 
                  new RegExp(word, 'i').test(nextLine)
                );
                
                if (nextHasStreetWord) {
                  const nextNumberMatch = nextLine.match(/^(.+?)\s+(\d+[a-zA-Z]?)\s*$/);
                  if (nextNumberMatch) {
                    result.street = nextNumberMatch[1].trim();
                    result.homeNumber = nextNumberMatch[2].trim();
                    sendLog(`✅ Adres niemiecki (ulica w linii ${i+1}): ulica="${result.street}", numer="${result.homeNumber}"`, 'success');
                  } else {
                    result.street = nextLine;
                    sendLog(`✅ Adres niemiecki (ulica w linii ${i+1}): ulica="${result.street}"`, 'info');
                  }
                  handled = true;
                  break;
                }
              }
              
              if (!handled) {
                sendLog(`⚠️ Nie znaleziono ulicy w kolejnych liniach dla Niemiec`, 'warning');
                handled = true; // Oznacz jako handled, żeby nie wchodzić w ogólną logikę
              }
            }
          } else if (isBelgium) {
            sendLog(`🇧🇪 Logika belgijska dla: "${streetLine}"`, 'info');
            if (/BCE|VAT|TVA|BTW|entreprise|bedrijf|company|assurances/i.test(streetLine)) {
              sendLog(`⚠️ Wykryto linię firmową w belgijskim adresie: "${streetLine}" - szukam ulicy w dalszych liniach`, 'warning');
              handled = true;
            } else {
              const belgianStreetKeywords = /^(rue|avenue|boulevard|chaussée|straat|laan|weg|place|square|lane|way|drive|court|close)\s+/i;
              if (belgianStreetKeywords.test(streetLine)) {
                result.street = streetLine;
                handled = true;
                sendLog(`✅ Adres belgijski (wzorzec): ulica="${result.street}"`, 'info');
              } else {
                result.street = streetLine;
                handled = true;
                sendLog(`✅ Adres belgijski (fallback): ulica="${result.street}"`, 'info');
              }
            }
          } else if (isItaly) {
            sendLog(`🇮🇹 Logika włoska dla: "${streetLine}"`, 'info');
            const italyMatch = streetLine.match(/^(.+?)\s+(\d+(?:\s*-\s*.+)?)$/);
            if (italyMatch) {
              result.street = italyMatch[1].trim();
              result.homeNumber = italyMatch[2].trim();
              handled = true;
              sendLog(`✅ Adres włoski (wzorzec): numer="${result.homeNumber}", ulica="${result.street}"`, 'info');
            } else {
              result.street = streetLine;
              handled = true;
              sendLog(`✅ Adres włoski (fallback): ulica="${result.street}"`, 'info');
            }
          } else if (isFrance) {
            sendLog(`🇫🇷 Logika francuska dla: "${streetLine}"`, 'info');
            const franceMatch = streetLine.match(/^(\d+(?:\s+(?:bis|ter|quater))?)\s+(.+)$/i);
            if (franceMatch) {
              result.homeNumber = franceMatch[1].trim();
              result.street = franceMatch[2].trim();
              handled = true;
              sendLog(`✅ Adres francuski (wzorzec): numer="${result.homeNumber}", ulica="${result.street}"`, 'success');
            } else {
              result.street = streetLine;
              handled = true;
              sendLog(`✅ Adres nieprzetworzony: ulica="${result.street}"`, 'info');
            }
          } else if (isUnitedKingdom) {
            sendLog(`🇬🇧 Logika brytyjska dla: "${streetLine}"`, 'info');
            
            // UK street patterns - check for typical UK street suffixes
            const ukStreetSuffixes = [
              'CLOSE', 'ROAD', 'STREET', 'AVENUE', 'DRIVE', 'LANE', 'GARDENS', 
              'SQUARE', 'CRESCENT', 'CIRCUS', 'PLACE', 'WALK', 'WAY', 'ROW',
              'HILL', 'PARK', 'GREEN', 'MEADOW', 'VALE', 'GROVE', 'WOOD', 'POINT'
            ];
            
            const hasUkStreetSuffix = ukStreetSuffixes.some(suffix => 
              streetLine.toUpperCase().includes(suffix)
            );
            
            // Jeśli linia zaczyna się od FLAT ale zawiera suffix ulicy - użyj całości jako ulicy
            if (/^(FLAT|HOUSE|APARTMENT|ROOM|SUITE|UNIT)\s+\d+/i.test(streetLine) && !hasUkStreetSuffix) {
              sendLog(`⚠️ Wykryto linię mieszkalną w UK: "${streetLine}" - szukam ulicy w dalszych liniach`, 'warning');
              handled = true;
            } else if (hasUkStreetSuffix) {
              // Linia zawiera suffix ulicy - użyj jako ulicy (nawet jeśli zaczyna się od FLAT)
              result.street = streetLine;
              handled = true;
              sendLog(`✅ Adres brytyjski (suffix): ulica="${result.street}"`, 'success');
            } else {
              // Check if it looks like a UK postcode (skip, not street)
              if (/^[A-Z]{1,2}\d{1,2}\s?\d[A-Z]{2}$/i.test(streetLine)) {
                sendLog(`⚠️ Wykryto kod pocztowy UK: "${streetLine}" - to nie jest ulica`, 'warning');
              } else if (streetLine.length > 3 && !/\d/.test(streetLine) && streetLine.split(' ').length === 1) {
                // Single word without numbers - likely city/town, not street
                sendLog(`⚠️ Linia "${streetLine}" wygląda na miasto UK (słowo pojedyncze), nie ulicę - pomijam`, 'warning');
              } else {
                // Multi-word street or street with numbers - treat as street
                result.street = streetLine;
                handled = true;
                sendLog(`✅ Adres brytyjski (fallback): ulica="${result.street}"`, 'info');
              }
            }
          } else if (isSpain) {
            sendLog(`🇪🇸 Logika hiszpańska dla: "${streetLine}"`, 'info');
            const spainMatch = streetLine.match(/^(.+)\s+(\d+(?:\s*,\s*\d+)?(?:\s*[A-D])?)$/i);
            if (spainMatch) {
              result.street = spainMatch[1].trim();
              result.homeNumber = spainMatch[2].trim();
              handled = true;
              sendLog(`✅ Adres hiszpański (wzorzec): numer="${result.homeNumber}", ulica="${result.street}"`, 'info');
            }
          }
          
          // Ogólna logika dla pozostałych krajów
          if (!handled) {
            sendLog(`🌍 Logika ogólna dla: "${streetLine}"`, 'info');
            const generalMatch = streetLine.match(/^(.+?)\s+(\d+(?:\s*[A-Za-z]|\s*,\s*\d+|\s*[A-D])?)$/);
            if (generalMatch) {
              result.street = generalMatch[1].trim();
              result.homeNumber = generalMatch[2].trim();
              sendLog(`✅ Adres ogólny (wzorzec): numer="${result.homeNumber}", ulica="${result.street}"`, 'info');
            } else {
              result.street = streetLine;
              sendLog(`✅ Adres nieprzetworzony: ulica="${result.street}"`, 'info');
            }
          }
        }

        // Pozostałe linie - miasto, kod pocztowy, kraj
        sendLog(`🏙️ Rozpoczynam parsowanie miasta/kodu/kraju od linii 2 do ${addressLines.length-1}`, 'info');
        let cityFound = false;
        let postcodeFound = false;
        let countryFound = false;
        const postCodePattern = /\b(?:\d{5}|\d{4,5}-\d{3,4}|[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2})\b/;
        const countryNames = ['Germany', 'Deutschland', 'Niemcy', 'Spain', 'España', 'Hiszpania', 
                              'France', 'Frankreich', 'Francja', 'United Kingdom', 'UK', 'Wielka Brytania',
                              'Italy', 'Italien', 'Włochy', 'Poland', 'Polen', 'Polska', 'Portugal', 'Portugalia',
                              'Sweden', 'Sverige', 'Szwecja', 'Belgium', 'Belgique', 'België', 'Belgia'];
        
        for (let i = 2; i < addressLines.length; i++) {
          const line = addressLines[i].trim();
          sendLog(`🔍 Linia ${i}: "${line}"`, 'info');
          
          // Pomiń linie już użyte jako ulica lub firma
          if (result.street) {
            const streetWithNumber = result.homeNumber ? `${result.street} ${result.homeNumber}` : result.street;
            const streetWithNumberAlt = result.homeNumber ? `${result.street}${result.homeNumber}` : result.street;
            // Sprawdź różne formaty: dokładne dopasowanie lub linia zaczyna się od ulicy
            if (line === result.street || 
                line === streetWithNumber || 
                line === streetWithNumberAlt ||
                line.trim() === streetWithNumber.trim() ||
                (result.homeNumber && line.startsWith(result.street) && line.includes(result.homeNumber))) {
              sendLog(`⏭️ Pomijam linię - już użyta jako ulica: "${line}"`, 'info');
              continue;
            }
          }
          if (result.company && line === result.company) {
            sendLog(`⏭️ Pomijam linię - już użyta jako firma: "${line}"`, 'info');
            continue;
          }
          
          // Sprawdź kraj
          if (!countryFound && countryNames.some(country => line.includes(country))) {
            result.country = line;
            countryFound = true;
            sendLog(`🌍 Znaleziono kraj: "${result.country}"`, 'info');
            continue;
          }
          
          // Specjalna logika dla poszukiwania ulicy w dalszych liniach
          if (!result.street) {
            if (isBelgium && /^(rue|avenue|boulevard|chaussée|straat|laan|weg|place|square|lane|way|drive|court|close)\s+/i.test(line)) {
              result.street = line;
              sendLog(`🇧🇪 Adres belgijski - znaleziono ulicę w dalszej linii: "${result.street}"`, 'info');
              continue;
            }
            if (isNetherlands && /^(straat|laan|weg|gracht|singel|pad|hof|plantsoen|park|plein)\s+/i.test(line)) {
              result.street = line;
              sendLog(`🇳🇱 Adres holenderski - znaleziono ulicę w dalszej linii: "${result.street}"`, 'info');
              continue;
            }
            if (isGermany && /^(.+?straße|.+?str\.|.+?weg|.+?allee|.+?platz|.+?gasse|.+?ring)\s+/i.test(line)) {
              result.street = line;
              sendLog(`🇩🇪 Adres niemiecki - znaleziono ulicę w dalszej linii: "${result.street}"`, 'info');
              continue;
            }
            if (isUnitedKingdom) {
              // UK street patterns - check for typical UK street suffixes
              const ukStreetSuffixes = [
                'CLOSE', 'ROAD', 'STREET', 'AVENUE', 'DRIVE', 'LANE', 'GARDENS', 
                'SQUARE', 'CRESCENT', 'CIRCUS', 'PLACE', 'WALK', 'WAY', 'ROW',
                'HILL', 'PARK', 'GREEN', 'MEADOW', 'VALE', 'GROVE', 'WOOD'
              ];
              
              const hasUkStreetSuffix = ukStreetSuffixes.some(suffix => 
                line.toUpperCase().includes(suffix)
              );
              
              if (hasUkStreetSuffix) {
                result.street = line;
                sendLog(`🇬🇧 Adres brytyjski - znaleziono ulicę w dalszej linii: "${result.street}"`, 'info');
                continue;
              }
            }
          }
          
          // Pomiń linie z instrukcjami dostawy (Francja - "code" do domofonu, nazwy budynków, bloki)
          if (isFrance && (/^code\s+/i.test(line) || 
                           /^(bloc|bâtiment|batiment|bât|bat|résidence|residence|entrée|entree|porte|escalier|étage|etage|asc|ascenseur)\s+/i.test(line) ||
                           /^[A-Z]-?\d+/i.test(line) ||
                           /codes?\s*(portes?|d'accès|acces)/i.test(line))) {
            sendLog(`🇫🇷 Pomijam linię z instrukcją/nazwą budynku: "${line}"`, 'info');
            if (!result.description) {
              result.description = line;
            }
            continue;
          }
          
          // Pomiń linie z instrukcjami dostawy (Włochy - "piano" = piętro)
          if (isItaly && /^(primo|secondo|terzo|quarto|quinto|piano|int\.|interno|scala)\s*/i.test(line)) {
            sendLog(`🇮🇹 Pomijam linię z instrukcją dostawy (piętro): "${line}"`, 'info');
            if (!result.description) {
              result.description = line;
            }
            continue;
          }
          
          // Kod pocztowy (sprawdzaj przed miastem dla Hiszpanii)
          const postCodeMatch = line.match(postCodePattern);
          if (postCodeMatch && !postcodeFound) {
            result.postcode = postCodeMatch[0];
            postcodeFound = true;
            
            // Dla Hiszpanii: miasto to linia PRZED kodem pocztowym (pomiń kraje)
            if (isSpain && i > 2) {
              // Szukaj wstecz od linii przed kodem pocztowym, pomiń kraje
              for (let j = i - 1; j >= 1; j--) {
                const cityLine = addressLines[j].trim();
                if (!/^\d{5}$/.test(cityLine) && !countryNames.some(country => cityLine.includes(country))) {
                  result.city = cityLine;
                  cityFound = true;
                  sendLog(`🇪🇸 Hiszpania - miasto z linii przed kodem: "${result.city}"`, 'info');
                  break;
                } else {
                  sendLog(`🇪🇸 Hiszpania - pomijam linię (kraj/kod): "${cityLine}"`, 'debug');
                }
              }
            }
            
            const cityPart = line.replace(postCodeMatch[0], '').trim();
            if (cityPart && !cityFound && !isSpain) {
              result.city = cityPart;
              cityFound = true;
              sendLog(`🏙️ Znaleziono kod+miasto: kod="${result.postcode}", miasto="${result.city}"`, 'info');
            } else {
              sendLog(`📮 Znaleziono kod pocztowy: "${result.postcode}"`, 'info');
            }
            continue;
          }
          
          // Miasto (dla nie-Hiszpanii)
          if (!cityFound && !isSpain && !/^\d{5}$/.test(line) && !/^\d{4,5}-\d{3,4}$/.test(line)) {
            result.city = line;
            cityFound = true;
            sendLog(`🏙️ Znaleziono miasto: "${result.city}"`, 'info');
            continue;
          }
          
          // Czysty kod pocztowy
          if (!postcodeFound && /^\d+$/.test(line)) {
            result.postcode = line;
            postcodeFound = true;
            sendLog(`📮 Znaleziono czysty kod pocztowy: "${result.postcode}"`, 'info');
            continue;
          }
          
          // Ostatnia linia jako kraj
          if (i === addressLines.length - 1 && !countryFound) {
            result.country = line;
            sendLog(`🌍 Ostatnia linia jako kraj: "${result.country}"`, 'info');
          }
        }
        
      } catch (e) {
        sendLog(`❌ Błąd podczas ekstrakcji danych adresowych: ${e.message}`, 'error');
      }
      
      // Ekstrakcja numeru telefonu z DOM Amazona (poza adresem)
      try {
        sendLog(`🔍 Szukam numeru telefonu w DOM...`, 'info');
        
        // Różne selektory telefonu na Amazon
        const phoneSelectors = [
          '[data-test-id*="phone"]',
          '[data-test-id*="Phone"]',
          '[data-test-id*="telephone"]',
          '[data-test-id*="mobile"]',
          '.phone-number',
          '.telephone',
          '.contact-phone',
          'span:contains("Phone")',
          'div:contains("Phone")',
          'span:contains("Tel")',
          'div:contains("Tel")'
        ];
        
        for (const selector of phoneSelectors) {
          try {
            const phoneElement = document.querySelector(selector);
            if (phoneElement) {
              let phoneText = phoneElement.innerText || phoneElement.textContent;
              phoneText = phoneText.trim();
              
              // Sprawdź czy to wygląda jak numer telefonu
              if (phoneText && /[\d\+]/.test(phoneText) && phoneText.length > 5) {
                result.phone = phoneText;
                sendLog(`✅ Znaleziono telefon (selektor ${selector}): "${result.phone}"`, 'success');
                break;
              }
            }
          } catch (e) {
            // Ignoruj błędy selektorów
          }
        }
        
        // Jeśli nie znaleziono, spróbuj w całym dokumencie
        if (!result.phone) {
          const allElements = document.querySelectorAll('span, div, p, td');
          for (const el of allElements) {
            const text = el.innerText || el.textContent;
            if (text && /(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/.test(text)) {
              const phoneMatch = text.match(/(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);
              if (phoneMatch && phoneMatch[0].length > 6) {
                result.phone = phoneMatch[0].trim();
                sendLog(`✅ Znaleziono telefon (regex): "${result.phone}"`, 'success');
                break;
              }
            }
          }
        }
        
        if (!result.phone) {
          sendLog(`⚠️ Nie znaleziono numeru telefonu w DOM`, 'warning');
        }
        
      } catch (e) {
        sendLog(`❌ Błąd podczas ekstrakcji telefonu: ${e.message}`, 'error');
      }
      
      // Ustaw isValid jeśli mamy podstawowe dane adresowe
      if ((result.name || result.surname) && (result.city || result.street || result.postcode)) {
        result.isValid = true;
        sendLog(`✅ Adres jest VALID (ma podstawowe dane)`, 'info');
      } else {
        result.isValid = false;
        sendLog(`❌ Adres jest INVALID (brak podstawowych danych)`, 'warning');
      }
      
      sendLog(`=== 🏁 KONIEC EXTRACTADDRESSDATA ===`, 'info');
      sendLog(`📊 Wynik końcowy: imię="${result.name}", nazwisko="${result.surname}", firma="${result.company}", ulica="${result.street}", numer="${result.homeNumber}", miasto="${result.city}", kod="${result.postcode}", kraj="${result.country}", valid=${result.isValid}`, 'info');
      
      return result;
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
function calculateTaxRate(matchedProduct, orderLine, useUkVatZero = false) {
  // Próbujemy znaleźć stawkę VAT z różnych źródeł
  
  // 0. Specjalny przypadek: UK VAT 0% - jeśli opcja jest włączona
  if (useUkVatZero) {
    sendLog('UK VAT 0%: Ustawiam stawkę VAT na 0% dla zamówienia UK', 'info');
    return 0;
  }
  
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
    'GB': 0,  // UK - zawsze 0% VAT
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
      productRows.forEach(row => processProductRow(row));
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
  function processProductRow(row) {
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
          priceGross = safeParseFloat(priceMatch[1]);
          sendLog(`Znaleziono cenę brutto z tabeli podsumowania: ${priceGross}`, 'info');
        }
      }
      
      // 1a. Pobierz cenę netto z kolumny "Unit price (VAT exclusive)" - dla wszystkich
      let unitPriceNet = 0;
      const priceNetElement = row.querySelector('td:nth-child(6) span, td.a-text-right:nth-child(6) span');
      if (priceNetElement) {
        const priceNetText = priceNetElement.innerText || priceNetElement.textContent;
        const priceNetMatch = priceNetText.match(/([€£$]?\s*[\d.,]+)/);
        if (priceNetMatch && priceNetMatch[1]) {
          unitPriceNet = safeParseFloat(priceNetMatch[1]);
          sendLog(`Znaleziono cenę netto (unit) z kolumny VAT exclusive: ${unitPriceNet}`, 'debug');
        }
      }

            
      // 2. Pobieranie kwoty VAT z tabeli podsumowania
      const vatElement = row.querySelector('td:nth-child(8) > div > table.a-normal.a-spacing-none > tbody > div:nth-child(2) > div:nth-child(3) > span');
      if (vatElement) {
        const vatText = vatElement.innerText || vatElement.textContent;
        const vatMatch = vatText.match(/([€£$]?\s*[\d.,]+)/);
        if (vatMatch && vatMatch[1]) {
          vatAmount = safeParseFloat(vatMatch[1]);
          sendLog(`Znaleziono kwotę VAT z tabeli podsumowania: ${vatAmount}`, 'info');
        }
      }
      
      // 3. Obliczanie stawki VAT - POPRAWKA dla zamówień wieloproduktowych
      
      // Oblicz jednostkową cenę brutto
      const unitPriceGross = (quantity > 0 && priceGross > 0) ? (priceGross / quantity) : 0;
      
      // NOWA LOGIKA: Dla zamówień wieloproduktowych, sprawdź czy ceny są już podzielone poprawnie
      const allProductRows = document.querySelectorAll('table.a-keyvalue tbody tr');
      const isMultiItemOrder = allProductRows.length > 1;
      
      if (isMultiItemOrder) {
        sendLog(`Wykryto zamówienie wieloproduktowe (${allProductRows.length} produktów) - sprawdzam podział cen`, 'info');
        
        // Dla zamówień wieloproduktowych, upewnij się że cena jest już jednostkowa
        if (priceGross > 0 && quantity > 1) {
          // Sprawdź czy cena nie jest już jednostkowa poprzez porównanie z ceną netto
          if (unitPriceNet > 0 && Math.abs(priceGross - (unitPriceNet * quantity)) < 0.01) {
            sendLog(`Cena brutto (${priceGross}) wydaje się być już łączna dla ${quantity} sztuk`, 'debug');
          } else {
            sendLog(`Używam ceny brutto jako jednostkowej: ${priceGross}`, 'debug');
          }
        }
      }

      // Sprawdź czy to transakcja WDT (0% VAT dla B2B)
      const isWDTTransaction = detectWDTTransaction(row, priceGross, vatAmount);
      
      // Sprawdź czy to zamówienie UK z opcją VAT 0% - NAJWYŻSZY PRIORYTET
      if (useUkVatZero) {
        // UK VAT 0% - ustawiamy 0% VAT
        vatRate = 0;
        priceNet = unitPriceNet > 0 ? unitPriceNet : priceGross; // Użyj ceny z kolumny VAT exclusive
        vatAmount = 0;
        sendLog(`UK VAT 0%: Ustawiam stawkę VAT na 0%, cena netto: ${priceNet}`, 'info');
      } else if (isWDTTransaction) {
        // Transakcja WDT - 0% VAT dla B2B
        vatRate = 0;
        priceNet = priceGross; // Cena bez VAT
        vatAmount = 0;
        sendLog(`WDT B2B: Wykryto transakcję 0% VAT, cena netto: ${priceNet}`, 'info');
      } else if (vatAmount > 0 && priceGross > 0) {
        // POPRAWKA: Dla zamówień wieloproduktowych, upewnij się że VAT jest obliczany poprawnie
        let calculatedPriceNet = priceGross - vatAmount;
        
        // Jeśli mamy cenę netto z kolumny, użyj jej do weryfikacji
        if (unitPriceNet > 0 && isMultiItemOrder) {
          const expectedVatAmount = priceGross - (unitPriceNet * quantity);
          if (Math.abs(expectedVatAmount - vatAmount) < 0.01) {
            calculatedPriceNet = unitPriceNet * quantity;
            sendLog(`Wieloproduktowe: Użyto ceny netto z kolumny: ${calculatedPriceNet}`, 'debug');
          }
        }
        
        vatRate = Math.round((vatAmount / calculatedPriceNet) * 100);
        sendLog(`✅ Obliczono stawkę VAT z danych Amazona: ${vatRate}% (na podstawie kwoty VAT: ${vatAmount}, cena brutto: ${priceGross})`, 'success');
      } else {
        // Użyj funkcji calculateTaxRate - POPRAWIONE WYKRYWANIE KRAJU
        // PRIORYTET: Sales Channel, potem adres dostawy (BEZ URL)
        let countryCode = 'EU'; // Domyślnie
        
        // Najpierw spróbuj pobrać marketplace z Sales Channel (najwyższy priorytet)
        const marketplace = getMarketplaceFromSalesChannel();
        if (marketplace) {
          const marketplaceToCountry = {
            'se': 'SE', // Szwecja
            'es': 'ES', // Hiszpania  
            'fr': 'FR', // Francja
            'it': 'IT', // Włochy
            'nl': 'NL', // Holandia
            'de': 'DE', // Niemcy
            'uk': 'GB', // UK
            'pl': 'PL'  // Polska
          };
          
          if (marketplaceToCountry[marketplace]) {
            countryCode = marketplaceToCountry[marketplace];
            sendLog(`✅ Wykryto kraj VAT z Sales Channel: Amazon.${marketplace} -> ${countryCode}`, 'success');
          }
        }
        
        // Jeśli nie udało się z Sales Channel, spróbuj z adresu dostawy
        if (countryCode === 'EU') {
          try {
            const addressElement = findAddressElement();
            if (addressElement) {
              const addressData = extractAddressData(addressElement.innerText || addressElement.textContent);
            if (addressData && addressData.country) {
              const countryName = addressData.country.trim();
              
              // Mapuj nazwy krajów na kody
              const countryMapping = {
                'Germany': 'DE', 'Deutschland': 'DE', 'Niemcy': 'DE',
                'France': 'FR', 'Frankreich': 'FR', 'Francja': 'FR',
                'Spain': 'ES', 'España': 'ES', 'Hiszpania': 'ES',
                'Italy': 'IT', 'Italien': 'IT', 'Włochy': 'IT',
                'Poland': 'PL', 'Polen': 'PL', 'Polska': 'PL',
                'Sweden': 'SE', 'Sverige': 'SE', 'Szwecja': 'SE',
                'Portugal': 'PT', 'Portugal': 'PT', 'Portugalia': 'PT',
                'Belgium': 'BE', 'Belgique': 'BE', 'België': 'BE', 'Belgia': 'BE',
                'United Kingdom': 'GB', 'UK': 'GB', 'Wielka Brytania': 'GB',
                'USA': 'US', 'United States': 'US'
              };
              
              if (countryMapping[countryName]) {
                countryCode = countryMapping[countryName];
                sendLog(`✅ Wykryto kraj VAT z adresu dostawy: ${countryName} -> ${countryCode}`, 'success');
              }
            }
            }
          } catch (e) {
            sendLog(`Nie udało się pobrać kraju z adresu: ${e.message}`, 'debug');
          }
        }
        
        // Jeśli nie udało się z żadnego źródła, użyj domyślnej stawki UE
        if (countryCode === 'EU') {
          sendLog(`⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)`, 'warning');
        }

        const vatRates = {
          'DE': 19, // Niemcy
          'GB': 0,  // UK - zawsze 0% VAT
          'FR': 20, // Francja
          'ES': 21, // Hiszpania
          'IT': 22, // Włochy
          'PL': 23, // Polska
          'SE': 25, // Szwecja
          'PT': 23, // Portugalia
          'BE': 21, // Belgia
          'US': 0,  // USA - bez VAT
          'EU': 21  // Domyślnie dla UE
        };

        // Dla UK zawsze 0% VAT - niezależnie od innych ustawień
        if (countryCode === 'GB' || useUkVatZero) {
          vatRate = 0;
          sendLog(`🇬🇧 UK VAT 0%: Ustawiam stawkę VAT na 0% dla kraju ${countryCode}`, 'info');
        } else {
          vatRate = vatRates[countryCode] || 21;
          sendLog(`⚠️ Użyto stawki VAT dla kraju (${countryCode}): ${vatRate}% (nie udało się odczytać z Amazona)`, 'warning');
        }
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
              promotionAmount = safeParseFloat(promotionMatch[1]);
              sendLog(`Znaleziono promocję: -${promotionAmount}`, 'info');
            }
            
            // Wyciągnij odpowiednią wartość - dla UK VAT 0% używamy "Sales proceeds net of VAT", w przeciwnym razie "Item total"
          let valueLabel = "Item total";
          let valuePattern = /Item total[:\s]*([€£$¥]?\s*[\d.,]+)/i;
          
          if (useUkVatZero) {
            // Dla UK VAT 0% szukamy "Sales proceeds net of VAT"
            valueLabel = "Sales proceeds net of VAT";
            valuePattern = /Sales proceeds net of VAT[:\s]*([€£$¥]?\s*[\d.,]+)/i;
          }
          
          const valueMatch = proceedsText.match(valuePattern);
          if (valueMatch && valueMatch[1]) {
            finalItemTotal = safeParseFloat(valueMatch[1]);
            sendLog(`Znaleziono ${valueLabel} po promocji: ${finalItemTotal}`, 'info');
          }
          }
        }
        
        // Oblicz cenę jednostkową - użyj ceny po promocji jeśli dostępna
        let pricePerUnit = priceGross;
        
        if (hasPromotion && promotionAmount !== null && quantity > 0) {
          if (useUkVatZero) {
            // Dla UK VAT 0%: cena netto (priceNet) minus promocja na sztukę
            pricePerUnit = priceNet - (promotionAmount / quantity);
            // Zapobiegaj ujemnym cenom
            if (pricePerUnit < 0) {
              pricePerUnit = 0;
              sendLog(`⚠️ UK VAT 0% PROMOCJA: Cena ujemna, ustawiam na 0`, 'warning');
            }
            sendLog(`UK VAT 0% PROMOCJA: ${priceNet} - (${promotionAmount}/${quantity}) = ${pricePerUnit}`, 'info');
          } else {
            // Standardowe obliczenie: użyj finalItemTotal
            pricePerUnit = finalItemTotal / quantity;
            sendLog(`PROMOCJA: Obliczono cenę jednostkową po promocji: ${finalItemTotal} / ${quantity} = ${pricePerUnit} (zamiast standardowej ${priceGross})`, 'info');
          }
        } else if (quantity > 1 && priceGross > 0) {
          // Standardowe obliczenie bez promocji
          pricePerUnit = priceGross / quantity;
          sendLog(`Przeliczono cenę jednostkową: ${priceGross} / ${quantity} = ${pricePerUnit}`, 'info');
        } else if (useUkVatZero && priceNet > 0) {
          // UK VAT 0% fallback: użyj ceny netto gdy inne logiki zawiodą
          pricePerUnit = priceNet;
          sendLog(`UK VAT 0% fallback: używam ceny netto: ${priceNet}`, 'info');
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
  // Zawsze dodawaj do arraya debug logs - bez filtrowania (dla diagnostyki)
  if (!window.sellasistDebugLogs) {
    window.sellasistDebugLogs = [];
  }
  window.sellasistDebugLogs.push(`[${level.toUpperCase()}] ${message}`);
  
  // Console loguj tylko w zależności od poziomu
  if (level === 'debug' && !window.debugMode) {
    return; // Nie console loguj wiadomości debug, jeśli tryb debugowania jest wyłączony
  }
  
  // OGRANICZENIE LOGÓW DLA UŻYTKOWNIKA - wysyłaj tylko ważne wiadomości
  const shouldShowToUser = 
    level === 'error' || 
    level === 'warning' || 
    (level === 'info' && (
      message.includes('ROZPOCZYNAM PRZETWARZANIE ZAMÓWIENIA') ||
      message.includes('KONIEC PRZETWARZANIA ZAMÓWIENIA') ||
      message.includes('Finalna waluta zamówienia') ||
      message.includes('UK VAT 0%') ||
      message.includes('WDT B2B') ||
      message.includes('Zamówienie') ||
      message.includes('Produkt') ||
      message.includes('Total:') ||
      message.includes('VAT:') ||
      message.includes('Waluta') ||
      message.includes('Kraj') ||
      message.includes('Mapowanie produktu') ||
      message.includes('zaktualizowane') ||
      message.includes('zachowane')
    ));
  
  // Wysyłaj do UI tylko jeśli to ważna wiadomość
  if (shouldShowToUser) {
    chrome.runtime.sendMessage({ type: 'log', data: message, level: level });
  }
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

// Funkcja do wysyłania logów debugowych na serwer użytkownika (podobna do statystyk)
async function sendDebugLogsToServer(logs, orderData, status) {
  try {
    const manifest = chrome.runtime.getManifest();
    const debugData = {
      action: 'debug_logs',
      version: manifest.version,
      timestamp: Date.now(),
      amazon_order_id: orderData.amazon_order_id,
      sellasist_order_id: orderData.sellasist_order_id,
      processing_status: status,
      logs_count: logs.length,
      logs: logs,
      metadata: {
        url: window.location.href,
        user_agent: navigator.userAgent,
        extension_version: manifest.version
      }
    };
    
    // Wyślij logi asynchronicznie - nie blokuj przetwarzania zamówienia
    fetch('https://appsbusters.pl/stats/extension-debug-logs.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(debugData)
    })
    .then(response => {
      sendLog(`🌐 Otrzymano odpowiedź serwera: status=${response.status}`, 'debug');
      if (!response.ok) {
        return response.text().then(text => {
          throw new Error(`HTTP ${response.status}: ${text}`);
        });
      }
      return response.json();
    })
    .then(data => {
      sendLog(`✅ Serwer logów odpowiedział: ${JSON.stringify(data)}`, 'success');
    })
    .catch(error => {
      // Nie blokuj przetwarzania jeśli serwer logów nie odpowiada
      sendLog(`⚠️ Nie udało się wysłać logów na serwer: ${error.message}`, 'warning');
      sendLog(`🔍 Szczegóły błędu: ${error.name} - ${error.stack}`, 'debug');
      
      // Dodatkowe informacje diagnostyczne
      if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
        sendLog(`🔍 Prawdopodobnie problem CORS lub sieciowy - sprawdź nagłówki CORS na serwerze`, 'warning');
      }
    });
    
    sendLog(`📤 Wysłano ${logs.length} logów debugowych na serwer użytkownika`, 'info');
  } catch (error) {
    sendLog(`❌ Błąd podczas przygotowywania logów do serwera: ${error.message}`, 'error');
  }
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
    case 'cancelled':
      return '[CANCELED]';
    case 'error':
      return '[DATA_ERROR]';
    default:
      return '[UNKNOWN]';
  }
}

// Funkcja zwracająca odpowiedni komunikat na podstawie statusu zamówienia
function getOrderStatusMessage(orderStatus) {
  switch (orderStatus) {
    case 'cancelled':
      return 'Zamówienie anulowane - wszystkie produkty mają status anulowany: imię=Order, nazwisko=[CANCELED]';
    case 'error':
      return 'Błąd danych zamówienia - niepełne lub nieprawidłowe dane: imię=Order, nazwisko=[DATA_ERROR]';
    default:
      return 'Nieznany status zamówienia: imię=Order, nazwisko=[UNKNOWN]';
  }
}


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