# Instrukcja konfiguracji dynamicznego changelog

## 1. Plik changelog na serwerze

Utwórz plik pod adresem:
```
https://appsbusters.pl/changelog/wtyczka-sa-amazon.json
```

## 2. Format pliku JSON

Skopiuj zawartość z pliku `changelog/wtyczka-sa-amazon.json` w tym folderze.

## 3. Struktura danych

- **versions**: Array wersji (sortowane od najnowszej)
- **version**: Numer wersji (string)
- **date**: Data wydania (string w formacie DD.MM.YYYY)
- **changes**: Array zmian (string, może zawierać HTML)

## 4. Obsługa HTML w zmianach

Można używać podstawowych tagów HTML:
- `<strong>` - pogrubienie
- `<em>` - kursywa
- `\"` - cudzysłowy (escaped)

## 5. Jak działa cache

- Cache trwa 5 minut
- Przy pierwszym ładowaniu pobiera z serwera
- Przy kolejnych ładowaniach używa cache
- URL zawiera timestamp `?t=` aby uniknąć cache przeglądarki

## 6. Fallback

Jeśli serwer nie odpowiada lub JSON jest nieprawidłowy, wtyczka pokaże statyczny changelog z HTML.

## 7. Aktualizacja changelog

1. Edytuj plik JSON na serwerze
2. Dodaj nową wersję na początku array `versions`
3. Wtyczka automatycznie pobierze nowe dane przy następnym uruchomieniu

## 8. Testowanie

Możesz przetestować lokalnie używając pliku `changelog/wtyczka-sa-amazon.json` w katalogu wtyczki.

## 9. URL endpoint

Wtyczka próbuje pobrać changelog z:
```
https://appsbusters.pl/changelog/wtyczka-sa-amazon.json
```

Upewnij się, że:
- Plik jest dostępny publicznie
- Serwer zwraca prawidłowy header `Content-Type: application/json`
- Plik ma prawidłową strukturę JSON

## 10. Przykład aktualizacji

Aby dodać nową wersję 1.10:

```json
{
  "versions": [
    {
      "version": "1.10",
      "date": "20.09.2025", 
      "changes": [
        "Nowa funkcjonalność X",
        "Poprawka błędu Y"
      ]
    },
    {
      "version": "1.09",
      "date": "15.09.2025",
      "changes": [
        "Poprzednie zmiany..."
      ]
    }
  ]
}
```

Po wgraniu na serwer, wtyczka automatycznie pokaże nowy changelog przy następnym uruchomieniu.
