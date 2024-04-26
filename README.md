# Instrukcja uruchomienia projektu React

## Wymagania wstępne

Zanim zaczniesz, upewnij się, że masz zainstalowane następujące narzędzia:

### Node.js

Projekt wymaga, aby na Twoim komputerze była zainstalowana wersja 18>= Node.js. Możesz sprawdzić swoją aktualną wersję Node.js, używając poniższego polecenia w terminalu:

```
node -v
```
Jeśli potrzebujesz zainstalować lub zaktualizować Node.js, odwiedź oficjalną [stronę](https://nodejs.org/en) i pobierz odpowiedni instalator dla swojego systemu operacyjnego.

### Yarn
Do zarządzania zależnościami projektu używany jest ```Yarn```. Jeśli nie masz go zainstalowanego, możesz to zrobić wykonując poniższe polecenie:

```
npm install --global yarn
```

## Uruchomienie projektu
Po zainstalowaniu wymaganych narzędzi, przejdź do katalogu głównego projektu i wykonaj następujące kroki:

Instalacja zależnościAby zainstalować wszystkie zależności projektu, wykonaj:
```
yarn install
```
## Uruchomienie serwera deweloperskiego
Aby uruchomić serwer deweloperski, który umożliwi Ci pracę i testowanie projektu w czasie rzeczywistym, użyj polecenia:
```
yarn dev
```

Serwer deweloperski będzie dostępny pod adresem http://localhost:5173.

## Uruchomienie wersji produkcyjnej
Jeśli chcesz uruchomić projekt w wersji produkcyjnej, najpierw zbuduj aplikację, a następnie uruchom ją:
```
yarn build
yarn start
```

Wersja produkcyjna aplikacji będzie również dostępna pod adresem http://localhost:4173, chyba że skonfigurowano inny port.