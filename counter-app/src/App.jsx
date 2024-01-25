import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const clearValue = () => {
    setCounter(0);
  };
  const addValue = () => {
    setCounter(counter + 1);
  };
  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Counter App</h1>
      <button onClick={addValue}>+</button>
      <button onClick={decreaseValue}>-</button>
      <button onClick={clearValue}>Clear</button>
      <h3>Counter Value is: {counter}</h3>
    </>
  );
}

export default App;
