import Bar from "./Bar";

function BarVisualizer({ values, statuses }) {

  return (
    <div className="bar-container">
      {values.map((bar, i) => (
        <Bar
          key={i}
          value={bar}
          maxValue={Math.max(...values)}
          status={statuses[i]}
        />
      ))}
    </div>
  );
}

export default BarVisualizer;
