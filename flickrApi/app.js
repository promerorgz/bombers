const express = require("express");
require("dotenv").config();

const app = express();
const port = 6969;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/photos", (req, res) => {
  res.send("Photos go here");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
