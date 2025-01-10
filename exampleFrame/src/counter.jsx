import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  let increment = function () {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={increment}>Mi boton</button>
      <p>Contador : {count}</p>
    </div>
  );
}
