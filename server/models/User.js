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
    },
    fullName: {
      type: String,
      require: true,
    },
    birthDate: {
      type: String,
      require: true,
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
