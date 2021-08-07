
function Bar({ value, maxValue }) {
  return (
    <div className="bar" style={{ "--value": value, "--max-value": maxValue }}>
      {value}
    </div>
  );
}

export default Bar;
