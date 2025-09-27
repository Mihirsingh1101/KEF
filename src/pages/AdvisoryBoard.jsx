import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// ✅ Your image imports
import ganpatiRamanathanPhoto from '../assets/ganpati ramanathan.jpeg';
import vishalBindraPhoto from '../assets/vishal bindra.jpeg';
import alokGuptaPhoto from '../assets/alok gupta.jpeg';
import rohitPathakPhoto from '../assets/rohit pathak.jpeg';
import anilSharmaPhoto from '../assets/anil sharma.png';
import sankrantSanuPhoto from '../assets/sankrant sanu.jpeg';
import anandPrakashPhoto from '../assets/Anand Prakash.jpg';
import kanagaSabapathiPhoto from '../assets/Kanaga Sabapathi.jpg';
import kanganaRanautPhoto from '../assets/kangana ranaut.jpeg';
import lakshmidharBeheraPhoto from '../assets/lakshmidhar behera.png';
import gautamDesirajuPhoto from '../assets/gautam desiraju.jpeg';
import gantiMurthyPhoto from '../assets/ganti murthy.jpeg';

const advisoryBoardData = [
    {
        photoUrl: lakshmidharBeheraPhoto,
        name: 'Prof. Lakshmidhar Behera',
        post: 'Director, IIT Mandi, Academic Leadership',
    },
    {
        photoUrl: ganpatiRamanathanPhoto,
        name: 'Prof. Ganpati Ramanathan',
        post: 'National Advisor, Indigenous Innovation',
    },
    {
        photoUrl: vishalBindraPhoto,
        name: 'Mr. Vishal Bindra',
        post: 'Business Leader, Business Development',
    },
    {
        photoUrl: alokGuptaPhoto,
        name: 'Mr. Alok Gupta',
        post: 'Investor, Investment',
    },
    {
        photoUrl: rohitPathakPhoto,
        name: 'Mr. Rohit Pathak',
        post: 'Business Leader, Business Strategy',
    },
    {
        photoUrl: anilSharmaPhoto,
        name: 'Mr. Anil Sharma',
        post: 'Entrepreneur, Entrepreneurship',
    },
    {
        photoUrl: sankrantSanuPhoto,
        name: 'Mr. Sankrant Sanu',
        post: 'Entrepreneur (GarudaLife), Entrepreneurship',
    },
    {
        photoUrl: anandPrakashPhoto,
        name: 'Mr. Anand Prakash',
        post: 'President GI4QC',
    },
    {
        photoUrl: kanagaSabapathiPhoto,
        name: 'Prof. Kanaga Sabapathi',
        post: 'Professor and Author',
    },

    {
        photoUrl: gautamDesirajuPhoto,
        name: 'Prof. Gautam Desiraju',
        post: 'Scientist and Cultural Patron, Science and Culture',
    },
    {
        photoUrl: gantiMurthyPhoto,
        name: 'Dr. Ganti Murthy',
        post: 'IIT Indore, Academic Research',
    },
];

const AdvisoryBoard = () => {
  return (
    <div className="pt-24 p-8 bg-gradient-to-b mt-8 from-white to-gray-100 min-h-screen">
      {/* 👆 Added pt-24 (96px padding-top) to push below navbar */}
      
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Advisory Committee
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {advisoryBoardData.map((member, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center hover:shadow-xl transition duration-300"
          >
            <img
              src={member.photoUrl}
              alt={member.name}
              className="w-28 h-28 object-cover rounded-full border-4 border-gray-200 shadow-sm"
            />
            <h2 className="mt-4 text-lg font-semibold text-gray-800 text-center">
              {member.name}
            </h2>
            <p className="text-sm text-gray-600 text-center">{member.post}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default AdvisoryBoard;
