import React, { memo } from "react";

function PureComponent(props) {
  console.log("This is the Pure component ");
  return (
    <div>
      PureComponent state==:
      {props.name}
      <div
        style={{
          width: "60%",
          fontFamily: "monospace",
          fontSize: "25px",
          margin: "auto",
          lineHeight: "30px",
          marginTop: "40px",
        }}
      >
        Pure components are the components which render the same output for the
        same state and props. In function components, you can achieve these pure
        components through memoized React.memo() API wrapping around the
        component. This API prevents unnecessary re-renders by comparing the
        previous props and new props using shallow comparison. So it will be
        helpful for performance optimizations. But at the same time, it won't
        compare the previous state with the current state because function
        component itself prevents the unnecessary rendering by default when you
        set the same state again.
      </div>
    </div>
  );
}

export default memo(PureComponent);
