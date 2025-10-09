// Tablica przechowująca otwarte panele boczne
let openSidebars = [];

// Nasłuchuj wiadomości
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  // Przekazywanie logów i statusów do sidebara
  if (msg.type === 'log' || msg.type === 'status' || msg.type === 'orderUpdated' || msg.type === 'orderError') {
    // Przekazujemy wszystkie komunikaty do sidebara
    chrome.runtime.sendMessage(msg);
  } 
  // Zamykanie kart
  else if (msg.type === 'closeTab' && sender.tab) {
    chrome.tabs.remove(sender.tab.id);
  }
  // Uruchomienie wtyczki - otwarcie sidebaru
  else if (msg.type === 'openSidebar') {
    // Uzyskaj ID bieżącego okna i otwórz panel boczny dla tego okna
    chrome.windows.getCurrent(function(currentWindow) {
      chrome.sidePanel.open({ windowId: currentWindow.id });
    });
  }
  // W przypadku starych wiadomości, przekazujemy je do nowej funkcjonalności
  else if (msg.type === 'processOrders') {
    // Ta funkcjonalność jest teraz obsługiwana przez sidebar.js
    // Można przekazać tę wiadomość do sidebara, jeśli to konieczne
    chrome.runtime.sendMessage(msg);
  }
});

// Otwórz sidebar po kliknięciu ikony wtyczki
chrome.action.onClicked.addListener((tab) => {
  // Otwórz panel boczny dla aktualnej karty
  chrome.sidePanel.open({ tabId: tab.id });
  
  // Zachowaj informację o otwartym panelu
  if (!openSidebars.includes(tab.id)) {
    openSidebars.push(tab.id);
  }
});

// Po załadowaniu
chrome.runtime.onInstalled.addListener(() => {
  console.log("Wtyczka zainstalowana/zaktualizowana");
  
  // Ustawienie domyślnej wartości dla przetwarzania wielu zamówień
  chrome.storage.local.get('processMultipleOrders', (data) => {
    if (data.processMultipleOrders === undefined) {
      chrome.storage.local.set({ processMultipleOrders: false });
      console.log('Ustawiono domyślną wartość dla przetwarzania wielu zamówień: false');
    }
  });
});

// Nasłuchiwanie wiadomości z content scripts i popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Przekazywanie logów z content script do sidebar
  if (['log', 'status', 'orderUpdated', 'orderError'].includes(message.type)) {
    // Dodaj znacznik czasowy do wiadomości
    message.timestamp = Date.now();
    
    // Przekaż wiadomość do wszystkich otwartych paneli bocznych
    chrome.runtime.sendMessage(message)
      .catch(err => {
        // Ignoruj błędy związane z brakiem nasłuchujących
        if (!err.message.includes("Could not establish connection")) {
          console.error("Błąd przekazywania wiadomości:", err);
        }
      });
    
    sendResponse({ success: true });
  }
  return true; // Informuje Chrome, że odpowiedź może być asynchroniczna
});

// Obsługa zamknięcia kart
chrome.tabs.onRemoved.addListener((tabId) => {
  // Usuń z tablicy otwartych paneli
  const index = openSidebars.indexOf(tabId);
  if (index !== -1) {
    openSidebars.splice(index, 1);
  }
});

// Obsługa komunikacji między oknami w celu uniknięcia duplikatów operacji
chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
  if (message.type === 'checkProcessingStatus') {
    // Sprawdź stan przetwarzania w storage i odpowiedz
    chrome.storage.local.get('processingState', (data) => {
      const isProcessing = data.processingState && data.processingState.isProcessing;
      sendResponse({ isProcessing: isProcessing || false });
    });
    return true;
  }
  return false;
});

// Nasłuchiwanie wiadomości z content script i sidebar
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'checkForUpdates') {
    checkForUpdates().then(result => {
      sendResponse(result);
    }).catch(error => {
      sendResponse({ error: error.message });
    });
    return true; // Wskazuje, że odpowiedź będzie asynchroniczna
  }
  // Usunięto obsługę cleanupPendingOrders - teraz działa bezpośrednio z sidebar.js
});

// Funkcja sprawdzania aktualizacji
async function checkForUpdates() {
  try {
    // Dodaj timestamp żeby uniknąć cache'owania
    const timestamp = new Date().getTime();
    const response = await fetch(`https://appsbusters.pl/version.json?t=${timestamp}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
    
    if (response.ok) {
      const versionInfo = await response.json();
      console.log('BACKGROUND - Pobrana wersja z serwera:', versionInfo); // Debug
      return { success: true, data: versionInfo };
    } else {
      console.log('BACKGROUND - Błąd HTTP:', response.status); // Debug
      return { success: false, error: `HTTP ${response.status}` };
    }
  } catch (error) {
    console.error('Błąd fetch:', error);
    return { success: false, error: error.message };
  }
}
 