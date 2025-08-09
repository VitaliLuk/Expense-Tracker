💼 Expense Tracker — Osobisty Portfel Online
📝 Opis projektu

Expense Tracker to aplikacja webowa umożliwiająca śledzenie przychodów i wydatków, przegląd wszystkich transakcji, edycję istniejących wpisów oraz podgląd aktualnego bilansu w formie podsumowania i wykresu kołowego.
Dane zapisywane są lokalnie w localStorage, dzięki czemu nie znikają po odświeżeniu strony.
✨ Funkcjonalności

    ➕ Dodawanie przychodów i wydatków

    ✏️ Edytowanie istniejących transakcji

    📜 Podgląd wszystkich transakcji w jednym miejscu

    📊 Wykres kołowy pokazujący proporcje przychodów i wydatków

    💾 Zapisywanie danych w localStorage

    📱 Responsywny interfejs (desktop, tablet, mobile)

🛠 Technologie

    React 18 — biblioteka do tworzenia interfejsu użytkownika

    React Router v6 — routing pomiędzy stronami

    Context API — zarządzanie globalnym stanem aplikacji

    Recharts — generowanie wykresu kołowego

    CSS (Flexbox, Grid, Media Queries) — responsywny design

📂 Struktura podstron

    / — Podsumowanie finansowe + bilans + wykres kołowy

    /income — Lista przychodów + formularz dodawania

    /expense — Lista wydatków + formularz dodawania

    /all-transactions — Wszystkie transakcje z możliwością edycji

🚀 Instalacja i uruchomienie

# 1. Sklonuj repozytorium
git clone https://github.com/twoj-login/twoj-repozytorium.git

# 2. Przejdź do folderu projektu
cd twoj-repozytorium

# 3. Zainstaluj zależności
npm install

# 4. Uruchom projekt
npm run dev

Aplikacja uruchomi się pod adresem:
http://localhost:5173 (domyślnie dla Vite)
✅ Wymagania SMOKE CHECK — Spełnione

✔ Aplikacja uruchamia się lokalnie i wyświetla stronę główną
✔ Projekt zgodny z tematem „osobisty portfel online”
✔ React jako główna biblioteka
✔ Zarządzanie stanem przez Context API
✔ Obsługa cyklu życia komponentów przez useEffect
✔ Formularze kontrolowane do dodawania i edycji transakcji
✔ Routing z React Router v6
✔ Responsywny interfejs (Flex / Grid / Media Queries)
✔ Dane zapisywane w localStorage
✔ Wykres kołowy pokazujący proporcje przychodów i wydatków

📜 Licencja

Projekt stworzony w ramach kursu i przeznaczony do celów edukacyjnych.
