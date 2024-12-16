const express = require("express");
const multer = require("multer");
const Technician = require("../model/Technician1.jsx");

const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Route to add a technician
router.post(
  "/",
  upload.fields([
    { name: "technicianImage", maxCount: 1 },
    { name: "portfolio", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const { technicianName, serviceType, facebookLink } = req.body;

      // Validate required fields
      if (!req.files || !req.files.technicianImage || !req.files.portfolio) {
        return res
          .status(400)
          .json({ error: "Technician image and portfolio are required." });
      }

      // Create a new technician object
      const newTechnician = new Technician({
        technicianImage: req.files.technicianImage[0].path,
        technicianName,
        serviceType,
        portfolio: req.files.portfolio[0].path,
        facebookLink,
      });

      // Save to database
      await newTechnician.save();
      res.status(201).json({ message: "Technician added successfully!" });
    } catch (error) {
      console.error("Error saving technician:", error);
      res.status(500).json({ error: "Server error. Unable to save technician." });
    }
  }
);

// Route to get all technicians
router.get("/", async (req, res) => {
  try {
    const technicians = await Technician.find();
    res.status(200).json(technicians);
  } catch (error) {
    console.error("Error fetching technicians:", error);
    res.status(500).json({ error: "Server error. Unable to fetch technicians." });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Technician.findByIdAndDelete(id); // MongoDB example
    res.status(200).send({ message: "Technician deleted successfully." });
  } catch (error) {
    console.error("Error deleting technician:", error);
    res.status(500).send({ error: "Failed to delete technician." });
  }
});


router.put("/:id", upload.fields([{ name: "technicianImage" }, { name: "portfolio" }]), async (req, res) => {
  try {
    const updateFields = { ...req.body };

    if (req.files.technicianImage) {
      updateFields.technicianImage = req.files.technicianImage[0].path;
    }

    if (req.files.portfolio) {
      updateFields.portfolio = req.files.portfolio[0].path;
    }

    const updatedTechnician = await Technician.findByIdAndUpdate(req.params.id, updateFields, {
      new: true,
    });

    res.status(200).json(updatedTechnician);
  } catch (error) {
    console.error("Error updating technician:", error);
    res.status(500).json({ error: "Failed to update technician" });
  }
});




module.exports = router;
