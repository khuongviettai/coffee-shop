import React from "react";
import "./RelatedProducts.scss";
import { Link } from "react-router-dom";

const RelatedProducts = ({ list }) => {
  return (
    <div className="RelatedProducts">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 Products__Related">
            <h4 className="Product__Related-title">Sản phẩm liên quan</h4>
            <div className="Product-Related__list">
              {list.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="Product-Related__item">
                      <div className="Product-Related__item-image">
                        <Link href="">
                          <img
                            className="Product-Related__item-img"
                            src={item.image[0]}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="Product-Related__item-info">
                        <h3 className="ProductRelated__info-title">
                          <Link href="" className="">
                            {item.title}
                          </Link>
                        </h3>
                        <div className="ProductRelated__info-price">
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
    </div>
  );
};

export default RelatedProducts;
