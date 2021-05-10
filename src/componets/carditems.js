import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards_item_pic-wrap" data-category={props.label}>
            <img className="cards__item__img" alt="Image_1" src={props.src} />
          </figure>
          <div className="cards__items__info">
            <h5 className="cards__items__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
