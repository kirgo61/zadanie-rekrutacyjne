import React from "react";
import "./Contact.scss";
const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-container--1">
          <h2 className="contact-title">Contact</h2>
        </div>
        <div className="contact-container--2">
          <div className="contact-personal-data">
            <p>Jan Kowalski</p>
            <p>ul. Niwy 17</p>
            <p>Kraków 41-476</p>
            <p>+48 567 567 567</p>
            <p>+48 765 765 765</p>
          </div>
          <div className="contact-company-data">
            <p className="contact-company-name">IT Masters</p>
            <p>ul. Niwy 18 Kraków 41-476</p>
            <p>Nip: 9999999999</p>
            <p>Regon: 999999999</p>
            <p>+48 999 999 999</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
