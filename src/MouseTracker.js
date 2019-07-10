import React from "react";

import Mouse from "./Mouse";
import Cat from "./Cat";

const MouseTracker = props => (
  <div>
    <h1>Move the mouse around! (using hook)</h1>
    <Mouse
      className={props.className}
      render={position => <Cat mouse={position} />}
    />
  </div>
);

export default MouseTracker;
