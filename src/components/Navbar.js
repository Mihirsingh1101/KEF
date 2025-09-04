import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Prevent scrolling when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
        window.removeEventListener("scroll", handleScroll);
        document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "backdrop-blur-md bg-[#3B231A]/40 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="relative text-3xl md:text-4xl font-extrabold cursor-pointer">
          <a href="/" className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-white bg-clip-text text-transparent animate-pulse">
            𝓚𝓔𝓕 𝟚𝟘𝟚𝟝
          </a>
        </div>

        {/* Nav Links */}
        <ul
          className={`flex flex-col md:flex-row md:static absolute top-0 h-screen md:h-auto w-2/3 md:w-auto justify-center md:justify-end items-center gap-8 md:gap-12 bg-[#3B231A]/90 md:bg-transparent transition-all duration-500 ease-in-out ${
            isOpen ? "right-0" : "-right-full"
          }`}
        >
          {["Home", "About", "Schedule", "Content"].map((item) => (
            <li key={item}>
              <a
                // Updated href logic
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-lg md:text-xl font-semibold relative bg-gradient-to-r from-yellow-200 via-yellow-400 to-white bg-clip-text text-transparent after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-yellow-400 hover:after:w-full after:transition-all after:duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer z-50 group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`w-8 h-1 rounded-full transition-all duration-300 ease-in-out group-hover:scale-110 ${
              isOpen
                ? "bg-white rotate-45 translate-y-[3px]"
                : "bg-gradient-to-r from-orange-500 to-yellow-400"
            }`}
          ></span>
          <span
            className={`w-8 h-1 rounded-full my-1.5 transition-all duration-300 ease-in-out group-hover:scale-110 ${
              isOpen
                ? "opacity-0"
                : "bg-gradient-to-r from-orange-500 to-yellow-400"
            }`}
          ></span>
          <span
            className={`w-8 h-1 rounded-full transition-all duration-300 ease-in-out group-hover:scale-110 ${
              isOpen
                ? "bg-white -rotate-45 -translate-y-[3px]"
                : "bg-gradient-to-r from-orange-500 to-yellow-400"
            }`}
          ></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;