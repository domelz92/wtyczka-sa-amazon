# Raport błędów parsowania zamówień

**Łącznie zamówień:** 366
**Z błędami:** 318

---

## Zamówienie 304-3321034-4217155

### Niezgodności
- **miasto**: Amazon=`Laatzen` vs Sellasist=`Hildesheimer Str 47` ❌
- **ulica**: Amazon=`Hildesheimer Str 47` vs Sellasist=`Dentohaus Za Kern Za Meyer` ❌
- **telefon**: Amazon=`491622110123` vs Sellasist=`1622110123` ❌

### Warnings
```
[WARNING] ⚠️ Linia "Dentohaus Za Kern Za Meyer" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Linia "Dentohaus Za Kern Za Meyer" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Urtekram Shampoo - Nordic Berries - Normales Haar - 500 ml, Vegan, Biologisch, Natürlichen Ursprungs
```

### Kluczowe logi
```
[WARNING] ⚠️ Linia "Dentohaus Za Kern Za Meyer" nie wygląda na niemiecką ulicę - pomijam
[INFO] ✅ Adres nieprzetworzony: ulica="Dentohaus Za Kern Za Meyer"
[INFO] 🏙️ Znaleziono miasto: "Hildesheimer Str 47"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-3321034"
[INFO] 📊 Wynik końcowy: imię="Caro", nazwisko="Gillen", ulica="Dentohaus Za Kern Za Meyer", numer="", miasto="Hildesheimer Str 47", kod="30880", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0162-2110123"
[DEBUG] Użyto numeru telefonu bez zmian: 01622110123
[DEBUG] Numer telefonu z Amazona: "0162-2110123"
[DEBUG] Sformatowany numer telefonu: "01622110123"
[DEBUG] Używam numeru telefonu ze scrapingu: 01622110123
[INFO] Finalny numer telefonu dla zamówienia: 01622110123
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Linia "Dentohaus Za Kern Za Meyer" nie wygląda na niemiecką ulicę - pomijam
```

---

## Zamówienie 028-9746209-2375523

### Niezgodności
- **ulica**: Amazon=`Rembertstr. 6` vs Sellasist=`Rembertstr.` ❌
- **telefon**: Amazon=`491733213215` vs Sellasist=`1733213215` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: BIOMAGIC HAIR COLOR - 55/07 INTENSE CHOCOLATE BROWN (SKU: 35711)
[WARNING] Nie znaleziono line_id dla produktu: BIOMAGIC HAIR COLOR - 55/07 INTENSE CHOCOLATE BROWN
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="6", ulica="Rembertstr."
[INFO] 🏙️ Znaleziono miasto: "Paderborn"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-9746209"
[INFO] 📊 Wynik końcowy: imię="Sami emanuel", nazwisko="Kasim", ulica="Rembertstr.", numer="6", miasto="Paderborn", kod="33102", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "01733213215"
[DEBUG] Użyto numeru telefonu bez zmian: 01733213215
[DEBUG] Numer telefonu z Amazona: "01733213215"
[DEBUG] Sformatowany numer telefonu: "01733213215"
[DEBUG] Używam numeru telefonu ze scrapingu: 01733213215
[INFO] Finalny numer telefonu dla zamówienia: 01733213215
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="6", ulica="Rembertstr."
[INFO] 🏙️ Znaleziono miasto: "Paderborn"
```

---

## Zamówienie 304-7854940-7181163

### Niezgodności
- **ulica**: Amazon=`Tome Matica 24` vs Sellasist=`Tome Matica` ❌
- **kod_pocztowy**: Amazon=`10 040` vs Sellasist=`10040` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Dr. Mercola | Liposomal Vitamin C | 1.000 mg | 60 vegane Kapseln
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="24", ulica="Tome Matica"
[INFO] 🏙️ Znaleziono miasto: "Zagreb"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-7854940"
[INFO] 📊 Wynik końcowy: imię="Stjepan", nazwisko="Sarcevic", ulica="Tome Matica", numer="24", miasto="Zagreb", kod="", kraj="Croatia", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+385912233339"
[DEBUG] Zachowano międzynarodowy numer telefonu: +385912233339
[DEBUG] Numer telefonu z Amazona: "+385912233339"
[DEBUG] Sformatowany numer telefonu: "+385912233339"
[DEBUG] Używam numeru telefonu ze scrapingu: +385912233339
[INFO] Finalny numer telefonu dla zamówienia: +385912233339
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="24", ulica="Tome Matica"
[INFO] 🏙️ Znaleziono miasto: "Zagreb"
```

---

## Zamówienie 303-1477964-2593912

### Niezgodności
- **ulica**: Amazon=`Hannemannstraße 11A` vs Sellasist=`Hannemannstraße` ❌
- **telefon**: Amazon=`491729204573` vs Sellasist=`1729204573` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Cranberry 310g Krokus
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="11A", ulica="Hannemannstraße"
[INFO] 🏙️ Znaleziono miasto: "Teltow"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "303-1477964"
[INFO] 📊 Wynik końcowy: imię="Dr.", nazwisko="Gabriele Calmez", ulica="Hannemannstraße", numer="11A", miasto="Teltow", kod="14513", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "01729204573"
[DEBUG] Użyto numeru telefonu bez zmian: 01729204573
[DEBUG] Numer telefonu z Amazona: "01729204573"
[DEBUG] Sformatowany numer telefonu: "01729204573"
[DEBUG] Używam numeru telefonu ze scrapingu: 01729204573
[INFO] Finalny numer telefonu dla zamówienia: 01729204573
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="11A", ulica="Hannemannstraße"
[INFO] 🏙️ Znaleziono miasto: "Teltow"
```

---

## Zamówienie 303-3504945-5083545

### Niezgodności
- **ulica**: Amazon=`Imbachstraße 28 Top 5` vs Sellasist=`Imbachstraße 28 Top` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: NOW Fresh Green Walnut, 60 ml (SKU: 13843)
[WARNING] Nie znaleziono line_id dla produktu: NOW Fresh Green Walnut, 60 ml
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="5", ulica="Imbachstraße 28 Top"
[INFO] 🏙️ Znaleziono miasto: "Kaprun"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "303-3504945"
[INFO] 📊 Wynik końcowy: imię="Josef", nazwisko="Nindl", ulica="Imbachstraße 28 Top", numer="5", miasto="Kaprun", kod="5710", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+436644414443"
[DEBUG] Zachowano międzynarodowy numer telefonu: +436644414443
[DEBUG] Numer telefonu z Amazona: "+436644414443"
[DEBUG] Sformatowany numer telefonu: "+436644414443"
[DEBUG] Używam numeru telefonu ze scrapingu: +436644414443
[INFO] Finalny numer telefonu dla zamówienia: +436644414443
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="5", ulica="Imbachstraße 28 Top"
[INFO] 🏙️ Znaleziono miasto: "Kaprun"
```

---

## Zamówienie 407-1058718-1421131

### Niezgodności
- **miasto**: Amazon=`Firenze` vs Sellasist=`Via Antonio del Pollaiolo 127` ❌
- **ulica**: Amazon=`Via Antonio del Pollaiolo 127 Via Antonio del Pollaiolo 127` vs Sellasist=`Via Antonio del Pollaiolo` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: REGENERUM Siero indurente per unghie, 8 ml
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (wzorzec): numer="127", ulica="Via Antonio del Pollaiolo"
[INFO] 🏙️ Znaleziono miasto: "Via Antonio del Pollaiolo 127"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-1058718"
[INFO] 📊 Wynik końcowy: imię="Justyna", nazwisko="Ciepluch", ulica="Via Antonio del Pollaiolo", numer="127", miasto="Via Antonio del Pollaiolo 127", kod="50142", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "3272417520"
[DEBUG] Numer telefonu z Amazona: "3272417520"
[DEBUG] Sformatowany numer telefonu: "+393272417520"
[DEBUG] Używam numeru telefonu ze scrapingu: +393272417520
[INFO] Finalny numer telefonu dla zamówienia: +393272417520
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (wzorzec): numer="127", ulica="Via Antonio del Pollaiolo"
[INFO] 🏙️ Znaleziono miasto: "Via Antonio del Pollaiolo 127"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 407-1672807-2592352

### Niezgodności
- **miasto**: Amazon=`Auvare Puget-Theniers` vs Sellasist=`1, Chemin de La Clarté, Quartier les Vignes` ❌
- **ulica**: Amazon=`Route Departmentale 216 1, Chemin de La Clarté, Quartier les Vignes` vs Sellasist=`Route Departmentale 216` ❌
- **telefon**: Amazon=`33650099529` vs Sellasist=`0` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono telefonu po "Phone:"
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Tomates séchées à l'huile d'olive BIO 190g - La Bio Idea
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="Route Departmentale 216"
[INFO] 🏙️ Znaleziono miasto: "1, Chemin de La Clarté, Quartier les Vignes"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-1672807"
[INFO] 📊 Wynik końcowy: imię="Peter", nazwisko="Webster", ulica="Route Departmentale 216", numer="", miasto="1, Chemin de La Clarté, Quartier les Vignes", kod="06260", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[WARNING] ⚠️ Nie znaleziono telefonu po "Phone:"
[DEBUG] Numer telefonu z Amazona: ""
[DEBUG] Sformatowany numer telefonu: ""
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
[INFO] Finalny numer telefonu dla zamówienia: 000000000
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="Route Departmentale 216"
[INFO] 🏙️ Znaleziono miasto: "1, Chemin de La Clarté, Quartier les Vignes"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 306-7232269-6383524

### Niezgodności
- **ulica**: Amazon=`Haidbergstr. 6a` vs Sellasist=`Haidbergstr.` ❌
- **telefon**: Amazon=`491713289160` vs Sellasist=`1713289160` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Cranberry, Sirup, 375g Krokus (SKU: 22157)
[WARNING] Nie znaleziono line_id dla produktu: Cranberry, Sirup, 375g Krokus
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="6a", ulica="Haidbergstr."
[INFO] 🏙️ Znaleziono miasto: "Bordesholm"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "306-7232269"
[INFO] 📊 Wynik końcowy: imię="Helmtraut", nazwisko="Riepen", ulica="Haidbergstr.", numer="6a", miasto="Bordesholm", kod="24582", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0171-3289160"
[DEBUG] Użyto numeru telefonu bez zmian: 01713289160
[DEBUG] Numer telefonu z Amazona: "0171-3289160"
[DEBUG] Sformatowany numer telefonu: "01713289160"
[DEBUG] Używam numeru telefonu ze scrapingu: 01713289160
[INFO] Finalny numer telefonu dla zamówienia: 01713289160
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="6a", ulica="Haidbergstr."
[INFO] 🏙️ Znaleziono miasto: "Bordesholm"
```

---

## Zamówienie 404-0449579-5583553

### Niezgodności
- **telefon**: Amazon=`32478300232` vs Sellasist=`320478300232` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (BE): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Biotech USA 24010301 Shaker Wave Noire 600 ml
```

### Kluczowe logi
```
[INFO] ✅ Adres belgijski (wzorzec): ulica="rue du Noir Jambon ,2 a"
[INFO] 🏙️ Znaleziono miasto: "silly"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "404-0449579"
[INFO] 📊 Wynik końcowy: imię="bonge", nazwisko="carine", ulica="rue du Noir Jambon ,2 a", numer="", miasto="silly", kod="7830", kraj="Belgium", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0478300232"
[DEBUG] Numer telefonu z Amazona: "0478300232"
[DEBUG] Sformatowany numer telefonu: "+320478300232"
[DEBUG] Używam numeru telefonu ze scrapingu: +320478300232
[INFO] Finalny numer telefonu dla zamówienia: +320478300232
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres belgijski (wzorzec): ulica="rue du Noir Jambon ,2 a"
[INFO] 🏙️ Znaleziono miasto: "silly"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 407-4467042-0748307

### Niezgodności
- **ulica**: Amazon=`7 B chemin de la Chauderaie` vs Sellasist=`B chemin de la Chauderaie` ❌
- **telefon**: Amazon=`33688796460` vs Sellasist=`330688796460` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Elite - Pneu Coperton Spécial Home-Trainer 700x23 - Pneus
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="7", ulica="B chemin de la Chauderaie"
[INFO] 🏙️ Znaleziono miasto: "Francheville"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-4467042"
[INFO] 📊 Wynik końcowy: imię="Garrivier", nazwisko="Frédérique", ulica="B chemin de la Chauderaie", numer="7", miasto="Francheville", kod="69340", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0688796460"
[DEBUG] Numer telefonu z Amazona: "0688796460"
[DEBUG] Sformatowany numer telefonu: "+330688796460"
[DEBUG] Używam numeru telefonu ze scrapingu: +330688796460
[INFO] Finalny numer telefonu dla zamówienia: +330688796460
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="7", ulica="B chemin de la Chauderaie"
[INFO] 🏙️ Znaleziono miasto: "Francheville"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 303-8906351-6057949

### Niezgodności
- **ulica**: Amazon=`Heinrich Pfeiffer Straße 21` vs Sellasist=`Heinrich Pfeiffer Straße` ❌
- **telefon**: Amazon=`4917664203933` vs Sellasist=`17664203933` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Chelatiertes Magnesium + Vitamin B6 100 Kapseln Aliness (SKU: 3463)
[WARNING] Nie znaleziono line_id dla produktu: Chelatiertes Magnesium + Vitamin B6 100 Kapseln Aliness
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="21", ulica="Heinrich Pfeiffer Straße"
[INFO] 🏙️ Znaleziono miasto: "Mühlhausen/thüringen"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "303-8906351"
[INFO] 📊 Wynik końcowy: imię="Nadezda", nazwisko="Miller", ulica="Heinrich Pfeiffer Straße", numer="21", miasto="Mühlhausen/thüringen", kod="99974", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "017664203933"
[DEBUG] Użyto numeru telefonu bez zmian: 017664203933
[DEBUG] Numer telefonu z Amazona: "017664203933"
[DEBUG] Sformatowany numer telefonu: "017664203933"
[DEBUG] Używam numeru telefonu ze scrapingu: 017664203933
[INFO] Finalny numer telefonu dla zamówienia: 017664203933
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="21", ulica="Heinrich Pfeiffer Straße"
[INFO] 🏙️ Znaleziono miasto: "Mühlhausen/thüringen"
```

---

## Zamówienie 306-1101110-4546737

### Niezgodności
- **ulica**: Amazon=`Gøngesletten 31` vs Sellasist=`Gøngesletten` ❌
- **telefon**: Amazon=`4545893746` vs Sellasist=`0` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono telefonu po "Phone:"
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Dr. Mercola | Liposomal Vitamin C | 1.000 mg | 60 vegane Kapseln
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="31", ulica="Gøngesletten"
[INFO] 🏙️ Znaleziono miasto: "Vedbæk"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "306-1101110"
[INFO] 📊 Wynik końcowy: imię="Michi", nazwisko="Egel-Mitani", ulica="Gøngesletten", numer="31", miasto="Vedbæk", kod="2950", kraj="Denmark", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[WARNING] ⚠️ Nie znaleziono telefonu po "Phone:"
[DEBUG] Numer telefonu z Amazona: ""
[DEBUG] Sformatowany numer telefonu: ""
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
[INFO] Finalny numer telefonu dla zamówienia: 000000000
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="31", ulica="Gøngesletten"
[INFO] 🏙️ Znaleziono miasto: "Vedbæk"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 407-0024294-9105934

### Niezgodności
- **miasto**: Amazon=`Serpaize` vs Sellasist=`Les jardins de neyve` ❌
- **ulica**: Amazon=`15 Les jardins de neyve` vs Sellasist=`15` ❌
- **telefon**: Amazon=`33615707843` vs Sellasist=`330615707843` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Bouillon de Poulet en Cubes (sans huile de palme, sans gluten) BIO 66 g
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="15"
[INFO] 🏙️ Znaleziono miasto: "Les jardins de neyve"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-0024294"
[INFO] 📊 Wynik końcowy: imię="Christophe", nazwisko="Catalot", ulica="15", numer="", miasto="Les jardins de neyve", kod="38200", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0615707843"
[DEBUG] Numer telefonu z Amazona: "0615707843"
[DEBUG] Sformatowany numer telefonu: "+330615707843"
[DEBUG] Używam numeru telefonu ze scrapingu: +330615707843
[INFO] Finalny numer telefonu dla zamówienia: +330615707843
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="15"
[INFO] 🏙️ Znaleziono miasto: "Les jardins de neyve"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 206-4754134-9576302

### Niezgodności
- **telefon**: Amazon=`447456320120` vs Sellasist=`4407456320120` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Nie znaleziono line_id dla produktu: La Rive Cute by La Rive Eau De Parfum Spray 3.3 oz / 100 ml (Women)
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres brytyjski (suffix): ulica="110 LANDSEER AVENUE"
[INFO] 🏙️ Znaleziono miasto: "LONDON"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "206-4754134"
[INFO] 📊 Wynik końcowy: imię="MISS", nazwisko="EMANUELA AGHAYEDO", ulica="110 LANDSEER AVENUE", numer="", miasto="LONDON", kod="E12 6HR", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07456320120"
[DEBUG] Numer telefonu z Amazona: "07456320120"
[DEBUG] Sformatowany numer telefonu: "+4407456320120"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407456320120
[INFO] Finalny numer telefonu dla zamówienia: +4407456320120
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] 📞 Finalny telefon dla zamówienia: 206-4754134
[DEBUG] Używam numeru telefonu ze scrapingu: +4407456320120
[DEBUG] Używam numeru telefonu ze scrapingu: +4407456320120
```

---

## Zamówienie 407-3532872-1529120

### Niezgodności
- **miasto**: Amazon=`Paris` vs Sellasist=`code  laissez a la gaedienne` ❌
- **ulica**: Amazon=`code 27956   laissez a la gaedienne` vs Sellasist=`5, Rue des Sablons` ❌
- **kod_pocztowy**: Amazon=`75116` vs Sellasist=`27956` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Chips de sarrasin au quinoa et à l'amarante (sans gluten) BIO 80 g - FIORENTINI
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="5, Rue des Sablons"
[INFO] 🏙️ Znaleziono kod+miasto: kod="27956", miasto="code  laissez a la gaedienne"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-3532872"
[INFO] 📊 Wynik końcowy: imię="Dominique", nazwisko="Carle", ulica="5, Rue des Sablons", numer="", miasto="code  laissez a la gaedienne", kod="27956", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+33607028759"
[DEBUG] Zachowano międzynarodowy numer telefonu: +33607028759
[DEBUG] Numer telefonu z Amazona: "+33607028759"
[DEBUG] Sformatowany numer telefonu: "+33607028759"
[DEBUG] Używam numeru telefonu ze scrapingu: +33607028759
[INFO] Finalny numer telefonu dla zamówienia: +33607028759
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="5, Rue des Sablons"
[INFO] 🏙️ Znaleziono kod+miasto: kod="27956", miasto="code  laissez a la gaedienne"
```

---

## Zamówienie 303-8703187-2353924

### Niezgodności
- **ulica**: Amazon=`AM WACHOLDER 54` vs Sellasist=`AM WACHOLDER` ❌
- **telefon**: Amazon=`4927071281` vs Sellasist=`49027071281` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Eveline Cosmetics - Serum Argan & Vanille Luxus Hand und Nagelcreme, Handcreme Für Sehr Trockene Hände, Handbalsam, Handcreme Repair, Reichhaltiger Pflegekomplex - 100 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="54", ulica="AM WACHOLDER"
[INFO] 🏙️ Znaleziono miasto: "HERZOGENRATH"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "303-8703187"
[INFO] 📊 Wynik końcowy: imię="SUSANNE", nazwisko="SIMONS", ulica="AM WACHOLDER", numer="54", miasto="HERZOGENRATH", kod="52134", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "027071281"
[DEBUG] Numer telefonu z Amazona: "027071281"
[DEBUG] Sformatowany numer telefonu: "+49027071281"
[DEBUG] Używam numeru telefonu ze scrapingu: +49027071281
[INFO] Finalny numer telefonu dla zamówienia: +49027071281
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="54", ulica="AM WACHOLDER"
[INFO] 🏙️ Znaleziono miasto: "HERZOGENRATH"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 403-9223376-7894756

### Niezgodności
- **ulica**: Amazon=`44 Bis chemin Comtesse` vs Sellasist=`chemin Comtesse` ❌
- **telefon**: Amazon=`33622605665` vs Sellasist=`330622605665` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: SmartShake Ultimate Jug, Black - 2100 ml.
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="44 Bis", ulica="chemin Comtesse"
[INFO] 🏙️ Znaleziono miasto: "TRESSES"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "403-9223376"
[INFO] 📊 Wynik końcowy: imię="Nicolas", nazwisko="Duvergé", ulica="chemin Comtesse", numer="44 Bis", miasto="TRESSES", kod="33370", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0622605665"
[DEBUG] Numer telefonu z Amazona: "0622605665"
[DEBUG] Sformatowany numer telefonu: "+330622605665"
[DEBUG] Używam numeru telefonu ze scrapingu: +330622605665
[INFO] Finalny numer telefonu dla zamówienia: +330622605665
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="44 Bis", ulica="chemin Comtesse"
[INFO] 🏙️ Znaleziono miasto: "TRESSES"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 302-7915654-1351558

### Niezgodności
- **ulica**: Amazon=`Bajtars u. 10` vs Sellasist=`Bajtars u.` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: NOW Foods Quercetin, 500mg - 100 vcaps
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="10", ulica="Bajtars u."
[INFO] 🏙️ Znaleziono miasto: "Soltvadkert"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "302-7915654"
[INFO] 📊 Wynik końcowy: imię="Henning", nazwisko="Heilmann", ulica="Bajtars u.", numer="10", miasto="Soltvadkert", kod="6230", kraj="Hungary", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "004917610020444"
[DEBUG] Numer telefonu z Amazona: "004917610020444"
[DEBUG] Sformatowany numer telefonu: "+4917610020444"
[DEBUG] Używam numeru telefonu ze scrapingu: +4917610020444
[INFO] Finalny numer telefonu dla zamówienia: +4917610020444
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="10", ulica="Bajtars u."
[INFO] 🏙️ Znaleziono miasto: "Soltvadkert"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 171-5843380-9427527

### Niezgodności
- **ulica**: Amazon=`3 allée BLAISE PASCAL` vs Sellasist=`allée BLAISE PASCAL` ❌
- **telefon**: Amazon=`33658630485` vs Sellasist=`330658630485` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Sirop de curcuma et gingembre 500 ml POLSKA RÓŻA
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="3", ulica="allée BLAISE PASCAL"
[INFO] 🏙️ Znaleziono miasto: "CHEVREUSE"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-5843380"
[INFO] 📊 Wynik końcowy: imię="CAQUET", nazwisko="EMMANUEL", ulica="allée BLAISE PASCAL", numer="3", miasto="CHEVREUSE", kod="78460", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0658630485"
[DEBUG] Numer telefonu z Amazona: "0658630485"
[DEBUG] Sformatowany numer telefonu: "+330658630485"
[DEBUG] Używam numeru telefonu ze scrapingu: +330658630485
[INFO] Finalny numer telefonu dla zamówienia: +330658630485
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="3", ulica="allée BLAISE PASCAL"
[INFO] 🏙️ Znaleziono miasto: "CHEVREUSE"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 206-7582429-9361917

### Niezgodności
- **telefon**: Amazon=`447923394654` vs Sellasist=`4407923394654` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Organic Tea Stomach Comfort/Tea for The Gastrointestal Tract BIO (25 x 2 g) - DARY NATURY (SKU: 21436)
[WARNING] Nie znaleziono line_id dla produktu: Organic Tea Stomach Comfort/Tea for The Gastrointestal Tract BIO (25 x 2 g) - DARY NATURY
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres brytyjski (suffix): ulica="18 beechy avenue"
[INFO] 🏙️ Znaleziono miasto: "Eastbourne"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "206-7582429"
[INFO] 📊 Wynik końcowy: imię="mrs", nazwisko="madeleine krahe", ulica="18 beechy avenue", numer="", miasto="Eastbourne", kod="BN20 8NS", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07923394654"
[DEBUG] Numer telefonu z Amazona: "07923394654"
[DEBUG] Sformatowany numer telefonu: "+4407923394654"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407923394654
[INFO] Finalny numer telefonu dla zamówienia: +4407923394654
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Organic Tea Stomach Comfort/Tea for The Gastrointestal Tract BIO (25 x 2 g) - DARY NATURY (SKU: 21436)
[INFO] 📞 Finalny telefon dla zamówienia: 206-7582429
[DEBUG] Używam numeru telefonu ze scrapingu: +4407923394654
```

---

## Zamówienie 404-8172224-4021116

### Niezgodności
- **ulica**: Amazon=`50 le clos de Malatan` vs Sellasist=`le clos de Malatan` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: SIS GO Electrolyte Powder Lime Citron 2015 (SKU: 712_3)
[WARNING] Nie znaleziono line_id dla produktu: SIS GO Electrolyte Powder Lime Citron 2015
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="50", ulica="le clos de Malatan"
[INFO] 🏙️ Znaleziono miasto: "Autrans Meaudre En Vercors"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "404-8172224"
[INFO] 📊 Wynik końcowy: imię="Frédéric", nazwisko="EYBERT", ulica="le clos de Malatan", numer="50", miasto="Autrans Meaudre En Vercors", kod="38880", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+33630941429"
[DEBUG] Zachowano międzynarodowy numer telefonu: +33630941429
[DEBUG] Numer telefonu z Amazona: "+33630941429"
[DEBUG] Sformatowany numer telefonu: "+33630941429"
[DEBUG] Używam numeru telefonu ze scrapingu: +33630941429
[INFO] Finalny numer telefonu dla zamówienia: +33630941429
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="50", ulica="le clos de Malatan"
[INFO] 🏙️ Znaleziono miasto: "Autrans Meaudre En Vercors"
```

---

## Zamówienie 305-8448929-1877912

### Niezgodności
- **ulica**: Amazon=`Mooswald 61` vs Sellasist=`Mooswald` ❌
- **telefon**: Amazon=`4317649886811` vs Sellasist=`17649886811` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: ROTES BORSCHT EINGELEGTES GLUTENFREIES BIOKONZENTRAT 320 ML - KOWALEWSKI (SKU: 22106)
[WARNING] Nie znaleziono line_id dla produktu: ROTES BORSCHT EINGELEGTES GLUTENFREIES BIOKONZENTRAT 320 ML - KOWALEWSKI
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="61", ulica="Mooswald"
[INFO] 🏙️ Znaleziono miasto: "Fresach"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "305-8448929"
[INFO] 📊 Wynik końcowy: imię="Sylwia", nazwisko="Lehmann", ulica="Mooswald", numer="61", miasto="Fresach", kod="9712", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "017649886811"
[DEBUG] Użyto numeru telefonu bez zmian: 017649886811
[DEBUG] Numer telefonu z Amazona: "017649886811"
[DEBUG] Sformatowany numer telefonu: "017649886811"
[DEBUG] Używam numeru telefonu ze scrapingu: 017649886811
[INFO] Finalny numer telefonu dla zamówienia: 017649886811
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="61", ulica="Mooswald"
[INFO] 🏙️ Znaleziono miasto: "Fresach"
```

---

## Zamówienie 202-1091795-8537953

### Niezgodności
- **telefon**: Amazon=`441730269253` vs Sellasist=`1730269253` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Nie znaleziono line_id dla produktu: ELITE FLY TEX Bottle 550 ml Transparent Orange
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres brytyjski (suffix): ulica="32 Durford Road"
[INFO] 🏙️ Znaleziono miasto: "PETERSFIELD"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "202-1091795"
[INFO] 📊 Wynik końcowy: imię="Mike", nazwisko="Gadd", ulica="32 Durford Road", numer="", miasto="PETERSFIELD", kod="GU31 4HA", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "01730269253"
[DEBUG] Użyto numeru telefonu bez zmian: 01730269253
[DEBUG] Numer telefonu z Amazona: "01730269253"
[DEBUG] Sformatowany numer telefonu: "01730269253"
[DEBUG] Używam numeru telefonu ze scrapingu: 01730269253
[INFO] Finalny numer telefonu dla zamówienia: 01730269253
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] 📞 Finalny telefon dla zamówienia: 202-1091795
[DEBUG] Używam numeru telefonu ze scrapingu: 01730269253
```

---

## Zamówienie 028-9680579-9568332

### Niezgodności
- **miasto**: Amazon=`Holzkirchen` vs Sellasist=`Roggersdorfer Straße 35e` ❌
- **ulica**: Amazon=`Roggersdorfer Straße 35e` vs Sellasist=`Münchnerstraße 45 Holzkirchen` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: adidas UEFA Champions League Goal Edition After Shave, langanhaltend frischer, grüner Fougère Duft mit natürlichen ätherischen Ölen für Männer, 100ml
```

### Kluczowe logi
```
[INFO] ✅ Adres niemiecki (tylko ulica): ulica="Münchnerstraße 45 Holzkirchen"
[INFO] 🏙️ Znaleziono miasto: "Roggersdorfer Straße 35e"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-9680579"
[INFO] 📊 Wynik końcowy: imię="Jasmin", nazwisko="Pernisco", ulica="Münchnerstraße 45 Holzkirchen", numer="", miasto="Roggersdorfer Straße 35e", kod="83607", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+49 176 41685481"
[DEBUG] Zachowano międzynarodowy numer telefonu: +49 176 41685481
[DEBUG] Numer telefonu z Amazona: "+49 176 41685481"
[DEBUG] Sformatowany numer telefonu: "+49 176 41685481"
[DEBUG] Używam numeru telefonu ze scrapingu: +49 176 41685481
[INFO] Finalny numer telefonu dla zamówienia: +49 176 41685481
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres niemiecki (tylko ulica): ulica="Münchnerstraße 45 Holzkirchen"
[INFO] 🏙️ Znaleziono miasto: "Roggersdorfer Straße 35e"
```

---

## Zamówienie 404-5069661-2193900

### Niezgodności
- **miasto**: Amazon=`Cislago` vs Sellasist=`Primo piano` ❌
- **ulica**: Amazon=`Via Resegone 84 Primo piano` vs Sellasist=`Via Resegone` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: SEEKING HEALTH Probiota Histaminx 10 Billion CFU - Integratore Probiotico A Basso Contenuto di Istamina per L'intestino - Comfort Digestivo per L'intolleranza All'istamina - Vegano - 60 Capsule (SKU: 2498)
[WARNING] Nie znaleziono line_id dla produktu: SEEKING HEALTH Probiota Histaminx 10 Billion CFU - Integratore Probiotico A Basso Contenuto di Istamina per L'intestino - Comfort Digestivo per L'intolleranza All'istamina - Vegano - 60 Capsule
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (wzorzec): numer="84", ulica="Via Resegone"
[INFO] 🏙️ Znaleziono miasto: "Primo piano"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "404-5069661"
[INFO] 📊 Wynik końcowy: imię="Walter", nazwisko="Biscella", ulica="Via Resegone", numer="84", miasto="Primo piano", kod="21040", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "3461453974"
[DEBUG] Numer telefonu z Amazona: "3461453974"
[DEBUG] Sformatowany numer telefonu: "+393461453974"
[DEBUG] Używam numeru telefonu ze scrapingu: +393461453974
[INFO] Finalny numer telefonu dla zamówienia: +393461453974
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (wzorzec): numer="84", ulica="Via Resegone"
[INFO] 🏙️ Znaleziono miasto: "Primo piano"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 408-0436675-8237158

### Niezgodności
- **telefon**: Amazon=`352621386292` vs Sellasist=`352` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Farine de millet bio 500 g Eureko
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="31a rue Robert Schuman"
[INFO] 🏙️ Znaleziono miasto: "Frisange"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "408-0436675"
[INFO] 📊 Wynik końcowy: imię="Catherine", nazwisko="Ibba", ulica="31a rue Robert Schuman", numer="", miasto="Frisange", kod="5751", kraj="Luxembourg", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+352"
[DEBUG] Zachowano międzynarodowy numer telefonu: +352
[DEBUG] Numer telefonu z Amazona: "+352"
[DEBUG] Sformatowany numer telefonu: "+352"
[DEBUG] Używam numeru telefonu ze scrapingu: +352
[INFO] Finalny numer telefonu dla zamówienia: +352
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="31a rue Robert Schuman"
[INFO] 🏙️ Znaleziono miasto: "Frisange"
```

---

## Zamówienie 306-4643164-8955561

### Niezgodności
- **ulica**: Amazon=`Brühlstrasse 44` vs Sellasist=`Brühlstrasse` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Dual Power Backöfen & Grill Spray 500 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="44", ulica="Brühlstrasse"
[INFO] 🏙️ Znaleziono miasto: "Steinheim An Der Murr"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "306-4643164"
[INFO] 📊 Wynik końcowy: imię="Anna", nazwisko="Baglieri", ulica="Brühlstrasse", numer="44", miasto="Steinheim An Der Murr", kod="71711", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+491725129164"
[DEBUG] Zachowano międzynarodowy numer telefonu: +491725129164
[DEBUG] Numer telefonu z Amazona: "+491725129164"
[DEBUG] Sformatowany numer telefonu: "+491725129164"
[DEBUG] Używam numeru telefonu ze scrapingu: +491725129164
[INFO] Finalny numer telefonu dla zamówienia: +491725129164
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="44", ulica="Brühlstrasse"
[INFO] 🏙️ Znaleziono miasto: "Steinheim An Der Murr"
```

---

## Zamówienie 402-9250910-9864337

### Niezgodności
- **ulica**: Amazon=`Paseo de las Yeserías 31 7°X` vs Sellasist=`Paseo de las Yeserías` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: ProBiota HistaminX - 60 acid-resistant vcaps (SKU: 2498)
[WARNING] Nie znaleziono line_id dla produktu: ProBiota HistaminX - 60 acid-resistant vcaps
```

### Kluczowe logi
```
[INFO] ✅ Adres hiszpański (wzorzec): numer="31", ulica="Paseo de las Yeserías"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Madrid"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "402-9250910"
[INFO] 📊 Wynik końcowy: imię="Germán", nazwisko="Crespo", ulica="Paseo de las Yeserías", numer="31", miasto="Madrid", kod="28005", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+34657823238"
[DEBUG] Zachowano międzynarodowy numer telefonu: +34657823238
[DEBUG] Numer telefonu z Amazona: "+34657823238"
[DEBUG] Sformatowany numer telefonu: "+34657823238"
[DEBUG] Używam numeru telefonu ze scrapingu: +34657823238
[INFO] Finalny numer telefonu dla zamówienia: +34657823238
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres hiszpański (wzorzec): numer="31", ulica="Paseo de las Yeserías"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Madrid"
```

---

## Zamówienie 303-9572709-3251512

### Niezgodności
- **miasto**: Amazon=`München` vs Sellasist=`Isenschmidstr 19` ❌
- **ulica**: Amazon=`Isenschmidstr 19` vs Sellasist=`Rondell Apotheke` ❌
- **telefon**: Amazon=`49893090860` vs Sellasist=`490893090860` ❌

### Warnings
```
[WARNING] ⚠️ Linia "Rondell Apotheke" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Linia "Rondell Apotheke" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Linia "Rondell Apotheke" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: BIOMAGIC Hair Color - 66/07 CHOCOLATE BROWN (SKU: 21085)
[WARNING] Nie znaleziono line_id dla produktu: BIOMAGIC Hair Color - 66/07 CHOCOLATE BROWN
```

### Kluczowe logi
```
[WARNING] ⚠️ Linia "Rondell Apotheke" nie wygląda na niemiecką ulicę - pomijam
[INFO] ✅ Adres nieprzetworzony: ulica="Rondell Apotheke"
[INFO] 🏙️ Znaleziono miasto: "Isenschmidstr 19"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "303-9572709"
[INFO] 📊 Wynik końcowy: imię="Marion", nazwisko="Nelka", ulica="Rondell Apotheke", numer="", miasto="Isenschmidstr 19", kod="81545", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0893090860"
[DEBUG] Numer telefonu z Amazona: "0893090860"
[DEBUG] Sformatowany numer telefonu: "+490893090860"
[DEBUG] Używam numeru telefonu ze scrapingu: +490893090860
[INFO] Finalny numer telefonu dla zamówienia: +490893090860
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Linia "Rondell Apotheke" nie wygląda na niemiecką ulicę - pomijam
[INFO] ✅ Adres nieprzetworzony: ulica="Rondell Apotheke"
```

---

## Zamówienie 171-6159175-0158711

### Niezgodności
- **ulica**: Amazon=`Via C.B. Cavour 57` vs Sellasist=`Via C.B. Cavour` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Succo di barbabietola 100% 1000ml EkaMedica
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (wzorzec): numer="57", ulica="Via C.B. Cavour"
[INFO] 🏙️ Znaleziono miasto: "Petrignano del Lago"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-6159175"
[INFO] 📊 Wynik końcowy: imię="Franco", nazwisko="Di Benedetto", ulica="Via C.B. Cavour", numer="57", miasto="Petrignano del Lago", kod="06061", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0759528244"
[DEBUG] Numer telefonu z Amazona: "0759528244"
[DEBUG] Sformatowany numer telefonu: "+390759528244"
[DEBUG] Używam numeru telefonu ze scrapingu: +390759528244
[INFO] Finalny numer telefonu dla zamówienia: +390759528244
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (wzorzec): numer="57", ulica="Via C.B. Cavour"
[INFO] 🏙️ Znaleziono miasto: "Petrignano del Lago"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 304-8642654-7424321

### Niezgodności
- **telefon**: Amazon=`491713727423` vs Sellasist=`0` ❌

### Warnings
```
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 0171
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Fluss-Ampfer Tee BIO 50 g - DARY NATURY
```

### Kluczowe logi
```
[INFO] ✅ Adres niemiecki (tylko ulica): ulica="Alte Donaustrasse 31 a"
[INFO] 🏙️ Znaleziono miasto: "Neustadt Donau"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-8642654"
[INFO] 📊 Wynik końcowy: imię="Yvonne", nazwisko="Bartmann", ulica="Alte Donaustrasse 31 a", numer="", miasto="Neustadt Donau", kod="93333", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0171"
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 0171
[DEBUG] Numer telefonu z Amazona: "0171"
[DEBUG] Sformatowany numer telefonu: ""
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
[INFO] Finalny numer telefonu dla zamówienia: 000000000
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres niemiecki (tylko ulica): ulica="Alte Donaustrasse 31 a"
[INFO] 🏙️ Znaleziono miasto: "Neustadt Donau"
```

---

## Zamówienie 404-3166762-1428305

### Niezgodności
- **telefon**: Amazon=`32470665225` vs Sellasist=`320470665225` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (BE): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (BE): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Huile de soja BIO 250 ml - DARY NATURY (SKU: 21623)
[WARNING] Nie znaleziono line_id dla produktu: Huile de soja BIO 250 ml - DARY NATURY
```

### Kluczowe logi
```
[INFO] ✅ Adres belgijski (fallback): ulica="BORMSTRAAT 192"
[INFO] 🏙️ Znaleziono miasto: "RAMSDONK"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "404-3166762"
[INFO] 📊 Wynik końcowy: imię="Diederik", nazwisko="De Wit", ulica="BORMSTRAAT 192", numer="", miasto="RAMSDONK", kod="1880", kraj="Belgium", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0470665225"
[DEBUG] Numer telefonu z Amazona: "0470665225"
[DEBUG] Sformatowany numer telefonu: "+320470665225"
[DEBUG] Używam numeru telefonu ze scrapingu: +320470665225
[INFO] Finalny numer telefonu dla zamówienia: +320470665225
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres belgijski (fallback): ulica="BORMSTRAAT 192"
[INFO] 🏙️ Znaleziono miasto: "RAMSDONK"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 204-2742684-4567512

### Niezgodności
- **ulica**: Amazon=`FLAT 16 WESTMARK POINT NORLEY VALE` vs Sellasist=`-` ❌

### Warnings
```
[WARNING] ⚠️ Wykryto linię mieszkalną w UK: "FLAT 16 WESTMARK POINT NORLEY VALE" - szukam ulicy w dalszych liniach
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Nie znaleziono line_id dla produktu: Shirataki Rice 200 g Gluten Free Alternative to Normal Rice 100% Natural Rich in Fibre but Low Calorie Without Fat and Sugar and Suitable for Vegans
```

### Kluczowe logi
```
[WARNING] ⚠️ Wykryto linię mieszkalną w UK: "FLAT 16 WESTMARK POINT NORLEY VALE" - szukam ulicy w dalszych liniach
[INFO] 🏙️ Znaleziono miasto: "LONDON"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "204-2742684"
[INFO] 📊 Wynik końcowy: imię="Renata", nazwisko="Blazkiewicz", ulica="", numer="", miasto="LONDON", kod="SW15 4BX", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+447723431251"
[DEBUG] Zachowano międzynarodowy numer telefonu: +447723431251
[DEBUG] Numer telefonu z Amazona: "+447723431251"
[DEBUG] Sformatowany numer telefonu: "+447723431251"
[DEBUG] Używam numeru telefonu ze scrapingu: +447723431251
[INFO] Finalny numer telefonu dla zamówienia: +447723431251
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] 📞 Finalny telefon dla zamówienia: 204-2742684
[DEBUG] Używam numeru telefonu ze scrapingu: +447723431251
```

---

## Zamówienie 304-9992732-9407546

### Niezgodności
- **ulica**: Amazon=`Lisztstrasse 4/E` vs Sellasist=`-` ❌
- **telefon**: Amazon=`436766514488` vs Sellasist=`0` ❌

### Warnings
```
[WARNING] ❌ Adres jest INVALID (brak podstawowych danych)
[WARNING] Niepełne dane adresowe – aktualizuję zamówienie jako anulowane: imię=Order, nazwisko=Canceled
[WARNING] ⚠️ Nie znaleziono telefonu po "Phone:"
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Produkt anulowany został dodany do listy produktów (status: Cancelled)
[WARNING] ❌ Adres jest INVALID (brak podstawowych danych)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: AlmaWin® Gemüse und Obst Reiniger [500ml] für schonende & effektive Reinigung für alle glatten Sorten - 100% natürlicher Obst Gemüse Reiniger befreit von unerwünschtem Schmutz - Fruit Cleaner
```

### Kluczowe logi
```
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-9992732"
[WARNING] ❌ Adres jest INVALID (brak podstawowych danych)
[INFO] 📊 Wynik końcowy: imię="", nazwisko="", ulica="", numer="", miasto="", kod="", kraj="", valid=false
[WARNING] Niepełne dane adresowe – aktualizuję zamówienie jako anulowane: imię=Order, nazwisko=Canceled
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[WARNING] ⚠️ Nie znaleziono telefonu po "Phone:"
[DEBUG] Numer telefonu z Amazona: ""
[DEBUG] Sformatowany numer telefonu: ""
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
[INFO] Finalny numer telefonu dla zamówienia: 000000000
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Produkt anulowany został dodany do listy produktów (status: Cancelled)
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-9992732"
```

---

## Zamówienie 402-1400172-2584352

### Niezgodności
- **ulica**: Amazon=`2 Lieu-dit Fenderie` vs Sellasist=`Lieu-dit Fenderie` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Vilnius kvass Gerima (N), 500 ml (Lot de 1) (SKU: 34321)
[WARNING] Nie znaleziono line_id dla produktu: Vilnius kvass Gerima (N), 500 ml (Lot de 1)
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="2", ulica="Lieu-dit Fenderie"
[INFO] 🏙️ Znaleziono miasto: "Aube"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "402-1400172"
[INFO] 📊 Wynik końcowy: imię="Sainz", nazwisko="", ulica="Lieu-dit Fenderie", numer="2", miasto="Aube", kod="61270", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+33641294479"
[DEBUG] Zachowano międzynarodowy numer telefonu: +33641294479
[DEBUG] Numer telefonu z Amazona: "+33641294479"
[DEBUG] Sformatowany numer telefonu: "+33641294479"
[DEBUG] Używam numeru telefonu ze scrapingu: +33641294479
[INFO] Finalny numer telefonu dla zamówienia: +33641294479
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="2", ulica="Lieu-dit Fenderie"
[INFO] 🏙️ Znaleziono miasto: "Aube"
```

---

## Zamówienie 402-1092057-0044321

### Niezgodności
- **miasto**: Amazon=`Paris` vs Sellasist=`B-409, Codes portes : 4268 / 3133 / 3135 / Asc : 7189` ❌
- **ulica**: Amazon=`B-409, Codes portes : 4268 / 3133 / 3135 / Asc : 7189` vs Sellasist=`avenue de France` ❌
- **telefon**: Amazon=`33630688833` vs Sellasist=`330630688833` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Graine de pavot bleu BIO 1 kg - BIO PLANET
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="129", ulica="avenue de France"
[INFO] 🏙️ Znaleziono miasto: "B-409, Codes portes : 4268 / 3133 / 3135 / Asc : 7189"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "402-1092057"
[INFO] 📊 Wynik końcowy: imię="Clément", nazwisko="Jullien", ulica="avenue de France", numer="129", miasto="B-409, Codes portes : 4268 / 3133 / 3135 / Asc : 7189", kod="75013", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0630688833"
[DEBUG] Numer telefonu z Amazona: "0630688833"
[DEBUG] Sformatowany numer telefonu: "+330630688833"
[DEBUG] Używam numeru telefonu ze scrapingu: +330630688833
[INFO] Finalny numer telefonu dla zamówienia: +330630688833
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="129", ulica="avenue de France"
[INFO] 🏙️ Znaleziono miasto: "B-409, Codes portes : 4268 / 3133 / 3135 / Asc : 7189"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 407-4359083-4866741

### Niezgodności
- **miasto**: Amazon=`BILBAO` vs Sellasist=`VIZCAYA` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Thorne Research - Vitamin D/K2 Liquid (Metered Dispenser) - Dietary Supplement with Vitamins D3 and K2 to Support Healthy Bones and Muscles - 1 fluid ounce (30 mL) (SKU: 1353)
[WARNING] Nie znaleziono line_id dla produktu: Thorne Research - Vitamin D/K2 Liquid (Metered Dispenser) - Dietary Supplement with Vitamins D3 and K2 to Support Healthy Bones and Muscles - 1 fluid ounce (30 mL)
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="Calle Somera 45 2º-B"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "VIZCAYA"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-4359083"
[INFO] 📊 Wynik końcowy: imię="IAGOBA", nazwisko="LACA GARCÍA DE CORTÁZAR", ulica="Calle Somera 45 2º-B", numer="", miasto="VIZCAYA", kod="48005", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "660041785"
[DEBUG] Numer telefonu z Amazona: "660041785"
[DEBUG] Sformatowany numer telefonu: "+34660041785"
[DEBUG] Używam numeru telefonu ze scrapingu: +34660041785
[INFO] Finalny numer telefonu dla zamówienia: +34660041785
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="Calle Somera 45 2º-B"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "VIZCAYA"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 304-0784306-3037936

### Niezgodności
- **ulica**: Amazon=`Simonystraße, 39` vs Sellasist=`Simonystraße,` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Handrücken-Pflegecreme mit Collagen, Carotin 125 ml
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="39", ulica="Simonystraße,"
[INFO] 🏙️ Znaleziono miasto: "Linz"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-0784306"
[INFO] 📊 Wynik końcowy: imię="Jasmin", nazwisko="Paschinger", ulica="Simonystraße,", numer="39", miasto="Linz", kod="4030", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+436642625859"
[DEBUG] Zachowano międzynarodowy numer telefonu: +436642625859
[DEBUG] Numer telefonu z Amazona: "+436642625859"
[DEBUG] Sformatowany numer telefonu: "+436642625859"
[DEBUG] Używam numeru telefonu ze scrapingu: +436642625859
[INFO] Finalny numer telefonu dla zamówienia: +436642625859
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="39", ulica="Simonystraße,"
[INFO] 🏙️ Znaleziono miasto: "Linz"
```

---

## Zamówienie 302-8424785-4087561

### Niezgodności
- **ulica**: Amazon=`Ostender Str 11` vs Sellasist=`Ostender Str` ❌
- **telefon**: Amazon=`4917623489495` vs Sellasist=`17623489495` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: JOY DAY Waldfrucht Lebende Kulturen Bio Probiotika Flüssig Vegan 15 Lebende Bakterienstämme, Laktosefrei, Lebende lactobacillus (SKU: 2358)
[WARNING] Nie znaleziono line_id dla produktu: JOY DAY Waldfrucht Lebende Kulturen Bio Probiotika Flüssig Vegan 15 Lebende Bakterienstämme, Laktosefrei, Lebende lactobacillus
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="11", ulica="Ostender Str"
[INFO] 🏙️ Znaleziono miasto: "Berlin"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "302-8424785"
[INFO] 📊 Wynik końcowy: imię="Arkadiusz", nazwisko="Basinski", ulica="Ostender Str", numer="11", miasto="Berlin", kod="13353", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "17623489495"
[DEBUG] Użyto numeru telefonu bez zmian: 17623489495
[DEBUG] Numer telefonu z Amazona: "17623489495"
[DEBUG] Sformatowany numer telefonu: "17623489495"
[DEBUG] Używam numeru telefonu ze scrapingu: 17623489495
[INFO] Finalny numer telefonu dla zamówienia: 17623489495
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="11", ulica="Ostender Str"
[INFO] 🏙️ Znaleziono miasto: "Berlin"
```

---

## Zamówienie 026-6002512-4772313

### Niezgodności
- **telefon**: Amazon=`447788855848` vs Sellasist=`4407788855848` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Nie znaleziono line_id dla produktu: Airwick Freshmatic Citrus Pure Automatic Spray Refills 250ml (3 Pack)
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres brytyjski (suffix): ulica="1 ST CHADS DRIVE"
[INFO] 🏙️ Znaleziono miasto: "GRAVESEND"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "026-6002512"
[INFO] 📊 Wynik końcowy: imię="MARGARET", nazwisko="SPOKES", ulica="1 ST CHADS DRIVE", numer="", miasto="GRAVESEND", kod="DA12 4EL", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07788855848"
[DEBUG] Numer telefonu z Amazona: "07788855848"
[DEBUG] Sformatowany numer telefonu: "+4407788855848"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407788855848
[INFO] Finalny numer telefonu dla zamówienia: +4407788855848
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] 📞 Finalny telefon dla zamówienia: 026-6002512
[DEBUG] Używam numeru telefonu ze scrapingu: +4407788855848
[DEBUG] Używam numeru telefonu ze scrapingu: +4407788855848
```

---

## Zamówienie 304-5033193-7894712

### Niezgodności
- **ulica**: Amazon=`Dörgenkamp 3` vs Sellasist=`Dörgenkamp` ❌
- **telefon**: Amazon=`4915751452186` vs Sellasist=`15751452186` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: BIOMAGIC Hair Color 66.21 ICED CHOCOLATE
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="3", ulica="Dörgenkamp"
[INFO] 🏙️ Znaleziono miasto: "Goslar"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-5033193"
[INFO] 📊 Wynik końcowy: imię="Kushe", nazwisko="Popi", ulica="Dörgenkamp", numer="3", miasto="Goslar", kod="38642", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "015751452186"
[DEBUG] Użyto numeru telefonu bez zmian: 015751452186
[DEBUG] Numer telefonu z Amazona: "015751452186"
[DEBUG] Sformatowany numer telefonu: "015751452186"
[DEBUG] Używam numeru telefonu ze scrapingu: 015751452186
[INFO] Finalny numer telefonu dla zamówienia: 015751452186
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="3", ulica="Dörgenkamp"
[INFO] 🏙️ Znaleziono miasto: "Goslar"
```

---

## Zamówienie 205-0600396-7239500

### Niezgodności
- **miasto**: Amazon=`BIRMINGHAM` vs Sellasist=`SOLIHULL ROAD SPARKHILL` ❌
- **ulica**: Amazon=`126 SOLIHULL ROAD SPARKHILL` vs Sellasist=`126` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: MuscleTech NitroTech Whey Protein Powder, Muscle Maintenance & Growth, Whey Isolate Protein Powder With 3g Creatine, Protein Shake For Men & Women, 7.3g BCAA, 40 Servings, 1.8g, Strawberry (SKU: 10798)
[WARNING] Nie znaleziono line_id dla produktu: MuscleTech NitroTech Whey Protein Powder, Muscle Maintenance & Growth, Whey Isolate Protein Powder With 3g Creatine, Protein Shake For Men & Women, 7.3g BCAA, 40 Servings, 1.8g, Strawberry
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="126"
[INFO] 🏙️ Znaleziono miasto: "SOLIHULL ROAD SPARKHILL"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "205-0600396"
[INFO] 📊 Wynik końcowy: imię="Ashish", nazwisko="pahal", ulica="126", numer="", miasto="SOLIHULL ROAD SPARKHILL", kod="B11 3AF", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+447717184329"
[DEBUG] Zachowano międzynarodowy numer telefonu: +447717184329
[DEBUG] Numer telefonu z Amazona: "+447717184329"
[DEBUG] Sformatowany numer telefonu: "+447717184329"
[DEBUG] Używam numeru telefonu ze scrapingu: +447717184329
[INFO] Finalny numer telefonu dla zamówienia: +447717184329
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: MuscleTech NitroTech Whey Protein Powder, Muscle Maintenance & Growth, Whey Isolate Protein Powder With 3g Creatine, Protein Shake For Men & Women, 7.3g BCAA, 40 Servings, 1.8g, Strawberry (SKU: 10798)
[INFO] 📞 Finalny telefon dla zamówienia: 205-0600396
```

---

## Zamówienie 205-0322017-0962773

### Niezgodności
- **telefon**: Amazon=`447445713926` vs Sellasist=`4407445713926` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: EkaMedica Chestnut + Japanese Pagoda Gel Relief for Tired Legs 200ML (SKU: 7840)
[WARNING] Nie znaleziono line_id dla produktu: EkaMedica Chestnut + Japanese Pagoda Gel Relief for Tired Legs 200ML
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres brytyjski (suffix): ulica="17 Daventry Avenue"
[INFO] 🏙️ Znaleziono miasto: "BLACKPOOL"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "205-0322017"
[INFO] 📊 Wynik końcowy: imię="F A", nazwisko="Rich", ulica="17 Daventry Avenue", numer="", miasto="BLACKPOOL", kod="FY2 9LB", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07445713926"
[DEBUG] Numer telefonu z Amazona: "07445713926"
[DEBUG] Sformatowany numer telefonu: "+4407445713926"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407445713926
[INFO] Finalny numer telefonu dla zamówienia: +4407445713926
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: EkaMedica Chestnut + Japanese Pagoda Gel Relief for Tired Legs 200ML (SKU: 7840)
[INFO] 📞 Finalny telefon dla zamówienia: 205-0322017
[DEBUG] Używam numeru telefonu ze scrapingu: +4407445713926
```

---

## Zamówienie 171-5614440-5363565

### Niezgodności
- **miasto**: Amazon=`Beausoleil` vs Sellasist=`Alcazar Bloc A` ❌
- **ulica**: Amazon=`Alcazar Bloc A` vs Sellasist=`Bd du Général Leclerc` ❌
- **telefon**: Amazon=`33665085118` vs Sellasist=`330665085118` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Targroch Riz Sauvage Paquet de 1 x 1000g - Zizania Aquatica - Pour les Salades et les Plats Végétaliens
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="3", ulica="Bd du Général Leclerc"
[INFO] 🏙️ Znaleziono miasto: "Alcazar Bloc A"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-5614440"
[INFO] 📊 Wynik końcowy: imię="Palmira", nazwisko="Martinelli", ulica="Bd du Général Leclerc", numer="3", miasto="Alcazar Bloc A", kod="06240", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0665085118"
[DEBUG] Numer telefonu z Amazona: "0665085118"
[DEBUG] Sformatowany numer telefonu: "+330665085118"
[DEBUG] Używam numeru telefonu ze scrapingu: +330665085118
[INFO] Finalny numer telefonu dla zamówienia: +330665085118
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="3", ulica="Bd du Général Leclerc"
[INFO] 🏙️ Znaleziono miasto: "Alcazar Bloc A"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 408-2119662-5605143

### Niezgodności
- **miasto**: Amazon=`Monforte de Lemos` vs Sellasist=`Lugo` ❌
- **ulica**: Amazon=`Historiador Dalmiro de la Vagoma 11 3 A Piso` vs Sellasist=`Historiador Dalmiro de la Vagoma 11` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Shimano Núcleo Buje Completo
```

### Kluczowe logi
```
[INFO] ✅ Adres hiszpański (wzorzec): numer="3 A", ulica="Historiador Dalmiro de la Vagoma 11"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Lugo"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "408-2119662"
[INFO] 📊 Wynik końcowy: imię="Yolanda", nazwisko="Fernández Rodriguez", ulica="Historiador Dalmiro de la Vagoma 11", numer="3 A", miasto="Lugo", kod="27400", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "666970917"
[DEBUG] Numer telefonu z Amazona: "666970917"
[DEBUG] Sformatowany numer telefonu: "+34666970917"
[DEBUG] Używam numeru telefonu ze scrapingu: +34666970917
[INFO] Finalny numer telefonu dla zamówienia: +34666970917
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres hiszpański (wzorzec): numer="3 A", ulica="Historiador Dalmiro de la Vagoma 11"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Lugo"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 202-3603948-4819551

### Niezgodności
- **miasto**: Amazon=`Hornchurch` vs Sellasist=`92 north street` ❌
- **ulica**: Amazon=`92 north street` vs Sellasist=`Hornchurch convenience store` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Nie znaleziono line_id dla produktu: Sea-Buckthorn Juice 100% BIO Sugar-Free 500 ml Premium Rosa
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="Hornchurch convenience store"
[INFO] 🏙️ Znaleziono miasto: "92 north street"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "202-3603948"
[INFO] 📊 Wynik końcowy: imię="patelmayur", nazwisko="", ulica="Hornchurch convenience store", numer="", miasto="92 north street", kod="RM111SR", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+447539380945"
[DEBUG] Zachowano międzynarodowy numer telefonu: +447539380945
[DEBUG] Numer telefonu z Amazona: "+447539380945"
[DEBUG] Sformatowany numer telefonu: "+447539380945"
[DEBUG] Używam numeru telefonu ze scrapingu: +447539380945
[INFO] Finalny numer telefonu dla zamówienia: +447539380945
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] 📞 Finalny telefon dla zamówienia: 202-3603948
[DEBUG] Używam numeru telefonu ze scrapingu: +447539380945
```

---

## Zamówienie 405-0817428-0248365

### Niezgodności
- **telefon**: Amazon=`33643031187` vs Sellasist=`330643031187` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Postnatal Omega-3, 1120mg Lemon - 60 softgels
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="14, rue du Bosquet"
[INFO] 🏙️ Znaleziono miasto: "Marcey-les-Grèves"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "405-0817428"
[INFO] 📊 Wynik końcowy: imię="Willy", nazwisko="QUERUEL ou Sandrine DUPONT QUERUEL", ulica="14, rue du Bosquet", numer="", miasto="Marcey-les-Grèves", kod="50300", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0643031187"
[DEBUG] Numer telefonu z Amazona: "0643031187"
[DEBUG] Sformatowany numer telefonu: "+330643031187"
[DEBUG] Używam numeru telefonu ze scrapingu: +330643031187
[INFO] Finalny numer telefonu dla zamówienia: +330643031187
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="14, rue du Bosquet"
[INFO] 🏙️ Znaleziono miasto: "Marcey-les-Grèves"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 206-5916229-4244316

### Niezgodności
- **telefon**: Amazon=`447587398544` vs Sellasist=`4407587398544` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Nie znaleziono line_id dla produktu: More4Care Snake Lift Firming Eye and Eyelid Smoothing Cream 35 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres brytyjski (suffix): ulica="65 NOAKES MEADOW"
[INFO] 🏙️ Znaleziono miasto: "ASHFORD"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "206-5916229"
[INFO] 📊 Wynik końcowy: imię="Japana", nazwisko="Rai", ulica="65 NOAKES MEADOW", numer="", miasto="ASHFORD", kod="TN23 4RA", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07587398544"
[DEBUG] Numer telefonu z Amazona: "07587398544"
[DEBUG] Sformatowany numer telefonu: "+4407587398544"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407587398544
[INFO] Finalny numer telefonu dla zamówienia: +4407587398544
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] 📞 Finalny telefon dla zamówienia: 206-5916229
[DEBUG] Używam numeru telefonu ze scrapingu: +4407587398544
[DEBUG] Używam numeru telefonu ze scrapingu: +4407587398544
```

---

## Zamówienie 407-4642990-9933131

### Niezgodności
- **ulica**: Amazon=`Via Carlo Goldoni 3` vs Sellasist=`Via Carlo Goldoni` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Chic Mic Bioloco Kids Bottle BEK100 - Bottiglia termica per bambini, in acciaio INOX, motivo: Penguin, capacità 350 ml, dimensioni: 15 x 8 cm
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (wzorzec): numer="3", ulica="Via Carlo Goldoni"
[INFO] 🏙️ Znaleziono miasto: "Legnago"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-4642990"
[INFO] 📊 Wynik końcowy: imię="Gianfilippo", nazwisko="Pili", ulica="Via Carlo Goldoni", numer="3", miasto="Legnago", kod="37045", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+393667087607"
[DEBUG] Zachowano międzynarodowy numer telefonu: +393667087607
[DEBUG] Numer telefonu z Amazona: "+393667087607"
[DEBUG] Sformatowany numer telefonu: "+393667087607"
[DEBUG] Używam numeru telefonu ze scrapingu: +393667087607
[INFO] Finalny numer telefonu dla zamówienia: +393667087607
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (wzorzec): numer="3", ulica="Via Carlo Goldoni"
[INFO] 🏙️ Znaleziono miasto: "Legnago"
```

---

## Zamówienie 305-1729946-7333124

### Niezgodności
- **telefon**: Amazon=`4367763651907` vs Sellasist=`67763651907` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: LA RIVE Aqua Edt 90 ml (SKU: 37940_7)
[WARNING] Nie znaleziono line_id dla produktu: LA RIVE Aqua Edt 90 ml
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="Breitenfurter Straße 485/14/1"
[INFO] 🏙️ Znaleziono miasto: "Wien"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "305-1729946"
[INFO] 📊 Wynik końcowy: imię="Mustafa", nazwisko="Hashemi", ulica="Breitenfurter Straße 485/14/1", numer="", miasto="Wien", kod="1230", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "067763651907"
[DEBUG] Użyto numeru telefonu bez zmian: 067763651907
[DEBUG] Numer telefonu z Amazona: "067763651907"
[DEBUG] Sformatowany numer telefonu: "067763651907"
[DEBUG] Używam numeru telefonu ze scrapingu: 067763651907
[INFO] Finalny numer telefonu dla zamówienia: 067763651907
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="Breitenfurter Straße 485/14/1"
[INFO] 🏙️ Znaleziono miasto: "Wien"
```

---

## Zamówienie 306-1375831-1673111

### Niezgodności
- **ulica**: Amazon=`Surkampstraße 94` vs Sellasist=`Surkampstraße` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: La Rive Cabana EDT 90 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="94", ulica="Surkampstraße"
[INFO] 🏙️ Znaleziono miasto: "Gelsenkirchen"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "306-1375831"
[INFO] 📊 Wynik końcowy: imię="Maike", nazwisko="Wachs-Hermsen", ulica="Surkampstraße", numer="94", miasto="Gelsenkirchen", kod="45891", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+4916090701551"
[DEBUG] Zachowano międzynarodowy numer telefonu: +4916090701551
[DEBUG] Numer telefonu z Amazona: "+4916090701551"
[DEBUG] Sformatowany numer telefonu: "+4916090701551"
[DEBUG] Używam numeru telefonu ze scrapingu: +4916090701551
[INFO] Finalny numer telefonu dla zamówienia: +4916090701551
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="94", ulica="Surkampstraße"
[INFO] 🏙️ Znaleziono miasto: "Gelsenkirchen"
```

---

## Zamówienie 026-1422926-3759521

### Niezgodności
- **miasto**: Amazon=`DURHAM` vs Sellasist=`BROWNING HILL COXHOE` ❌
- **ulica**: Amazon=`101 BROWNING HILL COXHOE` vs Sellasist=`101` ❌
- **telefon**: Amazon=`447397299733` vs Sellasist=`4407397299733` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: ProBiota HistaminX - 60 Acid-Resistant vcaps (SKU: 2498)
[WARNING] Nie znaleziono line_id dla produktu: ProBiota HistaminX - 60 Acid-Resistant vcaps
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="101"
[INFO] 🏙️ Znaleziono miasto: "BROWNING HILL COXHOE"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "026-1422926"
[INFO] 📊 Wynik końcowy: imię="Sarah", nazwisko="Cauchi", ulica="101", numer="", miasto="BROWNING HILL COXHOE", kod="DH6 4SA", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07397299733"
[DEBUG] Numer telefonu z Amazona: "07397299733"
[DEBUG] Sformatowany numer telefonu: "+4407397299733"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407397299733
[INFO] Finalny numer telefonu dla zamówienia: +4407397299733
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: ProBiota HistaminX - 60 Acid-Resistant vcaps (SKU: 2498)
[INFO] 📞 Finalny telefon dla zamówienia: 026-1422926
[DEBUG] Używam numeru telefonu ze scrapingu: +4407397299733
```

---

## Zamówienie 304-2610388-7135522

### Niezgodności
- **ulica**: Amazon=`Am Vogelsang 48` vs Sellasist=`Am Vogelsang` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Creme-Waschlotion für die Intimregion mit Ascorbinsäure gegen Verletzungen der Schleimhaut 500ml von Ziaja // Kremowy Plyn do higieny intymnej z kwasem askorbinowym przeciw podraznieniom 500ml - Ziaja
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="48", ulica="Am Vogelsang"
[INFO] 🏙️ Znaleziono miasto: "erftstadt"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-2610388"
[INFO] 📊 Wynik końcowy: imię="Fabian", nazwisko="Franken", ulica="Am Vogelsang", numer="48", miasto="erftstadt", kod="50374", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+491772139414"
[DEBUG] Zachowano międzynarodowy numer telefonu: +491772139414
[DEBUG] Numer telefonu z Amazona: "+491772139414"
[DEBUG] Sformatowany numer telefonu: "+491772139414"
[DEBUG] Używam numeru telefonu ze scrapingu: +491772139414
[INFO] Finalny numer telefonu dla zamówienia: +491772139414
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="48", ulica="Am Vogelsang"
[INFO] 🏙️ Znaleziono miasto: "erftstadt"
```

---

## Zamówienie 302-5917183-7129154

### Niezgodności
- **ulica**: Amazon=`Medelyno 37` vs Sellasist=`Medelyno` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Aliness Mastika 500mg, Harz in Pulverform, Nahrungsergänzungsmittel mit Pflanzenextrakten, 60 kapseln (SKU: 7200)
[WARNING] Nie znaleziono line_id dla produktu: Aliness Mastika 500mg, Harz in Pulverform, Nahrungsergänzungsmittel mit Pflanzenextrakten, 60 kapseln
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="37", ulica="Medelyno"
[INFO] 🏙️ Znaleziono miasto: "Kaunas"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "302-5917183"
[INFO] 📊 Wynik końcowy: imię="Marija", nazwisko="Ragauskiene", ulica="Medelyno", numer="37", miasto="Kaunas", kod="52317", kraj="Lithuania", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "37065071346"
[DEBUG] Użyto numeru telefonu bez zmian: 37065071346
[DEBUG] Numer telefonu z Amazona: "37065071346"
[DEBUG] Sformatowany numer telefonu: "37065071346"
[DEBUG] Używam numeru telefonu ze scrapingu: 37065071346
[INFO] Finalny numer telefonu dla zamówienia: 37065071346
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="37", ulica="Medelyno"
[INFO] 🏙️ Znaleziono miasto: "Kaunas"
```

---

## Zamówienie 406-7494742-8256333

### Niezgodności
- **miasto**: Amazon=`Roma` vs Sellasist=`NJ NAILS` ❌
- **ulica**: Amazon=`NJ NAILS` vs Sellasist=`Via Pietro Maffi 86 C` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: SHIMANO PARAMANI 105 ST-R7170
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (fallback): ulica="Via Pietro Maffi 86 C"
[INFO] 🏙️ Znaleziono miasto: "NJ NAILS"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "406-7494742"
[INFO] 📊 Wynik końcowy: imię="Veronica", nazwisko="Percopo", ulica="Via Pietro Maffi 86 C", numer="", miasto="NJ NAILS", kod="00168", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+393319539753"
[DEBUG] Zachowano międzynarodowy numer telefonu: +393319539753
[DEBUG] Numer telefonu z Amazona: "+393319539753"
[DEBUG] Sformatowany numer telefonu: "+393319539753"
[DEBUG] Używam numeru telefonu ze scrapingu: +393319539753
[INFO] Finalny numer telefonu dla zamówienia: +393319539753
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (fallback): ulica="Via Pietro Maffi 86 C"
[INFO] 🏙️ Znaleziono miasto: "NJ NAILS"
```

---

## Zamówienie 406-6637978-9710721

### Niezgodności
- **ulica**: Amazon=`5 av Gutenberg` vs Sellasist=`av Gutenberg` ❌
- **telefon**: Amazon=`33953379231` vs Sellasist=`330953379231` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Iron, 18mg - 120 vcaps
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="5", ulica="av Gutenberg"
[INFO] 🏙️ Znaleziono miasto: "Puteaux"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "406-6637978"
[INFO] 📊 Wynik końcowy: imię="Rohmer", nazwisko="Frédéric", ulica="av Gutenberg", numer="5", miasto="Puteaux", kod="92800", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0953379231"
[DEBUG] Numer telefonu z Amazona: "0953379231"
[DEBUG] Sformatowany numer telefonu: "+330953379231"
[DEBUG] Używam numeru telefonu ze scrapingu: +330953379231
[INFO] Finalny numer telefonu dla zamówienia: +330953379231
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="5", ulica="av Gutenberg"
[INFO] 🏙️ Znaleziono miasto: "Puteaux"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 302-4249177-5518762

### Niezgodności
- **ulica**: Amazon=`Eichborndamm 292` vs Sellasist=`Eichborndamm` ❌
- **telefon**: Amazon=`491742935837` vs Sellasist=`1742935837` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Pani Walewska Anti-Falten Creme 50 ml - Antifalten Pflege Reife Haut - Skincare Wiederherstellungen Produkte - Anti Aging Creme Gesicht Tagescreme und Nachtcreme - Beugt Lichtalterung der Haut Vor
[WARNING] Nie znaleziono line_id dla produktu: Pani Walewska Sweet Romance Perfumed Soap 100gr
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="292", ulica="Eichborndamm"
[INFO] 🏙️ Znaleziono miasto: "Berlin"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "302-4249177"
[INFO] 📊 Wynik końcowy: imię="Anna", nazwisko="Shudova", ulica="Eichborndamm", numer="292", miasto="Berlin", kod="13437", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "01742935837"
[DEBUG] Użyto numeru telefonu bez zmian: 01742935837
[DEBUG] Numer telefonu z Amazona: "01742935837"
[DEBUG] Sformatowany numer telefonu: "01742935837"
[DEBUG] Używam numeru telefonu ze scrapingu: 01742935837
[INFO] Finalny numer telefonu dla zamówienia: 01742935837
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="292", ulica="Eichborndamm"
[INFO] 🏙️ Znaleziono miasto: "Berlin"
```

---

## Zamówienie 304-5059893-0091534

### Niezgodności
- **miasto**: Amazon=`Graz` vs Sellasist=`18` ❌
- **ulica**: Amazon=`Conrad von Hötzendorf Straße 165 18` vs Sellasist=`Conrad von Hötzendorf Straße` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: AlmaWin® Gemüse und Obst Reiniger [500ml] für schonende & effektive Reinigung für alle glatten Sorten - 100% natürlicher Obst Gemüse Reiniger befreit von unerwünschtem Schmutz - Fruit Cleaner (SKU: 35439)
[WARNING] Nie znaleziono line_id dla produktu: AlmaWin® Gemüse und Obst Reiniger [500ml] für schonende & effektive Reinigung für alle glatten Sorten - 100% natürlicher Obst Gemüse Reiniger befreit von unerwünschtem Schmutz - Fruit Cleaner
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="165", ulica="Conrad von Hötzendorf Straße"
[INFO] 🏙️ Znaleziono miasto: "18"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-5059893"
[INFO] 📊 Wynik końcowy: imię="Hamza", nazwisko="Smajlovic", ulica="Conrad von Hötzendorf Straße", numer="165", miasto="18", kod="8010", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+436766448722"
[DEBUG] Zachowano międzynarodowy numer telefonu: +436766448722
[DEBUG] Numer telefonu z Amazona: "+436766448722"
[DEBUG] Sformatowany numer telefonu: "+436766448722"
[DEBUG] Używam numeru telefonu ze scrapingu: +436766448722
[INFO] Finalny numer telefonu dla zamówienia: +436766448722
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="165", ulica="Conrad von Hötzendorf Straße"
[INFO] 🏙️ Znaleziono miasto: "18"
```

---

## Zamówienie 408-1023999-4713962

### Niezgodności
- **ulica**: Amazon=`134 RUE DE COURCELLES` vs Sellasist=`RUE DE COURCELLES` ❌
- **telefon**: Amazon=`33665575646` vs Sellasist=`330665575646` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Huile de colza oméga-3 BIO 750 ml - JULES BROCHENIN
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="134", ulica="RUE DE COURCELLES"
[INFO] 🏙️ Znaleziono miasto: "PARIS"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "408-1023999"
[INFO] 📊 Wynik końcowy: imię="OLIO", nazwisko="FABRICE", ulica="RUE DE COURCELLES", numer="134", miasto="PARIS", kod="75017", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0665575646"
[DEBUG] Numer telefonu z Amazona: "0665575646"
[DEBUG] Sformatowany numer telefonu: "+330665575646"
[DEBUG] Używam numeru telefonu ze scrapingu: +330665575646
[INFO] Finalny numer telefonu dla zamówienia: +330665575646
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="134", ulica="RUE DE COURCELLES"
[INFO] 🏙️ Znaleziono miasto: "PARIS"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 403-2448193-3994751

### Niezgodności
- **telefon**: Amazon=`31652372165` vs Sellasist=`310652372165` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: PUROX UNIWERSAL (78 WL) waspoeder in foliezak wasmiddel 5,5 kg
```

### Kluczowe logi
```
[INFO] ✅ Adres holenderski (standard): ulica="Albert Hahnplantsoen 18"
[INFO] 🏙️ Znaleziono miasto: "ZAANDAM"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "403-2448193"
[INFO] 📊 Wynik końcowy: imię="h.p van", nazwisko="Ee", ulica="Albert Hahnplantsoen 18", numer="", miasto="ZAANDAM", kod="", kraj="Netherlands", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0652372165"
[DEBUG] Numer telefonu z Amazona: "0652372165"
[DEBUG] Sformatowany numer telefonu: "+310652372165"
[DEBUG] Używam numeru telefonu ze scrapingu: +310652372165
[INFO] Finalny numer telefonu dla zamówienia: +310652372165
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres holenderski (standard): ulica="Albert Hahnplantsoen 18"
[INFO] 🏙️ Znaleziono miasto: "ZAANDAM"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 303-7053037-2469950

### Niezgodności
- **telefon**: Amazon=`436643149802` vs Sellasist=`6643149802` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: LA RIVE
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="Rudolf Kumbein-Gasse 16/11/7"
[INFO] 🏙️ Znaleziono miasto: "Wiener Neustadt"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "303-7053037"
[INFO] 📊 Wynik końcowy: imię="Monika", nazwisko="Wagenhofer", ulica="Rudolf Kumbein-Gasse 16/11/7", numer="", miasto="Wiener Neustadt", kod="2700", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "06643149802"
[DEBUG] Użyto numeru telefonu bez zmian: 06643149802
[DEBUG] Numer telefonu z Amazona: "06643149802"
[DEBUG] Sformatowany numer telefonu: "06643149802"
[DEBUG] Używam numeru telefonu ze scrapingu: 06643149802
[INFO] Finalny numer telefonu dla zamówienia: 06643149802
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="Rudolf Kumbein-Gasse 16/11/7"
[INFO] 🏙️ Znaleziono miasto: "Wiener Neustadt"
```

---

## Zamówienie 404-5383598-0688336

### Niezgodności
- **ulica**: Amazon=`via liberta 77` vs Sellasist=`via liberta` ❌
- **telefon**: Amazon=`3920039966` vs Sellasist=`393920039966` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: BioTechUSA 100% Creatine Monohydrate | Creatina di grado farmaceutico | Micronizzata | Vegan | Senza glutine, confezione classica a contenitore in plastica, 500 g, Non aromatizzato (SKU: 1542)
[WARNING] Nie znaleziono line_id dla produktu: BioTechUSA 100% Creatine Monohydrate | Creatina di grado farmaceutico | Micronizzata | Vegan | Senza glutine, confezione classica a contenitore in plastica, 500 g, Non aromatizzato
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (wzorzec): numer="77", ulica="via liberta"
[INFO] 🏙️ Znaleziono miasto: "Zanica"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "404-5383598"
[INFO] 📊 Wynik końcowy: imię="Cristian o", nazwisko="Antonio Castelli", ulica="via liberta", numer="77", miasto="Zanica", kod="24050", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "3920039966"
[DEBUG] Numer telefonu z Amazona: "3920039966"
[DEBUG] Sformatowany numer telefonu: "+393920039966"
[DEBUG] Używam numeru telefonu ze scrapingu: +393920039966
[INFO] Finalny numer telefonu dla zamówienia: +393920039966
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (wzorzec): numer="77", ulica="via liberta"
[INFO] 🏙️ Znaleziono miasto: "Zanica"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 203-9232084-9585116

### Niezgodności
- **miasto**: Amazon=`BANGOR` vs Sellasist=`RHIWLAS` ❌
- **ulica**: Amazon=`RHIWLAS` vs Sellasist=`PENRALLT` ❌
- **telefon**: Amazon=`447765413673` vs Sellasist=`4407765413673` ❌

### Warnings
```
[WARNING] ⚠️ Linia "PENRALLT" wygląda na miasto UK (słowo pojedyncze), nie ulicę - pomijam
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Nie znaleziono line_id dla produktu: Cranberries Dried UNSWEETENED BIO 50 g - BIO PLANET
```

### Kluczowe logi
```
[WARNING] ⚠️ Linia "PENRALLT" wygląda na miasto UK (słowo pojedyncze), nie ulicę - pomijam
[INFO] ✅ Adres nieprzetworzony: ulica="PENRALLT"
[INFO] 🏙️ Znaleziono miasto: "RHIWLAS"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "203-9232084"
[INFO] 📊 Wynik końcowy: imię="Mari", nazwisko="Williams", ulica="PENRALLT", numer="", miasto="RHIWLAS", kod="LL57 4GA", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07765413673"
[DEBUG] Numer telefonu z Amazona: "07765413673"
[DEBUG] Sformatowany numer telefonu: "+4407765413673"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407765413673
[INFO] Finalny numer telefonu dla zamówienia: +4407765413673
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] 📞 Finalny telefon dla zamówienia: 203-9232084
[DEBUG] Używam numeru telefonu ze scrapingu: +4407765413673
```

---

## Zamówienie 303-3554813-4861962

### Niezgodności
- **ulica**: Amazon=`Erlenring 7` vs Sellasist=`Erlenring` ❌
- **telefon**: Amazon=`4964527496` vs Sellasist=`49064527496` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: La Rive In Flames Women Eau De parfum 90 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="7", ulica="Erlenring"
[INFO] 🏙️ Znaleziono miasto: "Battenberg (eder)"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "303-3554813"
[INFO] 📊 Wynik końcowy: imię="petri", nazwisko="waldemar", ulica="Erlenring", numer="7", miasto="Battenberg (eder)", kod="35088", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "064527496"
[DEBUG] Numer telefonu z Amazona: "064527496"
[DEBUG] Sformatowany numer telefonu: "+49064527496"
[DEBUG] Używam numeru telefonu ze scrapingu: +49064527496
[INFO] Finalny numer telefonu dla zamówienia: +49064527496
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="7", ulica="Erlenring"
[INFO] 🏙️ Znaleziono miasto: "Battenberg (eder)"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 402-9766551-9550716

### Niezgodności
- **miasto**: Amazon=`Puteaux` vs Sellasist=`2è Étage Porte 1` ❌
- **ulica**: Amazon=`2è Étage Porte 1` vs Sellasist=`Place de l&#039;église` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: PAI MU TAN THÉ BLANC BIO 100 g - ECOBLIK
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="6 Bis", ulica="Place de l'église"
[INFO] 🏙️ Znaleziono miasto: "2è Étage Porte 1"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "402-9766551"
[INFO] 📊 Wynik końcowy: imię="GOGNOUMBOU", nazwisko="ALIMA -HAJJAR", ulica="Place de l'église", numer="6 Bis", miasto="2è Étage Porte 1", kod="92800", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+33626456153"
[DEBUG] Zachowano międzynarodowy numer telefonu: +33626456153
[DEBUG] Numer telefonu z Amazona: "+33626456153"
[DEBUG] Sformatowany numer telefonu: "+33626456153"
[DEBUG] Używam numeru telefonu ze scrapingu: +33626456153
[INFO] Finalny numer telefonu dla zamówienia: +33626456153
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="6 Bis", ulica="Place de l'église"
[INFO] 🏙️ Znaleziono miasto: "2è Étage Porte 1"
```

---

## Zamówienie 403-4106530-5608339

### Niezgodności
- **miasto**: Amazon=`Valencia` vs Sellasist=`Albal` ❌
- **ulica**: Amazon=`Calle de san blas 9 Piso 2` vs Sellasist=`Calle de san blas` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: SHIMANO Cambiador de Pinzas de Freno de 203 a 220 mm Post Mount
```

### Kluczowe logi
```
[INFO] ✅ Adres hiszpański (wzorzec): numer="9", ulica="Calle de san blas"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Albal"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "403-4106530"
[INFO] 📊 Wynik końcowy: imię="Lianders", nazwisko="zuluaga", ulica="Calle de san blas", numer="9", miasto="Albal", kod="46470", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "613139915"
[DEBUG] Numer telefonu z Amazona: "613139915"
[DEBUG] Sformatowany numer telefonu: "+34613139915"
[DEBUG] Używam numeru telefonu ze scrapingu: +34613139915
[INFO] Finalny numer telefonu dla zamówienia: +34613139915
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres hiszpański (wzorzec): numer="9", ulica="Calle de san blas"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Albal"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 408-4925183-2313935

### Niezgodności
- **miasto**: Amazon=`Zonza,Ste Lucie De Porto Vecchio` vs Sellasist=`Au domaine de Granajolo` ❌
- **ulica**: Amazon=`Au domaine de Granajolo` vs Sellasist=`Lieu-dit la Testa` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Essential Oil, Ginger Oil - 30 ml.
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="Lieu-dit la Testa"
[INFO] 🏙️ Znaleziono miasto: "Au domaine de Granajolo"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "408-4925183"
[INFO] 📊 Wynik końcowy: imię="Aufrere", nazwisko="Fabien", ulica="Lieu-dit la Testa", numer="", miasto="Au domaine de Granajolo", kod="20144", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+33616012874"
[DEBUG] Zachowano międzynarodowy numer telefonu: +33616012874
[DEBUG] Numer telefonu z Amazona: "+33616012874"
[DEBUG] Sformatowany numer telefonu: "+33616012874"
[DEBUG] Używam numeru telefonu ze scrapingu: +33616012874
[INFO] Finalny numer telefonu dla zamówienia: +33616012874
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="Lieu-dit la Testa"
[INFO] 🏙️ Znaleziono miasto: "Au domaine de Granajolo"
```

---

## Zamówienie 203-7358862-6680340

### Niezgodności
- **telefon**: Amazon=`447936969996` vs Sellasist=`4407936969996` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Thorne Super EPA - Omega-3 Fatty Acids EPA and DHA - for Heart & Brain - 90 Gelcaps (SKU: 14459)
[WARNING] Nie znaleziono line_id dla produktu: Thorne Super EPA - Omega-3 Fatty Acids EPA and DHA - for Heart & Brain - 90 Gelcaps
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="140 great tattenhams"
[INFO] 🏙️ Znaleziono miasto: "Epsom"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "203-7358862"
[INFO] 📊 Wynik końcowy: imię="Sanae", nazwisko="Sahebjalal", ulica="140 great tattenhams", numer="", miasto="Epsom", kod="KT18 5SF", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07936969996"
[DEBUG] Numer telefonu z Amazona: "07936969996"
[DEBUG] Sformatowany numer telefonu: "+4407936969996"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407936969996
[INFO] Finalny numer telefonu dla zamówienia: +4407936969996
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Thorne Super EPA - Omega-3 Fatty Acids EPA and DHA - for Heart & Brain - 90 Gelcaps (SKU: 14459)
[INFO] 📞 Finalny telefon dla zamówienia: 203-7358862
[DEBUG] Używam numeru telefonu ze scrapingu: +4407936969996
```

---

## Zamówienie 407-0687334-2269132

### Niezgodności
- **ulica**: Amazon=`Midvintergatan 74` vs Sellasist=`Midvintergatan` ❌
- **telefon**: Amazon=`46733460643` vs Sellasist=`460733460643` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (SE): 25% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: NONI FRUKTJUICE BIO 750 ml - MEDICURA
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="74", ulica="Midvintergatan"
[INFO] 🏙️ Znaleziono miasto: "SKULTUNA"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-0687334"
[INFO] 📊 Wynik końcowy: imię="Edin", nazwisko="avdic", ulica="Midvintergatan", numer="74", miasto="SKULTUNA", kod="72631", kraj="Sweden", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0733460643"
[DEBUG] Numer telefonu z Amazona: "0733460643"
[DEBUG] Sformatowany numer telefonu: "+460733460643"
[DEBUG] Używam numeru telefonu ze scrapingu: +460733460643
[INFO] Finalny numer telefonu dla zamówienia: +460733460643
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="74", ulica="Midvintergatan"
[INFO] 🏙️ Znaleziono miasto: "SKULTUNA"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 403-0300147-8275541

### Niezgodności
- **miasto**: Amazon=`Zomergem` vs Sellasist=`Gelijkvloers` ❌
- **ulica**: Amazon=`Molenpark, 47 Gelijkvloers` vs Sellasist=`Molenpark, 47` ❌
- **telefon**: Amazon=`32496063171` vs Sellasist=`320496063171` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (BE): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Sorghum (céréales pelées) bio 500 g. BIO PLANET
```

### Kluczowe logi
```
[INFO] ✅ Adres belgijski (fallback): ulica="Molenpark, 47"
[INFO] 🏙️ Znaleziono miasto: "Gelijkvloers"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "403-0300147"
[INFO] 📊 Wynik końcowy: imię="Anita", nazwisko="Vercauteren", ulica="Molenpark, 47", numer="", miasto="Gelijkvloers", kod="9930", kraj="Belgium", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0496063171"
[DEBUG] Numer telefonu z Amazona: "0496063171"
[DEBUG] Sformatowany numer telefonu: "+320496063171"
[DEBUG] Używam numeru telefonu ze scrapingu: +320496063171
[INFO] Finalny numer telefonu dla zamówienia: +320496063171
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres belgijski (fallback): ulica="Molenpark, 47"
[INFO] 🏙️ Znaleziono miasto: "Gelijkvloers"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 205-4140777-3375551

### Niezgodności
- **miasto**: Amazon=`hereford` vs Sellasist=`garway` ❌
- **ulica**: Amazon=`back of the moon garway` vs Sellasist=`back of the moon` ❌
- **telefon**: Amazon=`441600750350` vs Sellasist=`391600750350` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Seeking Health Histamine Digest - Support for Histamine Sensitivity and Digestive Health - Histamine Block - Anti-Histamine Tablets for Intolerance - Histamine Blocker - 90 Capsules (SKU: 2647)
[WARNING] Nie znaleziono line_id dla produktu: Seeking Health Histamine Digest - Support for Histamine Sensitivity and Digestive Health - Histamine Block - Anti-Histamine Tablets for Intolerance - Histamine Blocker - 90 Capsules
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="back of the moon"
[INFO] 🏙️ Znaleziono miasto: "garway"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "205-4140777"
[INFO] 📊 Wynik końcowy: imię="cara", nazwisko="campbell", ulica="back of the moon", numer="", miasto="garway", kod="HR2 8RQ", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "1600750350"
[DEBUG] Numer telefonu z Amazona: "1600750350"
[DEBUG] Sformatowany numer telefonu: "+391600750350"
[DEBUG] Używam numeru telefonu ze scrapingu: +391600750350
[INFO] Finalny numer telefonu dla zamówienia: +391600750350
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Seeking Health Histamine Digest - Support for Histamine Sensitivity and Digestive Health - Histamine Block - Anti-Histamine Tablets for Intolerance - Histamine Blocker - 90 Capsules (SKU: 2647)
[INFO] 📞 Finalny telefon dla zamówienia: 205-4140777
[DEBUG] Używam numeru telefonu ze scrapingu: +391600750350
```

---

## Zamówienie 304-7808180-0950765

### Niezgodności
- **telefon**: Amazon=`4915561877863` vs Sellasist=`15561877863` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: La Rive In Flames Women Eau De parfum 90 ml
```

### Kluczowe logi
```
[INFO] ✅ Adres niemiecki (tylko ulica): ulica="Rethfelder Ring46"
[INFO] 🏙️ Znaleziono miasto: "Elmshorn"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-7808180"
[INFO] 📊 Wynik końcowy: imię="Bettina", nazwisko="Hoppe", ulica="Rethfelder Ring46", numer="", miasto="Elmshorn", kod="25337", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "015561877863"
[DEBUG] Użyto numeru telefonu bez zmian: 015561877863
[DEBUG] Numer telefonu z Amazona: "015561877863"
[DEBUG] Sformatowany numer telefonu: "015561877863"
[DEBUG] Używam numeru telefonu ze scrapingu: 015561877863
[INFO] Finalny numer telefonu dla zamówienia: 015561877863
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres niemiecki (tylko ulica): ulica="Rethfelder Ring46"
[INFO] 🏙️ Znaleziono miasto: "Elmshorn"
```

---

## Zamówienie 406-2770478-9545169

### Niezgodności
- **telefon**: Amazon=`32474790310` vs Sellasist=`320474790310` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (BE): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: B-6 (100 mg) 250 caps
```

### Kluczowe logi
```
[INFO] ✅ Adres belgijski (fallback): ulica="Bergstraat 65"
[INFO] 🏙️ Znaleziono miasto: "Ramsel"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "406-2770478"
[INFO] 📊 Wynik końcowy: imię="Guido", nazwisko="Roels", ulica="Bergstraat 65", numer="", miasto="Ramsel", kod="2230", kraj="Belgium", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0474790310"
[DEBUG] Numer telefonu z Amazona: "0474790310"
[DEBUG] Sformatowany numer telefonu: "+320474790310"
[DEBUG] Używam numeru telefonu ze scrapingu: +320474790310
[INFO] Finalny numer telefonu dla zamówienia: +320474790310
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres belgijski (fallback): ulica="Bergstraat 65"
[INFO] 🏙️ Znaleziono miasto: "Ramsel"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 171-3929158-3541139

### Niezgodności
- **ulica**: Amazon=`Cementgatan 19` vs Sellasist=`Cementgatan` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Nie znaleziono line_id dla produktu: BIO AMARANTH MJÖL 400 g - BIO PLANET
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="19", ulica="Cementgatan"
[INFO] 🏙️ Znaleziono miasto: "Limhamn"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-3929158"
[INFO] 📊 Wynik końcowy: imię="Lars", nazwisko="Rönnstrand", ulica="Cementgatan", numer="19", miasto="Limhamn", kod="21618", kraj="Sweden", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+46 768870263"
[DEBUG] Zachowano międzynarodowy numer telefonu: +46 768870263
[DEBUG] Numer telefonu z Amazona: "+46 768870263"
[DEBUG] Sformatowany numer telefonu: "+46 768870263"
[DEBUG] Używam numeru telefonu ze scrapingu: +46 768870263
[INFO] Finalny numer telefonu dla zamówienia: +46 768870263
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] 📞 Finalny telefon dla zamówienia: 171-3929158
[DEBUG] Używam numeru telefonu ze scrapingu: +46 768870263
```

---

## Zamówienie 028-6387261-1086737

### Niezgodności
- **ulica**: Amazon=`Böblinger Str. 10b` vs Sellasist=`Böblinger Str.` ❌
- **telefon**: Amazon=`491638805047` vs Sellasist=`0` ❌

### Warnings
```
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 0163
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Soaply Spülmittel, funkelnder Eukalyptusduft, 500 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="10b", ulica="Böblinger Str."
[INFO] 🏙️ Znaleziono miasto: "Stuttgart"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-6387261"
[INFO] 📊 Wynik końcowy: imię="Maja", nazwisko="Merz", ulica="Böblinger Str.", numer="10b", miasto="Stuttgart", kod="70178", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0163"
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 0163
[DEBUG] Numer telefonu z Amazona: "0163"
[DEBUG] Sformatowany numer telefonu: ""
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
[INFO] Finalny numer telefonu dla zamówienia: 000000000
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="10b", ulica="Böblinger Str."
[INFO] 🏙️ Znaleziono miasto: "Stuttgart"
```

---

## Zamówienie 407-3751190-1536338

### Niezgodności
- **ulica**: Amazon=`Via Fratelli Zoia 86` vs Sellasist=`Via Fratelli Zoia` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Confettura di petali di rosa di zucchero 220g Polska Róża (SKU: 22783)
[WARNING] Nie znaleziono line_id dla produktu: Confettura di petali di rosa di zucchero 220g Polska Róża
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (wzorzec): numer="86", ulica="Via Fratelli Zoia"
[INFO] 🏙️ Znaleziono miasto: "Milano"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-3751190"
[INFO] 📊 Wynik końcowy: imię="Nadiya", nazwisko="Dyakun presso Gatti citofono Gatti", ulica="Via Fratelli Zoia", numer="86", miasto="Milano", kod="20153", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+393884092337"
[DEBUG] Zachowano międzynarodowy numer telefonu: +393884092337
[DEBUG] Numer telefonu z Amazona: "+393884092337"
[DEBUG] Sformatowany numer telefonu: "+393884092337"
[DEBUG] Używam numeru telefonu ze scrapingu: +393884092337
[INFO] Finalny numer telefonu dla zamówienia: +393884092337
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (wzorzec): numer="86", ulica="Via Fratelli Zoia"
[INFO] 🏙️ Znaleziono miasto: "Milano"
```

---

## Zamówienie 204-7234577-1291569

### Niezgodności
- **telefon**: Amazon=`447507343439` vs Sellasist=`4407507343439` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Nie znaleziono line_id dla produktu: Organic Golden Milk in Powder DARY NATURY Mix 100 g turmeric ginger cinnamon nutmeg warming mix
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres brytyjski (suffix): ulica="3 HELIGAN PLACE LANGHOLM DRIVE"
[INFO] 🏙️ Znaleziono miasto: "CANNOCK"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "204-7234577"
[INFO] 📊 Wynik końcowy: imię="Karen", nazwisko="Fereday", ulica="3 HELIGAN PLACE LANGHOLM DRIVE", numer="", miasto="CANNOCK", kod="WS12 2FT", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07507343439"
[DEBUG] Numer telefonu z Amazona: "07507343439"
[DEBUG] Sformatowany numer telefonu: "+4407507343439"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407507343439
[INFO] Finalny numer telefonu dla zamówienia: +4407507343439
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] 📞 Finalny telefon dla zamówienia: 204-7234577
[DEBUG] Używam numeru telefonu ze scrapingu: +4407507343439
[DEBUG] Używam numeru telefonu ze scrapingu: +4407507343439
```

---

## Zamówienie 403-8247008-7106730

### Niezgodności
- **ulica**: Amazon=`Strèda de la Regola generèla 11` vs Sellasist=`Strèda de la Regola generèla` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: FIOCCHI DI AMARANTO BIO 300 g - BIOGOL
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (wzorzec): numer="11", ulica="Strèda de la Regola generèla"
[INFO] 🏙️ Znaleziono miasto: "Mazzin"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "403-8247008"
[INFO] 📊 Wynik końcowy: imię="RASOM", nazwisko="SABRINA", ulica="Strèda de la Regola generèla", numer="11", miasto="Mazzin", kod="38030", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "00393382991563"
[DEBUG] Numer telefonu z Amazona: "00393382991563"
[DEBUG] Sformatowany numer telefonu: "+393382991563"
[DEBUG] Używam numeru telefonu ze scrapingu: +393382991563
[INFO] Finalny numer telefonu dla zamówienia: +393382991563
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (wzorzec): numer="11", ulica="Strèda de la Regola generèla"
[INFO] 🏙️ Znaleziono miasto: "Mazzin"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 171-4369121-2244311

### Niezgodności
- **miasto**: Amazon=`reinosa` vs Sellasist=`cantabria` ❌
- **ulica**: Amazon=`perfumeria carrera plaza españa nº 3` vs Sellasist=`perfumeria carrera plaza españa nº` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Jugo de remolacha 100% 1000ml EkaMedica
```

### Kluczowe logi
```
[INFO] ✅ Adres hiszpański (wzorzec): numer="3", ulica="perfumeria carrera plaza españa nº"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "cantabria"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-4369121"
[INFO] 📊 Wynik końcowy: imię="miguel", nazwisko="carrera cuesta", ulica="perfumeria carrera plaza españa nº", numer="3", miasto="cantabria", kod="39200", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "942750690"
[DEBUG] Numer telefonu z Amazona: "942750690"
[DEBUG] Sformatowany numer telefonu: "+34942750690"
[DEBUG] Używam numeru telefonu ze scrapingu: +34942750690
[INFO] Finalny numer telefonu dla zamówienia: +34942750690
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres hiszpański (wzorzec): numer="3", ulica="perfumeria carrera plaza españa nº"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "cantabria"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 405-1469550-9205910

### Niezgodności
- **ulica**: Amazon=`221 Chemin de Bellevarde` vs Sellasist=`Chemin de Bellevarde` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: ALGUES DE MER SÉCHÉES - WAKAME BIO 100 g (sac en feuille) - PORTO MUINOS
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="221", ulica="Chemin de Bellevarde"
[INFO] 🏙️ Znaleziono miasto: "CURIENNE"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "405-1469550"
[INFO] 📊 Wynik końcowy: imię="Céline", nazwisko="CAPITAN", ulica="Chemin de Bellevarde", numer="221", miasto="CURIENNE", kod="73190", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+33615964338"
[DEBUG] Zachowano międzynarodowy numer telefonu: +33615964338
[DEBUG] Numer telefonu z Amazona: "+33615964338"
[DEBUG] Sformatowany numer telefonu: "+33615964338"
[DEBUG] Używam numeru telefonu ze scrapingu: +33615964338
[INFO] Finalny numer telefonu dla zamówienia: +33615964338
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="221", ulica="Chemin de Bellevarde"
[INFO] 🏙️ Znaleziono miasto: "CURIENNE"
```

---

## Zamówienie 402-9278621-1321154

### Niezgodności
- **ulica**: Amazon=`4 impasse de l'hppodrome chez GRAINE ADIL` vs Sellasist=`impasse de l&#039;hppodrome chez GRAINE ADIL` ❌
- **telefon**: Amazon=`33610521488` vs Sellasist=`330610521488` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Applied Nutrition Carb X Glucides cycliques hautement ramifiés et post-entraînement, carburant pour l'entraînement et la récupération, végétalien, sans sucre, 1,2 kg, 48 portions (sans arôme) (SKU: 32908)
[WARNING] Nie znaleziono line_id dla produktu: Applied Nutrition Carb X Glucides cycliques hautement ramifiés et post-entraînement, carburant pour l'entraînement et la récupération, végétalien, sans sucre, 1,2 kg, 48 portions (sans arôme)
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="4", ulica="impasse de l'hppodrome chez GRAINE ADIL"
[INFO] 🏙️ Znaleziono miasto: "St priest"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "402-9278621"
[INFO] 📊 Wynik końcowy: imię="ANOUR", nazwisko="ESSADATE LAARAF", ulica="impasse de l'hppodrome chez GRAINE ADIL", numer="4", miasto="St priest", kod="69800", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0610521488"
[DEBUG] Numer telefonu z Amazona: "0610521488"
[DEBUG] Sformatowany numer telefonu: "+330610521488"
[DEBUG] Używam numeru telefonu ze scrapingu: +330610521488
[INFO] Finalny numer telefonu dla zamówienia: +330610521488
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="4", ulica="impasse de l'hppodrome chez GRAINE ADIL"
[INFO] 🏙️ Znaleziono miasto: "St priest"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 304-4535544-4183524

### Niezgodności
- **ulica**: Amazon=`Koblenzer Straße 23` vs Sellasist=`Koblenzer Straße` ❌
- **telefon**: Amazon=`491631388806` vs Sellasist=`1631388806` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: BIOMAGIC HAIR COLOR - 4/00 BROWN
[WARNING] Nie znaleziono line_id dla produktu: BIOMAGIC Hair Color - 6/00 DARK BLONDE
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="23", ulica="Koblenzer Straße"
[INFO] 🏙️ Znaleziono miasto: "Saarbrücken"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-4535544"
[INFO] 📊 Wynik końcowy: imię="Kawa", nazwisko="Fattah", ulica="Koblenzer Straße", numer="23", miasto="Saarbrücken", kod="66115", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "01631388806"
[DEBUG] Użyto numeru telefonu bez zmian: 01631388806
[DEBUG] Numer telefonu z Amazona: "01631388806"
[DEBUG] Sformatowany numer telefonu: "01631388806"
[DEBUG] Używam numeru telefonu ze scrapingu: 01631388806
[INFO] Finalny numer telefonu dla zamówienia: 01631388806
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="23", ulica="Koblenzer Straße"
[INFO] 🏙️ Znaleziono miasto: "Saarbrücken"
```

---

## Zamówienie 203-9435612-3706705

### Niezgodności
- **telefon**: Amazon=`441227457532` vs Sellasist=`1227457532` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Seeking Health Histamine Digest - Support for Histamine Sensitivity and Digestive Health - Histamine Block - Anti-Histamine Tablets for Intolerance - Histamine Blocker - 90 Capsules (SKU: 2647)
[WARNING] Nie znaleziono line_id dla produktu: Seeking Health Histamine Digest - Support for Histamine Sensitivity and Digestive Health - Histamine Block - Anti-Histamine Tablets for Intolerance - Histamine Blocker - 90 Capsules
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres brytyjski (suffix): ulica="72 hillside avenue"
[INFO] 🏙️ Znaleziono miasto: "canterbury"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "203-9435612"
[INFO] 📊 Wynik końcowy: imię="shaun", nazwisko="cooper", ulica="72 hillside avenue", numer="", miasto="canterbury", kod="CT2 8HA", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "01227457532"
[DEBUG] Użyto numeru telefonu bez zmian: 01227457532
[DEBUG] Numer telefonu z Amazona: "01227457532"
[DEBUG] Sformatowany numer telefonu: "01227457532"
[DEBUG] Używam numeru telefonu ze scrapingu: 01227457532
[INFO] Finalny numer telefonu dla zamówienia: 01227457532
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Seeking Health Histamine Digest - Support for Histamine Sensitivity and Digestive Health - Histamine Block - Anti-Histamine Tablets for Intolerance - Histamine Blocker - 90 Capsules (SKU: 2647)
[INFO] 📞 Finalny telefon dla zamówienia: 203-9435612
```

---

## Zamówienie 408-8998212-3550739

### Niezgodności
- **miasto**: Amazon=`quartu sant'elena` vs Sellasist=`secondo piano` ❌
- **ulica**: Amazon=`via egadi 22 secondo piano` vs Sellasist=`via egadi` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: SEEKING HEALTH Probiota Histaminx 10 Billion CFU - Integratore Probiotico A Basso Contenuto di Istamina per L'intestino - Comfort Digestivo per L'intolleranza All'istamina - Vegano - 60 Capsule (SKU: 2498)
[WARNING] Nie znaleziono line_id dla produktu: SEEKING HEALTH Probiota Histaminx 10 Billion CFU - Integratore Probiotico A Basso Contenuto di Istamina per L'intestino - Comfort Digestivo per L'intolleranza All'istamina - Vegano - 60 Capsule
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (wzorzec): numer="22", ulica="via egadi"
[INFO] 🏙️ Znaleziono miasto: "secondo piano"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "408-8998212"
[INFO] 📊 Wynik końcowy: imię="patrizia", nazwisko="manunza", ulica="via egadi", numer="22", miasto="secondo piano", kod="09045", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "3478806802"
[DEBUG] Numer telefonu z Amazona: "3478806802"
[DEBUG] Sformatowany numer telefonu: "+393478806802"
[DEBUG] Używam numeru telefonu ze scrapingu: +393478806802
[INFO] Finalny numer telefonu dla zamówienia: +393478806802
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (wzorzec): numer="22", ulica="via egadi"
[INFO] 🏙️ Znaleziono miasto: "secondo piano"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 407-5086626-1223546

### Niezgodności
- **ulica**: Amazon=`Avenue du Val d'Or 134` vs Sellasist=`Avenue du Val d&#039;Or 134` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (BE): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Sirop de betterave à la mélasse de betterave BIO 450 g - HORIZON
```

### Kluczowe logi
```
[INFO] ✅ Adres belgijski (wzorzec): ulica="Avenue du Val d'Or 134"
[INFO] 🏙️ Znaleziono miasto: "Brüssel"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-5086626"
[INFO] 📊 Wynik końcowy: imię="Berit", nazwisko="Koop", ulica="Avenue du Val d'Or 134", numer="", miasto="Brüssel", kod="1200", kraj="Belgium", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "00491719155899"
[DEBUG] Numer telefonu z Amazona: "00491719155899"
[DEBUG] Sformatowany numer telefonu: "+491719155899"
[DEBUG] Używam numeru telefonu ze scrapingu: +491719155899
[INFO] Finalny numer telefonu dla zamówienia: +491719155899
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres belgijski (wzorzec): ulica="Avenue du Val d'Or 134"
[INFO] 🏙️ Znaleziono miasto: "Brüssel"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 404-0192031-7323547

### Niezgodności
- **miasto**: Amazon=`95140 - GARGES LES GONESSE` vs Sellasist=`- GARGES LES GONESSE` ❌
- **ulica**: Amazon=`12 RUE JEAN MOULIN` vs Sellasist=`RUE JEAN MOULIN` ❌
- **telefon**: Amazon=`33661231873` vs Sellasist=`330661231873` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Elite Fly Tex Bidon Cyclisme 550ml Noir - Gourde Vélo Ultraléger Sans BPA Texture TEX - Pour Route VTT Gravel
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="12", ulica="RUE JEAN MOULIN"
[INFO] 🏙️ Znaleziono kod+miasto: kod="95140", miasto="- GARGES LES GONESSE"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "404-0192031"
[INFO] 📊 Wynik końcowy: imię="VILELA", nazwisko="TERESA", ulica="RUE JEAN MOULIN", numer="12", miasto="- GARGES LES GONESSE", kod="95140", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0661231873"
[DEBUG] Numer telefonu z Amazona: "0661231873"
[DEBUG] Sformatowany numer telefonu: "+330661231873"
[DEBUG] Używam numeru telefonu ze scrapingu: +330661231873
[INFO] Finalny numer telefonu dla zamówienia: +330661231873
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="12", ulica="RUE JEAN MOULIN"
[INFO] 🏙️ Znaleziono kod+miasto: kod="95140", miasto="- GARGES LES GONESSE"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 171-1493112-0216308

### Niezgodności
- **telefon**: Amazon=`31627920523` vs Sellasist=`310627920523` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Vitamine C-1000, Zinc & D-3 100v-caps (SKU: 33244)
[WARNING] Nie znaleziono line_id dla produktu: Vitamine C-1000, Zinc & D-3 100v-caps
```

### Kluczowe logi
```
[INFO] ✅ Adres holenderski (standard): ulica="Govert Flinckstraat 263C"
[INFO] 🏙️ Znaleziono miasto: "Amsterdam"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-1493112"
[INFO] 📊 Wynik końcowy: imię="Paola", nazwisko="Rodriguez", ulica="Govert Flinckstraat 263C", numer="", miasto="Amsterdam", kod="", kraj="Netherlands", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0627920523"
[DEBUG] Numer telefonu z Amazona: "0627920523"
[DEBUG] Sformatowany numer telefonu: "+310627920523"
[DEBUG] Używam numeru telefonu ze scrapingu: +310627920523
[INFO] Finalny numer telefonu dla zamówienia: +310627920523
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres holenderski (standard): ulica="Govert Flinckstraat 263C"
[INFO] 🏙️ Znaleziono miasto: "Amsterdam"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 203-5150879-6345920

### Niezgodności
- **miasto**: Amazon=`NORTHWICH` vs Sellasist=`Tarporley Road, Oakmere` ❌
- **ulica**: Amazon=`Tarporley Road, Oakmere` vs Sellasist=`Abbots Moss Hall` ❌
- **telefon**: Amazon=`447930418339` vs Sellasist=`4407930418339` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Nie znaleziono line_id dla produktu: Colostrum 40 Immuno Forte IG Type G standardized 400mg 120 Capsules MyVita Silver Pure
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="Abbots Moss Hall"
[INFO] 🏙️ Znaleziono miasto: "Tarporley Road, Oakmere"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "203-5150879"
[INFO] 📊 Wynik końcowy: imię="Mr", nazwisko="Charles Holroyd", ulica="Abbots Moss Hall", numer="", miasto="Tarporley Road, Oakmere", kod="CW8 2ES", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07930418339"
[DEBUG] Numer telefonu z Amazona: "07930418339"
[DEBUG] Sformatowany numer telefonu: "+4407930418339"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407930418339
[INFO] Finalny numer telefonu dla zamówienia: +4407930418339
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] 📞 Finalny telefon dla zamówienia: 203-5150879
[DEBUG] Używam numeru telefonu ze scrapingu: +4407930418339
[DEBUG] Używam numeru telefonu ze scrapingu: +4407930418339
```

---

## Zamówienie 304-4615570-2004366

### Niezgodności
- **miasto**: Amazon=`Düsseldorf` vs Sellasist=`Oststrasse 124` ❌
- **ulica**: Amazon=`Oststrasse 124` vs Sellasist=`Jasmin Zerr` ❌
- **telefon**: Amazon=`4915112001620` vs Sellasist=`0` ❌

### Warnings
```
[WARNING] ⚠️ Linia "Jasmin Zerr" nie wygląda na niemiecką ulicę - pomijam
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 0151
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Linia "Jasmin Zerr" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Zinc plus Selenium 15 mg (3-Monate Dosis, 90 capsules) - Dr. Mercola
```

### Kluczowe logi
```
[WARNING] ⚠️ Linia "Jasmin Zerr" nie wygląda na niemiecką ulicę - pomijam
[INFO] ✅ Adres nieprzetworzony: ulica="Jasmin Zerr"
[INFO] 🏙️ Znaleziono miasto: "Oststrasse 124"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-4615570"
[INFO] 📊 Wynik końcowy: imię="Hotel", nazwisko="Lindenhof GmbH", ulica="Jasmin Zerr", numer="", miasto="Oststrasse 124", kod="40210", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0151"
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 0151
[DEBUG] Numer telefonu z Amazona: "0151"
[DEBUG] Sformatowany numer telefonu: ""
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
[INFO] Finalny numer telefonu dla zamówienia: 000000000
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Linia "Jasmin Zerr" nie wygląda na niemiecką ulicę - pomijam
```

---

## Zamówienie 405-5212883-4747555

### Niezgodności
- **miasto**: Amazon=`San sebastian` vs Sellasist=`Guipuzcoa` ❌
- **ulica**: Amazon=`Portal 14, tercero B` vs Sellasist=`Calle Doctor Madinabeitia` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Palitos salados sin gluten BIO 45 g - BIOPONT
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="Calle Doctor Madinabeitia"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Guipuzcoa"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "405-5212883"
[INFO] 📊 Wynik końcowy: imię="Rocío", nazwisko="GALIANA Naranjo", ulica="Calle Doctor Madinabeitia", numer="", miasto="Guipuzcoa", kod="20009", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "636987424"
[DEBUG] Numer telefonu z Amazona: "636987424"
[DEBUG] Sformatowany numer telefonu: "+34636987424"
[DEBUG] Używam numeru telefonu ze scrapingu: +34636987424
[INFO] Finalny numer telefonu dla zamówienia: +34636987424
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="Calle Doctor Madinabeitia"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Guipuzcoa"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 406-0549787-1762714

### Niezgodności
- **ulica**: Amazon=`2305 route du Peyrefit` vs Sellasist=`route du Peyrefit` ❌
- **telefon**: Amazon=`33633739111` vs Sellasist=`330633739111` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Filtre À Thé Papier Bio Non Blanchi Compostable 100 Pièces | Sachet De Thé À Remplir Bio Pour Thé Naturel - Sachet Thé Jetable Bio - Sachets Thé Vide Bio
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="2305", ulica="route du Peyrefit"
[INFO] 🏙️ Znaleziono miasto: "Esclauzels"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "406-0549787"
[INFO] 📊 Wynik końcowy: imię="Stéphane", nazwisko="Marcovich", ulica="route du Peyrefit", numer="2305", miasto="Esclauzels", kod="46090", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0633739111"
[DEBUG] Numer telefonu z Amazona: "0633739111"
[DEBUG] Sformatowany numer telefonu: "+330633739111"
[DEBUG] Używam numeru telefonu ze scrapingu: +330633739111
[INFO] Finalny numer telefonu dla zamówienia: +330633739111
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="2305", ulica="route du Peyrefit"
[INFO] 🏙️ Znaleziono miasto: "Esclauzels"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 403-9238118-2926717

### Niezgodności
- **miasto**: Amazon=`Molenbeek-Saint-Jean` vs Sellasist=`Appartement` ❌
- **ulica**: Amazon=`Appartement` vs Sellasist=`Rue De Bonne 99, O2` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (BE): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (BE): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Sorghum (céréales pelées) bio 500 g. BIO PLANET (SKU: 35513)
[WARNING] Nie znaleziono line_id dla produktu: Sorghum (céréales pelées) bio 500 g. BIO PLANET
```

### Kluczowe logi
```
[INFO] ✅ Adres belgijski (wzorzec): ulica="Rue De Bonne 99, O2"
[INFO] 🏙️ Znaleziono miasto: "Appartement"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "403-9238118"
[INFO] 📊 Wynik końcowy: imię="Engels", nazwisko="Marcel", ulica="Rue De Bonne 99, O2", numer="", miasto="Appartement", kod="1080", kraj="Belgium", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+32475999281"
[DEBUG] Zachowano międzynarodowy numer telefonu: +32475999281
[DEBUG] Numer telefonu z Amazona: "+32475999281"
[DEBUG] Sformatowany numer telefonu: "+32475999281"
[DEBUG] Używam numeru telefonu ze scrapingu: +32475999281
[INFO] Finalny numer telefonu dla zamówienia: +32475999281
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres belgijski (wzorzec): ulica="Rue De Bonne 99, O2"
[INFO] 🏙️ Znaleziono miasto: "Appartement"
```

---

## Zamówienie 405-3524618-0503538

### Niezgodności
- **ulica**: Amazon=`107 10ème Avenue` vs Sellasist=`10ème Avenue` ❌
- **telefon**: Amazon=`33699161896` vs Sellasist=`330699161896` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: FIBRE DE POMME BIO 150 g - BIO PLANET
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="107", ulica="10ème Avenue"
[INFO] 🏙️ Znaleziono miasto: "Lamorlaye"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "405-3524618"
[INFO] 📊 Wynik końcowy: imię="Akhmedova", nazwisko="Zulia", ulica="10ème Avenue", numer="107", miasto="Lamorlaye", kod="60260", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0699161896"
[DEBUG] Numer telefonu z Amazona: "0699161896"
[DEBUG] Sformatowany numer telefonu: "+330699161896"
[DEBUG] Używam numeru telefonu ze scrapingu: +330699161896
[INFO] Finalny numer telefonu dla zamówienia: +330699161896
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="107", ulica="10ème Avenue"
[INFO] 🏙️ Znaleziono miasto: "Lamorlaye"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 302-7595310-4029167

### Niezgodności
- **ulica**: Amazon=`Friedhofstraße 20a` vs Sellasist=`Friedhofstraße` ❌
- **telefon**: Amazon=`4367689934446` vs Sellasist=`67689934446` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: ROTES BORSCHT EINGELEGTES GLUTENFREIES BIOKONZENTRAT 320 ML - KOWALEWSKI (SKU: 22106)
[WARNING] Nie znaleziono line_id dla produktu: ROTES BORSCHT EINGELEGTES GLUTENFREIES BIOKONZENTRAT 320 ML - KOWALEWSKI
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="20a", ulica="Friedhofstraße"
[INFO] 🏙️ Znaleziono miasto: "Eichgraben"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "302-7595310"
[INFO] 📊 Wynik końcowy: imię="Patrick", nazwisko="Hornaus", ulica="Friedhofstraße", numer="20a", miasto="Eichgraben", kod="3032", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "067689934446"
[DEBUG] Użyto numeru telefonu bez zmian: 067689934446
[DEBUG] Numer telefonu z Amazona: "067689934446"
[DEBUG] Sformatowany numer telefonu: "067689934446"
[DEBUG] Używam numeru telefonu ze scrapingu: 067689934446
[INFO] Finalny numer telefonu dla zamówienia: 067689934446
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="20a", ulica="Friedhofstraße"
[INFO] 🏙️ Znaleziono miasto: "Eichgraben"
```

---

## Zamówienie 303-6677449-4555550

### Niezgodności
- **ulica**: Amazon=`Ritterweg 560` vs Sellasist=`Ritterweg` ❌
- **telefon**: Amazon=`4366499873775` vs Sellasist=`66499873775` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Brennnesselsamenöl BIO 250 ml - DARY NATURY
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="560", ulica="Ritterweg"
[INFO] 🏙️ Znaleziono miasto: "Großgmain"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "303-6677449"
[INFO] 📊 Wynik końcowy: imię="Nathaniel", nazwisko="Doldersum", ulica="Ritterweg", numer="560", miasto="Großgmain", kod="5084", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "066499873775"
[DEBUG] Użyto numeru telefonu bez zmian: 066499873775
[DEBUG] Numer telefonu z Amazona: "066499873775"
[DEBUG] Sformatowany numer telefonu: "066499873775"
[DEBUG] Używam numeru telefonu ze scrapingu: 066499873775
[INFO] Finalny numer telefonu dla zamówienia: 066499873775
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="560", ulica="Ritterweg"
[INFO] 🏙️ Znaleziono miasto: "Großgmain"
```

---

## Zamówienie 303-9331641-5533159

### Niezgodności
- **ulica**: Amazon=`Mehrnbach 164` vs Sellasist=`Mehrnbach` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Motorex ChainlubeDry Conditions Flasche, 100 ml, mehrfarbig (mehrfarbig), Einheitsgröße
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="164", ulica="Mehrnbach"
[INFO] 🏙️ Znaleziono miasto: "Mehrnbach"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "303-9331641"
[INFO] 📊 Wynik końcowy: imię="Daniel", nazwisko="Slupetzky", ulica="Mehrnbach", numer="164", miasto="Mehrnbach", kod="4941", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+43676814281565"
[DEBUG] Zachowano międzynarodowy numer telefonu: +43676814281565
[DEBUG] Numer telefonu z Amazona: "+43676814281565"
[DEBUG] Sformatowany numer telefonu: "+43676814281565"
[DEBUG] Używam numeru telefonu ze scrapingu: +43676814281565
[INFO] Finalny numer telefonu dla zamówienia: +43676814281565
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="164", ulica="Mehrnbach"
[INFO] 🏙️ Znaleziono miasto: "Mehrnbach"
```

---

## Zamówienie 171-9903278-1817904

### Niezgodności
- **ulica**: Amazon=`119 route du Briquetier` vs Sellasist=`route du Briquetier` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Elite Fly Tex Bidon Cyclisme 550ml Transparent Rose Fluo - Gourde Vélo Ultraléger Sans BPA Texture TEX - Pour Route VTT Gravel (SKU: 26154)
[WARNING] Nie znaleziono line_id dla produktu: Elite Fly Tex Bidon Cyclisme 550ml Transparent Rose Fluo - Gourde Vélo Ultraléger Sans BPA Texture TEX - Pour Route VTT Gravel
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="119", ulica="route du Briquetier"
[INFO] 🏙️ Znaleziono miasto: "Boissieres"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-9903278"
[INFO] 📊 Wynik końcowy: imię="leslie", nazwisko="Tiffay", ulica="route du Briquetier", numer="119", miasto="Boissieres", kod="46150", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+33750695468"
[DEBUG] Zachowano międzynarodowy numer telefonu: +33750695468
[DEBUG] Numer telefonu z Amazona: "+33750695468"
[DEBUG] Sformatowany numer telefonu: "+33750695468"
[DEBUG] Używam numeru telefonu ze scrapingu: +33750695468
[INFO] Finalny numer telefonu dla zamówienia: +33750695468
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="119", ulica="route du Briquetier"
[INFO] 🏙️ Znaleziono miasto: "Boissieres"
```

---

## Zamówienie 305-4038784-3445154

### Niezgodności
- **ulica**: Amazon=`Steinbecker Str 51` vs Sellasist=`Steinbecker Str` ❌
- **telefon**: Amazon=`491793947768` vs Sellasist=`1793947768` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: EkaMedica 100% natürlicher Himbeersaft, 500 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="51", ulica="Steinbecker Str"
[INFO] 🏙️ Znaleziono miasto: "Bispingen"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "305-4038784"
[INFO] 📊 Wynik końcowy: imię="Rahel", nazwisko="Hansen", ulica="Steinbecker Str", numer="51", miasto="Bispingen", kod="29646", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "01793947768"
[DEBUG] Użyto numeru telefonu bez zmian: 01793947768
[DEBUG] Numer telefonu z Amazona: "01793947768"
[DEBUG] Sformatowany numer telefonu: "01793947768"
[DEBUG] Używam numeru telefonu ze scrapingu: 01793947768
[INFO] Finalny numer telefonu dla zamówienia: 01793947768
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="51", ulica="Steinbecker Str"
[INFO] 🏙️ Znaleziono miasto: "Bispingen"
```

---

## Zamówienie 028-8016498-7742730

### Niezgodności
- **ulica**: Amazon=`Landstraßer Gürtel 19 Top 17` vs Sellasist=`Landstraßer Gürtel 19 Top` ❌
- **telefon**: Amazon=`436766768133` vs Sellasist=`6766768133` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Dr. Mercola | Liposomal Vitamin C | 1.000 mg | 60 vegane Kapseln
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="17", ulica="Landstraßer Gürtel 19 Top"
[INFO] 🏙️ Znaleziono miasto: "Wien"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-8016498"
[INFO] 📊 Wynik końcowy: imię="Tim", nazwisko="Loitzenbauer", ulica="Landstraßer Gürtel 19 Top", numer="17", miasto="Wien", kod="1030", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "06766768133"
[DEBUG] Użyto numeru telefonu bez zmian: 06766768133
[DEBUG] Numer telefonu z Amazona: "06766768133"
[DEBUG] Sformatowany numer telefonu: "06766768133"
[DEBUG] Używam numeru telefonu ze scrapingu: 06766768133
[INFO] Finalny numer telefonu dla zamówienia: 06766768133
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="17", ulica="Landstraßer Gürtel 19 Top"
[INFO] 🏙️ Znaleziono miasto: "Wien"
```

---

## Zamówienie 028-8934604-3971540

### Niezgodności
- **ulica**: Amazon=`Andreasstraße 20` vs Sellasist=`Andreasstraße` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: NOW Fresh Green Walnut, 60 ml (SKU: 13843)
[WARNING] Nie znaleziono line_id dla produktu: NOW Fresh Green Walnut, 60 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="20", ulica="Andreasstraße"
[INFO] 🏙️ Znaleziono miasto: "Ennigerloh"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-8934604"
[INFO] 📊 Wynik końcowy: imię="Tafunea", nazwisko="Cornelia", ulica="Andreasstraße", numer="20", miasto="Ennigerloh", kod="59320", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+491737596765"
[DEBUG] Zachowano międzynarodowy numer telefonu: +491737596765
[DEBUG] Numer telefonu z Amazona: "+491737596765"
[DEBUG] Sformatowany numer telefonu: "+491737596765"
[DEBUG] Używam numeru telefonu ze scrapingu: +491737596765
[INFO] Finalny numer telefonu dla zamówienia: +491737596765
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="20", ulica="Andreasstraße"
[INFO] 🏙️ Znaleziono miasto: "Ennigerloh"
```

---

## Zamówienie 405-3437276-4090752

### Niezgodności
- **ulica**: Amazon=`via del molino 48` vs Sellasist=`via del molino` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: BioTechUSA 100% Creatine Monohydrate | Creatina di grado farmaceutico | Micronizzata | Vegan | Senza glutine, confezione classica a contenitore in plastica, 500 g, Non aromatizzato (SKU: 1542)
[WARNING] Nie znaleziono line_id dla produktu: BioTechUSA 100% Creatine Monohydrate | Creatina di grado farmaceutico | Micronizzata | Vegan | Senza glutine, confezione classica a contenitore in plastica, 500 g, Non aromatizzato
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (wzorzec): numer="48", ulica="via del molino"
[INFO] 🏙️ Znaleziono miasto: "BORGHETTO LODIGIANO"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "405-3437276"
[INFO] 📊 Wynik końcowy: imię="Gubca", nazwisko="Petru", ulica="via del molino", numer="48", miasto="BORGHETTO LODIGIANO", kod="26812", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "3888134953"
[DEBUG] Numer telefonu z Amazona: "3888134953"
[DEBUG] Sformatowany numer telefonu: "+393888134953"
[DEBUG] Używam numeru telefonu ze scrapingu: +393888134953
[INFO] Finalny numer telefonu dla zamówienia: +393888134953
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (wzorzec): numer="48", ulica="via del molino"
[INFO] 🏙️ Znaleziono miasto: "BORGHETTO LODIGIANO"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 171-1633502-1099544

### Niezgodności
- **telefon**: Amazon=`31636343451` vs Sellasist=`310636343451` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Nie znaleziono line_id dla produktu: Vloeibaarheid voor het wassen van fruit en groenten Eco 500 ml - Almawin
```

### Kluczowe logi
```
[INFO] ✅ Adres holenderski (standard): ulica="Schuitvaartgracht 75"
[INFO] 🏙️ Znaleziono miasto: "VLISSINGEN"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-1633502"
[INFO] 📊 Wynik końcowy: imię="Mj", nazwisko="Poeketie", ulica="Schuitvaartgracht 75", numer="", miasto="VLISSINGEN", kod="", kraj="Netherlands", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0636343451"
[DEBUG] Numer telefonu z Amazona: "0636343451"
[DEBUG] Sformatowany numer telefonu: "+310636343451"
[DEBUG] Używam numeru telefonu ze scrapingu: +310636343451
[INFO] Finalny numer telefonu dla zamówienia: +310636343451
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] 📞 Finalny telefon dla zamówienia: 171-1633502
[DEBUG] Używam numeru telefonu ze scrapingu: +310636343451
[DEBUG] Używam numeru telefonu ze scrapingu: +310636343451
```

---

## Zamówienie 204-1613413-6533150

### Niezgodności
- **telefon**: Amazon=`447724105698` vs Sellasist=`4407724105698` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Nie znaleziono line_id dla produktu: Metabolic Mass, Almond - 6000g
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="21 HEULFRYN"
[INFO] 🏙️ Znaleziono miasto: "DEGANWY"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "204-1613413"
[INFO] 📊 Wynik końcowy: imię="James", nazwisko="Aaron edwards", ulica="21 HEULFRYN", numer="", miasto="DEGANWY", kod="LL31 9YA", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07724105698"
[DEBUG] Numer telefonu z Amazona: "07724105698"
[DEBUG] Sformatowany numer telefonu: "+4407724105698"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407724105698
[INFO] Finalny numer telefonu dla zamówienia: +4407724105698
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] 📞 Finalny telefon dla zamówienia: 204-1613413
[DEBUG] Używam numeru telefonu ze scrapingu: +4407724105698
[DEBUG] Używam numeru telefonu ze scrapingu: +4407724105698
```

---

## Zamówienie 408-6922039-8156345

### Niezgodności
- **ulica**: Amazon=`42 rue gustave vatonne` vs Sellasist=`rue gustave vatonne` ❌
- **telefon**: Amazon=`33164465892` vs Sellasist=`330164465892` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Filtre À Thé Papier Bio Non Blanchi Compostable 100 Pièces | Sachet De Thé À Remplir Bio Pour Thé Naturel - Sachet Thé Jetable Bio - Sachets Thé Vide Bio
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="42", ulica="rue gustave vatonne"
[INFO] 🏙️ Znaleziono miasto: "gif sur yvette"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "408-6922039"
[INFO] 📊 Wynik końcowy: imię="PELERIN", nazwisko="Philippe", ulica="rue gustave vatonne", numer="42", miasto="gif sur yvette", kod="91190", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0164465892"
[DEBUG] Numer telefonu z Amazona: "0164465892"
[DEBUG] Sformatowany numer telefonu: "+330164465892"
[DEBUG] Używam numeru telefonu ze scrapingu: +330164465892
[INFO] Finalny numer telefonu dla zamówienia: +330164465892
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="42", ulica="rue gustave vatonne"
[INFO] 🏙️ Znaleziono miasto: "gif sur yvette"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 304-8022075-0549141

### Niezgodności
- **ulica**: Amazon=`Kurt-Schumacher-Allee 40` vs Sellasist=`Kurt-Schumacher-Allee` ❌
- **telefon**: Amazon=`49284134206` vs Sellasist=`490284134206` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: VOLLKORNROGGENMEHL TYP 2000 BIO 1 kg - BIO RAJ
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="40", ulica="Kurt-Schumacher-Allee"
[INFO] 🏙️ Znaleziono miasto: "Moers"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-8022075"
[INFO] 📊 Wynik końcowy: imię="eva", nazwisko="zwiefka", ulica="Kurt-Schumacher-Allee", numer="40", miasto="Moers", kod="47445", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0284134206"
[DEBUG] Numer telefonu z Amazona: "0284134206"
[DEBUG] Sformatowany numer telefonu: "+490284134206"
[DEBUG] Używam numeru telefonu ze scrapingu: +490284134206
[INFO] Finalny numer telefonu dla zamówienia: +490284134206
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="40", ulica="Kurt-Schumacher-Allee"
[INFO] 🏙️ Znaleziono miasto: "Moers"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 171-7405264-0637158

### Niezgodności
- **ulica**: Amazon=`Calle castelló 55 2 izquierda` vs Sellasist=`Calle castelló` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: ProBiota HistaminX - 60 acid-resistant vcaps (SKU: 2498)
[WARNING] Nie znaleziono line_id dla produktu: ProBiota HistaminX - 60 acid-resistant vcaps
```

### Kluczowe logi
```
[INFO] ✅ Adres hiszpański (wzorzec): numer="55", ulica="Calle castelló"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Madrid"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-7405264"
[INFO] 📊 Wynik końcowy: imię="Teresa", nazwisko="Rodríguez-Losada", ulica="Calle castelló", numer="55", miasto="Madrid", kod="28001", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "609936719"
[DEBUG] Numer telefonu z Amazona: "609936719"
[DEBUG] Sformatowany numer telefonu: "+34609936719"
[DEBUG] Używam numeru telefonu ze scrapingu: +34609936719
[INFO] Finalny numer telefonu dla zamówienia: +34609936719
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres hiszpański (wzorzec): numer="55", ulica="Calle castelló"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Madrid"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 026-9546416-1003545

### Niezgodności
- **telefon**: Amazon=`447541917986` vs Sellasist=`4407541917986` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: VITAL NATURAL FIBRE DETOX BLONNIK WITALNY Plantago Psyllium Husk/Plantago Ovata 1KG 1000G (SKU: 16769)
[WARNING] Nie znaleziono line_id dla produktu: VITAL NATURAL FIBRE DETOX BLONNIK WITALNY Plantago Psyllium Husk/Plantago Ovata 1KG 1000G
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres brytyjski (suffix): ulica="253 ST. AGNELLS LANE"
[INFO] 🏙️ Znaleziono miasto: "HEMEL HEMPSTEAD"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "026-9546416"
[INFO] 📊 Wynik końcowy: imię="barbara", nazwisko="guraj", ulica="253 ST. AGNELLS LANE", numer="", miasto="HEMEL HEMPSTEAD", kod="HP2 6EQ", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07541917986"
[DEBUG] Numer telefonu z Amazona: "07541917986"
[DEBUG] Sformatowany numer telefonu: "+4407541917986"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407541917986
[INFO] Finalny numer telefonu dla zamówienia: +4407541917986
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: VITAL NATURAL FIBRE DETOX BLONNIK WITALNY Plantago Psyllium Husk/Plantago Ovata 1KG 1000G (SKU: 16769)
[INFO] 📞 Finalny telefon dla zamówienia: 026-9546416
[DEBUG] Używam numeru telefonu ze scrapingu: +4407541917986
```

---

## Zamówienie 306-0196982-0730764

### Niezgodności
- **ulica**: Amazon=`Max Planck Straße 45` vs Sellasist=`Max Planck Straße` ❌
- **telefon**: Amazon=`4917634306074` vs Sellasist=`17634306074` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: APFEL-ZIMT-MÜSLI GLUTENFREI BIO 350 g - TURTLE
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="45", ulica="Max Planck Straße"
[INFO] 🏙️ Znaleziono miasto: "Bamberg"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "306-0196982"
[INFO] 📊 Wynik końcowy: imię="Tyra", nazwisko="Payton", ulica="Max Planck Straße", numer="45", miasto="Bamberg", kod="96050", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "017634306074"
[DEBUG] Użyto numeru telefonu bez zmian: 017634306074
[DEBUG] Numer telefonu z Amazona: "017634306074"
[DEBUG] Sformatowany numer telefonu: "017634306074"
[DEBUG] Używam numeru telefonu ze scrapingu: 017634306074
[INFO] Finalny numer telefonu dla zamówienia: 017634306074
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="45", ulica="Max Planck Straße"
[INFO] 🏙️ Znaleziono miasto: "Bamberg"
```

---

## Zamówienie 304-3406915-5629108

### Niezgodności
- **ulica**: Amazon=`Am Spargelhof 15` vs Sellasist=`Am Spargelhof` ❌
- **telefon**: Amazon=`4917666654127` vs Sellasist=`17666654127` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: La Rive Touch of Woman Eau de Parfum Inhalt: 30ml Damenduft (SKU: 56240)
[WARNING] Nie znaleziono line_id dla produktu: La Rive Touch of Woman Eau de Parfum Inhalt: 30ml Damenduft
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="15", ulica="Am Spargelhof"
[INFO] 🏙️ Znaleziono miasto: "Lübeck"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-3406915"
[INFO] 📊 Wynik końcowy: imię="Simon", nazwisko="Kondziella", ulica="Am Spargelhof", numer="15", miasto="Lübeck", kod="23554", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "017666654127"
[DEBUG] Użyto numeru telefonu bez zmian: 017666654127
[DEBUG] Numer telefonu z Amazona: "017666654127"
[DEBUG] Sformatowany numer telefonu: "017666654127"
[DEBUG] Używam numeru telefonu ze scrapingu: 017666654127
[INFO] Finalny numer telefonu dla zamówienia: 017666654127
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="15", ulica="Am Spargelhof"
[INFO] 🏙️ Znaleziono miasto: "Lübeck"
```

---

## Zamówienie 028-5865922-7477900

### Niezgodności
- **miasto**: Amazon=`Stuttgart` vs Sellasist=`6b` ❌
- **ulica**: Amazon=`Am Tazzelwurm 6b` vs Sellasist=`Am Tazzelwurm` ❌
- **telefon**: Amazon=`4915737958030` vs Sellasist=`15737958030` ❌

### Warnings
```
[WARNING] ⚠️ Linia "Am Tazzelwurm" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Linia "Am Tazzelwurm" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Linia "Am Tazzelwurm" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Linia "Am Tazzelwurm" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Natürliches Steinsalz aus Klodawa, fein 1 kg (SKU: 34307)
[WARNING] Usunięto duplikat produktu: Natürliches Steinsalz aus Klodawa, dick 1 kg (SKU: 34606)
[WARNING] Nie znaleziono line_id dla produktu: Natürliches Steinsalz aus Klodawa, dick 1 kg
[WARNING] Nie znaleziono line_id dla produktu: Natürliches Steinsalz aus Klodawa, fein 1 kg
```

### Kluczowe logi
```
[WARNING] ⚠️ Linia "Am Tazzelwurm" nie wygląda na niemiecką ulicę - pomijam
[INFO] ✅ Adres nieprzetworzony: ulica="Am Tazzelwurm"
[INFO] 🏙️ Znaleziono miasto: "6b"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-5865922"
[INFO] 📊 Wynik końcowy: imię="Justyna", nazwisko="Kalina", ulica="Am Tazzelwurm", numer="", miasto="6b", kod="70192", kraj="Germany", valid=true
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Linia "Am Tazzelwurm" nie wygląda na niemiecką ulicę - pomijam
[INFO] ✅ Adres nieprzetworzony: ulica="Am Tazzelwurm"
[INFO] 🏙️ Znaleziono miasto: "6b"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-5865922"
[INFO] 📊 Wynik końcowy: imię="Justyna", nazwisko="Kalina", ulica="Am Tazzelwurm", numer="", miasto="6b", kod="70192", kraj="Germany", valid=true
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Linia "Am Tazzelwurm" nie wygląda na niemiecką ulicę - pomijam
```

---

## Zamówienie 304-0319791-5298717

### Niezgodności
- **ulica**: Amazon=`Am Mühlenteich 54` vs Sellasist=`Am Mühlenteich` ❌
- **telefon**: Amazon=`491795325256` vs Sellasist=`1795325256` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Sanct Bernhard Teufelskralle-Balsam- 150 ml, 1er Pack (1 x 150 g) (SKU: 13657)
[WARNING] Nie znaleziono line_id dla produktu: Sanct Bernhard Teufelskralle-Balsam- 150 ml, 1er Pack (1 x 150 g)
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="54", ulica="Am Mühlenteich"
[INFO] 🏙️ Znaleziono miasto: "Mettmann"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-0319791"
[INFO] 📊 Wynik końcowy: imię="Kurt", nazwisko="Klaft", ulica="Am Mühlenteich", numer="54", miasto="Mettmann", kod="40822", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "01795325256"
[DEBUG] Użyto numeru telefonu bez zmian: 01795325256
[DEBUG] Numer telefonu z Amazona: "01795325256"
[DEBUG] Sformatowany numer telefonu: "01795325256"
[DEBUG] Używam numeru telefonu ze scrapingu: 01795325256
[INFO] Finalny numer telefonu dla zamówienia: 01795325256
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="54", ulica="Am Mühlenteich"
[INFO] 🏙️ Znaleziono miasto: "Mettmann"
```

---

## Zamówienie 206-8402455-8741159

### Niezgodności
- **telefon**: Amazon=`447717741695` vs Sellasist=`4407717741695` ❌

### Warnings
```
[WARNING] ⚠️ Wykryto linię mieszkalną w UK: "Flat 2, Albert Court" - szukam ulicy w dalszych liniach
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Nie znaleziono line_id dla produktu: VENITA Trendy Color Mousse Pianka koloryzująca do wlosów - 11 Silver Dust (Srebrny Pyl) 75ml.
```

### Kluczowe logi
```
[WARNING] ⚠️ Wykryto linię mieszkalną w UK: "Flat 2, Albert Court" - szukam ulicy w dalszych liniach
[INFO] 🏙️ Znaleziono miasto: "SOUTHAMPTON"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "206-8402455"
[INFO] 📊 Wynik końcowy: imię="vanessa", nazwisko="lloyd", ulica="198 Regents Park Road", numer="", miasto="SOUTHAMPTON", kod="SO15 8NY", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07717741695"
[DEBUG] Numer telefonu z Amazona: "07717741695"
[DEBUG] Sformatowany numer telefonu: "+4407717741695"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407717741695
[INFO] Finalny numer telefonu dla zamówienia: +4407717741695
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] 📞 Finalny telefon dla zamówienia: 206-8402455
[DEBUG] Używam numeru telefonu ze scrapingu: +4407717741695
[DEBUG] Używam numeru telefonu ze scrapingu: +4407717741695
```

---

## Zamówienie 171-6369938-9703550

### Niezgodności
- **miasto**: Amazon=`LEIRIA` vs Sellasist=`GUIMAROTA` ❌
- **ulica**: Amazon=`GUIMAROTA` vs Sellasist=`RUA VALE LOBOS - Nº 94 - 1ºDTº` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (PT): 23% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (PT): 23% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Rábano picante extra "Wieluński" 230g Luniak (SKU: 23932)
[WARNING] Nie znaleziono line_id dla produktu: Rábano picante extra "Wieluński" 230g Luniak
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="RUA VALE LOBOS - Nº 94 - 1ºDTº"
[INFO] 🏙️ Znaleziono miasto: "GUIMAROTA"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-6369938"
[INFO] 📊 Wynik końcowy: imię="LUIS", nazwisko="MATOS", ulica="RUA VALE LOBOS - Nº 94 - 1ºDTº", numer="", miasto="GUIMAROTA", kod="2410-078", kraj="Portugal", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+351938979512"
[DEBUG] Zachowano międzynarodowy numer telefonu: +351938979512
[DEBUG] Numer telefonu z Amazona: "+351938979512"
[DEBUG] Sformatowany numer telefonu: "+351938979512"
[DEBUG] Używam numeru telefonu ze scrapingu: +351938979512
[INFO] Finalny numer telefonu dla zamówienia: +351938979512
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="RUA VALE LOBOS - Nº 94 - 1ºDTº"
[INFO] 🏙️ Znaleziono miasto: "GUIMAROTA"
```

---

## Zamówienie 306-8362056-7815561

### Niezgodności
- **miasto**: Amazon=`Spittal  an der Drau` vs Sellasist=`Spittal an der Drau` ❌
- **ulica**: Amazon=`Pfaffenberg 16` vs Sellasist=`Pfaffenberg` ❌
- **telefon**: Amazon=`436507082643` vs Sellasist=`6507082643` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: SAFT MIT PETERSILIE BIO 250 ml - DARY NATURY
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="16", ulica="Pfaffenberg"
[INFO] 🏙️ Znaleziono miasto: "Spittal an der Drau"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "306-8362056"
[INFO] 📊 Wynik końcowy: imię="Irmgard", nazwisko="Fercher", ulica="Pfaffenberg", numer="16", miasto="Spittal an der Drau", kod="9821", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "06507082643"
[DEBUG] Użyto numeru telefonu bez zmian: 06507082643
[DEBUG] Numer telefonu z Amazona: "06507082643"
[DEBUG] Sformatowany numer telefonu: "06507082643"
[DEBUG] Używam numeru telefonu ze scrapingu: 06507082643
[INFO] Finalny numer telefonu dla zamówienia: 06507082643
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="16", ulica="Pfaffenberg"
[INFO] 🏙️ Znaleziono miasto: "Spittal an der Drau"
```

---

## Zamówienie 203-6360154-1308305

### Niezgodności
- **miasto**: Amazon=`SEETHING` vs Sellasist=`UPGATE ROAD` ❌
- **ulica**: Amazon=`UPGATE ROAD` vs Sellasist=`HOME FARM` ❌
- **telefon**: Amazon=`447493092468` vs Sellasist=`4407493092468` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Nie znaleziono line_id dla produktu: Bespoke Mens Fresh Citrus and Vetiver Body Spray, Fragrance for Men 150ml
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="HOME FARM"
[INFO] 🏙️ Znaleziono miasto: "UPGATE ROAD"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "203-6360154"
[INFO] 📊 Wynik końcowy: imię="Josh", nazwisko="saunders", ulica="HOME FARM", numer="", miasto="UPGATE ROAD", kod="NR15 1EL", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07493092468"
[DEBUG] Numer telefonu z Amazona: "07493092468"
[DEBUG] Sformatowany numer telefonu: "+4407493092468"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407493092468
[INFO] Finalny numer telefonu dla zamówienia: +4407493092468
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] 📞 Finalny telefon dla zamówienia: 203-6360154
[DEBUG] Używam numeru telefonu ze scrapingu: +4407493092468
[DEBUG] Używam numeru telefonu ze scrapingu: +4407493092468
```

---

## Zamówienie 403-9636300-7171515

### Niezgodności
- **ulica**: Amazon=`Zellaarstraat  13` vs Sellasist=`Zellaarstraat 13` ❌
- **telefon**: Amazon=`32488672185` vs Sellasist=`320488672185` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (BE): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (BE): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Now Foods - Pumpkin Seed Oil, 1000 mg, 100 Softgel (SKU: 11173)
[WARNING] Nie znaleziono line_id dla produktu: Now Foods - Pumpkin Seed Oil, 1000 mg, 100 Softgel
```

### Kluczowe logi
```
[INFO] ✅ Adres belgijski (fallback): ulica="Zellaarstraat 13"
[INFO] 🏙️ Znaleziono miasto: "Boortmeerbeek"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "403-9636300"
[INFO] 📊 Wynik końcowy: imię="Mariam", nazwisko="Bidouch", ulica="Zellaarstraat 13", numer="", miasto="Boortmeerbeek", kod="3190", kraj="Belgium", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0488672185"
[DEBUG] Numer telefonu z Amazona: "0488672185"
[DEBUG] Sformatowany numer telefonu: "+320488672185"
[DEBUG] Używam numeru telefonu ze scrapingu: +320488672185
[INFO] Finalny numer telefonu dla zamówienia: +320488672185
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres belgijski (fallback): ulica="Zellaarstraat 13"
[INFO] 🏙️ Znaleziono miasto: "Boortmeerbeek"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 206-7355966-4366749

### Niezgodności
- **miasto**: Amazon=`Dunfermline` vs Sellasist=`Lindsays Wynd Oakley` ❌
- **ulica**: Amazon=`30 Lindsays Wynd Oakley` vs Sellasist=`30` ❌
- **telefon**: Amazon=`447413443950` vs Sellasist=`4407413443950` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Nie znaleziono line_id dla produktu: Keto Chips - Fresh Red Peppers 30g
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="30"
[INFO] 🏙️ Znaleziono miasto: "Lindsays Wynd Oakley"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "206-7355966"
[INFO] 📊 Wynik końcowy: imię="Aneta", nazwisko="Misterka-Cheda", ulica="30", numer="", miasto="Lindsays Wynd Oakley", kod="KY12 9SP", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07413443950"
[DEBUG] Numer telefonu z Amazona: "07413443950"
[DEBUG] Sformatowany numer telefonu: "+4407413443950"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407413443950
[INFO] Finalny numer telefonu dla zamówienia: +4407413443950
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] 📞 Finalny telefon dla zamówienia: 206-7355966
[DEBUG] Używam numeru telefonu ze scrapingu: +4407413443950
[DEBUG] Używam numeru telefonu ze scrapingu: +4407413443950
```

---

## Zamówienie 305-9330345-5043529

### Niezgodności
- **telefon**: Amazon=`436765470654` vs Sellasist=`6765470654` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Elite S.R.L. 2368113000-Ablage Schwarz One Size
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="Lorenz-Böhler-Gasse 6/4/11"
[INFO] 🏙️ Znaleziono miasto: "Wien"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "305-9330345"
[INFO] 📊 Wynik końcowy: imię="Duft", nazwisko="Thomas", ulica="Lorenz-Böhler-Gasse 6/4/11", numer="", miasto="Wien", kod="1200", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "06765470654"
[DEBUG] Użyto numeru telefonu bez zmian: 06765470654
[DEBUG] Numer telefonu z Amazona: "06765470654"
[DEBUG] Sformatowany numer telefonu: "06765470654"
[DEBUG] Używam numeru telefonu ze scrapingu: 06765470654
[INFO] Finalny numer telefonu dla zamówienia: 06765470654
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="Lorenz-Böhler-Gasse 6/4/11"
[INFO] 🏙️ Znaleziono miasto: "Wien"
```

---

## Zamówienie 202-6154134-6205903

### Niezgodności
- **telefon**: Amazon=`447312266949` vs Sellasist=`4407312266949` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Nie znaleziono line_id dla produktu: POLSKA ROŻA Aronia Juice 100% Sugar-Free 500 ml Polska Roża
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres brytyjski (suffix): ulica="13 DRAKE GARDENS"
[INFO] 🏙️ Znaleziono miasto: "BRAINTREE"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "202-6154134"
[INFO] 📊 Wynik końcowy: imię="Emma", nazwisko="Bobocea", ulica="13 DRAKE GARDENS", numer="", miasto="BRAINTREE", kod="CM7 9TB", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07312266949"
[DEBUG] Numer telefonu z Amazona: "07312266949"
[DEBUG] Sformatowany numer telefonu: "+4407312266949"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407312266949
[INFO] Finalny numer telefonu dla zamówienia: +4407312266949
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] 📞 Finalny telefon dla zamówienia: 202-6154134
[DEBUG] Używam numeru telefonu ze scrapingu: +4407312266949
[DEBUG] Używam numeru telefonu ze scrapingu: +4407312266949
```

---

## Zamówienie 028-0042903-7392354

### Niezgodności
- **ulica**: Amazon=`Osterbergstr. 2a` vs Sellasist=`Osterbergstr.` ❌
- **telefon**: Amazon=`4963472007` vs Sellasist=`0` ❌

### Warnings
```
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 06347
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Bio rosemary Tea 80 g - DARY NATURY
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="2a", ulica="Osterbergstr."
[INFO] 🏙️ Znaleziono miasto: "Essingen"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-0042903"
[INFO] 📊 Wynik końcowy: imię="Petra", nazwisko="Grischy", ulica="Osterbergstr.", numer="2a", miasto="Essingen", kod="76879", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "06347"
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 06347
[DEBUG] Numer telefonu z Amazona: "06347"
[DEBUG] Sformatowany numer telefonu: ""
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
[INFO] Finalny numer telefonu dla zamówienia: 000000000
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="2a", ulica="Osterbergstr."
[INFO] 🏙️ Znaleziono miasto: "Essingen"
```

---

## Zamówienie 171-5149240-7209952

### Niezgodności
- **miasto**: Amazon=`Tomiño` vs Sellasist=`pontevedra` ❌
- **ulica**: Amazon=`Vilachan.13.B Casa` vs Sellasist=`Vilachan.13.B` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Calostro bovino bovino estandarizado 440mg 120 cápsulas Hepatica (SKU: 2384)
[WARNING] Nie znaleziono line_id dla produktu: Calostro bovino bovino estandarizado 440mg 120 cápsulas Hepatica
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="Vilachan.13.B"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "pontevedra"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-5149240"
[INFO] 📊 Wynik końcowy: imię="Joaquín", nazwisko="Teixeira Rodríguez", ulica="Vilachan.13.B", numer="", miasto="pontevedra", kod="36740", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "647936729"
[DEBUG] Numer telefonu z Amazona: "647936729"
[DEBUG] Sformatowany numer telefonu: "+34647936729"
[DEBUG] Używam numeru telefonu ze scrapingu: +34647936729
[INFO] Finalny numer telefonu dla zamówienia: +34647936729
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="Vilachan.13.B"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "pontevedra"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 403-0891904-6731565

### Niezgodności
- **miasto**: Amazon=`Arbonne` vs Sellasist=`Maison etxartea` ❌
- **ulica**: Amazon=`Maison etxartea` vs Sellasist=`chemin etxartea` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Ostrovit Collagène 90 Comprimés Complément Alimentaire Pour Une Peau Plus Saine, Cheveux, Ongles, Os Et Articulations
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="2", ulica="chemin etxartea"
[INFO] 🏙️ Znaleziono miasto: "Maison etxartea"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "403-0891904"
[INFO] 📊 Wynik końcowy: imię="Laëtitia", nazwisko="Arnopoulos", ulica="chemin etxartea", numer="2", miasto="Maison etxartea", kod="64210", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+33 622458768"
[DEBUG] Zachowano międzynarodowy numer telefonu: +33 622458768
[DEBUG] Numer telefonu z Amazona: "+33 622458768"
[DEBUG] Sformatowany numer telefonu: "+33 622458768"
[DEBUG] Używam numeru telefonu ze scrapingu: +33 622458768
[INFO] Finalny numer telefonu dla zamówienia: +33 622458768
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="2", ulica="chemin etxartea"
[INFO] 🏙️ Znaleziono miasto: "Maison etxartea"
```

---

## Zamówienie 304-4242202-7013934

### Niezgodności
- **ulica**: Amazon=`Marienthaler Str. 10B` vs Sellasist=`Marienthaler Str.` ❌
- **telefon**: Amazon=`4916092664207` vs Sellasist=`16092664207` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: La Rive In Flames Women Eau De parfum 90 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="10B", ulica="Marienthaler Str."
[INFO] 🏙️ Znaleziono miasto: "Roggendorf"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-4242202"
[INFO] 📊 Wynik końcowy: imię="Kerstin", nazwisko="Klopsch", ulica="Marienthaler Str.", numer="10B", miasto="Roggendorf", kod="19205", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0160 92664207"
[DEBUG] Użyto numeru telefonu bez zmian: 0160 92664207
[DEBUG] Numer telefonu z Amazona: "0160 92664207"
[DEBUG] Sformatowany numer telefonu: "0160 92664207"
[DEBUG] Używam numeru telefonu ze scrapingu: 0160 92664207
[INFO] Finalny numer telefonu dla zamówienia: 0160 92664207
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="10B", ulica="Marienthaler Str."
[INFO] 🏙️ Znaleziono miasto: "Roggendorf"
```

---

## Zamówienie 205-4376397-1751537

### Niezgodności
- **miasto**: Amazon=`BRISTOL` vs Sellasist=`MANOR ROAD FISHPONDS` ❌
- **ulica**: Amazon=`172A MANOR ROAD FISHPONDS` vs Sellasist=`172A` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Joy Day Probiotic Drink Concentrate Mint | 500 ml | 600 Million Live Probiotics Bacteria | 15 Health Strain with Lactobacillus Acidophilus, Lactobacillus Rhamnosus Advanced Multi Bacteria (SKU: 63588)
[WARNING] Nie znaleziono line_id dla produktu: Joy Day Probiotic Drink Concentrate Mint | 500 ml | 600 Million Live Probiotics Bacteria | 15 Health Strain with Lactobacillus Acidophilus, Lactobacillus Rhamnosus Advanced Multi Bacteria
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="172A"
[INFO] 🏙️ Znaleziono miasto: "MANOR ROAD FISHPONDS"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "205-4376397"
[INFO] 📊 Wynik końcowy: imię="Weronika", nazwisko="Szczotka", ulica="172A", numer="", miasto="MANOR ROAD FISHPONDS", kod="BS16 2EN", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+447775734199"
[DEBUG] Zachowano międzynarodowy numer telefonu: +447775734199
[DEBUG] Numer telefonu z Amazona: "+447775734199"
[DEBUG] Sformatowany numer telefonu: "+447775734199"
[DEBUG] Używam numeru telefonu ze scrapingu: +447775734199
[INFO] Finalny numer telefonu dla zamówienia: +447775734199
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Joy Day Probiotic Drink Concentrate Mint | 500 ml | 600 Million Live Probiotics Bacteria | 15 Health Strain with Lactobacillus Acidophilus, Lactobacillus Rhamnosus Advanced Multi Bacteria (SKU: 63588)
[INFO] 📞 Finalny telefon dla zamówienia: 205-4376397
```

---

## Zamówienie 171-8076913-4077149

### Niezgodności
- **miasto**: Amazon=`Fourques` vs Sellasist=`2987 RD15 Route de Beaucaire` ❌
- **ulica**: Amazon=`2987 RD15 Route de Beaucaire` vs Sellasist=`Villa Christina,` ❌
- **telefon**: Amazon=`` vs Sellasist=`330610449023` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Tomates séchées au soleil dans l'huile BIO 180 g EkoWital
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="Villa Christina,"
[INFO] 🏙️ Znaleziono miasto: "2987 RD15 Route de Beaucaire"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-8076913"
[INFO] 📊 Wynik końcowy: imię="Mrs", nazwisko="Susan J Berry", ulica="Villa Christina,", numer="", miasto="2987 RD15 Route de Beaucaire", kod="30300", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0033 (0) 610449023"
[DEBUG] Numer telefonu z Amazona: "0033 (0) 610449023"
[DEBUG] Sformatowany numer telefonu: "+33 0 610449023"
[DEBUG] Używam numeru telefonu ze scrapingu: +33 0 610449023
[INFO] Finalny numer telefonu dla zamówienia: +33 0 610449023
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="Villa Christina,"
[INFO] 🏙️ Znaleziono miasto: "2987 RD15 Route de Beaucaire"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 408-1420163-5199523

### Niezgodności
- **ulica**: Amazon=`4 résidence Jacques Brel` vs Sellasist=`résidence Jacques Brel` ❌
- **telefon**: Amazon=`33679658794` vs Sellasist=`330679658794` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: La Rive Aqua by La Rive Eau De Toilette Spray 3 oz / 90 ml (Men) (SKU: 37940_36)
[WARNING] Nie znaleziono line_id dla produktu: La Rive Aqua by La Rive Eau De Toilette Spray 3 oz / 90 ml (Men)
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="4", ulica="résidence Jacques Brel"
[INFO] 🏙️ Znaleziono miasto: "Abscon"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "408-1420163"
[INFO] 📊 Wynik końcowy: imię="DESPREZ", nazwisko="christophe", ulica="résidence Jacques Brel", numer="4", miasto="Abscon", kod="59215", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0679658794"
[DEBUG] Numer telefonu z Amazona: "0679658794"
[DEBUG] Sformatowany numer telefonu: "+330679658794"
[DEBUG] Używam numeru telefonu ze scrapingu: +330679658794
[INFO] Finalny numer telefonu dla zamówienia: +330679658794
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="4", ulica="résidence Jacques Brel"
[INFO] 🏙️ Znaleziono miasto: "Abscon"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 202-2283587-9540348

### Niezgodności
- **telefon**: Amazon=`447466511577` vs Sellasist=`397466511577` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Nie znaleziono line_id dla produktu: Nettle Juice / Sok z Pokrzywy 1000ml ***100% Natural NO Sugar Added******
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres brytyjski (suffix): ulica="111b Longford Road"
[INFO] 🏙️ Znaleziono miasto: "Bognor Regis"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "202-2283587"
[INFO] 📊 Wynik końcowy: imię="MR K", nazwisko="Spaczynski", ulica="111b Longford Road", numer="", miasto="Bognor Regis", kod="PO21 1AE", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "7466511577"
[DEBUG] Numer telefonu z Amazona: "7466511577"
[DEBUG] Sformatowany numer telefonu: "+397466511577"
[DEBUG] Używam numeru telefonu ze scrapingu: +397466511577
[INFO] Finalny numer telefonu dla zamówienia: +397466511577
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] 📞 Finalny telefon dla zamówienia: 202-2283587
[DEBUG] Używam numeru telefonu ze scrapingu: +397466511577
[DEBUG] Używam numeru telefonu ze scrapingu: +397466511577
```

---

## Zamówienie 405-6150058-2041102

### Niezgodności
- **ulica**: Amazon=`700 route du centre` vs Sellasist=`route du centre` ❌
- **telefon**: Amazon=`33633410223` vs Sellasist=`330633410223` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: The Hunting Man by La Rive Eau De Toilette Spray 2.5 oz / 75 ml (Men)
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="700", ulica="route du centre"
[INFO] 🏙️ Znaleziono miasto: "Bosc Mesnil"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "405-6150058"
[INFO] 📊 Wynik końcowy: imię="Fleury", nazwisko="Barbara", ulica="route du centre", numer="700", miasto="Bosc Mesnil", kod="76680", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0633410223"
[DEBUG] Numer telefonu z Amazona: "0633410223"
[DEBUG] Sformatowany numer telefonu: "+330633410223"
[DEBUG] Używam numeru telefonu ze scrapingu: +330633410223
[INFO] Finalny numer telefonu dla zamówienia: +330633410223
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="700", ulica="route du centre"
[INFO] 🏙️ Znaleziono miasto: "Bosc Mesnil"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 202-2718177-0288333

### Niezgodności
- **ulica**: Amazon=`FLAT 20 OLD CHESTERTON BUILDING 110 BATTERSEA PARK ROAD` vs Sellasist=`BATTERSEA PARK ROAD` ❌

### Warnings
```
[WARNING] ⚠️ Wykryto linię mieszkalną w UK: "FLAT 20 OLD CHESTERTON BUILDING 110" - szukam ulicy w dalszych liniach
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Active B12 with L-5-MTHF, Cherry - 60 lozenges (SKU: 2497)
[WARNING] Nie znaleziono line_id dla produktu: Active B12 with L-5-MTHF, Cherry - 60 lozenges
```

### Kluczowe logi
```
[WARNING] ⚠️ Wykryto linię mieszkalną w UK: "FLAT 20 OLD CHESTERTON BUILDING 110" - szukam ulicy w dalszych liniach
[INFO] 🏙️ Znaleziono miasto: "LONDON"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "202-2718177"
[INFO] 📊 Wynik końcowy: imię="Giselle", nazwisko="Norman", ulica="BATTERSEA PARK ROAD", numer="", miasto="LONDON", kod="SW11 4LZ", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+447500899610"
[DEBUG] Zachowano międzynarodowy numer telefonu: +447500899610
[DEBUG] Numer telefonu z Amazona: "+447500899610"
[DEBUG] Sformatowany numer telefonu: "+447500899610"
[DEBUG] Używam numeru telefonu ze scrapingu: +447500899610
[INFO] Finalny numer telefonu dla zamówienia: +447500899610
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Active B12 with L-5-MTHF, Cherry - 60 lozenges (SKU: 2497)
[INFO] 📞 Finalny telefon dla zamówienia: 202-2718177
```

---

## Zamówienie 171-3485750-4918708

### Niezgodności
- **miasto**: Amazon=`Barcelona` vs Sellasist=`Catalunia` ❌
- **ulica**: Amazon=`Ronda Guinardo 75 Planta 6 Piso 2` vs Sellasist=`Ronda Guinardo` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Apotheke BIO - Té bronquial infantil a partir de 9 meses de edad. Paquete de 20 bolsitas de té
```

### Kluczowe logi
```
[INFO] ✅ Adres hiszpański (wzorzec): numer="75", ulica="Ronda Guinardo"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Catalunia"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-3485750"
[INFO] 📊 Wynik końcowy: imię="Borislava", nazwisko="Lyubenova", ulica="Ronda Guinardo", numer="75", miasto="Catalunia", kod="08024", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0034603562782"
[DEBUG] Numer telefonu z Amazona: "0034603562782"
[DEBUG] Sformatowany numer telefonu: "+34603562782"
[DEBUG] Używam numeru telefonu ze scrapingu: +34603562782
[INFO] Finalny numer telefonu dla zamówienia: +34603562782
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres hiszpański (wzorzec): numer="75", ulica="Ronda Guinardo"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Catalunia"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 407-9398054-4781967

### Niezgodności
- **miasto**: Amazon=`ALBOX` vs Sellasist=`Almeria` ❌
- **ulica**: Amazon=`28 de Febrero Avenue, 1` vs Sellasist=`28 de Febrero Avenue,` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Thorne Research - Selenomethionine - 200 mcg Selenium Supplement for Antioxidant Support - 60 Capsules (SKU: 1355)
[WARNING] Nie znaleziono line_id dla produktu: Thorne Research - Selenomethionine - 200 mcg Selenium Supplement for Antioxidant Support - 60 Capsules
```

### Kluczowe logi
```
[INFO] ✅ Adres hiszpański (wzorzec): numer="1", ulica="28 de Febrero Avenue,"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Almeria"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-9398054"
[INFO] 📊 Wynik końcowy: imię="386 The Post Shop Albox", nazwisko="Jacqueline Dale Malpass", ulica="28 de Febrero Avenue,", numer="1", miasto="Almeria", kod="04800", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "711046401"
[DEBUG] Numer telefonu z Amazona: "711046401"
[DEBUG] Sformatowany numer telefonu: "+34711046401"
[DEBUG] Używam numeru telefonu ze scrapingu: +34711046401
[INFO] Finalny numer telefonu dla zamówienia: +34711046401
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres hiszpański (wzorzec): numer="1", ulica="28 de Febrero Avenue,"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Almeria"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 406-3510079-1982739

### Niezgodności
- **telefon**: Amazon=`3166666666` vs Sellasist=`31066666666` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Gedroogde groenten BIO 190 g - DARY NATURY
```

### Kluczowe logi
```
[INFO] ✅ Adres holenderski (standard): ulica="Portlandstraat 31"
[INFO] 🏙️ Znaleziono miasto: "Rotterdam"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "406-3510079"
[INFO] 📊 Wynik końcowy: imię="Alex", nazwisko="Bouman", ulica="Portlandstraat 31", numer="", miasto="Rotterdam", kod="", kraj="Netherlands", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "066666666"
[DEBUG] Numer telefonu z Amazona: "066666666"
[DEBUG] Sformatowany numer telefonu: "+31066666666"
[DEBUG] Używam numeru telefonu ze scrapingu: +31066666666
[INFO] Finalny numer telefonu dla zamówienia: +31066666666
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres holenderski (standard): ulica="Portlandstraat 31"
[INFO] 🏙️ Znaleziono miasto: "Rotterdam"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 306-5726701-4784363

### Niezgodności
- **ulica**: Amazon=`Schuttrange` vs Sellasist=`26 Rue du Village` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: JOY DAY Waldfrucht Lebende Kulturen Bio Probiotika Flüssig Vegan 15 Lebende Bakterienstämme, Laktosefrei, Lebende lactobacillus (SKU: 2358)
[WARNING] Nie znaleziono line_id dla produktu: JOY DAY Waldfrucht Lebende Kulturen Bio Probiotika Flüssig Vegan 15 Lebende Bakterienstämme, Laktosefrei, Lebende lactobacillus
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="26 Rue du Village"
[INFO] 🏙️ Znaleziono miasto: "Schuttrange"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "306-5726701"
[INFO] 📊 Wynik końcowy: imię="Marta", nazwisko="Skoczylas", ulica="26 Rue du Village", numer="", miasto="Schuttrange", kod="5370", kraj="Luxembourg", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+352621468322"
[DEBUG] Zachowano międzynarodowy numer telefonu: +352621468322
[DEBUG] Numer telefonu z Amazona: "+352621468322"
[DEBUG] Sformatowany numer telefonu: "+352621468322"
[DEBUG] Używam numeru telefonu ze scrapingu: +352621468322
[INFO] Finalny numer telefonu dla zamówienia: +352621468322
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="26 Rue du Village"
[INFO] 🏙️ Znaleziono miasto: "Schuttrange"
```

---

## Zamówienie 206-3919300-5654759

### Niezgodności
- **miasto**: Amazon=`LIVERPOOL` vs Sellasist=`1 PRINCES GATE EAST` ❌
- **ulica**: Amazon=`FLAT 7 1 PRINCES GATE EAST` vs Sellasist=`-` ❌
- **telefon**: Amazon=`447909423466` vs Sellasist=`4407909423466` ❌

### Warnings
```
[WARNING] ⚠️ Wykryto linię mieszkalną w UK: "FLAT 7" - szukam ulicy w dalszych liniach
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Nie znaleziono line_id dla produktu: Science In Sport REGO Rapid Recovery Protein Powder | 22g of Protein for Muscle Recovery | Vanilla Protein Shake, 30 Servings, 1.5Kg Bag
```

### Kluczowe logi
```
[WARNING] ⚠️ Wykryto linię mieszkalną w UK: "FLAT 7" - szukam ulicy w dalszych liniach
[INFO] 🏙️ Znaleziono miasto: "1 PRINCES GATE EAST"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "206-3919300"
[INFO] 📊 Wynik końcowy: imię="Eric", nazwisko="Mytton", ulica="", numer="", miasto="1 PRINCES GATE EAST", kod="L8 0SU", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07909423466"
[DEBUG] Numer telefonu z Amazona: "07909423466"
[DEBUG] Sformatowany numer telefonu: "+4407909423466"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407909423466
[INFO] Finalny numer telefonu dla zamówienia: +4407909423466
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] 📞 Finalny telefon dla zamówienia: 206-3919300
[DEBUG] Używam numeru telefonu ze scrapingu: +4407909423466
[DEBUG] Używam numeru telefonu ze scrapingu: +4407909423466
```

---

## Zamówienie 407-7989867-6624341

### Niezgodności
- **miasto**: Amazon=`57320 filstroff` vs Sellasist=`filstroff` ❌
- **ulica**: Amazon=`38 les chanterelles` vs Sellasist=`les chanterelles` ❌
- **telefon**: Amazon=`33387783414` vs Sellasist=`387783414` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Filtre À Thé Papier Bio Non Blanchi Compostable 100 Pièces | Sachet De Thé À Remplir Bio Pour Thé Naturel - Sachet Thé Jetable Bio - Sachets Thé Vide Bio
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="38", ulica="les chanterelles"
[INFO] 🏙️ Znaleziono kod+miasto: kod="57320", miasto="filstroff"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-7989867"
[INFO] 📊 Wynik końcowy: imię="divo", nazwisko="rene", ulica="les chanterelles", numer="38", miasto="filstroff", kod="57320", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "03 87 78 34 14"
[DEBUG] Użyto numeru telefonu bez zmian: 03 87 78 34 14
[DEBUG] Numer telefonu z Amazona: "03 87 78 34 14"
[DEBUG] Sformatowany numer telefonu: "03 87 78 34 14"
[DEBUG] Używam numeru telefonu ze scrapingu: 03 87 78 34 14
[INFO] Finalny numer telefonu dla zamówienia: 03 87 78 34 14
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="38", ulica="les chanterelles"
[INFO] 🏙️ Znaleziono kod+miasto: kod="57320", miasto="filstroff"
```

---

## Zamówienie 202-2057321-9913913

### Niezgodności
- **telefon**: Amazon=`447846413646` vs Sellasist=`4407846413646` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: OstroVit CGT 600 G - Creatine - Glutamine - Taurine - Amino Acids (SKU: 13983)
[WARNING] Nie znaleziono line_id dla produktu: OstroVit CGT 600 G - Creatine - Glutamine - Taurine - Amino Acids
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres brytyjski (suffix): ulica="42 DUNSTALL AVENUE"
[INFO] 🏙️ Znaleziono miasto: "BURGESS HILL"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "202-2057321"
[INFO] 📊 Wynik końcowy: imię="Neil", nazwisko="MacIntosh", ulica="42 DUNSTALL AVENUE", numer="", miasto="BURGESS HILL", kod="RH15 8PH", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07846413646"
[DEBUG] Numer telefonu z Amazona: "07846413646"
[DEBUG] Sformatowany numer telefonu: "+4407846413646"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407846413646
[INFO] Finalny numer telefonu dla zamówienia: +4407846413646
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: OstroVit CGT 600 G - Creatine - Glutamine - Taurine - Amino Acids (SKU: 13983)
[INFO] 📞 Finalny telefon dla zamówienia: 202-2057321
[DEBUG] Używam numeru telefonu ze scrapingu: +4407846413646
```

---

## Zamówienie 204-9913138-0939501

### Niezgodności
- **ulica**: Amazon=`LITTLEWICK COMMON KNAPHILL` vs Sellasist=`-` ❌
- **telefon**: Amazon=`447505105404` vs Sellasist=`0` ❌
- **kod_pocztowy**: Amazon=`GU21 2JZ` vs Sellasist=`GU212JZ` ❌

### Warnings
```
[WARNING] ❌ Adres jest INVALID (brak podstawowych danych)
[WARNING] Niepełne dane adresowe – aktualizuję zamówienie jako anulowane: imię=Order, nazwisko=Canceled
[WARNING] ⚠️ Nie znaleziono telefonu po "Phone:"
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Produkt anulowany został dodany do listy produktów (status: Cancelled)
[WARNING] Nie znaleziono line_id dla produktu: Seeking Health Histamine Digest - Support for Histamine Sensitivity and Digestive Health - Histamine Block - Anti-Histamine Tablets for Intolerance - Histamine Blocker - 90 Capsules
```

### Kluczowe logi
```
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "204-9913138"
[WARNING] ❌ Adres jest INVALID (brak podstawowych danych)
[INFO] 📊 Wynik końcowy: imię="", nazwisko="", ulica="", numer="", miasto="", kod="", kraj="", valid=false
[WARNING] Niepełne dane adresowe – aktualizuję zamówienie jako anulowane: imię=Order, nazwisko=Canceled
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[WARNING] ⚠️ Nie znaleziono telefonu po "Phone:"
[DEBUG] Numer telefonu z Amazona: ""
[DEBUG] Sformatowany numer telefonu: ""
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
[INFO] Finalny numer telefonu dla zamówienia: 000000000
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Produkt anulowany został dodany do listy produktów (status: Cancelled)
[INFO] 📞 Finalny telefon dla zamówienia: 204-9913138
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
```

---

## Zamówienie 302-1187230-5002748

### Niezgodności
- **ulica**: Amazon=`Trummi 28A` vs Sellasist=`Trummi` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Solana Pag Morski sol sitni - Meersalz fein mit Jod (Solana Pag) 1kg (SKU: 34410)
[WARNING] Nie znaleziono line_id dla produktu: Solana Pag Morski sol sitni - Meersalz fein mit Jod (Solana Pag) 1kg
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="28A", ulica="Trummi"
[INFO] 🏙️ Znaleziono miasto: "Tallinn"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "302-1187230"
[INFO] 📊 Wynik końcowy: imię="Toomas", nazwisko="Bergmann", ulica="Trummi", numer="28A", miasto="Tallinn", kod="12617", kraj="Estonia", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+3725043911"
[DEBUG] Zachowano międzynarodowy numer telefonu: +3725043911
[DEBUG] Numer telefonu z Amazona: "+3725043911"
[DEBUG] Sformatowany numer telefonu: "+3725043911"
[DEBUG] Używam numeru telefonu ze scrapingu: +3725043911
[INFO] Finalny numer telefonu dla zamówienia: +3725043911
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="28A", ulica="Trummi"
[INFO] 🏙️ Znaleziono miasto: "Tallinn"
```

---

## Zamówienie 407-7534648-8533927

### Niezgodności
- **miasto**: Amazon=`Burela` vs Sellasist=`Lugo` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: SHIMANO - Núcleo Buje Completo - WH-MT501
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="C/Marques de Sargadelos nº4, 1ºB"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Lugo"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-7534648"
[INFO] 📊 Wynik końcowy: imię="Ivan", nazwisko="Paz Paz", ulica="C/Marques de Sargadelos nº4, 1ºB", numer="", miasto="Lugo", kod="27880", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "650422878"
[DEBUG] Numer telefonu z Amazona: "650422878"
[DEBUG] Sformatowany numer telefonu: "+34650422878"
[DEBUG] Używam numeru telefonu ze scrapingu: +34650422878
[INFO] Finalny numer telefonu dla zamówienia: +34650422878
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="C/Marques de Sargadelos nº4, 1ºB"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Lugo"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 407-5197138-9333164

### Niezgodności
- **ulica**: Amazon=`152 Route de Pontoise` vs Sellasist=`Route de Pontoise` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Thorne Super EPA - Supplément d'Acides Gras Oméga-3 EPA 425 mg et DHA 270 mg - Pour la Santé du Cœur, du Cerveau, du Système Cardiovasculaire, des Articulations et de la Peau - 90 Gélules (SKU: 14459)
[WARNING] Nie znaleziono line_id dla produktu: Thorne Super EPA - Supplément d'Acides Gras Oméga-3 EPA 425 mg et DHA 270 mg - Pour la Santé du Cœur, du Cerveau, du Système Cardiovasculaire, des Articulations et de la Peau - 90 Gélules
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="152", ulica="Route de Pontoise"
[INFO] 🏙️ Znaleziono miasto: "Argenteuil"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-5197138"
[INFO] 📊 Wynik końcowy: imię="Imrane", nazwisko="", ulica="Route de Pontoise", numer="152", miasto="Argenteuil", kod="95100", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+33605715289"
[DEBUG] Zachowano międzynarodowy numer telefonu: +33605715289
[DEBUG] Numer telefonu z Amazona: "+33605715289"
[DEBUG] Sformatowany numer telefonu: "+33605715289"
[DEBUG] Używam numeru telefonu ze scrapingu: +33605715289
[INFO] Finalny numer telefonu dla zamówienia: +33605715289
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="152", ulica="Route de Pontoise"
[INFO] 🏙️ Znaleziono miasto: "Argenteuil"
```

---

## Zamówienie 204-5829021-7524329

### Niezgodności
- **miasto**: Amazon=`DEVIZES` vs Sellasist=`WEAVERS MEAD GREAT CHEVERELL` ❌
- **ulica**: Amazon=`16 WEAVERS MEAD GREAT CHEVERELL` vs Sellasist=`16` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Nie znaleziono line_id dla produktu: DY Nutrition The Creatine Complex 400g - High Performance Creatine Monohydrate Powder with Beta Alanine, Taurine + B Vitamins for Muscle Endurance, Pump & Recovery x40 Servings (Strawberry Flavoured)
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="16"
[INFO] 🏙️ Znaleziono miasto: "WEAVERS MEAD GREAT CHEVERELL"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "204-5829021"
[INFO] 📊 Wynik końcowy: imię="RICHARD", nazwisko="ROGERS", ulica="16", numer="", miasto="WEAVERS MEAD GREAT CHEVERELL", kod="SN10 5TP", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+447713656269"
[DEBUG] Zachowano międzynarodowy numer telefonu: +447713656269
[DEBUG] Numer telefonu z Amazona: "+447713656269"
[DEBUG] Sformatowany numer telefonu: "+447713656269"
[DEBUG] Używam numeru telefonu ze scrapingu: +447713656269
[INFO] Finalny numer telefonu dla zamówienia: +447713656269
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] 📞 Finalny telefon dla zamówienia: 204-5829021
[DEBUG] Używam numeru telefonu ze scrapingu: +447713656269
```

---

## Zamówienie 171-3598878-8992314

### Niezgodności
- **miasto**: Amazon=`Draguignan` vs Sellasist=`Lot les pins parasols 32 allée des restanques` ❌
- **ulica**: Amazon=`Lot les pins parasols 32 allée des restanques` vs Sellasist=`153, Chemin des Incapis` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Confiture de pétales de rose en sucre 220g Polska Róża (SKU: 22783)
[WARNING] Nie znaleziono line_id dla produktu: Confiture de pétales de rose en sucre 220g Polska Róża
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="153, Chemin des Incapis"
[INFO] 🏙️ Znaleziono miasto: "Lot les pins parasols 32 allée des restanques"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-3598878"
[INFO] 📊 Wynik końcowy: imię="clet", nazwisko="catherine", ulica="153, Chemin des Incapis", numer="", miasto="Lot les pins parasols 32 allée des restanques", kod="83300", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+33650497811"
[DEBUG] Zachowano międzynarodowy numer telefonu: +33650497811
[DEBUG] Numer telefonu z Amazona: "+33650497811"
[DEBUG] Sformatowany numer telefonu: "+33650497811"
[DEBUG] Używam numeru telefonu ze scrapingu: +33650497811
[INFO] Finalny numer telefonu dla zamówienia: +33650497811
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="153, Chemin des Incapis"
[INFO] 🏙️ Znaleziono miasto: "Lot les pins parasols 32 allée des restanques"
```

---

## Zamówienie 407-2517794-7078768

### Niezgodności
- **ulica**: Amazon=`16 Rue de l'Eglise` vs Sellasist=`Rue de l&#039;Eglise` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Jus d'acérola BIO 500 ml - BIO PLANET
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="16", ulica="Rue de l'Eglise"
[INFO] 🏙️ Znaleziono miasto: "Rochefort Du Gard"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-2517794"
[INFO] 📊 Wynik końcowy: imię="Demarquoy", nazwisko="Marielaure", ulica="Rue de l'Eglise", numer="16", miasto="Rochefort Du Gard", kod="30650", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+33658980631"
[DEBUG] Zachowano międzynarodowy numer telefonu: +33658980631
[DEBUG] Numer telefonu z Amazona: "+33658980631"
[DEBUG] Sformatowany numer telefonu: "+33658980631"
[DEBUG] Używam numeru telefonu ze scrapingu: +33658980631
[INFO] Finalny numer telefonu dla zamówienia: +33658980631
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="16", ulica="Rue de l'Eglise"
[INFO] 🏙️ Znaleziono miasto: "Rochefort Du Gard"
```

---

## Zamówienie 402-0257806-1181132

### Niezgodności
- **miasto**: Amazon=`TRENTO` vs Sellasist=`GARDOLO` ❌
- **ulica**: Amazon=`VIA CLEMENTE ANDREATTA 11 GARDOLO` vs Sellasist=`VIA CLEMENTE ANDREATTA` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Shimano Rd-m5120 Sgs Tension And Guide Pulley Set One Size (SKU: 27530)
[WARNING] Nie znaleziono line_id dla produktu: Shimano Rd-m5120 Sgs Tension And Guide Pulley Set One Size
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (wzorzec): numer="11", ulica="VIA CLEMENTE ANDREATTA"
[INFO] 🏙️ Znaleziono miasto: "GARDOLO"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "402-0257806"
[INFO] 📊 Wynik końcowy: imię="TIZIANO", nazwisko="GIANNI", ulica="VIA CLEMENTE ANDREATTA", numer="11", miasto="GARDOLO", kod="38121", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "3358715821"
[DEBUG] Numer telefonu z Amazona: "3358715821"
[DEBUG] Sformatowany numer telefonu: "+393358715821"
[DEBUG] Używam numeru telefonu ze scrapingu: +393358715821
[INFO] Finalny numer telefonu dla zamówienia: +393358715821
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (wzorzec): numer="11", ulica="VIA CLEMENTE ANDREATTA"
[INFO] 🏙️ Znaleziono miasto: "GARDOLO"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 303-5133556-2597965

### Niezgodności
- **ulica**: Amazon=`Alter Damm 20a` vs Sellasist=`Alter Damm` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: BUCHWEIZEN NICHT VERBRANNT BIO 5 kg - HORECA
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="20a", ulica="Alter Damm"
[INFO] 🏙️ Znaleziono miasto: "Loxstedt"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "303-5133556"
[INFO] 📊 Wynik końcowy: imię="Wikowski", nazwisko="Martin", ulica="Alter Damm", numer="20a", miasto="Loxstedt", kod="27612", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+4915168180444"
[DEBUG] Zachowano międzynarodowy numer telefonu: +4915168180444
[DEBUG] Numer telefonu z Amazona: "+4915168180444"
[DEBUG] Sformatowany numer telefonu: "+4915168180444"
[DEBUG] Używam numeru telefonu ze scrapingu: +4915168180444
[INFO] Finalny numer telefonu dla zamówienia: +4915168180444
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="20a", ulica="Alter Damm"
[INFO] 🏙️ Znaleziono miasto: "Loxstedt"
```

---

## Zamówienie 408-2139003-4301949

### Niezgodności
- **telefon**: Amazon=`32485346505` vs Sellasist=`320485346505` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (BE): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Jus de betterave 100% 1000ml EkaMedica
```

### Kluczowe logi
```
[INFO] ✅ Adres belgijski (wzorzec): ulica="Rue des Frênes 4"
[INFO] 🏙️ Znaleziono miasto: "Hamme-Mille"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "408-2139003"
[INFO] 📊 Wynik końcowy: imię="Magus", nazwisko="Consulting SRL", ulica="Rue des Frênes 4", numer="", miasto="Hamme-Mille", kod="1320", kraj="Belgium", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0485346505"
[DEBUG] Numer telefonu z Amazona: "0485346505"
[DEBUG] Sformatowany numer telefonu: "+320485346505"
[DEBUG] Używam numeru telefonu ze scrapingu: +320485346505
[INFO] Finalny numer telefonu dla zamówienia: +320485346505
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres belgijski (wzorzec): ulica="Rue des Frênes 4"
[INFO] 🏙️ Znaleziono miasto: "Hamme-Mille"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 302-9973187-2165918

### Niezgodności
- **ulica**: Amazon=`Otto Keiner Str 70` vs Sellasist=`Otto Keiner Str` ❌
- **telefon**: Amazon=`491629781307` vs Sellasist=`1629781307` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Bom Petisco Sardinen in Olivenöl 120 g - Premium-Qualität aus Portugal - reich an Omega-3 (SKU: 64015)
[WARNING] Nie znaleziono line_id dla produktu: Bom Petisco Sardinen in Olivenöl 120 g - Premium-Qualität aus Portugal - reich an Omega-3
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="70", ulica="Otto Keiner Str"
[INFO] 🏙️ Znaleziono miasto: "Zella-mehlis"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "302-9973187"
[INFO] 📊 Wynik końcowy: imię="Uwe", nazwisko="Scheerschmidt", ulica="Otto Keiner Str", numer="70", miasto="Zella-mehlis", kod="98544", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "01629781307"
[DEBUG] Użyto numeru telefonu bez zmian: 01629781307
[DEBUG] Numer telefonu z Amazona: "01629781307"
[DEBUG] Sformatowany numer telefonu: "01629781307"
[DEBUG] Używam numeru telefonu ze scrapingu: 01629781307
[INFO] Finalny numer telefonu dla zamówienia: 01629781307
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="70", ulica="Otto Keiner Str"
[INFO] 🏙️ Znaleziono miasto: "Zella-mehlis"
```

---

## Zamówienie 206-2877458-9099533

### Niezgodności
- **telefon**: Amazon=`447450558587` vs Sellasist=`4407450558587` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Nie znaleziono line_id dla produktu: Tea for Pancreas BIO (25 x 2 g) - DARY NATURY
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres brytyjski (suffix): ulica="FIRST HOUSE 1 FOUR ELMS ROAD"
[INFO] 🏙️ Znaleziono miasto: "EDENBRIDGE"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "206-2877458"
[INFO] 📊 Wynik końcowy: imię="Parascovia", nazwisko="Diaconu", ulica="FIRST HOUSE 1 FOUR ELMS ROAD", numer="", miasto="EDENBRIDGE", kod="TN8 6AB", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07450558587"
[DEBUG] Numer telefonu z Amazona: "07450558587"
[DEBUG] Sformatowany numer telefonu: "+4407450558587"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407450558587
[INFO] Finalny numer telefonu dla zamówienia: +4407450558587
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] 📞 Finalny telefon dla zamówienia: 206-2877458
[DEBUG] Używam numeru telefonu ze scrapingu: +4407450558587
[DEBUG] Używam numeru telefonu ze scrapingu: +4407450558587
```

---

## Zamówienie 206-4389743-8587533

### Niezgodności
- **miasto**: Amazon=`ALDERSHOT` vs Sellasist=`HIGH STREET` ❌
- **ulica**: Amazon=`239A HIGH STREET` vs Sellasist=`239A` ❌
- **telefon**: Amazon=`447481936022` vs Sellasist=`4407481936022` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Nie znaleziono line_id dla produktu: YOSKINE Okinawa Green Caviar 60+ Day and Night Wrinkle Filling Cream 50 ml
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="239A"
[INFO] 🏙️ Znaleziono miasto: "HIGH STREET"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "206-4389743"
[INFO] 📊 Wynik końcowy: imię="Aleksandra", nazwisko="Kaminska", ulica="239A", numer="", miasto="HIGH STREET", kod="GU11 1TJ", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07481936022"
[DEBUG] Numer telefonu z Amazona: "07481936022"
[DEBUG] Sformatowany numer telefonu: "+4407481936022"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407481936022
[INFO] Finalny numer telefonu dla zamówienia: +4407481936022
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] 📞 Finalny telefon dla zamówienia: 206-4389743
[DEBUG] Używam numeru telefonu ze scrapingu: +4407481936022
[DEBUG] Używam numeru telefonu ze scrapingu: +4407481936022
```

---

## Zamówienie 403-1752134-5175568

### Niezgodności
- **telefon**: Amazon=`33611873010` vs Sellasist=`330611873010` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Jus d'ortie BIO 500 ml - BIO PLANET (SKU: 20973)
[WARNING] Nie znaleziono line_id dla produktu: Jus d'ortie BIO 500 ml - BIO PLANET
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="9, Cité Verdière"
[INFO] 🏙️ Znaleziono miasto: "NEUILLY PLAISANCE"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "403-1752134"
[INFO] 📊 Wynik końcowy: imię="OUDINOT", nazwisko="Béata", ulica="9, Cité Verdière", numer="", miasto="NEUILLY PLAISANCE", kod="93360", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0611873010"
[DEBUG] Numer telefonu z Amazona: "0611873010"
[DEBUG] Sformatowany numer telefonu: "+330611873010"
[DEBUG] Używam numeru telefonu ze scrapingu: +330611873010
[INFO] Finalny numer telefonu dla zamówienia: +330611873010
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="9, Cité Verdière"
[INFO] 🏙️ Znaleziono miasto: "NEUILLY PLAISANCE"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 171-0350106-5737140

### Niezgodności
- **ulica**: Amazon=`Sant Marti` vs Sellasist=`Plaça de la Unió 7-8 Piso 1-2 (NO TOCAR EN PLANTA BAJA)` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Thorne L-Arginine - de Liberación Sostenida para Apoyar la Salud del Corazón, la Producción de Óxido Nítrico, y el Flujo Sanguíneo Óptimo - 120 Cápsulas (SKU: 2284)
[WARNING] Nie znaleziono line_id dla produktu: Thorne L-Arginine - de Liberación Sostenida para Apoyar la Salud del Corazón, la Producción de Óxido Nítrico, y el Flujo Sanguíneo Óptimo - 120 Cápsulas
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="Plaça de la Unió 7-8 Piso 1-2 (NO TOCAR EN PLANTA BAJA)"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Barcelona"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-0350106"
[INFO] 📊 Wynik końcowy: imię="Hector", nazwisko="Bolanos", ulica="Plaça de la Unió 7-8 Piso 1-2 (NO TOCAR EN PLANTA BAJA)", numer="", miasto="Barcelona", kod="08005", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+522225499533"
[DEBUG] Zachowano międzynarodowy numer telefonu: +522225499533
[DEBUG] Numer telefonu z Amazona: "+522225499533"
[DEBUG] Sformatowany numer telefonu: "+522225499533"
[DEBUG] Używam numeru telefonu ze scrapingu: +522225499533
[INFO] Finalny numer telefonu dla zamówienia: +522225499533
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="Plaça de la Unió 7-8 Piso 1-2 (NO TOCAR EN PLANTA BAJA)"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Barcelona"
```

---

## Zamówienie 405-1153440-8707508

### Niezgodności
- **telefon**: Amazon=`33683110821` vs Sellasist=`330683110821` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Sirop de sureau BIO 330 ml - BATOM (SKU: 20554)
[WARNING] Nie znaleziono line_id dla produktu: Sirop de sureau BIO 330 ml - BATOM
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="1461, Avenue de la Gare"
[INFO] 🏙️ Znaleziono miasto: "Saint-Fargeau-Ponthierry"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "405-1153440"
[INFO] 📊 Wynik końcowy: imię="Hervouet", nazwisko="Claude", ulica="1461, Avenue de la Gare", numer="", miasto="Saint-Fargeau-Ponthierry", kod="77310", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0683110821"
[DEBUG] Numer telefonu z Amazona: "0683110821"
[DEBUG] Sformatowany numer telefonu: "+330683110821"
[DEBUG] Używam numeru telefonu ze scrapingu: +330683110821
[INFO] Finalny numer telefonu dla zamówienia: +330683110821
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="1461, Avenue de la Gare"
[INFO] 🏙️ Znaleziono miasto: "Saint-Fargeau-Ponthierry"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 408-0266224-7569961

### Niezgodności
- **ulica**: Amazon=`B32430183` vs Sellasist=`Pz. Alferez Provisional, 2 Entlo. Dcha` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Jugo de remolacha 100% 1000ml EkaMedica (SKU: 7834)
[WARNING] Nie znaleziono line_id dla produktu: Jugo de remolacha 100% 1000ml EkaMedica
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="Pz. Alferez Provisional, 2 Entlo. Dcha"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Ourense"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "408-0266224"
[INFO] 📊 Wynik końcowy: imię="S.L.", nazwisko="Talento ourense Formacion y Servicios", ulica="Pz. Alferez Provisional, 2 Entlo. Dcha", numer="", miasto="Ourense", kod="32003", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "630941047"
[DEBUG] Numer telefonu z Amazona: "630941047"
[DEBUG] Sformatowany numer telefonu: "+34630941047"
[DEBUG] Używam numeru telefonu ze scrapingu: +34630941047
[INFO] Finalny numer telefonu dla zamówienia: +34630941047
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="Pz. Alferez Provisional, 2 Entlo. Dcha"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Ourense"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 171-0415213-3165157

### Niezgodności
- **miasto**: Amazon=`Montceau les Mines` vs Sellasist=`batiment D, appt 7` ❌
- **ulica**: Amazon=`batiment D, appt 7` vs Sellasist=`avenue André Malraux` ❌
- **telefon**: Amazon=`33628501647` vs Sellasist=`330628501647` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: NOW Foods NADH, 10mg - 60 vcaps (SKU: 5051)
[WARNING] Nie znaleziono line_id dla produktu: NOW Foods NADH, 10mg - 60 vcaps
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="14", ulica="avenue André Malraux"
[INFO] 🏙️ Znaleziono miasto: "batiment D, appt 7"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-0415213"
[INFO] 📊 Wynik końcowy: imię="Myriam ou", nazwisko="Fahrettin Ucar", ulica="avenue André Malraux", numer="14", miasto="batiment D, appt 7", kod="71300", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0628501647"
[DEBUG] Numer telefonu z Amazona: "0628501647"
[DEBUG] Sformatowany numer telefonu: "+330628501647"
[DEBUG] Używam numeru telefonu ze scrapingu: +330628501647
[INFO] Finalny numer telefonu dla zamówienia: +330628501647
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="14", ulica="avenue André Malraux"
[INFO] 🏙️ Znaleziono miasto: "batiment D, appt 7"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 304-4629543-8306731

### Niezgodności
- **ulica**: Amazon=`Rennsteig 3` vs Sellasist=`-` ❌
- **telefon**: Amazon=`491633782305` vs Sellasist=`0` ❌

### Warnings
```
[WARNING] ❌ Adres jest INVALID (brak podstawowych danych)
[WARNING] Niepełne dane adresowe – aktualizuję zamówienie jako anulowane: imię=Order, nazwisko=Canceled
[WARNING] ⚠️ Nie znaleziono telefonu po "Phone:"
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Produkt anulowany został dodany do listy produktów (status: Cancelled)
[WARNING] ❌ Adres jest INVALID (brak podstawowych danych)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: EYFEL Schilfrohr-Diffusor, Baumwolle, 120 ml
```

### Kluczowe logi
```
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-4629543"
[WARNING] ❌ Adres jest INVALID (brak podstawowych danych)
[INFO] 📊 Wynik końcowy: imię="", nazwisko="", ulica="", numer="", miasto="", kod="", kraj="", valid=false
[WARNING] Niepełne dane adresowe – aktualizuję zamówienie jako anulowane: imię=Order, nazwisko=Canceled
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[WARNING] ⚠️ Nie znaleziono telefonu po "Phone:"
[DEBUG] Numer telefonu z Amazona: ""
[DEBUG] Sformatowany numer telefonu: ""
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
[INFO] Finalny numer telefonu dla zamówienia: 000000000
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Produkt anulowany został dodany do listy produktów (status: Cancelled)
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-4629543"
```

---

## Zamówienie 404-8957010-6545143

### Niezgodności
- **miasto**: Amazon=`El masnou` vs Sellasist=`Barcelona` ❌
- **ulica**: Amazon=`Carrer gaieta buigas 26 2-A` vs Sellasist=`Carrer gaieta buigas` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Aceite de colza VIRGIN BIO 500 ml - BIO PLANETE (SKU: 21010)
[WARNING] Nie znaleziono line_id dla produktu: Aceite de colza VIRGIN BIO 500 ml - BIO PLANETE
```

### Kluczowe logi
```
[INFO] ✅ Adres hiszpański (wzorzec): numer="26", ulica="Carrer gaieta buigas"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Barcelona"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "404-8957010"
[INFO] 📊 Wynik końcowy: imię="Zhang", nazwisko="wanru", ulica="Carrer gaieta buigas", numer="26", miasto="Barcelona", kod="08320", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+34675522666"
[DEBUG] Zachowano międzynarodowy numer telefonu: +34675522666
[DEBUG] Numer telefonu z Amazona: "+34675522666"
[DEBUG] Sformatowany numer telefonu: "+34675522666"
[DEBUG] Używam numeru telefonu ze scrapingu: +34675522666
[INFO] Finalny numer telefonu dla zamówienia: +34675522666
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres hiszpański (wzorzec): numer="26", ulica="Carrer gaieta buigas"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Barcelona"
```

---

## Zamówienie 408-1730480-5377905

### Niezgodności
- **ulica**: Amazon=`via alessandro Penati 6` vs Sellasist=`via alessandro Penati` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: SHIMANO PARAMANI 105 ST-R7020/GRX ST-RX400/BL-RX60
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (wzorzec): numer="6", ulica="via alessandro Penati"
[INFO] 🏙️ Znaleziono miasto: "Lissone"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "408-1730480"
[INFO] 📊 Wynik końcowy: imię="De", nazwisko="Paola Francesco", ulica="via alessandro Penati", numer="6", miasto="Lissone", kod="20851", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "3357326093"
[DEBUG] Numer telefonu z Amazona: "3357326093"
[DEBUG] Sformatowany numer telefonu: "+393357326093"
[DEBUG] Używam numeru telefonu ze scrapingu: +393357326093
[INFO] Finalny numer telefonu dla zamówienia: +393357326093
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (wzorzec): numer="6", ulica="via alessandro Penati"
[INFO] 🏙️ Znaleziono miasto: "Lissone"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 404-3687561-3879558

### Niezgodności
- **ulica**: Amazon=`22 allée du Valois` vs Sellasist=`allée du Valois` ❌
- **telefon**: Amazon=`33621491751` vs Sellasist=`330621491751` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Nordic Naturals Arctic Cod Liver Oil, 1060mg Lemon - 237 ml. (SKU: 3950)
[WARNING] Nie znaleziono line_id dla produktu: Nordic Naturals Arctic Cod Liver Oil, 1060mg Lemon - 237 ml.
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="22", ulica="allée du Valois"
[INFO] 🏙️ Znaleziono miasto: "Chantilly"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "404-3687561"
[INFO] 📊 Wynik końcowy: imię="Millet", nazwisko="Alain", ulica="allée du Valois", numer="22", miasto="Chantilly", kod="60500", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0621491751"
[DEBUG] Numer telefonu z Amazona: "0621491751"
[DEBUG] Sformatowany numer telefonu: "+330621491751"
[DEBUG] Używam numeru telefonu ze scrapingu: +330621491751
[INFO] Finalny numer telefonu dla zamówienia: +330621491751
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="22", ulica="allée du Valois"
[INFO] 🏙️ Znaleziono miasto: "Chantilly"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 405-8147765-2132336

### Niezgodności
- **ulica**: Amazon=`328 rue Georges Clémenceau` vs Sellasist=`rue Georges Clémenceau` ❌
- **telefon**: Amazon=`33787850918` vs Sellasist=`330787850918` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Huile de graines d'ortie BIO 250 ml - DARY NATURY (SKU: 21626)
[WARNING] Nie znaleziono line_id dla produktu: Huile de graines d'ortie BIO 250 ml - DARY NATURY
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="328", ulica="rue Georges Clémenceau"
[INFO] 🏙️ Znaleziono miasto: "Cours La Ville"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "405-8147765"
[INFO] 📊 Wynik końcowy: imię="Felicia", nazwisko="ADDEA", ulica="rue Georges Clémenceau", numer="328", miasto="Cours La Ville", kod="69470", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0787850918"
[DEBUG] Numer telefonu z Amazona: "0787850918"
[DEBUG] Sformatowany numer telefonu: "+330787850918"
[DEBUG] Używam numeru telefonu ze scrapingu: +330787850918
[INFO] Finalny numer telefonu dla zamówienia: +330787850918
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="328", ulica="rue Georges Clémenceau"
[INFO] 🏙️ Znaleziono miasto: "Cours La Ville"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 407-4689039-7941930

### Niezgodności
- **ulica**: Amazon=`3 résidence de la Bergerie` vs Sellasist=`résidence de la Bergerie` ❌
- **telefon**: Amazon=`33761649541` vs Sellasist=`330761649541` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Treaclemoon Sweet Marsh Gel douche et bain Mauve Cœurs 500 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="3", ulica="résidence de la Bergerie"
[INFO] 🏙️ Znaleziono miasto: "St Martin Du Manoir"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-4689039"
[INFO] 📊 Wynik końcowy: imię="Grout", nazwisko="Pierre", ulica="résidence de la Bergerie", numer="3", miasto="St Martin Du Manoir", kod="76290", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0761649541"
[DEBUG] Numer telefonu z Amazona: "0761649541"
[DEBUG] Sformatowany numer telefonu: "+330761649541"
[DEBUG] Używam numeru telefonu ze scrapingu: +330761649541
[INFO] Finalny numer telefonu dla zamówienia: +330761649541
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="3", ulica="résidence de la Bergerie"
[INFO] 🏙️ Znaleziono miasto: "St Martin Du Manoir"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 171-2434299-7166759

### Niezgodności
- **miasto**: Amazon=`Mungia` vs Sellasist=`Bizkaia` ❌
- **ulica**: Amazon=`Karmelo Etxegarai 17,Polígono Industrial de Billela Piso 1` vs Sellasist=`Karmelo Etxegarai 17,Polígono Industrial de Billela` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Gentle Day - Juego de 30 protectores de calzoncillos con banda de aniones (SKU: 21881)
[WARNING] Nie znaleziono line_id dla produktu: Gentle Day - Juego de 30 protectores de calzoncillos con banda de aniones
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="Karmelo Etxegarai 17,Polígono Industrial de Billela"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Bizkaia"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-2434299"
[INFO] 📊 Wynik końcowy: imię="Estefan", nazwisko="Iglesias", ulica="Karmelo Etxegarai 17,Polígono Industrial de Billela", numer="", miasto="Bizkaia", kod="48100", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+34652451170"
[DEBUG] Zachowano międzynarodowy numer telefonu: +34652451170
[DEBUG] Numer telefonu z Amazona: "+34652451170"
[DEBUG] Sformatowany numer telefonu: "+34652451170"
[DEBUG] Używam numeru telefonu ze scrapingu: +34652451170
[INFO] Finalny numer telefonu dla zamówienia: +34652451170
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="Karmelo Etxegarai 17,Polígono Industrial de Billela"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Bizkaia"
```

---

## Zamówienie 402-0682884-3252363

### Niezgodności
- **telefon**: Amazon=`32498025178` vs Sellasist=`0` ❌

### Warnings
```
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 0498
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (BE): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (BE): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: BioTechUSA TST + GH, orange - 300 g (SKU: 3946)
[WARNING] Nie znaleziono line_id dla produktu: BioTechUSA TST + GH, orange - 300 g
```

### Kluczowe logi
```
[INFO] ✅ Adres belgijski (fallback): ulica="Val du fierain 63"
[INFO] 🏙️ Znaleziono miasto: "Wegnez"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "402-0682884"
[INFO] 📊 Wynik końcowy: imię="Christophe", nazwisko="Heinen", ulica="Val du fierain 63", numer="", miasto="Wegnez", kod="4860", kraj="Belgium", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0498"
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 0498
[DEBUG] Numer telefonu z Amazona: "0498"
[DEBUG] Sformatowany numer telefonu: ""
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
[INFO] Finalny numer telefonu dla zamówienia: 000000000
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres belgijski (fallback): ulica="Val du fierain 63"
[INFO] 🏙️ Znaleziono miasto: "Wegnez"
```

---

## Zamówienie 171-8818874-3613152

### Niezgodności
- **ulica**: Amazon=`302 Rte de la Croix de Miaille` vs Sellasist=`Rte de la Croix de Miaille` ❌
- **telefon**: Amazon=`33652136237` vs Sellasist=`330652136237` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: ALGUES DE LA MER SÉCHÉES - KOMBU BIO 100 g (sac en feuille) - PORTO MUINOS
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="302", ulica="Rte de la Croix de Miaille"
[INFO] 🏙️ Znaleziono miasto: "Escoussans"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-8818874"
[INFO] 📊 Wynik końcowy: imię="Conges", nazwisko="Jean-Bernard", ulica="Rte de la Croix de Miaille", numer="302", miasto="Escoussans", kod="33760", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0652136237"
[DEBUG] Numer telefonu z Amazona: "0652136237"
[DEBUG] Sformatowany numer telefonu: "+330652136237"
[DEBUG] Używam numeru telefonu ze scrapingu: +330652136237
[INFO] Finalny numer telefonu dla zamówienia: +330652136237
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="302", ulica="Rte de la Croix de Miaille"
[INFO] 🏙️ Znaleziono miasto: "Escoussans"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 405-8226783-0274716

### Niezgodności
- **ulica**: Amazon=`Calle Aldea del Fresno 5, apto. 1D 1D` vs Sellasist=`Calle Aldea del Fresno 5, apto. 1D` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: TÉ BLANCO CON FRAMBUESA BIO 34 g (20 x 1,7 g) - CLIPPER (SKU: 35692)
[WARNING] Nie znaleziono line_id dla produktu: TÉ BLANCO CON FRAMBUESA BIO 34 g (20 x 1,7 g) - CLIPPER
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="Calle Aldea del Fresno 5, apto. 1D"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Madrid"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "405-8226783"
[INFO] 📊 Wynik końcowy: imię="Sophie", nazwisko="Loutroukis", ulica="Calle Aldea del Fresno 5, apto. 1D", numer="", miasto="Madrid", kod="28045", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "603961044"
[DEBUG] Numer telefonu z Amazona: "603961044"
[DEBUG] Sformatowany numer telefonu: "+34603961044"
[DEBUG] Używam numeru telefonu ze scrapingu: +34603961044
[INFO] Finalny numer telefonu dla zamówienia: +34603961044
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres brytyjski (fallback): ulica="Calle Aldea del Fresno 5, apto. 1D"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Madrid"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 404-4765645-2114731

### Niezgodności
- **miasto**: Amazon=`Neuilly sur seine` vs Sellasist=`laisser à la gardienne en priorité tel 0668183418` ❌
- **ulica**: Amazon=`laisser à la gardienne en priorité    tel 0668183418` vs Sellasist=`Rue de l&#039;Eglise` ❌
- **telefon**: Amazon=`33685382080` vs Sellasist=`330685382080` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Produit de cuisson sans gluten, hot dog, hamburger, bagel, petits pains, pita, fitbrötchen sans lactose de blé (Pita (190 g : 2 x 95 g)) (SKU: 22061)
[WARNING] Nie znaleziono line_id dla produktu: Produit de cuisson sans gluten, hot dog, hamburger, bagel, petits pains, pita, fitbrötchen sans lactose de blé (Pita (190 g : 2 x 95 g))
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="23", ulica="Rue de l'Eglise"
[INFO] 🏙️ Znaleziono miasto: "laisser à la gardienne en priorité tel 0668183418"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "404-4765645"
[INFO] 📊 Wynik końcowy: imię="aurore", nazwisko="puig", ulica="Rue de l'Eglise", numer="23", miasto="laisser à la gardienne en priorité tel 0668183418", kod="92200", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0685382080"
[DEBUG] Numer telefonu z Amazona: "0685382080"
[DEBUG] Sformatowany numer telefonu: "+330685382080"
[DEBUG] Używam numeru telefonu ze scrapingu: +330685382080
[INFO] Finalny numer telefonu dla zamówienia: +330685382080
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="23", ulica="Rue de l'Eglise"
[INFO] 🏙️ Znaleziono miasto: "laisser à la gardienne en priorité tel 0668183418"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 204-0256017-5181919

### Niezgodności
- **telefon**: Amazon=`447798634370` vs Sellasist=`4407798634370` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Joy Day Probiotic Drink Concentrate Mint | 500 ml | 600 Million Live Probiotics Bacteria | 15 Health Strain with Lactobacillus Acidophilus, Lactobacillus Rhamnosus Advanced Multi Bacteria (SKU: 63588)
[WARNING] Nie znaleziono line_id dla produktu: Joy Day Probiotic Drink Concentrate Mint | 500 ml | 600 Million Live Probiotics Bacteria | 15 Health Strain with Lactobacillus Acidophilus, Lactobacillus Rhamnosus Advanced Multi Bacteria
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="9 The Ridings"
[INFO] 🏙️ Znaleziono miasto: "LONDON"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "204-0256017"
[INFO] 📊 Wynik końcowy: imię="Agnieszka", nazwisko="Banasiak", ulica="9 The Ridings", numer="", miasto="LONDON", kod="W5 3BT", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07798634370"
[DEBUG] Numer telefonu z Amazona: "07798634370"
[DEBUG] Sformatowany numer telefonu: "+4407798634370"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407798634370
[INFO] Finalny numer telefonu dla zamówienia: +4407798634370
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Joy Day Probiotic Drink Concentrate Mint | 500 ml | 600 Million Live Probiotics Bacteria | 15 Health Strain with Lactobacillus Acidophilus, Lactobacillus Rhamnosus Advanced Multi Bacteria (SKU: 63588)
[INFO] 📞 Finalny telefon dla zamówienia: 204-0256017
[DEBUG] Używam numeru telefonu ze scrapingu: +4407798634370
```

---

## Zamówienie 408-1797989-8746715

### Niezgodności
- **telefon**: Amazon=`33695659835` vs Sellasist=`330695659835` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Filtre À Thé Papier Bio Non Blanchi Compostable 100 Pièces | Sachet De Thé À Remplir Bio Pour Thé Naturel - Sachet Thé Jetable Bio - Sachets Thé Vide Bio (SKU: 35364_2)
[WARNING] Nie znaleziono line_id dla produktu: Filtre À Thé Papier Bio Non Blanchi Compostable 100 Pièces | Sachet De Thé À Remplir Bio Pour Thé Naturel - Sachet Thé Jetable Bio - Sachets Thé Vide Bio
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="21, Rue de la Garenne"
[INFO] 🏙️ Znaleziono miasto: "Montgeron"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "408-1797989"
[INFO] 📊 Wynik końcowy: imię="Hughes", nazwisko="Sanchez Romero", ulica="21, Rue de la Garenne", numer="", miasto="Montgeron", kod="91230", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0695659835"
[DEBUG] Numer telefonu z Amazona: "0695659835"
[DEBUG] Sformatowany numer telefonu: "+330695659835"
[DEBUG] Używam numeru telefonu ze scrapingu: +330695659835
[INFO] Finalny numer telefonu dla zamówienia: +330695659835
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="21, Rue de la Garenne"
[INFO] 🏙️ Znaleziono miasto: "Montgeron"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 407-4523518-0224317

### Niezgodności
- **ulica**: Amazon=`Via Caduti di Nassiriya, 4` vs Sellasist=`Via Caduti di Nassiriya,` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Shimano FC-M582, Vite Fissaggio Pedivella, Nero
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (wzorzec): numer="4", ulica="Via Caduti di Nassiriya,"
[INFO] 🏙️ Znaleziono miasto: "Bonate Sopra"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-4523518"
[INFO] 📊 Wynik końcowy: imię="Luca", nazwisko="Brigatti", ulica="Via Caduti di Nassiriya,", numer="4", miasto="Bonate Sopra", kod="24040", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "3498114789"
[DEBUG] Numer telefonu z Amazona: "3498114789"
[DEBUG] Sformatowany numer telefonu: "+393498114789"
[DEBUG] Używam numeru telefonu ze scrapingu: +393498114789
[INFO] Finalny numer telefonu dla zamówienia: +393498114789
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (wzorzec): numer="4", ulica="Via Caduti di Nassiriya,"
[INFO] 🏙️ Znaleziono miasto: "Bonate Sopra"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 406-2828064-2567559

### Niezgodności
- **ulica**: Amazon=`55 Rue de la Liberté` vs Sellasist=`Rue de la Liberté` ❌
- **telefon**: Amazon=`33768786452` vs Sellasist=`330768786452` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Bamboo Silica Beauty - 90 Vcaps (SKU: 5132)
[WARNING] Nie znaleziono line_id dla produktu: Bamboo Silica Beauty - 90 Vcaps
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="55", ulica="Rue de la Liberté"
[INFO] 🏙️ Znaleziono miasto: "Corbeil Essonnes"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "406-2828064"
[INFO] 📊 Wynik końcowy: imię="Melissa", nazwisko="MADJI", ulica="Rue de la Liberté", numer="55", miasto="Corbeil Essonnes", kod="91100", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0768786452"
[DEBUG] Numer telefonu z Amazona: "0768786452"
[DEBUG] Sformatowany numer telefonu: "+330768786452"
[DEBUG] Używam numeru telefonu ze scrapingu: +330768786452
[INFO] Finalny numer telefonu dla zamówienia: +330768786452
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="55", ulica="Rue de la Liberté"
[INFO] 🏙️ Znaleziono miasto: "Corbeil Essonnes"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 305-0332651-6548348

### Niezgodności
- **ulica**: Amazon=`Beethoven Str 8` vs Sellasist=`Beethoven Str` ❌
- **telefon**: Amazon=`491712154273` vs Sellasist=`1712154273` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: BIOMAGIC HAIR COLOR - 77/21 ICED CARAMEL (SKU: 21090)
[WARNING] Nie znaleziono line_id dla produktu: BIOMAGIC HAIR COLOR - 77/21 ICED CARAMEL
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="8", ulica="Beethoven Str"
[INFO] 🏙️ Znaleziono miasto: "Rheinbrohl"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "305-0332651"
[INFO] 📊 Wynik końcowy: imię="Sevinc", nazwisko="Ceviz", ulica="Beethoven Str", numer="8", miasto="Rheinbrohl", kod="56598", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "01712154273"
[DEBUG] Użyto numeru telefonu bez zmian: 01712154273
[DEBUG] Numer telefonu z Amazona: "01712154273"
[DEBUG] Sformatowany numer telefonu: "01712154273"
[DEBUG] Używam numeru telefonu ze scrapingu: 01712154273
[INFO] Finalny numer telefonu dla zamówienia: 01712154273
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="8", ulica="Beethoven Str"
[INFO] 🏙️ Znaleziono miasto: "Rheinbrohl"
```

---

## Zamówienie 406-4162351-5898769

### Niezgodności
- **miasto**: Amazon=`San José de sa Talaia` vs Sellasist=`Ibiza (Baleares)` ❌
- **ulica**: Amazon=`Urb. Vadella Pueblo, Piso 29` vs Sellasist=`Carrer Calvià n. 25 Cala Vedella` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Targroch Riso Selvatico Confezione da 1 x 1000g - Zizania Aquatica - Per Insalate e Piatti Vegani (SKU: 19853)
[WARNING] Nie znaleziono line_id dla produktu: Targroch Riso Selvatico Confezione da 1 x 1000g - Zizania Aquatica - Per Insalate e Piatti Vegani
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="Carrer Calvià n. 25 Cala Vedella"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Ibiza (Baleares)"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "406-4162351"
[INFO] 📊 Wynik końcowy: imię="LAURA", nazwisko="BARZAGHI", ulica="Carrer Calvià n. 25 Cala Vedella", numer="", miasto="Ibiza (Baleares)", kod="07830", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0034664748562"
[DEBUG] Numer telefonu z Amazona: "0034664748562"
[DEBUG] Sformatowany numer telefonu: "+34664748562"
[DEBUG] Używam numeru telefonu ze scrapingu: +34664748562
[INFO] Finalny numer telefonu dla zamówienia: +34664748562
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="Carrer Calvià n. 25 Cala Vedella"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Ibiza (Baleares)"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 206-5400875-4882767

### Niezgodności
- **miasto**: Amazon=`WISBECH` vs Sellasist=`MARSHLAND ST JAMES` ❌
- **ulica**: Amazon=`MARSHLAND ST JAMES` vs Sellasist=`17 WALTON ROAD` ❌
- **telefon**: Amazon=`447725623315` vs Sellasist=`4407725623315` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Rose Petal JAM BIO 180 g - DARY NATURY (SKU: 21597)
[WARNING] Nie znaleziono line_id dla produktu: Rose Petal JAM BIO 180 g - DARY NATURY
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres brytyjski (suffix): ulica="17 WALTON ROAD"
[INFO] 🏙️ Znaleziono miasto: "MARSHLAND ST JAMES"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "206-5400875"
[INFO] 📊 Wynik końcowy: imię="Renata", nazwisko="White", ulica="17 WALTON ROAD", numer="", miasto="MARSHLAND ST JAMES", kod="PE14 8DP", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07725623315"
[DEBUG] Numer telefonu z Amazona: "07725623315"
[DEBUG] Sformatowany numer telefonu: "+4407725623315"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407725623315
[INFO] Finalny numer telefonu dla zamówienia: +4407725623315
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Rose Petal JAM BIO 180 g - DARY NATURY (SKU: 21597)
[INFO] 📞 Finalny telefon dla zamówienia: 206-5400875
[DEBUG] Używam numeru telefonu ze scrapingu: +4407725623315
```

---

## Zamówienie 028-1596623-1205164

### Niezgodności
- **ulica**: Amazon=`Großer Kamp 8` vs Sellasist=`Großer Kamp` ❌
- **telefon**: Amazon=`49387442030` vs Sellasist=`387442030` ❌

### Warnings
```
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Schwarzer Tee SRI LANKA FAIR TRADE BIO (100 x 1,8 g) - OXFAM (SKU: 36261)
[WARNING] Usunięto duplikat produktu: FAIR TRADE ORGANIC BIO Tee in Säcken 2x20 Stück 2er Pack (2x 36g) Teebeutel OXFAM (Schwarzer Tee) (SKU: 22678)
[WARNING] Nie znaleziono line_id dla produktu: Schwarzer Tee SRI LANKA FAIR TRADE BIO (100 x 1,8 g) - OXFAM
[WARNING] Nie znaleziono line_id dla produktu: FAIR TRADE ORGANIC BIO Tee in Säcken 2x20 Stück 2er Pack (2x 36g) Teebeutel OXFAM (Schwarzer Tee)
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="8", ulica="Großer Kamp"
[INFO] 🏙️ Znaleziono miasto: "Ludwigslust"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-1596623"
[INFO] 📊 Wynik końcowy: imię="Autoteile", nazwisko="M&M Verwaltung GmbH", ulica="Großer Kamp", numer="8", miasto="Ludwigslust", kod="19288", kraj="Germany", valid=true
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="8", ulica="Großer Kamp"
[INFO] 🏙️ Znaleziono miasto: "Ludwigslust"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-1596623"
[INFO] 📊 Wynik końcowy: imię="Autoteile", nazwisko="M&M Verwaltung GmbH", ulica="Großer Kamp", numer="8", miasto="Ludwigslust", kod="19288", kraj="Germany", valid=true
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="8", ulica="Großer Kamp"
[INFO] 🏙️ Znaleziono miasto: "Ludwigslust"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 404-0970730-8735554

### Niezgodności
- **miasto**: Amazon=`Chantonnay` vs Sellasist=`Puybelliard` ❌
- **ulica**: Amazon=`Puybelliard` vs Sellasist=`9, Rue de l&#039;Abbaye` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Sirop de curcuma et gingembre 500 ml POLSKA RÓŻA (SKU: 35191)
[WARNING] Nie znaleziono line_id dla produktu: Sirop de curcuma et gingembre 500 ml POLSKA RÓŻA
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="9, Rue de l'Abbaye"
[INFO] 🏙️ Znaleziono miasto: "Puybelliard"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "404-0970730"
[INFO] 📊 Wynik końcowy: imię="Séverin", nazwisko="Marie Céline", ulica="9, Rue de l'Abbaye", numer="", miasto="Puybelliard", kod="85110", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+33778877379"
[DEBUG] Zachowano międzynarodowy numer telefonu: +33778877379
[DEBUG] Numer telefonu z Amazona: "+33778877379"
[DEBUG] Sformatowany numer telefonu: "+33778877379"
[DEBUG] Używam numeru telefonu ze scrapingu: +33778877379
[INFO] Finalny numer telefonu dla zamówienia: +33778877379
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="9, Rue de l'Abbaye"
[INFO] 🏙️ Znaleziono miasto: "Puybelliard"
```

---

## Zamówienie 302-1925199-8125167

### Niezgodności
- **ulica**: Amazon=`Graffstrasse 11` vs Sellasist=`Graffstrasse` ❌
- **telefon**: Amazon=`491794893134` vs Sellasist=`1794893134` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: SHIMANO PRO Display Steps E7000/8000 Zubehör, Erwachsene, Unisex, mehrfarbig (mehrfarbig)
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="11", ulica="Graffstrasse"
[INFO] 🏙️ Znaleziono miasto: "Leipzig"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "302-1925199"
[INFO] 📊 Wynik końcowy: imię="Rene", nazwisko="Bluemel", ulica="Graffstrasse", numer="11", miasto="Leipzig", kod="04179", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "01794893134"
[DEBUG] Użyto numeru telefonu bez zmian: 01794893134
[DEBUG] Numer telefonu z Amazona: "01794893134"
[DEBUG] Sformatowany numer telefonu: "01794893134"
[DEBUG] Używam numeru telefonu ze scrapingu: 01794893134
[INFO] Finalny numer telefonu dla zamówienia: 01794893134
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="11", ulica="Graffstrasse"
[INFO] 🏙️ Znaleziono miasto: "Leipzig"
```

---

## Zamówienie 402-1457398-6563565

### Niezgodności
- **ulica**: Amazon=`13 RUE PHILIPPE LE HUREPEL` vs Sellasist=`RUE PHILIPPE LE HUREPEL` ❌
- **telefon**: Amazon=`33615037131` vs Sellasist=`330615037131` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: ProBiota Bifido - 60 acid-resistant vcaps (SKU: 2054)
[WARNING] Nie znaleziono line_id dla produktu: ProBiota Bifido - 60 acid-resistant vcaps
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="13", ulica="RUE PHILIPPE LE HUREPEL"
[INFO] 🏙️ Znaleziono miasto: "DAMMARTIN EN GOELE"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "402-1457398"
[INFO] 📊 Wynik końcowy: imię="JAAFAR", nazwisko="CHRISTINE", ulica="RUE PHILIPPE LE HUREPEL", numer="13", miasto="DAMMARTIN EN GOELE", kod="77230", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0615037131"
[DEBUG] Numer telefonu z Amazona: "0615037131"
[DEBUG] Sformatowany numer telefonu: "+330615037131"
[DEBUG] Używam numeru telefonu ze scrapingu: +330615037131
[INFO] Finalny numer telefonu dla zamówienia: +330615037131
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="13", ulica="RUE PHILIPPE LE HUREPEL"
[INFO] 🏙️ Znaleziono miasto: "DAMMARTIN EN GOELE"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 406-7128667-9317920

### Niezgodności
- **ulica**: Amazon=`Corso Roma 191` vs Sellasist=`Corso Roma` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Thorne Super EPA - Integratore di Acidi Grassi Omega-3 EPA 425 mg e DHA 270 mg - Supporta la Salute di Cuore, Cervello, Apparato Cardiovascolare, Articolazioni e Pelle - 90 Capsule in Gel (SKU: 14459)
[WARNING] Nie znaleziono line_id dla produktu: Thorne Super EPA - Integratore di Acidi Grassi Omega-3 EPA 425 mg e DHA 270 mg - Supporta la Salute di Cuore, Cervello, Apparato Cardiovascolare, Articolazioni e Pelle - 90 Capsule in Gel
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (wzorzec): numer="191", ulica="Corso Roma"
[INFO] 🏙️ Znaleziono miasto: "Gravellona Toce"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "406-7128667"
[INFO] 📊 Wynik końcowy: imię="Ilenia", nazwisko="Cardoletti ( B&B Serramenti Snc )", ulica="Corso Roma", numer="191", miasto="Gravellona Toce", kod="28883", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "3487461878"
[DEBUG] Numer telefonu z Amazona: "3487461878"
[DEBUG] Sformatowany numer telefonu: "+393487461878"
[DEBUG] Używam numeru telefonu ze scrapingu: +393487461878
[INFO] Finalny numer telefonu dla zamówienia: +393487461878
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (wzorzec): numer="191", ulica="Corso Roma"
[INFO] 🏙️ Znaleziono miasto: "Gravellona Toce"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 302-0655069-5481955

### Niezgodności
- **telefon**: Amazon=`493720482351` vs Sellasist=`3720482351` ❌

### Warnings
```
[WARNING] ⚠️ Linia "4 Am Bornwiesenteich" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Linia "4 Am Bornwiesenteich" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: La Rive In Flames Women Eau De parfum 90 ml
```

### Kluczowe logi
```
[WARNING] ⚠️ Linia "4 Am Bornwiesenteich" nie wygląda na niemiecką ulicę - pomijam
[INFO] ✅ Adres nieprzetworzony: ulica="4 Am Bornwiesenteich"
[INFO] 🏙️ Znaleziono miasto: "Lichtenstein"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "302-0655069"
[INFO] 📊 Wynik końcowy: imię="Karl-Heinz", nazwisko="Flohr", ulica="4 Am Bornwiesenteich", numer="", miasto="Lichtenstein", kod="09350", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "03720482351"
[DEBUG] Użyto numeru telefonu bez zmian: 03720482351
[DEBUG] Numer telefonu z Amazona: "03720482351"
[DEBUG] Sformatowany numer telefonu: "03720482351"
[DEBUG] Używam numeru telefonu ze scrapingu: 03720482351
[INFO] Finalny numer telefonu dla zamówienia: 03720482351
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Linia "4 Am Bornwiesenteich" nie wygląda na niemiecką ulicę - pomijam
```

---

## Zamówienie 407-8809774-7893157

### Niezgodności
- **ulica**: Amazon=`Avinguda republica argentina 2 PR 2` vs Sellasist=`Avinguda republica argentina` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Thorne Research - Vitamin D/K2 Liquid (Metered Dispenser) - Dietary Supplement with Vitamins D3 and K2 to Support Healthy Bones and Muscles - 1 fluid ounce (30 mL) (SKU: 1353)
[WARNING] Nie znaleziono line_id dla produktu: Thorne Research - Vitamin D/K2 Liquid (Metered Dispenser) - Dietary Supplement with Vitamins D3 and K2 to Support Healthy Bones and Muscles - 1 fluid ounce (30 mL)
```

### Kluczowe logi
```
[INFO] ✅ Adres hiszpański (wzorzec): numer="2", ulica="Avinguda republica argentina"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Barcelona"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-8809774"
[INFO] 📊 Wynik końcowy: imię="Josman", nazwisko="Perez Ruiz", ulica="Avinguda republica argentina", numer="2", miasto="Barcelona", kod="08023", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+34699966966"
[DEBUG] Zachowano międzynarodowy numer telefonu: +34699966966
[DEBUG] Numer telefonu z Amazona: "+34699966966"
[DEBUG] Sformatowany numer telefonu: "+34699966966"
[DEBUG] Używam numeru telefonu ze scrapingu: +34699966966
[INFO] Finalny numer telefonu dla zamówienia: +34699966966
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres hiszpański (wzorzec): numer="2", ulica="Avinguda republica argentina"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Barcelona"
```

---

## Zamówienie 406-9621199-6791519

### Niezgodności
- **ulica**: Amazon=`16 Rue Saint-Jean` vs Sellasist=`Rue Saint-Jean` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Filtre À Thé Papier Bio Non Blanchi Compostable 100 Pièces | Sachet De Thé À Remplir Bio Pour Thé Naturel - Sachet Thé Jetable Bio - Sachets Thé Vide Bio (SKU: 35364_2)
[WARNING] Nie znaleziono line_id dla produktu: Filtre À Thé Papier Bio Non Blanchi Compostable 100 Pièces | Sachet De Thé À Remplir Bio Pour Thé Naturel - Sachet Thé Jetable Bio - Sachets Thé Vide Bio
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="16", ulica="Rue Saint-Jean"
[INFO] 🏙️ Znaleziono miasto: "Rochefort sur loire"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "406-9621199"
[INFO] 📊 Wynik końcowy: imię="Cécile", nazwisko="Bagna", ulica="Rue Saint-Jean", numer="16", miasto="Rochefort sur loire", kod="49190", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+33687981690"
[DEBUG] Zachowano międzynarodowy numer telefonu: +33687981690
[DEBUG] Numer telefonu z Amazona: "+33687981690"
[DEBUG] Sformatowany numer telefonu: "+33687981690"
[DEBUG] Używam numeru telefonu ze scrapingu: +33687981690
[INFO] Finalny numer telefonu dla zamówienia: +33687981690
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="16", ulica="Rue Saint-Jean"
[INFO] 🏙️ Znaleziono miasto: "Rochefort sur loire"
```

---

## Zamówienie 303-3552715-5436311

### Niezgodności
- **ulica**: Amazon=`Am Dreschplatz 14` vs Sellasist=`Am Dreschplatz` ❌
- **telefon**: Amazon=`4950271772` vs Sellasist=`49050271772` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Tee mit Sand-Strohblume BIO 25 g - DARY NATURY (SKU: 21538)
[WARNING] Nie znaleziono line_id dla produktu: Tee mit Sand-Strohblume BIO 25 g - DARY NATURY
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="14", ulica="Am Dreschplatz"
[INFO] 🏙️ Znaleziono miasto: "Linsburg"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "303-3552715"
[INFO] 📊 Wynik końcowy: imię="alexander", nazwisko="Baron", ulica="Am Dreschplatz", numer="14", miasto="Linsburg", kod="31636", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "050271772"
[DEBUG] Numer telefonu z Amazona: "050271772"
[DEBUG] Sformatowany numer telefonu: "+49050271772"
[DEBUG] Używam numeru telefonu ze scrapingu: +49050271772
[INFO] Finalny numer telefonu dla zamówienia: +49050271772
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="14", ulica="Am Dreschplatz"
[INFO] 🏙️ Znaleziono miasto: "Linsburg"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 405-7518718-7609123

### Niezgodności
- **telefon**: Amazon=`` vs Sellasist=`31642744460` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Lumineo Mesotherapie gezichtsserum gezichtsserum dames serum (anti-edheid)
```

### Kluczowe logi
```
[INFO] ✅ Adres holenderski (standard): ulica="Oud Lemiers 6"
[INFO] 🏙️ Znaleziono miasto: "Lemiers"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "405-7518718"
[INFO] 📊 Wynik końcowy: imię="Melania", nazwisko="Gil Rodriguez", ulica="Oud Lemiers 6", numer="", miasto="Lemiers", kod="", kraj="Netherlands", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0031-642744460"
[DEBUG] Numer telefonu z Amazona: "0031-642744460"
[DEBUG] Sformatowany numer telefonu: "+31642744460"
[DEBUG] Używam numeru telefonu ze scrapingu: +31642744460
[INFO] Finalny numer telefonu dla zamówienia: +31642744460
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres holenderski (standard): ulica="Oud Lemiers 6"
[INFO] 🏙️ Znaleziono miasto: "Lemiers"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 405-7448139-2413944

### Niezgodności
- **miasto**: Amazon=`Málaga` vs Sellasist=`Malaga` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: 50 mil millones, 50 Caps Veggie probióticos-10, - Now Foods (SKU: 6773)
[WARNING] Nie znaleziono line_id dla produktu: 50 mil millones, 50 Caps Veggie probióticos-10, - Now Foods
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="Calle Párroco Don Juan Estrada Castro 2, 7ºA"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Malaga"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "405-7448139"
[INFO] 📊 Wynik końcowy: imię="José", nazwisko="Ruiz Pérez", ulica="Calle Párroco Don Juan Estrada Castro 2, 7ºA", numer="", miasto="Malaga", kod="29014", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "625981778"
[DEBUG] Numer telefonu z Amazona: "625981778"
[DEBUG] Sformatowany numer telefonu: "+34625981778"
[DEBUG] Używam numeru telefonu ze scrapingu: +34625981778
[INFO] Finalny numer telefonu dla zamówienia: +34625981778
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="Calle Párroco Don Juan Estrada Castro 2, 7ºA"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Malaga"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 405-0247605-5803572

### Niezgodności
- **ulica**: Amazon=`76 rue de la croix vilcoq` vs Sellasist=`rue de la croix vilcoq` ❌
- **telefon**: Amazon=`33662054365` vs Sellasist=`330662054365` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Probiotique-10, 50 milliards, 50 capsules végétales - Now Foods (SKU: 6773)
[WARNING] Nie znaleziono line_id dla produktu: Probiotique-10, 50 milliards, 50 capsules végétales - Now Foods
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="76", ulica="rue de la croix vilcoq"
[INFO] 🏙️ Znaleziono miasto: "jouy le moutier"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "405-0247605"
[INFO] 📊 Wynik końcowy: imię="Vilson", nazwisko="Marie", ulica="rue de la croix vilcoq", numer="76", miasto="jouy le moutier", kod="95280", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0662054365"
[DEBUG] Numer telefonu z Amazona: "0662054365"
[DEBUG] Sformatowany numer telefonu: "+330662054365"
[DEBUG] Używam numeru telefonu ze scrapingu: +330662054365
[INFO] Finalny numer telefonu dla zamówienia: +330662054365
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="76", ulica="rue de la croix vilcoq"
[INFO] 🏙️ Znaleziono miasto: "jouy le moutier"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 303-9951297-0779565

### Niezgodności
- **ulica**: Amazon=`Albert- Schweiger Straße 6` vs Sellasist=`Albert- Schweiger Straße` ❌
- **telefon**: Amazon=`436764171074` vs Sellasist=`6764171074` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Sylveco Mundwasser, 500 ml
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="6", ulica="Albert- Schweiger Straße"
[INFO] 🏙️ Znaleziono miasto: "Salzburg"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "303-9951297"
[INFO] 📊 Wynik końcowy: imię="Bernadette", nazwisko="Plattner", ulica="Albert- Schweiger Straße", numer="6", miasto="Salzburg", kod="5020", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "06764171074"
[DEBUG] Użyto numeru telefonu bez zmian: 06764171074
[DEBUG] Numer telefonu z Amazona: "06764171074"
[DEBUG] Sformatowany numer telefonu: "06764171074"
[DEBUG] Używam numeru telefonu ze scrapingu: 06764171074
[INFO] Finalny numer telefonu dla zamówienia: 06764171074
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="6", ulica="Albert- Schweiger Straße"
[INFO] 🏙️ Znaleziono miasto: "Salzburg"
```

---

## Zamówienie 203-6136625-3747561

### Niezgodności
- **telefon**: Amazon=`441884252300` vs Sellasist=`1884252300` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Nie znaleziono line_id dla produktu: Blase Body Spray, 75 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres brytyjski (suffix): ulica="1 Uplowman Road"
[INFO] 🏙️ Znaleziono miasto: "TIVERTON"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "203-6136625"
[INFO] 📊 Wynik końcowy: imię="Terry", nazwisko="sowden", ulica="1 Uplowman Road", numer="", miasto="TIVERTON", kod="EX16 4LU", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "01884252300"
[DEBUG] Użyto numeru telefonu bez zmian: 01884252300
[DEBUG] Numer telefonu z Amazona: "01884252300"
[DEBUG] Sformatowany numer telefonu: "01884252300"
[DEBUG] Używam numeru telefonu ze scrapingu: 01884252300
[INFO] Finalny numer telefonu dla zamówienia: 01884252300
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] 📞 Finalny telefon dla zamówienia: 203-6136625
[DEBUG] Używam numeru telefonu ze scrapingu: 01884252300
```

---

## Zamówienie 202-8341197-9413923

### Niezgodności
- **ulica**: Amazon=`FLAT 22 BEWICK APARTMENTS 105 PERRYFIELD WAY` vs Sellasist=`PERRYFIELD WAY` ❌
- **telefon**: Amazon=`447516115350` vs Sellasist=`4407516115350` ❌

### Warnings
```
[WARNING] ⚠️ Wykryto linię mieszkalną w UK: "FLAT 22 BEWICK APARTMENTS 105" - szukam ulicy w dalszych liniach
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Tea for Pancreas BIO (25 x 2 g) - DARY NATURY (SKU: 35675)
[WARNING] Nie znaleziono line_id dla produktu: Tea for Pancreas BIO (25 x 2 g) - DARY NATURY
```

### Kluczowe logi
```
[WARNING] ⚠️ Wykryto linię mieszkalną w UK: "FLAT 22 BEWICK APARTMENTS 105" - szukam ulicy w dalszych liniach
[INFO] 🏙️ Znaleziono miasto: "LONDON"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "202-8341197"
[INFO] 📊 Wynik końcowy: imię="Theocharis", nazwisko="", ulica="PERRYFIELD WAY", numer="", miasto="LONDON", kod="NW9 7FD", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07516115350"
[DEBUG] Numer telefonu z Amazona: "07516115350"
[DEBUG] Sformatowany numer telefonu: "+4407516115350"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407516115350
[INFO] Finalny numer telefonu dla zamówienia: +4407516115350
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Tea for Pancreas BIO (25 x 2 g) - DARY NATURY (SKU: 35675)
[INFO] 📞 Finalny telefon dla zamówienia: 202-8341197
[DEBUG] Używam numeru telefonu ze scrapingu: +4407516115350
```

---

## Zamówienie 407-4527746-1713108

### Niezgodności
- **ulica**: Amazon=`Via wolkenstein 30` vs Sellasist=`Via wolkenstein` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: SEEKING HEALTH Probiota Histaminx 10 Billion CFU - Integratore Probiotico A Basso Contenuto di Istamina per L'intestino - Comfort Digestivo per L'intolleranza All'istamina - Vegano - 60 Capsule (SKU: 2498)
[WARNING] Nie znaleziono line_id dla produktu: SEEKING HEALTH Probiota Histaminx 10 Billion CFU - Integratore Probiotico A Basso Contenuto di Istamina per L'intestino - Comfort Digestivo per L'intolleranza All'istamina - Vegano - 60 Capsule
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (wzorzec): numer="30", ulica="Via wolkenstein"
[INFO] 🏙️ Znaleziono miasto: "Merano"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-4527746"
[INFO] 📊 Wynik końcowy: imię="Emanuela", nazwisko="Gjorgjievska", ulica="Via wolkenstein", numer="30", miasto="Merano", kod="39012", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+393208246110"
[DEBUG] Zachowano międzynarodowy numer telefonu: +393208246110
[DEBUG] Numer telefonu z Amazona: "+393208246110"
[DEBUG] Sformatowany numer telefonu: "+393208246110"
[DEBUG] Używam numeru telefonu ze scrapingu: +393208246110
[INFO] Finalny numer telefonu dla zamówienia: +393208246110
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (wzorzec): numer="30", ulica="Via wolkenstein"
[INFO] 🏙️ Znaleziono miasto: "Merano"
```

---

## Zamówienie 406-5063331-4922703

### Niezgodności
- **ulica**: Amazon=`1 impasse de vaux` vs Sellasist=`impasse de vaux` ❌
- **telefon**: Amazon=`33683103538` vs Sellasist=`330683103538` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Sirop de coings BIO 270 ml - DARY NATURY (SKU: 21650)
[WARNING] Nie znaleziono line_id dla produktu: Sirop de coings BIO 270 ml - DARY NATURY
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="1", ulica="impasse de vaux"
[INFO] 🏙️ Znaleziono miasto: "TRUCY L ORGUEILLEUX"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "406-5063331"
[INFO] 📊 Wynik końcowy: imię="ragougnot", nazwisko="patrick", ulica="impasse de vaux", numer="1", miasto="TRUCY L ORGUEILLEUX", kod="58460", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0683103538"
[DEBUG] Numer telefonu z Amazona: "0683103538"
[DEBUG] Sformatowany numer telefonu: "+330683103538"
[DEBUG] Używam numeru telefonu ze scrapingu: +330683103538
[INFO] Finalny numer telefonu dla zamówienia: +330683103538
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="1", ulica="impasse de vaux"
[INFO] 🏙️ Znaleziono miasto: "TRUCY L ORGUEILLEUX"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 202-0870609-6986759

### Niezgodności
- **telefon**: Amazon=`442072353161` vs Sellasist=`2072353161` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Seeking Health Dietary Supplement Optimal Focus - Multivitamin Supplement with B Vitamins, B12 and L-5MTHF - High Dose of Vitamins - for Memory, Cognitive Functions, Concentration - 90 Capsules (SKU: 9092_FBM)
[WARNING] Nie znaleziono line_id dla produktu: Seeking Health Dietary Supplement Optimal Focus - Multivitamin Supplement with B Vitamins, B12 and L-5MTHF - High Dose of Vitamins - for Memory, Cognitive Functions, Concentration - 90 Capsules
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres brytyjski (suffix): ulica="FLAT B 7 UPPER BELGRAVE STREET"
[INFO] 🏙️ Znaleziono miasto: "LONDON"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "202-0870609"
[INFO] 📊 Wynik końcowy: imię="Sonia", nazwisko="Shalam", ulica="FLAT B 7 UPPER BELGRAVE STREET", numer="", miasto="LONDON", kod="SW1X 8BD", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "02072353161"
[DEBUG] Użyto numeru telefonu bez zmian: 02072353161
[DEBUG] Numer telefonu z Amazona: "02072353161"
[DEBUG] Sformatowany numer telefonu: "02072353161"
[DEBUG] Używam numeru telefonu ze scrapingu: 02072353161
[INFO] Finalny numer telefonu dla zamówienia: 02072353161
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Seeking Health Dietary Supplement Optimal Focus - Multivitamin Supplement with B Vitamins, B12 and L-5MTHF - High Dose of Vitamins - for Memory, Cognitive Functions, Concentration - 90 Capsules (SKU: 9092\_FBM)
[INFO] 📞 Finalny telefon dla zamówienia: 202-0870609
```

---

## Zamówienie 203-0165990-1671543

### Niezgodności
- **telefon**: Amazon=`447858482040` vs Sellasist=`4407858482040` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ UK VAT 0% PROMOCJA: Cena ujemna, ustawiam na 0
[WARNING] Usunięto duplikat produktu: Zwergenwiese Sour Cherries Pitted in Glass 360 g (1) (SKU: 64152)
[WARNING] Nie znaleziono line_id dla produktu: Zwergenwiese Sour Cherries Pitted in Glass 360 g (1)
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="44 beckets view"
[INFO] 🏙️ Znaleziono miasto: "Northampton"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "203-0165990"
[INFO] 📊 Wynik końcowy: imię="Roland", nazwisko="Marosi", ulica="44 beckets view", numer="", miasto="Northampton", kod="NN1 5NJ", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07858482040"
[DEBUG] Numer telefonu z Amazona: "07858482040"
[DEBUG] Sformatowany numer telefonu: "+4407858482040"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407858482040
[INFO] Finalny numer telefonu dla zamówienia: +4407858482040
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ UK VAT 0% PROMOCJA: Cena ujemna, ustawiam na 0
[WARNING] Usunięto duplikat produktu: Zwergenwiese Sour Cherries Pitted in Glass 360 g (1) (SKU: 64152)
[INFO] 📞 Finalny telefon dla zamówienia: 203-0165990
```

---

## Zamówienie 302-5335613-3531543

### Niezgodności
- **miasto**: Amazon=`Karben` vs Sellasist=`40` ❌
- **ulica**: Amazon=`Bornwiesenweg 40` vs Sellasist=`Bornwiesenweg` ❌
- **telefon**: Amazon=`4915776221853` vs Sellasist=`15776221853` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Natürliches Steinsalz aus Klodawa, fein 1 kg (SKU: 34307)
[WARNING] Nie znaleziono line_id dla produktu: Natürliches Steinsalz aus Klodawa, fein 1 kg
```

### Kluczowe logi
```
[INFO] ✅ Adres niemiecki (tylko ulica): ulica="Bornwiesenweg"
[INFO] 🏙️ Znaleziono miasto: "40"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "302-5335613"
[INFO] 📊 Wynik końcowy: imię="lukasz", nazwisko="czerebak", ulica="Bornwiesenweg", numer="", miasto="40", kod="61184", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "15776221853"
[DEBUG] Użyto numeru telefonu bez zmian: 15776221853
[DEBUG] Numer telefonu z Amazona: "15776221853"
[DEBUG] Sformatowany numer telefonu: "15776221853"
[DEBUG] Używam numeru telefonu ze scrapingu: 15776221853
[INFO] Finalny numer telefonu dla zamówienia: 15776221853
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres niemiecki (tylko ulica): ulica="Bornwiesenweg"
[INFO] 🏙️ Znaleziono miasto: "40"
```

---

## Zamówienie 028-4884062-1221951

### Niezgodności
- **ulica**: Amazon=`Habichtstr. 4` vs Sellasist=`Habichtstr.` ❌
- **telefon**: Amazon=`498765938742` vs Sellasist=`8765938742` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: EkaMedica Artischockensaft - Artischocke, 1000 ml, 1 Flasche, 1 Stück (SKU: 7837)
[WARNING] Nie znaleziono line_id dla produktu: EkaMedica Artischockensaft - Artischocke, 1000 ml, 1 Flasche, 1 Stück
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="4", ulica="Habichtstr."
[INFO] 🏙️ Znaleziono miasto: "Bruckberg"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-4884062"
[INFO] 📊 Wynik końcowy: imię="Julian", nazwisko="König", ulica="Habichtstr.", numer="4", miasto="Bruckberg", kod="84079", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "08765938742"
[DEBUG] Użyto numeru telefonu bez zmian: 08765938742
[DEBUG] Numer telefonu z Amazona: "08765938742"
[DEBUG] Sformatowany numer telefonu: "08765938742"
[DEBUG] Używam numeru telefonu ze scrapingu: 08765938742
[INFO] Finalny numer telefonu dla zamówienia: 08765938742
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="4", ulica="Habichtstr."
[INFO] 🏙️ Znaleziono miasto: "Bruckberg"
```

---

## Zamówienie 302-8890016-9100336

### Niezgodności
- **ulica**: Amazon=`Wieselrieth 7` vs Sellasist=`Wieselrieth` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: adidas UEFA Champions League Goal Edition After Shave, langanhaltend frischer, grüner Fougère Duft mit natürlichen ätherischen Ölen für Männer, 100ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="7", ulica="Wieselrieth"
[INFO] 🏙️ Znaleziono miasto: "Leuchtenberg"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "302-8890016"
[INFO] 📊 Wynik końcowy: imię="Sabine", nazwisko="Hölzl", ulica="Wieselrieth", numer="7", miasto="Leuchtenberg", kod="92705", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "4916098257918"
[DEBUG] Numer telefonu z Amazona: "4916098257918"
[DEBUG] Sformatowany numer telefonu: "+4916098257918"
[DEBUG] Używam numeru telefonu ze scrapingu: +4916098257918
[INFO] Finalny numer telefonu dla zamówienia: +4916098257918
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="7", ulica="Wieselrieth"
[INFO] 🏙️ Znaleziono miasto: "Leuchtenberg"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 408-9863576-8264337

### Niezgodności
- **ulica**: Amazon=`43 Bis Chemin des Epinettes` vs Sellasist=`Chemin des Epinettes` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: PS 100-60 softgels (SKU: 4302)
[WARNING] Nie znaleziono line_id dla produktu: PS 100-60 softgels
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="43 Bis", ulica="Chemin des Epinettes"
[INFO] 🏙️ Znaleziono miasto: "Sathonay-Village"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "408-9863576"
[INFO] 📊 Wynik końcowy: imię="Schmitt", nazwisko="Steve", ulica="Chemin des Epinettes", numer="43 Bis", miasto="Sathonay-Village", kod="69580", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+33679612882"
[DEBUG] Zachowano międzynarodowy numer telefonu: +33679612882
[DEBUG] Numer telefonu z Amazona: "+33679612882"
[DEBUG] Sformatowany numer telefonu: "+33679612882"
[DEBUG] Używam numeru telefonu ze scrapingu: +33679612882
[INFO] Finalny numer telefonu dla zamówienia: +33679612882
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="43 Bis", ulica="Chemin des Epinettes"
[INFO] 🏙️ Znaleziono miasto: "Sathonay-Village"
```

---

## Zamówienie 303-6565220-1813149

### Niezgodności
- **miasto**: Amazon=`München` vs Sellasist=`Saherrstraße 52` ❌
- **ulica**: Amazon=`Saherrstraße 52 Saherrstraße 52` vs Sellasist=`Saherrstraße` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Ziaja Ziegenmilch-Haarspülung, stärkend, mit Keratin, 200 ml (SKU: 41411)
[WARNING] Nie znaleziono line_id dla produktu: Ziaja Ziegenmilch-Haarspülung, stärkend, mit Keratin, 200 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="52", ulica="Saherrstraße"
[INFO] 🏙️ Znaleziono miasto: "Saherrstraße 52"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "303-6565220"
[INFO] 📊 Wynik końcowy: imię="Lovric", nazwisko="", ulica="Saherrstraße", numer="52", miasto="Saherrstraße 52", kod="80689", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "498915733280514"
[DEBUG] Numer telefonu z Amazona: "498915733280514"
[DEBUG] Sformatowany numer telefonu: "+498915733280514"
[DEBUG] Używam numeru telefonu ze scrapingu: +498915733280514
[INFO] Finalny numer telefonu dla zamówienia: +498915733280514
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="52", ulica="Saherrstraße"
[INFO] 🏙️ Znaleziono miasto: "Saherrstraße 52"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 305-9755436-8489927

### Niezgodności
- **ulica**: Amazon=`Grünauerstraße 42` vs Sellasist=`Grünauerstraße` ❌
- **telefon**: Amazon=`436767258070` vs Sellasist=`6767258070` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Sanct Bernhard Handrücken-Pflegecreme mit Collagen, Carotin 100 ml (SKU: 13635)
[WARNING] Nie znaleziono line_id dla produktu: Sanct Bernhard Handrücken-Pflegecreme mit Collagen, Carotin 100 ml
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="42", ulica="Grünauerstraße"
[INFO] 🏙️ Znaleziono miasto: "Ried in der Riedmark"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "305-9755436"
[INFO] 📊 Wynik końcowy: imię="Isabella", nazwisko="Mühlehner", ulica="Grünauerstraße", numer="42", miasto="Ried in der Riedmark", kod="4312", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "06767258070"
[DEBUG] Użyto numeru telefonu bez zmian: 06767258070
[DEBUG] Numer telefonu z Amazona: "06767258070"
[DEBUG] Sformatowany numer telefonu: "06767258070"
[DEBUG] Używam numeru telefonu ze scrapingu: 06767258070
[INFO] Finalny numer telefonu dla zamówienia: 06767258070
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="42", ulica="Grünauerstraße"
[INFO] 🏙️ Znaleziono miasto: "Ried in der Riedmark"
```

---

## Zamówienie 403-8323546-6456317

### Niezgodności
- **telefon**: Amazon=`33689358188` vs Sellasist=`330689358188` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Thorne Super EPA - Supplément d'Acides Gras Oméga-3 EPA 425 mg et DHA 270 mg - Pour la Santé du Cœur, du Cerveau, du Système Cardiovasculaire, des Articulations et de la Peau - 90 Gélules (SKU: 14459)
[WARNING] Nie znaleziono line_id dla produktu: Thorne Super EPA - Supplément d'Acides Gras Oméga-3 EPA 425 mg et DHA 270 mg - Pour la Santé du Cœur, du Cerveau, du Système Cardiovasculaire, des Articulations et de la Peau - 90 Gélules
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="4, Rue de la Pierre-aux-Fées"
[INFO] 🏙️ Znaleziono miasto: "Cepoy"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "403-8323546"
[INFO] 📊 Wynik końcowy: imię="duenas", nazwisko="", ulica="4, Rue de la Pierre-aux-Fées", numer="", miasto="Cepoy", kod="45120", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0689358188"
[DEBUG] Numer telefonu z Amazona: "0689358188"
[DEBUG] Sformatowany numer telefonu: "+330689358188"
[DEBUG] Używam numeru telefonu ze scrapingu: +330689358188
[INFO] Finalny numer telefonu dla zamówienia: +330689358188
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="4, Rue de la Pierre-aux-Fées"
[INFO] 🏙️ Znaleziono miasto: "Cepoy"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 026-2941438-0930737

### Niezgodności
- **ulica**: Amazon=`Flat 1 183 Isledon Road` vs Sellasist=`Isledon Road` ❌
- **telefon**: Amazon=`447521245782` vs Sellasist=`4407521245782` ❌

### Warnings
```
[WARNING] ⚠️ Wykryto linię mieszkalną w UK: "Flat 1 183" - szukam ulicy w dalszych liniach
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: MuscleTech NitroTech 100% Whey Gold Protein Powder, Build Muscle Mass, Whey Isolate Protein Powder & Peptides, Protein Shake For Men & Women, 5.7g BCAA, 28 Servings, 908g, Salted Caramel (SKU: 10786)
[WARNING] Nie znaleziono line_id dla produktu: MuscleTech NitroTech 100% Whey Gold Protein Powder, Build Muscle Mass, Whey Isolate Protein Powder & Peptides, Protein Shake For Men & Women, 5.7g BCAA, 28 Servings, 908g, Salted Caramel
```

### Kluczowe logi
```
[WARNING] ⚠️ Wykryto linię mieszkalną w UK: "Flat 1 183" - szukam ulicy w dalszych liniach
[INFO] 🏙️ Znaleziono miasto: "London"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "026-2941438"
[INFO] 📊 Wynik końcowy: imię="Raza", nazwisko="", ulica="Isledon Road", numer="", miasto="London", kod="N77JR", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07521245782"
[DEBUG] Numer telefonu z Amazona: "07521245782"
[DEBUG] Sformatowany numer telefonu: "+4407521245782"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407521245782
[INFO] Finalny numer telefonu dla zamówienia: +4407521245782
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: MuscleTech NitroTech 100% Whey Gold Protein Powder, Build Muscle Mass, Whey Isolate Protein Powder & Peptides, Protein Shake For Men & Women, 5.7g BCAA, 28 Servings, 908g, Salted Caramel (SKU: 10786)
[INFO] 📞 Finalny telefon dla zamówienia: 026-2941438
[DEBUG] Używam numeru telefonu ze scrapingu: +4407521245782
```

---

## Zamówienie 303-4973200-6078752

### Niezgodności
- **miasto**: Amazon=`Kreuzau` vs Sellasist=`74` ❌
- **ulica**: Amazon=`Apollinarisstraße 74` vs Sellasist=`Apollinarisstraße` ❌
- **telefon**: Amazon=`4917631668527` vs Sellasist=`17631668527` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Now Foods Magnesiumcitrat, 400 mg - 60 Vcaps
```

### Kluczowe logi
```
[INFO] ✅ Adres niemiecki (tylko ulica): ulica="Apollinarisstraße"
[INFO] 🏙️ Znaleziono miasto: "74"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "303-4973200"
[INFO] 📊 Wynik końcowy: imię="Bircan", nazwisko="Schwab", ulica="Apollinarisstraße", numer="", miasto="74", kod="52372", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "017631668527"
[DEBUG] Użyto numeru telefonu bez zmian: 017631668527
[DEBUG] Numer telefonu z Amazona: "017631668527"
[DEBUG] Sformatowany numer telefonu: "017631668527"
[DEBUG] Używam numeru telefonu ze scrapingu: 017631668527
[INFO] Finalny numer telefonu dla zamówienia: 017631668527
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres niemiecki (tylko ulica): ulica="Apollinarisstraße"
[INFO] 🏙️ Znaleziono miasto: "74"
```

---

## Zamówienie 028-4773515-2012336

### Niezgodności
- **ulica**: Amazon=`Winkl 90` vs Sellasist=`Winkl` ❌

### Warnings
```
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 0043
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Saft aus Großfrüchtige Moosbeere BIO 250 ml - VIANDS (SKU: 23328)
[WARNING] Nie znaleziono line_id dla produktu: Saft aus Großfrüchtige Moosbeere BIO 250 ml - VIANDS
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="90", ulica="Winkl"
[INFO] 🏙️ Znaleziono miasto: "Heiligenblut"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-4773515"
[INFO] 📊 Wynik końcowy: imię="Angelika", nazwisko="Lagler", ulica="Winkl", numer="90", miasto="Heiligenblut", kod="9844", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0043"
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 0043
[DEBUG] Numer telefonu z Amazona: "0043"
[DEBUG] Sformatowany numer telefonu: ""
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
[INFO] Finalny numer telefonu dla zamówienia: 000000000
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="90", ulica="Winkl"
[INFO] 🏙️ Znaleziono miasto: "Heiligenblut"
```

---

## Zamówienie 305-6821953-8139537

### Niezgodności
- **ulica**: Amazon=`Im Hölzle 1` vs Sellasist=`Im Hölzle` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: La Rive Grey Point Deodorant Spray 150 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="1", ulica="Im Hölzle"
[INFO] 🏙️ Znaleziono miasto: "Forchtenberg"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "305-6821953"
[INFO] 📊 Wynik końcowy: imię="Julia", nazwisko="Reichert", ulica="Im Hölzle", numer="1", miasto="Forchtenberg", kod="74670", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+491709295081"
[DEBUG] Zachowano międzynarodowy numer telefonu: +491709295081
[DEBUG] Numer telefonu z Amazona: "+491709295081"
[DEBUG] Sformatowany numer telefonu: "+491709295081"
[DEBUG] Używam numeru telefonu ze scrapingu: +491709295081
[INFO] Finalny numer telefonu dla zamówienia: +491709295081
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="1", ulica="Im Hölzle"
[INFO] 🏙️ Znaleziono miasto: "Forchtenberg"
```

---

## Zamówienie 306-7875199-2125925

### Niezgodności
- **ulica**: Amazon=`Spielbergerstrasse 11A` vs Sellasist=`Spielbergerstrasse` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: LA RIVE IRONSTONE MAN 100 ml EDT Parfum Herren Herrenduft Neu Original
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="11A", ulica="Spielbergerstrasse"
[INFO] 🏙️ Znaleziono miasto: "Spielberg"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "306-7875199"
[INFO] 📊 Wynik końcowy: imię="Josef", nazwisko="Rieger", ulica="Spielbergerstrasse", numer="11A", miasto="Spielberg", kod="8724", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+436649338674"
[DEBUG] Zachowano międzynarodowy numer telefonu: +436649338674
[DEBUG] Numer telefonu z Amazona: "+436649338674"
[DEBUG] Sformatowany numer telefonu: "+436649338674"
[DEBUG] Używam numeru telefonu ze scrapingu: +436649338674
[INFO] Finalny numer telefonu dla zamówienia: +436649338674
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="11A", ulica="Spielbergerstrasse"
[INFO] 🏙️ Znaleziono miasto: "Spielberg"
```

---

## Zamówienie 407-3497674-1298739

### Niezgodności
- **ulica**: Amazon=`40 rue raspail` vs Sellasist=`rue raspail` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: BetterYou Dlux 4000 Spray - 15ml - Pack of 1 (SKU: 12783)
[WARNING] Nie znaleziono line_id dla produktu: BetterYou Dlux 4000 Spray - 15ml - Pack of 1
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="40", ulica="rue raspail"
[INFO] 🏙️ Znaleziono miasto: "Alfortville"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-3497674"
[INFO] 📊 Wynik końcowy: imię="MEFTOUH", nazwisko="lounja", ulica="rue raspail", numer="40", miasto="Alfortville", kod="94140", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+33668200444"
[DEBUG] Zachowano międzynarodowy numer telefonu: +33668200444
[DEBUG] Numer telefonu z Amazona: "+33668200444"
[DEBUG] Sformatowany numer telefonu: "+33668200444"
[DEBUG] Używam numeru telefonu ze scrapingu: +33668200444
[INFO] Finalny numer telefonu dla zamówienia: +33668200444
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="40", ulica="rue raspail"
[INFO] 🏙️ Znaleziono miasto: "Alfortville"
```

---

## Zamówienie 028-8186590-1821905

### Niezgodności
- **ulica**: Amazon=`Dorfstraße 35` vs Sellasist=`Dorfstraße` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Captain America Kinder Eau de Toilette 30 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="35", ulica="Dorfstraße"
[INFO] 🏙️ Znaleziono miasto: "Eisenhüttenstadt"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-8186590"
[INFO] 📊 Wynik końcowy: imię="Denny", nazwisko="Jänchen", ulica="Dorfstraße", numer="35", miasto="Eisenhüttenstadt", kod="15890", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+4915234363278"
[DEBUG] Zachowano międzynarodowy numer telefonu: +4915234363278
[DEBUG] Numer telefonu z Amazona: "+4915234363278"
[DEBUG] Sformatowany numer telefonu: "+4915234363278"
[DEBUG] Używam numeru telefonu ze scrapingu: +4915234363278
[INFO] Finalny numer telefonu dla zamówienia: +4915234363278
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="35", ulica="Dorfstraße"
[INFO] 🏙️ Znaleziono miasto: "Eisenhüttenstadt"
```

---

## Zamówienie 405-9688517-6819555

### Niezgodności
- **ulica**: Amazon=`32 rue Louis Frappart` vs Sellasist=`rue Louis Frappart` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: JUS DE GINGEMBRE BIO 330 ml - BATOM (SKU: 20536)
[WARNING] Nie znaleziono line_id dla produktu: JUS DE GINGEMBRE BIO 330 ml - BATOM
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="32", ulica="rue Louis Frappart"
[INFO] 🏙️ Znaleziono miasto: "Aulnay sous bois"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "405-9688517"
[INFO] 📊 Wynik końcowy: imię="Veronique", nazwisko="goodarzi", ulica="rue Louis Frappart", numer="32", miasto="Aulnay sous bois", kod="93600", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+33650250666"
[DEBUG] Zachowano międzynarodowy numer telefonu: +33650250666
[DEBUG] Numer telefonu z Amazona: "+33650250666"
[DEBUG] Sformatowany numer telefonu: "+33650250666"
[DEBUG] Używam numeru telefonu ze scrapingu: +33650250666
[INFO] Finalny numer telefonu dla zamówienia: +33650250666
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="32", ulica="rue Louis Frappart"
[INFO] 🏙️ Znaleziono miasto: "Aulnay sous bois"
```

---

## Zamówienie 302-6588685-4521920

### Niezgodności
- **telefon**: Amazon=`4552923450` vs Sellasist=`0` ❌

### Warnings
```
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 52923450
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Activlab HGH Night - 60 Kapseln, Arginin, Gaba, Lysin - vor dem Schlafengehen, Konzentration, Regeneration, Reduktion von Fettgewebe - Steigerung der Kraft und schneller Zuwachs an Muskelmasse
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="Jernbanegade 43 1th"
[INFO] 🏙️ Znaleziono miasto: "Aabenraa"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "302-6588685"
[INFO] 📊 Wynik końcowy: imię="Tonni", nazwisko="Buchholdt", ulica="Jernbanegade 43 1th", numer="", miasto="Aabenraa", kod="6200", kraj="Denmark", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "52923450"
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 52923450
[DEBUG] Numer telefonu z Amazona: "52923450"
[DEBUG] Sformatowany numer telefonu: ""
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
[INFO] Finalny numer telefonu dla zamówienia: 000000000
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="Jernbanegade 43 1th"
[INFO] 🏙️ Znaleziono miasto: "Aabenraa"
```

---

## Zamówienie 406-0291224-8221960

### Niezgodności
- **telefon**: Amazon=`33758458583` vs Sellasist=`330758458583` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: BioTechUSA Citrulline Malate poudre | Acide aminé essentiel pour les athlètes | Sans sucre | Sans gluten | 300 g | Citron Vert (SKU: 9714)
[WARNING] Nie znaleziono line_id dla produktu: BioTechUSA Citrulline Malate poudre | Acide aminé essentiel pour les athlètes | Sans sucre | Sans gluten | 300 g | Citron Vert
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="14, Boulevard Carnot"
[INFO] 🏙️ Znaleziono miasto: "Angers"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "406-0291224"
[INFO] 📊 Wynik końcowy: imię="Charafeddinaboufakher", nazwisko="", ulica="14, Boulevard Carnot", numer="", miasto="Angers", kod="49100", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0758458583"
[DEBUG] Numer telefonu z Amazona: "0758458583"
[DEBUG] Sformatowany numer telefonu: "+330758458583"
[DEBUG] Używam numeru telefonu ze scrapingu: +330758458583
[INFO] Finalny numer telefonu dla zamówienia: +330758458583
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="14, Boulevard Carnot"
[INFO] 🏙️ Znaleziono miasto: "Angers"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 303-6917759-3848323

### Niezgodności
- **ulica**: Amazon=`Brunnengarten 53 Top 10` vs Sellasist=`Brunnengarten 53 Top` ❌
- **telefon**: Amazon=`` vs Sellasist=`436645425690` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Lactibiane H-Py 42 Cap Pileje (SKU: 2150)
[WARNING] Nie znaleziono line_id dla produktu: Lactibiane H-Py 42 Cap Pileje
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="10", ulica="Brunnengarten 53 Top"
[INFO] 🏙️ Znaleziono miasto: "Ludesch"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "303-6917759"
[INFO] 📊 Wynik końcowy: imię="Juliana", nazwisko="Junkes Colusso", ulica="Brunnengarten 53 Top", numer="10", miasto="Ludesch", kod="6713", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "43-6645425690"
[DEBUG] Numer telefonu z Amazona: "43-6645425690"
[DEBUG] Sformatowany numer telefonu: "+436645425690"
[DEBUG] Używam numeru telefonu ze scrapingu: +436645425690
[INFO] Finalny numer telefonu dla zamówienia: +436645425690
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="10", ulica="Brunnengarten 53 Top"
[INFO] 🏙️ Znaleziono miasto: "Ludesch"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 404-6526839-4824313

### Niezgodności
- **miasto**: Amazon=`Issy-les-Moulineaux` vs Sellasist=`BAT A2` ❌
- **ulica**: Amazon=`90 Rue du Gouv Gén Félix Eboué BAT A2` vs Sellasist=`Rue du Gouv Gén Félix Eboué` ❌
- **telefon**: Amazon=`33645698026` vs Sellasist=`330645698026` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: BetterYou Dlux 4000 Spray - 15ml - Pack of 1 (SKU: 12783)
[WARNING] Nie znaleziono line_id dla produktu: BetterYou Dlux 4000 Spray - 15ml - Pack of 1
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="90", ulica="Rue du Gouv Gén Félix Eboué"
[INFO] 🏙️ Znaleziono miasto: "BAT A2"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "404-6526839"
[INFO] 📊 Wynik końcowy: imię="vincent", nazwisko="david", ulica="Rue du Gouv Gén Félix Eboué", numer="90", miasto="BAT A2", kod="92130", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0645698026"
[DEBUG] Numer telefonu z Amazona: "0645698026"
[DEBUG] Sformatowany numer telefonu: "+330645698026"
[DEBUG] Używam numeru telefonu ze scrapingu: +330645698026
[INFO] Finalny numer telefonu dla zamówienia: +330645698026
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="90", ulica="Rue du Gouv Gén Félix Eboué"
[INFO] 🏙️ Znaleziono miasto: "BAT A2"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 171-4413515-6369161

### Niezgodności
- **miasto**: Amazon=`STOCKHOLM` vs Sellasist=`LGH 1402` ❌
- **ulica**: Amazon=`LGH 1402` vs Sellasist=`Värtavägen` ❌
- **telefon**: Amazon=`46727322828` vs Sellasist=`460727322828` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (SE): 25% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (SE): 25% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: TOMAT JUICE BIO 300 ml - BIO FOOD (SKU: 20668)
[WARNING] Nie znaleziono line_id dla produktu: TOMAT JUICE BIO 300 ml - BIO FOOD
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="16A", ulica="Värtavägen"
[INFO] 🏙️ Znaleziono miasto: "LGH 1402"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-4413515"
[INFO] 📊 Wynik końcowy: imię="Christopher", nazwisko="March", ulica="Värtavägen", numer="16A", miasto="LGH 1402", kod="11524", kraj="Sweden", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0727322828"
[DEBUG] Numer telefonu z Amazona: "0727322828"
[DEBUG] Sformatowany numer telefonu: "+460727322828"
[DEBUG] Używam numeru telefonu ze scrapingu: +460727322828
[INFO] Finalny numer telefonu dla zamówienia: +460727322828
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="16A", ulica="Värtavägen"
[INFO] 🏙️ Znaleziono miasto: "LGH 1402"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 028-2492488-9274729

### Niezgodności
- **ulica**: Amazon=`Mozartstraße 10` vs Sellasist=`Mozartstraße` ❌
- **telefon**: Amazon=`496732961703` vs Sellasist=`6732961703` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: TEE EMPFOHLEN FÜR DIABETES BIO 150 g - DARY NATURY (SKU: 21501)
[WARNING] Nie znaleziono line_id dla produktu: TEE EMPFOHLEN FÜR DIABETES BIO 150 g - DARY NATURY
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="10", ulica="Mozartstraße"
[INFO] 🏙️ Znaleziono miasto: "Wallertheim"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-2492488"
[INFO] 📊 Wynik końcowy: imię="Ilona", nazwisko="Hoffmann", ulica="Mozartstraße", numer="10", miasto="Wallertheim", kod="55578", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "06732961703"
[DEBUG] Użyto numeru telefonu bez zmian: 06732961703
[DEBUG] Numer telefonu z Amazona: "06732961703"
[DEBUG] Sformatowany numer telefonu: "06732961703"
[DEBUG] Używam numeru telefonu ze scrapingu: 06732961703
[INFO] Finalny numer telefonu dla zamówienia: 06732961703
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="10", ulica="Mozartstraße"
[INFO] 🏙️ Znaleziono miasto: "Wallertheim"
```

---

## Zamówienie 305-0339121-5057941

### Niezgodności
- **ulica**: Amazon=`Drosselweg 2e` vs Sellasist=`Drosselweg` ❌
- **telefon**: Amazon=`4915121208957` vs Sellasist=`15121208957` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: L-Cystein L-Cystein 500 mg 100 Kapseln Gemüsekappen Aliness (SKU: 3247)
[WARNING] Nie znaleziono line_id dla produktu: L-Cystein L-Cystein 500 mg 100 Kapseln Gemüsekappen Aliness
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="2e", ulica="Drosselweg"
[INFO] 🏙️ Znaleziono miasto: "Königs Wusterhausen"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "305-0339121"
[INFO] 📊 Wynik końcowy: imię="Nicole", nazwisko="Maaß", ulica="Drosselweg", numer="2e", miasto="Königs Wusterhausen", kod="15712", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "015121208957"
[DEBUG] Użyto numeru telefonu bez zmian: 015121208957
[DEBUG] Numer telefonu z Amazona: "015121208957"
[DEBUG] Sformatowany numer telefonu: "015121208957"
[DEBUG] Używam numeru telefonu ze scrapingu: 015121208957
[INFO] Finalny numer telefonu dla zamówienia: 015121208957
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="2e", ulica="Drosselweg"
[INFO] 🏙️ Znaleziono miasto: "Königs Wusterhausen"
```

---

## Zamówienie 406-7874700-3550706

### Niezgodności
- **ulica**: Amazon=`9 RUE JACQUES PREVERT` vs Sellasist=`RUE JACQUES PREVERT` ❌
- **telefon**: Amazon=`33679976413` vs Sellasist=`330679976413` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: BIOMAGIC Coloration capillaire - 55/07 - Chocolat intense - Marron (SKU: 35711)
[WARNING] Nie znaleziono line_id dla produktu: BIOMAGIC Coloration capillaire - 55/07 - Chocolat intense - Marron
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="9", ulica="RUE JACQUES PREVERT"
[INFO] 🏙️ Znaleziono miasto: "damprichard"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "406-7874700"
[INFO] 📊 Wynik końcowy: imię="binet", nazwisko="laetitia", ulica="RUE JACQUES PREVERT", numer="9", miasto="damprichard", kod="25450", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0679976413"
[DEBUG] Numer telefonu z Amazona: "0679976413"
[DEBUG] Sformatowany numer telefonu: "+330679976413"
[DEBUG] Używam numeru telefonu ze scrapingu: +330679976413
[INFO] Finalny numer telefonu dla zamówienia: +330679976413
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="9", ulica="RUE JACQUES PREVERT"
[INFO] 🏙️ Znaleziono miasto: "damprichard"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 306-6886720-2157139

### Niezgodności
- **ulica**: Amazon=`Reneauldstraße 14` vs Sellasist=`Reneauldstraße` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Vegetarische Kohlrouladen mit natürlichem Reis GLUTENFREI 480 g - PRIMAVIKA (SKU: 22808)
[WARNING] Nie znaleziono line_id dla produktu: Vegetarische Kohlrouladen mit natürlichem Reis GLUTENFREI 480 g - PRIMAVIKA
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="14", ulica="Reneauldstraße"
[INFO] 🏙️ Znaleziono miasto: "Saarlouis"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "306-6886720"
[INFO] 📊 Wynik końcowy: imię="Julian", nazwisko="Ferring", ulica="Reneauldstraße", numer="14", miasto="Saarlouis", kod="66740", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+4916097250016"
[DEBUG] Zachowano międzynarodowy numer telefonu: +4916097250016
[DEBUG] Numer telefonu z Amazona: "+4916097250016"
[DEBUG] Sformatowany numer telefonu: "+4916097250016"
[DEBUG] Używam numeru telefonu ze scrapingu: +4916097250016
[INFO] Finalny numer telefonu dla zamówienia: +4916097250016
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="14", ulica="Reneauldstraße"
[INFO] 🏙️ Znaleziono miasto: "Saarlouis"
```

---

## Zamówienie 171-8175209-1290736

### Niezgodności
- **miasto**: Amazon=`CAPACCIO PAESTUM` vs Sellasist=`Aesse srl` ❌
- **ulica**: Amazon=`Aesse srl` vs Sellasist=`strada statale 18 km87,3` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: BioTechUSA 100% Creatine Monohydrate | Creatina di grado farmaceutico | Micronizzata | Vegan | Senza glutine, confezione classica a contenitore in plastica, 500 g, Non aromatizzato (SKU: 1542)
[WARNING] Nie znaleziono line_id dla produktu: BioTechUSA 100% Creatine Monohydrate | Creatina di grado farmaceutico | Micronizzata | Vegan | Senza glutine, confezione classica a contenitore in plastica, 500 g, Non aromatizzato
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (fallback): ulica="strada statale 18 km87,3"
[INFO] 🏙️ Znaleziono miasto: "Aesse srl"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-8175209"
[INFO] 📊 Wynik końcowy: imię="Giovanni", nazwisko="gorga", ulica="strada statale 18 km87,3", numer="", miasto="Aesse srl", kod="84047", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "3517659444"
[DEBUG] Numer telefonu z Amazona: "3517659444"
[DEBUG] Sformatowany numer telefonu: "+393517659444"
[DEBUG] Używam numeru telefonu ze scrapingu: +393517659444
[INFO] Finalny numer telefonu dla zamówienia: +393517659444
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (fallback): ulica="strada statale 18 km87,3"
[INFO] 🏙️ Znaleziono miasto: "Aesse srl"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 205-2886387-6331551

### Niezgodności
- **miasto**: Amazon=`MILTON KEYNES` vs Sellasist=`LANGCLIFFE DRIVE HEELANDS` ❌
- **ulica**: Amazon=`75 LANGCLIFFE DRIVE HEELANDS` vs Sellasist=`75` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Claresa Soft Easy Builder Gel Builder Milky Pink Milky Pink 12g (SKU: 45851)
[WARNING] Nie znaleziono line_id dla produktu: Claresa Soft Easy Builder Gel Builder Milky Pink Milky Pink 12g
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="75"
[INFO] 🏙️ Znaleziono miasto: "LANGCLIFFE DRIVE HEELANDS"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "205-2886387"
[INFO] 📊 Wynik końcowy: imię="Magdalena", nazwisko="Czakon", ulica="75", numer="", miasto="LANGCLIFFE DRIVE HEELANDS", kod="MK13 7LB", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+447518071380"
[DEBUG] Zachowano międzynarodowy numer telefonu: +447518071380
[DEBUG] Numer telefonu z Amazona: "+447518071380"
[DEBUG] Sformatowany numer telefonu: "+447518071380"
[DEBUG] Używam numeru telefonu ze scrapingu: +447518071380
[INFO] Finalny numer telefonu dla zamówienia: +447518071380
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Claresa Soft Easy Builder Gel Builder Milky Pink Milky Pink 12g (SKU: 45851)
[INFO] 📞 Finalny telefon dla zamówienia: 205-2886387
```

---

## Zamówienie 302-9284661-2361915

### Niezgodności
- **ulica**: Amazon=`Hallandstr 8` vs Sellasist=`Hallandstr` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Luniak Königliche Salzgurken///Ogorki kiszone krolewskie 710g (SKU: 23934)
[WARNING] Nie znaleziono line_id dla produktu: Luniak Königliche Salzgurken///Ogorki kiszone krolewskie 710g
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="8", ulica="Hallandstr"
[INFO] 🏙️ Znaleziono miasto: "Berlin"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "302-9284661"
[INFO] 📊 Wynik końcowy: imię="Christiane", nazwisko="Grobe", ulica="Hallandstr", numer="8", miasto="Berlin", kod="13189", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+491772864663"
[DEBUG] Zachowano międzynarodowy numer telefonu: +491772864663
[DEBUG] Numer telefonu z Amazona: "+491772864663"
[DEBUG] Sformatowany numer telefonu: "+491772864663"
[DEBUG] Używam numeru telefonu ze scrapingu: +491772864663
[INFO] Finalny numer telefonu dla zamówienia: +491772864663
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="8", ulica="Hallandstr"
[INFO] 🏙️ Znaleziono miasto: "Berlin"
```

---

## Zamówienie 028-1540437-7065945

### Niezgodności
- **ulica**: Amazon=`Römersee 26` vs Sellasist=`Römersee` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: NOW L-Tryptophan 1000mg - 60tabs (SKU: 11130)
[WARNING] Nie znaleziono line_id dla produktu: NOW L-Tryptophan 1000mg - 60tabs
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="26", ulica="Römersee"
[INFO] 🏙️ Znaleziono miasto: "Pöttsching"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-1540437"
[INFO] 📊 Wynik końcowy: imię="Peter", nazwisko="They", ulica="Römersee", numer="26", miasto="Pöttsching", kod="7202", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+4367761209634"
[DEBUG] Zachowano międzynarodowy numer telefonu: +4367761209634
[DEBUG] Numer telefonu z Amazona: "+4367761209634"
[DEBUG] Sformatowany numer telefonu: "+4367761209634"
[DEBUG] Używam numeru telefonu ze scrapingu: +4367761209634
[INFO] Finalny numer telefonu dla zamówienia: +4367761209634
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="26", ulica="Römersee"
[INFO] 🏙️ Znaleziono miasto: "Pöttsching"
```

---

## Zamówienie 407-2888873-2650703

### Niezgodności
- **ulica**: Amazon=`Bengtssons väg 6` vs Sellasist=`Bengtssons väg` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (SE): 25% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (SE): 25% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Capelli di angelo pasta glutenfri 250 g Schar (SKU: 34664_1)
[WARNING] Nie znaleziono line_id dla produktu: Capelli di angelo pasta glutenfri 250 g Schar
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="6", ulica="Bengtssons väg"
[INFO] 🏙️ Znaleziono miasto: "Höllviken"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-2888873"
[INFO] 📊 Wynik końcowy: imię="James", nazwisko="Williams", ulica="Bengtssons väg", numer="6", miasto="Höllviken", kod="23633", kraj="Sweden", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+46763429594"
[DEBUG] Zachowano międzynarodowy numer telefonu: +46763429594
[DEBUG] Numer telefonu z Amazona: "+46763429594"
[DEBUG] Sformatowany numer telefonu: "+46763429594"
[DEBUG] Używam numeru telefonu ze scrapingu: +46763429594
[INFO] Finalny numer telefonu dla zamówienia: +46763429594
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="6", ulica="Bengtssons väg"
[INFO] 🏙️ Znaleziono miasto: "Höllviken"
```

---

## Zamówienie 306-4529470-8074763

### Niezgodności
- **ulica**: Amazon=`Dr Albert Schweitzer Str 28` vs Sellasist=`Dr Albert Schweitzer Str` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Cafe Von Cofinluxe Für Damen. Parfum De Toilette Spray 3.0 Oz / 90 Ml (SKU: 39721_4)
[WARNING] Nie znaleziono line_id dla produktu: Cafe Von Cofinluxe Für Damen. Parfum De Toilette Spray 3.0 Oz / 90 Ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="28", ulica="Dr Albert Schweitzer Str"
[INFO] 🏙️ Znaleziono miasto: "Lübbenau/spreewald"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "306-4529470"
[INFO] 📊 Wynik końcowy: imię="Kryszewska", nazwisko="", ulica="Dr Albert Schweitzer Str", numer="28", miasto="Lübbenau/spreewald", kod="03222", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+491776758899"
[DEBUG] Zachowano międzynarodowy numer telefonu: +491776758899
[DEBUG] Numer telefonu z Amazona: "+491776758899"
[DEBUG] Sformatowany numer telefonu: "+491776758899"
[DEBUG] Używam numeru telefonu ze scrapingu: +491776758899
[INFO] Finalny numer telefonu dla zamówienia: +491776758899
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="28", ulica="Dr Albert Schweitzer Str"
[INFO] 🏙️ Znaleziono miasto: "Lübbenau/spreewald"
```

---

## Zamówienie 408-7563702-7887533

### Niezgodności
- **ulica**: Amazon=`155 Rte de la Vy de l'Eau` vs Sellasist=`Rte de la Vy de l&#039;Eau` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Jus d'acérola BIO 500 ml - BIO PLANET (SKU: 20965)
[WARNING] Nie znaleziono line_id dla produktu: Jus d'acérola BIO 500 ml - BIO PLANET
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="155", ulica="Rte de la Vy de l'Eau"
[INFO] 🏙️ Znaleziono miasto: "Saint-Cergues"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "408-7563702"
[INFO] 📊 Wynik końcowy: imię="Julia", nazwisko="Tomasini", ulica="Rte de la Vy de l'Eau", numer="155", miasto="Saint-Cergues", kod="74140", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+33637479085"
[DEBUG] Zachowano międzynarodowy numer telefonu: +33637479085
[DEBUG] Numer telefonu z Amazona: "+33637479085"
[DEBUG] Sformatowany numer telefonu: "+33637479085"
[DEBUG] Używam numeru telefonu ze scrapingu: +33637479085
[INFO] Finalny numer telefonu dla zamówienia: +33637479085
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="155", ulica="Rte de la Vy de l'Eau"
[INFO] 🏙️ Znaleziono miasto: "Saint-Cergues"
```

---

## Zamówienie 406-9569730-5437143

### Niezgodności
- **miasto**: Amazon=`Bologna` vs Sellasist=`Terzo piano` ❌
- **ulica**: Amazon=`Via Luigi cherubini 17 Terzo  piano` vs Sellasist=`Via Luigi cherubini` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: NOW Foods - Protezione radicale glutatione Free 500 mg. - 30Capsula vegetale (e) (SKU: 6835)
[WARNING] Nie znaleziono line_id dla produktu: NOW Foods - Protezione radicale glutatione Free 500 mg. - 30Capsula vegetale (e)
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (wzorzec): numer="17", ulica="Via Luigi cherubini"
[INFO] 🏙️ Znaleziono miasto: "Terzo piano"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "406-9569730"
[INFO] 📊 Wynik końcowy: imię="Smina", nazwisko="mirza", ulica="Via Luigi cherubini", numer="17", miasto="Terzo piano", kod="40141", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "3802453821"
[DEBUG] Numer telefonu z Amazona: "3802453821"
[DEBUG] Sformatowany numer telefonu: "+393802453821"
[DEBUG] Używam numeru telefonu ze scrapingu: +393802453821
[INFO] Finalny numer telefonu dla zamówienia: +393802453821
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (wzorzec): numer="17", ulica="Via Luigi cherubini"
[INFO] 🏙️ Znaleziono miasto: "Terzo piano"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 403-3067274-2677920

### Niezgodności
- **ulica**: Amazon=`195 rue de la Chaume` vs Sellasist=`rue de la Chaume` ❌
- **telefon**: Amazon=`33618911195` vs Sellasist=`330618911195` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: ProBiota HistaminX - 60 acid-resistant vcaps (SKU: 2498)
[WARNING] Nie znaleziono line_id dla produktu: ProBiota HistaminX - 60 acid-resistant vcaps
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="195", ulica="rue de la Chaume"
[INFO] 🏙️ Znaleziono miasto: "Manosque"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "403-3067274"
[INFO] 📊 Wynik końcowy: imię="Kandharsingh", nazwisko="Delphine", ulica="rue de la Chaume", numer="195", miasto="Manosque", kod="04100", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0618911195"
[DEBUG] Numer telefonu z Amazona: "0618911195"
[DEBUG] Sformatowany numer telefonu: "+330618911195"
[DEBUG] Używam numeru telefonu ze scrapingu: +330618911195
[INFO] Finalny numer telefonu dla zamówienia: +330618911195
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="195", ulica="rue de la Chaume"
[INFO] 🏙️ Znaleziono miasto: "Manosque"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 171-4795296-9359534

### Niezgodności
- **miasto**: Amazon=`Rosny-sous-Bois` vs Sellasist=`Machit` ❌
- **ulica**: Amazon=`3, Place des Martyrs Résistance et Déportation Machit` vs Sellasist=`3, Place des Martyrs Résistance et Déportation` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Probiotique-10, 50 milliards, 50 capsules végétales - Now Foods (SKU: 6773)
[WARNING] Nie znaleziono line_id dla produktu: Probiotique-10, 50 milliards, 50 capsules végétales - Now Foods
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="3, Place des Martyrs Résistance et Déportation"
[INFO] 🏙️ Znaleziono miasto: "Machit"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-4795296"
[INFO] 📊 Wynik końcowy: imię="Machit", nazwisko="Khalid", ulica="3, Place des Martyrs Résistance et Déportation", numer="", miasto="Machit", kod="93110", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+33 7 67 87 08 07"
[DEBUG] Zachowano międzynarodowy numer telefonu: +33 7 67 87 08 07
[DEBUG] Numer telefonu z Amazona: "+33 7 67 87 08 07"
[DEBUG] Sformatowany numer telefonu: "+33 7 67 87 08 07"
[DEBUG] Używam numeru telefonu ze scrapingu: +33 7 67 87 08 07
[INFO] Finalny numer telefonu dla zamówienia: +33 7 67 87 08 07
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="3, Place des Martyrs Résistance et Déportation"
[INFO] 🏙️ Znaleziono miasto: "Machit"
```

---

## Zamówienie 302-6580005-0913104

### Niezgodności
- **miasto**: Amazon=`München` vs Sellasist=`Denninger Strass 179` ❌
- **ulica**: Amazon=`Egun Denninger Strass 179` vs Sellasist=`Egun` ❌

### Warnings
```
[WARNING] ⚠️ Linia "Egun" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Linia "Egun" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Linia "Egun" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Captain America Kinder Eau de Toilette 30 ml (SKU: 51277)
[WARNING] Nie znaleziono line_id dla produktu: Captain America Kinder Eau de Toilette 30 ml
```

### Kluczowe logi
```
[WARNING] ⚠️ Linia "Egun" nie wygląda na niemiecką ulicę - pomijam
[INFO] ✅ Adres nieprzetworzony: ulica="Egun"
[INFO] 🏙️ Znaleziono miasto: "Denninger Strass 179"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "302-6580005"
[INFO] 📊 Wynik końcowy: imię="Blessing", nazwisko="Egun", ulica="Egun", numer="", miasto="Denninger Strass 179", kod="81927", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+4915219458504"
[DEBUG] Zachowano międzynarodowy numer telefonu: +4915219458504
[DEBUG] Numer telefonu z Amazona: "+4915219458504"
[DEBUG] Sformatowany numer telefonu: "+4915219458504"
[DEBUG] Używam numeru telefonu ze scrapingu: +4915219458504
[INFO] Finalny numer telefonu dla zamówienia: +4915219458504
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Linia "Egun" nie wygląda na niemiecką ulicę - pomijam
```

---

## Zamówienie 302-9967805-8282757

### Niezgodności
- **ulica**: Amazon=`Zur Dieplade 23` vs Sellasist=`Zur Dieplade` ❌
- **telefon**: Amazon=`4915755518847` vs Sellasist=`15755518847` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: KŁODAWA-SALZ FEIN GEMAHLEN 1 kg - CRYSTALLINE PLANET (SKU: 35476)
[WARNING] Nie znaleziono line_id dla produktu: KŁODAWA-SALZ FEIN GEMAHLEN 1 kg - CRYSTALLINE PLANET
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="23", ulica="Zur Dieplade"
[INFO] 🏙️ Znaleziono miasto: "duisburg"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "302-9967805"
[INFO] 📊 Wynik końcowy: imię="Maria", nazwisko="Lorse", ulica="Zur Dieplade", numer="23", miasto="duisburg", kod="47259", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "015755518847"
[DEBUG] Użyto numeru telefonu bez zmian: 015755518847
[DEBUG] Numer telefonu z Amazona: "015755518847"
[DEBUG] Sformatowany numer telefonu: "015755518847"
[DEBUG] Używam numeru telefonu ze scrapingu: 015755518847
[INFO] Finalny numer telefonu dla zamówienia: 015755518847
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="23", ulica="Zur Dieplade"
[INFO] 🏙️ Znaleziono miasto: "duisburg"
```

---

## Zamówienie 206-9998402-8097148

### Niezgodności
- **miasto**: Amazon=`MILTON KEYNES` vs Sellasist=`BLETCHLEY` ❌
- **ulica**: Amazon=`BLETCHLEY` vs Sellasist=`8 HOME CLOSE` ❌
- **telefon**: Amazon=`447809473329` vs Sellasist=`4407809473329` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Wars Eau de Cologne (SKU: 38922)
[WARNING] Nie znaleziono line_id dla produktu: Wars Eau de Cologne
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres brytyjski (suffix): ulica="8 HOME CLOSE"
[INFO] 🏙️ Znaleziono miasto: "BLETCHLEY"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "206-9998402"
[INFO] 📊 Wynik końcowy: imię="Sebastian", nazwisko="Markowski", ulica="8 HOME CLOSE", numer="", miasto="BLETCHLEY", kod="MK3 6JE", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07809473329"
[DEBUG] Numer telefonu z Amazona: "07809473329"
[DEBUG] Sformatowany numer telefonu: "+4407809473329"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407809473329
[INFO] Finalny numer telefonu dla zamówienia: +4407809473329
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Wars Eau de Cologne (SKU: 38922)
[INFO] 📞 Finalny telefon dla zamówienia: 206-9998402
[DEBUG] Używam numeru telefonu ze scrapingu: +4407809473329
```

---

## Zamówienie 305-1066857-1322704

### Niezgodności
- **miasto**: Amazon=`Manternach` vs Sellasist=`Haus` ❌
- **ulica**: Amazon=`1B Ernest Mehlen Strooss Haus` vs Sellasist=`1B Ernest Mehlen Strooss` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Eveline Cosmetics Variété Wasserfeste Mascara | Volumen & Länge | Wischfest mit Präzisions-Silikonbürste | Elegante Blaue Metallische Verpackung (SKU: 43809)
[WARNING] Nie znaleziono line_id dla produktu: Eveline Cosmetics Variété Wasserfeste Mascara | Volumen & Länge | Wischfest mit Präzisions-Silikonbürste | Elegante Blaue Metallische Verpackung
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="1B Ernest Mehlen Strooss"
[INFO] 🏙️ Znaleziono miasto: "Haus"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "305-1066857"
[INFO] 📊 Wynik końcowy: imię="Martine", nazwisko="Johann", ulica="1B Ernest Mehlen Strooss", numer="", miasto="Haus", kod="6850", kraj="Luxembourg", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+352 621 306 780"
[DEBUG] Zachowano międzynarodowy numer telefonu: +352 621 306 780
[DEBUG] Numer telefonu z Amazona: "+352 621 306 780"
[DEBUG] Sformatowany numer telefonu: "+352 621 306 780"
[DEBUG] Używam numeru telefonu ze scrapingu: +352 621 306 780
[INFO] Finalny numer telefonu dla zamówienia: +352 621 306 780
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="1B Ernest Mehlen Strooss"
[INFO] 🏙️ Znaleziono miasto: "Haus"
```

---

## Zamówienie 303-8794695-1469936

### Niezgodności
- **ulica**: Amazon=`Am Wäldchen 2` vs Sellasist=`Am Wäldchen` ❌
- **telefon**: Amazon=`493434751283` vs Sellasist=`0` ❌

### Warnings
```
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 034347
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: EkaMedica Artischockensaft - Artischocke, 1000 ml, 1 Flasche, 1 Stück (SKU: 7837)
[WARNING] Nie znaleziono line_id dla produktu: EkaMedica Artischockensaft - Artischocke, 1000 ml, 1 Flasche, 1 Stück
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="2", ulica="Am Wäldchen"
[INFO] 🏙️ Znaleziono miasto: "Rötha"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "303-8794695"
[INFO] 📊 Wynik końcowy: imię="Marion", nazwisko="Fahrig", ulica="Am Wäldchen", numer="2", miasto="Rötha", kod="04571", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "034347"
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 034347
[DEBUG] Numer telefonu z Amazona: "034347"
[DEBUG] Sformatowany numer telefonu: ""
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
[INFO] Finalny numer telefonu dla zamówienia: 000000000
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="2", ulica="Am Wäldchen"
[INFO] 🏙️ Znaleziono miasto: "Rötha"
```

---

## Zamówienie 405-9450466-9703512

### Niezgodności
- **telefon**: Amazon=`31612027205` vs Sellasist=`310612027205` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Eveline Cosmetics Diamond Nagel Professionele Therapie Conditioner Verharder Versterker | 12 ml | Reparatiebehandeling Nagelserum | Formaldehyde Vrij | Titanium Formule (SKU: 41892_26)
[WARNING] Nie znaleziono line_id dla produktu: Eveline Cosmetics Diamond Nagel Professionele Therapie Conditioner Verharder Versterker | 12 ml | Reparatiebehandeling Nagelserum | Formaldehyde Vrij | Titanium Formule
```

### Kluczowe logi
```
[INFO] ✅ Adres holenderski (standard): ulica="Polenstraat 78"
[INFO] 🏙️ Znaleziono miasto: "ALMERE"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "405-9450466"
[INFO] 📊 Wynik końcowy: imię="Halyna", nazwisko="Kuznetsova", ulica="Polenstraat 78", numer="", miasto="ALMERE", kod="", kraj="Netherlands", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0612027205"
[DEBUG] Numer telefonu z Amazona: "0612027205"
[DEBUG] Sformatowany numer telefonu: "+310612027205"
[DEBUG] Używam numeru telefonu ze scrapingu: +310612027205
[INFO] Finalny numer telefonu dla zamówienia: +310612027205
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres holenderski (standard): ulica="Polenstraat 78"
[INFO] 🏙️ Znaleziono miasto: "ALMERE"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 405-0660218-0027503

### Niezgodności
- **miasto**: Amazon=`Paris` vs Sellasist=`Chez Shamane Poivre` ❌
- **ulica**: Amazon=`Chez Shamane Poivre` vs Sellasist=`24, Rue La Bruyère` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: ProBiota HistaminX - 60 acid-resistant vcaps (SKU: 2498)
[WARNING] Nie znaleziono line_id dla produktu: ProBiota HistaminX - 60 acid-resistant vcaps
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="24, Rue La Bruyère"
[INFO] 🏙️ Znaleziono miasto: "Chez Shamane Poivre"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "405-0660218"
[INFO] 📊 Wynik końcowy: imię="Shamane", nazwisko="Poivre", ulica="24, Rue La Bruyère", numer="", miasto="Chez Shamane Poivre", kod="75009", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+33 6 12 29 58 46"
[DEBUG] Zachowano międzynarodowy numer telefonu: +33 6 12 29 58 46
[DEBUG] Numer telefonu z Amazona: "+33 6 12 29 58 46"
[DEBUG] Sformatowany numer telefonu: "+33 6 12 29 58 46"
[DEBUG] Używam numeru telefonu ze scrapingu: +33 6 12 29 58 46
[INFO] Finalny numer telefonu dla zamówienia: +33 6 12 29 58 46
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="24, Rue La Bruyère"
[INFO] 🏙️ Znaleziono miasto: "Chez Shamane Poivre"
```

---

## Zamówienie 306-9176314-0007532

### Niezgodności
- **telefon**: Amazon=`491795661238` vs Sellasist=`1795661238` ❌

### Warnings
```
[WARNING] ⚠️ Linia "Kaltentalstr 18." nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Linia "Kaltentalstr 18." nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Linia "Kaltentalstr 18." nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: BIOMAGIC HAIR COLOR - 1/00 BLACK (SKU: 35706)
[WARNING] Nie znaleziono line_id dla produktu: BIOMAGIC HAIR COLOR - 1/00 BLACK
```

### Kluczowe logi
```
[WARNING] ⚠️ Linia "Kaltentalstr 18." nie wygląda na niemiecką ulicę - pomijam
[INFO] ✅ Adres nieprzetworzony: ulica="Kaltentalstr 18."
[INFO] 🏙️ Znaleziono miasto: "Remseck am neckar aldingen"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "306-9176314"
[INFO] 📊 Wynik końcowy: imię="Rossana", nazwisko="Serio", ulica="Kaltentalstr 18.", numer="", miasto="Remseck am neckar aldingen", kod="71686", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "01795661238"
[DEBUG] Użyto numeru telefonu bez zmian: 01795661238
[DEBUG] Numer telefonu z Amazona: "01795661238"
[DEBUG] Sformatowany numer telefonu: "01795661238"
[DEBUG] Używam numeru telefonu ze scrapingu: 01795661238
[INFO] Finalny numer telefonu dla zamówienia: 01795661238
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Linia "Kaltentalstr 18." nie wygląda na niemiecką ulicę - pomijam
```

---

## Zamówienie 171-7428648-6180325

### Niezgodności
- **ulica**: Amazon=`4 T Rue de la Petite Motte` vs Sellasist=`T Rue de la Petite Motte` ❌
- **telefon**: Amazon=`33617688727` vs Sellasist=`330617688727` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: ALGUES DE LA MER SÉCHÉES - KOMBU BIO 100 g (sac en feuille) - PORTO MUINOS
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="4", ulica="T Rue de la Petite Motte"
[INFO] 🏙️ Znaleziono miasto: "Ecouflant"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-7428648"
[INFO] 📊 Wynik końcowy: imię="Gildas", nazwisko="BÉCAUD", ulica="T Rue de la Petite Motte", numer="4", miasto="Ecouflant", kod="49000", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0617688727"
[DEBUG] Numer telefonu z Amazona: "0617688727"
[DEBUG] Sformatowany numer telefonu: "+330617688727"
[DEBUG] Używam numeru telefonu ze scrapingu: +330617688727
[INFO] Finalny numer telefonu dla zamówienia: +330617688727
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="4", ulica="T Rue de la Petite Motte"
[INFO] 🏙️ Znaleziono miasto: "Ecouflant"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 404-4248396-5406761

### Niezgodności
- **miasto**: Amazon=`Chilches costa` vs Sellasist=`Vélez-Malaga, Málaga` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: WEIDER Pure Creatine Powder, Creapure Creatine Monohydrate 600g para la fuerza y la potencia (SKU: 12473)
[WARNING] Nie znaleziono line_id dla produktu: WEIDER Pure Creatine Powder, Creapure Creatine Monohydrate 600g para la fuerza y la potencia
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="Calle Bezana 28, Urb Cortijo del Conde"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Vélez-Malaga, Málaga"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "404-4248396"
[INFO] 📊 Wynik końcowy: imię="Ada", nazwisko="Mañas Montero", ulica="Calle Bezana 28, Urb Cortijo del Conde", numer="", miasto="Vélez-Malaga, Málaga", kod="29790", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "697956007"
[DEBUG] Numer telefonu z Amazona: "697956007"
[DEBUG] Sformatowany numer telefonu: "+34697956007"
[DEBUG] Używam numeru telefonu ze scrapingu: +34697956007
[INFO] Finalny numer telefonu dla zamówienia: +34697956007
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="Calle Bezana 28, Urb Cortijo del Conde"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Vélez-Malaga, Málaga"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 407-1173713-4107552

### Niezgodności
- **ulica**: Amazon=`Via del Fondaccio 12` vs Sellasist=`Via del Fondaccio` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Weider Pure Creatine - Creapure Creatina Monoidrato in Polvere 600 g, Fitness e Bodybuilding, 176 Porzioni (SKU: 12473)
[WARNING] Nie znaleziono line_id dla produktu: Weider Pure Creatine - Creapure Creatina Monoidrato in Polvere 600 g, Fitness e Bodybuilding, 176 Porzioni
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (wzorzec): numer="12", ulica="Via del Fondaccio"
[INFO] 🏙️ Znaleziono miasto: "LAMA"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-1173713"
[INFO] 📊 Wynik końcowy: imię="Benedetta", nazwisko="Vagnuzzi", ulica="Via del Fondaccio", numer="12", miasto="LAMA", kod="06016", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+393391736833"
[DEBUG] Zachowano międzynarodowy numer telefonu: +393391736833
[DEBUG] Numer telefonu z Amazona: "+393391736833"
[DEBUG] Sformatowany numer telefonu: "+393391736833"
[DEBUG] Używam numeru telefonu ze scrapingu: +393391736833
[INFO] Finalny numer telefonu dla zamówienia: +393391736833
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (wzorzec): numer="12", ulica="Via del Fondaccio"
[INFO] 🏙️ Znaleziono miasto: "LAMA"
```

---

## Zamówienie 028-9719792-4792354

### Niezgodności
- **ulica**: Amazon=`Im Freibüschen 22` vs Sellasist=`Im Freibüschen` ❌
- **telefon**: Amazon=`491778907130` vs Sellasist=`1778907130` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Byc Moze - Tokyo Damenparfüm, 10 ml - Ein reichhaltiges, langanhaltendes und kontrastreiches Dufterlebnis (SKU: 38890)
[WARNING] Nie znaleziono line_id dla produktu: Byc Moze - Tokyo Damenparfüm, 10 ml - Ein reichhaltiges, langanhaltendes und kontrastreiches Dufterlebnis
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="22", ulica="Im Freibüschen"
[INFO] 🏙️ Znaleziono miasto: "Gifhorn"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-9719792"
[INFO] 📊 Wynik końcowy: imię="Volodymyr", nazwisko="Rzhemovskyi", ulica="Im Freibüschen", numer="22", miasto="Gifhorn", kod="38518", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "01778907130"
[DEBUG] Użyto numeru telefonu bez zmian: 01778907130
[DEBUG] Numer telefonu z Amazona: "01778907130"
[DEBUG] Sformatowany numer telefonu: "01778907130"
[DEBUG] Używam numeru telefonu ze scrapingu: 01778907130
[INFO] Finalny numer telefonu dla zamówienia: 01778907130
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="22", ulica="Im Freibüschen"
[INFO] 🏙️ Znaleziono miasto: "Gifhorn"
```

---

## Zamówienie 204-4999127-0875566

### Niezgodności
- **miasto**: Amazon=`Newton Abbot` vs Sellasist=`Bowden Hill` ❌
- **ulica**: Amazon=`9 Bowden Hill` vs Sellasist=`9` ❌
- **telefon**: Amazon=`447473293797` vs Sellasist=`4407473293797` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Tisane Lip Balm Natural Cosmetic for Care and Protection of the Lips 4.7G (SKU: 43085)
[WARNING] Nie znaleziono line_id dla produktu: Tisane Lip Balm Natural Cosmetic for Care and Protection of the Lips 4.7G
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="9"
[INFO] 🏙️ Znaleziono miasto: "Bowden Hill"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "204-4999127"
[INFO] 📊 Wynik końcowy: imię="Dawid", nazwisko="Bialy", ulica="9", numer="", miasto="Bowden Hill", kod="TQ121BH", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07473293797"
[DEBUG] Numer telefonu z Amazona: "07473293797"
[DEBUG] Sformatowany numer telefonu: "+4407473293797"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407473293797
[INFO] Finalny numer telefonu dla zamówienia: +4407473293797
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Tisane Lip Balm Natural Cosmetic for Care and Protection of the Lips 4.7G (SKU: 43085)
[INFO] 📞 Finalny telefon dla zamówienia: 204-4999127
[DEBUG] Używam numeru telefonu ze scrapingu: +4407473293797
```

---

## Zamówienie 302-1921835-9005957

### Niezgodności
- **miasto**: Amazon=`Feldkirch` vs Sellasist=`39` ❌
- **ulica**: Amazon=`Oberaustrasse 39` vs Sellasist=`Oberaustrasse` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: BIOMAGIC HAIR COLOR - 5/03 LIGHT NATURAL GOLDEN BROWN (SKU: 21089)
[WARNING] Nie znaleziono line_id dla produktu: BIOMAGIC HAIR COLOR - 5/03 LIGHT NATURAL GOLDEN BROWN
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="Oberaustrasse"
[INFO] 🏙️ Znaleziono miasto: "39"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "302-1921835"
[INFO] 📊 Wynik końcowy: imię="Özlem", nazwisko="Jenny", ulica="Oberaustrasse", numer="", miasto="39", kod="6800", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "00436642200400"
[DEBUG] Numer telefonu z Amazona: "00436642200400"
[DEBUG] Sformatowany numer telefonu: "+436642200400"
[DEBUG] Używam numeru telefonu ze scrapingu: +436642200400
[INFO] Finalny numer telefonu dla zamówienia: +436642200400
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="Oberaustrasse"
[INFO] 🏙️ Znaleziono miasto: "39"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 407-6361920-4231544

### Niezgodności
- **ulica**: Amazon=`4 Allée des Amandiers` vs Sellasist=`Allée des Amandiers` ❌
- **telefon**: Amazon=`33635333238` vs Sellasist=`330635333238` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Sirop de sureau BIO 330 ml - BATOM (SKU: 20554)
[WARNING] Nie znaleziono line_id dla produktu: Sirop de sureau BIO 330 ml - BATOM
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="4", ulica="Allée des Amandiers"
[INFO] 🏙️ Znaleziono miasto: "Les roches Prémarie Andillé"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-6361920"
[INFO] 📊 Wynik końcowy: imię="Moitrier", nazwisko="Patrick", ulica="Allée des Amandiers", numer="4", miasto="Les roches Prémarie Andillé", kod="86340", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0635333238"
[DEBUG] Numer telefonu z Amazona: "0635333238"
[DEBUG] Sformatowany numer telefonu: "+330635333238"
[DEBUG] Używam numeru telefonu ze scrapingu: +330635333238
[INFO] Finalny numer telefonu dla zamówienia: +330635333238
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="4", ulica="Allée des Amandiers"
[INFO] 🏙️ Znaleziono miasto: "Les roches Prémarie Andillé"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 028-3435079-5458726

### Niezgodności
- **ulica**: Amazon=`Weinschenk 2` vs Sellasist=`Weinschenk` ❌
- **telefon**: Amazon=`436764860745` vs Sellasist=`6764860745` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: adidas UEFA Champions League Goal Edition After Shave, langanhaltend frischer, grüner Fougère Duft mit natürlichen ätherischen Ölen für Männer, 100ml (SKU: 61455)
[WARNING] Nie znaleziono line_id dla produktu: adidas UEFA Champions League Goal Edition After Shave, langanhaltend frischer, grüner Fougère Duft mit natürlichen ätherischen Ölen für Männer, 100ml
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="2", ulica="Weinschenk"
[INFO] 🏙️ Znaleziono miasto: "Waldhausen im Strudengau"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-3435079"
[INFO] 📊 Wynik końcowy: imię="Nick", nazwisko="Jurik", ulica="Weinschenk", numer="2", miasto="Waldhausen im Strudengau", kod="4391", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0676 48 60 745"
[DEBUG] Użyto numeru telefonu bez zmian: 0676 48 60 745
[DEBUG] Numer telefonu z Amazona: "0676 48 60 745"
[DEBUG] Sformatowany numer telefonu: "0676 48 60 745"
[DEBUG] Używam numeru telefonu ze scrapingu: 0676 48 60 745
[INFO] Finalny numer telefonu dla zamówienia: 0676 48 60 745
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="2", ulica="Weinschenk"
[INFO] 🏙️ Znaleziono miasto: "Waldhausen im Strudengau"
```

---

## Zamówienie 405-4374583-5764303

### Niezgodności
- **ulica**: Amazon=`5 place de l'Eglise` vs Sellasist=`place de l&#039;Eglise` ❌
- **telefon**: Amazon=`33668707366` vs Sellasist=`330668707366` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Eveline Cosmetics Sérum Shot Cure Anti-âge aux Multipéptides pour le Visage, Cou et Décolleté (SKU: 45330)
[WARNING] Nie znaleziono line_id dla produktu: Eveline Cosmetics Sérum Shot Cure Anti-âge aux Multipéptides pour le Visage, Cou et Décolleté
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="5", ulica="place de l'Eglise"
[INFO] 🏙️ Znaleziono miasto: "AMBUTRIX"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "405-4374583"
[INFO] 📊 Wynik końcowy: imię="Frédérique", nazwisko="Falcoz", ulica="place de l'Eglise", numer="5", miasto="AMBUTRIX", kod="01500", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0668707366"
[DEBUG] Numer telefonu z Amazona: "0668707366"
[DEBUG] Sformatowany numer telefonu: "+330668707366"
[DEBUG] Używam numeru telefonu ze scrapingu: +330668707366
[INFO] Finalny numer telefonu dla zamówienia: +330668707366
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="5", ulica="place de l'Eglise"
[INFO] 🏙️ Znaleziono miasto: "AMBUTRIX"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 305-7521723-4618721

### Niezgodności
- **telefon**: Amazon=`436606271129` vs Sellasist=`6606271129` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Eveline Cosmetics - Serum Argan & Vanille Luxus Hand und Nagelcreme, Handcreme Für Sehr Trockene Hände, Handbalsam, Handcreme Repair, Reichhaltiger Pflegekomplex - 100 ml (SKU: 39108)
[WARNING] Nie znaleziono line_id dla produktu: Eveline Cosmetics - Serum Argan & Vanille Luxus Hand und Nagelcreme, Handcreme Für Sehr Trockene Hände, Handbalsam, Handcreme Repair, Reichhaltiger Pflegekomplex - 100 ml
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="Oberradergasse 40/7"
[INFO] 🏙️ Znaleziono miasto: "Sankt Michael im Lungau"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "305-7521723"
[INFO] 📊 Wynik końcowy: imię="Margit", nazwisko="Kendlbacher", ulica="Oberradergasse 40/7", numer="", miasto="Sankt Michael im Lungau", kod="5582", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "06606271129"
[DEBUG] Użyto numeru telefonu bez zmian: 06606271129
[DEBUG] Numer telefonu z Amazona: "06606271129"
[DEBUG] Sformatowany numer telefonu: "06606271129"
[DEBUG] Używam numeru telefonu ze scrapingu: 06606271129
[INFO] Finalny numer telefonu dla zamówienia: 06606271129
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="Oberradergasse 40/7"
[INFO] 🏙️ Znaleziono miasto: "Sankt Michael im Lungau"
```

---

## Zamówienie 405-3893034-3656364

### Niezgodności
- **ulica**: Amazon=`Carrer Son Rich 6` vs Sellasist=`Carrer Son Rich` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Better Stevia Liquid, Pomegranate Blueberry - 59 ml. (SKU: 5196)
[WARNING] Nie znaleziono line_id dla produktu: Better Stevia Liquid, Pomegranate Blueberry - 59 ml.
```

### Kluczowe logi
```
[INFO] ✅ Adres hiszpański (wzorzec): numer="6", ulica="Carrer Son Rich"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Begur"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "405-3893034"
[INFO] 📊 Wynik końcowy: imię="Fernie", nazwisko="Knepper", ulica="Carrer Son Rich", numer="6", miasto="Begur", kod="17255", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0034637049249"
[DEBUG] Numer telefonu z Amazona: "0034637049249"
[DEBUG] Sformatowany numer telefonu: "+34637049249"
[DEBUG] Używam numeru telefonu ze scrapingu: +34637049249
[INFO] Finalny numer telefonu dla zamówienia: +34637049249
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres hiszpański (wzorzec): numer="6", ulica="Carrer Son Rich"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Begur"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 408-9608399-8511500

### Niezgodności
- **ulica**: Amazon=`Montesson` vs Sellasist=`Impasse du Château` ❌
- **telefon**: Amazon=`33645569465` vs Sellasist=`330645569465` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Graine de pavot bleu BIO 1 kg - BIO PLANET
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="23", ulica="Impasse du Château"
[INFO] 🏙️ Znaleziono miasto: "Montesson"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "408-9608399"
[INFO] 📊 Wynik końcowy: imię="Nagel", nazwisko="helene", ulica="Impasse du Château", numer="23", miasto="Montesson", kod="52500", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0645569465"
[DEBUG] Numer telefonu z Amazona: "0645569465"
[DEBUG] Sformatowany numer telefonu: "+330645569465"
[DEBUG] Używam numeru telefonu ze scrapingu: +330645569465
[INFO] Finalny numer telefonu dla zamówienia: +330645569465
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="23", ulica="Impasse du Château"
[INFO] 🏙️ Znaleziono miasto: "Montesson"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 026-2138879-9009945

### Niezgodności
- **miasto**: Amazon=`BRIXHAM` vs Sellasist=`UNIT 6, TORBAY TRADING ESTATE` ❌
- **ulica**: Amazon=`UNIT 6, TORBAY TRADING ESTATE` vs Sellasist=`TMVR LTD, NEW ROAD` ❌
- **telefon**: Amazon=`441803882344` vs Sellasist=`1803882344` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: SEEKING HEALTH - folate Acid Supplement - Active folic 60 Capsules - folic Acid Organic - folic Acid Vegan - High Dose 800 mcg - 60 Vegan Tablets (SKU: 2671_FBM)
[WARNING] Nie znaleziono line_id dla produktu: SEEKING HEALTH - folate Acid Supplement - Active folic 60 Capsules - folic Acid Organic - folic Acid Vegan - High Dose 800 mcg - 60 Vegan Tablets
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres brytyjski (suffix): ulica="TMVR LTD, NEW ROAD"
[INFO] 🏙️ Znaleziono miasto: "UNIT 6, TORBAY TRADING ESTATE"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "026-2138879"
[INFO] 📊 Wynik końcowy: imię="JAYNE E", nazwisko="LAYWOOD", ulica="TMVR LTD, NEW ROAD", numer="", miasto="UNIT 6, TORBAY TRADING ESTATE", kod="TQ58NF", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "01803882344"
[DEBUG] Użyto numeru telefonu bez zmian: 01803882344
[DEBUG] Numer telefonu z Amazona: "01803882344"
[DEBUG] Sformatowany numer telefonu: "01803882344"
[DEBUG] Używam numeru telefonu ze scrapingu: 01803882344
[INFO] Finalny numer telefonu dla zamówienia: 01803882344
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: SEEKING HEALTH - folate Acid Supplement - Active folic 60 Capsules - folic Acid Organic - folic Acid Vegan - High Dose 800 mcg - 60 Vegan Tablets (SKU: 2671\_FBM)
[INFO] 📞 Finalny telefon dla zamówienia: 026-2138879
```

---

## Zamówienie 304-2456734-3073155

### Niezgodności
- **ulica**: Amazon=`OBERTOESENS 162` vs Sellasist=`OBERTOESENS` ❌
- **telefon**: Amazon=`436643528835` vs Sellasist=`0` ❌

### Warnings
```
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 0664
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Batman Duschgel & Shampoo - 3D Figur mit tollem Duft, für Kinder und Erwachsene (400 ml) (SKU: 51911)
[WARNING] Nie znaleziono line_id dla produktu: Batman Duschgel & Shampoo - 3D Figur mit tollem Duft, für Kinder und Erwachsene (400 ml)
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="162", ulica="OBERTOESENS"
[INFO] 🏙️ Znaleziono miasto: "TOESENS"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-2456734"
[INFO] 📊 Wynik końcowy: imię="GABI", nazwisko="KNERINGER", ulica="OBERTOESENS", numer="162", miasto="TOESENS", kod="6541", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0664"
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 0664
[DEBUG] Numer telefonu z Amazona: "0664"
[DEBUG] Sformatowany numer telefonu: ""
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
[INFO] Finalny numer telefonu dla zamówienia: 000000000
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="162", ulica="OBERTOESENS"
[INFO] 🏙️ Znaleziono miasto: "TOESENS"
```

---

## Zamówienie 028-3001986-9553969

### Niezgodności
- **ulica**: Amazon=`Hermannstr 43` vs Sellasist=`-` ❌
- **telefon**: Amazon=`4915256438413` vs Sellasist=`0` ❌

### Warnings
```
[WARNING] ❌ Adres jest INVALID (brak podstawowych danych)
[WARNING] Niepełne dane adresowe – aktualizuję zamówienie jako anulowane: imię=Order, nazwisko=Canceled
[WARNING] ⚠️ Nie znaleziono telefonu po "Phone:"
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Produkt anulowany został dodany do listy produktów (status: Cancelled)
[WARNING] ❌ Adres jest INVALID (brak podstawowych danych)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: GRÜNER TEE KOMBUCHA BIO 500 ml - BIO LINIE
```

### Kluczowe logi
```
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-3001986"
[WARNING] ❌ Adres jest INVALID (brak podstawowych danych)
[INFO] 📊 Wynik końcowy: imię="", nazwisko="", ulica="", numer="", miasto="", kod="", kraj="", valid=false
[WARNING] Niepełne dane adresowe – aktualizuję zamówienie jako anulowane: imię=Order, nazwisko=Canceled
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[WARNING] ⚠️ Nie znaleziono telefonu po "Phone:"
[DEBUG] Numer telefonu z Amazona: ""
[DEBUG] Sformatowany numer telefonu: ""
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
[INFO] Finalny numer telefonu dla zamówienia: 000000000
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Produkt anulowany został dodany do listy produktów (status: Cancelled)
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-3001986"
```

---

## Zamówienie 306-9066610-4521143

### Niezgodności
- **miasto**: Amazon=`Springe` vs Sellasist=`3` ❌
- **ulica**: Amazon=`In Heldern 3` vs Sellasist=`In Heldern` ❌

### Warnings
```
[WARNING] ⚠️ Linia "In Heldern" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Linia "In Heldern" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Linia "In Heldern" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Sylveco Hafer Weizen Shampoo, 300 ml (SKU: 8746)
[WARNING] Nie znaleziono line_id dla produktu: Sylveco Hafer Weizen Shampoo, 300 ml
```

### Kluczowe logi
```
[WARNING] ⚠️ Linia "In Heldern" nie wygląda na niemiecką ulicę - pomijam
[INFO] ✅ Adres nieprzetworzony: ulica="In Heldern"
[INFO] 🏙️ Znaleziono miasto: "3"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "306-9066610"
[INFO] 📊 Wynik końcowy: imię="Maria", nazwisko="Trojanowski", ulica="In Heldern", numer="", miasto="3", kod="31832", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+495041801211"
[DEBUG] Zachowano międzynarodowy numer telefonu: +495041801211
[DEBUG] Numer telefonu z Amazona: "+495041801211"
[DEBUG] Sformatowany numer telefonu: "+495041801211"
[DEBUG] Używam numeru telefonu ze scrapingu: +495041801211
[INFO] Finalny numer telefonu dla zamówienia: +495041801211
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Linia "In Heldern" nie wygląda na niemiecką ulicę - pomijam
```

---

## Zamówienie 407-5903042-2182757

### Niezgodności
- **miasto**: Amazon=`Saint-Cyr-l'École` vs Sellasist=`Saint-Cyr-l&#039;École` ❌
- **ulica**: Amazon=`71, Avenue Pierre Curie` vs Sellasist=`-` ❌
- **telefon**: Amazon=`33628671326` vs Sellasist=`0` ❌

### Warnings
```
[WARNING] ❌ Adres jest INVALID (brak podstawowych danych)
[WARNING] Niepełne dane adresowe – aktualizuję zamówienie jako anulowane: imię=Order, nazwisko=Canceled
[WARNING] ⚠️ Nie znaleziono telefonu po "Phone:"
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Produkt anulowany został dodany do listy produktów (status: Cancelled)
[WARNING] ❌ Adres jest INVALID (brak podstawowych danych)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: THÉ RECOMMANDÉ AVEC UN EXCÈS DE CHOLESTÉROL BIO (25 x 1,5 g) - DARY NATURY
```

### Kluczowe logi
```
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-5903042"
[WARNING] ❌ Adres jest INVALID (brak podstawowych danych)
[INFO] 📊 Wynik końcowy: imię="", nazwisko="", ulica="", numer="", miasto="", kod="", kraj="", valid=false
[WARNING] Niepełne dane adresowe – aktualizuję zamówienie jako anulowane: imię=Order, nazwisko=Canceled
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[WARNING] ⚠️ Nie znaleziono telefonu po "Phone:"
[DEBUG] Numer telefonu z Amazona: ""
[DEBUG] Sformatowany numer telefonu: ""
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
[INFO] Finalny numer telefonu dla zamówienia: 000000000
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Produkt anulowany został dodany do listy produktów (status: Cancelled)
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-5903042"
```

---

## Zamówienie 202-1631624-8986734

### Niezgodności
- **miasto**: Amazon=`DORKING` vs Sellasist=`SWAN MILL GARDENS` ❌
- **ulica**: Amazon=`26 SWAN MILL GARDENS` vs Sellasist=`26` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ UK VAT 0% PROMOCJA: Cena ujemna, ustawiam na 0
[WARNING] Usunięto duplikat produktu: Herb Epilobium parviflorumTea for urinary system Prostate BIO Organic 50g (SKU: 21574)
[WARNING] Nie znaleziono line_id dla produktu: Herb Epilobium parviflorumTea for urinary system Prostate BIO Organic 50g
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="26"
[INFO] 🏙️ Znaleziono miasto: "SWAN MILL GARDENS"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "202-1631624"
[INFO] 📊 Wynik końcowy: imię="adasko", nazwisko="", ulica="26", numer="", miasto="SWAN MILL GARDENS", kod="RH4 1PN", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+447886904924"
[DEBUG] Zachowano międzynarodowy numer telefonu: +447886904924
[DEBUG] Numer telefonu z Amazona: "+447886904924"
[DEBUG] Sformatowany numer telefonu: "+447886904924"
[DEBUG] Używam numeru telefonu ze scrapingu: +447886904924
[INFO] Finalny numer telefonu dla zamówienia: +447886904924
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ UK VAT 0% PROMOCJA: Cena ujemna, ustawiam na 0
[WARNING] Usunięto duplikat produktu: Herb Epilobium parviflorumTea for urinary system Prostate BIO Organic 50g (SKU: 21574)
```

---

## Zamówienie 304-3955632-1081137

### Niezgodności
- **ulica**: Amazon=`Achauer Straße 4a / Haus 7` vs Sellasist=`Achauer Straße 4a / Haus` ❌
- **telefon**: Amazon=`436602716113` vs Sellasist=`6602716113` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Captain America Kinder Eau de Toilette 30 ml (SKU: 51277)
[WARNING] Nie znaleziono line_id dla produktu: Captain America Kinder Eau de Toilette 30 ml
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="7", ulica="Achauer Straße 4a / Haus"
[INFO] 🏙️ Znaleziono miasto: "Hennersdorf"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-3955632"
[INFO] 📊 Wynik końcowy: imię="Corinna", nazwisko="Zierl", ulica="Achauer Straße 4a / Haus", numer="7", miasto="Hennersdorf", kod="2332", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "06602716113"
[DEBUG] Użyto numeru telefonu bez zmian: 06602716113
[DEBUG] Numer telefonu z Amazona: "06602716113"
[DEBUG] Sformatowany numer telefonu: "06602716113"
[DEBUG] Używam numeru telefonu ze scrapingu: 06602716113
[INFO] Finalny numer telefonu dla zamówienia: 06602716113
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="7", ulica="Achauer Straße 4a / Haus"
[INFO] 🏙️ Znaleziono miasto: "Hennersdorf"
```

---

## Zamówienie 302-3146293-7059533

### Niezgodności
- **miasto**: Amazon=`Bielefeld` vs Sellasist=`Dorfstraße 24` ❌
- **ulica**: Amazon=`Dorfstraße 24` vs Sellasist=`Getränkewelt` ❌
- **telefon**: Amazon=`4917687898532` vs Sellasist=`17687898532` ❌

### Warnings
```
[WARNING] ⚠️ Linia "Getränkewelt" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Linia "Getränkewelt" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Linia "Getränkewelt" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Natürliches Steinsalz aus Klodawa, fein 1 kg (SKU: 34307)
[WARNING] Nie znaleziono line_id dla produktu: Natürliches Steinsalz aus Klodawa, fein 1 kg
```

### Kluczowe logi
```
[WARNING] ⚠️ Linia "Getränkewelt" nie wygląda na niemiecką ulicę - pomijam
[INFO] ✅ Adres nieprzetworzony: ulica="Getränkewelt"
[INFO] 🏙️ Znaleziono miasto: "Dorfstraße 24"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "302-3146293"
[INFO] 📊 Wynik końcowy: imię="Erec", nazwisko="Poligkeit", ulica="Getränkewelt", numer="", miasto="Dorfstraße 24", kod="33739", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "017687898532"
[DEBUG] Użyto numeru telefonu bez zmian: 017687898532
[DEBUG] Numer telefonu z Amazona: "017687898532"
[DEBUG] Sformatowany numer telefonu: "017687898532"
[DEBUG] Używam numeru telefonu ze scrapingu: 017687898532
[INFO] Finalny numer telefonu dla zamówienia: 017687898532
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Linia "Getränkewelt" nie wygląda na niemiecką ulicę - pomijam
```

---

## Zamówienie 305-9994216-0668323

### Niezgodności
- **ulica**: Amazon=`Bismarckstr 41f` vs Sellasist=`Bismarckstr` ❌
- **telefon**: Amazon=`491743994779` vs Sellasist=`1743994779` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Tee mit Sand-Strohblume BIO 25 g - DARY NATURY (SKU: 21538)
[WARNING] Nie znaleziono line_id dla produktu: Tee mit Sand-Strohblume BIO 25 g - DARY NATURY
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="41f", ulica="Bismarckstr"
[INFO] 🏙️ Znaleziono miasto: "Moers"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "305-9994216"
[INFO] 📊 Wynik końcowy: imię="Nurcan", nazwisko="Bulant", ulica="Bismarckstr", numer="41f", miasto="Moers", kod="47443", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "01743994779"
[DEBUG] Użyto numeru telefonu bez zmian: 01743994779
[DEBUG] Numer telefonu z Amazona: "01743994779"
[DEBUG] Sformatowany numer telefonu: "01743994779"
[DEBUG] Używam numeru telefonu ze scrapingu: 01743994779
[INFO] Finalny numer telefonu dla zamówienia: 01743994779
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="41f", ulica="Bismarckstr"
[INFO] 🏙️ Znaleziono miasto: "Moers"
```

---

## Zamówienie 302-6431126-3677130

### Niezgodności
- **ulica**: Amazon=`Im Landgrabenfelde 14` vs Sellasist=`Im Landgrabenfelde` ❌
- **telefon**: Amazon=`49394246123` vs Sellasist=`490394246123` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: La Rive Pearl Made with Swarovski® Elements Edp 75 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="14", ulica="Im Landgrabenfelde"
[INFO] 🏙️ Znaleziono miasto: "Emersleben"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "302-6431126"
[INFO] 📊 Wynik końcowy: imię="Marion", nazwisko="Niebel", ulica="Im Landgrabenfelde", numer="14", miasto="Emersleben", kod="38822", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0394246123"
[DEBUG] Numer telefonu z Amazona: "0394246123"
[DEBUG] Sformatowany numer telefonu: "+490394246123"
[DEBUG] Używam numeru telefonu ze scrapingu: +490394246123
[INFO] Finalny numer telefonu dla zamówienia: +490394246123
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="14", ulica="Im Landgrabenfelde"
[INFO] 🏙️ Znaleziono miasto: "Emersleben"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 206-5545030-2613908

### Niezgodności
- **miasto**: Amazon=`SKIPTON` vs Sellasist=`GRASSINGTON` ❌
- **ulica**: Amazon=`GRASSINGTON` vs Sellasist=`HIGH LEA MOOR LANE` ❌
- **telefon**: Amazon=`441756753356` vs Sellasist=`1756753356` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: EMMER Flour WHOLEMEAL BIO 500 g - BIO PLANET (SKU: 16577)
[WARNING] Nie znaleziono line_id dla produktu: EMMER Flour WHOLEMEAL BIO 500 g - BIO PLANET
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres brytyjski (suffix): ulica="HIGH LEA MOOR LANE"
[INFO] 🏙️ Znaleziono miasto: "GRASSINGTON"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "206-5545030"
[INFO] 📊 Wynik końcowy: imię="CAROL", nazwisko="RYMER", ulica="HIGH LEA MOOR LANE", numer="", miasto="GRASSINGTON", kod="BD23 5BD", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "01756753356"
[DEBUG] Użyto numeru telefonu bez zmian: 01756753356
[DEBUG] Numer telefonu z Amazona: "01756753356"
[DEBUG] Sformatowany numer telefonu: "01756753356"
[DEBUG] Używam numeru telefonu ze scrapingu: 01756753356
[INFO] Finalny numer telefonu dla zamówienia: 01756753356
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: EMMER Flour WHOLEMEAL BIO 500 g - BIO PLANET (SKU: 16577)
[INFO] 📞 Finalny telefon dla zamówienia: 206-5545030
```

---

## Zamówienie 403-3282752-0336326

### Niezgodności
- **miasto**: Amazon=`ROMA` vs Sellasist=`9A` ❌
- **ulica**: Amazon=`via nazionale 172 9A` vs Sellasist=`via nazionale` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Quercetin w/ Bromelain 120 VegiCaps (SKU: 1006)
[WARNING] Nie znaleziono line_id dla produktu: Quercetin w/ Bromelain 120 VegiCaps
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (wzorzec): numer="172", ulica="via nazionale"
[INFO] 🏙️ Znaleziono miasto: "9A"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "403-3282752"
[INFO] 📊 Wynik końcowy: imię="John", nazwisko="Palm Halter", ulica="via nazionale", numer="172", miasto="9A", kod="00184", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+393349474862"
[DEBUG] Zachowano międzynarodowy numer telefonu: +393349474862
[DEBUG] Numer telefonu z Amazona: "+393349474862"
[DEBUG] Sformatowany numer telefonu: "+393349474862"
[DEBUG] Używam numeru telefonu ze scrapingu: +393349474862
[INFO] Finalny numer telefonu dla zamówienia: +393349474862
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (wzorzec): numer="172", ulica="via nazionale"
[INFO] 🏙️ Znaleziono miasto: "9A"
```

---

## Zamówienie 302-2681757-2424312

### Niezgodności
- **ulica**: Amazon=`Kastanienallee 24` vs Sellasist=`Kastanienallee` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: LA RIVE Black Water Parfüm Eau de Toilette, 100 ml (SKU: 43303)
[WARNING] Nie znaleziono line_id dla produktu: LA RIVE Black Water Parfüm Eau de Toilette, 100 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="24", ulica="Kastanienallee"
[INFO] 🏙️ Znaleziono miasto: "Werneuchen"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "302-2681757"
[INFO] 📊 Wynik końcowy: imię="Holger", nazwisko="klatte", ulica="Kastanienallee", numer="24", miasto="Werneuchen", kod="16356", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+49 177 1732407"
[DEBUG] Zachowano międzynarodowy numer telefonu: +49 177 1732407
[DEBUG] Numer telefonu z Amazona: "+49 177 1732407"
[DEBUG] Sformatowany numer telefonu: "+49 177 1732407"
[DEBUG] Używam numeru telefonu ze scrapingu: +49 177 1732407
[INFO] Finalny numer telefonu dla zamówienia: +49 177 1732407
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="24", ulica="Kastanienallee"
[INFO] 🏙️ Znaleziono miasto: "Werneuchen"
```

---

## Zamówienie 404-2371163-8380353

### Niezgodności
- **ulica**: Amazon=`Via Tommaso da Cazzaniga 6` vs Sellasist=`Via Tommaso da Cazzaniga` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Succo di olivello spinoso 100% BIO senza zucchero 500 ml Premium Rosa (SKU: 35249)
[WARNING] Nie znaleziono line_id dla produktu: Succo di olivello spinoso 100% BIO senza zucchero 500 ml Premium Rosa
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (wzorzec): numer="6", ulica="Via Tommaso da Cazzaniga"
[INFO] 🏙️ Znaleziono miasto: "Milano"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "404-2371163"
[INFO] 📊 Wynik końcowy: imię="Veronica", nazwisko="Montano", ulica="Via Tommaso da Cazzaniga", numer="6", miasto="Milano", kod="20121", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "3277373035"
[DEBUG] Numer telefonu z Amazona: "3277373035"
[DEBUG] Sformatowany numer telefonu: "+393277373035"
[DEBUG] Używam numeru telefonu ze scrapingu: +393277373035
[INFO] Finalny numer telefonu dla zamówienia: +393277373035
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (wzorzec): numer="6", ulica="Via Tommaso da Cazzaniga"
[INFO] 🏙️ Znaleziono miasto: "Milano"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 304-3436754-8945942

### Niezgodności
- **miasto**: Amazon=`Berlin` vs Sellasist=`Streitstr 62` ❌
- **ulica**: Amazon=`Streitstr 62` vs Sellasist=`Kutlar` ❌
- **telefon**: Amazon=`491632445175` vs Sellasist=`1632445175` ❌

### Warnings
```
[WARNING] ⚠️ Linia "Kutlar" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Linia "Kutlar" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Linia "Kutlar" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: WEISSER BASMATIREIS GLUTENFREI BIO 2 kg - BIO PLANET (SKU: 20931)
[WARNING] Nie znaleziono line_id dla produktu: WEISSER BASMATIREIS GLUTENFREI BIO 2 kg - BIO PLANET
```

### Kluczowe logi
```
[WARNING] ⚠️ Linia "Kutlar" nie wygląda na niemiecką ulicę - pomijam
[INFO] ✅ Adres nieprzetworzony: ulica="Kutlar"
[INFO] 🏙️ Znaleziono miasto: "Streitstr 62"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-3436754"
[INFO] 📊 Wynik końcowy: imię="Ibrahim", nazwisko="Halil Kutlar", ulica="Kutlar", numer="", miasto="Streitstr 62", kod="13587", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "01632445175"
[DEBUG] Użyto numeru telefonu bez zmian: 01632445175
[DEBUG] Numer telefonu z Amazona: "01632445175"
[DEBUG] Sformatowany numer telefonu: "01632445175"
[DEBUG] Używam numeru telefonu ze scrapingu: 01632445175
[INFO] Finalny numer telefonu dla zamówienia: 01632445175
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Linia "Kutlar" nie wygląda na niemiecką ulicę - pomijam
```

---

## Zamówienie 302-5853039-3578744

### Niezgodności
- **ulica**: Amazon=`Lassallestraße 50` vs Sellasist=`Lassallestraße` ❌
- **telefon**: Amazon=`436642305412` vs Sellasist=`6642305412` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Activlab Creatine Capsules (300 Kapseln) - Reines Kreatinmonohydrat 5000 mg - Vor dem Training einnehmen - 60 Tagesportionen - 100% Pures Kreatin Monohydrat - Pre-Workout-Leistungsverstärker (SKU: 17844)
[WARNING] Nie znaleziono line_id dla produktu: Activlab Creatine Capsules (300 Kapseln) - Reines Kreatinmonohydrat 5000 mg - Vor dem Training einnehmen - 60 Tagesportionen - 100% Pures Kreatin Monohydrat - Pre-Workout-Leistungsverstärker
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="50", ulica="Lassallestraße"
[INFO] 🏙️ Znaleziono miasto: "Strasshof an der Nordbahn"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "302-5853039"
[INFO] 📊 Wynik końcowy: imię="Jennifer", nazwisko="Huber", ulica="Lassallestraße", numer="50", miasto="Strasshof an der Nordbahn", kod="2231", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "06642305412"
[DEBUG] Użyto numeru telefonu bez zmian: 06642305412
[DEBUG] Numer telefonu z Amazona: "06642305412"
[DEBUG] Sformatowany numer telefonu: "06642305412"
[DEBUG] Używam numeru telefonu ze scrapingu: 06642305412
[INFO] Finalny numer telefonu dla zamówienia: 06642305412
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="50", ulica="Lassallestraße"
[INFO] 🏙️ Znaleziono miasto: "Strasshof an der Nordbahn"
```

---

## Zamówienie 305-5509771-8607517

### Niezgodności
- **telefon**: Amazon=`436644149509` vs Sellasist=`6644149509` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Sanct Bernhard Grünlippmuschel-Balsam 150 ml (SKU: 13638)
[WARNING] Nie znaleziono line_id dla produktu: Sanct Bernhard Grünlippmuschel-Balsam 150 ml
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="Promenadegasse 41-45/4/19"
[INFO] 🏙️ Znaleziono miasto: "Kaltenleutgeben"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "305-5509771"
[INFO] 📊 Wynik końcowy: imię="Martin", nazwisko="Föllerer", ulica="Promenadegasse 41-45/4/19", numer="", miasto="Kaltenleutgeben", kod="2391", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "06644149509"
[DEBUG] Użyto numeru telefonu bez zmian: 06644149509
[DEBUG] Numer telefonu z Amazona: "06644149509"
[DEBUG] Sformatowany numer telefonu: "06644149509"
[DEBUG] Używam numeru telefonu ze scrapingu: 06644149509
[INFO] Finalny numer telefonu dla zamówienia: 06644149509
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="Promenadegasse 41-45/4/19"
[INFO] 🏙️ Znaleziono miasto: "Kaltenleutgeben"
```

---

## Zamówienie 405-0590037-2969900

### Niezgodności
- **miasto**: Amazon=`Ermont` vs Sellasist=`B005` ❌
- **ulica**: Amazon=`20 rue du 18 JUIN B005` vs Sellasist=`rue du 18 JUIN` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: NOIX DU BRÉSIL BIO 1 kg - BIO PLANET (SKU: 16252)
[WARNING] Nie znaleziono line_id dla produktu: NOIX DU BRÉSIL BIO 1 kg - BIO PLANET
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="20", ulica="rue du 18 JUIN"
[INFO] 🏙️ Znaleziono miasto: "B005"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "405-0590037"
[INFO] 📊 Wynik końcowy: imię="Lamia", nazwisko="KADDAR", ulica="rue du 18 JUIN", numer="20", miasto="B005", kod="95120", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+33612663456"
[DEBUG] Zachowano międzynarodowy numer telefonu: +33612663456
[DEBUG] Numer telefonu z Amazona: "+33612663456"
[DEBUG] Sformatowany numer telefonu: "+33612663456"
[DEBUG] Używam numeru telefonu ze scrapingu: +33612663456
[INFO] Finalny numer telefonu dla zamówienia: +33612663456
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="20", ulica="rue du 18 JUIN"
[INFO] 🏙️ Znaleziono miasto: "B005"
```

---

## Zamówienie 304-3904105-8673123

### Niezgodności
- **ulica**: Amazon=`Flurstraße 28` vs Sellasist=`Flurstraße` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Tee mit Sand-Strohblume BIO 25 g - DARY NATURY (SKU: 21538)
[WARNING] Nie znaleziono line_id dla produktu: Tee mit Sand-Strohblume BIO 25 g - DARY NATURY
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="28", ulica="Flurstraße"
[INFO] 🏙️ Znaleziono miasto: "Morsbach"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-3904105"
[INFO] 📊 Wynik końcowy: imię="Liliya", nazwisko="Tissen", ulica="Flurstraße", numer="28", miasto="Morsbach", kod="51597", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+49 1525 5490975"
[DEBUG] Zachowano międzynarodowy numer telefonu: +49 1525 5490975
[DEBUG] Numer telefonu z Amazona: "+49 1525 5490975"
[DEBUG] Sformatowany numer telefonu: "+49 1525 5490975"
[DEBUG] Używam numeru telefonu ze scrapingu: +49 1525 5490975
[INFO] Finalny numer telefonu dla zamówienia: +49 1525 5490975
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="28", ulica="Flurstraße"
[INFO] 🏙️ Znaleziono miasto: "Morsbach"
```

---

## Zamówienie 306-5027122-9195531

### Niezgodności
- **ulica**: Amazon=`Am Rinnenfeld 36` vs Sellasist=`Am Rinnenfeld` ❌
- **telefon**: Amazon=`4915755184888` vs Sellasist=`15755184888` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: La Rive Grey Point Deodorant Spray 150 ml (SKU: 39148_2)
[WARNING] Nie znaleziono line_id dla produktu: La Rive Grey Point Deodorant Spray 150 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="36", ulica="Am Rinnenfeld"
[INFO] 🏙️ Znaleziono miasto: "Frechen"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "306-5027122"
[INFO] 📊 Wynik końcowy: imię="Jose", nazwisko="F.Vasconcelos", ulica="Am Rinnenfeld", numer="36", miasto="Frechen", kod="50226", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "015755184888"
[DEBUG] Użyto numeru telefonu bez zmian: 015755184888
[DEBUG] Numer telefonu z Amazona: "015755184888"
[DEBUG] Sformatowany numer telefonu: "015755184888"
[DEBUG] Używam numeru telefonu ze scrapingu: 015755184888
[INFO] Finalny numer telefonu dla zamówienia: 015755184888
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="36", ulica="Am Rinnenfeld"
[INFO] 🏙️ Znaleziono miasto: "Frechen"
```

---

## Zamówienie 305-5965288-3090758

### Niezgodności
- **ulica**: Amazon=`Im Hagenwinkel 71` vs Sellasist=`Im Hagenwinkel` ❌
- **telefon**: Amazon=`491773885748` vs Sellasist=`0` ❌

### Warnings
```
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 0177
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: SYOSS intensive conditioner Waves 250 ml (SKU: 50636)
[WARNING] Nie znaleziono line_id dla produktu: SYOSS intensive conditioner Waves 250 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="71", ulica="Im Hagenwinkel"
[INFO] 🏙️ Znaleziono miasto: "Schramberg"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "305-5965288"
[INFO] 📊 Wynik końcowy: imię="Dr.", nazwisko="Marion Passarge", ulica="Im Hagenwinkel", numer="71", miasto="Schramberg", kod="78713", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0177"
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 0177
[DEBUG] Numer telefonu z Amazona: "0177"
[DEBUG] Sformatowany numer telefonu: ""
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
[INFO] Finalny numer telefonu dla zamówienia: 000000000
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="71", ulica="Im Hagenwinkel"
[INFO] 🏙️ Znaleziono miasto: "Schramberg"
```

---

## Zamówienie 406-7102062-7880331

### Niezgodności
- **ulica**: Amazon=`6 Chemin Saint-Etienne` vs Sellasist=`Chemin Saint-Etienne` ❌
- **telefon**: Amazon=`33684319101` vs Sellasist=`330684319101` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: THÉ RECOMMANDÉ AVEC UN EXCÈS DE CHOLESTÉROL BIO (25 x 1,5 g) - DARY NATURY
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="6", ulica="Chemin Saint-Etienne"
[INFO] 🏙️ Znaleziono miasto: "Euville"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "406-7102062"
[INFO] 📊 Wynik końcowy: imię="Gand", nazwisko="Gérard", ulica="Chemin Saint-Etienne", numer="6", miasto="Euville", kod="55200", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0684319101"
[DEBUG] Numer telefonu z Amazona: "0684319101"
[DEBUG] Sformatowany numer telefonu: "+330684319101"
[DEBUG] Używam numeru telefonu ze scrapingu: +330684319101
[INFO] Finalny numer telefonu dla zamówienia: +330684319101
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="6", ulica="Chemin Saint-Etienne"
[INFO] 🏙️ Znaleziono miasto: "Euville"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 028-0951680-0824341

### Niezgodności
- **ulica**: Amazon=`Jülicher Straße 56` vs Sellasist=`Jülicher Straße` ❌
- **telefon**: Amazon=`491799458768` vs Sellasist=`1799458768` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: KOPLAMP AXA NOX City Auto Off LED Batt KB ZW
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="56", ulica="Jülicher Straße"
[INFO] 🏙️ Znaleziono miasto: "Neuss"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-0951680"
[INFO] 📊 Wynik końcowy: imię="Sebastian", nazwisko="Graw", ulica="Jülicher Straße", numer="56", miasto="Neuss", kod="41464", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "01799458768"
[DEBUG] Użyto numeru telefonu bez zmian: 01799458768
[DEBUG] Numer telefonu z Amazona: "01799458768"
[DEBUG] Sformatowany numer telefonu: "01799458768"
[DEBUG] Używam numeru telefonu ze scrapingu: 01799458768
[INFO] Finalny numer telefonu dla zamówienia: 01799458768
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="56", ulica="Jülicher Straße"
[INFO] 🏙️ Znaleziono miasto: "Neuss"
```

---

## Zamówienie 406-1568159-4700309

### Niezgodności
- **ulica**: Amazon=`via giorgio byron 46, interno 9` vs Sellasist=`via giorgio byron 46, interno` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Gelso Bianco+Cromo+Cannella 500mg 180compressa. (SKU: 4106)
[WARNING] Nie znaleziono line_id dla produktu: Gelso Bianco+Cromo+Cannella 500mg 180compressa.
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (wzorzec): numer="9", ulica="via giorgio byron 46, interno"
[INFO] 🏙️ Znaleziono miasto: "Ferrara"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "406-1568159"
[INFO] 📊 Wynik końcowy: imię="TOFFANIN", nazwisko="Raffaella", ulica="via giorgio byron 46, interno", numer="9", miasto="Ferrara", kod="44121", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+393886084627"
[DEBUG] Zachowano międzynarodowy numer telefonu: +393886084627
[DEBUG] Numer telefonu z Amazona: "+393886084627"
[DEBUG] Sformatowany numer telefonu: "+393886084627"
[DEBUG] Używam numeru telefonu ze scrapingu: +393886084627
[INFO] Finalny numer telefonu dla zamówienia: +393886084627
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (wzorzec): numer="9", ulica="via giorgio byron 46, interno"
[INFO] 🏙️ Znaleziono miasto: "Ferrara"
```

---

## Zamówienie 305-7387931-0484366

### Niezgodności
- **ulica**: Amazon=`Pfauenweg 16` vs Sellasist=`Pfauenweg` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Natürliches Steinsalz aus Klodawa, fein 1 kg (SKU: 34307)
[WARNING] Nie znaleziono line_id dla produktu: Natürliches Steinsalz aus Klodawa, fein 1 kg
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="16", ulica="Pfauenweg"
[INFO] 🏙️ Znaleziono miasto: "Hamburg"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "305-7387931"
[INFO] 📊 Wynik końcowy: imię="Katharina", nazwisko="Kierach", ulica="Pfauenweg", numer="16", miasto="Hamburg", kod="22305", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+4915153787587"
[DEBUG] Zachowano międzynarodowy numer telefonu: +4915153787587
[DEBUG] Numer telefonu z Amazona: "+4915153787587"
[DEBUG] Sformatowany numer telefonu: "+4915153787587"
[DEBUG] Używam numeru telefonu ze scrapingu: +4915153787587
[INFO] Finalny numer telefonu dla zamówienia: +4915153787587
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="16", ulica="Pfauenweg"
[INFO] 🏙️ Znaleziono miasto: "Hamburg"
```

---

## Zamówienie 403-9627836-0259513

### Niezgodności
- **ulica**: Amazon=`via Primavera di Praga 8` vs Sellasist=`via Primavera di Praga` ❌
- **telefon**: Amazon=`3917710820` vs Sellasist=`393917710820` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Thorne L-Arginine - a Rilascio Prolungato per Sostenere la Salute del Cuore, la Produzione di Ossido Nitrico e il Flusso Sanguigno Ottimale - 120 Capsule (SKU: 2284)
[WARNING] Nie znaleziono line_id dla produktu: Thorne L-Arginine - a Rilascio Prolungato per Sostenere la Salute del Cuore, la Produzione di Ossido Nitrico e il Flusso Sanguigno Ottimale - 120 Capsule
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (wzorzec): numer="8", ulica="via Primavera di Praga"
[INFO] 🏙️ Znaleziono miasto: "San Vito dei Normanni"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "403-9627836"
[INFO] 📊 Wynik końcowy: imię="Carla", nazwisko="orozco", ulica="via Primavera di Praga", numer="8", miasto="San Vito dei Normanni", kod="72019", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "3917710820"
[DEBUG] Numer telefonu z Amazona: "3917710820"
[DEBUG] Sformatowany numer telefonu: "+393917710820"
[DEBUG] Używam numeru telefonu ze scrapingu: +393917710820
[INFO] Finalny numer telefonu dla zamówienia: +393917710820
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (wzorzec): numer="8", ulica="via Primavera di Praga"
[INFO] 🏙️ Znaleziono miasto: "San Vito dei Normanni"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 204-9413814-2189152

### Niezgodności
- **telefon**: Amazon=`447969231963` vs Sellasist=`4407969231963` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Puffed BUCKWHEAT BIO 100 g- BIO PLANET (SKU: 20734)
[WARNING] Nie znaleziono line_id dla produktu: Puffed BUCKWHEAT BIO 100 g- BIO PLANET
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="7 Fairacre"
[INFO] 🏙️ Znaleziono miasto: "Maidenhead"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "204-9413814"
[INFO] 📊 Wynik końcowy: imię="Ben", nazwisko="Stapleton", ulica="7 Fairacre", numer="", miasto="Maidenhead", kod="SL6 4AN", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07969231963"
[DEBUG] Numer telefonu z Amazona: "07969231963"
[DEBUG] Sformatowany numer telefonu: "+4407969231963"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407969231963
[INFO] Finalny numer telefonu dla zamówienia: +4407969231963
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Puffed BUCKWHEAT BIO 100 g- BIO PLANET (SKU: 20734)
[INFO] 📞 Finalny telefon dla zamówienia: 204-9413814
[DEBUG] Używam numeru telefonu ze scrapingu: +4407969231963
```

---

## Zamówienie 403-8912767-0385139

### Niezgodności
- **ulica**: Amazon=`41 Rue du Petit Marteau` vs Sellasist=`Rue du Petit Marteau` ❌
- **telefon**: Amazon=`33669109134` vs Sellasist=`330669109134` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Aminos de Noix de Coco BIO 250 ml (SKU: 35131)
[WARNING] Nie znaleziono line_id dla produktu: Aminos de Noix de Coco BIO 250 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="41", ulica="Rue du Petit Marteau"
[INFO] 🏙️ Znaleziono miasto: "Rennes"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "403-8912767"
[INFO] 📊 Wynik końcowy: imię="Valérie", nazwisko="Decoisy", ulica="Rue du Petit Marteau", numer="41", miasto="Rennes", kod="35000", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0669109134"
[DEBUG] Numer telefonu z Amazona: "0669109134"
[DEBUG] Sformatowany numer telefonu: "+330669109134"
[DEBUG] Używam numeru telefonu ze scrapingu: +330669109134
[INFO] Finalny numer telefonu dla zamówienia: +330669109134
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="41", ulica="Rue du Petit Marteau"
[INFO] 🏙️ Znaleziono miasto: "Rennes"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 305-0579789-5338712

### Niezgodności
- **ulica**: Amazon=`Hohenloher Str 7` vs Sellasist=`Hohenloher Str` ❌
- **telefon**: Amazon=`4915115123444` vs Sellasist=`15115123444` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: LA RIVE Black Water Parfüm Eau de Toilette, 100 ml (SKU: 43303)
[WARNING] Nie znaleziono line_id dla produktu: LA RIVE Black Water Parfüm Eau de Toilette, 100 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="7", ulica="Hohenloher Str"
[INFO] 🏙️ Znaleziono miasto: "Stuttgart"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "305-0579789"
[INFO] 📊 Wynik końcowy: imię="ralf", nazwisko="müller", ulica="Hohenloher Str", numer="7", miasto="Stuttgart", kod="70435", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "015115123444"
[DEBUG] Użyto numeru telefonu bez zmian: 015115123444
[DEBUG] Numer telefonu z Amazona: "015115123444"
[DEBUG] Sformatowany numer telefonu: "015115123444"
[DEBUG] Używam numeru telefonu ze scrapingu: 015115123444
[INFO] Finalny numer telefonu dla zamówienia: 015115123444
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="7", ulica="Hohenloher Str"
[INFO] 🏙️ Znaleziono miasto: "Stuttgart"
```

---

## Zamówienie 403-4020833-2094761

### Niezgodności
- **ulica**: Amazon=`Via Treviso 24` vs Sellasist=`Via Treviso` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Fogli di Pasta per Lasagne Vegan di Keto Chef - Pasta Konjac Sottile Istantanea, Senza Carboidrati, Shirataki, Grassi e Zuccheri, Realizzata con Farina Senza Glutine, Adatta alla Dieta Paleo | A Basso (SKU: 15571)
[WARNING] Nie znaleziono line_id dla produktu: Fogli di Pasta per Lasagne Vegan di Keto Chef - Pasta Konjac Sottile Istantanea, Senza Carboidrati, Shirataki, Grassi e Zuccheri, Realizzata con Farina Senza Glutine, Adatta alla Dieta Paleo | A Basso
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (wzorzec): numer="24", ulica="Via Treviso"
[INFO] 🏙️ Znaleziono miasto: "San Vito al Tagliamento"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "403-4020833"
[INFO] 📊 Wynik końcowy: imię="Estella", nazwisko="Torresan", ulica="Via Treviso", numer="24", miasto="San Vito al Tagliamento", kod="33078", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+393333029315"
[DEBUG] Zachowano międzynarodowy numer telefonu: +393333029315
[DEBUG] Numer telefonu z Amazona: "+393333029315"
[DEBUG] Sformatowany numer telefonu: "+393333029315"
[DEBUG] Używam numeru telefonu ze scrapingu: +393333029315
[INFO] Finalny numer telefonu dla zamówienia: +393333029315
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (wzorzec): numer="24", ulica="Via Treviso"
[INFO] 🏙️ Znaleziono miasto: "San Vito al Tagliamento"
```

---

## Zamówienie 306-7774302-9287543

### Niezgodności
- **ulica**: Amazon=`Otto Braun Straße 82` vs Sellasist=`Otto Braun Straße` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: SmartShake Pill Box Organizer, 2-pack - Black (SKU: 12112)
[WARNING] Nie znaleziono line_id dla produktu: SmartShake Pill Box Organizer, 2-pack - Black
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="82", ulica="Otto Braun Straße"
[INFO] 🏙️ Znaleziono miasto: "Berlin"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "306-7774302"
[INFO] 📊 Wynik końcowy: imię="Joshua", nazwisko="Böttel", ulica="Otto Braun Straße", numer="82", miasto="Berlin", kod="10249", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+4917663226117"
[DEBUG] Zachowano międzynarodowy numer telefonu: +4917663226117
[DEBUG] Numer telefonu z Amazona: "+4917663226117"
[DEBUG] Sformatowany numer telefonu: "+4917663226117"
[DEBUG] Używam numeru telefonu ze scrapingu: +4917663226117
[INFO] Finalny numer telefonu dla zamówienia: +4917663226117
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="82", ulica="Otto Braun Straße"
[INFO] 🏙️ Znaleziono miasto: "Berlin"
```

---

## Zamówienie 403-5734487-1533151

### Niezgodności
- **ulica**: Amazon=`5 rue du pré roux` vs Sellasist=`rue du pré roux` ❌
- **telefon**: Amazon=`33625640264` vs Sellasist=`330625640264` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Applied Nutrition Complément de Crème de Riz, Crème de Riz pour Entraînement Riche en Glucides, Source d'Énergie pour Collation, Facile à Digérer, Vegan (1kg, Golden Syrup) (SKU: 32914)
[WARNING] Nie znaleziono line_id dla produktu: Applied Nutrition Complément de Crème de Riz, Crème de Riz pour Entraînement Riche en Glucides, Source d'Énergie pour Collation, Facile à Digérer, Vegan (1kg, Golden Syrup)
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="5", ulica="rue du pré roux"
[INFO] 🏙️ Znaleziono miasto: "VERTOU"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "403-5734487"
[INFO] 📊 Wynik końcowy: imię="Florestan", nazwisko="BOUALAME", ulica="rue du pré roux", numer="5", miasto="VERTOU", kod="44120", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0625640264"
[DEBUG] Numer telefonu z Amazona: "0625640264"
[DEBUG] Sformatowany numer telefonu: "+330625640264"
[DEBUG] Używam numeru telefonu ze scrapingu: +330625640264
[INFO] Finalny numer telefonu dla zamówienia: +330625640264
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="5", ulica="rue du pré roux"
[INFO] 🏙️ Znaleziono miasto: "VERTOU"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 171-4571223-7336311

### Niezgodności
- **miasto**: Amazon=`Javea` vs Sellasist=`Alicante` ❌
- **ulica**: Amazon=`Calle Niza, 13` vs Sellasist=`PC Highway` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Thorne Research - Vitamin D/K2 Liquid (Metered Dispenser) - Dietary Supplement with Vitamins D3 and K2 to Support Healthy Bones and Muscles - 1 fluid ounce (30 mL) (SKU: 1353)
[WARNING] Nie znaleziono line_id dla produktu: Thorne Research - Vitamin D/K2 Liquid (Metered Dispenser) - Dietary Supplement with Vitamins D3 and K2 to Support Healthy Bones and Muscles - 1 fluid ounce (30 mL)
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="PC Highway"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Alicante"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-4571223"
[INFO] 📊 Wynik końcowy: imię="Chris", nazwisko="Gorden", ulica="PC Highway", numer="", miasto="Alicante", kod="03730", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "711037277"
[DEBUG] Numer telefonu z Amazona: "711037277"
[DEBUG] Sformatowany numer telefonu: "+34711037277"
[DEBUG] Używam numeru telefonu ze scrapingu: +34711037277
[INFO] Finalny numer telefonu dla zamówienia: +34711037277
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="PC Highway"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Alicante"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 403-4162203-6492342

### Niezgodności
- **ulica**: Amazon=`Via eutimene 37` vs Sellasist=`Via eutimene` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Life Extension Mega Epa Dha Softgels, 120 Count (SKU: 2398)
[WARNING] Nie znaleziono line_id dla produktu: Life Extension Mega Epa Dha Softgels, 120 Count
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (wzorzec): numer="37", ulica="Via eutimene"
[INFO] 🏙️ Znaleziono miasto: "Roma"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "403-4162203"
[INFO] 📊 Wynik końcowy: imię="Riccardo", nazwisko="Aceti", ulica="Via eutimene", numer="37", miasto="Roma", kod="00124", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+393286578161"
[DEBUG] Zachowano międzynarodowy numer telefonu: +393286578161
[DEBUG] Numer telefonu z Amazona: "+393286578161"
[DEBUG] Sformatowany numer telefonu: "+393286578161"
[DEBUG] Używam numeru telefonu ze scrapingu: +393286578161
[INFO] Finalny numer telefonu dla zamówienia: +393286578161
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (wzorzec): numer="37", ulica="Via eutimene"
[INFO] 🏙️ Znaleziono miasto: "Roma"
```

---

## Zamówienie 202-6539634-3521967

### Niezgodności
- **miasto**: Amazon=`PONTARDAWE` vs Sellasist=`LON Y WERN` ❌
- **ulica**: Amazon=`LON Y WERN` vs Sellasist=`TYN Y COEDCAE BUNGALOW` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Spice for Gingerbread BIO 60 g - DARY NATURY (SKU: 23759)
[WARNING] Nie znaleziono line_id dla produktu: Spice for Gingerbread BIO 60 g - DARY NATURY
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="TYN Y COEDCAE BUNGALOW"
[INFO] 🏙️ Znaleziono miasto: "LON Y WERN"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "202-6539634"
[INFO] 📊 Wynik końcowy: imię="Adam", nazwisko="", ulica="TYN Y COEDCAE BUNGALOW", numer="", miasto="LON Y WERN", kod="SA8 3BL", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+447922440610"
[DEBUG] Zachowano międzynarodowy numer telefonu: +447922440610
[DEBUG] Numer telefonu z Amazona: "+447922440610"
[DEBUG] Sformatowany numer telefonu: "+447922440610"
[DEBUG] Używam numeru telefonu ze scrapingu: +447922440610
[INFO] Finalny numer telefonu dla zamówienia: +447922440610
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Spice for Gingerbread BIO 60 g - DARY NATURY (SKU: 23759)
[INFO] 📞 Finalny telefon dla zamówienia: 202-6539634
```

---

## Zamówienie 205-7945641-5331528

### Niezgodności
- **miasto**: Amazon=`HARROW` vs Sellasist=`CHURCH DRIVE` ❌
- **ulica**: Amazon=`2 CHURCH DRIVE` vs Sellasist=`2` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: MuscleTech MassTech Extreme Protein Powder, Weight & Muscle Mass Gainer, Whey Mass Protein Powder With 3g Creatine, 80g Protein, 2,274 Calories, 2.72kg, Triple Chocolate (SKU: 10768)
[WARNING] Nie znaleziono line_id dla produktu: MuscleTech MassTech Extreme Protein Powder, Weight & Muscle Mass Gainer, Whey Mass Protein Powder With 3g Creatine, 80g Protein, 2,274 Calories, 2.72kg, Triple Chocolate
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="2"
[INFO] 🏙️ Znaleziono miasto: "CHURCH DRIVE"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "205-7945641"
[INFO] 📊 Wynik końcowy: imię="Hassam", nazwisko="baloch", ulica="2", numer="", miasto="CHURCH DRIVE", kod="HA2 7NW", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+447417455337"
[DEBUG] Zachowano międzynarodowy numer telefonu: +447417455337
[DEBUG] Numer telefonu z Amazona: "+447417455337"
[DEBUG] Sformatowany numer telefonu: "+447417455337"
[DEBUG] Używam numeru telefonu ze scrapingu: +447417455337
[INFO] Finalny numer telefonu dla zamówienia: +447417455337
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: MuscleTech MassTech Extreme Protein Powder, Weight & Muscle Mass Gainer, Whey Mass Protein Powder With 3g Creatine, 80g Protein, 2,274 Calories, 2.72kg, Triple Chocolate (SKU: 10768)
[INFO] 📞 Finalny telefon dla zamówienia: 205-7945641
```

---

## Zamówienie 407-0292831-2205965

### Niezgodności
- **miasto**: Amazon=`palermo` vs Sellasist=`scala b 3 p` ❌
- **ulica**: Amazon=`via francesco speciale 13 scala b 3 p` vs Sellasist=`via francesco speciale` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono telefonu po "Phone:"
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (IT): 22% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: FIOCCHI DI AMARANTO BIO 300 g - BIOGOL (SKU: 21070)
[WARNING] Nie znaleziono line_id dla produktu: FIOCCHI DI AMARANTO BIO 300 g - BIOGOL
```

### Kluczowe logi
```
[INFO] ✅ Adres włoski (wzorzec): numer="13", ulica="via francesco speciale"
[INFO] 🏙️ Znaleziono miasto: "scala b 3 p"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-0292831"
[INFO] 📊 Wynik końcowy: imię="aiuto", nazwisko="matteo", ulica="via francesco speciale", numer="13", miasto="scala b 3 p", kod="90129", kraj="Italy", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[WARNING] ⚠️ Nie znaleziono telefonu po "Phone:"
[DEBUG] Numer telefonu z Amazona: ""
[DEBUG] Sformatowany numer telefonu: ""
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
[INFO] Finalny numer telefonu dla zamówienia: 000000000
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres włoski (wzorzec): numer="13", ulica="via francesco speciale"
[INFO] 🏙️ Znaleziono miasto: "scala b 3 p"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 171-5045321-5335515

### Niezgodności
- **ulica**: Amazon=`19 Rue de la Liberté` vs Sellasist=`Rue de la Liberté` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: La Rive Taste of Kiss by La Rive Eau De Parfum Spray 3.3 oz / 100 ml (Women) (SKU: 42470)
[WARNING] Nie znaleziono line_id dla produktu: La Rive Taste of Kiss by La Rive Eau De Parfum Spray 3.3 oz / 100 ml (Women)
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="19", ulica="Rue de la Liberté"
[INFO] 🏙️ Znaleziono miasto: "Issoire"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "171-5045321"
[INFO] 📊 Wynik końcowy: imię="Marie", nazwisko="beaudelot", ulica="Rue de la Liberté", numer="19", miasto="Issoire", kod="63500", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+33637592282"
[DEBUG] Zachowano międzynarodowy numer telefonu: +33637592282
[DEBUG] Numer telefonu z Amazona: "+33637592282"
[DEBUG] Sformatowany numer telefonu: "+33637592282"
[DEBUG] Używam numeru telefonu ze scrapingu: +33637592282
[INFO] Finalny numer telefonu dla zamówienia: +33637592282
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="19", ulica="Rue de la Liberté"
[INFO] 🏙️ Znaleziono miasto: "Issoire"
```

---

## Zamówienie 408-0337016-6894727

### Niezgodności
- **miasto**: Amazon=`Darnetal` vs Sellasist=`Apt 306 Étage 3` ❌
- **ulica**: Amazon=`Apt 306 Étage 3` vs Sellasist=`4, Rue Louise Michel` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Couleur biomagique des cheveux, kératine et huile d'argan, sans ammoniac, sans résorcinol, coloration capillaire sans PPD, (6.11 Blond foncé intense) (Blond foncé) (SKU: 21083)
[WARNING] Nie znaleziono line_id dla produktu: Couleur biomagique des cheveux, kératine et huile d'argan, sans ammoniac, sans résorcinol, coloration capillaire sans PPD, (6.11 Blond foncé intense) (Blond foncé)
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="4, Rue Louise Michel"
[INFO] 🏙️ Znaleziono miasto: "Apt 306 Étage 3"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "408-0337016"
[INFO] 📊 Wynik końcowy: imię="Sharif", nazwisko="Khan Shinwari", ulica="4, Rue Louise Michel", numer="", miasto="Apt 306 Étage 3", kod="76160", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+33758181732"
[DEBUG] Zachowano międzynarodowy numer telefonu: +33758181732
[DEBUG] Numer telefonu z Amazona: "+33758181732"
[DEBUG] Sformatowany numer telefonu: "+33758181732"
[DEBUG] Używam numeru telefonu ze scrapingu: +33758181732
[INFO] Finalny numer telefonu dla zamówienia: +33758181732
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="4, Rue Louise Michel"
[INFO] 🏙️ Znaleziono miasto: "Apt 306 Étage 3"
```

---

## Zamówienie 206-0512189-0570749

### Niezgodności
- **telefon**: Amazon=`447783467285` vs Sellasist=`4407783467285` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Krokus Blackcurrant Syrup 300ml (Pack of 6) (SKU: 35804)
[WARNING] Nie znaleziono line_id dla produktu: Krokus Blackcurrant Syrup 300ml (Pack of 6)
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="42 Bargate"
[INFO] 🏙️ Znaleziono miasto: "GRIMSBY"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "206-0512189"
[INFO] 📊 Wynik końcowy: imię="Mr", nazwisko="John Alan Dyas", ulica="42 Bargate", numer="", miasto="GRIMSBY", kod="DN34 4SW", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07783467285"
[DEBUG] Numer telefonu z Amazona: "07783467285"
[DEBUG] Sformatowany numer telefonu: "+4407783467285"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407783467285
[INFO] Finalny numer telefonu dla zamówienia: +4407783467285
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Krokus Blackcurrant Syrup 300ml (Pack of 6) (SKU: 35804)
[INFO] 📞 Finalny telefon dla zamówienia: 206-0512189
[DEBUG] Używam numeru telefonu ze scrapingu: +4407783467285
```

---

## Zamówienie 028-5610909-0583527

### Niezgodności
- **ulica**: Amazon=`Karl-Marx-Straße 7` vs Sellasist=`Karl-Marx-Straße` ❌
- **telefon**: Amazon=`4915221856652` vs Sellasist=`0` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono telefonu po "Phone:"
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: adidas Fun Sensation Natural Spray - Parfümiertes Bodyspray für Damen mit fruchtigem Duft - pH-hautfreundlich - 1 x 75 ml (SKU: 39939)
[WARNING] Nie znaleziono line_id dla produktu: adidas Fun Sensation Natural Spray - Parfümiertes Bodyspray für Damen mit fruchtigem Duft - pH-hautfreundlich - 1 x 75 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="7", ulica="Karl-Marx-Straße"
[INFO] 🏙️ Znaleziono miasto: "Doberschau-Gaußig"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-5610909"
[INFO] 📊 Wynik końcowy: imię="Carsten", nazwisko="Ludwig", ulica="Karl-Marx-Straße", numer="7", miasto="Doberschau-Gaußig", kod="02692", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[WARNING] ⚠️ Nie znaleziono telefonu po "Phone:"
[DEBUG] Numer telefonu z Amazona: ""
[DEBUG] Sformatowany numer telefonu: ""
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
[INFO] Finalny numer telefonu dla zamówienia: 000000000
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="7", ulica="Karl-Marx-Straße"
[INFO] 🏙️ Znaleziono miasto: "Doberschau-Gaußig"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 304-1617455-2657950

### Niezgodności
- **miasto**: Amazon=`Alfhausen` vs Sellasist=`1` ❌
- **ulica**: Amazon=`Waller Esch 1` vs Sellasist=`Waller Esch` ❌
- **telefon**: Amazon=`4915218984324` vs Sellasist=`15218984324` ❌

### Warnings
```
[WARNING] ⚠️ Linia "Waller Esch" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Linia "Waller Esch" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Linia "Waller Esch" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Natürliches Steinsalz aus Klodawa, fein 1 kg (SKU: 34307)
[WARNING] Nie znaleziono line_id dla produktu: Natürliches Steinsalz aus Klodawa, fein 1 kg
```

### Kluczowe logi
```
[WARNING] ⚠️ Linia "Waller Esch" nie wygląda na niemiecką ulicę - pomijam
[INFO] ✅ Adres nieprzetworzony: ulica="Waller Esch"
[INFO] 🏙️ Znaleziono miasto: "1"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-1617455"
[INFO] 📊 Wynik końcowy: imię="Przemyslaw", nazwisko="Ploszynski", ulica="Waller Esch", numer="", miasto="1", kod="49594", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "015218984324"
[DEBUG] Użyto numeru telefonu bez zmian: 015218984324
[DEBUG] Numer telefonu z Amazona: "015218984324"
[DEBUG] Sformatowany numer telefonu: "015218984324"
[DEBUG] Używam numeru telefonu ze scrapingu: 015218984324
[INFO] Finalny numer telefonu dla zamówienia: 015218984324
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Linia "Waller Esch" nie wygląda na niemiecką ulicę - pomijam
```

---

## Zamówienie 402-1640847-5237930

### Niezgodności
- **ulica**: Amazon=`Calle Etruria 20 3ºC` vs Sellasist=`Calle Etruria` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: ProBiota HistaminX - 60 acid-resistant vcaps (SKU: 2498)
[WARNING] Nie znaleziono line_id dla produktu: ProBiota HistaminX - 60 acid-resistant vcaps
```

### Kluczowe logi
```
[INFO] ✅ Adres hiszpański (wzorzec): numer="20", ulica="Calle Etruria"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Madrid"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "402-1640847"
[INFO] 📊 Wynik końcowy: imię="Ana", nazwisko="Ortega", ulica="Calle Etruria", numer="20", miasto="Madrid", kod="28022", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "634870003"
[DEBUG] Numer telefonu z Amazona: "634870003"
[DEBUG] Sformatowany numer telefonu: "+34634870003"
[DEBUG] Używam numeru telefonu ze scrapingu: +34634870003
[INFO] Finalny numer telefonu dla zamówienia: +34634870003
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres hiszpański (wzorzec): numer="20", ulica="Calle Etruria"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Madrid"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 408-9953033-8113141

### Niezgodności
- **ulica**: Amazon=`Calle Islas Baleares 43` vs Sellasist=`Calle Islas Baleares` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (ES): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Medverita - Butirato de sodio (ácido butírico) - Apoya la función intestinal - 120 cápsulas (SKU: 17171)
[WARNING] Nie znaleziono line_id dla produktu: Medverita - Butirato de sodio (ácido butírico) - Apoya la función intestinal - 120 cápsulas
```

### Kluczowe logi
```
[INFO] ✅ Adres hiszpański (wzorzec): numer="43", ulica="Calle Islas Baleares"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Los Arenales del Sol"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "408-9953033"
[INFO] 📊 Wynik końcowy: imię="Dagmara", nazwisko="Grabias", ulica="Calle Islas Baleares", numer="43", miasto="Los Arenales del Sol", kod="03195", kraj="Spain", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "649703769"
[DEBUG] Numer telefonu z Amazona: "649703769"
[DEBUG] Sformatowany numer telefonu: "+34649703769"
[DEBUG] Używam numeru telefonu ze scrapingu: +34649703769
[INFO] Finalny numer telefonu dla zamówienia: +34649703769
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres hiszpański (wzorzec): numer="43", ulica="Calle Islas Baleares"
[INFO] 🇪🇸 Hiszpania - miasto z linii przed kodem: "Los Arenales del Sol"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 206-8615522-2954751

### Niezgodności
- **telefon**: Amazon=`441865423168` vs Sellasist=`1865423168` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: bugatti Felicità Women's Perfume Eau De Parfum 100 ml I Floral Women's Perfume with Summer Nuances of Bergamot, Rose, Macadamia, Musk & Sandalwood I Feminine Eau de Parfum Women, Floral & Fresh (SKU: 62459)
[WARNING] Nie znaleziono line_id dla produktu: bugatti Felicità Women's Perfume Eau De Parfum 100 ml I Floral Women's Perfume with Summer Nuances of Bergamot, Rose, Macadamia, Musk & Sandalwood I Feminine Eau de Parfum Women, Floral & Fresh
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres brytyjski (suffix): ulica="38 Bailey Road"
[INFO] 🏙️ Znaleziono miasto: "OXFORD"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "206-8615522"
[INFO] 📊 Wynik końcowy: imię="kevin", nazwisko="burton", ulica="38 Bailey Road", numer="", miasto="OXFORD", kod="OX4 3HY", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "01865423168"
[DEBUG] Użyto numeru telefonu bez zmian: 01865423168
[DEBUG] Numer telefonu z Amazona: "01865423168"
[DEBUG] Sformatowany numer telefonu: "01865423168"
[DEBUG] Używam numeru telefonu ze scrapingu: 01865423168
[INFO] Finalny numer telefonu dla zamówienia: 01865423168
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: bugatti Felicità Women's Perfume Eau De Parfum 100 ml I Floral Women's Perfume with Summer Nuances of Bergamot, Rose, Macadamia, Musk & Sandalwood I Feminine Eau de Parfum Women, Floral & Fresh (SKU: 62459)
[INFO] 📞 Finalny telefon dla zamówienia: 206-8615522
```

---

## Zamówienie 304-2564609-3786761

### Niezgodności
- **ulica**: Amazon=`Ludwig-Sauer-Str. 39` vs Sellasist=`Ludwig-Sauer-Str.` ❌
- **telefon**: Amazon=`496173320651` vs Sellasist=`6173320651` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Yogi Tea Women's Energy 17bag ( Pack of 1 ) (SKU: 15406)
[WARNING] Nie znaleziono line_id dla produktu: Yogi Tea Women's Energy 17bag ( Pack of 1 )
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="39", ulica="Ludwig-Sauer-Str."
[INFO] 🏙️ Znaleziono miasto: "Kronberg im Taunus"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-2564609"
[INFO] 📊 Wynik końcowy: imię="Sabine", nazwisko="Volkmann", ulica="Ludwig-Sauer-Str.", numer="39", miasto="Kronberg im Taunus", kod="61476", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "06173320651"
[DEBUG] Użyto numeru telefonu bez zmian: 06173320651
[DEBUG] Numer telefonu z Amazona: "06173320651"
[DEBUG] Sformatowany numer telefonu: "06173320651"
[DEBUG] Używam numeru telefonu ze scrapingu: 06173320651
[INFO] Finalny numer telefonu dla zamówienia: 06173320651
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="39", ulica="Ludwig-Sauer-Str."
[INFO] 🏙️ Znaleziono miasto: "Kronberg im Taunus"
```

---

## Zamówienie 407-7650706-9181909

### Niezgodności
- **miasto**: Amazon=`DEVENTER` vs Sellasist=`2` ❌
- **ulica**: Amazon=`Elbingstraat 2` vs Sellasist=`Elbingstraat` ❌
- **telefon**: Amazon=`31685308143` vs Sellasist=`310685308143` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Vitamine B-12 met foliumzuur, 1000 mcg - 250 calorieën (SKU: 13850)
[WARNING] Nie znaleziono line_id dla produktu: Vitamine B-12 met foliumzuur, 1000 mcg - 250 calorieën
```

### Kluczowe logi
```
[INFO] ✅ Adres holenderski (standard): ulica="Elbingstraat"
[INFO] 🏙️ Znaleziono miasto: "2"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-7650706"
[INFO] 📊 Wynik końcowy: imię="Masad", nazwisko="jawad", ulica="Elbingstraat", numer="", miasto="2", kod="", kraj="Netherlands", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0685308143"
[DEBUG] Numer telefonu z Amazona: "0685308143"
[DEBUG] Sformatowany numer telefonu: "+310685308143"
[DEBUG] Używam numeru telefonu ze scrapingu: +310685308143
[INFO] Finalny numer telefonu dla zamówienia: +310685308143
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres holenderski (standard): ulica="Elbingstraat"
[INFO] 🏙️ Znaleziono miasto: "2"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 203-5789668-3468307

### Niezgodności
- **miasto**: Amazon=`BRISTOL` vs Sellasist=`STOKE GIFFORD` ❌
- **ulica**: Amazon=`STOKE GIFFORD` vs Sellasist=`28 GREAT SWANMOOR CLOSE` ❌
- **telefon**: Amazon=`447984458977` vs Sellasist=`4407984458977` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: MuscleTech MassTech Extreme Protein Powder, Weight & Muscle Mass Gainer, Whey Mass Protein Powder With 3g Creatine, 80g Protein, 2,274 Calories, 2.72kg, Triple Chocolate (SKU: 10768)
[WARNING] Nie znaleziono line_id dla produktu: MuscleTech MassTech Extreme Protein Powder, Weight & Muscle Mass Gainer, Whey Mass Protein Powder With 3g Creatine, 80g Protein, 2,274 Calories, 2.72kg, Triple Chocolate
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres brytyjski (suffix): ulica="28 GREAT SWANMOOR CLOSE"
[INFO] 🏙️ Znaleziono miasto: "STOKE GIFFORD"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "203-5789668"
[INFO] 📊 Wynik końcowy: imię="vienna", nazwisko="ross", ulica="28 GREAT SWANMOOR CLOSE", numer="", miasto="STOKE GIFFORD", kod="BS34 8AB", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07984458977"
[DEBUG] Numer telefonu z Amazona: "07984458977"
[DEBUG] Sformatowany numer telefonu: "+4407984458977"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407984458977
[INFO] Finalny numer telefonu dla zamówienia: +4407984458977
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: MuscleTech MassTech Extreme Protein Powder, Weight & Muscle Mass Gainer, Whey Mass Protein Powder With 3g Creatine, 80g Protein, 2,274 Calories, 2.72kg, Triple Chocolate (SKU: 10768)
[INFO] 📞 Finalny telefon dla zamówienia: 203-5789668
[DEBUG] Używam numeru telefonu ze scrapingu: +4407984458977
```

---

## Zamówienie 202-1286635-2139560

### Niezgodności
- **miasto**: Amazon=`LONDON` vs Sellasist=`LEYTONSTONE` ❌
- **ulica**: Amazon=`LEYTONSTONE` vs Sellasist=`36 CARY ROAD` ❌
- **telefon**: Amazon=`447881471960` vs Sellasist=`4407881471960` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Seeking Health Histamine Digest - Support for Histamine Sensitivity and Digestive Health - Histamine Block - Anti-Histamine Tablets for Intolerance - Histamine Blocker - 90 Capsules (SKU: 2647)
[WARNING] Nie znaleziono line_id dla produktu: Seeking Health Histamine Digest - Support for Histamine Sensitivity and Digestive Health - Histamine Block - Anti-Histamine Tablets for Intolerance - Histamine Blocker - 90 Capsules
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres brytyjski (suffix): ulica="36 CARY ROAD"
[INFO] 🏙️ Znaleziono miasto: "LEYTONSTONE"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "202-1286635"
[INFO] 📊 Wynik końcowy: imię="Penny", nazwisko="Gadeke", ulica="36 CARY ROAD", numer="", miasto="LEYTONSTONE", kod="E11 3LQ", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07881471960"
[DEBUG] Numer telefonu z Amazona: "07881471960"
[DEBUG] Sformatowany numer telefonu: "+4407881471960"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407881471960
[INFO] Finalny numer telefonu dla zamówienia: +4407881471960
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Seeking Health Histamine Digest - Support for Histamine Sensitivity and Digestive Health - Histamine Block - Anti-Histamine Tablets for Intolerance - Histamine Blocker - 90 Capsules (SKU: 2647)
[INFO] 📞 Finalny telefon dla zamówienia: 202-1286635
[DEBUG] Używam numeru telefonu ze scrapingu: +4407881471960
```

---

## Zamówienie 303-4747888-5587533

### Niezgodności
- **ulica**: Amazon=`Ulica Mire Miheliceve 50` vs Sellasist=`Ulica Mire Miheliceve` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Glutenfreies Sorghummehl BIO 450 g - PROBIO (SKU: 18553)
[WARNING] Nie znaleziono line_id dla produktu: Glutenfreies Sorghummehl BIO 450 g - PROBIO
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="50", ulica="Ulica Mire Miheliceve"
[INFO] 🏙️ Znaleziono miasto: "Ljubljana"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "303-4747888"
[INFO] 📊 Wynik końcowy: imię="Sara", nazwisko="Drvaric Talian", ulica="Ulica Mire Miheliceve", numer="50", miasto="Ljubljana", kod="1000", kraj="Slovenia", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0038641228178"
[DEBUG] Numer telefonu z Amazona: "0038641228178"
[DEBUG] Sformatowany numer telefonu: "+38641228178"
[DEBUG] Używam numeru telefonu ze scrapingu: +38641228178
[INFO] Finalny numer telefonu dla zamówienia: +38641228178
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="50", ulica="Ulica Mire Miheliceve"
[INFO] 🏙️ Znaleziono miasto: "Ljubljana"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 306-1370137-7387502

### Niezgodności
- **ulica**: Amazon=`Truchseßstr 5` vs Sellasist=`Truchseßstr` ❌
- **telefon**: Amazon=`491773295246` vs Sellasist=`1773295246` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Venita Trendy Color Mousse Haarfärbemittel, 39 Cosmic Blue, 75 ml (SKU: 39151)
[WARNING] Nie znaleziono line_id dla produktu: Venita Trendy Color Mousse Haarfärbemittel, 39 Cosmic Blue, 75 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="5", ulica="Truchseßstr"
[INFO] 🏙️ Znaleziono miasto: "Bonn"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "306-1370137"
[INFO] 📊 Wynik końcowy: imię="Waldemar", nazwisko="Woschek", ulica="Truchseßstr", numer="5", miasto="Bonn", kod="53177", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0177-3295246"
[DEBUG] Użyto numeru telefonu bez zmian: 01773295246
[DEBUG] Numer telefonu z Amazona: "0177-3295246"
[DEBUG] Sformatowany numer telefonu: "01773295246"
[DEBUG] Używam numeru telefonu ze scrapingu: 01773295246
[INFO] Finalny numer telefonu dla zamówienia: 01773295246
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="5", ulica="Truchseßstr"
[INFO] 🏙️ Znaleziono miasto: "Bonn"
```

---

## Zamówienie 302-2965754-0659564

### Niezgodności
- **miasto**: Amazon=`Bratislava` vs Sellasist=`B` ❌
- **ulica**: Amazon=`Kutlikova 13 B` vs Sellasist=`Kutlikova` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Azéol 30 comprimés goût menthe (SKU: 3967)
[WARNING] Nie znaleziono line_id dla produktu: Azéol 30 comprimés goût menthe
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="13", ulica="Kutlikova"
[INFO] 🏙️ Znaleziono miasto: "B"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "302-2965754"
[INFO] 📊 Wynik końcowy: imię="Monika", nazwisko="Bedenska", ulica="Kutlikova", numer="13", miasto="B", kod="85102", kraj="Slovakia", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "00421905842801"
[DEBUG] Numer telefonu z Amazona: "00421905842801"
[DEBUG] Sformatowany numer telefonu: "+421905842801"
[DEBUG] Używam numeru telefonu ze scrapingu: +421905842801
[INFO] Finalny numer telefonu dla zamówienia: +421905842801
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="13", ulica="Kutlikova"
[INFO] 🏙️ Znaleziono miasto: "B"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 028-5453865-0303550

### Niezgodności
- **ulica**: Amazon=`Schwarzwaldstraße 5` vs Sellasist=`Schwarzwaldstraße` ❌
- **telefon**: Amazon=`4917635593108` vs Sellasist=`17635593108` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: SYOSS intensive conditioner Waves 250 ml (SKU: 50636)
[WARNING] Nie znaleziono line_id dla produktu: SYOSS intensive conditioner Waves 250 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="5", ulica="Schwarzwaldstraße"
[INFO] 🏙️ Znaleziono miasto: "Eberdingen"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-5453865"
[INFO] 📊 Wynik końcowy: imię="Sandra", nazwisko="Seibold", ulica="Schwarzwaldstraße", numer="5", miasto="Eberdingen", kod="71735", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "017635593108"
[DEBUG] Użyto numeru telefonu bez zmian: 017635593108
[DEBUG] Numer telefonu z Amazona: "017635593108"
[DEBUG] Sformatowany numer telefonu: "017635593108"
[DEBUG] Używam numeru telefonu ze scrapingu: 017635593108
[INFO] Finalny numer telefonu dla zamówienia: 017635593108
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="5", ulica="Schwarzwaldstraße"
[INFO] 🏙️ Znaleziono miasto: "Eberdingen"
```

---

## Zamówienie 026-1506501-4704358

### Niezgodności
- **telefon**: Amazon=`447973769133` vs Sellasist=`4407973769133` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Nie znaleziono line_id dla produktu: SHIMANO Workshop Grease for Shadow Plus rear derailleur, Silver, One Size, Y04121000
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres brytyjski (suffix): ulica="3 LANGLEY GROVE"
[INFO] 🏙️ Znaleziono miasto: "BISHOP AUCKLAND"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "026-1506501"
[INFO] 📊 Wynik końcowy: imię="JUDITH", nazwisko="STOKELD", ulica="3 LANGLEY GROVE", numer="", miasto="BISHOP AUCKLAND", kod="DL14 6UJ", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07973769133"
[DEBUG] Numer telefonu z Amazona: "07973769133"
[DEBUG] Sformatowany numer telefonu: "+4407973769133"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407973769133
[INFO] Finalny numer telefonu dla zamówienia: +4407973769133
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] 📞 Finalny telefon dla zamówienia: 026-1506501
[DEBUG] Używam numeru telefonu ze scrapingu: +4407973769133
[DEBUG] Używam numeru telefonu ze scrapingu: +4407973769133
```

---

## Zamówienie 407-0262424-2841167

### Niezgodności
- **ulica**: Amazon=`14 Route des Marais` vs Sellasist=`Route des Marais` ❌
- **telefon**: Amazon=`33687780778` vs Sellasist=`330687780778` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Elite Bidon Fly Team AG2R Citroen 2021, 550 ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres francuski (wzorzec): numer="14", ulica="Route des Marais"
[INFO] 🏙️ Znaleziono miasto: "Huismes"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-0262424"
[INFO] 📊 Wynik końcowy: imię="Besnard", nazwisko="benjamin", ulica="Route des Marais", numer="14", miasto="Huismes", kod="37420", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0687780778"
[DEBUG] Numer telefonu z Amazona: "0687780778"
[DEBUG] Sformatowany numer telefonu: "+330687780778"
[DEBUG] Używam numeru telefonu ze scrapingu: +330687780778
[INFO] Finalny numer telefonu dla zamówienia: +330687780778
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres francuski (wzorzec): numer="14", ulica="Route des Marais"
[INFO] 🏙️ Znaleziono miasto: "Huismes"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 305-5249516-4887532

### Niezgodności
- **ulica**: Amazon=`Kehrbrückstraße 23` vs Sellasist=`Kehrbrückstraße` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: KŁODAWA-SALZ GROB GEMAHLEN 600 g - CRYSTALLINE PLANET (SKU: 35388)
[WARNING] Nie znaleziono line_id dla produktu: KŁODAWA-SALZ GROB GEMAHLEN 600 g - CRYSTALLINE PLANET
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="23", ulica="Kehrbrückstraße"
[INFO] 🏙️ Znaleziono miasto: "Aachen"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "305-5249516"
[INFO] 📊 Wynik końcowy: imię="Marta", nazwisko="Buzun", ulica="Kehrbrückstraße", numer="23", miasto="Aachen", kod="52080", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+49 1520 3325662"
[DEBUG] Zachowano międzynarodowy numer telefonu: +49 1520 3325662
[DEBUG] Numer telefonu z Amazona: "+49 1520 3325662"
[DEBUG] Sformatowany numer telefonu: "+49 1520 3325662"
[DEBUG] Używam numeru telefonu ze scrapingu: +49 1520 3325662
[INFO] Finalny numer telefonu dla zamówienia: +49 1520 3325662
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="23", ulica="Kehrbrückstraße"
[INFO] 🏙️ Znaleziono miasto: "Aachen"
```

---

## Zamówienie 204-9833326-1588322

### Niezgodności
- **ulica**: Amazon=`UNIT 7 CARLTON COURT BROWN LANE WEST` vs Sellasist=`-` ❌
- **telefon**: Amazon=`447922443621` vs Sellasist=`4407922443621` ❌

### Warnings
```
[WARNING] ⚠️ Wykryto linię mieszkalną w UK: "UNIT 7 CARLTON COURT BROWN LANE WEST" - szukam ulicy w dalszych liniach
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: KŁODAWSKA SALT FINE 1KG - CRYSTALLINE PLANET (SKU: 35476)
[WARNING] Nie znaleziono line_id dla produktu: KŁODAWSKA SALT FINE 1KG - CRYSTALLINE PLANET
```

### Kluczowe logi
```
[WARNING] ⚠️ Wykryto linię mieszkalną w UK: "UNIT 7 CARLTON COURT BROWN LANE WEST" - szukam ulicy w dalszych liniach
[INFO] 🏙️ Znaleziono miasto: "LEEDS"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "204-9833326"
[INFO] 📊 Wynik końcowy: imię="Alicja", nazwisko="Kobierowska", ulica="", numer="", miasto="LEEDS", kod="LS12 6LT", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07922443621"
[DEBUG] Numer telefonu z Amazona: "07922443621"
[DEBUG] Sformatowany numer telefonu: "+4407922443621"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407922443621
[INFO] Finalny numer telefonu dla zamówienia: +4407922443621
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: KŁODAWSKA SALT FINE 1KG - CRYSTALLINE PLANET (SKU: 35476)
[INFO] 📞 Finalny telefon dla zamówienia: 204-9833326
[DEBUG] Używam numeru telefonu ze scrapingu: +4407922443621
```

---

## Zamówienie 028-5853115-8815563

### Niezgodności
- **ulica**: Amazon=`Vordertullnberg 301` vs Sellasist=`Vordertullnberg` ❌
- **telefon**: Amazon=`436645388261` vs Sellasist=`6645388261` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Roter Vollkornreis BIO 1 kg - BIO PLANET (SKU: 20943)
[WARNING] Nie znaleziono line_id dla produktu: Roter Vollkornreis BIO 1 kg - BIO PLANET
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="301", ulica="Vordertullnberg"
[INFO] 🏙️ Znaleziono miasto: "Tamsweg"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-5853115"
[INFO] 📊 Wynik końcowy: imię="Gruber", nazwisko="Margit", ulica="Vordertullnberg", numer="301", miasto="Tamsweg", kod="5580", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0664 5388261"
[DEBUG] Użyto numeru telefonu bez zmian: 0664 5388261
[DEBUG] Numer telefonu z Amazona: "0664 5388261"
[DEBUG] Sformatowany numer telefonu: "0664 5388261"
[DEBUG] Używam numeru telefonu ze scrapingu: 0664 5388261
[INFO] Finalny numer telefonu dla zamówienia: 0664 5388261
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="301", ulica="Vordertullnberg"
[INFO] 🏙️ Znaleziono miasto: "Tamsweg"
```

---

## Zamówienie 205-4184216-7641154

### Niezgodności
- **miasto**: Amazon=`ABERDEEN` vs Sellasist=`48 LOGIE PLACE` ❌
- **ulica**: Amazon=`48 LOGIE PLACE` vs Sellasist=`FLAT D` ❌
- **telefon**: Amazon=`447469767911` vs Sellasist=`0` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono telefonu po "Phone:"
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Krokus Unsweetened Damson Plum Butter 310 g (Pack of 6) (SKU: 35813)
[WARNING] Nie znaleziono line_id dla produktu: Krokus Unsweetened Damson Plum Butter 310 g (Pack of 6)
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="FLAT D"
[INFO] 🏙️ Znaleziono miasto: "48 LOGIE PLACE"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "205-4184216"
[INFO] 📊 Wynik końcowy: imię="Joanna", nazwisko="Nowicka", ulica="FLAT D", numer="", miasto="48 LOGIE PLACE", kod="AB16 7UN", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[WARNING] ⚠️ Nie znaleziono telefonu po "Phone:"
[DEBUG] Numer telefonu z Amazona: ""
[DEBUG] Sformatowany numer telefonu: ""
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
[INFO] Finalny numer telefonu dla zamówienia: 000000000
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: Krokus Unsweetened Damson Plum Butter 310 g (Pack of 6) (SKU: 35813)
[INFO] 📞 Finalny telefon dla zamówienia: 205-4184216
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
```

---

## Zamówienie 305-6663281-1445106

### Niezgodności
- **ulica**: Amazon=`Schumannstr 7` vs Sellasist=`Schumannstr` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Rübensaft 100% 1000ml EkaMedica (SKU: 7834)
[WARNING] Nie znaleziono line_id dla produktu: Rübensaft 100% 1000ml EkaMedica
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="7", ulica="Schumannstr"
[INFO] 🏙️ Znaleziono miasto: "Murrhardt"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "305-6663281"
[INFO] 📊 Wynik końcowy: imię="Kisiel", nazwisko="Marzena", ulica="Schumannstr", numer="7", miasto="Murrhardt", kod="71540", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+4915145796263"
[DEBUG] Zachowano międzynarodowy numer telefonu: +4915145796263
[DEBUG] Numer telefonu z Amazona: "+4915145796263"
[DEBUG] Sformatowany numer telefonu: "+4915145796263"
[DEBUG] Używam numeru telefonu ze scrapingu: +4915145796263
[INFO] Finalny numer telefonu dla zamówienia: +4915145796263
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="7", ulica="Schumannstr"
[INFO] 🏙️ Znaleziono miasto: "Murrhardt"
```

---

## Zamówienie 305-9621336-3645167

### Niezgodności
- **ulica**: Amazon=`Raimundgasse nr. 4 top 10` vs Sellasist=`Raimundgasse nr. 4 top` ❌
- **telefon**: Amazon=`` vs Sellasist=`436647923101` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: Life Extension Acetyl-L-Carnitin, 500 mg - 100 vKapseln
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="10", ulica="Raimundgasse nr. 4 top"
[INFO] 🏙️ Znaleziono miasto: "Wien"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "305-9621336"
[INFO] 📊 Wynik końcowy: imię="Hardis", nazwisko="Bergman", ulica="Raimundgasse nr. 4 top", numer="10", miasto="Wien", kod="1020", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "43-664-7923101"
[DEBUG] Numer telefonu z Amazona: "43-664-7923101"
[DEBUG] Sformatowany numer telefonu: "+436647923101"
[DEBUG] Używam numeru telefonu ze scrapingu: +436647923101
[INFO] Finalny numer telefonu dla zamówienia: +436647923101
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="10", ulica="Raimundgasse nr. 4 top"
[INFO] 🏙️ Znaleziono miasto: "Wien"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 028-2182352-1733154

### Niezgodności
- **ulica**: Amazon=`Poststr. 19` vs Sellasist=`Poststr.` ❌
- **telefon**: Amazon=`493948381530` vs Sellasist=`0` ❌

### Warnings
```
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 039483
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Tee für die Bauchspeicheldrüse BIO (25 x 2 g) - DARY NATURY (SKU: 35675)
[WARNING] Nie znaleziono line_id dla produktu: Tee für die Bauchspeicheldrüse BIO (25 x 2 g) - DARY NATURY
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="19", ulica="Poststr."
[INFO] 🏙️ Znaleziono miasto: "Ballenstedt"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-2182352"
[INFO] 📊 Wynik końcowy: imię="Anke", nazwisko="Böttcher", ulica="Poststr.", numer="19", miasto="Ballenstedt", kod="06493", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "039483"
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 039483
[DEBUG] Numer telefonu z Amazona: "039483"
[DEBUG] Sformatowany numer telefonu: ""
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
[INFO] Finalny numer telefonu dla zamówienia: 000000000
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="19", ulica="Poststr."
[INFO] 🏙️ Znaleziono miasto: "Ballenstedt"
```

---

## Zamówienie 303-6475434-6904346

### Niezgodności
- **miasto**: Amazon=`Enkenbach-alsenborn` vs Sellasist=`2` ❌
- **ulica**: Amazon=`Untere Eselsmühle 2` vs Sellasist=`Untere Eselsmühle` ❌
- **telefon**: Amazon=`4917686935179` vs Sellasist=`17686935179` ❌

### Warnings
```
[WARNING] ⚠️ Linia "Untere Eselsmühle" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Linia "Untere Eselsmühle" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Linia "Untere Eselsmühle" nie wygląda na niemiecką ulicę - pomijam
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Eveline Cosmetics - Serum Argan & Vanille Luxus Hand und Nagelcreme, Handcreme Für Sehr Trockene Hände, Handbalsam, Handcreme Repair, Reichhaltiger Pflegekomplex - 100 ml (SKU: 39108)
[WARNING] Nie znaleziono line_id dla produktu: Eveline Cosmetics - Serum Argan & Vanille Luxus Hand und Nagelcreme, Handcreme Für Sehr Trockene Hände, Handbalsam, Handcreme Repair, Reichhaltiger Pflegekomplex - 100 ml
```

### Kluczowe logi
```
[WARNING] ⚠️ Linia "Untere Eselsmühle" nie wygląda na niemiecką ulicę - pomijam
[INFO] ✅ Adres nieprzetworzony: ulica="Untere Eselsmühle"
[INFO] 🏙️ Znaleziono miasto: "2"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "303-6475434"
[INFO] 📊 Wynik końcowy: imię="Krystina", nazwisko="White", ulica="Untere Eselsmühle", numer="", miasto="2", kod="67677", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "017686935179"
[DEBUG] Użyto numeru telefonu bez zmian: 017686935179
[DEBUG] Numer telefonu z Amazona: "017686935179"
[DEBUG] Sformatowany numer telefonu: "017686935179"
[DEBUG] Używam numeru telefonu ze scrapingu: 017686935179
[INFO] Finalny numer telefonu dla zamówienia: 017686935179
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Linia "Untere Eselsmühle" nie wygląda na niemiecką ulicę - pomijam
```

---

## Zamówienie 407-4321019-3219518

### Niezgodności
- **ulica**: Amazon=`Corso pisani 92 Italia` vs Sellasist=`-` ❌
- **telefon**: Amazon=`393278248317` vs Sellasist=`0` ❌

### Warnings
```
[WARNING] ❌ Adres jest INVALID (brak podstawowych danych)
[WARNING] Niepełne dane adresowe – aktualizuję zamówienie jako anulowane: imię=Order, nazwisko=Canceled
[WARNING] ⚠️ Nie znaleziono telefonu po "Phone:"
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Produkt anulowany został dodany do listy produktów (status: Cancelled)
[WARNING] ❌ Adres jest INVALID (brak podstawowych danych)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: OstroVit Electrolites 90 compresse
```

### Kluczowe logi
```
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-4321019"
[WARNING] ❌ Adres jest INVALID (brak podstawowych danych)
[INFO] 📊 Wynik końcowy: imię="", nazwisko="", ulica="", numer="", miasto="", kod="", kraj="", valid=false
[WARNING] Niepełne dane adresowe – aktualizuję zamówienie jako anulowane: imię=Order, nazwisko=Canceled
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[WARNING] ⚠️ Nie znaleziono telefonu po "Phone:"
[DEBUG] Numer telefonu z Amazona: ""
[DEBUG] Sformatowany numer telefonu: ""
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
[INFO] Finalny numer telefonu dla zamówienia: 000000000
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Produkt anulowany został dodany do listy produktów (status: Cancelled)
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "407-4321019"
```

---

## Zamówienie 303-2051931-2693114

### Niezgodności
- **ulica**: Amazon=`Krummer Weg 44` vs Sellasist=`Krummer Weg` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Dr. BECKMANN Odplamiacz w kulce 75 ml (SKU: 41650)
[WARNING] Nie znaleziono line_id dla produktu: Dr. BECKMANN Odplamiacz w kulce 75 ml
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="44", ulica="Krummer Weg"
[INFO] 🏙️ Znaleziono miasto: "Graz"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "303-2051931"
[INFO] 📊 Wynik końcowy: imię="Klaus", nazwisko="Zitta", ulica="Krummer Weg", numer="44", miasto="Graz", kod="8041", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+436641415942"
[DEBUG] Zachowano międzynarodowy numer telefonu: +436641415942
[DEBUG] Numer telefonu z Amazona: "+436641415942"
[DEBUG] Sformatowany numer telefonu: "+436641415942"
[DEBUG] Używam numeru telefonu ze scrapingu: +436641415942
[INFO] Finalny numer telefonu dla zamówienia: +436641415942
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="44", ulica="Krummer Weg"
[INFO] 🏙️ Znaleziono miasto: "Graz"
```

---

## Zamówienie 305-3357443-2561961

### Niezgodności
- **ulica**: Amazon=`Ochsenwerder Elbdeich 364` vs Sellasist=`Ochsenwerder Elbdeich` ❌
- **telefon**: Amazon=`49406953425` vs Sellasist=`0` ❌

### Warnings
```
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 040
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: LA RIVE Moon femme, Eau de Parfum, 1er Pack (1 x 75 ml) (SKU: 41044_8)
[WARNING] Nie znaleziono line_id dla produktu: LA RIVE Moon femme, Eau de Parfum, 1er Pack (1 x 75 ml)
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="364", ulica="Ochsenwerder Elbdeich"
[INFO] 🏙️ Znaleziono miasto: "Hamburg"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "305-3357443"
[INFO] 📊 Wynik końcowy: imię="Andrea", nazwisko="Lindemann", ulica="Ochsenwerder Elbdeich", numer="364", miasto="Hamburg", kod="21037", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "040"
[WARNING] Numer telefonu zbyt krótki lub nieprawidłowy: 040
[DEBUG] Numer telefonu z Amazona: "040"
[DEBUG] Sformatowany numer telefonu: ""
[INFO] Brak prawdziwego numeru telefonu - używam domyślnego: 000000000
[INFO] Finalny numer telefonu dla zamówienia: 000000000
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="364", ulica="Ochsenwerder Elbdeich"
[INFO] 🏙️ Znaleziono miasto: "Hamburg"
```

---

## Zamówienie 406-3083593-4082742

### Niezgodności
- **miasto**: Amazon=`Narbonne` vs Sellasist=`SCALA NARBONNE VOLKSWAGEN` ❌
- **ulica**: Amazon=`SCALA NARBONNE VOLKSWAGEN` vs Sellasist=`9, Avenue du Champ-de-Mars` ❌
- **telefon**: Amazon=`33608740368` vs Sellasist=`330608740368` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (FR): 20% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Vanille 30 ml (SKU: 59077)
[WARNING] Nie znaleziono line_id dla produktu: Vanille 30 ml
```

### Kluczowe logi
```
[INFO] ✅ Adres nieprzetworzony: ulica="9, Avenue du Champ-de-Mars"
[INFO] 🏙️ Znaleziono miasto: "SCALA NARBONNE VOLKSWAGEN"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "406-3083593"
[INFO] 📊 Wynik końcowy: imię="RIGAUD", nazwisko="Nicolas", ulica="9, Avenue du Champ-de-Mars", numer="", miasto="SCALA NARBONNE VOLKSWAGEN", kod="11100", kraj="France", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0608740368"
[DEBUG] Numer telefonu z Amazona: "0608740368"
[DEBUG] Sformatowany numer telefonu: "+330608740368"
[DEBUG] Używam numeru telefonu ze scrapingu: +330608740368
[INFO] Finalny numer telefonu dla zamówienia: +330608740368
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres nieprzetworzony: ulica="9, Avenue du Champ-de-Mars"
[INFO] 🏙️ Znaleziono miasto: "SCALA NARBONNE VOLKSWAGEN"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 304-6771263-2625960

### Niezgodności
- **ulica**: Amazon=`Gastach 8` vs Sellasist=`Gastach` ❌
- **telefon**: Amazon=`43761266043` vs Sellasist=`430761266043` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Nie wykryto kraju z Sales Channel ani adresu - używam domyślnej stawki UE (21%)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (EU): 21% (nie udało się odczytać z Amazona)
[WARNING] Nie znaleziono line_id dla produktu: WEISSES DINKELMEHL TYP 700 BIO 1 kg - BIO RAJ
```

### Kluczowe logi
```
[INFO] ✅ Adres ogólny (wzorzec): numer="8", ulica="Gastach"
[INFO] 🏙️ Znaleziono miasto: "Gmunden"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-6771263"
[INFO] 📊 Wynik końcowy: imię="Roland", nazwisko="Forstinger", ulica="Gastach", numer="8", miasto="Gmunden", kod="4816", kraj="Austria", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "0761266043"
[DEBUG] Numer telefonu z Amazona: "0761266043"
[DEBUG] Sformatowany numer telefonu: "+430761266043"
[DEBUG] Używam numeru telefonu ze scrapingu: +430761266043
[INFO] Finalny numer telefonu dla zamówienia: +430761266043
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[INFO] ✅ Adres ogólny (wzorzec): numer="8", ulica="Gastach"
[INFO] 🏙️ Znaleziono miasto: "Gmunden"
[INFO] 🔍 Szukam numeru telefonu w DOM...
```

---

## Zamówienie 304-7677796-0583554

### Niezgodności
- **ulica**: Amazon=`Fichtenstraße 20` vs Sellasist=`Fichtenstraße` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Natürliches Steinsalz aus Klodawa, fein 1 kg (SKU: 34307)
[WARNING] Nie znaleziono line_id dla produktu: Natürliches Steinsalz aus Klodawa, fein 1 kg
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="20", ulica="Fichtenstraße"
[INFO] 🏙️ Znaleziono miasto: "Niedernhausen"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-7677796"
[INFO] 📊 Wynik końcowy: imię="Sabina", nazwisko="Bielenda", ulica="Fichtenstraße", numer="20", miasto="Niedernhausen", kod="65527", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "+49 176 62506282"
[DEBUG] Zachowano międzynarodowy numer telefonu: +49 176 62506282
[DEBUG] Numer telefonu z Amazona: "+49 176 62506282"
[DEBUG] Sformatowany numer telefonu: "+49 176 62506282"
[DEBUG] Używam numeru telefonu ze scrapingu: +49 176 62506282
[INFO] Finalny numer telefonu dla zamówienia: +49 176 62506282
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="20", ulica="Fichtenstraße"
[INFO] 🏙️ Znaleziono miasto: "Niedernhausen"
```

---

## Zamówienie 028-6633246-4007520

### Niezgodności
- **ulica**: Amazon=`Siedlerweg 7` vs Sellasist=`Siedlerweg` ❌
- **telefon**: Amazon=`491705268054` vs Sellasist=`1705268054` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: La Rive Touch of Woman Eau de Parfum Inhalt: 30ml Damenduft (SKU: 56240)
[WARNING] Nie znaleziono line_id dla produktu: La Rive Touch of Woman Eau de Parfum Inhalt: 30ml Damenduft
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="7", ulica="Siedlerweg"
[INFO] 🏙️ Znaleziono miasto: "Sassenburg"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "028-6633246"
[INFO] 📊 Wynik końcowy: imię="Gilda van", nazwisko="Hal", ulica="Siedlerweg", numer="7", miasto="Sassenburg", kod="38524", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "01705268054"
[DEBUG] Użyto numeru telefonu bez zmian: 01705268054
[DEBUG] Numer telefonu z Amazona: "01705268054"
[DEBUG] Sformatowany numer telefonu: "01705268054"
[DEBUG] Używam numeru telefonu ze scrapingu: 01705268054
[INFO] Finalny numer telefonu dla zamówienia: 01705268054
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="7", ulica="Siedlerweg"
[INFO] 🏙️ Znaleziono miasto: "Sassenburg"
```

---

## Zamówienie 304-1175027-6115504

### Niezgodności
- **ulica**: Amazon=`Am Spülteich 9` vs Sellasist=`Am Spülteich` ❌
- **telefon**: Amazon=`4915236400646` vs Sellasist=`15236400646` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Cafe Von Cofinluxe Für Damen. Parfum De Toilette Spray 3.0 Oz / 90 Ml (SKU: 39721_4)
[WARNING] Nie znaleziono line_id dla produktu: Cafe Von Cofinluxe Für Damen. Parfum De Toilette Spray 3.0 Oz / 90 Ml
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="9", ulica="Am Spülteich"
[INFO] 🏙️ Znaleziono miasto: "Varel"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "304-1175027"
[INFO] 📊 Wynik końcowy: imię="Norman", nazwisko="Hartmann", ulica="Am Spülteich", numer="9", miasto="Varel", kod="26316", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "015236400646"
[DEBUG] Użyto numeru telefonu bez zmian: 015236400646
[DEBUG] Numer telefonu z Amazona: "015236400646"
[DEBUG] Sformatowany numer telefonu: "015236400646"
[DEBUG] Używam numeru telefonu ze scrapingu: 015236400646
[INFO] Finalny numer telefonu dla zamówienia: 015236400646
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="9", ulica="Am Spülteich"
[INFO] 🏙️ Znaleziono miasto: "Varel"
```

---

## Zamówienie 306-4352653-3569901

### Niezgodności
- **ulica**: Amazon=`Okenstraße 70` vs Sellasist=`Okenstraße` ❌
- **telefon**: Amazon=`4915163287912` vs Sellasist=`15163287912` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] ⚠️ Użyto stawki VAT dla kraju (DE): 19% (nie udało się odczytać z Amazona)
[WARNING] Usunięto duplikat produktu: Zinc plus Selenium 15 mg (3-Monate Dosis, 90 capsules) - Dr. Mercola (SKU: 9112)
[WARNING] Nie znaleziono line_id dla produktu: Zinc plus Selenium 15 mg (3-Monate Dosis, 90 capsules) - Dr. Mercola
```

### Kluczowe logi
```
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="70", ulica="Okenstraße"
[INFO] 🏙️ Znaleziono miasto: "Offenburg"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "306-4352653"
[INFO] 📊 Wynik końcowy: imię="SEBASTIAN", nazwisko="TURICA", ulica="Okenstraße", numer="70", miasto="Offenburg", kod="77652", kraj="Germany", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "015163287912"
[DEBUG] Użyto numeru telefonu bez zmian: 015163287912
[DEBUG] Numer telefonu z Amazona: "015163287912"
[DEBUG] Sformatowany numer telefonu: "015163287912"
[DEBUG] Używam numeru telefonu ze scrapingu: 015163287912
[INFO] Finalny numer telefonu dla zamówienia: 015163287912
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[SUCCESS] ✅ Adres niemiecki (wzorzec): numer="70", ulica="Okenstraße"
[INFO] 🏙️ Znaleziono miasto: "Offenburg"
```

---

## Zamówienie 204-8426098-4685906

### Niezgodności
- **miasto**: Amazon=`HUNTINGDON` vs Sellasist=`BEALE COURT` ❌
- **ulica**: Amazon=`7 BEALE COURT` vs Sellasist=`7` ❌
- **telefon**: Amazon=`447895420894` vs Sellasist=`4407895420894` ❌

### Warnings
```
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: La Rive Brutal Classic Men Eau De Cologne EDC 100ml (SKU: 54060)
[WARNING] Nie znaleziono line_id dla produktu: La Rive Brutal Classic Men Eau De Cologne EDC 100ml
```

### Kluczowe logi
```
[INFO] ✅ Adres brytyjski (fallback): ulica="7"
[INFO] 🏙️ Znaleziono miasto: "BEALE COURT"
[INFO] 🔍 Szukam numeru telefonu w DOM...
[SUCCESS] ✅ Znaleziono telefon (regex): "204-8426098"
[INFO] 📊 Wynik końcowy: imię="Adrian", nazwisko="Twardon", ulica="7", numer="", miasto="BEALE COURT", kod="PE29 1GG", kraj="United Kingdom", valid=true
[INFO] 🔍 Szukam telefonu w sekcji Contact Buyer...
[SUCCESS] ✅ Znaleziono telefon: "07895420894"
[DEBUG] Numer telefonu z Amazona: "07895420894"
[DEBUG] Sformatowany numer telefonu: "+4407895420894"
[DEBUG] Używam numeru telefonu ze scrapingu: +4407895420894
[INFO] Finalny numer telefonu dla zamówienia: +4407895420894
[WARNING] ⚠️ Nie znaleziono Sales Channel - używam wykrywania z DOM
[WARNING] Usunięto duplikat produktu: La Rive Brutal Classic Men Eau De Cologne EDC 100ml (SKU: 54060)
[INFO] 📞 Finalny telefon dla zamówienia: 204-8426098
[DEBUG] Używam numeru telefonu ze scrapingu: +4407895420894
```

