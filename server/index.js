const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const userRouters = require("./routes/userRoutes");
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
// Connect to MongoDB
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_LINK, () => {
  console.log("Connect to mongodb...");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});

// import data
app.use("/api/import", productRoutes);

// get product
app.use("/api/products", productRoutes);

// create user
app.use("/api/user", userRouters);
