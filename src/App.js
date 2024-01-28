import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Ticket from "./Pages/Ticket";
import Login from "./Components/login";
import MapEmbed from "./Components/iframe";
function App() {
  return (
    <div className="App">
      <Router basename="/Health-Plus">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/legal" element={<Legal />} />
          <Route path="/map" element={<MapEmbed/>} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
