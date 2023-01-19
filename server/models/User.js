const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    phoneNumber: {
      type: Number,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      require: true,
      min: 5,
      max: 128,
    },
    fullName: {
      type: String,
      require: true,
    },
    birthDate: {
      type: Date,
      require: true,
    },
    email: {
      type: String,
    },
    registerDate: {
      type: Date,
      default: Date.now,
    },
    isAdmin: {
      type: Boolean,
      default: false,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
