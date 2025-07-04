const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

// 🔌 Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://vaibhavkr522:vaibhav123456789@cluster0.mrczwf7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// 🧱 User Schema & Model
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
});

const User = mongoose.model("User", userSchema);

// 🔐 Login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });
  if (user) {
    const token = jwt.sign(
      { username: user.username, name: user.name },
      jwtPassword
    );
    res.json({ token });
  } else {
    res.status(403).json({ error: "Invalid username or password" });
  }
});

// 📝 Signup route
app.post("/signup", async (req, res) => {
  const { username, password, name } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  const newUser = new User({ username, password, name });
  await newUser.save();

  const token = jwt.sign({ username, name }, jwtPassword);
  res.json({ message: "Signup successful", token });
});

// ✅ JWT Middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token required" });
  }

  jwt.verify(token, jwtPassword, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid or expired token" });
    req.user = user;
    next();
  });
}

// 🔐 Protected route to get all users (excluding passwords)
app.get("/users", authenticateToken, async (req, res) => {
  const users = await User.find({}, { password: 0, __v: 0 }); // Exclude password and __v
  res.json(users);
});

// ▶️ Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
