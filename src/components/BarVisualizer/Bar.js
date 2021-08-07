import cx from "classnames";

function Bar({ value, maxValue, status }) {

  return (
    <div
      className={cx("bar",{ [status]: status })}
      style={{ "--value": value, "--max-value": maxValue }}
    >
      {value}
    </div>
  );
}

export default Bar;
