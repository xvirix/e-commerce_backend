const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
// import sequelize connection


//Build Server
const app = express();
const PORT = process.env.PORT || 3001;

//Server middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
