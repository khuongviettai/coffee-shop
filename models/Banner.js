const mongoose = require("mongoose");

const bannerSchema = mongoose.Schema({
  image: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Banner", bannerSchema);
