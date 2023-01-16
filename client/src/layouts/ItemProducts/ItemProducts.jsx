import React from "react";
import "./ItemProducts.scss";

const ItemProducts = ({ props }) => {
  return (
    <div className="items__menu border-box">
      <div className="items__menu-img">
        <a className="items__menu-img--link">
          <img
            className="items__menu-link--img"
            src={props.image}
            alt={props.title}
          />
        </a>
      </div>
      <div className="items__menu-info">
        <h3 className="items__menu-title">
          <a className="items__menu--title-link">{props.title}</a>
        </h3>
        <div className="items__menu-price">
          {props.price.toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemProducts;
