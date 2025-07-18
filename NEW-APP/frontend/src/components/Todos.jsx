import React from "react";

function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo._id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "24px",
            maxWidth: "400px",
            margin: "32px auto",
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
          }}
        >
          <h1 style={{ fontSize: "2rem", color: "#2d3748" }}>{todo.title}</h1>
          <h2
            style={{
              fontSize: "1.2rem",
              color: "#4a5568",
              fontWeight: "normal",
              marginBottom: "16px",
            }}
          >
            {todo.description}
          </h2>
          <button
            style={{
              padding: "10px 20px",
              background: "#3182ce",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Mark as completed
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
