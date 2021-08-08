import { useState } from "react";
import random_array from "../scripts/utils/random_array";
import bubble_sort from "../scripts/sorting/bubble_sort";
import selection_sort from "../scripts/sorting/selection_sort";

import SortingController from "../scripts/sorting/SortingController";
import BarVisualizer from "../components/BarVisualizer/BarVisualizer";

function Sort() {
  const [values, setValues] = useState(random_array(10, 123));
  const [statuses, setStatuses] = useState([]);
  let RC = new SortingController(250, setValues, setStatuses);

  const [algo, setAlgo] = useState("bubble");

  function sort() {
    if(algo === "bubble") {
      bubble_sort(values, RC);
    }else if(algo === "selection") {
      selection_sort(values, RC);
    }
  }

  return (
    <div>
      <BarVisualizer values={values} statuses={statuses} />
      <div className="controls">
        <button onClick={sort}>sort</button>
        <select name="algo" id="algo" value={algo} onChange={(e)=>setAlgo(e.target.value)}>
          <option value="bubble">Bubble Sort</option>
          <option value="selection">Selection Sort</option>
        </select>
      </div>
    </div>
  );
}

export default Sort;
