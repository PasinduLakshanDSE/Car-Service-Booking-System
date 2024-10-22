import React, { useEffect, useRef, useState } from 'react';  // Import useRef for GSAP
import { Link } from "react-router-dom";
import "./css/Nav.css"; // Adjust the path based on your project structure
import WOW from 'wowjs';
import 'animate.css';
import AOS from 'aos'; // Best for scroll-triggered animations.
import 'aos/dist/aos.css';
import { gsap } from 'gsap'; // Great for complex, fully customizable JavaScript animations.
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap CSS is loaded
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap JS is loaded

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Reference for GSAP animation
  const navbarRef = useRef(null);

  useEffect(() => {
    // Add scroll event listener
    const handleScroll = () => {
      const navbar = navbarRef.current;

      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        gsap.to(navbar, {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: "power3.out",
        });
      } else {
        navbar.classList.remove('scrolled');
        gsap.to(navbar, {
          duration: 1,
          y: -100,
          opacity: 0,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initialize WOW.js animations
    new WOW.WOW().init();

    return () => {
      // Clean up event listener on unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle login button click
  const handleLoginClick = () => {
    alert("Login button clicked!");
    // Here, you can trigger a modal or redirect to a login API
  };

  return (
    <div>
      {/* Top Bar Start */}
      <div className="container-fluid bg-light p-0 top-bar">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-map-marker-alt custom-color me-2"></small>
              <small>Vehera junction, 281 Colombo Road, Kurunegala</small>
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
      <nav ref={navbarRef} className="navbar navbar-expand-lg navbar-light shadow p-0 custom-nav-bg">
        <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <img src="/logo.jpg" alt="CarServ Logo" style={{ width: '60px', marginRight: '30px' }} />
          <h4 className='Name mb-2 mt-3 ' style={{ fontSize: '1.4rem', fontFamily: 'Arial, sans-serif' }}>PIONEER AUTO ELECTRICALS</h4>
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link" style={navStyle}>Home</Link>
            <Link to="/about" className="nav-item nav-link" style={navStyle}>About</Link>

            <div className="nav-item dropdown" onClick={toggleDropdown}>
              <span className="nav-link dropdown-toggle" role="button" style={navStyle}>Services</span>
              <div className={`dropdown-menu fade-up m-0 ${dropdownOpen ? 'show' : ''}`}>
                <Link to="/FullWiring" className="dropdown-item hover" style={navStyle}>Full Wiring Service</Link>
                <Link to="/Scanning" className="dropdown-item hover" style={navStyle}>Scanning Service</Link>
                <Link to="/Altenator" className="dropdown-item hover" style={navStyle}>Altenator Service</Link>
                <Link to="/Starting" className="dropdown-item hover" style={navStyle}>Starting Motor Service</Link>
                <Link to="/Light" className="dropdown-item hover" style={navStyle}>Head Light Wiring Service</Link>
                <Link to="/Setup" className="dropdown-item hover" style={navStyle}>Setup and Speakers Replacement</Link>
              </div>
            </div>
            <Link to="/Products" className="nav-item nav-link" style={navStyle}>Products</Link>
            <Link to="/contact" className="nav-item nav-link" style={navStyle}>Contact</Link>
            
          </div>
          <a href="#" className="btn btn-custom  d-none d-lg-block"  style={{  padding: '20px 20px', fontSize: '1.2rem' }}>
            Book <i className="fa fa-arrow-right ms-3"></i>
          </a>
           {/* Login Button */}
           <button className="btn btn-sm btn-primary mx-3" onClick={handleLoginClick}>
              Login
            </button>
        </div>
      </nav>
      {/* Navbar End */}
    </div>
  );
};

// Reusable style object
const navStyle = {
  fontSize: '1.0rem',
  fontWeight: 'bold',
  fontFamily: 'Arial, sans-serif',
  fontStretch: 'expanded'
};

export default NavBar;
