import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1); // prevent below 0
  };
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h2>Count: {count}</h2>
      <div className="btn-group">
        <button className="btn" onClick={increment}>+</button>
        <button className="btn" onClick={decrement}>-</button>
        <button className="btn reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
