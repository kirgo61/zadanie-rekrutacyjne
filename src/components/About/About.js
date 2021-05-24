import React from "react";
import "./About.scss";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-container">
        <div className="about-container--1">
          <h1 className="title about-title ">About Us</h1>
        </div>
        <div className="about-container--2">
          <div className="about-item about-item--1">
            <h2 className="about-subtitle">Who we are?</h2>
            <p className="about-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              vitae unde ipsam accusamus, repellat accusantium architecto ullam
              voluptates amet. In, itaque perspiciatis?
            </p>
          </div>
          <div className="about-item about-item--2">
            <h2 className="about-subtitle">What we do?</h2>
            <p className="about-text">
              Adipisicing elit. Debitis reprehenderit maxime ducimus
              necessitatibus dolore quae, minima sequi voluptates labore
              repellendus totam minus, ab saepe natus facere magnam? Eum,
              labore. Illum.
            </p>
          </div>
          <div className="about-item about-item--3">
            <h2 className="about-subtitle">How can we help you?</h2>
            <p className="about-text">
              Quisquam magni ducimus dicta commodi. Modi, sint ullam provident
              officia voluptates totam optio tempore animi consequuntur eaque.
              Eveniet nihil cumque itaque nostrum?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
