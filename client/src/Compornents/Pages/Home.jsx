import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import axios from "axios";
import "../Pages/css/Home.css";
import "../Pages/css/anime.css";
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap CSS is loaded
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap JS is loaded
import CountUp from 'react-countup';
import WOW from 'wowjs';
import 'animate.css'; // Ideal for simple CSS animations
import Technicians from '../Technician'; // Ensure the correct import path
import 'owl.carousel/dist/assets/owl.carousel.css'; // Import the required CSS for Owl Carousel
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel'; // Import OwlCarousel component



const Home = () => {
  const [technicians, setTechnicians] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const row1 = [
    "./about1.jpg",
    "./about2.jpg",
    "./about1.jpg",
    "./about2.jpg",
    "./about1.jpg",
    "./about2.jpg",
  ];

  const row2 = [
    "./about1.jpg",
    "./about2.jpg",
    "./about1.jpg",
    "./about2.jpg",
    "./about1.jpg",
    "./about2.jpg",
  ];

  const chunkArray = (array, chunkSize) => {
    const results = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      results.push(array.slice(i, i + chunkSize));
    }
    return results;
  };

  useEffect(() => {
    // Initializing WOW animations
    const wow = new WOW.WOW();
    wow.init();

    const fetchTechnicians = async () => {
      try {
        const { data } = await axios.get('/api/technicians/gettechnician');
        setTechnicians(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    };

    fetchTechnicians();

    return () => {
      wow.sync(); // Cleanup for WOW
    };
  }, []);

  const technicianRows = chunkArray(technicians, 6);

  return (
    <div>
      <div className="container-fluid p-1 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="/wiring.jpg" alt="Image" />
              <div className="carousel-caption d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-10 col-lg-7 text-center text-lg-start">

                      <h1 className="display-3 custom-text mb-4 pb-3 animated slideInDown " style={{ fontFamily: 'Barlow', fontWeight: 700 }}>Qualified Full Wiring Service</h1>
                      <a href="#" className="btn btn-custom py-3 px-5 animated slideInDown">Learn More<i className="fa fa-arrow-right ms-3"></i></a>
                    </div>
                    <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                      <img className="img-fluid" src="/carousel-1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="/Scanning.jpg" alt="Image" />
              <div className="carousel-caption d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-10 col-lg-7 text-center text-lg-start">

                      <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown" style={{ fontFamily: 'Barlow', fontWeight: 700 }}>Qualified Scanning Service</h1>
                      <a href="#" className="btn btn-custom py-3 px-5 animated slideInDown">Learn More<i className="fa fa-arrow-right ms-3"></i></a>
                    </div>
                    <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                      <img className="img-fluid" src="/carousel-2.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="/Alternator.jpg" alt="Image" />
              <div className="carousel-caption d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-10 col-lg-7 text-center text-lg-start">

                      <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown" style={{ fontFamily: 'Barlow', fontWeight: 700 }}>Qualified Altenator Service</h1>
                      <a href="#" className="btn btn-custom py-3 px-5 animated slideInDown">Learn More<i className="fa fa-arrow-right ms-3"></i></a>
                    </div>
                    <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                      <img className="img-fluid" src="/carousel-4.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="/Starting.jpg" alt="Image" />
              <div className="carousel-caption d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-10 col-lg-7 text-center text-lg-start">

                      <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown" style={{ fontFamily: 'Barlow', fontWeight: 700 }}>Qualified Staring Motor Service</h1>
                      <a href="#" className="btn btn-custom py-3 px-5 animated slideInDown">Learn More<i className="fa fa-arrow-right ms-3"></i></a>
                    </div>
                    <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                      <img className="img-fluid" src="/carousel-5.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="/Head.jpg" alt="Image" />
              <div className="carousel-caption d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-10 col-lg-7 text-center text-lg-start">

                      <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown" style={{ fontFamily: 'Barlow', fontWeight: 700 }}>Qualified Head Light wiring Service</h1>
                      <a href="#" className="btn btn-custom py-3 px-5 animated slideInDown">Learn More<i className="fa fa-arrow-right ms-3"></i></a>
                    </div>
                    <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                      <img className="img-fluid" src="/carousel-3.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="/Setup.jpg" alt="Image" />
              <div className="carousel-caption d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-10 col-lg-7 text-center text-lg-start">

                      <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown" style={{ fontFamily: 'Barlow', fontWeight: 700 }}>Qualified Setup and Speekers Replacement</h1>
                      <a href="#" className="btn btn-custom py-3 px-5 animated slideInDown">Learn More<i className="fa fa-arrow-right ms-3"></i></a>
                    </div>
                    <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                      <img className="img-fluid" src="/carousel-6.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>



      </div>

      {/* Service Start */}
      <div className="container-xxl py-1">
        <div className="container">
          <div className="row g-5">
            {/* Service 1 */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="d-flex py-3 px-1">
                <i className="fa fa-certificate fa-3x custom-icon-color flex-shrink-0"></i>
                <div className="ps-4">
                  <h5 className="mb-3">Quality Servicing</h5>
                  <p>We are committed to providing our customers with quality and friendly service</p>
                  <a className="text-secondary border-bottom" href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* Service 2 */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="d-flex bg-light py-3 px-1">
                <i className="fa fa-users-cog fa-3x custom-icon-color flex-shrink-0"></i>
                <div className="ps-4">
                  <h5 className="mb-3">Expert Workers</h5>
                  <p>Our Workers are dedicated to providing you with efficient,competent and fast service</p>
                  <a className="text-secondary border-bottom" href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* Service 3 */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="d-flex py-3 px-1">
                <i className="fa fa-tools fa-3x custom-icon-color flex-shrink-0"></i>
                <div className="ps-4">
                  <h5 className="mb-3">Modern Equipment</h5>
                  <p>We use high quality modern equipment for your service</p>
                  <a className="text-secondary border-bottom" href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}






      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container" style={{ textAlign: 'left' }}>
          <div className="row g-5">
            <div className="col-lg-6 pt-4" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                <img
                  className=" img-fluid w-100 h-100"
                  src="/about2.jpg"
                  style={{ objectFit: 'cover' }}
                  alt=""
                />
                <div
                  className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5 "
                  style={{ background: 'rgba(0, 0, 0, .40)' }}
                >
                  <h1 className="display-4  mb-- custom-name" style={{ fontFamily: 'Barlow' }}>
                    30 <span className="fs-2">Years</span>
                  </h1>
                  <h4 className="custom-name fs-1">Experience</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h6 className="text-color text-uppercase normal-style "  >** About Us **</h6>
              <h4 className="mb-4 head-style">
                <span className="text-color head-style normal-style font-size">Pioneer Auto Electricals</span> Is The Best Place For Your Auto Care</h4>

              <p className="mb-4">
                Welcome to Pioneer Auto Electricals,
                Your trusted destination for all your automotive electrical needs! Established in 1994, We are a dedicated team of experienced professionals committed to providing top-notch service, quality parts, and expert advice for all your vehicle’s electrical systems.
              </p>
              <div className="row g-4 mb-3 pb-3">
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: '45px', height: '45px' }}
                    >
                      <span className="fw-bold text-secondary">01</span>
                    </div>
                    <div className="ps-3">
                      <h6>Advanced Diagnostics & Repair</h6>
                      <span>Using cutting-edge tools for fast, accurate solutions to all vehicle electrical issues.</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: '45px', height: '45px' }}
                    >
                      <span className="fw-bold text-secondary">02</span>
                    </div>
                    <div className="ps-3">
                      <h6>Certified Technicians</h6>
                      <span>Our certified technicians bring expertise and experience to ensure top-quality service for every vehicle.</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: '45px', height: '45px' }}
                    >
                      <span className="fw-bold text-secondary">03</span>
                    </div>
                    <div className="ps-3">
                      <h6>Fast & Reliable Service</h6>
                      <span>We deliver quick, dependable service without compromising on quality, getting you back on the road swiftly.</span>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" className="btn btn-custom py-3 px-5">
                Read More <i className="fa fa-arrow-right ms-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About End */}


      {/* Service Type Start */}

      <div className="container-xxl service py-5 ">
        <div className="container ">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">

            <h1 className="mb-6 p-3 head-style">Explore Our Services</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4">
              <div className="nav w-100 nav-pills me-4">
                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active custom-button" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                  <i className="fa bi-ev-front-fill fa-2x me-3"></i>
                  <h4 className="m-0">Full Wiring Service</h4>
                </button>
                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 custom-button" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                  <i className="fa fa-car fa-2x me-3"></i>
                  <h4 className="m-0">Scanning Service</h4>
                </button>
                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 custom-button" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                  <i className="fa fa-cog fa-2x me-3"></i>
                  <h4 className="m-0">Altenator Service</h4>
                </button>
                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 custom-button" data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                  <i className="fa fa-car-side fa-2x me-3"></i>
                  <h4 className="m-0">Staring Motor Service</h4>
                </button>
                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 custom-button" data-bs-toggle="pill" data-bs-target="#tab-pane-5" type="button">
                  <i className="fa bi-lightbulb-fill fa-2x me-3"></i>
                  <h4 className="m-0">Head Light wiring Service</h4>
                </button>
                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0 custom-button" data-bs-toggle="pill" data-bs-target="#tab-pane-6" type="button">
                  <i className="fa bi-speaker-fill fa-2x me-3"></i>
                  <h4 className="m-0">Setup and Speekers Replacement</h4>
                </button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content w-100">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: '650px' }}>
                      <div className="position-relative h-100">
                        <img className=" img-fluid w-100 h-100" src="./Swiring.jpg" style={{ objectFit: 'cover' }} alt="Diagnostic Test" />
                      </div>
                    </div>
                    <div className="col-md-6" style={{ textAlign: 'left' }}>
                      <h3 className="mb-3 normal-style">30 Years Of Experience In Full Wiring Service</h3>
                      <p className="mb-4">Our Full Wiring Service provides comprehensive solutions for all your vehicle’s electrical wiring needs. Whether you’re dealing with issues in your existing wiring or planning a complete overhaul, our service ensures that your vehicle’s electrical system is reliable, safe, and fully functional.</p>
                      <p><i className="fa fa-check text-success me-3"></i>Comprehensive Inspection</p>
                      <p><i className="fa fa-check text-success me-3"></i>Wiring Repairs and Replacements</p>
                      <p><i className="fa fa-check text-success me-3"></i>Battery and Charging System Check</p>
                      <p><i className="fa fa-check text-success me-3"></i>Safety & Compliance
                        Custom Wiring </p>
                      <p><i className="fa fa-check text-success me-3"></i>Final Testing and Quality Check</p>
                      <a href="/" className="btn btn-custom py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-2">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: '650px' }}>
                      <div className="position-relative h-100">
                        <img className=" img-fluid w-100 h-100" src="./Sscanning.jpg" style={{ objectFit: 'cover' }} alt="Engine Servicing" />
                      </div>
                    </div>
                    <div className="col-md-6" style={{ textAlign: 'left' }}>
                      <h3 className="mb-3 normal-style">30 Years Of Experience In Scanning Service</h3>
                      <p className="mb-4">Our Vehicle Scanning Service provides a comprehensive electronic diagnosis of your vehicle's systems, ensuring all components are functioning optimally. Using state-of-the-art diagnostic tools, we connect to your car's onboard computer to retrieve data from various sensors and systems, enabling us to detect any hidden or developing issues.</p>
                      <p><i className="fa fa-check text-success me-3"></i>Full System Scan</p>
                      <p><i className="fa fa-check text-success me-3"></i>Live Data Monitoring</p>
                      <p><i className="fa fa-check text-success me-3"></i>Comprehensive Reporting</p>
                      <p><i className="fa fa-check text-success me-3"></i>Expert Consultation</p>
                      <a href="/" className="btn btn-custom py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-3">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: '650px' }}>
                      <div className="position-relative h-100">
                        <img className=" img-fluid w-100 h-100" src="./Salter.jpg" style={{ objectFit: 'cover' }} alt="Tires Replacement" />
                      </div>
                    </div>
                    <div className="col-md-6" style={{ textAlign: 'left' }}>
                      <h3 className="mb-3 normal-style">30 Years Of Experience In Altenator Service</h3>
                      <p className="mb-4">The alternator is a crucial component of your vehicle's electrical system, responsible for generating electricity to power various systems and charge the battery while the engine is running. Over time, alternators can wear out due to extensive use, leading to potential vehicle breakdowns or battery issues.</p>
                      <p><i className="fa fa-check text-success me-3"></i>Comprehensive Diagnostics</p>
                      <p><i className="fa fa-check text-success me-3"></i>Expert Repairs and Replacements</p>
                      <p><i className="fa fa-check text-success me-3"></i>Battery Check and Integration</p>
                      <p><i className="fa fa-check text-success me-3"></i>High-Quality Parts</p>
                      <p><i className="fa fa-check text-success me-3"></i>Timely Service</p>
                      <p><i className="fa fa-check text-success me-3"></i>Warranty Coverage</p>

                      <a href="/" className="btn btn-custom py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-4">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: '650px' }}>
                      <div className="position-relative h-100">
                        <img className=" img-fluid w-100 h-100" src="./Sstarting.jpg" style={{ objectFit: 'cover' }} alt="Oil Changing" />
                      </div>
                    </div>
                    <div className="col-md-6" style={{ textAlign: 'left' }}>
                      <h3 className="mb-3 normal-style">30 Years Of Experience In Staring Motor Service</h3>
                      <p className="mb-4">Our Starting Motor Service ensures that your vehicle's starting motor system is functioning flawlessly, providing you with reliable and smooth engine starts every time. We specialize in diagnosing, repairing, and replacing starting motors to ensure optimal performance of your vehicle.</p>
                      <p><i className="fa fa-check text-success me-3"></i>Detailed Diagnostics</p>
                      <p><i className="fa fa-check text-success me-3"></i>Professional Repair</p>
                      <p><i className="fa fa-check text-success me-3"></i>Replacement of Faulty Components</p>
                      <p><i className="fa fa-check text-success me-3"></i>Starting Motor Testing</p>
                      <p><i className="fa fa-check text-success me-3"></i>Battery and Electrical System Check</p>
                      <p><i className="fa fa-check text-success me-3"></i>High-Quality Parts and Components</p>
                      <p><i className="fa fa-check text-success me-3"></i>Prompt and Efficient Service</p>
                      <p><i className="fa fa-check text-success me-3"></i>Warranty Assurance</p>
                      <a href="/" className="btn btn-custom py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-5">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: '650px' }}>
                      <div className="position-relative h-100">
                        <img className=" img-fluid w-100 h-100" src="./Shead.jpg" style={{ objectFit: 'cover' }} alt="Engine Servicing" />
                      </div>
                    </div>
                    <div className="col-md-6" style={{ textAlign: 'left' }}>
                      <h3 className="mb-3 normal-style">30 Years Of Experience In Head Light wiring Service</h3>
                      <p className="mb-4">Our Head Light Wiring Service ensures that your vehicle’s headlight system is properly installed and functioning optimally. We specialize in diagnosing, repairing, and upgrading headlight wiring to enhance your driving visibility and safety.</p>
                      <p><i className="fa fa-check text-success me-3"></i>Comprehensive Wiring Inspection</p>
                      <p><i className="fa fa-check text-success me-3"></i>Expert Repairs and Replacements</p>
                      <p><i className="fa fa-check text-success me-3"></i>High-Quality Wiring Components</p>
                      <p><i className="fa fa-check text-success me-3"></i>Upgrades for Enhanced Visibility</p>
                      <p><i className="fa fa-check text-success me-3"></i>Alignment and Calibration</p>
                      <p><i className="fa fa-check text-success me-3"></i>Electrical System Integration</p>
                      <p><i className="fa fa-check text-success me-3"></i>Safety and Compliance Checks</p>
                      <p><i className="fa fa-check text-success me-3"></i>Prompt and Professional Service</p>
                      <p><i className="fa fa-check text-success me-3"></i>Warranty on Parts and Labor</p>
                      <a href="/" className="btn btn-custom py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-6">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: '650px' }}>
                      <div className="position-relative h-100">
                        <img className=" img-fluid w-100 h-100" src="./Sspeaker.jpg" style={{ objectFit: 'cover' }} alt="Engine Servicing" />
                      </div>
                    </div>
                    <div className="col-md-6" style={{ textAlign: 'left' }}>
                      <h3 className="mb-3 normal-style">30 Years Of Experience In Setup and Speekers Replacement</h3>
                      <p className="mb-4">Our Speaker Setup and Replacement Service focuses on enhancing your vehicle's audio experience by installing, upgrading, and replacing speakers. Whether you're looking to improve sound quality, add new features, or replace faulty components, we provide professional and efficient solutions.</p>
                      <p><i className="fa fa-check text-success me-3"></i>Professional Installation</p>
                      <p><i className="fa fa-check text-success me-3"></i>High-Quality Speaker Options</p>
                      <p><i className="fa fa-check text-success me-3"></i>Custom Audio Solutions</p>
                      <p><i className="fa fa-check text-success me-3"></i>Advanced Sound Calibration</p>
                      <p><i className="fa fa-check text-success me-3"></i>Seamless Integration</p>
                      <p><i className="fa fa-check text-success me-3"></i>Fault Diagnosis and Replacement</p>
                      <p><i className="fa fa-check text-success me-3"></i>Soundproofing and Acoustic Enhancements</p>
                      <p><i className="fa fa-check text-success me-3"></i>Comprehensive Testing</p>
                      <p><i className="fa fa-check text-success me-3"></i>Warranty on Parts and Labor</p>
                      <a href="/" className="btn btn-custom py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Service Type  End */}


      {/* Explain  Start*/}
      <div
        className="container-fluid fact bg-dark my-5 py-5"
        style={{
          backgroundImage: `url('/about3.jpg')`,


          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
              <i className="fa fa-check fa-2x text-white mb-3"></i>
              <h2 className="text-white mb-2">
                <CountUp start={0} end={100} duration={2.5} formattingFn={(value) => `${value}%`} />
              </h2>
              <p className="text-white mb-0">Vehicle Safety Guarantee</p>
            </div>
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
              <i className="fa fa-users-cog fa-2x text-white mb-3"></i>
              <h2 className="text-white mb-2">
                <CountUp start={0} end={30} duration={2.5} />
              </h2>
              <p className="text-white mb-0">Expert Technicians</p>
            </div>
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
              <i className="fa fa-users fa-2x text-white mb-3"></i>
              <h2 className="text-white mb-2">
                <CountUp start={0} end={1000} duration={2.5} />
              </h2>
              <p className="text-white mb-0">Satisfied Clients</p>
            </div>
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
              <i className="fa fa-car fa-2x text-white mb-3"></i>
              <h2 className="text-white mb-2">
                <CountUp start={0} end={1000} duration={2.5} />
              </h2>
              <p className="text-white mb-0">Complete Projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* Explain  End*/}


      {/* Technician  Start*/}
      <div className="container-xxl py-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="text-color text-uppercase normal-style">** Our Technicians **</h6>
          <h1 className="mb-5 head-style">Our Expert Technicians</h1>
        </div>

        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error fetching technicians</h1>
        ) : (
          technicianRows.map((row, index) => (
            <div className="row g-4" key={index}>
              {row.map((technician) => (
                <Technicians key={technician.id} technicians={technician} /> // Ensure each technician has a unique ID
              ))}
            </div>
          ))
        )}
      </div>

      {/* Technician End*/}




      {/*Car Type Start */}
      <div class="wrapper">
        <div className="itemLeft item1" >

          <img className="fit-image"

            src="/Clogo2.jpg"

            alt="Client"
          />
        </div>
        <div class="itemLeft item2"> <img className="fit-image"

          src="/Clogo3.jpg"

          alt="Client"
        /></div>
        <div class="itemLeft item3"> <img className="fit-image"

          src="/Clogo4.jpg"

          alt="Client"
        /></div>
        <div class="itemLeft item4"> <img className="fit-image"

          src="/Clogo5.jpg"

          alt="Client"
        /></div>
        <div class="itemLeft item5"> <img className="fit-image"

          src="/Clogo6.jpg"

          alt="Client"
        /></div>
        <div class="itemLeft item6"> <img className="fit-image"

          src="/Clogo7.jpg"

          alt="Client"
        /></div>
        <div class="itemLeft item7"> <img className="fit-image"

          src="/Clogo8.jpg"

          alt="Client"
        /></div>
        <div class="itemLeft item8"> <img className="fit-image"

          src="/Clogo9.jpg"

          alt="Client"
        /></div>



      </div>

      <div class="wrapper">
        <div class="itemRight item1"> <img className="fit-image"

          src="/Clogo10.jpg"

          alt="Client"
        /></div>
        <div class="itemRight item2"> <img className="fit-image"

          src="/Clogo11.jpg"

          alt="Client"
        /></div>
        <div class="itemRight item3"> <img className="fit-image"

          src="/Clogo17.jpg"

          alt="Client"
        /></div>
        <div class="itemRight item4"> <img className="fit-image"

          src="/Clogo1.jpg"

          alt="Client"
        /></div>
        <div class="itemRight item5"> <img className="fit-image"

          src="/Clogo13.jpg"

          alt="Client"
        /></div>
        <div class="itemRight item6"> <img className="fit-image"

          src="/Clogo14.jpg"

          alt="Client"
        /></div>
        <div class="itemRight item7"> <img className="fit-image"

          src="/Clogo15.jpg"

          alt="Client"
        /></div>
        <div class="itemRight item8"> <img className="fit-image"

          src="/Clogo16.jpg"

          alt="Client"
        /></div>

      </div>
      {/*Car Type End*/}



    </div>





  );

};




export default Home;
