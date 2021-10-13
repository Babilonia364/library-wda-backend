const Rents = require('../models/rents');

module.exports = (req, res, DataTypes, connection) => {
  try {
    Rents(connection, DataTypes).findAll()
      .then(rents => {
        res.status(200).json(rents);
      });
  } catch (err) {
    err.customMessage = "Error when consulting database";
    res.status(500).json(err);
  }
}