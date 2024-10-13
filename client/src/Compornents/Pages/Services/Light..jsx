import React, { useState, useEffect } from 'react';
import './Services.css'

import { Link } from "react-router-dom";

const Light = () => {
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
        style={{ backgroundImage: 'url(/light7.jpg)' }} // Update path as needed
      >
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown normal-style">Head Light wiring Service</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <Link to="/" className="nav-item nav-link normal-style" style={{ color: 'white' }}>Home</Link>
                </li>
                <li className="breadcrumb-item text-white active normal-style" aria-current="page">
                  Head Light wiring Service
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
            At Pioneer Auto Electricals, our Headlight Wiring Service ensures your vehicle's headlights function at their best, promoting safety and visibility on the road. The headlight wiring system plays a crucial role in delivering power to your headlights, enabling them to work efficiently in all conditions. However, over time, the wiring can deteriorate due to factors like wear, corrosion, and exposure to harsh environmental conditions. This can result in issues such as flickering lights, reduced brightness, or even complete headlight failure, which can compromise safety. Our service addresses these problems through thorough inspection, repair, or replacement of any damaged wiring, ensuring your headlights perform reliably and provide optimal illumination.
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
                  backgroundImage: `url("/light4.jpg")`,

                }}>
                </div>

                {/* Second image block */}
                <div className="col-md-6 p-0 ">
                  <div className="row" style={{ height: '100%' }}>
                    <div className="col-12 p-0 service-img" style={{
                      backgroundColor: 'green',
                      backgroundImage: `url("/light7.jpg")`,

                    }}>
                    </div>
                    <div className="col-12 p-0 service-img" style={{
                      backgroundColor: 'blue',
                      backgroundImage: `url("/light8.jpg")`,

                    }}>
                    </div>
                    <div className="col-12 p-0 service-img" style={{
                      backgroundColor: 'orange',
                      backgroundImage: `url("/light2.jpg")`,

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
                Complete Head Light Wiring Service at Pioneer Auto Electric
              </h1>
              <p className='text-start my-4 '><i className="bi bi-check-circle-fill me-3"></i>Comprehensive Wiring Inspection</p>
              <p className='text-start my-4'><i className=" bi bi-check-circle-fill me-3"></i>Expert Repairs and Replacements</p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>High-Quality Wiring Components</p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>Upgrades for Enhanced Visibility
              </p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>Alignment and Calibration</p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>Electrical System Integration</p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>Safety and Compliance Checks</p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>Prompt and Professional Service</p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>Warranty on Parts and Labor</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Light;
