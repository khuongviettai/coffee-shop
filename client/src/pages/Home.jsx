import React, { useEffect, useState } from "react";
import BannerProduct from "../components/Home/BannerProduct/BannerProduct";
import Inspiration from "../components/Home/Inspiration/Inspiration";
import SwiperHome from "../components/Home/SwiperHome/SwiperHome";
import { SWIPERHOME } from "../data/index";
import Navbar from "../layouts/Navbar/Navbar";
import axiosLink from "../instance/axiosLink";
import HomeLoading from "../components/Loading/HomeLoading";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosLink
      .get("/api/products")
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
    setLoading(false);
  }, []);
  return (
    <div>
      <Navbar />
      {loading ? (
        <HomeLoading />
      ) : (
        <>
          <SwiperHome list={SWIPERHOME} />
          <BannerProduct list={products} />
          <Inspiration />
        </>
      )}
    </div>
  );
};

export default Home;
