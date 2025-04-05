import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "./assets/pexels-jplenio-1103970.jpg"; // Background image
import logo from "./assets/Artboard 1.4.png"; // Logo image
import "./App.css"; // Importing the basic CSS file

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Dark Overlay */}
        <div className="overlay"></div>
        {/* Header */}
        <header className="header">
          {/* Logo (Top-Left Corner) */}
          <img src={logo} alt="Nexr Logo" className="logo" />
          {/* Coming Soon Button (Top-Right Corner) */}
          <button className="coming-soon-btn">🕒 Coming Soon</button>
        </header>
      </div>
    </div>
  );
};

export default LandingPage;
