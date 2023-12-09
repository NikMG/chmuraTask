const dotenv = (require("dotenv").config()).parsed


let config = {
  username: dotenv.DB_USERNAME,
  password: dotenv.DB_PASSWORD,
  database: dotenv.DB_NAME,
  host: dotenv.DB_HOST,
  dialect: "mysql",
};

module.exports = {
  development: config,
  test: config,
  production: config
}
