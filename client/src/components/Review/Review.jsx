import React from "react";
import "./Review.scss";
import { RATTING } from "../../data/ratting";

const Review = () => {
  return (
    <div className="Review">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 Review__Ratting">
            <h4 className="review__title">ĐÁNH GIÁ SẢN PHẨM</h4>
            <div className="review__product-list">
              {RATTING.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="review__product-ratting">
                      <div className="product__ratting-avatar-user">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="product__ratting-main">
                        <p className="product__ratting-nameUser">{item.name}</p>
                        <div className="product__ratting-dateReview">
                          {item.date}
                        </div>
                        <div className="product__ratting-content">
                          {item.desc}
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
    </div>
  );
};

export default Review;
