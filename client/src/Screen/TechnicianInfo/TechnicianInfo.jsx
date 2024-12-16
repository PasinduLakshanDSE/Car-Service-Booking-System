import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "./technicianinfo.css";
import axios from "axios";
import AddTechnician from "./Addtecnician";

const { TabPane } = Tabs;

function TechnicianInfo() {
  return (
    <div className="mt-3 ml-3 mr-3 bs">
      <h3>Technician Details</h3>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Technician" key="1">
          <TechnicianDetails />
        </TabPane>
        <TabPane tab="Add Technician" key="2">
          <AddTechnician />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default TechnicianInfo;

export function TechnicianDetails() {
  const [technicians, setTechnicians] = useState([]); // Correct plural naming

  // Fetch technicians on component mount
  useEffect(() => {
    fetchTechnicians();
  }, []);

  const fetchTechnicians = async () => {
    try {
      const response = await axios.get("/api/technicians/gettechnician");
      setTechnicians(response.data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching Technician:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this technician?")) {
      try {
        const response = await axios.delete(`/api/technicians/${id}`);
        if (response.status === 200) {
          alert("Technician deleted successfully!");
          fetchTechnicians(); // Refresh the list after deletion
        } else {
          alert("Failed to delete the technician. Please try again.");
        }
      } catch (error) {
        console.error("Error deleting technician:", error);
        alert("An error occurred while deleting the technician.");
      }
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
              <th>serviceType</th>
              <th>Facebook Link</th>
              <th>Portfolio</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {technicians.length > 0 ? (
              technicians.map((technician) => (
                <tr key={technician._id}>
                  <td>{technician._id}</td>
                  <td>{technician.technicianName}</td>
                  <td>{technician.

                    serviceType}</td>
                  <td>
                    <a href={technician.facebookLink} target="_blank" rel="noreferrer">
                      Facebook
                    </a>
                  </td>

                  <td>
                    <a
                      href={`http://localhost:5000/${technician.portfolio}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Portfolio
                    </a>
                  </td>

                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(technician._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No Technician Data Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
