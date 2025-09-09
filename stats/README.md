# 📊 Statystyki Wtyczki Amazon-Sellasist

## Pliki w tym folderze:

### `extension-stats-endpoint.php`
- **Cel:** Endpoint API odbierający statystyki z wtyczki
- **URL:** `https://appsbusters.pl/stats/extension-stats-endpoint.php`
- **Metoda:** POST
- **Funkcja:** Zapisuje dane do `extension_stats.csv`

### `stats-dashboard.php`
- **Cel:** Dashboard do przeglądania statystyk
- **URL:** `https://appsbusters.pl/stats/stats-dashboard.php`
- **Funkcja:** Wyświetla liczbę użytkowników i zamówień

### `stats-export.php`
- **Cel:** API do eksportu statystyk w JSON
- **URL:** `https://appsbusters.pl/stats/stats-export.php`
- **Funkcja:** Zwraca statystyki w formacie JSON

### `extension_stats.csv` (tworzy się automatycznie)
- **Cel:** Plik z danymi statystycznymi
- **Format:** timestamp,action,version,user_hash,date

## Wdrożenie:

1. Wgraj cały folder `stats/` na serwer do `/public_html/stats/`
2. Ustaw uprawnienia 755 dla plików PHP
3. Ustaw uprawnienia 666 dla folderu (żeby mógł tworzyć CSV)
4. **WAŻNE:** Zmień hasła/tokeny w plikach PHP!

## 🔐 Zabezpieczenia:

### **Dashboard (`stats-dashboard.php`):**
- Zabezpieczony hasłem: `TwojeHaslo123!` (ZMIEŃ TO!)
- Sesje PHP z opcją wylogowania
- Ukryty przed botami

### **API Export (`stats-export.php`):**
- Wymaga tokenu: `?token=twoj_sekretny_token_123` (ZMIEŃ TO!)
- Dostęp: `https://appsbusters.pl/stats/stats-export.php?token=TWOJ_TOKEN`

### **Endpoint (`extension-stats-endpoint.php`):**
- Rate limiting: max 1 request/10 sekund na IP
- Tylko metoda POST
- Automatyczne czyszczenie plików tymczasowych

### **Plik `.htaccess`:**
- Ukrywa pliki CSV i tymczasowe
- Blokuje listowanie katalogów
- Zabezpiecza przed niektórymi atakami

## Dostęp do danych:

- **Dashboard:** https://appsbusters.pl/stats/stats-dashboard.php (hasło: `TwojeHaslo123!`)
- **JSON API:** https://appsbusters.pl/stats/stats-export.php?token=twoj_sekretny_token_123
- **Plik CSV:** Bezpośrednio z serwera przez FTP/SSH

## ⚠️ PRZED WDROŻENIEM:

1. **Zmień hasło** w `stats-dashboard.php` (linia 11)
2. **Zmień token** w `stats-export.php` (linia 8)
3. Sprawdź czy `.htaccess` działa na Twoim serwerze
