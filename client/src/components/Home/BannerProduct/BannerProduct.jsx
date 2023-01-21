import React from "react";
import "./BannerProduct.scss";
import Banner from "../../../assets/image/BannerProduct/banner.png";
import { Link } from "react-router-dom";

const BannerProduct = ({ list }) => {
  return (
    <div className="bannerProduct">
      <div className="container">
        <div className="row">
          <div className="banner__list-home">
            <div className="banner__menu banner__item">
              <Link href="">
                <img className="banner__menu-img" src={Banner} alt="" />
              </Link>
            </div>
            {list.map((item, index) => {
              return (
                <div key={index}>
                  <div className="banner__item">
                    <Link href="">
                      <img
                        className="banner__item-img"
                        src={item.image}
                        alt=""
                      />
                    </Link>

                    <div className="banner__item-info">
                      <Link href="">
                        <h3 className="banner__item-title">{item.title}</h3>
                      </Link>
                      <div className="price__product-item">
                        {item.price.toLocaleString("vi", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
