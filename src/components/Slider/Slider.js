import React, { useState, useEffect, useRef } from "react";
import "./Slider.scss";
import Slide from "./Slide/Slide";
import Dots from "./Dots/Dots";
import { debounce } from "lodash";
import { sliderCalculations } from "./../../utils/functions/sliderCalculations";
import Arrows from "./Arrows/Arrows";
import PropTypes from "prop-types";

const Slider = ({
  children,
  amountOfItemsOnSlide,
  showDots,
  showArrows,
  autoPlay,
  autoPlaySpeed,
}) => {
  //sort given array of children components
  const sortedItems = sliderCalculations(
    children ? children : [],
    amountOfItemsOnSlide ? amountOfItemsOnSlide : 1
  );
  //defined state
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slideWidth, setSlideWidth] = useState(0);
  const [widthToTransform, setWidthToTranform] = useState(0);
  const [scrollBarWidth, setScrollBarWidth] = useState(0);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  //initialized ref to get scroll-bar width
  const ref = useRef(null);

  useEffect(() => {
    setSlideWidth(ref.current ? ref.current.clientWidth : 0);
    setScrollBarWidth(window.innerWidth - ref.current.clientWidth);
  }, []);

  let width = window.innerWidth;
  //if window width is changed, update slide width
  const changeSlideSizeToSkip = () => {
    //while using google chrome on mobile scrolling launches resize event because of height changes, so i want to prevent that.
    if (width !== window.innerWidth) {
      setSlideWidth(ref.current ? ref.current.clientWidth : 0);
      setScrollBarWidth(window.innerWidth - document.body.clientWidth);
      setCurrentSlide(1);
      setWidthToTranform(0);
    }
  };
  //to prevent hundreds of unnessesary resize calls I've used debounce function from lodash libary to launch function only after one second from width change
  const delayChangeSlideSizeToSkip = debounce(changeSlideSizeToSkip, 1000);
  window.addEventListener("resize", delayChangeSlideSizeToSkip);
  //slider moving handlers
  const moveLeftHandler = () => {
    setCurrentSlide(currentSlide - 1);
    setWidthToTranform(widthToTransform - (slideWidth + scrollBarWidth));
  };
  const moveRightHandler = () => {
    setWidthToTranform(widthToTransform + (slideWidth + scrollBarWidth));
    setCurrentSlide(currentSlide + 1);
  };
  const moveSlideWithDotHandler = (numberOfDot) => {
    setWidthToTranform(slideWidth * numberOfDot + scrollBarWidth * numberOfDot);
    setCurrentSlide(numberOfDot + 1);
  };
  //touch swipes handlers
  const touchStartHandler = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  const touchMoveHandler = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const touchEndHandler = () => {
    if (
      //if screen width is smaller than 500px allow make slider more sensitive to swipes
      (touchStart - touchEnd > (window.innerWidth < 500 ? 25 : 75)) &
      (currentSlide < sortedItems.length)
    ) {
      moveRightHandler();
    } else if (
      //if screen width is smaller than 500px allow make slider more sensitive to swipes
      touchStart - touchEnd < (window.innerWidth < 500 ? -25 : -75) &&
      currentSlide > 1
    ) {
      moveLeftHandler();
    }
  };
  //function that automaticly moves slider
  const moveSlidesAutomaticallyHandler = () => {
    if (currentSlide === sortedItems.length) {
      setCurrentSlide(1);
      setWidthToTranform(0);
      clearInterval(interval);
    } else {
      setCurrentSlide(currentSlide + 1);
      setWidthToTranform(widthToTransform + (slideWidth + scrollBarWidth));
      clearInterval(interval);
    }
  };
  //calling interval with moving function
  const interval =
    autoPlay === true
      ? setInterval(
          moveSlidesAutomaticallyHandler,
          autoPlaySpeed ? autoPlaySpeed : 5000
        )
      : null;

  let sliderStyles = {
    transform: `translateX(${widthToTransform * -1}px)`,
    transition: "1s",
  };
  return (
    <div ref={ref} className="slider-container">
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
        moveLeft={moveLeftHandler}
        moveRight={moveRightHandler}
        currentSlide={currentSlide}
        lengthOfSortedItems={sortedItems.length}
      />

      <Dots
        showDots={showDots === undefined ? true : showDots}
        currentSlide={currentSlide}
        numberOfSlides={sortedItems.length}
        moveSlideWithDot={moveSlideWithDotHandler}
      />
    </div>
  );
};
//checking types of props
Slider.propTypes = {
  children: PropTypes.array,
  amountOfItemsOnSlide: PropTypes.number,
  showArrows: PropTypes.bool,
  showDots: PropTypes.bool,
  autoPlay: PropTypes.bool,
  autoPlaySpeed: PropTypes.number,
};

export default Slider;
