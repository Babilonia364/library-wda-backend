const { DataTypes } = require('sequelize');
const connection = require('../database/connection');

const rents = require('../controllers/listAllRents');
const createRents = require('../controllers/createRents');

module.exports = app => {
  app.get("/rents", (req, res) => {
    rents(req, res, DataTypes, connection);
  });

  app.post("/rents", (req, res) => {
    createRents(req, res, DataTypes, connection);
  });
};