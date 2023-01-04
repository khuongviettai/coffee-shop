import React from "react";
import "./Item.scss";

const Item = (props) => {
  return (
    // <div className="flex-wrap dis-flex menu-lists menu__lists-item">
    <div className="items__menu border-box">
      <div className="items__menu-img">
        <a href="" className="items__menu-img--link">
          <img
            className="items__menu-link--img"
            src={props.image}
            alt={props.title}
          />
        </a>
      </div>
      <div className="items__menu-info">
        <h3 className="items__menu-title">
          <a href="" className="items__menu--title-link">
            {props.title}
          </a>
        </h3>
        <div className="items__menu-price">
          {props.price.toLocaleString("it-IT", {
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
