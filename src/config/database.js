require('dotenv/config');

const {DB_DEV_NAME, DB_DEV_PASSWORD, DB_DEV_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_USER} = process.env;

module.exports = {
  "development": {
    "username": DB_DEV_USER,
    "password": DB_DEV_PASSWORD,
    "database": DB_DEV_NAME,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": "postgres"
  },
}
