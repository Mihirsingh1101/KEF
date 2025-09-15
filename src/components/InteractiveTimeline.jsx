import React, { useEffect, useState, useMemo } from "react";


const InteractiveTimeline = ({ activeDay, setActiveDay }) => {
  const [position, setPosition] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (hasInteracted) return;
    setPosition(0);
    const interval = setInterval(() => {
      setPosition(prevPosition => {
        if (prevPosition >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevPosition + 0.5;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [hasInteracted]);

  const currentActiveDay = useMemo(() => {
    if (position < 25) return 1;
    if (position >= 25 && position < 50) return 2;
    if (position >= 50 && position < 75) return 3;
    return 4;
  }, [position]);

  useEffect(() => {
    setActiveDay(currentActiveDay);
  }, [currentActiveDay, setActiveDay]);

  const days = [
    { id: 1, label: 'DAY 1' }, 
    { id: 2, label: 'DAY 2' },
    { id: 3, label: 'DAY 3' }, 
    { id: 4, label: 'DAY 4' },
  ];

  const handleSliderChange = (e) => {
    if (!hasInteracted) setHasInteracted(true);
    setPosition(parseFloat(e.target.value));
  };

  return (
    <section className="bg-[#F3E9DD] py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold text-[#9A3B3B] mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
          Timeline
        </h2>
        <div className="relative w-full flex items-center justify-center">
          <div className="relative w-full h-16 flex items-center">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-400 rounded-full transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 h-1 bg-[#9A3B3B] rounded-full transform -translate-y-1/2" style={{ width: `${position}%` }}></div>
            <div className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-all duration-100" style={{ left: `${position}%` }}>
              <img src="/wheel.png" alt="Timeline Wheel" className="w-16 h-16 transition-transform duration-300 ease-out drop-shadow-lg" style={{ transform: `rotate(${position * 3.6}deg)` }} />
            </div>
            <input type="range" min="0" max="100" step="0.1" value={position} onChange={handleSliderChange} className="absolute w-full h-full appearance-none bg-transparent cursor-pointer z-20" style={{'--thumb-size': '4rem'}} />
            <div className="absolute top-1/2 left-0 w-full flex justify-between items-center z-10">
              {days.map(day => (
                <div key={day.id} className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full border-2 border-[#9A3B3B] transition-all duration-300 ${activeDay >= day.id ? 'bg-[#9A3B3B]' : 'bg-white'}`}></div>
                  <span className={`mt-4 text-sm font-bold transition-all duration-500 ease-in-out ${activeDay === day.id ? 'text-[#9A3B3B] scale-125' : 'text-gray-500'}`}>{day.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;
