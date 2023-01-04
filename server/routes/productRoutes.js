const express = require("express");
const asyncHandler = require("express-async-handler");
const Product = require("../models/Product");

const productRoutes = require("express").Router();

// Get all products
productRoutes.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// get single products
productRoutes.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404);
      throw new error("Product not found");
    }
  })
);

module.exports = productRoutes;
