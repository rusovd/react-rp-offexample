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
