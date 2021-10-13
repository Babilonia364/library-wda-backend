const Publishers = require('../models/publisher');

module.exports = (req, res, DataTypes, connection) => {
  try {
    Publishers(connection, DataTypes).findAll()
      .then(publishers => {
        res.status(200).json(publishers);
      });
  } catch (err) {
    err.customMessage = "Error when consulting database";
    res.status(500).json(err);
  }
}