const Books = require('../models/book');

module.exports = (req, res, DataTypes, connection) => {
  try {
    Books(connection, DataTypes).findAll()
      .then(books => {
        res.status(200).json(books);
      });
  } catch (err) {
    err.customMessage = "Error when consulting database";
    res.status(500).json(err);
  }
}