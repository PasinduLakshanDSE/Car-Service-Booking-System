import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "./serviceinfo.css";
import axios from "axios";
import AddService from "./AddService";
import EditService from "./EditService";
import AdminNavBar from "../AdminNav/AdminNav";

const { TabPane } = Tabs;

function ServiceInfo() {
  return (
    <div className="tab2">
      <AdminNavBar/>
    <div className="mt-3 ml-3 mr-3 bs">
      <h3>Service Details</h3>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Service" key="1">
          <ServiceDetails />
        </TabPane>
        <TabPane tab="Add Service" key="2">
          <AddService />
        </TabPane>
      </Tabs>
    </div>
    </div>
  );
}

export default ServiceInfo;

export function ServiceDetails() {
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  // Fetch services on component mount
  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get("/api/services/getservice");
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      try {
        const response = await axios.delete(`/api/services/${id}`);
        if (response.status === 200) {
          alert("Service deleted successfully!");
          fetchServices(); // Refresh the list after deletion
        } else {
          alert("Failed to delete the service. Please try again.");
        }
      } catch (error) {
        console.error("Error deleting service:", error);
        alert("An error occurred while deleting the service.");
      }
    }
  };

  const handleEdit = (service) => {
    setEditingService(service);
    setShowEditModal(true);
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      await axios.put(`/api/services/${id}`, updatedData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Service updated successfully!");
      setShowEditModal(false); // Close modal after update
      fetchServices(); // Refresh data
    } catch (error) {
      console.error("Error updating service:", error);
      alert("Failed to update service.");
    }
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table table-bordered table-light">
          <thead className="bs">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Features</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.length > 0 ? (
              services.map((service) => (
                <tr key={service._id}>
                  <td>{service._id}</td>
                  <td>{service.serviceName}</td>
                  <td>{service.serviceDescription}</td>
                  <td>
                    <ul>
                      {service.serviceFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => handleEdit(service)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(service._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No Service Data Available
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Edit Modal */}
        {showEditModal && editingService && (
          <EditService
            show={showEditModal}
            onClose={() => setShowEditModal(false)}
            service={editingService}
            onUpdate={handleUpdate}
          />
        )}
      </div>
    </div>
  );
}
