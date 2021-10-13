const connection = require('./database/connection');
const customExpress = require('./config/customExpress');

try {
  connection.authenticate()
    .then(() => {
      console.log("Successfully connected to database");

      const app = customExpress();

      app.listen(3000, () => console.log("Server on and linstening on port 3000"));
    });
} catch (error) {
  console.log("Unable to conect: ", error);
}