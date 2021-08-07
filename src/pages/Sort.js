import { useState } from "react";
import random_array from "../scripts/utils/random_array";
import bubble_sort from "../scripts/sorting/bubble_sort";

import SortingController from "../scripts/sorting/SortingController";
import BarVisualizer from "../components/BarVisualizer/BarVisualizer";

function Sort() {
  const [values, setValues] = useState(random_array(25, 1337));
  const [statuses, setStatuses] = useState([]);
  let RC = new SortingController(500, setValues, setStatuses);

  function sort() {
    bubble_sort(values, RC);
  }

  return (
    <div>
      <BarVisualizer values={values} statuses={statuses} />
      <button onClick={sort}>sort</button>
    </div>
  );
}

export default Sort;
