import React from "react";
import { motion } from "framer-motion";
import maaKaliImage from "../assets/Mylogo.png"; // your logo with transparent background
import bgImage from "./mandala.jpg"; // cultural mandala background

const MainPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col items-center justify-center min-h-screen text-center 
                  bg-gradient-to-b from-black/60 to-black/80 px-6"
      >
        {/* Logo */}
        <motion.img
          src={maaKaliImage}
          alt="Festival Logo"
          className="w-58 md:w-72 lg:w-82 mt-20 drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        />

        {/* Text Section */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h1
            className="text-3xl md:text-5xl lg:text-3xl font-extrabold 
                       text-transparent bg-clip-text bg-gradient-to-r 
                       from-yellow-400 to-orange-500 drop-shadow-md"
          >
            Welcome to the Kullhad Economy Festival 2025
          </h1>

          <p
            className="mt-6 text-lg md:text-xl leading-relaxed text-gray-200 
                       font-light tracking-wide"
          >
            <span className="block italic text-yellow-200 text-lg md:text-xl font-medium mb-4">
              IIT Mandi | 2nd–6th October 2025
            </span>
            From the heart of Himachal Pradesh, IIT Mandi presents the{" "}
            <span className="text-yellow-400 font-semibold">
              Kullhad Economy Festival
            </span>{" "}
            – a visionary celebration that brings together India’s
            time-honored producers and contemporary innovators. This October,
            campus lawns and minds will ignite with the stories of artisans,
            farmers, and makers converging with the next generation of
            scientists, engineers, and creators.
          </p>

          <p
            className="mt-6 text-lg md:text-xl font-medium text-orange-300 italic"
          >
            “Reconnecting Hands and Minds: Tradition Meets Technology for a
            Sustainable Tomorrow”
          </p>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default MainPage;
