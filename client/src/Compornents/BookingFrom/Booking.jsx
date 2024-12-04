import React, { useState } from "react";

import './booking.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";





const Booking = () => {

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const timeSlots = ["8:30 AM", "10:30 AM", "12:30 PM", "2:00 PM", "4:00 PM", "6:00 PM"];

  const handleCancelSelection = () => {
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const [selectedType, setSelectedType] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleModel, setVehicleModel] = useState("")
  const [instructions, setInstructions] = useState("")
  const [customerName, setName] = useState("")
  const [customerContact, setContact] = useState("")
  const [customerEmail, setEmail] = useState("")

  const handleSelection = (event1) => {
    setSelectedType(event1.target.value);
  };

  const handleChange = (event2) => {
    setVehicleNumber(event2.target.value);
  };

  const handleModel = (event3) => {
    setVehicleModel(event3.target.value)
  }

  const handleInstruction = (event4) => {
    setInstructions(event4.target.value)
  }

  const handleName = (event5) => {
    setName(event5.target.value)
  }

  const handleContact = (event6) => {
    setContact(event6.target.value)
  }
  const handleEmail = (event7) => {
    setEmail(event7.target.value)
  }




  const services = [
    {
      name: "Full Wiring Service",
      technicians: ["John Doe", "Jane Smith"],
    },
    {
      name: "Scanning Service",
      technicians: ["Emily Davis", "Michael Brown"],
    },
    {
      name: "Altenator Service",
      technicians: ["Chris Johnson", "Sarah Wilson"],
    },
    {
      name: "Starting Motor Service",
      technicians: ["charli smith", "yhohan pereis"]
    },
    {
      name: "Head Light wiring Service",
      technicians: ["Chris Johnson", "Sarah Wilson"],
    },
    {
      name: "Setup and Speekers Replacement",
      technicians: ["Champan  Johnson", "Sarah Wilson"],
    },
  ];

  // State for selected services and their technicians
  const [selectedServices, setSelectedServices] = useState({});
  const [selectedTechnicians, setSelectedTechnicians] = useState({});

  // Handle service selection (checkboxes)
  const handleServiceSelection = (serviceName) => {
    setSelectedServices((prev) => ({
      ...prev,
      [serviceName]: !prev[serviceName], // Toggle service selection
    }));
    setSelectedTechnicians((prev) => ({
      ...prev,
      [serviceName]: "", // Reset technician selection for toggled service
    }));
  };

  // Handle technician selection (radio buttons)
  const handleTechnicianSelection = (serviceName, technician) => {
    setSelectedTechnicians((prev) => ({
      ...prev,
      [serviceName]: technician,
    }));
  };



  return (
    <div className="bookmain" >
      <div className="maincontainer">
        <h1 className="Title">Hello, Customer!</h1>

        <div className="appointment-picker">
          <h5 style={{ marginBottom: '20px' }}>Select an Appointment Date</h5>
          <div className="date-time-selector">
            {/* Date Picker */}
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MM/dd/yyyy"
              className="date-picker"
              placeholderText="Select a date"
            />

            {/* Display Selected Date */}
            {selectedDate && (
              <div className="selected-date">
                {selectedDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            )}

            {/* Time Slots */}
            {selectedDate && (
              <div className="time-slots">
                {timeSlots.map((time, index) => (
                  <button
                    key={index}
                    className={`time-slot ${selectedTime === time ? "selected" : ""}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Selected Time Section */}
          {selectedTime && (
            <div className="selected-time-section">
              <p>
                Selected Time: {selectedTime},{" "}
                {selectedDate?.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <button className="cancel-button" onClick={handleCancelSelection}>
                Cancel Selection
              </button>
            </div>
          )}
        </div>


        <div className="vehicle-type-selector">
          <h5 className="typetitle">Vehicle Type</h5>
          <div className="vehicle-types">
            {[
              "Sedan",
              "Sports Car",
              "Hatchback",
              "Sport Utility Vehicle (SUV)",
              "Pickup Truck",

              "Coupe",
              "Wagon",
              "Bus",
              "Lorry",
              "Other",

            ].map((type) => (
              <label key={type} className="radio-label">
                <input
                  type="radio"
                  name="vehicleType"
                  value={type}
                  checked={selectedType === type}
                  onChange={handleSelection}
                />
                {type}
              </label>
            ))}
          </div>
        </div>


        <div className="vehicle-container">
          {/*<label htmlFor="vehicle-number" className="label">
        Vehicle Number
      </label>*/}
          <h5 className="typetitle">Vehicle Number</h5>
          <input
            type="text"
            id="vehicle-number"
            className="vehicle-input"
            value={vehicleNumber}
            onChange={handleChange}
            placeholder="Enter vehicle number"
          />
        </div>

        <div className="vehicle-container">
          <h5 className="typetitle">Model</h5>
          <input
            type="text"
            id="vehicle-model"
            className="vehicle-input"
            value={vehicleModel}
            onChange={handleModel}
            placeholder="Enter vehicle model"
          />
        </div>


        <div className="multi-service-booking-container">
          <h5 className="typetitle2">Type of Services</h5>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <input
                  type="checkbox"
                  id={`service-${index}`}
                  className="checkbox"
                  checked={!!selectedServices[service.name]}
                  onChange={() => handleServiceSelection(service.name)}
                />
                <label htmlFor={`service-${index}`} className="label">
                  {service.name}
                </label>

                {selectedServices[service.name] && (
                  <div className="technician-section">

                    {service.technicians.map((technician, techIndex) => (
                      <div key={techIndex} className="technician-item">
                        <input
                          type="radio"
                          id={`technician-${index}-${techIndex}`}
                          className="radio"
                          name={`technician-${service.name}`}
                          value={technician}
                          checked={selectedTechnicians[service.name] === technician}
                          onChange={() =>
                            handleTechnicianSelection(service.name, technician)
                          }
                        />
                        <label
                          htmlFor={`technician-${index}-${techIndex}`}
                          className="label"
                        >
                          {technician}<div><a className="text-secondary border-bottom read" href="">
                            Read More
                          </a></div>
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {Object.keys(selectedServices).length > 0 && (
            <div className="selection-summary">
              <h4 className="subtitle">Selected Services and Technicians</h4>
              <ul className="ul">
                {Object.keys(selectedServices)
                  .filter((serviceName) => selectedServices[serviceName])
                  .map((serviceName) => (
                    <li key={serviceName} className="li">
                      <strong>Service:</strong> {serviceName}
                      <br />
                      <strong>Technician:</strong>{" "}
                      {selectedTechnicians[serviceName]
                        ? selectedTechnicians[serviceName]
                        : "Not selected"}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>


        <div className="special-instructions-container">
          <h5 className="instructiontitle">
            Any Special Instructions
          </h5>
          <textarea
            id="special-instructions"
            className="special-textarea"
            value={instructions}
            onChange={handleInstruction}
            placeholder="Enter your special instructions here..."
          />
        </div>

        <div className="customer-info-container">
          <h2 className="customer-title">Customer Information</h2>
          <hr className="customer-divider" />

          <div className="vehicle-container">
            <h5 className="typetitle">Full Name</h5>
            <input
              type="text"
              id="customer-name"
              className="vehicle-input"
              value={customerName}
              onChange={handleName}
              placeholder="Enter Your Name"
            />
          </div>

          <div className="vehicle-container">
            <h5 className="typetitle">Contact Number</h5>
            <input
              type="text"
              id="customer-contact"
              className="vehicle-input"
              value={customerContact}
              onChange={handleContact}
              placeholder="Enter Your Contact No"
            />
          </div>

          <div className="vehicle-container">
            <h5 className="typetitle">Email</h5>
            <input
              type="email"
              id="customer-email"
              className="vehicle-input"
              value={customerEmail}
              onChange={handleEmail}
              placeholder="Enter Your Email"
            />
          </div>


        </div>

        <button className="button mt-3">Book Now</button>



      </div>
    </div>
  )

}

export default Booking;