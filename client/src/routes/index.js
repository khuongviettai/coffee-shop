import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Collection from "../components/Collection/Collection";
import Home from "../layouts/Home/Home";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/forgot", component: ForgotPassword },
  { path: "/collection", component: Collection },
];

export { publicRoutes };
