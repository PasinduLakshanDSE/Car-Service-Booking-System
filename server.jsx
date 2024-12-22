const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const cors = require("cors");

// Middleware
app.use(bodyParser.json()); // Parse incoming JSON data
app.use(cors()); // Enable CORS

// Database configuration
const dbConfig = require("./db.jsx");

// Routes
const technicianRoutes = require("./routes/technicianRoutes.jsx");
const technicianRoute = require("./routes/technicianRoute.jsx");
const usersRoute = require("./routes/usersRoute.jsx");
const bookingsRoute = require("./routes/bookingRoute.jsx");
const serviceRoute = require("./routes/serviceRoute.jsx"); // Import the new Service route

// Serve uploaded files
app.use("/uploads", express.static("uploads"));

// Register routes
app.use("/api/technicians", technicianRoutes);
app.use("/api/technicians", technicianRoute);
app.use("/api/users", usersRoute);
app.use("/api/bookings", bookingsRoute);
app.use("/api/services", serviceRoute); // Add the Service route

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Node Server Started on Port ${port}`));
