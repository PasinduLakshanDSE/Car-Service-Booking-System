import React from "react";
import './dashboard.css';
import AdminNavBar from "../AdminNav/AdminNav";

const DashBoard = () => {
  const cards = [
    { count: 150, label: "Total Booking", color: "blue", icon: <i className="fas fa-calendar-days si"></i> },
    { count: 53, label: "Total Technician", color: "green", icon: <i className="fas fa-gear si"></i> },
    { count: 50, label: "Total Service", color: "teal", icon: <i className="fas fa-handshake si "></i> },
    { count: 50, label: "Total Users", color: "red", icon: <i className="fas fa-user si"></i> },
  ];

  return (
    <div>
      <AdminNavBar />

      <div className="dashboard">
        <div className="dashboard-header">
          <h1 className="title">Dashboard</h1>
          <p>Home / Dashboard</p>
        </div>

        <div className="dashboard-cards">
          {cards.map((card, index) => (
            <div
              key={index}
              className="dashboard-card"
              style={{ backgroundColor: card.color }}
            >
              <div className="card-content">
                <h2>{card.count}</h2>
                <p>{card.label}</p>
              </div>
              <div className="card-icon">
                {card.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
