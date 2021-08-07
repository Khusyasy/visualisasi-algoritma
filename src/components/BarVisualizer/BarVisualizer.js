import Bar from "./Bar";


function BarVisualizer({ array, statuses }) {

  return (
    <div className="bar-container">
      {array.map((bar, i) => (
        <Bar
          key={i}
          value={bar}
          maxValue={Math.max(...array)}
        />
      ))}
    </div>
  );
}

export default BarVisualizer;
