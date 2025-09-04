// src/pages/SchedulePage.js
import React, { useState } from "react";
import InteractiveTimeline from "../components/InteractiveTimeline";
import DaySchedule from "../components/DaySchedule";
import ScheduleData from "../Data/ScheduleData";

const SchedulePage = () => {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <div className="bg-[#F3E9DD] min-h-screen" style={{ backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.02) 10%, transparent 10%)`, backgroundSize: '20px 20px' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: var(--thumb-size); height: var(--thumb-size); background: transparent; cursor: pointer; }
        input[type=range]::-moz-range-thumb { width: var(--thumb-size); height: var(--thumb-size); background: transparent; border: 0; cursor: pointer; }
      `}</style>

      <main>
        <InteractiveTimeline activeDay={activeDay} setActiveDay={setActiveDay} />
        <section className="py-16 px-4">
          {Object.keys(ScheduleData).map(dayKey => {
            const isActive = parseInt(dayKey) === activeDay;
            return (
              <div key={dayKey} className={`grid transition-all duration-700 ease-in-out`} style={{ gridTemplateRows: isActive ? '1fr' : '0fr' }}>
                <div className="overflow-hidden">
                  <DaySchedule dayData={ScheduleData[dayKey]} isVisible={isActive} />
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default SchedulePage;
