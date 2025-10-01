import React from "react";

const ScheduleChintanShivir = () => {
  const schedule = [
    { no: 1, event: "Edu Scheme for Viksit Bharat - IKS Perspective", speaker: "Prof. Ganti Murthy", time: "09:30 AM" },
    { no: 2, event: "Experience Learning and Knowledge", speaker: "Prof. Laxmidhar Behera", time: "10:00 AM" },
    { no: 3, event: "Kullhad Economy vs Market Economy", speaker: "Ajay Chaturvedi", time: "10:30 AM" },
    { no: "Break", event: "Stall Visit", speaker: "", time: "11:00 AM – 11:45 AM" },
    { no: 4, event: "Bharat Shiksha Sanskriti Utthan (Viksit Bharat 2047)", speaker: "Dr. Atul Kothari", time: "12:00 PM" },
    { no: 5, event: "Education & Skill Development for Unprivileged Community", speaker: "Dr. Raghunandan G.", time: "12:30 PM" },
    { no: "Lunch", event: "Lunch Break", speaker: "", time: "01:00 PM – 02:00 PM" },
    { no: 6, event: "Science and Technology of Ancient India", speaker: "Prof. D.P. Mishra", time: "02:00 PM" },
    { no: 7, event: "Business Practices for Indian System", speaker: "Prof. Kanaga Sabhapathy", time: "02:30 PM" },
    { no: 8, event: "Engineering Perspective for Vikrant", speaker: "Prof. Sathans", time: "03:00 PM" },
    { no: 9, event: "Indian Textile and Handloom", speaker: "Shefali Vaidya", time: "03:30 PM" },
    { no: 10, event: "Panel Discussion", speaker: "Prof. Laxmidhar Behera", time: "05:00 PM" },
  ];

  return (
    <div
      style={{ backgroundColor: "#fffbea" }}
      className="min-h-screen text-gray-900 font-sans overflow-hidden pt-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-serif font-extrabold text-[#4a2511]">
            Chintan Shivir Schedule
          </h1>
          <p className="text-xl sm:text-2xl text-gray-800 mt-3">
            Kullad Economy Festival · 5th October · IIT Mandi
          </p>
        </header>

        {/* Schedule Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse shadow-lg rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-[#4a2511] text-white">
                <th className="py-3 px-4 text-left">No.</th>
                <th className="py-3 px-4 text-left">Event</th>
                <th className="py-3 px-4 text-left">Speaker</th>
                <th className="py-3 px-4 text-left">Time</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-[#fff2d6]"
                  } hover:bg-[#fde68a] transition`}
                >
                  <td className="py-3 px-4 font-semibold text-[#4a2511]">
                    {item.no}
                  </td>
                  <td className="py-3 px-4">{item.event}</td>
                  <td className="py-3 px-4 text-gray-700">{item.speaker}</td>
                  <td className="py-3 px-4 font-medium">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScheduleChintanShivir;

