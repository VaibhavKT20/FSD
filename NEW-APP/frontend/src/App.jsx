import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await fetch("http://localhost:3000/todos");
      const data = await res.json();
      setTodos(data.todos);
    } catch (error) {
      console.error("Failed to fetch todos", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (title, description) => {
    try {
      await fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchTodos();
    } catch (error) {
      console.error("Failed to add todo", error);
    }
  };

  const markCompleted = async (id) => {
    try {
      await fetch("http://localhost:3000/completed", {
        method: "PUT",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchTodos();
    } catch (error) {
      console.error("Failed to update todo", error);
    }
  };

  return (
    <div>
      <CreateTodo addTodo={addTodo} />
      <Todos todos={todos} markCompleted={markCompleted} />
    </div>
  );
}

export default App;
