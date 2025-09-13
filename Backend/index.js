// const express = require("express");
import express from "express";
// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();
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

//get a list of 5 jokes

app.get("/jokes", (req, res) => {
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the bicycle fall over? Because it was two-tired!",
  ];
  res.json({ jokes: jokes });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
