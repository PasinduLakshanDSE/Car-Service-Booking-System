import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./addservice.css";

function AddService() {
  const [formData, setFormData] = useState({
    serviceName: "",
    serviceDescription: "",
    serviceFeatures: ["", "", ""], // Three features initially
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("serviceFeature")) {
      const index = parseInt(name.split("-")[1]);
      const updatedFeatures = [...formData.serviceFeatures];
      updatedFeatures[index] = value;
      setFormData({ ...formData, serviceFeatures: updatedFeatures });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setErrors({ ...errors, [name]: "" }); // Clear the error for this field
  };

  const validateForm = () => {
    let newErrors = {};

    // Check if service name is provided
    if (!formData.serviceName.trim()) {
      newErrors.serviceName = "Service name is required.";
    }

    // Check if service description is provided
    if (!formData.serviceDescription.trim()) {
      newErrors.serviceDescription = "Service description is required.";
    }

    // Check if service features are filled in
    formData.serviceFeatures.forEach((feature, index) => {
      if (!feature.trim()) {
        newErrors[`serviceFeature-${index}`] = `Feature ${index + 1} is required.`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:5000/api/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send the form data as JSON
      });

      if (response.ok) {
        alert("Service added successfully!");
        setFormData({
          serviceName: "",
          serviceDescription: "",
          serviceFeatures: ["", "", ""],
        }); // Reset form data after success
      } else {
        const result = await response.json();
        alert(`Failed to add service: ${result.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container mt-5 form">
      <h2 className="mb-4">Add Service Details</h2>
      <form onSubmit={handleSubmit} className="f">
        {/* Service Name */}
        <div className="mb-3">
          <label className="form-label">Service Name:</label>
          <input
            type="text"
            className="form-control"
            name="serviceName"
            placeholder="Enter service name"
            value={formData.serviceName}
            onChange={handleInputChange}
          />
          {errors.serviceName && (
            <small className="text-danger">{errors.serviceName}</small>
          )}
        </div>

        {/* Service Description */}
        <div className="mb-3">
          <label className="form-label">Service Description:</label>
          <textarea
            className="form-control"
            name="serviceDescription"
            placeholder="Enter service description"
            value={formData.serviceDescription}
            onChange={handleInputChange}
          />
          {errors.serviceDescription && (
            <small className="text-danger">{errors.serviceDescription}</small>
          )}
        </div>

        {/* Service Features */}
        <div className="mb-3">
          <label className="form-label">Service Features:</label>
          {formData.serviceFeatures.map((feature, index) => (
            <div key={index}>
              <input
                type="text"
                className="form-control mb-2"
                name={`serviceFeature-${index}`}
                placeholder={`Feature ${index + 1}`}
                value={feature}
                onChange={handleInputChange}
              />
              {errors[`serviceFeature-${index}`] && (
                <small className="text-danger">
                  {errors[`serviceFeature-${index}`]}
                </small>
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddService;
