import React from "react";

const CardWrapper = ({ innerComponent }) => {
  return <div style={{ border: "2px solid black" }}>{innerComponent}</div>;
};
function TextComponent() {
  return <div>Text Component</div>;
}
export default CardWrapper;
