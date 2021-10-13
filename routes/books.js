const { DataTypes } = require('sequelize');
const connection = require('../database/connection');

const books = require('../controllers/listAllBooks');

module.exports = app => {
  app.get("/books", (req, res) => {
    books(req, res, DataTypes, connection);
  });
};