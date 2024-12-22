const express = require("express");
const Service = require("../model/service.jsx"); // Assuming you already have a Service model
const router = express.Router();

// Route to add a new service
router.post("/", async (req, res) => {
  try {
    const { serviceName, serviceDescription, serviceFeatures } = req.body;

    // Check if all required fields are provided
    if (!serviceName || !serviceDescription || !serviceFeatures) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newService = new Service({ serviceName, serviceDescription, serviceFeatures });
    await newService.save();
    res.status(201).json({ message: "Service added successfully!" });
  } catch (error) {
    console.error("Error adding service:", error);
    res.status(500).json({ error: "Failed to add service." });
  }
});


// Route to get all services
router.get("/getservice", async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ error: "Failed to fetch services." });
  }
});

// Route to update a service
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { serviceName, serviceDescription, serviceFeatures } = req.body;
    const updatedService = await Service.findByIdAndUpdate(id, { serviceName, serviceDescription, serviceFeatures }, { new: true });
    res.status(200).json(updatedService);
  } catch (error) {
    console.error("Error updating service:", error);
    res.status(500).json({ error: "Failed to update service." });
  }
});

// Route to delete a service
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Service.findByIdAndDelete(id);
    res.status(200).json({ message: "Service deleted successfully." });
  } catch (error) {
    console.error("Error deleting service:", error);
    res.status(500).json({ error: "Failed to delete service." });
  }
});

module.exports = router;
