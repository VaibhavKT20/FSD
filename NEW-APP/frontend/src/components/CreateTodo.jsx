import React, { useState } from "react";

function CreateTodo({ addTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    addTodo(title, description);
    setTitle("");
    setDescription("");
  };

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
      <h2 style={{ marginBottom: "24px", color: "#4f46e5" }}>Create a Todo</h2>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          style={inputStyle}
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" style={buttonStyle}>
          Add a Todo
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "18px",
  borderRadius: "8px",
  border: "1px solid #c7d2fe",
  fontSize: "16px",
  outline: "none",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "linear-gradient(90deg, #6366f1 0%, #818cf8 100%)",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontWeight: "600",
  fontSize: "16px",
  cursor: "pointer",
};

export default CreateTodo;
