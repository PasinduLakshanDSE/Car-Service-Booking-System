const express = require("express");
const router = express.Router();
const Booking = require("../model/booking.jsx");
const sendEmail = require("../utils/sendEmail.jsx"); // Correctly import the sendEmail utility

// Create a new booking
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

// Get all bookings
router.get("/getallbookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.send(bookings);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

// Accept a booking
router.patch("/accept/:id", async (req, res) => {
  try {
    const bookingId = req.params.id;

    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { status: "Accepted" },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ message: "Booking not found." });
    }

    // Send acceptance email
    sendEmail({
      to: booking.customerEmail,
      subject: "Booking Accepted",
      text: `
        Dear ${booking.customerName},

        Your booking has been accepted! Here are the details:

        Date: ${booking.selectedDate}
        Time: ${booking.selectedTime}
        Vehicle Type: ${booking.selectedType}
        Vehicle Model: ${booking.vehicleModel}
        Services: ${Object.entries(booking.selectedServices || {})
          .map(([service]) => service)
          .join(", ")}
        Technicians: ${Object.entries(booking.selectedTechnicians || {})
          .map(([service, tech]) => `${service}: ${tech}`)
          .join(", ")}

        Thank you for choosing us!
      `,
    });

    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: "Failed to accept booking.", error: error.message });
  }
});

// Cancel a booking
router.patch("/cancel/:id", async (req, res) => {
  try {
    const bookingId = req.params.id;

    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { status: "Cancelled" },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ message: "Booking not found." });
    }

    // Send cancellation email
    sendEmail({
      to: booking.customerEmail,
      subject: "Booking Cancelled",
      text: `
        Dear ${booking.customerName},

        Unfortunately, your booking for ${booking.selectedDate} at ${booking.selectedTime} has been cancelled.

        Please contact us for further assistance.

        Thank you,
        [Your Company Name]
      `,
    });

    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: "Failed to cancel booking.", error: error.message });
  }
});

module.exports = router;
