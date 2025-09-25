import React from 'react';
// Sample data for artists - you can fetch this from an API

import Ajay from '../assets/Anurag_Thakur.jpg'
const artists = [
  {
    name: 'Ajay Thakur',
    role: 'TAMAK - HERITAGE OF INDIA',
    imageUrl: Ajay, // Placeholder image
  },
  {
    name: 'Rohan Joshi',
    role: 'Textile Weaver',
  },
  {
    name: 'Priya Verma',
    role: 'Madhubani Painter',
    imageUrl: 'https://images.unsplash.com/photo-1582233479572-9a05a4670576?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
  },
   {
    name: 'Vikram Singh',
    role: 'Wood Carver',
    imageUrl: 'https://images.unsplash.com/photo-1596726134225-9c8a192152a8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
  },
];

// Reusable Artist Card Component
const ArtistCard = ({ name, role, imageUrl }) => (
  <div className="group flex flex-col items-center bg-[rgba(255,255,255,0.4)] rounded-2xl p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20">
    <div className="relative mb-6">
      <img
        src={imageUrl}
        alt={name}
        className="w-40 h-40 rounded-full object-cover border-4 border-yellow-400 shadow-lg"
      />
      {/* Glow effect on hover */}
      <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-30 blur-xl"></div>
    </div>
    <h3 className="font-poppins font-bold text-2xl text-red-800">{name}</h3>
    <p className="font-inter text-orange-600 mb-6">{role}</p>
    <a
      href="#"
      className="inline-block font-poppins font-semibold text-white px-6 py-2 rounded-full bg-gradient-to-r from-red-600 to-orange-500 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/40"
    >
      Know More
    </a>
  </div>
);

// Main Showcase Component
const ArtistShowcase = () => {
  return (
    // The warm, sun-inspired beige background color is set here
    <section className="bg-[#fcf8f0] py-16 md:py-24">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h1 className="font-cinzel-decorative text-4xl md:text-5xl font-bold text-stone-800">
          Featured Artists of KEF 2025
        </h1>

        {/* Decorative Underline */}
        <div className="mt-4 mb-16 w-48 h-1 mx-auto bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 rounded-full"></div>

        {/* Artist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-12">
          {artists.map((artist, index) => (
            <ArtistCard
              key={index}
              name={artist.name}
              role={artist.role}
              imageUrl={artist.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistShowcase;