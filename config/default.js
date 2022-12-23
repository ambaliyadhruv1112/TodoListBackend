require('dotenv').config;

module.export = {
  port: process.env.PORT || 3000,
  primaryDB: process.env.DB_URL,
};
