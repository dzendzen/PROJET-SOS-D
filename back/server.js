const express = require("express");
const parser = require("body-parser");
const app = express();
const api = require("./routes");
const cors = require("cors");

require("dotenv").config();
const SERVER_ADDRESS = process.env.SERVER_ADDRESS;

app.use(parser.json());
// app.use(parser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", api);

// home page
// app.get("/", (req, res) => {
//   res.send("hello world");
// });

const server = app.listen(8000, () => {
  console.log("server is listening on port 8000");
});

module.exports = server;
