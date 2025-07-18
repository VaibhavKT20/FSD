import React from "react";

function Todos() {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "24px",
        maxWidth: "400px",
        margin: "32px auto",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "8px", color: "#2d3748" }}>
        Go to Gym
      </h1>
      <h2
        style={{
          fontSize: "1.2rem",
          marginBottom: "16px",
          color: "#4a5568",
          fontWeight: "normal",
        }}
      >
        You need to go to gym
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
  );
}

export default Todos;
