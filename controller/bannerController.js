const Banner = require("../models/Banner");
const asyncHandler = require("express-async-handler");

const bannerController = {
  uploadBanner: async (req, res) => {
    Banner.create(Data, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
};
