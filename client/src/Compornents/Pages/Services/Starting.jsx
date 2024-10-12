import React, { useState, useEffect } from 'react';
import './Services.css'

import { Link } from "react-router-dom";

const Starting = () => {
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
            <h1 className="display-3 text-white mb-3 animated slideInDown normal-style">Starting Motor Service</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <Link to="/" className="nav-item nav-link normal-style" style={{ color: 'white' }}>Home</Link>
                </li>
                <li className="breadcrumb-item text-white active normal-style" aria-current="page">
                  Starting Motor Service
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
            At Pioneer Auto Electricals, our Starting Motor Service is focused on keeping your vehicle’s starter motor functioning efficiently, ensuring smooth and reliable engine ignition every time you turn the key. The starter motor plays a vital role in your vehicle's ignition system by using electrical power from the battery to turn the engine over and start its operation. If the starter motor is faulty or worn out, your vehicle may experience difficulty starting, slow cranking, or complete failure to start, potentially leaving you stranded. Our service involves thorough inspection, testing, and either repairing or replacing the starter motor to ensure your vehicle starts reliably and performs as it should
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
                  backgroundImage: `url("/starting1.jpg")`,

                }}>
                </div>

                {/* Second image block */}
                <div className="col-md-6 p-0 ">
                  <div className="row" style={{ height: '100%' }}>
                    <div className="col-12 p-0 service-img" style={{
                      backgroundColor: 'green',
                      backgroundImage: `url("/starting3.jpg")`,

                    }}>
                    </div>
                    <div className="col-12 p-0 service-img" style={{
                      backgroundColor: 'blue',
                      backgroundImage: `url("/starting5.jpg")`,

                    }}>
                    </div>
                    <div className="col-12 p-0 service-img" style={{
                      backgroundColor: 'orange',
                      backgroundImage: `url("/starting6.jpg")`,

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
                Complete Starting Motor Service at Pioneer Auto Electric
              </h1>
              <p className='text-start my-4 '><i className="bi bi-check-circle-fill me-3"></i>Detailed Diagnostics</p>
              <p className='text-start my-4'><i className=" bi bi-check-circle-fill me-3"></i>Professional Repair</p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>Replacement of Faulty Components</p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>Starting Motor Testing
              </p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>Battery and Electrical System Check</p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>High-Quality Parts and Components</p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>Prompt and Efficient Service</p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>Warranty Assurance</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starting;
