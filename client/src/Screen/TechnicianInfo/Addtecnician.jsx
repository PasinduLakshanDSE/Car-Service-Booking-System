import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./addtechnician.css";

function AddTechnician() {
  const [formData, setFormData] = useState({
    technicianImage: null,
    technicianName: "",
    serviceType: "Full Wiring Service",
    portfolio: null,
    facebookLink: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error for this field
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
    setErrors({ ...errors, [name]: "" }); // Clear the error for this field
  };

  const validateForm = () => {
    let newErrors = {};
    
    // Check if technician name is provided
    if (!formData.technicianName.trim()) {
      newErrors.technicianName = "Technician name is required.";
    }

    // Check if technician image is uploaded
    if (!formData.technicianImage) {
      newErrors.technicianImage = "Technician image is required.";
    } else if (
      !["image/jpeg", "image/png", "image/jpg"].includes(formData.technicianImage.type)
    ) {
      newErrors.technicianImage = "Only JPG or PNG images are allowed.";
    }

    // Check if portfolio file is uploaded
    if (!formData.portfolio) {
      newErrors.portfolio = "Portfolio file is required.";
    } else if (
      !["application/pdf", "application/msword"].includes(formData.portfolio.type)
    ) {
      newErrors.portfolio = "Only PDF or Word documents are allowed.";
    }

    // Validate Facebook link (if provided)
    if (formData.facebookLink && !formData.facebookLink.match(/https?:\/\/(www\.)?facebook\.com\/.+/)) {
      newErrors.facebookLink = "Please enter a valid Facebook profile link.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create a new FormData object
    const data = new FormData(); 
    data.append("technicianImage", formData.technicianImage);
    data.append("technicianName", formData.technicianName);
    data.append("serviceType", formData.serviceType);
    data.append("portfolio", formData.portfolio);
    data.append("facebookLink", formData.facebookLink);
  
    try {
      const response = await fetch("http://localhost:5000/api/technicians", {
        method: "POST",
        body: data, // Send the correct FormData object
      });
  
      if (response.ok) {
        alert("Technician added successfully!");
        setFormData({
          technicianImage: null,
          technicianName: "",
          serviceType: "Full Wiring Service",
          portfolio: null,
          facebookLink: "",
        }); // Reset form data after success
      } else {
        const result = await response.json();
        alert(`Failed to add technician: ${result.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };
  

  return (
    <div className="container mt-5 form">
      <h2 className="mb-4">Add Technician Details</h2>
      <form onSubmit={handleSubmit} className="f">
        {/* Technician Image Upload */}
        <div className="mb-3">
          <label className="form-label">Technician Image:</label>
          <input
            type="file"
            className="form-control"
            name="technicianImage"
            onChange={handleFileChange}
          />
          {errors.technicianImage && (
            <small className="text-danger">{errors.technicianImage}</small>
          )}
        </div>

        {/* Technician Name */}
        <div className="mb-3">
          <label className="form-label">Technician Name:</label>
          <input
            type="text"
            className="form-control"
            name="technicianName"
            placeholder="Enter technician name"
            value={formData.technicianName}
            onChange={handleInputChange}
          />
          {errors.technicianName && (
            <small className="text-danger">{errors.technicianName}</small>
          )}
        </div>

        {/* Service Type Dropdown */}
        <div className="mb-3">
          <label className="form-label">Service Type:</label>
          <select
            className="form-select"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleInputChange}
          >
            <option value="Full Wiring Service">Full Wiring Service</option>
            <option value="Scanning Service">Scanning Service</option>
            <option value="Altenator Service">Altenator Service</option>
            <option value="Starting Motor Service">Starting Motor Service</option>
            <option value="Head Light Wiring Service">Head Light Wiring Service</option>
            <option value="Setup and Speakers Replacement">Setup and Speakers Replacement</option>
          </select>
        </div>

        {/* Portfolio Upload */}
        <div className="mb-3">
          <label className="form-label">Portfolio:</label>
          <input
            type="file"
            className="form-control"
            name="portfolio"
            onChange={handleFileChange}
          />
          {errors.portfolio && (
            <small className="text-danger">{errors.portfolio}</small>
          )}
        </div>

        {/* Facebook Link */}
        <div className="mb-3">
          <label className="form-label">Facebook Link:</label>
          <input
            type="url"
            className="form-control"
            name="facebookLink"
            placeholder="Enter Facebook profile link"
            value={formData.facebookLink}
            onChange={handleInputChange}
          />
          {errors.facebookLink && (
            <small className="text-danger">{errors.facebookLink}</small>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTechnician;
