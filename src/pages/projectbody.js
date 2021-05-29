import React from "react";
import "../App.css";
import "../pages/project.css";
import CardItem from "../componets/carditems.js";
import stock_photo from "./images/stock_bg.jpg";
import img_class from "./images/image_class_bg.jpg";
import sorting_bg from "./images/sorting_bg.jpg";
import ai_bg from "./images/sudoku_bg.jpg";
import pathf_img from "./images/pathfind_bg.jpg";
import cc_bg from "./images/cc_bg.jpg";
import wa_bg from "./images/wa_bg.jpg";
import rc_bg from "./images/rc_bg.jpg";
import gm_bg from "./images/gm_bg.jpg";
import hs_bg from "./images/hs_bg.jpg";
import ch_bg from "./images/ch_bg.jpg";
import ae_bg from "./images/ae_bg.jpg";

export default function ProjectBody() {
  return (
    <>
      <div className="cards">
        <h1 className="title_work">WORK</h1>
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
            <ul className="cards__items">
              <CardItem
                src={cc_bg}
                text="CodeChef problems"
                label="ML"
                path="/projects"
              />
              <CardItem
                src={wa_bg}
                text="WhatsApp clone"
                label="Python"
                path="/projects"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src={rc_bg}
                text="Recommender system"
                label="ML"
                path="/projects"
              />
              <CardItem
                src={gm_bg}
                text="Android game: COIN MAN"
                label="Python"
                path="/projects"
              />
              <CardItem
                src={hs_bg}
                text="House price predictor"
                label="React JS"
                path="/projects"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src={ch_bg}
                text="Churn modelling"
                label="ML"
                path="/projects"
              />
              <CardItem
                src={ae_bg}
                text="Auto-Encoders ANN"
                label="Python"
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
