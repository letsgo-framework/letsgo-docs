# Environments

Most of the application's configurations are defined by environment. It means that you can specify settings for each environment (`development`, `production`, `test`, etc.) with corresponding `.env` files. letsgo uses `godotenv` for that.

***

## Database

**Path —** `./.env`.

 - `DATABASE_URL` (string): Mongodb database url
 - `DATABASE_HOST` (string): Host where db is running at
 - `DATABASE_PORT` (string): Port where db is running
 - `DATABASE` (string): Database name

::: note
 if `DATABASE_URL` is not provided, the connection url is created by concatenating `DATABASE_HOST` and `DATABASE_PORT`.
:::

#### Example

**Path —** `./.env`.
```
DATABASE_HOST=127.0.0.1
DATABASE_PORT=27017
DATABASE=letsgo
```

***

## Server

**Path —** `./.env`.

 - `PORT` (string): Port on which Server will run

::: note
 `PORT` should be prefixed with a `:`
:::

#### Example

**Path —** `./.env`.

```
PORT=:8000
```

***
