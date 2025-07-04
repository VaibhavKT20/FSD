const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://vaibhavkr522:vaibhav123456789@cluster0.mrczwf7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const User = mongoose.model("Users", {
  name: String,
  age: Number,
  email: String,
  password: String,
});
// Signup Route (async)
app.post("/signup", async (req, res) => {
  const { username, password, name } = req.body;

  try {
    const existingUser = await User.findOne({ email: username });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const user = new User({
      name,
      email: username,
      password,
    });

    await user.save();

    res.json({ msg: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
