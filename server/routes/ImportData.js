const express = require("express");
const Product = require("../models/Product");

const ImportData = require("express").Router();

ImportData.post("/product", (req, res) => {
  const Data = req.body;
  Product.create(Data, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = ImportData;
