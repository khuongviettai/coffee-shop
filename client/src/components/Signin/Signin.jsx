import React from "react";
import "./Signin.scss";
import flagvietnam from "./img/flag-vietnam.png";

const Signin = () => {
  return (
    <div className="Signin__body">
      <div className="Signin__container">
        <div class="Signin">
          <h3 class="Signin__title">Chào mừng đến với V&T Coffee</h3>
          <div class="Signin__text-input">
            <img src={flagvietnam} alt="" style={{ width: "12px" }} />
            <input
              className="Signin__text-input--input"
              type="number"
              placeholder="Nhập số điện thoại"
            />
          </div>
          <div class="Signin__text-input">
            <i class="fa fa-lock" aria-hidden="true"></i>
            <input
              className="Signin__text-input--input"
              type="password"
              placeholder="Mật khẩu"
            />
          </div>
          <button class="Signin__btn">Sign In</button>
          <a href="#" class="forgot__password signin__link">
            Quên mật khẩu
          </a>
          <div class="Signin__create">
            <a className="signin__link" href="#">
              Tạo tài khoản
            </a>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
