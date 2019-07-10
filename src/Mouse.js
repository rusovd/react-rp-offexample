import React, { Component } from "react";

class Mouse extends Component {
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
