const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Twitter API endpoint");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login to continue</h1>");
});

app.get("/signup", (req, res) => {
  res.send("<h1>Please signup to continue</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("Youtube API endpoint");
});
app.get("/github", (req, res) => {
  res.json({ message: "Github API endpoint" });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
