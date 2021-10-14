const { DataTypes } = require('sequelize');
const connection = require('../database/connection');

const publishers = require('../controllers/listAllPublishers');
const publishersId = require('../controllers/getPublisherById');

module.exports = app => {
  app.get("/publishers", (req, res) => {
    publishers(req, res, DataTypes, connection);
  });

  app.get("/publishers/:id", (req, res) => {
    publishersId(req, res, DataTypes, connection);
  });
};