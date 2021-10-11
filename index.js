const connection = require('./database/connection');
const User = require('./models/user');

try {
  connection.authenticate()
    .then(() => {
      console.log("Successfully connected to database");
      console.log("models: ", User === connection.models.User);
      User.sync({ alter: true })
        .then(() => {
          console.log("User table successfully (re)created");
        });
    });
} catch (error) {
  console.log("Unable to conect: ", error);
}