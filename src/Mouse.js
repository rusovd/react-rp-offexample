import React from "react";
import useMouse from "./useMouse";

const Mouse = props => {
  const [position, setMousePosition] = useMouse();

  return (
    <div
      className={props.className}
      style={{ height: "100vh" }}
      onMouseMove={setMousePosition}
    >
      {props.render(position)}
    </div>
  );
};

export default Mouse;
