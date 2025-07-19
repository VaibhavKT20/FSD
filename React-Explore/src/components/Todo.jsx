import React, { useState } from "react";

const Todo = ({ title, description }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "Understand the basics of React",
    },
    {
      id: 2,
      title: "Build a Todo App",
      description: "Create a simple Todo application using React",
    },
    {
      id: 3,
      title: "Explore React Hooks",
      description: "Learn about useState, useEffect, and other hooks",
    },
  ]);
  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        title: "New Todo " + Math.random().toFixed(2),
        description: "Description for new todo",
      },
    ]);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={addTodo}> Add Todo</button>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
