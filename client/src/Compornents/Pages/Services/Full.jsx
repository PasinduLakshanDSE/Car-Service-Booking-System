import React, { useState, useEffect } from 'react';
import './Services.css'

import { Link } from "react-router-dom";

const Full = () => {
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
            <h1 className="display-3 text-white mb-3 animated slideInDown normal-style">Full Wiring Service</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <Link to="/" className="nav-item nav-link normal-style" style={{ color: 'white' }}>Home</Link>
                </li>
                <li className="breadcrumb-item text-white active normal-style" aria-current="page">
                  Full Wiring Service
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className='container-fluid mb-5 p-0'
      /*style={{ backgroundImage: 'url(/wiring.jpg)' }}*/>
      <div className="container-fluid  py-5">
      <h4 className="mb-4 head-style">
      <span className="text-color head-style normal-style font-size">Pioneer Auto Electricals</span> Is The Best Place For Your Auto Care</h4>
        
        <p className='text-start mx-5'>At Pioneer Auto Electric, our Full Wiring Service is tailored to ensure that your vehicle's electrical system operates at peak performance and is free from any faults or hazards. This service covers all aspects of your car's wiring, ranging from detailed diagnostics and repairs to system enhancements and upgrades. We understand that the electrical system is the backbone of modern vehicles, responsible for powering everything from lights and sensors to complex control modules and safety systems.</p>

      </div>

      </div>

    </div>
  );
};

export default Full;
