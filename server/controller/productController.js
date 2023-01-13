const Product = require("../models/Product");
const asyncHandler = require("express-async-handler");

const productController = {
  addProduct: async (req, res) => {
    const Data = req.body;
    Product.create(Data, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
        // res.status(200).json(req.data);
      }
    });
  },
  viewAllProducts: asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  }),
  viewSingleProduct: asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params._id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404);
    }
  }),
};

module.exports = productController;
