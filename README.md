## Render props (official example React docs)

__Official example from https://reactjs.org/docs/render-props.html__:

Mouse.js
```javascript
import React, { Component } from "react";

class Mouse extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  };

  render() {
    return (
      <div
        className={this.props.className}
        style={{ height: "100vh" }}
        onMouseMove={this.handleMouseMove}
      >
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default Mouse;

```
demo: https://codesandbox.io/s/render-props-official-example-react-docs-11ylj



---

__Using custom hook__:

useMouse.js
```javascript
import React, { useState } from "react";

const useMouse = (initialValue = { x: 0, y: 0 }) => {
  const [position, setPosition] = useState(initialValue);
  const handleMouseMove = event => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    });
  };
  return [position, handleMouseMove];
};
export default useMouse;
```

Mouse.js
```javascript
import React, { useState } from "react";
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
```

demo: https://codesandbox.io/s/usecustomhook-with-render-props-5k93q





## Disclaimer

This is a draft version of chapter RP/HOC for future React Tutorial.