module.exports = (req, res, DataTypes, connection) => {
  try {
    connection.query(`SELECT "Books".id, book_name, author, release, publisher, publisher_name
      FROM "Books"
      INNER JOIN "Publishers"
      ON publisher = "Publishers".id`
    ).then(books => {
      res.status(200).json(books[0]);
    })
  } catch (err) {
    err.customMessage = "Error when consulting database";
    res.status(500).json(err);
  }
}