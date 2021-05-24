import React, { useState, useEffect, useRef, useReducer } from "react";
import "./Slider.scss";
import Slide from "./Slide/Slide";
import Dots from "./Dots/Dots";
import { debounce } from "lodash";
import { sliderCalculations } from "./../../utils/functions/sliderCalculations";
import Arrows from "./Arrows/Arrows";

// style={{ transform: "translateX(-1285px)" }}
const Slider = ({
  children,
  amountOfItemsOnSlide,
  showDots,
  showArrows,
  autoplay,
}) => {
  // console.log(props.children);
  const sortedItems = sliderCalculations(
    children ? children : [],
    amountOfItemsOnSlide ? amountOfItemsOnSlide : 1
  );
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slideWidth, setSlideWidth] = useState(0);
  const [widthToTransform, setWidthToTranform] = useState(0);
  const [scrollBarWidth, setScrollBarWidth] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    setSlideWidth(ref.current ? ref.current.clientWidth : 0);
    setScrollBarWidth(window.innerWidth - ref.current.clientWidth);
  }, []);
  let width = window.innerWidth;

  const changeSlideSizeToSkip = () => {
    if (width === window.innerWidth) {
    } else {
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

  let sliderStyles = {
    transform: `translateX(${widthToTransform * -1}px)`,
    transition: "1s",
  };
  return (
    <div ref={ref} className="slider-container">
      <div style={sliderStyles} className="slider" id="slider">
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
