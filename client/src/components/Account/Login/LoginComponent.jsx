import React from "react";
import "./LoginComponent.scss";
import VietNam from "../../../assets/icon/VietNamFlag.png";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  return (
    <div>
      <div className="LoginComponent">
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
                <img src={VietNam} alt="" style={{ width: "15px" }} />
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
              <Link to="/forgot" className="forgetPassword__link">
                Quên mật khẩu
              </Link>
            </div>
            <div className="login__link-toRegister">
              <p>Bạn chưa có tài khoản</p>
              <Link to="/register" className="link__toRegister">
                Đăng ký
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
