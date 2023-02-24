const userController = require("../controller/userController");
const userValidate = require("../middlewares/Uservalidate");

const routes = require("express").Router();

routes.post("/register", userController.registerUser);
routes.post("/login", userController.loginUser);

module.exports = routes;
