This is a very basic node server which has authentication with jwt tokents and mongodb for database.

## Requirements

NodeJS v10 or greater
npm v6 or greater

## Setup

```
git clone https://github.com/ceyhuncicek/jwt-express-react-example
cd jwt-express-react-example
npm install
```

## Setting up Mongo DB, Token secret and .env file

You can install mongo db locally or you can use mongo db atlas. 
1. Create a .env file on the root.
2. Go to https://docs.mongodb.com/manual/installation/ follow guides install mongodb on your computer start it and provide the link in .env file 
or provide a link from mongo atlas.
3. Your .env file should look something like below.
```
DB_CONNECT = mongodb://127.0.0.1:27017/users_db
TOKEN_SECRET = veryverysecretsomerandomlettersandnumbers
```
4. That's all! Now Start the project.

## Start Project

```
npm run start
```

or

```
yarn start
```
## Usage

Test requestes provided in `TestRequests.http` file. You can use Rest Client extension for VsCode. Just uncomment correct block and it will ask you to make request.
Or you can use tools like postman, postwoman, insomnia etc.

Make POST request to `localhost:5000/api/user/register` with `name` `email` and `password` to register an user account.
Make GET request to `localhost:5000/api/user/login` with `email` and `password` to login an user account.
When you login you will get a jwt token. You can use this token in your header in your further requests. Jwt token will be recognized and you will be able to do other requests without login.

## Technologies used

- [mongoose](https://www.npmjs.com/package/mongoose) - Database
- [express](https://www.npmjs.com/package/express) - Web framework
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Tokens
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Crypt passwords
- [@hapi/joi](https://www.npmjs.com/package/@hapi/joi) - for form validation it is depreciated so i will change it later to [Joi](https://joi.dev/api/?v=17.2.1)
