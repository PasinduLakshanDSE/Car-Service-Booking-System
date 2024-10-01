import React from 'react';
import "./css/footer.css"

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s" style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/footer1.jpg') center center no-repeat`,
      backgroundSize: 'cover',
    }}>
      <div className="container py-5">
        <div className="row g-5">
          {/* Address Section */}
          <div className="col-lg-4 col-md-4 text-start">
            <h4 className=" mb-4 text-light text-start normal-style">Address</h4>
            <p className="mb-2 ">
              <i className="fa fa-map-marker-alt me-3 "></i>Vehera junction,281 Colombo Road, Kurunegala
            </p>
            <p className="mb-2 ">
              <i className="fa fa-phone-alt me-3 "></i>+94 777 442637
            </p>
            <p className="mb-2 ">
              <i className="fa fa-envelope me-3 "></i>info@example.com
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="fab fa-youtube"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Opening Hours Section */}
          <div className="col-lg-4 col-md-4 hours">
            <h4 className="text-light mb-4 text-start normal-style">Opening Hours</h4>
            <h6 className="text-light text-start">Monday - Friday:</h6>
            <p className="mb-4 text-start">08.30 AM - 09.00 PM</p>

          </div>

          {/* Services Section */}
          <div className="col-lg-4 col-md-4 service">
            <h4 className="text-light mb-4 text-start normal-style">Services</h4>
            <a className="btn btn-link" href="#">
              Full Wiring Service
            </a>
            <a className="btn btn-link" href="#">
              Scanning Service
            </a>
            <a className="btn btn-link" href="#">
              Altenator Service
            </a>
            <a className="btn btn-link" href="#">
              Staring Motor Service
            </a>
            <a className="btn btn-link" href="#">
              Head Light wiring Service
            </a>
            <a className="btn btn-link" href="#">
              Setup and Speekers Replacement
            </a>
          </div>

        </div>
      </div>
      {/* Footer Bottom Section */}
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p> All Right Reserved.

                Designed By Pasindu Lakshan</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="#">Home</a>
                <a href="#">Cookies</a>
                <a href="#">Help</a>
                <a href="#">FAQs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
