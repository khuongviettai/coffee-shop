import React from "react";
import "./SwiperHome.scss";
import { Link } from "react-router-dom";

// import css from swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwiperHome.css";

const SwiperHome = ({ list }) => {
  return (
    <div className="SwiperHome__container">
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
        {list.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                <Link to="/products">
                  <img className="swiperHome__img" src={item.image} alt="" />
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperHome;
