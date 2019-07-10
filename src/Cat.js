import React from "react";

const urlImage =
  "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350";

const Cat = props => {
  const { mouse } = props;
  return (
    <img
      alt="nice cat"
      src={urlImage}
      style={{ position: "absolute", left: mouse.x, top: mouse.y }}
    />
  );
};

export default Cat;
