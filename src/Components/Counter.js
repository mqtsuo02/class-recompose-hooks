import React from "react";

const Counter = ({ label, count, isMounted, handleClick }) => (
  <div
    style={{
      minWidth: "200px",
      margin: "5px",
      padding: "20px",
      border: "1px solid gray",
    }}
  >
    <h2>{label}</h2>
    <p>{count}</p>
    <button onClick={handleClick}>+</button>
    <p>{isMounted ? "Mounted!!" : "Not Mounted."}</p>
  </div>
);

export default Counter;
