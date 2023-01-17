import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Products from "../pages/Products";
import SingleProduct from "../pages/SingleProduct";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/forgot", component: ForgotPassword },
  { path: "/products", component: Products },
  { path: "/products/1", component: SingleProduct },
];

export { publicRoutes };
