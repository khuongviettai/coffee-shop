import React from "react";
import "./App.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/MainRoutes";
import Navbar from "./layouts/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {publicRoutes.map((route, index) => {
            const Pages = route.component;
            return <Route key={index} path={route.path} element={<Pages />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
