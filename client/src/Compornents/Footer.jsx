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
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Address</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>Vehera junction,281 Colombo Road, Kurunegala
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>+94 777 442637
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>info@example.com
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
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Opening Hours</h4>
            <h6 className="text-light">Monday - Friday:</h6>
            <p className="mb-4">08.30 AM - 09.00 PM</p>
            
          </div>

          {/* Services Section */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Services</h4>
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

          {/* Newsletter Section */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
              <input
                className="form-control border-0 w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom Section */}
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="https://freewebsitecode.com">Your Site Name</a>, All Right Reserved.
              <br />
              Designed By <a className="border-bottom" href="https://freewebsitecode.com">Free Website Code</a>
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
