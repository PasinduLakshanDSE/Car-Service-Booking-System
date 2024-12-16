import React, { useEffect } from 'react';
import WOW from 'wowjs';



function Technicians({ technicians }) {

  useEffect(() => {
    // Initializing WOW animations on component mount
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  return (


    <div className="col-lg-2 col-md-4  wow fadeInUp " data-wow-delay="0.1s">
      <div className="team-item">

        <div className="position-relative overflow-hidden">
          <img className="img-fluid" src={technicians.technicianImage} />
          <div className="team-overlay position-absolute start-0 top-0 w-100 h-100 ">
            <a className=" btn-custom2 btn-square mx-1" href={technicians.facebookLink}><i className="fab fa-facebook-f"></i></a>
            {/*<a className="btn-custom2 btn-square mx-1" href={technicians.twitterLink}><i className="fab fa-twitter"></i></a>
            <a className="btn-custom2 btn-square mx-1" href={technicians.instagramLink}><i className="fab fa-instagram"></i></a>*/}
            <a className=" btn-custom2 btn-square mx-1" href={`http://localhost:5000/${technicians.portfolio}`}><i className="bi bi-person-square"></i></a>
          </div>
        </div>



        <div className="bg-light text-center p-4">
          <h5 className="fw-bold mb-0">{technicians.technicianName}</h5>
          {<small>{technicians.
            serviceType}</small>}
        </div>
      </div>
    </div>










  )
}

export default Technicians