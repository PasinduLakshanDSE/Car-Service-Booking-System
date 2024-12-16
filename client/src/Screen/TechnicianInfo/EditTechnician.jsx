import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function EditTechnician({ show, onClose, technician, onUpdate }) {
  const [formData, setFormData] = useState({
    ...technician,
    technicianImage: null, // For handling image update
    portfolio: null, // For handling portfolio update
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async () => {
    try {
      const data = new FormData();
      data.append("technicianImage", formData.technicianImage);
      data.append("technicianName", formData.technicianName);
      data.append("serviceType", formData.serviceType);
      data.append("portfolio", formData.portfolio);
      data.append("facebookLink", formData.facebookLink);

      await onUpdate(technician._id, data); // Pass to parent handler
      onClose(); // Close modal
    } catch (error) {
      console.error("Error updating technician:", error);
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Technician</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label>Technician Name:</label>
            <input
              type="text"
              className="form-control"
              name="technicianName"
              value={formData.technicianName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label>Service Type:</label>
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
          <div className="mb-3">
            <label>Facebook Link:</label>
            <input
              type="url"
              className="form-control"
              name="facebookLink"
              value={formData.facebookLink}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label>Update Image:</label>
            <input
              type="file"
              className="form-control"
              name="technicianImage"
              onChange={handleFileChange}
            />
          </div>
          <div className="mb-3">
            <label>Update Portfolio:</label>
            <input
              type="file"
              className="form-control"
              name="portfolio"
              onChange={handleFileChange}
            />
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
export default EditTechnician;