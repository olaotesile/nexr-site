import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "./assets/pexels-jplenio-1103970.jpg"; // Background image
import logo from "./assets/Artboard 1.4.png"; // Logo image

function App() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div
        className="relative flex flex-col min-h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Header */}
        <header className="relative z-10 w-full h-20">
          {/* Logo */}
          <img
            src={logo}
            alt="Nexr Logo"
            className="absolute top-4 left-4 h-20 sm:h-20"
          />

          {/* Coming Soon Button */}
          <button className="absolute top-9 right-4 px-4 py-1 text-sm sm:text-base font-semibold bg-[#061924] rounded-full shadow-lg hover:bg-gray-900 transition">
            🕒 Coming Soon
          </button>
        </header>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center text-center justify-center flex-grow space-y-6 px-4 sm:px-8">
          {/* Build. Collaborate. Innovate. Heading */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="text-5xl sm:text-6xl font-extrabold leading-tight max-w-4xl text-white"
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
            className="text-lg sm:text-xl text-gray-300 max-w-xl"
          >
            The ultimate platform for visionaries, engineers, and
            problem-solvers to connect, share ideas, and bring groundbreaking
            projects to life. This is the one platform to make an impact like
            never before.
          </motion.p>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Get Notified Button */}
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: [0.42, 0, 0.58, 1],
                delay: 1.5,
              }}
              className="px-6 py-2 text-base sm:text-lg font-bold bg-[#061924] rounded-full shadow-lg hover:bg-gray-900 transition"
            >
              Get Notified
            </motion.button>

            {/* Learn More Button */}
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: [0.42, 0, 0.58, 1],
                delay: 1.5,
              }}
              className="px-6 py-2 text-base sm:text-lg font-bold text-[#061924] bg-white rounded-full shadow-lg hover:bg-gray-200 transition"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
