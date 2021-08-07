import { useState } from "react";
import random_array from "./scripts/utils/random_array";
import bubble_sort from "./scripts/bubble_sort";

import BarVisualizer from "./components/BarVisualizer/BarVisualizer";

function App() {
  const [array, setArray] = useState(random_array(25, 1337));
  const [visualizerID, setVisualizerID] = useState(0);

  function sort() {
    setArray(bubble_sort(array));
    setVisualizerID(visualizerID + 1);
  }

  return (
    <div>
      <BarVisualizer key={visualizerID} array={array} />
      <button onClick={sort}>sort</button>
    </div>
  );
}

export default App;
