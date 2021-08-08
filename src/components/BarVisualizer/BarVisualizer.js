import FlipMove from "react-flip-move";

import Bar from "./Bar";

function BarVisualizer({ values }) {

  return (
    <FlipMove
      className="bar-container" 
      style={{
        "--max-value": values.reduce((a,b)=>Math.max(a,b.value), 0),
        "--length": values.length,
      }}
    >
      {values.map(bar => (
        <Bar
          key={bar.id}
          value={bar.value}
          status={bar.status}
        />
      ))}
    </FlipMove>
  );
}

export default BarVisualizer;
