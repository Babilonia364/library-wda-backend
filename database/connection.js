const { Sequelize } = require('sequelize');

const connection = new Sequelize({
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: 'postgres'
});

module.exports = connection;