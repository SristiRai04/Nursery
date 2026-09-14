const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const plantRoutes = require("./routes/plantRoutes");

const app = express();

const PORT = process.env.PORT || 5000;


// =====================================================
// MIDDLEWARE
// =====================================================

app.use(cors());

app.use(express.json());


// =====================================================
// TEST ROUTE
// =====================================================

app.get("/", (req, res) => {
  res.json({
    message: "Greenora Backend is running 🌱",
  });
});


// =====================================================
// PLANT ROUTES
// =====================================================

app.use("/api/plants", plantRoutes);


// =====================================================
// MONGODB CONNECTION
// =====================================================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(
        `Server running on http://localhost:${PORT}`
      );
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:");
    console.error(error.message);
  });