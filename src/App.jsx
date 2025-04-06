import React from "react";
import backgroundImage from "./assets/pexels-jplenio-1103970.jpg"; // Background image
import logo from "./assets/Artboard 1.4.png"; // Logo image
import { motion } from "framer-motion"; // For animations
import "./App.css";

const LandingPage = () => {
  return (
    <div className="container">
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
        <p className="africa-text">First of its kind in Africa!</p>
      </div>

      {/* Key Benefits Section */}
      <section className="key-benefits">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            type: "spring",
            stiffness: 70,
            damping: 15,
          }}
          className="section-title"
        >
          <h3 className="gradient-text">Why Use Nextr?</h3>
        </motion.div>
        <div className="benefits-grid">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 70,
                damping: 15,
                delay: index * 0.2,
              }}
              className="benefit-card"
            >
              {index === 1 && (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="card-icon blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <h4 className="card-title">Credible Proof of Work</h4>
                  <br />
                  <p className="card-description">
                    Nextr makes verification 10x easier by displaying real
                    projects and actual contributions. Showcase your true
                    work—code, research, designs—and let employers and clients
                    see your impact firsthand.
                  </p>
                </>
              )}
              {index === 2 && (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="card-icon purple"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h4 className="card-title">AI-Powered Project Assistance</h4>
                  <br />
                  <p className="card-description">
                    The AI doesn't just assist when asked. It proactively helps
                    you by breaking down projects into roadmaps, providing
                    real-time progress updates and suggestions. Proven to reduce
                    time and effort normally invested by over 70%.
                  </p>
                </>
              )}
              {index === 3 && (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="card-icon green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <h4 className="card-title">Centralized Platform</h4>
                  <br />
                  <p className="card-description">
                    Stop juggling between GitHub, LinkedIn, Notion, and more.
                    Nextr brings everything together in one platform—from
                    showcasing your code to building your resume. Focus on the
                    work, and we’ll handle the rest.
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            type: "spring",
            stiffness: 70,
            damping: 15,
          }}
          className="section-title"
        >
          <h3 className="gradient-text">Watch Nexr in Action</h3>
          <p className="section-subtitle">
            See how Nexr empowers innovators to collaborate, build, and innovate
            like never before.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            type: "spring",
            stiffness: 70,
            damping: 15,
          }}
          className="video-container"
        >
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your actual video URL
            title="Nexr Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-iframe"
          ></iframe>
        </motion.div>
      </section>

      {/* How Nexr Works Section */}
      <section className="how-nexr-works">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            type: "spring",
            stiffness: 70,
            damping: 15,
          }}
          className="section-title"
        >
          <h3 className="gradient-text">How Nexr Works</h3>
          <p className="section-subtitle">
            Follow these simple steps to get started and see how Nexr makes your
            innovation journey easier.
          </p>
        </motion.div>
        <div className="steps-container">
          {[1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 70,
                damping: 15,
                delay: index * 0.2,
              }}
              className="step-card"
            >
              {index === 1 && (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="card-icon blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <h4 className="card-title">Start or Join a Project</h4>
                  <p className="card-description">
                    Kick off your project or join an existing one. Collaborate,
                    set goals, and bring your ideas to life.
                  </p>
                </>
              )}
              {index === 2 && (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="card-icon purple"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <h4 className="card-title">Set Up Projects & Roles</h4>
                  <p className="card-description">
                    Define project goals, assign roles, and let AI streamline
                    objectives for efficient teamwork.
                  </p>
                </>
              )}
              {index === 3 && (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="card-icon green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7V3a2 2 0 00-2-2H6a2 2 0 00-2 2v18a2 2 0 002 2h8a2 2 0 002-2V7h4l-5-5-5 5h4z"
                    />
                  </svg>
                  <h4 className="card-title">AI-Powered Support</h4>
                  <p className="card-description">
                    AI assists with task breakdowns, roadmaps, and tracking
                    progress, ensuring seamless workflows.
                  </p>
                </>
              )}
              {index === 4 && (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="card-icon teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v8m4-4h-8"
                    />
                  </svg>
                  <h4 className="card-title">Auto-Updated Portfolio</h4>
                  <p className="card-description">
                    Your portfolio updates automatically, showcasing your
                    contributions in real-time.
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </div>
        <div className="cta-container">
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="subscribe-section">
        <div className="subscribe-container">
          {/* Title */}
          <h3 className="subscribe-title">
            Be First in Line When <span className="highlight">Nexr</span>{" "}
            Launches
          </h3>
          {/* Subtitle */}
          <p className="subscribe-subtitle">
            Subscribe today and receive early access to Nexr. Stay ahead and
            take advantage of our innovative features before others do.
          </p>
          {/* Form Card */}
          <div className="form-card">
            {/* Email Label */}
            <label htmlFor="email" className="form-label">
              Email
            </label>
            {/* Email Input */}
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="form-input"
            />
            {/* Subscribe Button */}
            <button className="subscribe-button">Subscribe</button>
            {/* Terms and Conditions */}
            <p className="terms">
              By subscribing, you agree to our{" "}
              <a href="#" className="link">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="link">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={logo} alt="Nexr Logo" className="footer-logo-img" />
            <p className="footer-tagline">
              Empowering innovators to build, collaborate, and innovate.
            </p>
          </div>
          <div className="footer-links">
            <a href="/about" className="footer-link">
              About Us
            </a>
            <a href="/contact" className="footer-link">
              Contact Us
            </a>
            <a href="/privacy" className="footer-link">
              Privacy Policy
            </a>
            <a href="/terms" className="footer-link">
              Terms of Service
            </a>
          </div>
          <div className="footer-copyright">
            © 2025 Nexr. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
