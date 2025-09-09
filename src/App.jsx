import React, { useState, useMemo, useEffect } from 'react';

// --- DATA for the daily schedules ---
const scheduleData = {
  1: {
    title: "Day 1 - October 2, 2025 (Vijay Daśami)",
    events: [
      { time: "09:00 AM onwards", title: "Marketplace Stalls", description: "Continued showcase of handmade, biodegradable, sustainable, and rooted products.", tag: "MARKETPLACE", tagColor: "bg-green-500" },
      { time: "11:00 AM", title: "Culinary Showcase", description: "Culinary showcase by local Himachali Chefs, food producers and artisans.", tag: "CULTURAL", tagColor: "bg-yellow-500" },
      { time: "12:00 PM", title: "Heritage Tour", description: "In and around IIT Mandi.", tag: "OFFICIAL", tagColor: "bg-red-500" },
      { time: "05:00 PM", title: "Fireside Storytelling & Tribal Knowledge", description: "Fireside storytelling by community entrepreneurs and tribal knowledge holders.", tag: "COMMUNITY", tagColor: "bg-blue-500" },
      { time: "07:30 PM", title: "Star Night 1 (Invocation concert)", description: "Smt. Kaushiki Chakraborty (Tentatively).", tag: "CULTURAL", tagColor: "bg-yellow-500" },
      { time: "09:00 PM", title: "Astronomy Night", description: "Star Gazing and talk.", tag: "FUN", tagColor: "bg-orange-500" },
    ]
  },
  2: {
    title: "Day 2 - October 3, 2025",
    events: [
      { time: "09:00 AM onwards", title: "Marketplace Stalls (Continued)", description: "Continued showcase of handmade, biodegradable, sustainable, and rooted products.", tag: "MARKETPLACE", tagColor: "bg-green-500" },
      { time: "10:00 AM", title: "Mandala Installation", description: "Mandala Installation by artists and a mandala walkthrough.", tag: "TRADITIONAL", tagColor: "bg-yellow-600" },
      { time: "02:00 PM", title: "Mini Symposium", description: "Symposium on the theme of 'Kalābad Economy' (Art, Ecology and Enterprise).", tag: "COMMUNITY", tagColor: "bg-blue-500" },
      { time: "06:00 PM", title: "Star Night 2 (Folk Evening)", description: "Kashmiri Lari Group and Rajasthan Manganiyar Troupe (Tentatively).", tag: "CULTURAL", tagColor: "bg-yellow-500" },
      { time: "08:00 PM", title: "Folk Jam/Drum Circle", description: "Folk fusion collective.", tag: "CULTURAL", tagColor: "bg-yellow-500" },
    ]
  },
  3: {
    title: "Day 3 - October 4, 2025",
    events: [
        { time: "09:00 AM onwards", title: "Marketplace Stalls (Continued)", description: "Continued showcase of handmade, biodegradable, sustainable, and rooted products.", tag: "MARKETPLACE", tagColor: "bg-green-500" },
        { time: "10:00 AM", title: "Procession + Live Art Market Launch", description: "Local Women Entrepreneurs (Sunita Devi, Kirandeep Kaur) - Him Mahotsav (Tentatively).", tag: "COMMUNITY", tagColor: "bg-blue-500" },
        { time: "02:00 PM", title: "Panel: MBA to MVA", description: "Entrepreneurs Swami Strilhi, Dunihor.", tag: "OFFICIAL", tagColor: "bg-red-500" },
        { time: "05:00 PM", title: "Chaupal: Dharma & Development", description: "Gandhi Smriti Institute (Tentatively).", tag: "CULTURAL", tagColor: "bg-yellow-500" },
        { time: "07:30 PM", title: "Star Night 3 (Village Soul Night)", description: "Rabindranath Sharma (Sitar - Fusion) (Tentatively).", tag: "CULTURAL", tagColor: "bg-yellow-500" },
    ]
  },
  4: {
    title: "Day 4 - October 5, 2025",
    events: [
        { time: "09:00 AM onwards", title: "Marketplace Stalls (Continued)", description: "Continued showcase of handmade, biodegradable, sustainable, and rooted products.", tag: "MARKETPLACE", tagColor: "bg-green-500" },
        { time: "10:00 AM", title: "Youth Showcases + Innovation Circles", description: "", tag: "OFFICIAL", tagColor: "bg-red-500" },
        { time: "02:00 PM", title: "Ayurveda, Temple Trade, Panchanga Workshops", description: "AYUSH Dept, Arya Samaj, Sabathoo (Tentatively).", tag: "COMMUNITY", tagColor: "bg-blue-500" },
        { time: "05:30 PM", title: "Closing Satsang & Valedictory", description: "Closing Ceremony for KEF 2025.", tag: "CULTURAL", tagColor: "bg-yellow-500" },
    ]
  }
};


// --- UI COMPONENTS ---

const LogoIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-400">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

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
      { id: 1, label: 'DAY 1' }, { id: 2, label: 'DAY 2' },
      { id: 3, label: 'DAY 3' }, { id: 4, label: 'DAY 4' },
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

// Component to display the schedule for a single day
const DaySchedule = ({ dayData, isVisible }) => {
  if (!dayData) return null;

  return (
    <div className={`transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <h3 className="text-center text-3xl font-bold text-[#6B4F4F] mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
        {dayData.title}
      </h3>
      <div className="relative max-w-3xl mx-auto">
        {/* The vertical timeline bar */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-yellow-700 opacity-30"></div>
        
        {dayData.events.map((event, index) => (
          <div key={index} className={`flex items-center w-full my-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <p className="font-bold text-lg text-[#9A3B3B]">{event.title}</p>
              <p className="text-sm text-gray-600">{event.description}</p>
              <span className={`mt-2 inline-block text-xs text-white px-2 py-1 rounded-full ${event.tagColor}`}>{event.tag}</span>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2">
               <div className="bg-[#9A3B3B] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {event.time}
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Component Function - RENAMED!
function EventSchedule() {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <div className="bg-[#F3E9DD] min-h-screen" style={{ backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.02) 10%, transparent 10%)`, backgroundSize: '20px 20px' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: var(--thumb-size); height: var(--thumb-size); background: transparent; cursor: pointer; }
        input[type=range]::-moz-range-thumb { width: var(--thumb-size); height: var(--thumb-size); background: transparent; border: 0; cursor: pointer; }
      `}</style>
      <Header />
      <main>
        <InteractiveTimeline activeDay={activeDay} setActiveDay={setActiveDay} />
        <section className="py-16 px-4">
          {Object.keys(scheduleData).map(dayKey => {
            const isActive = parseInt(dayKey) === activeDay;
            return (
              <div
                key={dayKey}
                className={`grid transition-all duration-700 ease-in-out`}
                style={{ gridTemplateRows: isActive ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                   <DaySchedule dayData={scheduleData[dayKey]} isVisible={isActive} />
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}

// Export the renamed component
export default EventSchedule;
