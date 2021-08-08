import FlipMove from "react-flip-move";

import Bar from "./Bar";

function BarVisualizer({ values, statuses }) {

  return (
    <FlipMove
      className="bar-container" 
      style={{
        "--max-value": Math.max(...values),
        "--length": values.length,
      }}
    >
      {values.map((bar, i) => (
        <Bar
          key={bar}
          value={bar}
          status={statuses[i]}
        />
      ))}
    </FlipMove>
  );
}

export default BarVisualizer;
