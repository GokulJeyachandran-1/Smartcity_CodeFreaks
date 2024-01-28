import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Smart <span className="legal-siteSign">Commute</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
          Welcome to Smart Commute, your trusted online sourse for a seamless travel. Our
          mission is to enhance urban public mobility by leveraging real-time data and a <b>RAG</b> system for optimal route recommendations 
          while also providing multilingual support through integration of language translation models.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          Your privacy is paramount to us. We collect the User data, including location information and language preferences,
           is anonymized and securely stored, adhering to strict privacy policies and regulations to protect user confidentiality and data integrity.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          When using, Users must agree to comply with the terms of service, which outline acceptable use of the platform,
          disclaimer of liability, and intellectual property rights,
          ensuring fair and responsible utilization of the provided services and content.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
        The system utilizes real-time data on traffic conditions and public transportation schedules to recommend optimal routes,
         integrating multilingual support through language translation models for user convenience and accessibility.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2024 Smart Commute. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
