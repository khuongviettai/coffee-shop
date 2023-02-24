import React from "react";
import "./ProfileInfo.scss";
import avatar from "../../assets/icon/user.png";

const ProfileInfo = () => {
  return (
    <div className="ProfileInfo">
      <div className="container">
        <div className="row">
          <div className="ProfileUser__avatar">
            <div className="Profile__user-avatar">
              <img src={avatar} alt="" className="User__avatar-img" />
            </div>
          </div>
          <p className="Profile__user-title">Chỉnh sửa thông tin</p>
          <div className="profileUser__info">
            <div className="profileUser__info-wrap">
              <div className="profile__wrap-label">
                <label htmlFor="" className="profile-label-title">
                  Họ và tên
                </label>
              </div>
              <div className="profile__wrap-input">
                <input
                  type="text"
                  className="profile__input"
                  placeholder="Họ và tên"
                />
              </div>
            </div>
            <div className="profileUser__info-wrap">
              <div className="profile__wrap-label">
                <label htmlFor="" className="profile-label-title">
                  Số điện thoại
                </label>
              </div>
              <div className="profile__wrap-input">
                <input
                  type="text"
                  className="profile__input"
                  placeholder="Số điện thoại"
                />
              </div>
            </div>
            <div className="profileUser__info-wrap">
              <div className="profile__wrap-label">
                <label htmlFor="" className="profile-label-title">
                  Email
                </label>
              </div>
              <div className="profile__wrap-input">
                <input
                  type="text"
                  className="profile__input"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="profileUser__info-wrap">
              <div className="profile__wrap-label">
                <label htmlFor="" className="profile-label-title">
                  Địa chỉ
                </label>
              </div>
              <div className="profile__wrap-input">
                <input
                  type="text"
                  className="profile__input"
                  placeholder="Địa chỉ"
                />
              </div>
            </div>
            <div className="profile__Address">
              <div className="profile__Address-city">
                <div className="profile__Address-label">
                  <label htmlFor="" className="profile-label-title">
                    Tỉnh
                  </label>
                </div>
                <div className="profile__Address-input">
                  <select className="profile__Address-select">
                    <option value>Tỉnh</option>
                    <option>Hồ Chí Minh</option>
                    <option>Hà Nội</option>
                    <option>Đà Nẵng</option>
                  </select>
                </div>
              </div>
              <div className="profile__Address-city">
                <div className="profile__Address-label">
                  <label htmlFor="" className="profile-label-title">
                    Huyện
                  </label>
                </div>
                <div className="profile__Address-input">
                  <input
                    type="text"
                    className="profile__Address-input"
                    placeholder="Địa chỉ"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
