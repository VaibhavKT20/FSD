const express = require("express");

const app = express();

app.get("/health-checkup", (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  const kidneyId = req.query.kidneyId;
  if (username === "admin" && password === "admin") {
    if (kidneyId === "12345") {
      res.send("Hello Admin, your kidney is healthy");
    } else {
      res.send("Hello Admin, your kidney is not healthy");
    }
    res.send("Hello Admin");
  } else {
    res.send("Invalid credentials");
  }

  if (!username === "admin" && password === "admin") {
    res.status(400).json({ msg: "Invalid credentials" });
    return;
  }
});

app.listen(3000);
