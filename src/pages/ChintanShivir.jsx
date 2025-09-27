import React from 'react';
// Assuming you have an icon library like 'react-icons' installed.
// npm install react-icons
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
import mylogo from "../assets/Mylogo.png"



// --- Data for the component ---

const keyPeople = [
  {
    name: "AJAY CHATURVEDI",
    title: "CHAIR, CONVENOR - KEF",
    description: "AUTHOR, STRATEGIST, EDUCATIONIST",
    image: Ajaychaturvedi,
  },
  {
    name: "PROF. LAKSHMIDHAR BEHERA",
    title: "DIRECTOR, IIT MANDI &",
    description: "BOARD OF ADVISOR - KEF",
    image: Lakshimidharbehera,
  },
  {
    name: "DR. SURYAPRAKASH UPADHYAY",
    title: "CHAIR SCHOOL OF HUMANAITIES",
    description: "AND SOCIAL SCIENCES",
    image: Suryaprakash,
  },
];

const eminentSpeakers = [
    { name: 'Dr. S. SOMANATH', title: 'FORMER CHAIRMAN', description: 'ISRO', image: Somnath },
    { name: 'PROF. GAUTAM R. DESIRAJU', title: 'PADMA SHRI AWARDEE; GLOBAL', description: 'AUTHORITY ON CRYSTAL ENGINEERING', image: Gautamdesiraju },
    { name: 'PROF. GANTI MURTHY', title: 'SUSTAINABILITY &', description: 'VEDIC SCIENCE EXPERT', image: gantimurthy },
    { name: 'K.N. RAGHUNANDAN', title: 'THOUGHT LRADER IN EDUCATION &', description: 'INDIC KNOWLEDGE SYSTEM', image: raghunandan },
    { name: 'ATUL KOTHARI', title: 'NATIONAL SECRETARY, SHIKSHA', description: 'SANSKRITI UTTHAN NYAS', image: atulkothari },
    { name: 'PROF. S. MISHRA', title: 'SANSKRIT SCHOLAR', description: 'SANSKRIT SCHOLAR', image: smishra},
    { name: 'DEEPAK SINGHAL', title: 'FORMER CHIEF SECRETARY', description: 'UTTAR PRADESH', image: deepaksinghal },
    { name: 'KANAGA SABAPATHY', title: 'MOLECULAR ONCOLOGY &', description: 'CANCER GENETICS', image: kanagasabapathy },
    { name: 'SANKRANT SANU', title: 'ENTREPRENEUR, AUTHOR &', description: 'RESEARCHER', image: sankrantsanu },
];

const eminentGuests = [
    { name: 'DR. MALA KAPADIA', title: 'DIRECTOR ANAADI CENTRE FOR', description: 'INDIGENOUS KNOWLEDGE SYSTEMS', image: malakapadia },
    { name: 'SHRI VISHNU NAMBOOTHIRI', title: 'WRITER, POET, ACADEMIC,', description: 'PRIEST', image: vishnunamboothiri },
    { name: 'DR. SHEFALI VAIDYA', title: 'EMINENT RESEARCHER', description: '', image: shefalivaidya },
    { name: 'KAVAN GANAPATHY K P', title: 'CONSCIOUSNESS TECHNOLOGIES', description: 'RESEARCHER', image: kanagasabapathy },
    { name: 'Eldho M B', title: 'GURU OF KALARI MARTIAL ARTS,', description: 'KALARI CHIKITSA HEALING & KALARI BASED YOGA-TANTRA', image:eldhomb },
    { name: 'RISHI MANIVANNAN', title: 'AYURVEDA, VARMA & SIDDHA', description: 'PRACTITIONER, MEDICAL OFFICER & RESEARCHER OF YOGA & TANTRA', image: rishimanivannan },
    { name: 'CHANDRASHEKARA J A', title: 'JYOTISHA VIDHWAN & SHIROMANI,', description: 'GURU IN PRASHNA SHASTRA', image: chandrashekaraja },
    { name: 'PARITOSH SHARMA', title: 'FOUNDER SHUNYA AI', description: '', image: "" },
    { name: 'ABHIGYA ANAND', title: 'PRAAJNA JYOTISHA', description: '', image: abhigyaanand },
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
    <h3 className="mt-4 font-bold text-lg text-[#f7d57e]">{name}</h3>
    <p className="text-sm text-white uppercase">{title}</p>
    <p className="text-sm text-white uppercase">{description}</p>
  </div>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-4xl font-serif text-center font-bold text-[#f7d57e] tracking-wider uppercase my-12">
    {children}
  </h2>
);

const DecorativeLine = () => (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#f7d57e] to-transparent my-16 opacity-50"></div>
);

// --- Main Page Component ---

const ChintanShivir = () => {
  const keyThemes = [
    { title: "Rashtra Dharma aur Sanskritik Chetna", description: "Dharmic economics rooted in rta; prosperity through festivals, traditions, and sustainable living by design." },
    { title: "Shakha, Sangathan, Sanskara aur Anushasan", description: "Student-led KEF embodies discipline, cooperation, and production-driven communities over market manipulation." },
    { title: "Rashtriya Ekta aur Samajik Samrasta", description: "Expansion of wealth via Aṣṭa-Lakṣmī; connecting farmers, technologists, entrepreneurs, and spiritual leaders." },
    { title: "Ekatma Manavavaad (Integral Humanism)", description: "Economy as organic flow, emphasizing dignity of production and circulation of wealth over charity or dependency." },
    { title: "Rashtriya Suraksha aur Svayattata", description: "Economic sovereignty through production-led growth and reduced global dependency (svavalamban as national security)." },
    { title: "Swadeshi Arthavyavastha", description: "The kullhad as a living metaphor—sustainable, locally made, biodegradable, rooted in culture yet globally relevant." },
  ];

  // ...
  return (
    <div className="bg-[#4a2511] min-h-screen text-white font-sans overflow-hidden pt-28" style={{ backgroundImage: 'url("/assets/background-pattern.png")', backgroundRepeat: 'repeat', backgroundSize: '400px' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">


            {/* Header Section */}
            <header className="flex justify-between items-center mb-8">
                <img src = "/Mylogo.png" alt="KEF Logo" className="h-24 w-24 object-contain" />
                <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-[#f7d57e]">KEF 2025</h1>
                    <p className="text-2xl md:text-3xl font-serif text-white">Kullhad Economy Festival</p>
                    <p className="text-lg text-amber-100 mt-1">Experience, Learn, Celebrate</p>
                    <p className="text-xl font-semibold text-white mt-2">The Dharmic Way (2 - 5 October)</p>
                </div>
            </header>

            {/* Chintan Shivir Workshop Section */}
            <section className="text-center my-16">
                <h2 className="text-2xl text-amber-200 tracking-widest">HALF-DAY WORKSHOP (BY INVITE ONLY)</h2>
                <h1 className="text-5xl font-serif font-bold text-[#f7d57e] my-4">CHINTAN SHIVIR</h1>
                <p className="text-2xl max-w-4xl mx-auto italic text-amber-100">
                    Theme: "Viksit Bharat and Rashtra Dharma: Blending Knowledge, Science, and Dharmic Design for a Sustainable Future"
                </p>
                <p className="text-xl font-bold mt-4 text-white">5<sup>th</sup> October Morning, At IIT Mandi</p>
            </section>

            {/* Key Themes Section */}
            <section className="my-16 max-w-5xl mx-auto">
                <h3 className="text-3xl font-serif text-center font-bold text-[#f7d57e] mb-8">Key Themes</h3>
                <div className="space-y-6">
                    {keyThemes.map((theme, index) => (
                        <div key={index} className="flex items-start">
                            <span className="text-2xl font-bold text-[#f7d57e] mr-4">{index + 1}.</span>
                            <p className="text-lg">
                                <span className="font-bold text-amber-200">{theme.title}</span> &rarr; {theme.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Key People Section */}
            <section className="my-16">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 max-w-6xl mx-auto">
                    {keyPeople.map(person => <PersonProfile key={person.name} {...person} />)}
                </div>
            </section>
            
            <DecorativeLine />

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
            <footer className="text-center mt-20 py-10 border-t-2 border-[#f7d57e]/30">
                <h3 className="text-4xl font-serif font-bold text-white mb-4">JOIN THE MOVEMENT</h3>
                <div className="flex justify-center items-center space-x-6">
                    
                    <span className="text-2xl font-semibold text-white">@KULLHADECONOMY</span>
                </div>
            </footer>
        </div>
    </div>
  );
};

export default ChintanShivir;