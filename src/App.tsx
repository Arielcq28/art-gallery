import { useState } from "react";
import "./App.css";
import Art from "./components/Art";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
      <Art></Art>
    </>
  );
}

export default App;
