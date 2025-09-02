import React from "react";
import LogoIcon from "./LogoIcon";

const Header = () => {
  return (
    <header className="w-full">
      <nav className="bg-[#9A3B3B] text-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <LogoIcon />
            <span className="font-bold text-xl tracking-wider">KEF 2025</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-yellow-300 transition-colors">Home</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">About</a>
            <a href="#" className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-semibold border-2 border-yellow-500 shadow-sm">Schedule</a>
          </div>
          <div>
             <button className="border-2 border-yellow-400 text-yellow-400 px-4 py-1 rounded-full font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-colors">
                English
             </button>
          </div>
        </div>
      </nav>
      <div 
        className="relative text-center py-20 md:py-32 bg-[#C08282]"
        style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.05) 10%, transparent 10%)`, backgroundSize: '20px 20px' }}
      >
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl text-white font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
            Event Schedule
          </h1>
          <p className="text-white text-lg md:text-xl mt-4">
            October 2-5, 2025 • IIT Mandi, Kamand Valley
          </p>
        </div>
      </div>
      <div 
        className="h-12 bg-[#F3E9DD]"
        style={{ backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.07) 10%, transparent 10%)`, backgroundSize: '25px 25px' }}
      ></div>
    </header>
  );
};

export default Header;
