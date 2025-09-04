import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">𝓚𝓔𝓕 𝟚𝟘𝟚𝟝</div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="Schedule">Schedule</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>
      <div
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
