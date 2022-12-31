import React from "react";
import "./Collection.scss";

const Collection = () => {
  return (
    <div className="Collection">
      <div className="collection__wrap">
        <div className="container">
          <div className="row display_flex">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 collection__sidebar-left">
              <div className="collection__sidebar-menu">
                <ul className="sidebar__menu-item">
                  <div className="sidebar__menu-list">Cà phê</div>
                  <div className="sidebar__menu-list">Trà</div>
                  <div className="sidebar__menu-list">Bánh</div>
                  <div className="sidebar__menu-list">Khác</div>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 collection__product-right float__right">
              <div className="collection__product-item">
                <h3 className="collection__product-title">Cà phê Việt Nam</h3>
                <div className="menu-lists display_flex menu_lists flex_wrap collection__product-menu">
                  <div className="product__menu-item">
                    <div className="product__menu-item--img">
                      <a href="" className="product__menu-item--link">
                        <img
                          src="./img/BannerProduct/pie.png"
                          alt=""
                          className="menu__item-link-img"
                        />
                      </a>
                    </div>
                    <div className="product__menu-item-info">
                      <h3 className="product__menu-item--info---h3">
                        <a href="">The Coffee House Sữa Đá</a>
                      </h3>
                      <div className="product__menu-item--price">39.000</div>
                    </div>
                  </div>
                  <div className="product__menu-item">
                    <div className="product__menu-item--img">
                      <a href="" className="product__menu-item--link">
                        <img
                          src="./img/BannerProduct/pie.png"
                          alt=""
                          className="menu__item-link-img"
                        />
                      </a>
                    </div>
                    <div className="product__menu-item-info">
                      <h3 className="product__menu-item--info---h3">
                        <a href="">The Coffee House Sữa Đá</a>
                      </h3>
                      <div className="product__menu-item--price">39.000</div>
                    </div>
                  </div>
                  <div className="product__menu-item">
                    <div className="product__menu-item--img">
                      <a href="" className="product__menu-item--link">
                        <img
                          src="./img/BannerProduct/pie.png"
                          alt=""
                          className="menu__item-link-img"
                        />
                      </a>
                    </div>
                    <div className="product__menu-item-info">
                      <h3 className="product__menu-item--info---h3">
                        <a href="">The Coffee House Sữa Đá</a>
                      </h3>
                      <div className="product__menu-item--price">39.000</div>
                    </div>
                  </div>
                  <div className="product__menu-item">
                    <div className="product__menu-item--img">
                      <a href="" className="product__menu-item--link">
                        <img
                          src="./img/BannerProduct/pie.png"
                          alt=""
                          className="menu__item-link-img"
                        />
                      </a>
                    </div>
                    <div className="product__menu-item-info">
                      <h3 className="product__menu-item--info---h3">
                        <a href="">The Coffee House Sữa Đá</a>
                      </h3>
                      <div className="product__menu-item--price">39.000</div>
                    </div>
                  </div>
                  <div className="product__menu-item">
                    <div className="product__menu-item--img">
                      <a href="" className="product__menu-item--link">
                        <img
                          src="./img/BannerProduct/pie.png"
                          alt=""
                          className="menu__item-link-img"
                        />
                      </a>
                    </div>
                    <div className="product__menu-item-info">
                      <h3 className="product__menu-item--info---h3">
                        <a href="">The Coffee House Sữa Đá</a>
                      </h3>
                      <div className="product__menu-item--price">39.000</div>
                    </div>
                  </div>
                  <div className="product__menu-item">
                    <div className="product__menu-item--img">
                      <a href="" className="product__menu-item--link">
                        <img
                          src="./img/BannerProduct/pie.png"
                          alt=""
                          className="menu__item-link-img"
                        />
                      </a>
                    </div>
                    <div className="product__menu-item-info">
                      <h3 className="product__menu-item--info---h3">
                        <a href="">The Coffee House Sữa Đá</a>
                      </h3>
                      <div className="product__menu-item--price">39.000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
