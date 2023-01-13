import React from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";

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
                <NavLink to="/login">Đăng nhập</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="navbar__header">
          <div className="navbar__logo">V&T Coffee</div>
          <div className="navbar__menu">
            <ul className="navbar__menu-item">
              <li className="navbar__menu-list">
                <Link className="navbar__menu-list--link">Cà phê</Link>
              </li>
              <li className="navbar__menu-list">
                <Link className="navbar__menu-list--link">Trà</Link>
              </li>
              <li className="navbar__menu-list">
                <Link to="/collection" className="navbar__menu-list--link">
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;
