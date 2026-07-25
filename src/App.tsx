import { useState } from "react";
import "./App.css";
import { getArtwork } from "./api/artworks";

async function App() {
  const [count, setCount] = useState(0);

  const artwork = await getArtwork(129884);

  console.log(artwork);

  return (
    <button
      type="button"
      className="counter"
      onClick={() => setCount((count) => count + 1)}
    >
      Count is {count}
    </button>
  );
}

export default App;
