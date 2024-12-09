import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import 'bootstrap/dist/css/bootstrap.min.css';
import './admin.css'
import axios from "axios"


const { TabPane } = Tabs;

function AdminDashBoard() {
    return (
        <div className='mt-3 ml-3  mr-3 bs'>
            <h1>Admin Dashboard</h1>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Booking" key="1">
                    <BookingDetails />
                </TabPane>
                <TabPane tab="Rooms" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Booking3" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </div>
    );
}

export default AdminDashBoard;


export function BookingDetails() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('/api/bookings/getallbookings');
                setBookings(response.data);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            }
        };

        fetchBookings(); // Call the async function inside useEffect
    }, []); // Dependency array remains empty to only fetch data on component mount

    return (
        <div className="row">
            <div className="col-md-10">
                <h5>Booking Details</h5>

                <table className="table table-bordered table-dark">
                    <thead className="bs ">
                        <tr>
                            <th>Booking Id</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Vehicale Type</th>
                            <th>Vehicale Number</th>
                            <th>Model</th>
                            <th>Service</th>
                            <th>Technician</th>
                            <th>Instruction</th>
                            <th>Customer Name</th>
                            <th>Contact No</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                    {bookings.length && (bookings.map (booking => {
                        return<tr>
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
                     
                        </tr>
                    }))}
                  
                    </tbody>
                </table>


                
            </div>
        </div>
    );
}



    