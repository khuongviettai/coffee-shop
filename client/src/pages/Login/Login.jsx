import React from "react";
import "./Login.scss";
import icon from "./img/vietnam-flag-icon.png";

const Register = () => {
  return (
    <div className="Login">
      <div className="login__container">
        <form action="" className="login__form">
          <h3 className="login__form-title">Đăng nhập tài khoản V&T</h3>

          <div className="login__form-wrap">
            <div className="form__wrap-label">
              <label htmlFor="" className="form__wrap-info">
                Số điện thoại
              </label>
            </div>
            <div className="form__wrap-input">
              <img src={icon} alt="" style={{ width: "15px" }} />
              <input
                type="text"
                placeholder="Số điện thoại"
                name="phoneNumber"
                className="form__text-input"
              />
            </div>
          </div>
          <div className="login__form-wrap">
            <div className="form__wrap-label">
              <label htmlFor="" className="form__wrap-info">
                Mật khẩu
              </label>
            </div>
            <div className="form__wrap-input">
              <i class="fa fa-lock" aria-hidden="true"></i>
              <input
                type="password"
                placeholder="Mật khẩu"
                name="password"
                className="form__text-input"
              />
            </div>
          </div>
          <button className="login__submit" type="submit">
            Đăng nhập
          </button>
          <div className="login__linkTo-forgetPassword">
            <a href="" className="forgetPassword__link">
              Quên mật khẩu
            </a>
          </div>
          <div className="login__link-toRegister">
            <p>Bạn chưa có tài khoản</p>
            <a href="" className="link__toRegister">
              Đăng ký
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
