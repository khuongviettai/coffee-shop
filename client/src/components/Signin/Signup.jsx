import React from "react";
import "./Signup.scss";
import flagvietnam from "./img/flag-vietnam.png";

const Signup = () => {
  return (
    <div className="Signup__body">
      <div className="Signup__container">
        <div class="Signup">
          <h3 class="Signup__title">Chào mừng đến với V&T Coffee</h3>
          <div class="Signup__text-input">
            <img src={flagvietnam} alt="" style={{ width: "12px" }} />
            <input
              className="Signup__text-input--input"
              type="number"
              placeholder="Nhập số điện thoại"
            />
          </div>
          <div class="Signup__text-input">
            <i class="fa fa-lock" aria-hidden="true"></i>
            <input
              className="Signup__text-input--input"
              type="password"
              placeholder="Mật khẩu"
            />
          </div>
          <div class="Signup__text-input">
            <i class="fa fa-lock" aria-hidden="true"></i>
            <input
              className="Signup__text-input--input"
              type="password"
              placeholder="Nhập lại mật khẩu"
            />
          </div>
          <button class="Signup__btn">Đăng Ký</button>
          <div class="Signup__create">
            Bạn có tài khoản.
            <a className="Signup__link-Signin" href="#">
              Đăng nhập
            </a>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
