import React from "react";
import BannerProduct from "../components/Home/BannerProduct/BannerProduct";
import Inspiration from "../components/Home/Inspiration/Inspiration";
import SwiperHome from "../components/Home/SwiperHome/SwiperHome";
import { BANNERPRDUCT, SWIPERHOME } from "../data/index";
import Navbar from "../layouts/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SwiperHome list={SWIPERHOME} />
      <BannerProduct list={BANNERPRDUCT} />
      <Inspiration />
    </div>
  );
};

export default Home;
