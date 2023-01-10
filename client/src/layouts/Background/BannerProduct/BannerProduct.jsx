import React from "react";
import "./BannerProduct.scss";
import { Link } from "react-router-dom";

const BannerProduct = () => {
  return (
    <div className="bannerProduct">
      <div className="container">
        <div className="row">
          <div className="banner__list-home">
            <div className="banner__menu banner__item">
              <Link href="">
                <img
                  className="banner__menu-img"
                  src="./img/BannerProduct/banner.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="banner__item">
              <Link href="">
                <img
                  className="banner__item-img"
                  src="./img/BannerProduct/product.png"
                  alt=""
                />
              </Link>

              <div className="banner__item-info">
                <Link href="">
                  <h3 className="banner__item-title">
                    CloudFee Hạnh Nhân Nướng
                  </h3>
                </Link>
                <div className="price__product-item">49.000 đ</div>
              </div>
            </div>

            <div className="banner__item">
              <Link href="">
                <img
                  className="banner__item-img"
                  src="./img/BannerProduct/product.png"
                  alt=""
                />
              </Link>
              <div className="banner__item-info">
                <Link href="">
                  <h3 className="banner__item-title">
                    CloudFee Hạnh Nhân Nướng
                  </h3>
                </Link>
                <div className="price__product-item">49.000 đ</div>
              </div>
            </div>
            <div className="banner__item">
              <Link href="">
                <img
                  className="banner__item-img"
                  src="./img/BannerProduct/pie.png"
                  alt=""
                />
              </Link>
              <div className="banner__item-info">
                <Link href="">
                  <h3 className="banner__item-title">Mochi Kem Chocolate</h3>
                </Link>{" "}
                <div className="price__product-item">49.000 đ</div>
              </div>
            </div>
            <div className="banner__item">
              <Link href="">
                <img
                  className="banner__item-img"
                  src="./img/BannerProduct/pie.png"
                  alt=""
                />
              </Link>
              <div className="banner__item-info">
                <Link href="">
                  <h3 className="banner__item-title">Mochi Kem Chocolate</h3>
                </Link>{" "}
                <div className="price__product-item">49.000 đ</div>
              </div>
            </div>
            <div className="banner__item">
              <Link href="">
                <img
                  className="banner__item-img"
                  src="./img/BannerProduct/pie.png"
                  alt=""
                />
              </Link>
              <div className="banner__item-info">
                <Link href="">
                  <h3 className="banner__item-title">Mochi Kem Chocolate</h3>
                </Link>{" "}
                <div className="price__product-item">49.000 đ</div>
              </div>
            </div>
            <div className="banner__item">
              <Link href="">
                <img
                  className="banner__item-img"
                  src="./img/BannerProduct/pie.png"
                  alt=""
                />
              </Link>
              <div className="banner__item-info">
                <Link href="">
                  <h3 className="banner__item-title">Mochi Kem Chocolate</h3>
                </Link>{" "}
                <div className="price__product-item">49.000 đ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
