import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <header className="Header__navbar">
      <div className="container">
        <div className="navbar__nav">
          <nav className="sub__navbar">
            <ul className="sub__navbar-item">
              <li className="sub__navbar-list sub__navbar-list--separate">
                Vào ứng dụng V&T Coffee
              </li>
              <li className="sub__navbar-list">Kết nối</li>
            </ul>
            <ul className="sub__navbar-item">
              <li className="sub__navbar-list">
                <Link className="subnav__item-link">
                  <i class="fa fa-bell-o" aria-hidden="true"></i>
                  Thông báo
                </Link>
              </li>
              <li className="sub__navbar-list">
                <Link to="/help" className="subnav__item-link">
                  <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                  Trợ giúp
                </Link>
              </li>
              <li className="sub__navbar-list sub__navbar-list--strong">
                <Link to="/login">Đăng nhập</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="navbar__header">
          <Link to="/" className="navbar__logo">
            V&T Coffee
          </Link>
          <div className="navbar__menu">
            <ul className="navbar__menu-item">
              <li className="navbar__menu-list">
                <Link className="navbar__menu-list--link">Cà phê</Link>
              </li>
              <li className="navbar__menu-list">
                <Link className="navbar__menu-list--link">Trà</Link>
              </li>
              <li className="navbar__menu-list">
                <Link to="/products" className="navbar__menu-list--link">
                  Menu
                </Link>
              </li>
              <li className="navbar__menu-list">
                <Link className="navbar__menu-list--link">Cảm hứng</Link>
              </li>
              <li className="navbar__menu-list">
                <Link className="navbar__menu-list--link">Tuyển dụng</Link>
              </li>
            </ul>
          </div>
          <div className="navbar__search">
            <i
              class="fa fa-search"
              aria-hidden="true"
              style={{ marginLeft: "10px" }}
            ></i>
            <input
              type="search"
              name=""
              className="navbar__search-input"
              placeholder="Tìm kiếm ..."
              style={{ backgroundColor: "rgba(255,255,255, 0.01)" }}
            />
          </div>
          <Link to="/cart">
            <div className="navbar__cart-wrap">
              <div className="navbar__cart-number">0</div>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="navbar__icon-cartShopping"
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
