const express = require("express");
const router = express.Router();
const Booking = require("../model/booking.jsx");

router.post("/Booking", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).send("Booking successful");
  } catch (error) {
    console.error("Error saving booking:", error.message);
    res.status(400).json({ error: "Booking failed" });
  }
});

module.exports = router;
