const mysql = require("mysql");

require("dotenv").config();
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE = process.env.DATABASE;

const connection = mysql.createConnection({
  host: "localhost",
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE,
});

connection.connect(function (err) {
  if (!err) {
    console.log("connexion réussie à la bdd");
  } else {
    console.log("erreur lors de la connexion à la bdd");
  }
});

module.exports = connection;
