import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "Study the React documentation and build a small project.",
      completed: false,
    },
    {
      id: 2,
      title: "Learn Vite",
      description: "Understand the Vite build tool and its advantages.",
      completed: false,
    },
    {
      id: 3,
      title: "Build a Todo App",
      description: "Create a simple Todo application using React and Vite.",
      completed: false,
    },
  ]);

  return (
    <div>
      <Todo title="React" description="Learn React"></Todo>
      <Todo title="Vite" description="Learn Vite"></Todo>
      <Todo title="Todo App" description="Build a Todo App"></Todo>
      {/* 
      <Todo title={todo[0].title} description={todo[0].description}></Todo>
      <Todo title={todo[1].title} description={todo[1].description}></Todo>
      <Todo title={todo[2].title} description={todo[2].description}></Todo> */}

      {todo.map((item) => {
        return (
          <Todo
            key={item.id}
            title={item.title}
            description={item.description}
          ></Todo>
        );
      })}
    </div>
  );
}

export default App;

function Todo(props) {
  return (
    <div className="todo">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}
