import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Button color="blue" disabled text="first Button" />
      <Button color="red" text="click me" onClickProperty={clicked} />
      <Button
        color="green"
        text="click me too"
        onClickProperty={() => console.log("green")}
      />
    </>
  );
  function clicked() {
    console.log("red button clicked");
  }
}

function Button({ color, disabled, text, onClickProperty }) {
  const cursor = !disabled ? "pointer" : "not-allowed";
  return (
    <button
      style={{ backgroundColor: color, cursor: cursor }}
      onClick={onClickProperty}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
