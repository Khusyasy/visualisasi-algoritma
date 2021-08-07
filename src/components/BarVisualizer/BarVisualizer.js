import Bar from "./Bar";


function BarVisualizer({ array, highlight, swap }) {

  return (
    <div className="bar-container">
      {array.map((bar, i) => (
        <Bar
          key={i}
          value={bar}
          maxValue={Math.max(...array)}
          highlight={highlight[i]}
          swap={swap[i]}
        />
      ))}
    </div>
  );
}

export default BarVisualizer;
