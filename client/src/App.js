import React from "react";
import "./App.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/MainRoutes";
import NavbarLayout from "./layouts/Navbar/NavbarLayout";
import ProfileInfor from "./pages/ProfileInfor";

const App = () => {
  return (
    // <Router>
    //   <div className="App">
    //     <NavbarLayout />
    //     <Routes>
    //       {publicRoutes.map((route, index) => {
    //         const Pages = route.component;
    //         return <Route key={index} path={route.path} element={<Pages />} />;
    //       })}
    //     </Routes>
    //   </div>
    // </Router>
    <ProfileInfor />
  );
};

export default App;
