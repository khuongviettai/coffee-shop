import React from "react";
import "./RegisterComponent.scss";
import Vietnam from "../../../assets/icon/VietNamFlag.png";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegisterComponent = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required("")
        .min(5, "Họ và tên phải nhiều hơn 5 ký tự"),
      phoneNumber: Yup.string()
        .required("")
        .matches(
          /([\+84|84|0|0084]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/, //eslint-disable-line
          "Số điện thoại không hợp lệ"
        ),
      // eslint-disable-next-line
      password: Yup.string()
        .required("")
        .matches(/^.{5,}$/, "Mật khẩu cần ít nhất 5 ký tự"),
      confirmPassword: Yup.string()
        .required("")
        .oneOf([Yup.ref("password"), null], "Mật khẩu không chính xác"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="RegisterComponent">
      <div className="register__container">
        <form
          action=""
          className="register__form"
          onSubmit={formik.handleSubmit}
        >
          <h3 className="register__form-title">Đăng ký tài khoản V&T</h3>
          <div className="register__form-wrap">
            <div className="form__wrap-label">
              <label htmlFor="" className="form__wrap-info">
                Họ và tên
              </label>
            </div>
            <div className="form__wrap-input">
              <i class="fa fa-user" aria-hidden="true"></i>
              <input
                type="text"
                placeholder="Họ và tên"
                name="fullName"
                className="form__text-input"
                value={formik.values.fullName}
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.fullName && (
              <p className="register__error-msg">{formik.errors.fullName}</p>
            )}
          </div>
          <div className="register__form-wrap">
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
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.phoneNumber && (
              <p className="register__error-msg">{formik.errors.phoneNumber}</p>
            )}
          </div>
          <div className="register__form-wrap">
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
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.password && (
              <p className="register__error-msg">{formik.errors.password}</p>
            )}
          </div>
          <div className="register__form-wrap">
            <div className="form__wrap-label">
              <label htmlFor="" className="form__wrap-info">
                Nhập lại mật khẩu
              </label>
            </div>
            <div className="form__wrap-input">
              <i class="fa fa-lock" aria-hidden="true"></i>
              <input
                type="password"
                placeholder="Nhập lại mật khẩu"
                name="confirmPassword"
                className="form__text-input"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.confirmPassword && (
              <p className="register__error-msg">
                {formik.errors.confirmPassword}
              </p>
            )}
          </div>
          <button className="register__submit" type="submit">
            Đăng ký
          </button>
          <div className="register__link-toLogin">
            <p>Bạn có tài khoản</p>
            <a to="/login" className="link__toLogin">
              Đăng nhập
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
