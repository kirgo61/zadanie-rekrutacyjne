import React from "react";
import "./Slide.scss";
const Slide = ({ number, arrayOfComponents }) => {
  return (
    <div className={`slide slide--${number ? number : 1}`}>
      {arrayOfComponents.map((component) => {
        return component;
      })}
    </div>
  );
};

export default Slide;
