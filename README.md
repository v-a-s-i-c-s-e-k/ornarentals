# Orna Rentals

Dísznövények bérlését kezelő webalkalmazás.

## Felhasznált technológiák

- Backend: PHP 8.5, Laravel 13
- Frontend: Angular 22, TypeScript 6
- Adatbázis: MariaDB 12.3
- Fejlesztői környezet: Windows
- Verziókezelés: Git és GitHub

## Projektstruktúra

- `backend/` – Laravel REST API
- `web/` – Angular webalkalmazás
- `docs/` – Tervezési és fejlesztési dokumentáció
- `api/` – API-dokumentáció

## Fejlesztői környezet előkészítése

### Szükséges eszközök

- Git
- PHP 8.5 és Composer 2
- Node.js 24 és npm 12
- MariaDB 12.3

### Projekt letöltése

```powershell
git clone https://github.com/v-a-s-i-c-s-e-k/ornarentals.git
cd ornarentals
```

### MariaDB-adatbázis előkészítése

Minden fejlesztő a saját gépén hozza létre az adatbázist és a fejlesztői felhasználót.

A MariaDB konzoljában rendszergazdai jogosultsággal:

```sql
CREATE DATABASE IF NOT EXISTS orna_rentals_dev
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

CREATE USER IF NOT EXISTS 'orna_dev'@'localhost'
IDENTIFIED BY 'SAJAT_EROS_JELSZO';

CREATE USER IF NOT EXISTS 'orna_dev'@'127.0.0.1'
IDENTIFIED BY 'SAJAT_EROS_JELSZO';

GRANT ALL PRIVILEGES ON orna_rentals_dev.*
TO 'orna_dev'@'localhost';

GRANT ALL PRIVILEGES ON orna_rentals_dev.*
TO 'orna_dev'@'127.0.0.1';
```

A `SAJAT_EROS_JELSZO` helyére saját jelszót kell megadni.

A `backend/.env` fájl `DB_PASSWORD` értékét ennek megfelelően kell beállítani. A `.env` fájlt nem szabad feltölteni a GitHubra.

### Backend

1. Lépj be a `backend` könyvtárba.
2. Telepítsd a függőségeket: `composer install`
3. Hozd létre az `.env` fájlt az `.env.example` alapján.
4. Állítsd be a MariaDB-adatbázis kapcsolódási adatait.
5. Hozd létre az alkalmazáskulcsot: `php artisan key:generate`
6. Indítsd el a Laravel fejlesztői szervert:

   `php artisan serve --host=127.0.0.1 --port=8000`

### Frontend

1. Lépj be a `web` könyvtárba.
2. Telepítsd a függőségeket: `npm ci`
3. Indítsd el az Angular fejlesztői szervert: `npm start`

A webalkalmazás címe:

http://127.0.0.1:4200

## Ellenőrzés és tesztelés

### Backend

Az API állapotellenőrző végpontja:

`GET /api/v1/health`

Automatikus backendtesztek futtatása:

`php artisan test`

### Frontend

Az Angular alkalmazás fordításának ellenőrzése:

`npm run build`
