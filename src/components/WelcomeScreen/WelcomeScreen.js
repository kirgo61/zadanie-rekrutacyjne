import React from "react";
import "./WelcomeScreen.scss";
import logo from "../../utils/photos/logo-it-masters.png";
import Header from "../Header/Header";
const WelcomeScreen = () => {
  return (
    <div id="welcome-screen" className="welcome-screen">
      <div className="welcome-screen__overlay">
        <div className="welcome-screen__overlay-logo"></div>
        {/* <Header /> */}
      </div>
    </div>
  );
};

export default WelcomeScreen;
