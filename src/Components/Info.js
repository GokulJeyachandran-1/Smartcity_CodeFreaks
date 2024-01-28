import React from "react";
import { useState } from 'react'
/*import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons"; */
import "../Styles/Info.css";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";



function Info() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/ticket");
  };
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        Plan smarter commutes! Update your long-distance travel plans in our app, fueled by RAG for predicting traffic. Receive pop-ups for roadblocks or event-related traffic. We suggest alternatives or early departures. Stay informed with real-time traffic alerts from camera feeds. Enjoy a user-friendly experience in Tamil or Hindi. </p>
        <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Insights
          </button>
      </div>


      
    </div>
    
  );
}

export default Info;
