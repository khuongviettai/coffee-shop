const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  rating: {
    type: Object,
    require: true,
  },
  comment: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "User",
  },
});

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
  },
  image: {
    type: Array,
  },
  topping: {
    type: Array,
  },
  size: {
    type: Array,
  },
  description: {
    type: String,
    require: true,
  },

  category: {
    type: String,
    require: true,
  },
  sales: {
    type: Number,
    default: 0,
  },
  review: [reviewSchema],
  rating: {
    type: Object,
    require: true,
    default: 0,
  },
  numberReview: {
    type: Number,
    require: true,
    default: 0,
  },
});

module.exports = mongoose.model("Product", productSchema);
