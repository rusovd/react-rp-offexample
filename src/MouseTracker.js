import React from "react";

import Mouse from "./Mouse";
import Cat from "./Cat";

const MouseTracker = props => (
  <div>
    <h1>Move the mouse around!</h1>
    <Mouse
      className={props.className}
      render={mouse => <Cat mouse={mouse} />}
    />
  </div>
);

export default MouseTracker;
