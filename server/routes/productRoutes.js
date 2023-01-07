const productController = require("../controller/productController");

const router = require("express").Router();

router.post("/products", productController.addProduct);
router.get("/", productController.viewAllProducts);
router.get("/:id", productController.viewSingleProduct);

module.exports = router;
