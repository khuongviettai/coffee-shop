import React from "react";
import "./SingleProductComponent.scss";

const SingleProductComponent = ({ list }) => {
  return (
    <div>
      <div>
        <div className="SingleProduct">
          <div className="SingleProduct__Component">
            <div className="container SingleProduct__Container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="SingProduct__img">
                    <div className="SingProduct__inner">
                      <div className="inner__data">
                        {list.image && (
                          <img
                            src={list.image[0]}
                            alt=""
                            className="inner__data-img"
                          />
                        )}
                      </div>
                    </div>
                    {list.image && (
                      <div className="SingleProduct__thumb">
                        <div className="SingleProduct__thumb-list">
                          {list.image.map((e, _idx) => (
                            <div className="thumb__list-item" key={_idx}>
                              <img src={e} className="thumb__item-img" alt="" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div>
                    <div className="SingleProduct__info">
                      <p className="SingleProduct__info-title">{list.title}</p>
                      <div className="SingleProduct__info-price">
                        {list.price && (
                          <span className="Single__info-price">
                            {list.price.toLocaleString("vi", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="option__size">
                      <p className="option__size-title">Chọn size (bắt buộc)</p>
                      {list.size && (
                        <div className="products__options">
                          {list.size.map((e, _indx) => {
                            return (
                              <div key={_indx}>
                                <div className="Product_single__wrap">
                                  <div className="Product_single__option">
                                    {e}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <div className="option__topping">
                      <p className="option__topping-title">Topping</p>
                      {list.topping && (
                        <div className="topping__options">
                          {list.topping.map((e, _index) => {
                            return (
                              <div key={_index}>
                                <div className="topping_single__wrap">
                                  <div className="topping__wrap-inner">{e}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="SingleProduct__Info">
            <div className="SingleProduct__Info-wrap container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ProductSingle__Content">
                  <hr className="hidden__xs-desc" />
                  <h4 className="Product__single-info--title">
                    Mô tả sản phẩm
                  </h4>
                  <p className="Product__single-info--desc">
                    {list.description}
                  </p>
                  <hr className="hidden__xs-desc" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductComponent;
