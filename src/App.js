import { useState } from "react";
import random_array from "./scripts/utils/random_array";
import bubble_sort from "./scripts/bubble_sort";

import BarVisualizer from "./components/BarVisualizer/BarVisualizer";

class RenderController {
  constructor(delayInMs, arrayCallback, highlightCallback, swapCallback) {
    this.delayInMs = delayInMs;
    this.arrayCallback = arrayCallback;
    this.highlightCallback = highlightCallback;
    this.highlight = [];
    this.swapCallback = swapCallback;
    this.swap = [];
  }
  render(arr) {
    this.arrayCallback([...arr]);
    this.highlightCallback(this.highlight);
    this.swapCallback(this.swap);
    this.highlight = [];
    this.swap = [];
  }
  async delay() {
    await new Promise(resolve => setTimeout(resolve, this.delayInMs));
  }
  setHighlight(value) {
    this.highlight[value] = true;
  }
  setSwap(value) {
    this.swap[value] = true;
  }
}

function App() {
  const [array, setArray] = useState(random_array(25, 1337));
  const [highlight, setHighlight] = useState([]);
  const [swap, setSwap] = useState([]);
  let RC = new RenderController(500, setArray, setHighlight, setSwap);

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
