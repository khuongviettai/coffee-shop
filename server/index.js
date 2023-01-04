const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const ImportData = require("./routes/ImportData");
const productRoutes = require("./routes/productRoutes");
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
  console.log("Server is running on port 8000...");
});

// import data
app.use("/api/import", ImportData);

// get product
app.use("/api/products", productRoutes);
