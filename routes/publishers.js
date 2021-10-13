const { DataTypes } = require('sequelize');
const connection = require('../database/connection');

const publishers = require('../controllers/listAllPublishers');

module.exports = app => {
  app.get("/publishers", (req, res) => {
    publishers(req, res, DataTypes, connection);
  });
};