// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const Navbar = ({ onRegisterClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Prevent scrolling when mobile menu is open
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Schedule", path: "/schedule" },
    { name: "Content", path: "/content" },
    { name: "Advisory Board", path: "/advisory" },
  ];

  const handleLinkClick = (path) => {
    setIsOpen(false);
    if (path) navigate(path);
  };

  const handleRegisterClick = () => {
    // If user is logged in, go to profile. Otherwise go to signin.
    if (user) {
      navigate("/profile");
    } else {
      navigate("/signin");
    }
    if (onRegisterClick) onRegisterClick(); // optional external handler
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled || isOpen ? "backdrop-blur-md bg-[#3B231A]/40 shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="relative text-3xl md:text-4xl font-bold font-serif cursor-pointer bg-gradient-to-r from-yellow-200 via-yellow-400 to-white bg-clip-text text-transparent"
        >
          KEF 2025
        </Link>


        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-[#26170F] transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <ul className="h-full flex flex-col justify-center items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button onClick={() => handleLinkClick(link.path)} className="text-2xl font-semibold bg-gradient-to-r from-yellow-200 via-yellow-400 to-white bg-clip-text text-transparent">
                  {link.name}
                </button>
              </li>
            ))}
            <li className="mt-8">
              <motion.button onClick={handleRegisterClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 shadow-lg shadow-orange-500/30">
                {user ? "Profile" : "Register"}
              </motion.button>
            </li>
          </ul>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-lg font-semibold relative bg-gradient-to-r from-yellow-200 via-yellow-400 to-white bg-clip-text text-transparent after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-yellow-400 hover:after:w-full after:transition-all after:duration-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Show either register button OR user avatar */}
          {!user ? (
            <motion.button onClick={handleRegisterClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-2.5 text-white font-semibold rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 ease-in-out">
              Register
            </motion.button>
          ) : (
            <div className="relative text-white">
              <button onClick={() => setProfileOpen(v => !v)} className="flex items-center gap-3 px-3 py-1 rounded-full hover:bg-white/10 transition">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || "user"} className="w-8 h-8 rounded-full object-cover" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center font-semibold text-sm">
                    {user.displayName ? user.displayName[0].toUpperCase() : (user.email?.[0] || "U").toUpperCase()}
                  </div>
                )}
                <span className="hidden md:block">{user.displayName ?? user.email?.split("@")[0]}</span>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-[#2b1a15]/80 p-3 rounded-lg shadow-lg">
                  <Link to="/profile" onClick={() => setProfileOpen(false)} className="block py-1">
                    Profile
                  </Link>
                  <button onClick={async () => { await signOutUser(); setProfileOpen(false); }} className="w-full text-left py-1">
                    Sign out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Hamburger */}
        <div className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer z-50 group" onClick={() => setIsOpen(!isOpen)}>
          <span className={`w-8 h-1 rounded-full transition-all duration-300 ease-in-out ${isOpen ? "bg-white rotate-45 translate-y-[10px]" : "bg-gradient-to-r from-orange-500 to-yellow-400"}`}></span>
          <span className={`w-8 h-1 rounded-full my-1.5 transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : "bg-gradient-to-r from-orange-500 to-yellow-400"}`}></span>
          <span className={`w-8 h-1 rounded-full transition-all duration-300 ease-in-out ${isOpen ? "bg-white -rotate-45 -translate-y-[10px]" : "bg-gradient-to-r from-orange-500 to-yellow-400"}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
