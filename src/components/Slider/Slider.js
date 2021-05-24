import React, { useState, useEffect, useRef, useReducer } from "react";
import "./Slider.scss";
import Slide from "./Slide/Slide";
import Dots from "./Dots/Dots";
import { debounce } from "lodash";
import { sliderCalculations } from "./../../utils/functions/sliderCalculations";
import Arrows from "./Arrows/Arrows";
import PropTypes from "prop-types";

// style={{ transform: "translateX(-1285px)" }}
const Slider = ({ children, amountOfItemsOnSlide, showDots, showArrows }) => {
  // console.log(props.children);
  const sortedItems = sliderCalculations(
    children ? children : [],
    amountOfItemsOnSlide ? amountOfItemsOnSlide : 1
  );
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slideWidth, setSlideWidth] = useState(0);
  const [widthToTransform, setWidthToTranform] = useState(0);
  const [scrollBarWidth, setScrollBarWidth] = useState(0);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  const ref = useRef(null);
  useEffect(() => {
    setSlideWidth(ref.current ? ref.current.clientWidth : 0);
    setScrollBarWidth(window.innerWidth - ref.current.clientWidth);
  }, []);
  let width = window.innerWidth;

  const changeSlideSizeToSkip = () => {
    if (width !== window.innerWidth) {
      setSlideWidth(ref.current ? ref.current.clientWidth : 0);
      setScrollBarWidth(window.innerWidth - document.body.clientWidth);
      setCurrentSlide(1);
      setWidthToTranform(0);
    }
  };
  const delayChangeSlideSizeToSkip = debounce(changeSlideSizeToSkip, 1000);
  window.addEventListener("resize", delayChangeSlideSizeToSkip);

  const moveLeft = () => {
    setCurrentSlide(currentSlide - 1);
    setWidthToTranform(widthToTransform - (slideWidth + scrollBarWidth));
  };
  const moveRight = () => {
    setWidthToTranform(widthToTransform + (slideWidth + scrollBarWidth));
    setCurrentSlide(currentSlide + 1);
  };
  const moveSlideWithDot = (numberOfDot) => {
    setWidthToTranform(slideWidth * numberOfDot + scrollBarWidth * numberOfDot);
    setCurrentSlide(numberOfDot + 1);
  };
  const touchStartHandler = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  const touchMoveHandler = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const touchEndHandler = () => {
    console.log(touchStart - touchEnd);
    if (
      (touchStart - touchEnd > (window.innerWidth < 500 ? 25 : 75)) &
      (currentSlide < sortedItems.length)
    ) {
      moveRight();
    } else if (
      touchStart - touchEnd < (window.innerWidth < 500 ? -25 : -75) &&
      currentSlide > 1
    ) {
      moveLeft();
    }
  };
  let sliderStyles = {
    transform: `translateX(${widthToTransform * -1}px)`,
    transition: "1s",
  };
  return (
    <div
      // onTouchStart={(e) => touchStartHandler(e)}
      // onTouchMove={(e) => touchMoveHandler(e)}
      // onTouchEnd={() => touchEndHandler()}
      ref={ref}
      className="slider-container"
    >
      <div
        onTouchStart={(e) => touchStartHandler(e)}
        onTouchMove={(e) => touchMoveHandler(e)}
        onTouchEnd={() => touchEndHandler()}
        style={sliderStyles}
        className="slider"
        id="slider"
      >
        {sortedItems.map((arrayOfComponents) => {
          return <Slide arrayOfComponents={arrayOfComponents} />;
        })}
      </div>
      <Arrows
        showArrows={showArrows === undefined ? true : showArrows}
        moveLeft={moveLeft}
        moveRight={moveRight}
        currentSlide={currentSlide}
        lengthOfSortedItems={sortedItems.length}
      />

      <Dots
        showDots={showDots === undefined ? true : showDots}
        currentSlide={currentSlide}
        numberOfSlides={sortedItems.length} ///////////////////////////////////////////////////ZMIENIĆ!!!!!!!!!!!!!!!!!!!!!!!!
        moveSlideWithDot={moveSlideWithDot}
      />
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.array,
  amountOfItemsOnSlide: PropTypes.number,
  showArrows: PropTypes.bool,
  showDots: PropTypes.bool,
};

export default Slider;

// translate: `transformX(${pxToTransform})`

// const moveSlidesAutomatically = () => {
//   if (currentSlide === sortedItems.length) {
//     setCurrentSlide(1);
//     setWidthToTranform(0);
//     console.log(currentSlide, widthToTransform);
//   } else {
//     setCurrentSlide(currentSlide + 1);
//     setWidthToTranform(widthToTransform + slideWidth);
//     console.log(currentSlide, widthToTransform);
//     // clearInterval(interval);
//   }
// };
// const interval = setInterval(moveSlidesAutomatically, 5000);
