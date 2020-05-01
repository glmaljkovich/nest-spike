<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Requirements
- node > 10
- Have a relational database running (preferably postgres)

## Configuration
Copy `ormconfig.example.js` to `ormconfig.js` and modify it with your local db settings.
Copy `src/config/config.example.ts` to `src/config/config.ts`

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## API
URL: http://localhost:3000

**POST** `/auth/login`
Iniciar sesion

body:
```json
{
	"username": "pepe@gmail.com",
	"password": "alagrandelepusecuca"
}
```
response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBlcGU1QGdtYWlsLmNvbSIsInN1YiI6NSwiaWF0IjoxNTg4MzY0Njk0LCJleHAiOjE1ODgzNjQ3NTR9.MBk1syfXepQgc7A92-_xpObXSnjNaKEFSDPzfbJR9hY"
}
```

**POST** `/user`
Registrar usuario

body:
```json
{
  "name": "Pepe",
  "email": "pepe@gmail.com",
  "phone": "5353456",
  "position": "Payamedico",
  "entity": "Hospital Garraham",
  "town": "CABA",
  "password": "alagrandelepusecuca"
}
```

response:
```json
{
  "name": "pepe",
  "email": "pepe@gmail.com",
  "entity": "Hospital Garraham",
  "position": "Payamedico",
  "phone": "5353456",
  "town": "CABA",
  "id": 1
}
```

**GET** `/user` listar usuarios

response:
```json
[
  {
    "id": 1,
    "name": "pepe",
    "email": "pepe@gmail.com",
    "phone": "5353456",
    "position": "Payamedico",
    "entity": "Hospital Garraham",
    "town": "CABA"
  },
  {
    "id": 2,
    "name": "pipo",
    "email": "pipo@gmail.com",
    "phone": "5353456",
    "position": "Payamedico",
    "entity": "Hospital Garraham",
    "town": "CABA"
  }
]
```
