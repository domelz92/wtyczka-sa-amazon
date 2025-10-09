// Globalny obiekt stanu aplikacji
const appState = {
  isProcessing: false,
  orders: [],
  currentOrderIndex: -1,
  totalOrders: 0,
  stopRequested: false,
  activeTab: 'orders',
  amazonTabId: null, // Przechowuje ID aktywnej karty Amazona
  processMultipleOrders: false, // Nowa flaga do przetwarzania wielu zamówień
  debugMode: false, // Nowa flaga do debugowania
  continuousMode: false, // Nowa flaga do trybu ciągłego
  lastUpdateCheck: null,
  // Cache dla zamówień Pending
  pendingOrdersCache: new Set(),
  pendingCacheTimestamp: null,
  PENDING_CACHE_DURATION: 3 * 60 * 60 * 1000 // 3 godziny
};

// Elementy DOM
let elements = {};

// Dodaj zmienną globalną na ostatni log
let lastLogEntry = { text: '', level: '' };

// Dodaj mapę do śledzenia ostatnich logów z timestampem
const recentLogs = new Map();
const LOG_DEDUPLICATION_WINDOW_MS = 5000; // 5 sekund

// Inicjalizacja po załadowaniu DOM
document.addEventListener('DOMContentLoaded', function() {
  // Inicjalizacja referencji do elementów DOM
  elements = {
    // Zakładki
    tabSettings: document.getElementById('tab-settings'),
    tabOrders: document.getElementById('tab-orders'),
    tabChangelog: document.getElementById('tab-changelog'),
    contentSettings: document.getElementById('content-settings'),
    contentOrders: document.getElementById('content-orders'),
    contentChangelog: document.getElementById('content-changelog'),
    
    // Ustawienia
    apiKeyInput: document.getElementById('apiKey'),
    apiEndpointInput: document.getElementById('apiEndpoint'),
    saveSettingsBtn: document.getElementById('save-settings'),
    settingsMsg: document.getElementById('settings-msg'),
    processMultipleOrdersCheckbox: document.getElementById('process-multiple-orders'),
    debugModeCheckbox: document.getElementById('debugMode'),
    continuousModeBtn: document.getElementById('continuous-mode-btn'),
    continuousIndicator: document.getElementById('continuous-indicator'),
    statusBarText: document.getElementById('status-bar-text'),
    skipProductUpdateCheckbox: document.getElementById('skip-product-update'),
    skipProductPricesCheckbox: document.getElementById('skip-product-prices'),
    autoCleanupEnabledCheckbox: document.getElementById('autoCleanupEnabled'),
    ukVatZeroCheckbox: document.getElementById('ukVatZero'),
    
    // Zamówienia
    checkOrdersBtn: document.getElementById('check-orders'),
    fetchOrdersBtn: document.getElementById('fetch-orders'),
    stopProcessingBtn: document.getElementById('stop-processing'),
    ordersLog: document.getElementById('orders-log'),
    statusBar: document.getElementById('status-bar'),
    progressBar: document.getElementById('progress-bar'),
    currentOrder: document.getElementById('current-order'),
    orderId: document.getElementById('order-id'),
    orderStatus: document.getElementById('order-status')
  };
  
  // Obsługa przełączania zakładek
  elements.tabSettings.addEventListener('click', () => showTab('settings'));
  elements.tabOrders.addEventListener('click', () => showTab('orders'));
  if (elements.tabChangelog) elements.tabChangelog.addEventListener('click', () => {
    showTab('changelog');
    // Załaduj changelog gdy użytkownik przełącza na tę zakładkę
    loadDynamicChangelog();
  });
  
  // Obsługa zapisywania ustawień
  if (elements.saveSettingsBtn) {
    elements.saveSettingsBtn.addEventListener('click', saveSettings);
  }
  
  // Obsługa przycisków zamówień
  elements.checkOrdersBtn.addEventListener('click', checkOrders);
  elements.fetchOrdersBtn.addEventListener('click', fetchOrders);
  elements.stopProcessingBtn.addEventListener('click', stopProcessing);
  
  // Inicjalizacja checkbox'a przetwarzania wielu zamówień
  if (elements.processMultipleOrdersCheckbox) {
    elements.processMultipleOrdersCheckbox.addEventListener('change', function() {
      appState.processMultipleOrders = this.checked;
      chrome.storage.local.set({ processMultipleOrders: this.checked });
      log(`Ustawiono tryb przetwarzania ${this.checked ? 'wielu' : 'pojedynczych'} zamówień`, 'info');
    });
  }
  
  // Inicjalizacja checkbox'a debugMode
  if (elements.debugModeCheckbox) {
    chrome.storage.local.get(['debugMode'], function(result) {
      elements.debugModeCheckbox.checked = result.debugMode || false;
      appState.debugMode = result.debugMode || false;
    });
    elements.debugModeCheckbox.addEventListener('change', function() {
      chrome.storage.local.set({ debugMode: this.checked });
      appState.debugMode = this.checked;
    });
  }
  
  // Inicjalizacja checkbox'a skipProductUpdate
  if (elements.skipProductUpdateCheckbox) {
    chrome.storage.local.get(['skipProductUpdate'], function(result) {
      elements.skipProductUpdateCheckbox.checked = result.skipProductUpdate || false;
    });
    elements.skipProductUpdateCheckbox.addEventListener('change', function() {
      chrome.storage.local.set({ skipProductUpdate: this.checked });
    });
  }

  // Inicjalizacja checkbox'a skipProductPrices
  if (elements.skipProductPricesCheckbox) {
    chrome.storage.local.get(['skipProductPrices'], function(result) {
      elements.skipProductPricesCheckbox.checked = result.skipProductPrices || false;
    });
    elements.skipProductPricesCheckbox.addEventListener('change', function() {
      chrome.storage.local.set({ skipProductPrices: this.checked });
    });
  }

  // Inicjalizacja checkbox'a autoCleanupEnabled
  if (elements.autoCleanupEnabledCheckbox) {
    chrome.storage.local.get(['autoCleanupEnabled'], function(result) {
      elements.autoCleanupEnabledCheckbox.checked = result.autoCleanupEnabled || false;
    });
    elements.autoCleanupEnabledCheckbox.addEventListener('change', function() {
      chrome.storage.local.set({ autoCleanupEnabled: this.checked });
    });
  }

  // Inicjalizacja checkbox'a ukVatZero
  if (elements.ukVatZeroCheckbox) {
    chrome.storage.local.get(['ukVatZero'], function(result) {
      elements.ukVatZeroCheckbox.checked = result.ukVatZero || false;
    });
    elements.ukVatZeroCheckbox.addEventListener('change', function() {
      chrome.storage.local.set({ ukVatZero: this.checked });
    });
  }
  
  // Obsługa przycisku trybu ciągłego
  if (elements.continuousModeBtn) {
    elements.continuousModeBtn.addEventListener('click', function() {
      if (appState.continuousMode) {
        stopContinuousMode();
      } else {
        startContinuousMode();
      }
    });
  }
  
  // Obsługa przycisku sprawdzania aktualizacji
  const checkUpdatesBtn = document.getElementById('check-updates-btn');
  console.log('Przycisk sprawdzania aktualizacji:', checkUpdatesBtn); // Debug
  if (checkUpdatesBtn) {
    console.log('Dodaję event listener do przycisku sprawdzania aktualizacji'); // Debug
    checkUpdatesBtn.addEventListener('click', async function() {
      console.log('Kliknięto przycisk sprawdzania aktualizacji'); // Debug
      const updateStatus = document.getElementById('update-status');
      updateStatus.textContent = 'Sprawdzam...';
      
      try {
        const manifest = chrome.runtime.getManifest();
        const currentVersion = manifest.version;
        
        // Użyj background script do sprawdzania aktualizacji
        const result = await new Promise((resolve, reject) => {
          chrome.runtime.sendMessage({ action: 'checkForUpdates' }, (response) => {
            if (chrome.runtime.lastError) {
              reject(new Error(chrome.runtime.lastError.message));
            } else {
              resolve(response);
            }
          });
        });
        
        if (result.success) {
          const versionInfo = result.data;
          console.log('AUTOMATYCZNE SPRAWDZANIE - Aktualna wersja wtyczki:', currentVersion); // Debug
          console.log('AUTOMATYCZNE SPRAWDZANIE - Wersja na serwerze:', versionInfo.version); // Debug
          
          if (versionInfo.version !== currentVersion) {
            console.log('AUTOMATYCZNE SPRAWDZANIE - Wykryto nową wersję!'); // Debug
            updateStatus.innerHTML = `<span style="color: #d32f2f; font-weight: bold;">Dostępna nowa wersja ${versionInfo.version}!</span>`;
            showUpdateNotification(versionInfo);
          } else {
            console.log('AUTOMATYCZNE SPRAWDZANIE - Masz najnowszą wersję'); // Debug
            updateStatus.innerHTML = `<span style="color: #388e3c; font-weight: bold;">Masz najnowszą wersję</span>`;
            setTimeout(() => {
              updateStatus.textContent = '';
            }, 5000);
          }
        } else {
          updateStatus.innerHTML = `<span style="color: #f57c00;">Błąd sprawdzania: ${result.error}</span>`;
          setTimeout(() => {
            updateStatus.textContent = '';
          }, 5000);
        }
      } catch (error) {
        console.error('Błąd sprawdzania aktualizacji:', error); // Debug
        updateStatus.innerHTML = `<span style="color: #d32f2f;">Błąd połączenia: ${error.message}</span>`;
        setTimeout(() => {
          updateStatus.textContent = '';
        }, 5000);
      }
    });
  } else {
    console.error('Nie znaleziono przycisku sprawdzania aktualizacji!'); // Debug
  }
  
  // Wczytaj zapisane ustawienia
  loadSettings();
  
  // Preloaduj kraje z API na początku sesji (tylko raz)
  preloadCountriesInBackground();
  
  // Ustaw wersję w stopce z manifestu
  const manifest = chrome.runtime.getManifest();
  const footerVersion = document.getElementById('footer-version');
  if (footerVersion) {
    footerVersion.textContent = `Wersja ${manifest.version}`;
  }
  
  // Sprawdź nową wersję
  checkForUpdates();
  
  // Nasłuchiwanie wiadomości z background.js i content.js
  chrome.runtime.onMessage.addListener(handleMessages);
  
  // Aktualizuj status
  updateStatus('Gotowy do pracy');
  
  // Ustaw zakładkę "Pobierz zamówienia" jako aktywną
  showTab('orders');
  
  // Obsługa przycisku czyszczenia logów
  const clearLogsBtn = document.getElementById('clear-logs-btn');
  if (clearLogsBtn) {
    clearLogsBtn.addEventListener('click', function() {
      elements.ordersLog.innerHTML = '';
    });
  }
});

// Przełączanie zakładek
function showTab(tab) {
  if (tab === 'settings') {
    elements.tabSettings.classList.add('active');
    elements.tabOrders.classList.remove('active');
    if (elements.tabChangelog) elements.tabChangelog.classList.remove('active');
    elements.contentSettings.classList.add('active');
    elements.contentOrders.classList.remove('active');
    if (elements.contentChangelog) elements.contentChangelog.classList.remove('active');
    appState.activeTab = 'settings';
  } else if (tab === 'changelog') {
    if (elements.tabChangelog) elements.tabChangelog.classList.add('active');
    elements.tabSettings.classList.remove('active');
    elements.tabOrders.classList.remove('active');
    if (elements.contentChangelog) elements.contentChangelog.classList.add('active');
    elements.contentSettings.classList.remove('active');
    elements.contentOrders.classList.remove('active');
    appState.activeTab = 'changelog';
  } else {
    elements.tabSettings.classList.remove('active');
    elements.tabOrders.classList.add('active');
    if (elements.tabChangelog) elements.tabChangelog.classList.remove('active');
    elements.contentSettings.classList.remove('active');
    elements.contentOrders.classList.add('active');
    if (elements.contentChangelog) elements.contentChangelog.classList.remove('active');
    appState.activeTab = 'orders';
  }
}

// Wczytywanie ustawień
function loadSettings() {
  chrome.storage.local.get(['apiKey', 'processMultipleOrders', 'apiEndpoint', 'debugMode', 'skipProductUpdate', 'skipProductPrices', 'autoCleanupEnabled', 'ukVatZero'], (data) => {
    if (data.apiKey) elements.apiKeyInput.value = data.apiKey;
    if (data.apiEndpoint) {
      // Usuń https:// lub http:// z początku adresu jeśli istnieje
      elements.apiEndpointInput.value = data.apiEndpoint.replace(/^https?:\/\//, '');
    }
    if (elements.processMultipleOrdersCheckbox) {
      elements.processMultipleOrdersCheckbox.checked = !!data.processMultipleOrders;
      appState.processMultipleOrders = !!data.processMultipleOrders;
    }
    if (elements.debugModeCheckbox) {
      elements.debugModeCheckbox.checked = !!data.debugMode;
    }
    if (elements.skipProductUpdateCheckbox) {
      elements.skipProductUpdateCheckbox.checked = !!data.skipProductUpdate;
    }
    if (elements.skipProductPricesCheckbox) {
      elements.skipProductPricesCheckbox.checked = !!data.skipProductPrices;
    }
    if (elements.autoCleanupEnabledCheckbox) {
      elements.autoCleanupEnabledCheckbox.checked = !!data.autoCleanupEnabled;
    }
    if (elements.ukVatZeroCheckbox) {
      elements.ukVatZeroCheckbox.checked = !!data.ukVatZero;
    }
    // Przycisk trybu ciągłego zawsze startuje jako nieaktywny
    if (elements.continuousModeBtn) {
      elements.continuousModeBtn.textContent = 'Uruchom w trybie ciągłym';
      elements.continuousModeBtn.classList.remove('btn-stop');
    }
    if (elements.continuousIndicator) {
      elements.continuousIndicator.style.display = 'none';
    }
    appState.continuousMode = false;
  });
}

// Zapisywanie ustawień
function saveSettings() {
  const apiKey = elements.apiKeyInput.value.trim();
  let apiEndpoint = elements.apiEndpointInput.value.trim();
  const processMultipleOrders = elements.processMultipleOrdersCheckbox ? elements.processMultipleOrdersCheckbox.checked : false;
  const debugMode = elements.debugModeCheckbox ? elements.debugModeCheckbox.checked : false;
  const skipProductUpdate = elements.skipProductUpdateCheckbox ? elements.skipProductUpdateCheckbox.checked : false;
  const skipProductPrices = elements.skipProductPricesCheckbox ? elements.skipProductPricesCheckbox.checked : false;
  const autoCleanupEnabled = elements.autoCleanupEnabledCheckbox ? elements.autoCleanupEnabledCheckbox.checked : false;
  const ukVatZero = elements.ukVatZeroCheckbox ? elements.ukVatZeroCheckbox.checked : false;
  
  // Usuń https:// lub http:// z początku adresu jeśli istnieje
  apiEndpoint = apiEndpoint.replace(/^https?:\/\//, '');
  
  if (!apiEndpoint) {
    showSettingsMessage('Błąd: Endpoint API jest wymagany!', 'error');
    return;
  }

  // Sprawdź czy endpoint zawiera niedozwolone znaki
  if (!/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(apiEndpoint)) {
    showSettingsMessage('Błąd: Nieprawidłowy format adresu API! Przykład: implemo.sellasist.pl', 'error');
    return;
  }
  
  chrome.storage.local.set({ 
    apiKey, 
    apiEndpoint,
    processMultipleOrders,
    debugMode,
    skipProductUpdate,
    skipProductPrices,
    autoCleanupEnabled,
    ukVatZero
  }, () => {
    if (chrome.runtime.lastError) {
      showSettingsMessage(`Błąd zapisywania: ${chrome.runtime.lastError.message}`, 'error');
      return;
    }
    
    showSettingsMessage('Ustawienia zostały zapisane!', 'success');
    
    // Aktualizacja stanu aplikacji
    appState.processMultipleOrders = processMultipleOrders;
    appState.debugMode = debugMode;
    appState.skipProductUpdate = skipProductUpdate;
    appState.skipProductPrices = skipProductPrices;
  });
}

// Funkcja pomocnicza do wyświetlania komunikatów w ustawieniach
function showSettingsMessage(message, type = 'info') {
  if (!elements.settingsMsg) return;
  
  elements.settingsMsg.textContent = message;
  elements.settingsMsg.className = type;
  
  // Wyczyść komunikat po 5 sekundach
  setTimeout(() => {
    if (elements.settingsMsg) {
      elements.settingsMsg.textContent = '';
      elements.settingsMsg.className = '';
    }
  }, 5000);
}

// Sprawdzanie dostępnych zamówień
async function checkOrders() {
  if (appState.isProcessing) {
    log('Proszę poczekać, trwa przetwarzanie zamówień...', 'warning');
    return;
  }
  
  try {
    updateStatus('Sprawdzanie dostępnych zamówień...');
    
    // Pobierz apiEndpoint i klucz API
    const { apiEndpoint, apiKey } = await getStoredData(['apiEndpoint', 'apiKey']);
    if (!apiKey) {
      log('Uzupełnij klucz API w ustawieniach!', 'error');
      updateStatus('Błąd: Brak klucza API');
      return;
    }
    
    if (!apiEndpoint) {
      log('Uzupełnij Endpoint API w ustawieniach!', 'error');
      updateStatus('Błąd: Brak Endpoint API');
      return;
    }
    
    // Pobierz zamówienia
    const orders = await fetchAmazonOrders(apiKey);
    
    // Wyświetl informacje
    log(`Znaleziono ${orders.length} zamówień do przetworzenia.`, 'success');
    
    // Wyświetl przykładowe zamówienia
    if (orders.length > 0) {
      const examples = orders.slice(0, 3);
      log('\nPrzykładowe zamówienia:\n' + JSON.stringify(examples, null, 2), 'info');
      if (orders.length > 3) {
        log(`\n... i ${orders.length - 3} więcej`, 'info');
      }
    }
    
    updateStatus(`Gotowy do przetwarzania ${orders.length} zamówień`);
    
  } catch (error) {
    log(`Błąd: ${error.message}`, 'error');
    updateStatus('Wystąpił błąd podczas sprawdzania zamówień');
  }
}

// Pobieranie i przetwarzanie zamówień sekwencyjnie
async function fetchOrders() {
  if (appState.isProcessing) {
    log('Trwa już przetwarzanie zamówień. Poczekaj na zakończenie lub zatrzymaj proces.', 'warning');
    return;
  }
  
  try {
    // Resetuj stan
    resetProcessingState();
    appState.isProcessing = true;
    elements.fetchOrdersBtn.disabled = true;
    elements.checkOrdersBtn.disabled = true;
    elements.stopProcessingBtn.disabled = false;
    elements.stopProcessingBtn.style.display = 'inline-block';
    elements.stopProcessingBtn.classList.add('btn-stop');
    
    updateStatus('Pobieranie listy zamówień...');
    
    // Pobierz apiEndpoint i klucz API
    const { apiEndpoint, apiKey } = await getStoredData(['apiEndpoint', 'apiKey']);
    if (!apiKey) {
      log('Uzupełnij klucz API w ustawieniach!', 'error');
      resetProcessingState();
      return;
    }
    
    if (!apiEndpoint) {
      log('Uzupełnij Endpoint API w ustawieniach!', 'error');
      resetProcessingState();
      return;
    }
    
    // Pobierz zamówienia
    appState.orders = await fetchAmazonOrders(apiKey);
    
    // Sortuj zamówienia od najniższego ID do najwyższego
    appState.orders.sort((a, b) => {
      const idA = parseInt(a.sellasist_order_id) || 0;
      const idB = parseInt(b.sellasist_order_id) || 0;
      return idA - idB; // Rosnąco (najniższe pierwsze)
    });
    
    appState.totalOrders = appState.orders.length;
    log(`Zamówienia posortowane od najniższego ID (${appState.orders[0]?.sellasist_order_id}) do najwyższego (${appState.orders[appState.orders.length-1]?.sellasist_order_id})`, 'info');
    
    if (appState.totalOrders === 0) {
      log('Nie znaleziono żadnych zamówień do przetworzenia.', 'warning');
      updateStatus('Brak zamówień do przetworzenia');
      resetProcessingState();
      return;
    }
    
    log(`Znaleziono ${appState.totalOrders} zamówień do przetworzenia.`, 'success');
    if (!appState.processMultipleOrders) {
      log('Zgodnie z ustawieniami, zostanie przetworzone tylko jedno zamówienie.', 'info');
    } else {
      log('Zgodnie z ustawieniami, wszystkie zamówienia zostaną przetworzone automatycznie.', 'info');
    }
    updateStatus(`Rozpoczynam przetwarzanie pierwszego zamówienia...`);
    
    // Rozpocznij przetwarzanie pierwszego zamówienia
    await processNextOrder();
    
  } catch (error) {
    log(`Błąd: ${error.message}`, 'error');
    updateStatus('Wystąpił błąd podczas pobierania zamówień');
    resetProcessingState();
  }
}

// Przetwarzanie kolejnego zamówienia z listy
async function processNextOrder() {
  // Sprawdź czy został zgłoszony stop lub czy nie ma więcej zamówień
  if (appState.stopRequested || appState.currentOrderIndex >= appState.totalOrders - 1) {
    if (appState.stopRequested) {
      log('Zatrzymano przetwarzanie zamówień.', 'warning');
      updateStatus('Przetwarzanie zostało zatrzymane');
    } else {
      log('Zakończono przetwarzanie zamówień!', 'success');
      updateStatus('Przetwarzanie zakończone');
    }
    resetProcessingState();
    return;
  }
  
  // Przejdź do następnego zamówienia
  appState.currentOrderIndex++;
  const currentOrder = appState.orders[appState.currentOrderIndex];
  
  // NOWE: Sprawdź cache Pending przed otwarciem Amazon
  const isPendingCached = await isOrderInPendingCache(currentOrder.amazon_order_id);
  if (isPendingCached) {
    log(`Zamówienie ${currentOrder.amazon_order_id} w cache jako Pending - pomijam i przechodzę do następnego`, 'info');
    // Przejdź do następnego zamówienia
    setTimeout(processNextOrder, 1000);
    return;
  }
  
  const progressPercent = Math.round((appState.currentOrderIndex / appState.totalOrders) * 100);
  
  // Aktualizuj UI
  elements.progressBar.style.width = `${progressPercent}%`;
  elements.orderId.textContent = currentOrder.amazon_order_id;
  elements.orderStatus.textContent = 'Pobieranie szczegółów...';
  elements.currentOrder.style.display = 'block';
  
  updateStatus(`Przetwarzanie zamówienia ${appState.currentOrderIndex + 1}/${appState.totalOrders}: ${currentOrder.amazon_order_id}`);
  
  try {
    // Pobierz klucz API
    const { apiKey } = await getStoredData(['apiKey']);
    
    // Krok 1: Pobierz szczegóły zamówienia z Sellasist
    log(`\n[Zamówienie ${appState.currentOrderIndex + 1}/${appState.totalOrders}] Amazon ID: ${currentOrder.amazon_order_id}, Sellasist ID: ${currentOrder.sellasist_order_id}`, 'info');
    log(`Pobieranie szczegółów zamówienia...`, 'info');
    elements.orderStatus.textContent = 'Pobieranie szczegółów...';
    
    const orderDetails = await fetchOrderDetails(currentOrder.sellasist_order_id, apiKey);
    
    // Krok 2: Otwórz stronę Amazona lub zaktualizuj istniejącą
    log(`Otwieranie/aktualizacja strony Amazon dla zamówienia ${currentOrder.amazon_order_id}...`, 'info');
    elements.orderStatus.textContent = 'Otwieranie Amazon...';
    
    // Nawiguj do strony zamówienia w istniejącej lub nowej karcie
    const tab = await navigateToAmazonOrder(currentOrder.amazon_order_id);
    
    // Krok 3: Przekaż dane do content script do scrapowania i aktualizacji
    log(`Scrapowanie danych z Amazona...`, 'info');
    elements.orderStatus.textContent = 'Scrapowanie danych...';
    
    // Wywołujemy content script do scrapowania i aktualizacji
    await executeContentScript(tab.id, { 
      type: 'scrapOrder', 
      order: currentOrder, 
      orderDetails
    });
    
    // Poczekaj na zakończenie przetwarzania
    // (treść odpowiedzi z content script jest obsługiwana przez handleMessages)
    
    // Przetwarzaj jednocześnie tylko jedno zamówienie lub wiele w zależności od ustawień
    if (!appState.processMultipleOrders) {
      setTimeout(() => {
        log('Przetworzono jedno zamówienie zgodnie z ustawieniami. Kliknij "Pobierz dane zamówień" aby kontynuować z następnym.', 'success');
        updateStatus('Gotowy do przetwarzania kolejnego zamówienia');
        resetProcessingState();
      }, 2000);
    } else {
      // Przejdź do kolejnego zamówienia po krótkim odstępie
      setTimeout(processNextOrder, 3000); // Dłuższy odstęp czasu między zamówieniami
    }
    
  } catch (error) {
    log(`Błąd podczas przetwarzania zamówienia ${currentOrder.amazon_order_id}: ${error.message}`, 'error');
    elements.orderStatus.textContent = 'Błąd!';
    
    // Nawet w przypadku błędu, w trybie pojedynczego zamówienia kończymy
    if (!appState.processMultipleOrders) {
      setTimeout(() => {
        log('Przetwarzanie zakończone z błędami. Kliknij "Pobierz dane zamówień" aby spróbować z następnym zamówieniem.', 'warning');
        updateStatus('Przetwarzanie zatrzymane z powodu błędu');
        resetProcessingState();
      }, 3000);
    } else {
      // Pomimo błędu, przechodzimy do następnego zamówienia po dłuższym odstępie
      log('Przechodzę do następnego zamówienia mimo błędu...', 'warning');
      setTimeout(processNextOrder, 5000); // Jeszcze dłuższy odstęp po błędzie
    }
  }
}

// Zatrzymanie przetwarzania
function stopProcessing() {
  appState.stopRequested = true;
  elements.stopProcessingBtn.disabled = true;
  updateStatus('Zatrzymywanie przetwarzania...');
  log('Zatrzymywanie przetwarzania. Poczekaj na zakończenie bieżącego zamówienia...', 'warning');
  stopContinuousMode();
}

// Resetowanie stanu przetwarzania
function resetProcessingState() {
  appState.isProcessing = false;
  appState.orders = [];
  appState.currentOrderIndex = -1;
  appState.totalOrders = 0;
  appState.stopRequested = false;
  // Nie zamykamy karty Amazona - może być przydatna później
  // appState.amazonTabId = null;
  elements.fetchOrdersBtn.disabled = false;
  elements.checkOrdersBtn.disabled = false;
  elements.stopProcessingBtn.disabled = true;
  elements.stopProcessingBtn.style.display = 'none';
  elements.stopProcessingBtn.classList.remove('btn-stop');
  elements.progressBar.style.width = '0%';
  elements.currentOrder.style.display = 'none';
  elements.orderId.textContent = '-';
  elements.orderStatus.textContent = '-';
}

// Obsługa komunikatów z tła i content scripts
function handleMessages(message, sender, sendResponse) {
  if (message.type === 'log') {
    // Logowanie do interfejsu użytkownika
    if (typeof message.data === 'object') {
      log(JSON.stringify(message.data, null, 2), message.level || 'info');
    } else {
      log(message.data, message.level || 'info');
    }
  } else if (message.type === 'status') {
    // Aktualizacja statusu
    updateStatus(message.data);
  } else if (message.type === 'orderUpdated') {
    // Zamówienie zostało zaktualizowane
    log(`Zamówienie ${message.orderId} zostało zaktualizowane!`, 'success');
    elements.orderStatus.textContent = 'Zaktualizowano!';
  } else if (message.type === 'orderError') {
    // Błąd podczas aktualizacji zamówienia
    log(`Błąd podczas aktualizacji zamówienia ${message.orderId}: ${message.error}`, 'error');
    elements.orderStatus.textContent = 'Błąd!';
  } else if (message.type === 'addToPendingCache') {
    // Dodaj zamówienie do cache Pending
    addOrderToPendingCache(message.orderId);
  } else if (message.type === 'orderSkipped') {
    // Zamówienie zostało pominięte
    log(`Zamówienie ${message.orderId} pominięte: ${message.reason}`, 'info');
    elements.orderStatus.textContent = `Pominięte (${message.reason})`;
  }
}

// Funkcja do dodawania zamówienia do cache Pending w sidebar
function addOrderToPendingCache(orderId) {
  appState.pendingOrdersCache.add(orderId);
  if (!appState.pendingCacheTimestamp) {
    appState.pendingCacheTimestamp = Date.now();
  }
  log(`Dodano zamówienie ${orderId} do cache Pending (na 3h)`, 'debug');
}

// Zmodyfikowana funkcja log z deduplikacją
function log(message, level = 'info') {
  const timestamp = new Date().toLocaleTimeString();
  const key = `${level}:${message}`;
  const now = Date.now();
  // Sprawdź, czy taki log był w ostatnich 5 sekundach
  if (recentLogs.has(key) && now - recentLogs.get(key) < LOG_DEDUPLICATION_WINDOW_MS) {
    return;
  }
  recentLogs.set(key, now);
  // Czyść stare wpisy, żeby mapa nie rosła w nieskończoność
  for (const [k, t] of recentLogs) {
    if (now - t > LOG_DEDUPLICATION_WINDOW_MS) recentLogs.delete(k);
  }
  const logEntry = document.createElement('div');
  logEntry.className = level;
  logEntry.classList.add(level); // Dodaj klasę CSS do kolorowania
  logEntry.textContent = `[${timestamp}] ${message}`;
  elements.ordersLog.appendChild(logEntry);
  elements.ordersLog.scrollTop = elements.ordersLog.scrollHeight;
}

// Aktualizacja paska statusu
function updateStatus(status) {
  if (elements.statusBarText) {
    elements.statusBarText.textContent = status;
  }
}

// Pobieranie danych z chrome.storage
function getStoredData(keys) {
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (data) => {
      resolve(data);
    });
  });
}

// Pobieranie zamówień Amazon z API - z filtrowaniem Pending
async function fetchAmazonOrders(apiKey) {
  const { apiEndpoint } = await getStoredData(['apiEndpoint']);
  if (!apiEndpoint) {
    throw new Error('Endpoint API nie został ustawiony');
  }
  
  const url = `https://${apiEndpoint}/api/v1/amazon`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'apiKey': apiKey,
      'Content-Type': 'application/json'
    }
  });
  
  if (!response.ok) {
    const errorText = await response.text();
    // Rozpoznaj błąd 401 Unknown user
    if (response.status === 401 && errorText.includes('Unknown user')) {
      log('Błąd autoryzacji: nieprawidłowy klucz API (token). Sprawdź poprawność klucza w ustawieniach.', 'error');
      throw new Error('Błąd autoryzacji: nieprawidłowy klucz API (token).');
    }
    // Rozpoznaj błąd 404 No records found
    if (response.status === 404 && errorText.includes('No records found')) {
      log('Nie znaleziono zamówień do aktualizacji.', 'warning');
      return [];
    }
    throw new Error(`Serwer zwrócił błąd: ${response.status} ${response.statusText}. Treść: ${errorText}`);
  }
  
  const orders = await response.json();
  if (!Array.isArray(orders)) {
    throw new Error('Nieprawidłowy format danych zwróconych z API');
  }
  
  // Zwróć wszystkie zamówienia - filtrowanie odbywa się później na Amazon
  return orders;
}

// Pobieranie szczegółów zamówienia z API
async function fetchOrderDetails(orderId, apiKey) {
  log(`Pobieranie szczegółów zamówienia z Sellasist: ID ${orderId}...`, 'info');
  const { apiEndpoint } = await getStoredData(['apiEndpoint']);
  if (!apiEndpoint) {
    throw new Error('Endpoint API nie został ustawiony');
  }
  
  const url = `https://${apiEndpoint}/api/v1/orders/${orderId}`;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'apiKey': apiKey,
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Błąd pobierania szczegółów zamówienia: ${response.status} ${response.statusText}. Treść: ${errorText}`);
    }
    
    const orderDetails = await response.json();
    log(`Pobrano szczegóły zamówienia Sellasist ID: ${orderId}`, 'success');
    return orderDetails;
  } catch (error) {
    log(`Błąd podczas pobierania szczegółów zamówienia ${orderId}: ${error.message}`, 'error');
    throw error;
  }
}

// Nawigacja do zamówienia Amazona (używa istniejącej karty jeśli dostępna)
async function navigateToAmazonOrder(amazonOrderId) {
  return new Promise(async (resolve, reject) => {
    const url = `https://sellercentral.amazon.de/orders-v3/order/${amazonOrderId}`;
    
    try {
      // Jeśli mamy już otwartą kartę Amazon, użyj jej
      if (appState.amazonTabId) {
        // Sprawdź czy karta nadal istnieje
        try {
          await chrome.tabs.get(appState.amazonTabId);
          
          // Zaktualizuj URL w istniejącej karcie
          log(`Używam istniejącej karty (ID: ${appState.amazonTabId}) i aktualizuję URL...`, 'info');
          await chrome.tabs.update(appState.amazonTabId, { url, active: true });
          
          // Czekaj na załadowanie strony
          await waitForTabLoad(appState.amazonTabId);
          
          // Pobierz aktualne informacje o karcie
          const tab = await chrome.tabs.get(appState.amazonTabId);
          resolve(tab);
          return;
        } catch (e) {
          // Karta nie istnieje, zresetuj ID
          log('Poprzednia karta została zamknięta, tworzę nową...', 'info');
          appState.amazonTabId = null;
        }
      }
      
      // Stwórz nową kartę
      log('Tworzę nową kartę dla Amazon...', 'info');
      chrome.tabs.create({ url, active: true }, async (tab) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
          return;
        }
        
        // Zapisz ID karty do późniejszego użycia
        appState.amazonTabId = tab.id;
        
        // Czekaj na załadowanie strony
        await waitForTabLoad(tab.id);
        
        resolve(tab);
      });
    } catch (error) {
      reject(error);
    }
  });
}

// Czekaj na załadowanie strony
function waitForTabLoad(tabId) {
  return new Promise((resolve, reject) => {
    function listener(currentTabId, changeInfo) {
      if (currentTabId === tabId && changeInfo.status === 'complete') {
        chrome.tabs.onUpdated.removeListener(listener);
        
        // Daj stronie dodatkowy czas na wyrenderowanie DOM (1 sekunda)
        setTimeout(resolve, 1000);
      }
    }
    
    chrome.tabs.onUpdated.addListener(listener);
    
    // Ustaw timeout
    setTimeout(() => {
      chrome.tabs.onUpdated.removeListener(listener);
      reject(new Error('Timeout: Strona Amazona nie załadowała się w oczekiwanym czasie'));
    }, 30000);
  });
}

// Wykonywanie content script
function executeContentScript(tabId, message) {
  return new Promise((resolve, reject) => {
    // Najpierw wstrzykujemy skrypt
    chrome.scripting.executeScript({
      target: { tabId },
      files: ['content.js']
    }).then(() => {
      // Daj przeglądarce chwilę na pełne uruchomienie skryptu
      setTimeout(() => {
        // Potem wysyłamy wiadomość
        chrome.tabs.sendMessage(tabId, message, (response) => {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
          } else {
            resolve(response);
          }
        });
      }, 500); // Pół sekundy opóźnienia
    }).catch(error => {
      reject(error);
    });
  });
}

// --- TRYB CIĄGŁY ---
let continuousModeInterval = null;
function startContinuousMode() {
  if (continuousModeInterval) return;
  appState.continuousMode = true;
  updateContinuousUI();

  // Natychmiastowe działania po uruchomieniu trybu ciągłego
  (async () => {
    log('Tryb ciągły: natychmiastowe sprawdzenie zamówień i sesji Amazona', 'info');
    // 1. Odpytaj API o zamówienia
    await checkOrders();
    // 2. Otwórz/odśwież kartę Amazon Seller Central
    const amazonUrl = 'https://sellercentral.amazon.de/orders-v3';
    if (appState.amazonTabId) {
      // Jeśli karta Amazona już istnieje, przeładuj ją
      chrome.tabs.reload(appState.amazonTabId, {}, () => {
        log('Przeładowano kartę Amazon Seller Central', 'info');
        // 3. Sprawdź czy użytkownik jest zalogowany
        checkAmazonLogin(appState.amazonTabId);
      });
    } else {
      // Otwórz nową kartę Amazon Seller Central
      chrome.tabs.create({ url: amazonUrl, active: false }, (tab) => {
        if (tab && tab.id) {
          appState.amazonTabId = tab.id;
          log('Otworzono nową kartę Amazon Seller Central', 'info');
          // Poczekaj chwilę i sprawdź czy zalogowany
          setTimeout(() => checkAmazonLogin(tab.id), 3000);
        }
      });
    }
    // 3. Automatycznie pobierz i zaktualizuj zamówienia
    await fetchOrders();
  })();

  continuousModeInterval = setInterval(async () => {
    if (appState.amazonTabId) {
      chrome.tabs.reload(appState.amazonTabId);
      log('Odświeżono kartę Amazona w trybie ciągłym', 'info');
    }
    await checkOrders();
    log('Wykonano cykliczne sprawdzenie zamówień w trybie ciągłym', 'info');
    // 4. Automatycznie pobierz i zaktualizuj zamówienia co 5 minut
    await fetchOrders();
  }, 5 * 60 * 1000);
  log('Tryb ciągły został uruchomiony (co 5 minut)', 'info');
}

// Funkcja sprawdzająca czy użytkownik jest zalogowany do Amazon Seller Central
function checkAmazonLogin(tabId) {
  chrome.scripting.executeScript({
    target: { tabId },
    func: function() {
      return (
        document.body.innerText.includes('Sign-In') ||
        document.body.innerText.includes('Zaloguj się') ||
        document.body.innerText.includes('Anmelden')
      );
    }
  }).then((results) => {
    if (results && results[0] && results[0].result) {
      log('Użytkownik NIE jest zalogowany do Amazon Seller Central! Zaloguj się ręcznie.', 'error');
      updateStatus('Uwaga: Zaloguj się do Amazon Seller Central!');
    } else {
      log('Użytkownik jest zalogowany do Amazon Seller Central.', 'success');
    }
  }).catch((err) => {
    log('Nie udało się sprawdzić statusu logowania do Amazona: ' + err.message, 'warning');
  });
}

function stopContinuousMode() {
  if (continuousModeInterval) {
    clearInterval(continuousModeInterval);
    continuousModeInterval = null;
  }
  appState.continuousMode = false;
  updateContinuousUI();
  log('Tryb ciągły został zatrzymany', 'info');
}
function updateContinuousUI() {
  if (elements.continuousModeBtn) {
    elements.continuousModeBtn.textContent = appState.continuousMode ? 'Zatrzymaj tryb ciągły' : 'Uruchom w trybie ciągłym';
    elements.continuousModeBtn.classList.toggle('btn-stop', appState.continuousMode);
  }
  if (elements.continuousIndicator) {
    elements.continuousIndicator.style.display = appState.continuousMode ? 'inline-block' : 'none';
  }
}

// Funkcja sprawdzania nowej wersji
async function checkForUpdates() {
  try {
    // Sprawdź czy już sprawdzaliśmy dzisiaj
    const lastCheck = await getStoredData(['lastUpdateCheck']);
    const today = new Date().toDateString();
    
    if (lastCheck.lastUpdateCheck === today) {
      return; // Już sprawdzaliśmy dzisiaj
    }
    
    // Pobierz aktualną wersję z manifestu
    const manifest = chrome.runtime.getManifest();
    const currentVersion = manifest.version;
    
    // Użyj background script do sprawdzania aktualizacji
    const result = await new Promise((resolve, reject) => {
      chrome.runtime.sendMessage({ action: 'checkForUpdates' }, (response) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else {
          resolve(response);
        }
      });
    });
    
    if (result.success) {
      const versionInfo = result.data;
      
      if (versionInfo.version !== currentVersion) {
        // Pokaż powiadomienie o nowej wersji
        showUpdateNotification(versionInfo);
      }
    }
    
    // Zapisz datę sprawdzenia
    chrome.storage.local.set({ lastUpdateCheck: today });
    
  } catch (error) {
    // Ignoruj błędy sprawdzania wersji
    console.log('Błąd sprawdzania wersji:', error);
  }
}

// Funkcja wyświetlania powiadomienia o nowej wersji
function showUpdateNotification(versionInfo) {
  // Usuń poprzednie powiadomienia
  const existingNotifications = document.querySelectorAll('.update-notification');
  existingNotifications.forEach(notification => notification.remove());
  
  const notification = document.createElement('div');
  notification.className = 'update-notification';
  notification.innerHTML = `
    <div style="background: #e3f2fd; border: 1px solid #1976d2; border-radius: 4px; padding: 10px; margin: 10px 0;">
      <div style="font-weight: bold; color: #1976d2; margin-bottom: 5px;">
        🆕 Dostępna nowa wersja ${versionInfo.version}!
      </div>
      <div style="font-size: 13px; color: #333; margin-bottom: 8px;">
        ${versionInfo.description || 'Nowa wersja zawiera ulepszenia i poprawki błędów.'}
      </div>
      <div style="display: flex; gap: 8px;">
        <button id="download-btn" style="background: #1976d2; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer; font-size: 12px;">
          Pobierz
        </button>
        <button id="close-btn" style="background: #ccc; color: #333; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer; font-size: 12px;">
          Zamknij
        </button>
      </div>
    </div>
  `;
  
  // Dodaj event listenery do przycisków
  setTimeout(() => {
    const downloadBtn = notification.querySelector('#download-btn');
    const closeBtn = notification.querySelector('#close-btn');
    
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        window.open(versionInfo.downloadUrl || 'https://appsbusters.pl/wtyczka-sa-amazon.zip', '_blank');
      });
    }
    
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        notification.remove();
      });
    }
  }, 100);
  
  // Dodaj powiadomienie na górze sidebaru
  const sidebar = document.querySelector('.tab-content.active');
  if (sidebar) {
    sidebar.insertBefore(notification, sidebar.firstChild);
  }
}

// Dodaję funkcję do pokazywania komunikatu o nowej wersji w stopce
function showFooterNewVersionInfo(version) {
  console.log('STOPKA - Wywołano showFooterNewVersionInfo z wersją:', version); // Debug
  const info = document.getElementById('new-version-info');
  if (info) {
    console.log('STOPKA - Element new-version-info znaleziony, pokazuję powiadomienie'); // Debug
    info.textContent = `Dostępna nowa wersja (${version})!`;
    info.style.display = 'block';
  } else {
    console.log('STOPKA - Element new-version-info NIE ZNALEZIONY!'); // Debug
  }
}
function hideFooterNewVersionInfo() {
  const info = document.getElementById('new-version-info');
  if (info) info.style.display = 'none';
}

// Zmieniam obsługę sprawdzania aktualizacji, by pokazywać komunikat w stopce
async function checkForUpdatesAndFooter() {
  try {
    const manifest = chrome.runtime.getManifest();
    const currentVersion = manifest.version;
    console.log('STOPKA - Aktualna wersja wtyczki:', currentVersion); // Debug
    
    const result = await new Promise((resolve, reject) => {
      chrome.runtime.sendMessage({ action: 'checkForUpdates' }, (response) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else {
          resolve(response);
        }
      });
    });
    if (result.success) {
      const versionInfo = result.data;
      console.log('STOPKA - Wersja na serwerze:', versionInfo.version); // Debug
      console.log('STOPKA - Porównanie:', `"${versionInfo.version}" !== "${currentVersion}" = ${versionInfo.version !== currentVersion}`); // Debug
      
      if (versionInfo.version !== currentVersion) {
        console.log('STOPKA - Pokazuję powiadomienie o nowej wersji'); // Debug
        showFooterNewVersionInfo(versionInfo.version);
      } else {
        console.log('STOPKA - Ukrywam powiadomienie (najnowsza wersja)'); // Debug
        hideFooterNewVersionInfo();
      }
    } else {
      console.log('STOPKA - Błąd sprawdzania aktualizacji:', result.error); // Debug
      hideFooterNewVersionInfo();
    }
  } catch (e) {
    console.log('STOPKA - Wyjątek podczas sprawdzania aktualizacji:', e); // Debug
    hideFooterNewVersionInfo();
  }
}

// Funkcja sprawdzająca czy zamówienie jest w cache Pending - lokalny cache
function isOrderInPendingCache(orderId) {
  try {
    const now = Date.now();
    
    // Sprawdź czy cache jest aktualny
    if (appState.pendingCacheTimestamp && (now - appState.pendingCacheTimestamp > appState.PENDING_CACHE_DURATION)) {
      // Cache wygasł - wyczyść
      appState.pendingOrdersCache.clear();
      appState.pendingCacheTimestamp = null;
      log('Cache zamówień Pending wygasł - wyczyszczono', 'debug');
      return false;
    }
    
    // Sprawdź czy zamówienie jest w cache
    const isPending = appState.pendingOrdersCache.has(orderId);
    if (isPending) {
      const minutesLeft = Math.round((appState.PENDING_CACHE_DURATION - (now - appState.pendingCacheTimestamp)) / 1000 / 60);
      log(`Zamówienie ${orderId} w cache jako Pending - pomijam (sprawdzę ponownie za ${minutesLeft} min)`, 'info');
    }
    
    return isPending;
  } catch (error) {
    log(`Błąd sprawdzania cache Pending: ${error.message}`, 'error');
    return false;
  }
}

// Cache dla changelog
let changelogCache = null;
let changelogCacheTime = null;
const CHANGELOG_CACHE_DURATION = 5 * 60 * 1000; // 5 minut

// Funkcja do wyświetlania changelog
function displayChangelog(changelogData) {
  const changelogContent = document.getElementById('changelog-content');
  const changelogLoading = document.getElementById('changelog-loading');
  const changelogFallback = document.getElementById('changelog-fallback');
  
  // Generuj HTML dla każdej wersji
  let htmlContent = '';
  
  changelogData.versions.forEach((version, index) => {
    const colorClass = index === 0 ? '#009244' : '#1976d2'; // Pierwsza wersja zielona, reszta niebieska
    const changes = version.changes.map(change => `<li>${change}</li>`).join('');
    
    htmlContent += `
      <div style="margin-bottom:16px; padding:12px; background:#f8f9fa; border-radius:6px; border-left:4px solid ${colorClass};">
        <div style="font-weight:bold; color:${colorClass}; font-size:16px; margin-bottom:4px;">Wersja ${version.version}</div>
        <div style="color:#666; font-size:13px; margin-bottom:8px;">${version.date}</div>
        <ul style="margin:8px 0 0 18px; padding:0; font-size:14px; color:#222;">
          ${changes}
        </ul>
      </div>
    `;
  });
  
  changelogContent.innerHTML = htmlContent;
  changelogLoading.style.display = 'none';
  changelogContent.style.display = 'block';
  changelogFallback.style.display = 'none';
}

// Funkcja do ładowania changelog z serwera
async function loadDynamicChangelog(forceReload = false) {
  // Sprawdź cache jeśli nie wymuszamy przeładowania
  if (!forceReload && changelogCache && changelogCacheTime && 
      (Date.now() - changelogCacheTime < CHANGELOG_CACHE_DURATION)) {
    console.log('Używam cache changelog');
    displayChangelog(changelogCache);
    return;
  }
  
  try {
    const response = await fetch('https://appsbusters.pl/changelog/wtyczka-sa-amazon.json?t=' + Date.now());
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    const changelogData = await response.json();
    
    if (changelogData && changelogData.versions && Array.isArray(changelogData.versions)) {
      // Zapisz do cache
      changelogCache = changelogData;
      changelogCacheTime = Date.now();
      
      displayChangelog(changelogData);
      console.log('Changelog załadowany dynamicznie z serwera');
    } else {
      throw new Error('Nieprawidłowy format danych changelog');
    }
    
  } catch (error) {
    console.log('Błąd ładowania changelog z serwera:', error.message, '- używam fallback');
    
    // Pokaż statyczny fallback
    const changelogLoading = document.getElementById('changelog-loading');
    const changelogFallback = document.getElementById('changelog-fallback');
    
    changelogLoading.style.display = 'none';
    changelogFallback.style.display = 'block';
  }
}

// Funkcja do preloadowania krajów w tle (wykonuje się tylko raz przy otwarciu sidebar)
async function preloadCountriesInBackground() {
  try {
    const { apiKey, apiEndpoint } = await getStoredData(['apiKey', 'apiEndpoint']);
    if (!apiKey || !apiEndpoint) {
      // Brak konfiguracji - kraje zostaną pobrane przy pierwszym zamówieniu
      return;
    }

    // Wyślij żądanie do content script żeby preloadował kraje
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { 
          type: 'preloadCountries',
          apiKey: apiKey,
          apiEndpoint: apiEndpoint
        }, (response) => {
          if (response && response.success) {
            log(`Preloadowano ${response.count} krajów do cache`, 'debug');
          }
        });
      }
    });
    
  } catch (error) {
    // Ignoruj błędy preloadowania - nie są krytyczne
  }
}

// Automatyczne sprawdzanie przy otwarciu sidebara
window.addEventListener('DOMContentLoaded', () => {
  checkForUpdatesAndFooter();
  loadDynamicChangelog(); // Załaduj changelog z serwera

  // Dodaj globalny nasłuchiwacz na kliknięcia przycisków w sidebarze
  document.body.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      checkForUpdatesAndFooter();
    }
  });
}); 