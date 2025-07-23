import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Rerender from "./components/Rerender";
import Todo from "./components/Todo";
import CardWrapper from "./components/CardWrapper";

function Header({ title }) {
  return <div>{title}</div>;
}

function App() {
  return (
    <>
      {/* <Rerender />
      <Header title="Raman" /> */}
      {/* <Todo /> */}
      <CardWrapper innerComponent={TextComponent} />
    </>
  );
}

export default App;
