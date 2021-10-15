const { DataTypes } = require('sequelize');
const connection = require('../database/connection');

const users = require('../controllers/listAllUsers');
const createUsers = require('../controllers/createUsers');

module.exports = app => {
  app.get("/users", (req, res) => {
    users(req, res, DataTypes, connection);
  });

  app.post("/users", (req, res) => {
    createUsers(req, res, DataTypes, connection);
  });
};