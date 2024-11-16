import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
import "./css/Nav.css";
import WOW from 'wowjs';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate for routing

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current) return; // Check if navbarRef exists
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
    new WOW.WOW().init();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLoginClick = () => {
    navigate('/Log'); // Redirect to login page
  };

  const handleBookClick = () => {
    navigate('/LoginForm'); // Redirect to login page
  };

  return (
    <div>
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

      <nav ref={navbarRef} className="navbar navbar-expand-lg navbar-light shadow p-0 custom-nav-bg">
        <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <img src="/logo.jpg" alt="CarServ Logo" style={{ width: '60px', marginRight: '30px' }} />
          <h4 className="Name mb-2 mt-3" style={{ fontSize: '1.4rem', fontFamily: 'Arial, sans-serif' }}>PIONEER AUTO ELECTRICALS</h4>
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link" style={navStyle}>Home</Link>
            <Link to="/about" className="nav-item nav-link" style={navStyle}>About</Link>

            <div className="nav-item dropdown" onClick={toggleDropdown} aria-expanded={dropdownOpen}>
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

          <button className="btn btn-lg btn-custom " onClick={handleBookClick} style={{ padding: '15px 22px', fontSize: '1.2rem' }}>
            Book <i className="fa fa-arrow-right ms-3"></i>
          </button>

          <button className="btn btn-lg mx-3" onClick={handleLoginClick}>
            <i className="bi bi-person-fill" style={{ fontSize: '2rem' }}></i>
          </button>
        </div>
      </nav>
    </div>
  );
};

const navStyle = {
  fontSize: '1.0rem',
  fontWeight: 'bold',
  fontFamily: 'Arial, sans-serif',
  fontStretch: 'expanded'
};

export default NavBar;
