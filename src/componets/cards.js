import React from "react";
import "./cards.css";
import CardItem from "./carditems.js";
import stock_photo from "./images/stock_bg.jpg";
import img_class from "./images/image_class_bg.jpg";
import sorting_bg from "./images/sorting_bg.jpg";
import ai_bg from "./images/sudoku_bg.jpg";
import pathf_img from "./images/pathfind_bg.jpg";

function Cards() {
  return (
    <>
      <div className="cards">
        <h1>Check out my recent Projects</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src={sorting_bg}
                text="Sorting algorithm visualizer"
                label="React js"
                path="/projects"
              />
              <CardItem
                src={img_class}
                text="Image classifier"
                label="ML"
                path="/projects"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src={stock_photo}
                text="Stock price predictor"
                label="ML"
                path="/projects"
              />
              <CardItem
                src={ai_bg}
                text="AI sudoku solver"
                label="Python"
                path="/projects"
              />
              <CardItem
                src={pathf_img}
                text="Pathfinding algorithm visualizer"
                label="React JS"
                path="/projects"
              />
            </ul>
          </div>
        </div>
        <h1>For more visit projects section.</h1>
      </div>
    </>
  );
}

export default Cards;
