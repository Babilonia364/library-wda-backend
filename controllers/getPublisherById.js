const Publishers = require('../models/publisher');

module.exports = (req, res, DataTypes, connection) => {
  const id = req.params.id;

  try {
    Publishers(connection, DataTypes).findByPk(id)
      .then(publishers => {
      res.status(200).json(publishers);
    });
  } catch (err) {
    err.customMessage = "Error when consulting database";
    res.status(500).json(err);
  }
}