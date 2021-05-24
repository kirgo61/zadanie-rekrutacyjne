import React from "react";
import "./Footer.scss";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <h2 className="footer-text">It Masters {year} - All Rights Reserved</h2>
    </footer>
  );
};

export default Footer;
