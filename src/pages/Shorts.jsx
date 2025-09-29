import React from "react";

const Shorts = () => {
  // Add your YouTube Shorts video IDs here (from the URL after /shorts/)
  const shorts = [
    "GN37GSD2nL0",
    "cmVUSx8oHik",
    "pjLWdRBARbI", // replace with your first short ID
    "b3dIWSl4AGo",
    "AM33y7B1hA0",
    "ik_WVndijjM",
  ];

  return (
    <div
      style={{ backgroundColor: "#fffbea" }}
      className="min-h-screen text-gray-900 font-sans overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-serif font-extrabold text-[#4a2511]">
            KEF Shorts
          </h1>
          <p className="text-xl sm:text-2xl text-gray-800 mt-3">
            Catch the highlights of Kullad Economy Festival
          </p>
          <p className="text-md sm:text-lg text-gray-700 mt-2">
            A glimpse into talks, culture, and celebrations
          </p>
        </header>

        {/* Shorts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {shorts.map((id, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#f7d57e] p-4 flex justify-center"
            >
              <iframe
                width="250"
                height="450"
                src={`https://www.youtube.com/embed/${id}`}
                title={`YouTube Short ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
      <div
      style={{ backgroundColor: "#fffbea" }}
      className="p"
    ></div>
    </div>
    
  );
};

export default Shorts;
