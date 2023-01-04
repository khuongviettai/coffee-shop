import React from "react";
import "./App.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Navbar from "./layouts/Navbar/Navbar";
import BackgroundHome from "./layouts/Background/BackgroundHome/BackgroundHome";
import BannerProduct from "./layouts/Background/BannerProduct/BannerProduct";
import Inspiration from "./layouts/Background/Inspiration/Inspiration";
import Collection from "./components/Collection/Collection";
import Item from "./components/Item/Item";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import SingleProduct from "./components/SingleProduct/SingleProduct";

const App = () => {
  return (
    <>
      {/* <Navbar />
      <BackgroundHome />
      <BannerProduct />
      <Inspiration /> */}
      {/* <Collection /> */}
      {/* <Item /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <ForgotPassword /> */}
      <SingleProduct />
    </>
  );
};

export default App;
