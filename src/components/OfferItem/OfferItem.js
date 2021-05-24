import React from "react";
import "./OfferItem.scss";
const OfferItem = ({ typeOfPlan }) => {
  return (
    <div className={`offer-item ${typeOfPlan ? typeOfPlan : null}`}>
      <div className="offer-item-container">
        <div className="offer-item-container--1">
          <h2 className="offer-item__title">
            {typeOfPlan} <br></br> Plan
          </h2>
          <p className="offer-item__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            nobis velit natus itaque ab consequatur tenetur voluptate eius unde
            eos dolores saepe, placeat ratione aut, pariatur expedita dolore
            quibusdam error.
          </p>
          <div className="offer-item__button">
            <button className="button">Find out more!</button>
          </div>
        </div>
        <div className="offer-item-container--2">
          <span className="offer-item__option">
            <i className="fas fa-check"> </i>
            <h3 className="offer-item__subtitle">Pariatur expedita dolore</h3>
          </span>
          <span className="offer-item__option">
            <i className="fas fa-check"> </i>
            <h3 className="offer-item__subtitle">Pariatur expedita dolore</h3>
          </span>
          <span className="offer-item__option">
            {typeOfPlan === "free" ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-check"> </i>
            )}
            <h3 className="offer-item__subtitle">Dedicated resources</h3>
          </span>
          <span className="offer-item__option">
            {typeOfPlan === "free" ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-check"> </i>
            )}
            <h3 className="offer-item__subtitle">Free SSL</h3>
          </span>
          <span className="offer-item__option">
            {typeOfPlan === "enterprice" ? (
              <i className="fas fa-check"> </i>
            ) : (
              <i className="fas fa-times"></i>
            )}
            <h3 className="offer-item__subtitle">
              Automated certificate management
            </h3>
          </span>
          <span className="offer-item__option">
            {typeOfPlan === "enterprice" ? (
              <i className="fas fa-check"> </i>
            ) : (
              <i className="fas fa-times"></i>
            )}
            <h3 className="offer-item__subtitle">Support 24/7</h3>
          </span>
          <div className="offer-item__button">
            <button className="button">Find out more!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferItem;
