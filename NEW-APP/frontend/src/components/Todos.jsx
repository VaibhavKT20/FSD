import React from "react";

function Todos({ todos, markCompleted }) {
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
            backgroundColor: todo.completed ? "#d1fae5" : "#fff",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              color: todo.completed ? "#065f46" : "#2d3748",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.title}
          </h1>
          <h2
            style={{
              fontSize: "1.2rem",
              color: todo.completed ? "#047857" : "#4a5568",
              fontWeight: "normal",
              marginBottom: "16px",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.description}
          </h2>
          {!todo.completed && (
            <button
              onClick={() => markCompleted(todo._id)}
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
          )}
          {todo.completed && (
            <p style={{ color: "#065f46", fontWeight: "bold" }}>
              Completed &#10003;
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Todos;
