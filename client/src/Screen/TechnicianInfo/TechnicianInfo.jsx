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
          <AddTechnician/>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default TechnicianInfo;

export function TechnicianDetails() {
  const [technicians, setTechnicians] = useState([]); // Correct plural naming

  useEffect(() => {
    const fetchTechnician = async () => {
      try {
        const response = await axios.get("/api/technicians/gettechnician");
        setTechnicians(response.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching Technician:", error);
      }
    };

    fetchTechnician();
  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table table-bordered table-light">
          <thead className="bs">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Facebook Link</th>
              <th>Twitter Link</th>
              <th>Instagram Link</th>
            </tr>
          </thead>
          <tbody>
            {technicians.length > 0 ? (
              technicians.map((technicians) => (
                <tr key={technicians._id}>
                  <td>{technicians._id}</td>
                  <td>{technicians.name}</td>
                  <td>{technicians.designation}</td>
                  <td>
                    <a href={technicians.facebookLink} target="_blank" rel="noreferrer">
                      Facebook
                    </a>
                  </td>
                  <td>
                    <a href={technicians.twitterLink} target="_blank" rel="noreferrer">
                      Twitter
                    </a>
                  </td>
                  <td>
                    <a href={technicians.instagramLink} target="_blank" rel="noreferrer">
                      Instagram
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
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
