import React, { useState, useMemo } from 'react';

// SVG Icon for the logo - a simple placeholder
const LogoIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-400">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Header Component: Renders the top section based on the provided image.
const Header = () => {
  return (
    <header className="w-full">
      {/* Top Navigation Bar */}
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

      {/* Main Banner Section */}
      <div 
        className="relative text-center py-20 md:py-32 bg-[#C08282]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.05) 10%, transparent 10%)`,
          backgroundSize: '20px 20px',
        }}
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
       {/* Decorative Bottom Border */}
      <div 
        className="h-12 bg-[#F3E9DD]"
        style={{
            backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.07) 10%, transparent 10%)`,
            backgroundSize: '25px 25px',
        }}
      ></div>
    </header>
  );
};

// Timeline Component: The interactive wheel and day selector.
const InteractiveTimeline = () => {
  // State to hold the current value of the slider (0-100)
  const [position, setPosition] = useState(0);

  // This determines which day is "active" based on the wheel's position.
  // useMemo prevents recalculating this on every render unless 'position' changes.
  const activeDay = useMemo(() => {
    if (position < 20) return 1;
    if (position >= 20 && position < 50) return 2;
    if (position >= 50 && position < 80) return 3;
    return 4;
  }, [position]);

  // The four points for the days on the timeline.
  const days = [
      { id: 1, label: 'DAY 1', pos: 0 },
      { id: 2, label: 'DAY 2', pos: 33.33 },
      { id: 3, label: 'DAY 3', pos: 66.66 },
      { id: 4, label: 'DAY 4', pos: 100 },
  ];

  return (
    <section className="bg-[#F3E9DD] py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold text-[#9A3B3B] mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
          Timeline
        </h2>
        <div className="relative w-full flex items-center justify-center">
          {/* The main container for the slider and visual elements */}
          <div className="relative w-full h-16 flex items-center">
            
            {/* The horizontal line/track */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-400 rounded-full transform -translate-y-1/2"></div>
            
            {/* The colored progress bar that fills the track */}
            <div 
              className="absolute top-1/2 left-0 h-1 bg-[#9A3B3B] rounded-full transform -translate-y-1/2"
              style={{ width: `${position}%` }}
            ></div>

            {/* The wheel image */}
            <div
              className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-all duration-100"
              style={{ left: `${position}%` }}
            >
                <img 
                    src="https://i.imgur.com/Of142yG.png" 
                    alt="Timeline Wheel" 
                    className="w-16 h-16 transition-transform duration-300 ease-out"
                    style={{ transform: `rotate(${position * 3.6}deg)` }} // Rotates as it moves
                />
            </div>

            {/* The invisible slider input that controls the wheel */}
            <input
              type="range"
              min="0"
              max="100"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="absolute w-full h-full appearance-none bg-transparent cursor-pointer z-20"
              style={{'--thumb-size': '4rem'}} // Custom property for thumb size
            />

            {/* Day markers and labels */}
            <div className="absolute top-1/2 left-0 w-full flex justify-between items-center z-10">
                {days.map(day => (
                    <div key={day.id} className="flex flex-col items-center">
                        {/* The circle marker on the line */}
                        <div className={`w-4 h-4 rounded-full border-2 border-[#9A3B3B] transition-all duration-300 ${activeDay >= day.id ? 'bg-[#9A3B3B]' : 'bg-white'}`}></div>
                        {/* The text label */}
                        <span className={`mt-4 text-sm font-bold transition-all duration-300 ${activeDay === day.id ? 'text-[#9A3B3B] scale-110' : 'text-gray-500'}`}>
                            {day.label}
                        </span>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// Main App Component
export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Import the Google Font for the special title style */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
          
          /* Custom styling for the range slider thumb to make it invisible */
          input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: var(--thumb-size); /* Make thumb large enough to grab the wheel */
            height: var(--thumb-size);
            background: transparent; /* Make it invisible */
            cursor: pointer;
          }
          input[type=range]::-moz-range-thumb {
            width: var(--thumb-size);
            height: var(--thumb-size);
            background: transparent;
            border: 0;
            cursor: pointer;
          }
        `}
      </style>
      <Header />
      <main>
        <InteractiveTimeline />
      </main>
    </div>
  );
}
