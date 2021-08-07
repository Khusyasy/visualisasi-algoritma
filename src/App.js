import { useState } from "react";
import random_array from "./scripts/utils/random_array";
import bubble_sort from "./scripts/sorting/bubble_sort";

import SortingController from "./scripts/sorting/SortingController";
import BarVisualizer from "./components/BarVisualizer/BarVisualizer";

function App() {
  const [array, setArray] = useState(random_array(25, 1337));
  const [highlight, setHighlight] = useState([]);
  const [swap, setSwap] = useState([]);
  let RC = new SortingController(500, setArray, setHighlight, setSwap);

  function sort() {
    bubble_sort(array, RC);
  }

  return (
    <div>
      <BarVisualizer array={array} highlight={highlight} swap={swap} />
      <button onClick={sort}>sort</button>
    </div>
  );
}

export default App;
