const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("public"));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.post("/", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  res.status(200).send({ username });
});

app.listen(port);

console.log("listening...");
