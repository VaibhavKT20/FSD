import React, { useState, memo } from "react";

function Rerender() {
  const [title, setTitle] = useState("My name is Aman");

  function updateTitle() {
    setTitle("My name is " + Math.random().toFixed(2));
  }

  return (
    <div>
      <button onClick={updateTitle}>Click me to change the title</button>
      <Header title={title} />
    </div>
  );
}

const Header = memo(function Header({ title }) {
  return <div>{title}</div>;
});

export default Rerender;
