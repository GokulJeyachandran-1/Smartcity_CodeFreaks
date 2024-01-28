import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/TicketForm.css";
import { ToastContainer, toast } from "react-toastify";

function TicketForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [sourceName, setSourceName] = useState("");
  const [destinationName, setDestinationName] = useState("");
  const [travellingTime, setTravellingTime] = useState("");
  const [travellingDate, setTravellingDate] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!sourceName.trim()) {
      errors.sourceName = "Source name is required";
    } else if (sourceName.trim().length < 8) {
      errors.sourceName = "Source name must be at least 8 characters";
    }

    if (!destinationName.trim()) {
      errors.destinationName = "Destination name is required";
    } else if (destinationName.trim().length > 100) {
      errors.destinationName = "Destination name must be less than 100";
    }

    if (!travellingTime) {
      errors.travellingTime = "Travelling time is required";
    } else {
      const selectedTime = new Date(travellingTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.travellingTime = "Please select a future booking time";
      }
    }

    if (!travellingDate) {
        errors.travellingDate = "Travelling date is required";
      } else {
        const selectedDate = new Date(travellingDate).getDate();
        const currentDate = new Date().getDate();
        if (selectedDate >= currentDate) {
          errors.travellingDate = "Please select a future booking time";
        }
      }

    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setSourceName("");
    setDestinationName("");
    setTravellingDate("");
    setTravellingTime("");
    setPreferredMode("default");
    setFormErrors({});

    toast.success("Appointment Scheduled !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Smart <span className="legal-siteSign">Commute</span>
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Ticket Booking Form</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
           Source Name:
            <input
              type="text"
              value={sourceName}
              onChange={(e) => setSourceName(e.target.value)}
              required
            />
            {formErrors.sourceName && <p className="error-message">{formErrors.sourceName}</p>}
          </label>

          <br />
          <label>
            Destination Name:
            <input
              type="text"
              value={destinationName}
              onChange={(e) => setDestinationName(e.target.value)}
              required
            />
            {formErrors.destinationName && <p className="error-message">{formErrors.destinationName}</p>}
          </label>

          <br />
          <label>
            Travelling Time:
            <select
              value={travellingTime}
              onChange={(e) => setTravellingTime(e.target.value)}
              required
            >
              <option>Select</option>
              <option>Morning 6 - 12</option>
              <option>Afternoon 12 - 4</option>
              <option>Evening 4 - 6</option>
              <option>Night 6 - 12</option>
              
            </select>
            {formErrors.travellingTime && <p className="error-message">{formErrors.travellingTime}</p>}
          </label>

          <br />
          <label>
            Travelling Date:
            <input
              type="datetime-local"
              value={travellingDate}
              onChange={(e) => setTravellingDate(e.target.value)}
              required
            />
            {formErrors.travellingDate && <p className="error-message">{formErrors.travellingDate}</p>}
          </label>

          <br />
          <label>
            Preferred Mode:
            <select
              value={preferredMode}
              onChange={(e) => setPreferredMode(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="voice">Bus</option>
              <option value="video">Cab</option>
              <option value="video">Auto</option>
            </select>
            {formErrors.preferredMode && <p className="error-message">{formErrors.preferredMode}</p>}
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            Confirm Booking
          </button>

          <p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>Booking details has been sent to the users phone number via SMS.</p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2016-2024 TicketBooking. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default TicketForm;