const express = require("express");
const app = express();
function isOldEnough(age) {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "You are not old enough to ride this ride.",
      status: 411,
    });
  } 
}

app.get("/ride1", isOldEnoughMiddleware, (req, res) => {
  res.json({
    msg: "You are old enough to ride this ride1.",
  });
});

app.get("/ride2", isOldEnoughMiddleware, (req, res) => {
  res.json({
    msg: "You are old enough to ride this ride2.",
  });
});
app.listen(3000);
