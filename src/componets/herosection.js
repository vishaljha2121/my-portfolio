import React from "react";
import "../App.css";
import { Button } from "./button.js";
import "./herosection.css";
import image from "../componets/images/hero_1.jpg";

function Herosection() {
  return (
    <>
      <div className="hero-container">
        {/* <img src={image} alt="" center /> */}
        <h1>VISHAL JHA</h1>
        <p>Budding developer</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            RESUME
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            PROJECT GALLERY
          </Button>
        </div>
      </div>
    </>
  );
}

export default Herosection;
