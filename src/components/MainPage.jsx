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
      {/* Navbar */}
      <header
        className="navbar"
        style={{
          background: "rgba(201, 4, 4, 0.2)", // deep maroon w/ transparency
          padding: "1rem 2rem",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <nav style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
          <a href="#hero" style={{ color: "gold", fontWeight: "bold" }}>
            Home
          </a>
          <a href="#about" style={{ color: "gold", fontWeight: "bold" }}>
            About
          </a>
          <a href="#gallery" style={{ color: "gold", fontWeight: "bold" }}>
            Gallery
          </a>
          <a href="#contact" style={{ color: "gold", fontWeight: "bold" }}>
            Contact
          </a>
        </nav>
      </header>

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

      {/* About Section */}
      <section
        id="about"
        style={{
          padding: "4rem 2rem",
          background: "rgba(255, 140, 0, 0.85)",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "white", fontSize: "2rem" }}>About Us</h2>
        <p style={{ maxWidth: "700px", margin: "1rem auto", color: "#fff" }}>
          Rooted in India’s rich traditions, we embrace the spiritual heritage that
          guides our lives. From festivals to rituals, our culture reflects unity,
          devotion, and harmony.
        </p>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        style={{
          padding: "4rem 2rem",
          background: "rgba(34, 139, 34, 0.85)", // peacock green
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "gold", fontSize: "2rem" }}>Gallery</h2>
        <p style={{ color: "white" }}>A glimpse into our divine traditions.</p>
        {/* You can add an image grid here later */}
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: "4rem 2rem",
          background: "rgba(25, 25, 112, 0.85)", // royal blue
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "gold", fontSize: "2rem" }}>Contact</h2>
        <p style={{ color: "white" }}>
          Get in touch with us to be part of our cultural journey.
        </p>
      </section>
    </motion.div>
  );
};

export default MainPage;
