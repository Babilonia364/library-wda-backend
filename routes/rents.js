const { DataTypes } = require('sequelize');
const connection = require('../database/connection');

const rents = require('../controllers/listAllRents');

module.exports = app => {
  app.get("/rents", (req, res) => {
    rents(req, res, DataTypes, connection);
  });
};