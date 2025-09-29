import React from "react";
import { ExternalLink } from "lucide-react";

const DocSchedule = () => {
  return (
    <div
      style={{ backgroundColor: "#fffbea" }}
      className="text-gray-900 font-sans overflow-hidden pt-28 pb-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-serif font-extrabold text-[#4a2511]">
            KEF 2025 Schedule
          </h1>
          <p className="text-xl sm:text-2xl text-gray-800 mt-3">
            Kullad Economy Festival · 2nd – 5th October
          </p>
          <p className="text-md sm:text-lg text-gray-700 mt-2">
            Explore the complete schedule of events, talks, and cultural programs
            for the Kullad Economy Festival.
          </p>
        </header>

        {/* Schedule Card */}
        <div className="flex justify-center">
          <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg border border-[#f7d57e] p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4a2511] mb-4 text-center">
              Festival Schedule
            </h2>
            <p className="text-gray-700 text-center mb-6">
              Click below to view the detailed schedule in the official document.
            </p>
            <div className="flex justify-center">
              <a
                href="https://docs.google.com/spreadsheets/d/1BrP43VikS1YoKbfpHDmJw6I7QsrnDYqd5p3rLkV8sL0/edit?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#4a2511] text-white rounded-xl shadow hover:bg-[#6a3a1d] transition-all duration-300"
              >
                View Full Schedule
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocSchedule;
