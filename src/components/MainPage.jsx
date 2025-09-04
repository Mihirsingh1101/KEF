import React from "react";
import { motion } from "framer-motion";
import maaKaliImage from "./maa.png"; // your image
import bgImage from "./mandala.jpg"; // add a cultural background pattern

const MainPage = () => {
  return (
    <motion.div
      // Whole page fade-in
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "#fff",
      }}
    >

      {/* Hero Section */}
      <section
        id="hero"
        className="hero-section"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          background:
            "linear-gradient(rgba(155, 154, 154, 0.6), rgba(16, 16, 16, 0.8)), url('/temple-bg.jpg') center/cover",
        }}
      >
        <motion.img
          src={maaKaliImage}
          alt="Maa Kali"
          style={{ width: "280px", marginBottom: "1rem" }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        />
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h1 style={{ fontSize: "3rem", color: "gold" }}>🌺 Divine Blessings 🌺</h1>
          <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "1rem auto" }}>
            Welcome to a journey of peace, spirituality, and the eternal culture of
            India.
          </p>
        </motion.div>
      </section>


    </motion.div>
  );
};

export default MainPage;
