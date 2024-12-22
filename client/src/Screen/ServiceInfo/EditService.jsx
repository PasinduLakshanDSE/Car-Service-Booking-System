import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function EditService({ show, onClose, service, onUpdate }) {
  const [formData, setFormData] = useState({
    ...service,
   
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  

  const handleFeaturesChange = (e, index) => {
    const updatedFeatures = [...formData.serviceFeatures];
    updatedFeatures[index] = e.target.value;
    setFormData({ ...formData, serviceFeatures: updatedFeatures });
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      serviceFeatures: [...formData.serviceFeatures, ""],
    });
  };

  const removeFeature = (index) => {
    const updatedFeatures = [...formData.serviceFeatures];
    updatedFeatures.splice(index, 1);
    setFormData({ ...formData, serviceFeatures: updatedFeatures });
  };

  const handleSubmit = async () => {
    try {
      const data = new FormData();
      data.append("serviceName", formData.serviceName);
      data.append("serviceDescription", formData.serviceDescription);

      // Append features as JSON
      data.append(
        "serviceFeatures",
        JSON.stringify(formData.serviceFeatures || [])
      );

      

      await onUpdate(service._id, data); // Pass data to parent handler
      onClose(); // Close modal after update
    } catch (error) {
      console.error("Error updating service:", error);
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Service</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label>Service Name:</label>
            <input
              type="text"
              className="form-control"
              name="serviceName"
              value={formData.serviceName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label>Service Description:</label>
            <textarea
              className="form-control"
              name="serviceDescription"
              rows="3"
              value={formData.serviceDescription}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label>Service Features:</label>
            {formData.serviceFeatures &&
              formData.serviceFeatures.map((feature, index) => (
                <div key={index} className="d-flex mb-2">
                  <input
                    type="text"
                    className="form-control me-2"
                    value={feature}
                    onChange={(e) => handleFeaturesChange(e, index)}
                  />
                  <Button
                    variant="danger"
                    onClick={() => removeFeature(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            <Button variant="success" onClick={addFeature}>
              Add Feature
            </Button>
          </div>
         
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditService;
