const { DataTypes } = require('sequelize');
const connection = require('../database/connection');

const books = require('../controllers/listAllBooks');
const createBooks = require('../controllers/createBooks');

module.exports = app => {
  app.get("/books", (req, res) => {
    books(req, res, DataTypes, connection);
  });

  app.post("/books", (req, res) => {
    createBooks(req, res, DataTypes, connection);
  });
};