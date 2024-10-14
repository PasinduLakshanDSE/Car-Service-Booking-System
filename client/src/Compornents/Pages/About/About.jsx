import React, { useState, useEffect } from 'react';
//import '../css/About.css';
import './About.css'
import { Link } from "react-router-dom";

const About = () => {
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
        style={{ backgroundImage: 'url(/Habout2.jpg)' }} // Update path as needed
      >
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown normal-style">ABOUT US</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <Link to="/" className="nav-item nav-link normal-style" style={{ color: 'white' }}>Home</Link>
                </li>
                <li className="breadcrumb-item text-white active normal-style" aria-current="page">
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>




      <div className="container mt-5">
      

      <div className="row owner-section mb-5 bg-dark position-relative" style={{ backgroundImage: `url('./ownerbg2.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
  {/* Dark transparent overlay */}
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.750)',  // Adjust opacity (0.5 is 50% transparent)
    zIndex: 1,
  }}></div>

  <div className="col-md-4 text-center" style={{ position: 'relative', zIndex: 2 }}>
    <img src="owner.jpeg" alt="Owner Image" className="img-fluid " />
  </div>
  <div className="col-md-8 d-flex align-items-center" style={{ position: 'relative', zIndex: 2 }}>
    <p className='ownertext text-start '>
      Mr. S.M. Keerthijeewa is the visionary behind Pioneer Auto Electric Products & Services, leading the company 
      with a passion for innovation and excellence in the automotive industry. With years of experience, Mr. Keerthijeewa 
      has built a reputation for delivering top-notch services, from headlight wiring to full wiring systems, setting a 
      high standard in auto electrical solutions. His dedication to customer satisfaction and commitment to using 
      cutting-edge technology have made Pioneer Auto Electric a trusted name in the field, serving clients with expertise, 
      reliability, and integrity.
    </p>
  </div>
</div>

      <div className="row vision-mission-section mb-5">
        <div className="col-md-6">
          <h2>VISION</h2>
          <p>
            As the obvious choice and the most trusted automobile services company in Sri Lanka, our vision is to bring that pride 
            to the global market.
          </p>
        </div>
        <div className="col-md-6">
          <h2>MISSION</h2>
          <p>
            To achieve unparalleled recognition as the premium auto care service provider by objectifying trust, convenience, and uniqueness, and guiding our work force as a team striving to "continue the obvious choice."
          </p>
        </div>
      </div>

      <div className="row goal-section mb-5">
        <div className="col-md-8">
          <h2>Goals & Values</h2>
          <ul className="square-bullets">
            <li>A focused approach on company objectives led by set KPI’s and proper monitoring processes through dashboards. 
                (Increase revenue and manage cost.)</li>
            <li>To be the most innovative company in the Automobile Industry with the use of new technology and new ideas which 
                will make Pioneer a differentiated brand.</li>
            <li>Key emphasis on customer satisfaction and mapping out all processes that define a customer's journey to develop 
                the best customer experience throughout the process.</li>
            <li>Increase employee satisfaction through motivational programs and create loyalty and a sense of belonging to ensure 
                that both the company and employee mutually benefit.</li>
          </ul>
        </div>
        <div className="col-md-4 text-center">
          <img src="goals.jpg" alt="Goal Image" className="img-fluid" />
        </div>
      </div>

      <section className="event-section mb-5">
        <h2 className="text-center mb-4">EVENTS</h2>
        <div className="row event-gallery">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div className="col-6 col-md-3 mb-4 event-item" key={item}>
              <img src={`event${item}.jpeg`} alt={`Event Image${item}`} className="img-fluid rounded" />
            </div>
          ))}
        </div>
      </section>
    </div>



    </div>
  );
};

export default About;
