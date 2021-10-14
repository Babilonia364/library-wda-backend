module.exports = (req, res, DataTypes, connection) => {
  try {
    connection.query(`SELECT "Rents".id, book, "user", rent_date, devolution_date, book_name, user_name
      FROM "Rents"
      INNER JOIN "Books"
      ON book = public."Books".id
      INNER JOIN "Users"
      ON "user" = "Users".id
    `).then(rents => {
      res.status(200).json(rents[0]);
    });
  } catch (err) {
    err.customMessage = "Error when consulting database";
    res.status(500).json(err);
  }
}