
## Description

Minimalistic Ecommerce apis built with nodejs ,typescript, postgresql

## Pre Installation
Change Database credentials at src/config/typeorm.config.ts

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

## API END POINTS

Register: http://localhost:8080/auth/signup (POST)
Login: http://localhost:8080/auth/signin (POST)

Create Category: http://localhost:8080/categories (POST with authorization token from login api)
Get All Category: http://localhost:8080/categories (GET with authorization token from login api)


Create Product: http://localhost:8080/products (POST with authorization token from login api)
Get All Product: http://localhost:8080/products (GET with authorization token from login api)

Create Order: http://localhost:8080/orders (POST with authorization token from login api)
Get All Order of a specific User: http://localhost:8080/orders/:userId (GET with authorization token from login api)




