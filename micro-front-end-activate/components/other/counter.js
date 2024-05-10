"use client";

import { useState } from "react";
// import styles from "../styles/Mario.module.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = (e) => {
    setCounter(counter + 1);
  };

  const decrement = (e) => {
    setCounter(counter - 1);
  };

  return (
    <main
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        padding: 3,
      }}
    >
      <button style={{ margin: 5 }} type="button" onClick={increment}>
        +
      </button>
      <p style={{ margin: 5 }}> {counter}</p>
      <button style={{ margin: 5 }} type="button" onClick={decrement}>
        -
      </button>
    </main>
  );
};

export default Counter;
