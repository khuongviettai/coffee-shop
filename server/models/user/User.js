const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    phoneNumber: {
      type: Number,
      unique: true,
      require: true,
      validate: /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/i,
    },
    password: {
      type: String,
      require: true,
      min: 5,
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
