import React, { useState, useEffect } from 'react';
import './Services.css'; // Assuming you're using some custom styles here
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
      {/* Header Section */}
      <div
        className="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: 'url(/wiring.jpg)', backgroundSize: 'cover' }}
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

      {/* Description Section */}
      <div className='container-fluid mb-5 p-0'>
        <div className="container-fluid py-5">
          <h4 className="mb-4 head-style">
            <span className="text-color head-style normal-style font-size">Pioneer Auto Electricals</span> Is The Best Place For Your Auto Care
          </h4>
          <p className='text-start mx-5'>
            At Pioneer Auto Electric, our Full Wiring Service is tailored to ensure that your vehicle's electrical system operates at peak performance and is free from any faults or hazards. This service covers all aspects of your car's wiring, ranging from detailed diagnostics and repairs to system enhancements and upgrades. We understand that the electrical system is the backbone of modern vehicles, responsible for powering everything from lights and sensors to complex control modules and safety systems.
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
                  backgroundImage: `url("/Full4.jpg")`,
                  //backgroundSize: 'cover', 
                  //backgroundPosition: 'center',
                  //height: '600px' // Adjust as needed
                }}>
                </div>

                {/* Second image block */}
                <div className="col-md-6 p-0 ">
                  <div className="row" style={{ height: '100%' }}>
                    <div className="col-12 p-0 service-img" style={{
                      backgroundColor: 'green',
                      backgroundImage: `url("/Full2.jpg")`,
                      //backgroundSize: 'cover', 
                      // backgroundPosition: 'center',
                      //height: '200px' // Adjust as needed
                    }}>
                    </div>
                    <div className="col-12 p-0 service-img" style={{
                      backgroundColor: 'blue',
                      backgroundImage: `url("/Full5.jpg")`,
                      //backgroundSize: 'cover', 
                      //backgroundPosition: 'center',
                      //height: '200px' // Adjust as needed
                    }}>
                    </div>
                    <div className="col-12 p-0 service-img" style={{
                      backgroundColor: 'orange',
                      backgroundImage: `url("/Full7.jpg")`,
                      //backgroundSize: 'cover', 
                      //backgroundPosition: 'center',
                      //height: '200px' // Adjust as needed
                    }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6 p-0 des "

            // Adjust as needed
            >
              <h1 className="Snormal-style mx-6 px-4 my-3">
                Complete Wiring Solutions at Pioneer Auto Electric
              </h1>
              <p><i className="bi bi-check-circle-fill me-3"></i>Comprehensive Inspection</p>
              <p><i className=" bi bi-check-circle-fill me-3"></i>Wiring Repairs and Replacements</p>
              <p><i className="bi bi-check-circle-fill me-3"></i>Battery and Charging System Check</p>
              <p><i className="bi bi-check-circle-fill me-3"></i>Safety & Compliance
                Custom Wiring </p>
              <p><i className="bi bi-check-circle-fill me-3"></i>Final Testing and Quality Check</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Full;
