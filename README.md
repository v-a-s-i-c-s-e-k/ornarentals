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
