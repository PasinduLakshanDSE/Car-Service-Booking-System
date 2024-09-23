import React, { useEffect, useRef } from 'react';  // Import useRef for GSAP
import { Link } from "react-router-dom";
import "./Nav.css"; // Adjust the path based on your project structure
import WOW from 'wowjs';
import 'animate.css';
//import AOS from 'aos';//Best for scroll-triggered animations.
//import 'aos/dist/aos.css';
//import { gsap } from 'gsap';//Great for complex, fully customizable JavaScript animations.
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap CSS is loaded
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap JS is loaded
//import "./anime2.css"



const NavBar = () => {
  // Reference for GSAP animation
  const navbarRef = useRef(null);
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) { // Change 50 to the scroll distance you prefer
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

  useEffect(() => {
    // Initialize WOW.js animations
    new WOW.WOW().init();

    /*// Initialize AOS for scroll animations
    AOS.init({ duration: 1000 });

    // GSAP animation for the navbar
    gsap.from(navbarRef.current, {
      duration: 1.5,
      //y: -100,
      opacity: 100,
      ease: "power3.out"
    });*/
  }, []); // The empty dependency array ensures this only runs once when the component mounts

  return (
    <div>
      {/* Top Bar Start */}
      <div className="container-fluid bg-light p-0 top-bar">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-map-marker-alt custom-color me-2"></small>
              <small>Vehera junction,281 Colombo Road, Kurunegala</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
              <small className="far fa-clock custom-color me-2"></small>
              <small>Mon - Fri : 08.30 AM - 09.00 PM</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-phone-alt custom-color me-2"></small>
              <small>+94 777 442637</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <a className="btn btn-sm-square bg-white custom-color me-1" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-sm-square bg-white custom-color me-1" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-sm-square bg-white custom-color me-1" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="btn btn-sm-square bg-white custom-color me-0" href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Top Bar End */}

      {/* Navbar Start */}
      <nav ref={navbarRef} className="navbar  navbar-expand-lg navbar-light shadow  p-0 custom-nav-bg">
        <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <img src="/logo.jpg" alt="CarServ Logo" style={{ width: '70px', marginRight: '30px' }} />
          <h4 className='Name mb-2 mt-3 '>PIONEER AUTO ELECTRICALS</h4>
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link">Home</Link>
            <Link to="/about" className="nav-item nav-link">About</Link>
            <Link to="/services" className="nav-item nav-link">Services</Link>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu fade-up m-0">
                <Link to="/booking" className="dropdown-item">Booking</Link>
                <Link to="/team" className="dropdown-item">Technicians</Link>
                <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                <Link to="/404" className="dropdown-item">404 Page</Link>
              </div>
            </div>
            <Link to="/contact" className="nav-item nav-link">Contact</Link>
          </div>
          <a href="#" className="btn btn-custom py-4 px-lg-5 d-none d-lg-block">Book<i className="fa fa-arrow-right ms-3"></i></a>
        </div>
      </nav>
      {/* Navbar End */}
    </div>
  );
};

export default NavBar;
