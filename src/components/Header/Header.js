import React, { useState } from "react";
import "./Header.scss";
const Header = () => {
  const [status, changeStatus] = useState(false);
  const change = (status) => {
    changeStatus(status);
  };
  return (
    <>
      <div
        onClick={() => change(false)}
        style={{
          display: status === false ? "none" : null,
          height: document.body.offsetHeight,
        }}
        className="backdrop"
      ></div>
      <div className="header-container">
        <header
          onClick={() => {
            change(!status);
          }}
          className="header"
        >
          <div className="header-bar header-bar--1"></div>
          <div className="header-bar header-bar--2"></div>
          <div className="header-bar header-bar--3"></div>
        </header>
        <nav className={`menu ${status === false ? "menu-hide" : "menu-show"}`}>
          <ul className="menu-list">
            <li
              onClick={() => {
                change(false);
              }}
              className="menu-list__option"
            >
              <a href="#welcome-screen">Main Site</a>
            </li>
            <li
              onClick={() => {
                change(false);
              }}
              className="menu-list__option"
            >
              <a href="#about">About</a>
            </li>
            <li
              onClick={() => {
                change(false);
              }}
              className="menu-list__option"
            >
              <a href="#slider">Our Plans</a>
            </li>
            <li
              onClick={() => {
                change(false);
              }}
              className="menu-list__option"
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
