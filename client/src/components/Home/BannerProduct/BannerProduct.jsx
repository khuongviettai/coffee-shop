import React from "react";
import "./BannerProduct.scss";
import Banner from "../../../assets/image/BannerProduct/banner.png";

const BannerProduct = ({ list }) => {
  return (
    <div className="bannerProduct">
      <div className="container">
        <div className="row">
          <div className="banner__list-home">
            <div className="banner__menu banner__item">
              <a href="">
                <img className="banner__menu-img" src={Banner} alt="" />
              </a>
            </div>
            {list.map((item, index) => {
              return (
                <div key={index}>
                  <div className="banner__item">
                    <a href="">
                      <img
                        className="banner__item-img"
                        src={item.image}
                        alt=""
                      />
                    </a>

                    <div className="banner__item-info">
                      <a href="">
                        <h3 className="banner__item-title">{item.title}</h3>
                      </a>
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
