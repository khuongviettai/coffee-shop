import React from "react";
import "./App.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/MainRoutes";
import Footer from "./layouts/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Pages = route.component;
          return <Route key={index} path={route.path} element={<Pages />} />;
        })}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
