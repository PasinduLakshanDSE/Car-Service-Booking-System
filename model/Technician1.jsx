const mongoose = require("mongoose");

const technicianSchema = new mongoose.Schema({
  technicianImage: {
    type: String,
    required: true,
  },
  technicianName: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
    required: true,
  },
  portfolio: {
    type: String,
    required: true,
  },
  facebookLink: {
    type: String,
    required: false,
  },
});

const Technician = mongoose.model("Technician", technicianSchema);

module.exports = Technician;
