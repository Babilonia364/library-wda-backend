const { DataTypes } = require('sequelize');
const connection = require('../database/connection');

const users = require('../controllers/listAllUsers');

module.exports = app => {
  app.get("/users", (req, res) => {
    users(req, res, DataTypes, connection);
  });
};