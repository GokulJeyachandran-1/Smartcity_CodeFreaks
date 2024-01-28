import React from "react";
import { useState } from 'react'
import Doctor from "../Assets/issue.jpg";
import "../Styles/About.css";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/ticket");
  };
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>Public Transport Scheduling</span>
        </h3>
        <p className="about-description">
        Plan your travels hassle-free with Traffic Scheduling! We analyze past data and your preferences using RAG to create the perfect schedule. Receive personalized alerts for your favorite routes. Thanks to LLM, enjoy a multilingual platform for a diverse experience. Your smooth commute, our priority! </p>
        <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Plan My Commute
          </button>
        
      </div>
    </div>
  );
}

export default About;
