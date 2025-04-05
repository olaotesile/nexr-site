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
        {/* Main Content */}
        <div className="main-content">
          {/* Build. Collaborate. Innovate. Heading */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="main-heading"
          >
            Build. Collaborate. Innovate.
          </motion.h2>
          {/* Paragraph Below the Heading */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 1,
            }}
            className="main-paragraph"
          >
            The ultimate platform for visionaries, engineers, and
            problem-solvers to connect, share ideas, and bring groundbreaking
            projects to life. This is the one platform to make an impact like
            never before.
          </motion.p>
          {/* Buttons Container */}
          <div className="buttons-container">
            {/* Get Notified Button (Slide in from the left) */}
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: [0.42, 0, 0.58, 1], // Custom easing for smoothness
                delay: 1.5,
              }}
              className="get-notified-btn"
            >
              Get Notified
            </motion.button>
            {/* Learn More Button (Slide in from the right) */}
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: [0.42, 0, 0.58, 1], // Custom easing for smoothness
                delay: 1.5,
              }}
              className="learn-more-btn"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
