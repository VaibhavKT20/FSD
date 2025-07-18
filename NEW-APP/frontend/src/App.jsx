import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await fetch("http://localhost:3000/todos");
    const data = await res.json();
    setTodos(data.todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (title, description) => {
    await fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetchTodos(); // Refresh after adding
  };

  return (
    <div>
      <CreateTodo addTodo={addTodo} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
