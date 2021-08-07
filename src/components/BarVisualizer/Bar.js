import cx from "classnames";

function Bar({ value, maxValue, highlight, swap }) {
  return (
    <div
      className={cx("bar",{ "highlight": highlight, "swap": swap })}
      style={{ "--value": value, "--max-value": maxValue }}
    >
      {value}
    </div>
  );
}

export default Bar;
