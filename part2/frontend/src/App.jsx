import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data.jokes);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
      });
  }, []);
  return (
    <>
      <h1>Full stack web development</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={index}>
          <p>{joke}</p>
        </div>
      ))}
    </>
  );
}

export default App;
