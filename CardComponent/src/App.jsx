import React from "react";

const CardWrapper = ({ children }) => {
  return (
    <div style={{ border: "2px solid black", padding: "16px" }}>{children}</div>
  );
};

function TextComponent() {
  return <div>Text Component</div>;
}

function App() {
  return (
    <>
      <CardWrapper>
        <TextComponent />
      </CardWrapper>
      <CardWrapper>
        <TextComponent />
      </CardWrapper>
    </>
  );
}

export default App;
