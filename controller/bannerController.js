const Banner = require("../models/Banner");

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
