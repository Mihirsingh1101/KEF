import React from "react";

const DaySchedule = ({ dayData, isVisible }) => {
  if (!dayData) return null;

  return (
    <div className={`transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <h3 className="text-center text-3xl font-bold text-[#6B4F4F] mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
        {dayData.title}
      </h3>
      <div className="relative max-w-3xl mx-auto">
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

export default DaySchedule;
