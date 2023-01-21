import React, { useState, useEffect } from "react";
import "./ForgotPasswordComponent.scss";
import Vietnam from "../../../assets/icon/VietNamFlag.png";
import { Link } from "react-router-dom";

const ForgotPasswordComponent = () => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds, minutes]);
  return (
    <div className="ForgotPasswordComponent">
      <div className="forgotPassword__container">
        <form action="" className="forgotPassword__form">
          <h3 className="forgotPassword__form-title">Quên mật khẩu</h3>

          <div className="forgotPassword__form-wrap">
            <div className="form__wrap-label">
              <label htmlFor="" className="form__wrap-info">
                Số điện thoại
              </label>
            </div>
            <div className="form__wrap-input">
              <img src={Vietnam} alt="" style={{ width: "15px" }} />
              <input
                type="text"
                placeholder="Số điện thoại"
                name="phoneNumber"
                className="form__text-input"
              />
            </div>
          </div>
          <div className="forgotPassword__form-wrap">
            <div className="form__wrap-label">
              <label htmlFor="" className="form__wrap-info">
                code
              </label>
            </div>
            <div className="form__wrap-input">
              <i class="fa fa-lock" aria-hidden="true"></i>
              <input
                type="text"
                className="form__text-input"
                placeholder="Mã xác nhận"
              />
            </div>
          </div>
          <div className="countdown__text">
            {seconds > 0 || minutes > 0 ? (
              <p>
                Thời gian còn lại: {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </p>
            ) : (
              <p>Không nhận được mã?</p>
            )}

            <button
              className="btn__resend-code"
              disabled={seconds > 0 || minutes > 0}
              style={{
                color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
              }}
              onClick={resendOTP}
            >
              Resend OTP
            </button>
          </div>
          <button className="forgotPassword__submit" type="submit">
            Tiếp tục
          </button>
          {/* <div className="forgotPassword__linkTo-forgetPassword">
            <a href="" className="forgetPassword__link">
              Quên mật khẩu
            </a>
          </div> */}
          <div className="forgotPassword__link-toRegister">
            <p>Bạn có tài khoản</p>
            <Link href="" className="link__toRegister">
              Đăng nhập
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordComponent;
