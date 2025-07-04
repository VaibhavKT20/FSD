const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/backend-api", (req, res) => {
  res.send("Hello from backend API");
}); 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
