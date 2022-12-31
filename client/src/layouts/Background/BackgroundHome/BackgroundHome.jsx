import React from "react";
import "./BackgroundHome.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Style.css";

const BackgroundHome = () => {
  return (
    <div className="BgHome__container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        className="image__slider"
      >
        <SwiperSlide>
          <div>
            <img
              className="bgHome__img"
              src="./img/BackgroundHome/ansang9k.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="bgHome__img"
              src="./img/BackgroundHome/bennhau.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="bgHome__img"
              src="./img/BackgroundHome/daitiec.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="bgHome__img"
              src="./img/BackgroundHome/tuyetvoi.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BackgroundHome;
