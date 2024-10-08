import React, { useState, useEffect } from 'react';
import './Services.css'

import { Link } from "react-router-dom";

const Scanning = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 400); 

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (loading) {
    return (
      <div
         id="spinner"
         className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
         style={{ zIndex: 9999 }}
       >
         <div
           className="spinner-border text-primary"
           style={{ width: '3rem', height: '3rem' }}
           role="status"
         >
           <span className="sr-only">Loading...</span>
         </div>
       </div>
    );
  }

  return (
    <div>
      <div
        className="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: 'url(/wiring.jpg)' }} // Update path as needed
      >
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown normal-style">Scanning Service</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <Link to="/" className="nav-item nav-link normal-style" style={{ color: 'white' }}>Home</Link>
                </li>
                <li className="breadcrumb-item text-white active normal-style" aria-current="page">
                Scanning Service
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scanning;
