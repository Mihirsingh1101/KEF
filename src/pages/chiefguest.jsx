import React from "react";
import guest1 from "../assets/kangana ranaut.jpeg"
import guest2 from "../assets/Anurag.jpg"

export default function ChiefGuests() {
  const guests = [
    {
      name: "Ms. Kangana Ranaut",
      title: "MP & Cultural Voice of Himachal, Cultural Leadership",
      img: guest1, 
      bio: "We are honored to welcome  as a Chief Guest of KEF 2025. With decades of contribution to education, culture, and social development, their presence adds immense inspiration to this year’s festival.",
      quote:
        "“Knowledge is not power until it transforms the lives of people.”",
    },
    {
      name: "Mr Anurag Thakur",
      title: "Social Reformer | Cultural Icon",
      img: guest2, // replace with actual image path
      bio: "Prof. [Guest Name 2] brings invaluable insights as a Chief Guest of KEF 2025. Their tireless efforts in uplifting communities and preserving heritage resonate with the values of this festival.",
      quote:
        "“Culture is the heartbeat of a community, binding generations together.”",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f0e8] flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#2e1f1c] text-center mb-6">
          Chief Guests of KEF 2025
        </h1>
        <div className="h-1 w-32 mx-auto mb-12 bg-gradient-to-r from-[#e63946] via-[#f6aa1c] to-[#e63946] rounded-full"></div>

        {/* Guests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {guests.map((guest, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl p-8 text-center flex flex-col"
            >
              {/* Image */}
              <img
                src={guest.img}
                alt={guest.name}
                className="w-48 h-48 mx-auto rounded-full border-4 border-[#f6aa1c] shadow-lg object-cover mb-6"
              />

              {/* Info */}
              <h2 className="text-2xl font-semibold text-[#2e1f1c]">
                {guest.name}
              </h2>
              <p className="text-[#7a5d4e] mt-2">{guest.title}</p>
              <p className="mt-4 text-[#4b3b32] leading-relaxed">{guest.bio}</p>

              {/* Quote */}
              <div className="mt-6 bg-[#fdf6f0] border-l-4 border-[#f6aa1c] p-4 rounded-xl shadow-sm">
                <p className="italic text-[#2e1f1c]">{guest.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
