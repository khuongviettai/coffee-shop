import React from "react";
import "./App.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Navbar from "./layouts/Navbar/Navbar";
import BackgroundHome from "./layouts/Background/BackgroundHome/BackgroundHome";
import BannerProduct from "./layouts/Background/BannerProduct/BannerProduct";
import Inspiration from "./layouts/Background/Inspiration/Inspiration";

const App = () => {
  return (
    <>
      <Navbar />
      <BackgroundHome />
      <BannerProduct />
      <Inspiration />
    </>
  );
};

export default App;
