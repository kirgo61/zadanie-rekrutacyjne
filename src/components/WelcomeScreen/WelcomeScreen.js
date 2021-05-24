import React from "react";
import "./WelcomeScreen.scss";

const WelcomeScreen = () => {
  return (
    <div id="welcome-screen" className="welcome-screen">
      <div className="welcome-screen__overlay">
        <div className="welcome-screen__overlay-logo"></div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
