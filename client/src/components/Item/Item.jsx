import React from "react";
import "./Item.scss";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    // <div className="flex-wrap dis-flex menu-lists menu__lists-item">
    <div className="items__menu border-box">
      <div className="items__menu-img">
        <Link to={`/product/${props.id}`} className="items__menu-img--link">
          <img
            className="items__menu-link--img"
            src={props.image}
            alt={props.title}
          />
        </Link>
      </div>
      <div className="items__menu-info">
        <h3 className="items__menu-title">
          <Link
            to={`/product/${props._id}`}
            className="items__menu--title-link"
          >
            {props.title}
          </Link>
        </h3>
        <div className="items__menu-price">
          {props.price.toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          })}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Item;
