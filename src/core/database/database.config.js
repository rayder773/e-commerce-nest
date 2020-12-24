require('dotenv').config();

const config = {
  user: process.env.DB_USER || 'root',
  pass: process.env.DB_PASS || '1',
  name: process.env.DB_NAME || 'shop',
  host: process.env.DB_HOST || 'db',
  port: process.env.DB_PORT || '5432',
  dialect: process.env.DB_DIALECT || 'postgres',
};

module.exports = {
  development: {
    username: config.user,
    password: config.pass,
    database: config.name,
    host: config.host,
    port: config.port,
    dialect: config.dialect,
  },
  test: {
    username: config.user,
    password: config.pass,
    database: config.name,
    host: config.host,
    port: config.port,
    dialect: config.dialect,
  },
  production: {
    username: config.user,
    password: config.pass,
    database: config.name,
    host: config.host,
    dialect: config.dialect,
  },
};
