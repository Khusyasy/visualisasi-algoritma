import { forwardRef } from "react";
import cx from "classnames";

const Bar = forwardRef(function({ value, status }, ref) {
  return (
    <div
      ref={ref}
      className={cx("bar",{ [status]: status })}
      style={{ "--value": value }}
    >
      {value}
    </div>
  );
})

export default Bar;
