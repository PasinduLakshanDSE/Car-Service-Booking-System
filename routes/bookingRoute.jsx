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

router.get('/getallbookings', async(req,res) => {
  try{
    const bookings = await Booking.find()
    res.send(bookings)
  }catch(error){
    return res.status(400).json({error});
  }
})

module.exports = router;
