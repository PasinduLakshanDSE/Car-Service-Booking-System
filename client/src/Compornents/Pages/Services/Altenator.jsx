import React, { useState, useEffect } from 'react';
import './Services.css'

import { Link } from "react-router-dom";

const Altenator = () => {
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
            <h1 className="display-3 text-white mb-3 animated slideInDown normal-style">Altenator Service</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <Link to="/" className="nav-item nav-link normal-style" style={{ color: 'white' }}>Home</Link>
                </li>
                <li className="breadcrumb-item text-white active normal-style" aria-current="page">
                  Altenator Service
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
            At Pioneer Auto Electricals, our Alternator Service is essential for maintaining the efficiency and reliability of your vehicle's electrical system. The alternator plays a vital role by converting mechanical energy from the engine into electrical energy, which is used to charge the battery and power various electrical components, such as headlights, radios, and air conditioning. When the engine is running, the alternator ensures that these systems receive a consistent supply of electricity, preventing battery drain and potential electrical failures. Our comprehensive service includes inspection, testing, repairs, and replacements, all aimed at ensuring your alternator operates at peak performance, ultimately enhancing your vehicle's overall functionality and reliability on the road.
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
                  backgroundImage: `url("/Alter3.jpg")`,

                }}>
                </div>

                {/* Second image block */}
                <div className="col-md-6 p-0 ">
                  <div className="row" style={{ height: '100%' }}>
                    <div className="col-12 p-0 service-img" style={{
                      backgroundColor: 'green',
                      backgroundImage: `url("/Alter1.jpg")`,

                    }}>
                    </div>
                    <div className="col-12 p-0 service-img" style={{
                      backgroundColor: 'blue',
                      backgroundImage: `url("/Alter2.jpg")`,

                    }}>
                    </div>
                    <div className="col-12 p-0 service-img" style={{
                      backgroundColor: 'orange',
                      backgroundImage: `url("/Alter4.jpg")`,

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
                Complete Altenator Service at Pioneer Auto Electric
              </h1>
              <p className='text-start my-4 '><i className="bi bi-check-circle-fill me-3"></i>Comprehensive Diagnostics</p>
              <p className='text-start my-4'><i className=" bi bi-check-circle-fill me-3"></i>Expert Repairs and Replacements</p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>Battery Check and Integration</p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>High-Quality Parts
              </p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>Timely Service</p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>Warranty Coverage</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Altenator;
