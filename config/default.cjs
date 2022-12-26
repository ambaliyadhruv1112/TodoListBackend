const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT || 3500,
  primaryDB: process.env.DB_URL,
};
