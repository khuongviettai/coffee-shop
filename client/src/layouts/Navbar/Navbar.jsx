import React from "react";
import "./Navbar.scss";

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
                <a href="" className="subnav__item-link">
                  <i class="fa fa-bell-o" aria-hidden="true"></i>
                  Thông báo
                </a>
              </li>
              <li className="sub__navbar-list">
                <a href="" className="subnav__item-link">
                  <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                  Trợ giúp
                </a>
              </li>
              <li className="sub__navbar-list sub__navbar-list--strong">
                Đăng nhập
              </li>
            </ul>
          </nav>
        </div>
        <div className="navbar__header">
          <div className="navbar__logo">V&T Coffee</div>
          <div className="navbar__menu">
            <ul className="navbar__menu-item">
              <li className="navbar__menu-list">
                <a href="" className="navbar__menu-list--link">
                  Cà phê
                </a>
              </li>
              <li className="navbar__menu-list">
                <a href="" className="navbar__menu-list--link">
                  Trà
                </a>
              </li>
              <li className="navbar__menu-list">
                <a href="" className="navbar__menu-list--link">
                  Menu
                </a>
              </li>
              <li className="navbar__menu-list">
                <a href="" className="navbar__menu-list--link">
                  Cảm hứng
                </a>
              </li>
              <li className="navbar__menu-list">
                <a href="" className="navbar__menu-list--link">
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar__search">
            <i class="fa fa-search" aria-hidden="true"></i>
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
