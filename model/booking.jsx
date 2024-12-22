const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  selectedDate: Date,
  selectedTime: String,
  selectedType: String,
  vehicleNumber: String,
  vehicleModel: String,
  instructions: String,
  customerName: String,
  customerContact: String,
  customerEmail: String,
  selectedServices: Object,
  selectedTechnicians: Object,
  status: { type: String, default: "Pending" },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
