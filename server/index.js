const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

dotenv.config();

// Connect to MongoDB
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_LINK, () => {
    console.log("Connect to mongodb...");
});

app.use(cors());
app.use(express.json());




const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Server is running on port 8000...");
});