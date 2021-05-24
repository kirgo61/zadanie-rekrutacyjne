import React from "react";
import "./Dots.scss";
const Dots = ({ numberOfSlides, moveSlideWithDot, currentSlide, showDots }) => {
  const arrayForMap = [];
  for (let i = 1; i <= numberOfSlides; i++) {
    arrayForMap.push(i);
  }
  return (
    <div
      className={`dots-container ${showDots === false ? "no-display" : null}`}
    >
      {arrayForMap.map((numberOfDot) => {
        return (
          <div
            className={`single-dot ${
              currentSlide === numberOfDot ? "active" : "disabled"
            }`}
            onClick={() => {
              moveSlideWithDot(numberOfDot - 1);
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Dots;
