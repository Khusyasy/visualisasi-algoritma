import cx from "classnames";

function Bar({ value, status }) {

  return (
    <div
      className={cx("bar",{ [status]: status })}
      style={{ "--value": value }}
    >
      {value}
    </div>
  );
}

export default Bar;
