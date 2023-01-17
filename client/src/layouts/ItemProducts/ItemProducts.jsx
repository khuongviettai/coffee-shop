import React from "react";
import "./ItemProducts.scss";
import { Link } from "react-router-dom";

const ItemProducts = (props) => {
  return (
    <div className="items__menu border-box">
      <div className="items__menu-img">
        <Link to={`/products/${props.id}`} className="items__menu-img--link">
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
            to={`/products/${props.id}`}
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
  );
};

export default ItemProducts;
