import Bar from "./Bar";

function BarVisualizer({ values, statuses }) {

  return (
    <div
      className="bar-container" 
      style={{
        "--max-value": Math.max(...values),
        "--length": values.length,
      }}
    >
      {values.map((bar, i) => (
        <Bar
          key={i}
          value={bar}
          status={statuses[i]}
        />
      ))}
    </div>
  );
}

export default BarVisualizer;
