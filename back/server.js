const express = require("express");
const parser = require("body-parser");
const app = express();
const api = require("./routes");
const cors = require("cors");

require("dotenv").config();
const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cors({ origin: SERVER_ADDRESS }));

app.use("/api", api);

const server = app.listen(8000, () => {
  console.log("server is listening on port 8000");
});

module.exports = server;
