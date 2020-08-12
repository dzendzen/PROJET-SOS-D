const express = require("express");
const parser = require("body-parser");
const app = express();

app.use(parser.json());

// home page
app.get("/", (req, res) => {
  res.send("hello world");
});

const server = app.listen(8000, () => {
  console.log("server is listening on port 8000");
});

module.exports = server;
