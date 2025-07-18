const express = require("express");
const { createTodo, updateTodo } = require("./types");
const Todo = require("./db");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Create a new todo
app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    return res.status(411).json({ msg: "You sent wrong inputs" });
  }

  try {
    await Todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });

    res.json({ msg: "Todo Created Successfully" });
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

// Get all todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json({ todos });
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

// Mark todo as completed
app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    return res.status(411).json({ msg: "You sent wrong inputs" });
  }

  try {
    await Todo.updateOne({ _id: updatePayload.id }, { completed: true });
    res.json({ msg: "Todo marked as completed" });
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
