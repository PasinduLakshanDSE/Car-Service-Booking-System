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


      {/* Description Section */}
      <div className='container-fluid mb-5 p-0'>
        <div className="container-fluid py-5">
          <h4 className="mb-4 head-style">
            <span className="text-color head-style normal-style font-size">Pioneer Auto Electricals</span> Is The Best Place For Your Auto Care
          </h4>
          <p className='text-start mx-5'>
            At Pioneer Auto Electricals, our Scanning Service is designed to efficiently and accurately identify issues within your vehicle's electronic systems. Modern vehicles rely on sophisticated onboard computer systems that manage essential functions such as engine performance, safety features, emissions, and more. When a problem arises, your vehicle may trigger warning lights, like the "check engine" light, or show signs of reduced performance. However, pinpointing the exact issue behind these warnings can be difficult without specialized diagnostic tools. Our scanning service utilizes advanced diagnostic equipment to connect to your vehicle’s computer, retrieve error codes, and provide a clear understanding of the underlying problem, enabling our technicians to make accurate and effective repairs.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="container-xxl py-0" >
        <div className="container p-0" >
          <div className="row wow fadeInUp" >
            {/* Left Column */}
            <div className="col-lg-6 p-0">
              <div className="row">
                {/* First image block */}
                <div className="col-md-6 p-0 service1-img " style={{
                  backgroundColor: 'black',
                  backgroundImage: `url("/Scanning5.jpg")`,

                }}>
                </div>

                {/* Second image block */}
                <div className="col-md-6 p-0 ">
                  <div className="row" style={{ height: '100%' }}>
                    <div className="col-12 p-0 service-img" style={{
                      backgroundColor: 'green',
                      backgroundImage: `url("/Scanning4.jpg")`,

                    }}>
                    </div>
                    <div className="col-12 p-0 service-img" style={{
                      backgroundColor: 'blue',
                      backgroundImage: `url("/Scanning2.jpg")`,

                    }}>
                    </div>
                    <div className="col-12 p-0 service-img" style={{
                      backgroundColor: 'orange',
                      backgroundImage: `url("/Scanning3.jpg")`,

                    }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-4 p-0 des "

            // Adjust as needed
            >
              <h1 className="Snormal-style mx-0 px-0 mb-5 mt-4" style={{ textDecoration: 'underline' }}>
                Complete Scanning Service at Pioneer Auto Electric
              </h1>
              <p className='text-start my-4 '><i className="bi bi-check-circle-fill me-3"></i>Full System Scan</p>
              <p className='text-start my-4'><i className=" bi bi-check-circle-fill me-3"></i>Live Data Monitoring</p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>Comprehensive Reporting</p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>Expert Consultation
              </p>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scanning;
