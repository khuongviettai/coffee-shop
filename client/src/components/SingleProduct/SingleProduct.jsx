import React from "react";
import "./SingleProduct.scss";
import tralaithom from "../../assets/img/tra-lai-thom.png";

const SingleProduct = () => {
  return (
    <div className="SingleProduct">
      <div className="singleProduct__info">
        <div className="singleProduct__info-wrap container">
          <div className="row">
            <div className="col-12 col-xs-12 col-lg-6 col-sm-6 col-md-6">
              <div className="productCarousel carousel">
                <div className="carousel-inner">
                  <img
                    style={{ width: "570px", height: "570px" }}
                    src={tralaithom}
                    alt=""
                  />
                </div>
                <div className="thumbCarousel">
                  <div className="thumb.active">
                    <img
                      src={tralaithom}
                      style={{
                        width: "75px",
                        height: "75px",
                        borderRadius: "8px",
                      }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xs-12 col-lg-6 col-sm-6 col-md-6">
              test2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
