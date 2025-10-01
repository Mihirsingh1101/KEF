import React from "react";

const Directorvid = () => {
   return (
    <div
      style={{ backgroundColor: "#fffbea" }}
      className="text-gray-900 font-sans overflow-hidden pt-28 pb-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-serif font-extrabold text-[#4a2511]">
            From The Director Of IIT Mandi
          </h1>
        </header>
        <div className="max-w-4xl mx-auto"> 
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-[#f7d57e]">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/dO-rcZQb8Hw`}
              title="Kullad Economy Festival Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        

      </div>
    </div>
  );
};
export default Directorvid;