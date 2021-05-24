import React from "react";

const Arrows = ({
  currentSlide,
  moveLeft,
  showArrows,
  moveRight,
  lengthOfSortedItems,
}) => {
  return (
    <>
      <button
        disabled={currentSlide === 1 ? true : false}
        onClick={moveLeft}
        className={`${
          showArrows === false ? "no-display" : null
        } slider-button slider-left`}
      >
        <i className="far fa-arrow-alt-circle-left"></i>
      </button>
      <button
        disabled={currentSlide === lengthOfSortedItems ? true : false}
        onClick={moveRight}
        className={`${
          showArrows === false ? "no-display" : null
        } slider-button slider-right`}
      >
        <i className="far fa-arrow-alt-circle-right"></i>
      </button>
    </>
  );
};

export default Arrows;
