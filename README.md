
## Description

Minimalistic Ecommerce apis built with nodejs ,typescript, postgresql

## Pre Installation
 - Create new database
 - Change Database credentials at src/config/typeorm.config.ts

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

 - Register -  http://localhost:8080/auth/signup (POST) (parameters: name,email,age,gender,password)
 - Login -  http://localhost:8080/auth/signin (POST) (parameters: email,password)

 - Create Category - http://localhost:8080/categories (POST with authorization token from login api) (parameters: name,description)
 - Get All Category - http://localhost:8080/categories (GET with authorization token from login api)


 - Create Product - http://localhost:8080/products (POST with authorization token from login api) (parameters: name, description,image,price,category_id)
 - Get All Product - http://localhost:8080/products (GET with authorization token from login api)

 - Create Order - http://localhost:8080/orders (POST with authorization token from login api) (parameters: product_id,user_id)
 - Get All Order of a specific User - http://localhost:8080/orders/:userId (GET with authorization token from login api)




