import React from "react";
import "./App.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import NavbarLayout from "./layouts/Navbar/NavbarLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Products from "./pages/Products/Products";

const App = () => {
  return (
    <div>
      <Products />
    </div>
  );
};

export default App;
