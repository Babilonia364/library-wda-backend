const Users = require('../models/users');

module.exports = (req, res, DataTypes, connection) => {
  try {
    Users(connection, DataTypes).findAll()
      .then(users => {
        res.status(200).json(users);
      });
  } catch (err) {
    err.customMessage = "Error when consulting database"
    res.status(500).json(err);
  }
}