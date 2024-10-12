import React, { useState, useEffect } from 'react';
import './Services.css'

import { Link } from "react-router-dom";

const Setup = () => {
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
            <h1 className="display-3 text-white mb-3 animated slideInDown normal-style">Setup and Speekers Replacement</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <Link to="/" className="nav-item nav-link normal-style" style={{ color: 'white' }}>Home</Link>
                </li>
                <li className="breadcrumb-item text-white active normal-style" aria-current="page">
                  Setup and Speekers Replacement
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
            At Pioneer Auto Electricals, our Setup and Speaker Replacement Service is focused on improving your vehicle’s audio system by either upgrading or replacing faulty speakers to deliver optimal sound quality. If you're looking to enhance your current sound system or need to replace damaged speakers, our skilled technicians are here to help you achieve a high-quality audio experience. We provide custom solutions tailored to your preferences, selecting and installing the right components such as speakers, amplifiers, or subwoofers to match your needs. Our service ensures clear, crisp sound with improved bass and treble, transforming your in-car listening experience into something truly enjoyable.
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
                  backgroundImage: `url("/setup4.jpg")`,

                }}>
                </div>

                {/* Second image block */}
                <div className="col-md-6 p-0 ">
                  <div className="row" style={{ height: '100%' }}>
                    <div className="col-12 p-0 service-img" style={{
                      backgroundColor: 'green',
                      backgroundImage: `url("/setup2.jpg")`,

                    }}>
                    </div>
                    <div className="col-12 p-0 service-img" style={{
                      backgroundColor: 'blue',
                      backgroundImage: `url("/setup5.jpg")`,

                    }}>
                    </div>
                    <div className="col-12 p-0 service-img" style={{
                      backgroundColor: 'orange',
                      backgroundImage: `url("/setup6.jpg")`,

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
                Complete Setup and Speekers Replacement at Pioneer Auto Electric
              </h1>
              <p className='text-start my-4 '><i className="bi bi-check-circle-fill me-3"></i>Professional Installation</p>
              <p className='text-start my-4'><i className=" bi bi-check-circle-fill me-3"></i>High-Quality Speaker Options</p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>Custom Audio Solutions</p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>Advanced Sound Calibration
              </p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>Seamless Integration</p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>Fault Diagnosis and Replacement</p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>Soundproofing and Acoustic Enhancements</p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>Comprehensive Testing</p>
              <p className='text-start my-4'><i className="bi bi-check-circle-fill me-3"></i>Warranty on Parts and Labor</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup;
