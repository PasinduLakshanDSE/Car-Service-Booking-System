import React,{useState} from "react";

import './booking.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



  

const Booking = () =>{

    const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const timeSlots = ["8:30 AM", "4:30 AM", "5:30 AM", "8:30 AM", "9:30 AM", "10:30 AM"];

  const handleCancelSelection = () => {
    setSelectedDate(null);
    setSelectedTime(null);
  };


    return(
        <div className="bookmain" >
            <div className="maincontainer">
                <h1 className="Title">Hello, Customer!</h1>

                <div className="appointment-picker">
      <h5>Select an Appointment Date</h5>
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
                
            </div>
        </div>
    )

}

export default Booking;