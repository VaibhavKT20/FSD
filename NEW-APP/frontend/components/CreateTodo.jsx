import React from "react";

function CreateTodo() {
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "32px",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        borderRadius: "18px",
        boxShadow: "0 8px 32px rgba(60, 72, 88, 0.15)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          marginBottom: "24px",
          color: "#4f46e5",
          fontWeight: "700",
          letterSpacing: "1px",
        }}
      >
        Create a Todo
      </h2>
      <input
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "18px",
          borderRadius: "8px",
          border: "1px solid #c7d2fe",
          fontSize: "16px",
          outline: "none",
          transition: "border-color 0.2s",
        }}
        type="text"
        placeholder="Title"
      />
      <input
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "24px",
          borderRadius: "8px",
          border: "1px solid #c7d2fe",
          fontSize: "16px",
          outline: "none",
          transition: "border-color 0.2s",
        }}
        type="text"
        placeholder="Description"
      />
      <button
        style={{
          width: "100%",
          padding: "12px",
          background: "linear-gradient(90deg, #6366f1 0%, #818cf8 100%)",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontWeight: "600",
          fontSize: "16px",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(99, 102, 241, 0.15)",
          transition: "background 0.2s",
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}

export default CreateTodo;
