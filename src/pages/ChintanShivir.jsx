
import React from 'react';
import Ajaychaturvedi from "../assets/Ajay Chaturvedi.jpg";
import Lakshimidharbehera from "../assets/lakshmidhar behera.png";
import Suryaprakash from "../assets/Surya prakash upadhyay.jpeg";
import Somnath from "../assets/s-somanath.jpg";
import Gautamdesiraju from "../assets/gautam-desiraju.jpg";
import gantimurthy from "../assets/ganti murthy.jpeg";
import raghunandan from "../assets/kn-raghunandan.jpg";
import atulkothari from "../assets/atul-kothari.jpg";
import smishra from "../assets/s-mishra.jpg";
import deepaksinghal from "../assets/deepak-singhal.jpg";
import kanagasabapathy from "../assets/kanaga-sabapathy.jpg";
import sankrantsanu from "../assets/sankrant sanu.jpeg";
import malakapadia from "../assets/mala-kapadia.jpg";
import vishnunamboothiri from "../assets/vishnu-namboothiri.jpg";
import shefalivaidya from "../assets/shefali vaidya.jpg";
import eldhomb from "../assets/eldho-mb.jpg";
import rishimanivannan from "../assets/rishi-manivannan.jpg";
import chandrashekaraja from "../assets/chandrashekara-ja.jpg";
import abhigyaanand from "../assets/abhigya-anand.jpg";
import kvaisakhgurukkal from "../assets/k-vaisakh-gurukkal.jpg";
import raghavakrishna from "../assets/raghava-krishna.jpg";
import kavanganpathy from "../assets/kavan-ganapathy.jpg";
import ParitoshSharma from "../assets/Paritosh Sharma.jpg";
import debiprasadmishra from "../assets/debi-prasad-mishra.jpg"

// --- Data for the component ---
const eminentSpeakers = [
  { name: 'PROF. GANTI MURTHY', title: 'SUSTAINABILITY &', description: 'VEDIC SCIENCE EXPERT', image: gantimurthy },
    {
    name: "PROF. LAKSHMIDHAR BEHERA",
    title: "DIRECTOR, IIT MANDI &",
    description: "BOARD OF ADVISOR - KEF",
    image: Lakshimidharbehera,
  },
    {
    name: "PROF. AJAY CHATURVEDI",
    title: "CHAIR, CONVENOR - KEF",
    description: "AUTHOR, STRATEGIST, EDUCATIONIST",
    image: Ajaychaturvedi,
  },
  { name: 'ATUL KOTHARI', title: 'NATIONAL SECRETARY, SHIKSHA', description: 'SANSKRITI UTTHAN NYAS', image: atulkothari },
  { name: 'K.N. RAGHUNANDAN', title: 'THOUGHT LRADER IN EDUCATION &', description: 'INDIC KNOWLEDGE SYSTEM', image: raghunandan },
  { name: 'KANAGA SABAPATHY', title: 'MOLECULAR ONCOLOGY &', description: 'CANCER GENETICS', image: kanagasabapathy },
  { name: 'DEBI PRASAD MISHRA', title: 'PROFESSOR &', description: 'DEPARMENT OF AERSOSPACE ENGINEERING', image: debiprasadmishra },
  { name: 'DR. MALA KAPADIA', title: 'DIRECTOR ANAADI CENTRE FOR', description: 'INDIGENOUS KNOWLEDGE SYSTEMS', image: malakapadia },
   { name: 'DR. SHEFALI VAIDYA', title: 'EMINENT RESEARCHER', description: '', image: shefalivaidya },
  { name: 'SANKRANT SANU', title: 'ENTREPRENEUR, AUTHOR &', description: 'RESEARCHER', image: sankrantsanu },
  { name: 'DEEPAK SINGHAL', title: 'FORMER CHIEF SECRETARY', description: 'UTTAR PRADESH', image: deepaksinghal },
  { name: 'ABHIGYA ANAND', title: 'PRAAJNA JYOTISHA', description: '', image: abhigyaanand },
  { name: 'PROF. GAUTAM R. DESIRAJU', title: 'PADMA SHRI AWARDEE; GLOBAL', description: 'AUTHORITY ON CRYSTAL ENGINEERING', image: Gautamdesiraju },
];

const eminentGuests = [
  { name: 'SHRI VISHNU NAMBOOTHIRI', title: 'WRITER, POET, ACADEMIC,', description: 'PRIEST', image: vishnunamboothiri },
  { name: 'KAVAN GANAPATHY K P', title: 'CONSCIOUSNESS TECHNOLOGIES', description: 'RESEARCHER', image: kavanganpathy },
  { name: 'Eldho M B', title: 'GURU OF KALARI MARTIAL ARTS,', description: 'KALARI CHIKITSA HEALING & KALARI BASED YOGA-TANTRA', image: eldhomb },
  { name: 'RISHI MANIVANNAN', title: 'AYURVEDA, VARMA & SIDDHA', description: 'PRACTITIONER, MEDICAL OFFICER & RESEARCHER OF YOGA & TANTRA', image: rishimanivannan },
  { name: 'CHANDRASHEKARA J A', title: 'JYOTISHA VIDHWAN & SHIROMANI,', description: 'GURU IN PRASHNA SHASTRA', image: chandrashekaraja },
  { name: 'PARITOSH SHARMA', title: 'FOUNDER SHUNYA AI', description: '', image: ParitoshSharma },
  { name: 'K VAISAKH GURUKKAL', title: 'LEADER SREE DURGA KALARI', description: '', image: kvaisakhgurukkal },
  { name: 'RAGHAVA KRISHNA', title: 'FOUNDER & CEO, BRHAT LLC', description: '', image: raghavakrishna },
];

// --- Reusable Components ---

const OrnateBorder = ({ children }) => (
  <div className="p-1.5 bg-gradient-to-br from-[#f7d57e] to-[#a57c3a] rounded-full inline-block">
    {children}
  </div>
);

const PersonProfile = ({ name, title, description, image }) => (
  <div className="flex flex-col items-center text-center">
    <OrnateBorder>
      <img src={image} alt={name} className="w-40 h-40 rounded-full object-cover border-4 border-[#4a2511]" />
    </OrnateBorder>
    <h3 className="mt-4 font-bold text-lg text-[#4a2511]">{name}</h3>
    <p className="text-sm text-gray-800 uppercase">{title}</p>
    <p className="text-sm text-gray-700 uppercase">{description}</p>
  </div>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-4xl font-serif text-center font-bold text-[#4a2511] tracking-wider uppercase my-12">
    {children}
  </h2>
);

const DecorativeLine = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4a2511] to-transparent my-16 opacity-50"></div>
);

// --- Main Page Component ---

const ChintanShivir = () => {
  

  return (
    <div
      style={{ backgroundColor: "#fffbea" }}
      className="min-h-screen text-gray-900 font-sans overflow-hidden pt-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Header Section */}
        <header className="text-center items-center mb-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-extrabold text-[#4a2511]">
              KEF 2025
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-900 mt-1">
              Kullhad Economy Festival
            </p>
            <p className="text-md sm:text-lg text-gray-700 mt-2">
              Experience, Learn, Celebrate
            </p>
            <p className="text-lg sm:text-xl font-semibold text-gray-900 mt-3">
              The Dharmic Way (2 - 5 October)
            </p>
          </div>
        </header>

        {/* Chintan Shivir Workshop Section */}
        <section className="text-center my-12 md:my-16">
          <h2 className="text-lg sm:text-xl text-gray-700 tracking-widest uppercase">
            Half-Day Workshop (By Invite Only)
          </h2>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#4a2511] my-3">
            CHINTAN SHIVIR
          </h1>
          <p className="text-lg sm:text-xl max-w-4xl mx-auto italic text-gray-800">
            Theme: "Viksit Bharat and Rashtra Dharma: Blending Knowledge, Science, and Dharmic Design for a Sustainable Future"
          </p>
          <p className="text-lg sm:text-xl font-bold mt-4 text-gray-900">
            5<sup>th</sup> October Morning, At IIT Mandi
          </p>
        </section>

        

        {/* Eminent Speakers Section */}
        <section className="my-16">
          <SectionTitle>Eminent Speakers</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 max-w-6xl mx-auto">
            {eminentSpeakers.map(person => <PersonProfile key={person.name} {...person} />)}
          </div>
        </section>

        <DecorativeLine />

        {/* Eminent Guests Section */}
        <section className="my-16">
          <SectionTitle>Eminent Guests</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 max-w-7xl mx-auto">
            {eminentGuests.map(person => <PersonProfile key={person.name} {...person} />)}
          </div>
        </section>

        {/* Footer Section */}
        <footer className="text-center mt-20 py-10 border-t-2 border-[#a57c3a]/30">
          <h3 className="text-4xl font-serif font-bold text-[#4a2511] mb-4">JOIN THE MOVEMENT</h3>
          <div className="flex justify-center items-center space-x-6">
            <span className="text-2xl font-semibold text-gray-900">@KULLHADECONOMY</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ChintanShivir;

