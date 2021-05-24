export const sliderCalculations = (components, amountToShowOnEachSlide) => {
  if (components === undefined || components.length === 0)
    throw Error(
      "There is nothing to show. You need to put something in <Slider>."
    );
  //making copy of components
  const componentsCopy = [...components];
  const sortedComponents = [];
  //calculating amount of slides, needs to be ceiled for remaining components
  const numberOfSlides = Math.ceil(components.length / amountToShowOnEachSlide);
  for (let i = 0; i < numberOfSlides; i++) {
    //push to sortedComponents array returned from splice method;
    sortedComponents.push(componentsCopy.splice(0, amountToShowOnEachSlide));
  }
  return sortedComponents;
};
