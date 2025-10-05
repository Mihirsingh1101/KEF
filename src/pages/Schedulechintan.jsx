import React, { useState } from "react";

const MergedSchedule = () => {
  const [activeDay, setActiveDay] = useState("day1");

  const scheduleDay1 = [
    { time: "09:15 – 10:00 am", speaker: "Prof. Ajay Chaturvedi", topic: "Visit of Kullhad Economy Festival" },
    { time: "10:00 – 10:20 am", speaker: "Prof. Ganti S. Murthy", topic: "IKS education for Viksit Bharat" },
    { time: "10:20 – 10:40 am", speaker: "Dr. Raghunandan G.", topic: "National Education Policy, NEP-2020" },
    { time: "10:40 – 11:00 am", speaker: "Prof. D.P. Mishra", topic: "Science and Technology of Ancient India" },
    { time: "11:00 – 11:20 am", speaker: "Mr. Sankrant Sanu", topic: "Garuda Publications – Its impact" },
    { time: "11:20 – 11:40 am", speaker: "Prof. Laxmidhar Behera", topic: "Experiential Learning and Knowledge Generation in IKS" },
    { time: "11:40 – 12:00 pm", speaker: "Dr. Atul Kothari", topic: "Role of Shiksha Sanskriti Uthan Nyas for Viksit Bharat" },
    { time: "12:00 – 12:20 pm", speaker: "Prof. Sathans", topic: "Engineering perspective for Viksit Bharat" },
    { time: "12:20 – 12:40 pm", speaker: "Prof. Kanaga Sabapathi", topic: "Homegrown Business practices" },
    { time: "12:40 – 01:00 pm", speaker: "Prof. Ajay Chaturvedi", topic: "Kullhad Economy vs Market Economy" },
    { time: "01:00 – 01:20 pm", speaker: "Ms. Shefali Vaidya", topic: "Indian Textile and Handloom" },
    { time: "01:20 – 03:00 pm", speaker: "", topic: "Lunch Break" },
    { time: "03:00 – 04:30 pm", speaker: "Moderator: Prof. Laxmidhar Behera", topic: "Panel Discussion" },
    { time: "04:30 pm", speaker: "—", topic: "Movie Screening" },
  ];

  const scheduleDay2 = [
    { time: "07:00 – 08:00 am", speaker: "—", topic: "—" },
    { time: "08:00 – 09:00 am", speaker: "—", topic: "—" },
    { time: "09:00 – 10:00 am", speaker: "Dr. Iype Cherian", topic: "Session on Mental Wellbeing" },
    { time: "10:00 – 11:00 am", speaker: "Dr. Arnav Bhavsa", topic: "Session on Mental Wellbeing" },
    { time: "11:00 – 12:00 pm", speaker: "Dr. Venkatesh Chembrolu", topic: "Session on Mental Wellbeing" },
    { time: "12:00 – 13:00 pm", speaker: "", topic: "Lunch" },
    { time: "13:00 – 14:00 pm", speaker: "—", topic: "—" },
    { time: "14:00 – 15:00 pm", speaker: "", topic: "Closing Ceremony" },
    { time: "15:00 – 16:00 pm", speaker: "", topic: "Closing Ceremony" },
  ];

  const activeSchedule = activeDay === "day1" ? scheduleDay1 : scheduleDay2;

  return (
    <div className="min-h-screen bg-[#fffbea] pt-24 px-6 sm:px-12">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl sm:text-6xl font-serif font-extrabold text-[#4a2511]">
          Chintan Shivir · Workshop Schedule
        </h1>
        <p className="text-lg sm:text-xl text-gray-800 mt-2 tracking-wide">
          IIT Mandi · Kullad Economy Festival 2025
        </p>
      </header>

      {/* Tabs */}
      <div className="flex justify-center mb-10 space-x-4">
        <button
          onClick={() => setActiveDay("day1")}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            activeDay === "day1"
              ? "bg-[#4a2511] text-white shadow-lg scale-105"
              : "bg-[#fff2d6] text-[#4a2511] hover:bg-[#fde68a]"
          }`}
        >
           Oct 5
        </button>
        <button
          onClick={() => setActiveDay("day2")}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            activeDay === "day2"
              ? "bg-[#4a2511] text-white shadow-lg scale-105"
              : "bg-[#fff2d6] text-[#4a2511] hover:bg-[#fde68a]"
          }`}
        >
           Oct 6
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto transition-all duration-500 ease-in-out">
        <table className="w-full border-collapse shadow-lg rounded-2xl overflow-hidden">
          <thead>
            <tr className="bg-[#4a2511] text-white">
              <th className="py-3 px-4 text-left">Time</th>
              <th className="py-3 px-4 text-left">Speaker</th>
              <th className="py-3 px-4 text-left">Topic</th>
            </tr>
          </thead>
          <tbody>
            {activeSchedule.map((item, index) => (
              <tr
                key={index}
                className={`${
                  item.topic.toLowerCase().includes("lunch")
                    ? "bg-[#fde68a] text-[#4a2511] font-semibold"
                    : index % 2 === 0
                    ? "bg-white"
                    : "bg-[#fff2d6]"
                } hover:bg-[#fcd34d]/70 transition`}
              >
                <td className="py-3 px-4 font-medium">{item.time}</td>
                <td className="py-3 px-4">{item.speaker || "—"}</td>
                <td className="py-3 px-4">{item.topic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <footer className="text-center mt-20 py-10 border-t-2 border-[#a57c3a]/30">
        <h3 className="text-4xl font-serif font-bold text-[#4a2511] mb-4">JOIN THE MOVEMENT</h3>
        <div className="flex justify-center items-center space-x-6">
          <span className="text-2xl font-semibold text-gray-900">@KULLHADECONOMY</span>
        </div>
      </footer>
    </div>
  );
};

export default MergedSchedule;
