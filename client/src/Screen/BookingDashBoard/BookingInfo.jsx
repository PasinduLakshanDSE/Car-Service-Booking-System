import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import 'bootstrap/dist/css/bootstrap.min.css';
import './bookinginfo.css'

import axios from "axios"
import AdminNavBar from "../AdminNav/AdminNav";


const { TabPane } = Tabs;

function BookingInfo() {
    return (
      <div className="tab" >
        <AdminNavBar/>
        <div className='mt-3 ml-7  mr-3 bs tab'>
            
            <h3>Booking Details</h3>
            
            <Tabs defaultActiveKey="1">
                <TabPane tab="Booking" key="1">
                  
                    <BookingDetails />
                </TabPane>
                
            </Tabs>
        </div>
        </div>
    );
}

export default BookingInfo;


export function BookingDetails() {
    const [bookings, setBookings] = useState([]);
  
    useEffect(() => {
      fetchBookings();
    }, []);
  
    const fetchBookings = async () => {
      try {
        const response = await axios.get("/api/bookings/getallbookings");
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
  
    const handleAccept = async (bookingId) => {
      try {
        await axios.patch(`/api/bookings/accept/${bookingId}`);
        alert("Booking accepted successfully!");
        fetchBookings(); // Refresh bookings
      } catch (error) {
        console.error("Error accepting booking:", error);
        alert("Failed to accept booking.");
      }
    };
  
    const handleCancel = async (bookingId) => {
      try {
        await axios.patch(`/api/bookings/cancel/${bookingId}`);
        alert("Booking cancelled successfully!");
        fetchBookings(); // Refresh bookings
      } catch (error) {
        console.error("Error cancelling booking:", error);
        alert("Failed to cancel booking.");
      }
    };
  
    return (
      <div>
      <div className="row">
        <div className="col-md-10">
          <table className="table table-bordered table-light">
            <thead className="bs">
              <tr>
                <th>Booking Id</th>
                <th>Date</th>
                <th>Time</th>
                <th>Vehicle Type</th>
                <th>Vehicle Number</th>
                <th>Model</th>
                <th>Service</th>
                <th>Technician</th>
                <th>Instruction</th>
                <th>Customer Name</th>
                <th>Contact No</th>
                <th>Email</th>
                <th>Actions</th> {/* New column for actions */}
              </tr>
            </thead>
            <tbody>
              {bookings.length ? (
                bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td>{booking._id}</td>
                    <td>{booking.selectedDate}</td>
                    <td>{booking.selectedTime}</td>
                    <td>{booking.selectedType}</td>
                    <td>{booking.vehicleNumber}</td>
                    <td>{booking.vehicleModel}</td>
                    <td>{booking.selectedServices?.join(", ") || "None"}</td>
                    <td>
                      {Object.entries(booking.selectedTechnicians || {})
                        .map(([service, tech]) => `${service}: ${tech}`)
                        .join(", ") || "Not Assigned"}
                    </td>
                    <td>{booking.instructions || "None"}</td>
                    <td>{booking.customerName}</td>
                    <td>{booking.customerContact}</td>
                    <td>{booking.customerEmail}</td>
                    <td>
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => handleAccept(booking._id)}
                      >
                        Accept
                      </button>
                      <button
                        className="btn btn-danger btn-sm ml-2 mt-3"
                        onClick={() => handleCancel(booking._id)}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="13" className="text-center">
                    No bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    );
  }
  



    