import React from "react";
import "./ProductsComponent.scss";
import ItemProducts from "../../../layouts/ItemProducts/ItemProducts";
import { Link } from "react-router-dom";

const ProductsComponent = ({ list }) => {
  return (
    <div className="ProductsComponent">
      <div className="productsComponent__wrap">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3 col-md-3 col-xs-12 col-sm-12 productsComponent__sidebar-left">
              <div className="productsComponent__sidebar-menu">
                <ul className="sidebar__menu-items">
                  <li className="sidebar__menu-list">
                    <Link href="" className="sidebar__menu-list--link">
                      Cà phê
                    </Link>
                  </li>
                  <li className="sidebar__menu-list">
                    <Link href="" className="sidebar__menu-list--link">
                      Trà
                    </Link>
                  </li>
                  <li className="sidebar__menu-list">
                    <Link href="" className="sidebar__menu-list--link">
                      Snack
                    </Link>
                  </li>
                  <li className="sidebar__menu-list">
                    <Link href="" className="sidebar__menu-list--link">
                      Khác
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-9 col-md 9 col-xs-12 col-sm-12 productsComponent__item-right">
              <div className="flex-wrap dis-flex menu-lists menu__lists-item">
                {list.map((item, index) => {
                  return (
                    <ItemProducts
                      id={item.id}
                      image={item.image[0]}
                      title={item.title}
                      price={item.price}
                      item={item}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsComponent;
