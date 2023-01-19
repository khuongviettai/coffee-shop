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
};

module.exports = productController;
