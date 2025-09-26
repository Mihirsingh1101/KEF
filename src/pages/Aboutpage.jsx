import React, { useState, useEffect, useRef } from 'react';
import './KEFAboutUs.css'; // The CSS file that will contain all styles
import kefLogo from '../assets/Mylogo.png';
import adityapandey from '../assets/aditya pandey.jpeg';
import virinchi from '../assets/virinchi.jpg';
import priyankari from '../assets/priyankari.jpg';
import Dharma from '../assets/Dharma.jpg';
import sheetalBhartiPhoto from '../assets/Sheetal Bharti.jpg';
import nakulKumarPhoto from '../assets/nakul kumar.jpg';
import pranshuPhoto from '../assets/pranshu.jpg';
import piyushRoyPhoto from '../assets/piyush roy.jpg';
import nitinKumarPhoto from '../assets/nitin kumar.jpg';
import vaibhavDeepPhoto from '../assets/vabhav deep jaiswal.jpg';

import ajaySoniPhoto from '../assets/ajay soni.jpeg';
import richaMishraPhoto from '../assets/richa mishra.jpeg';
import dimpleKaulPhoto from '../assets/dimple kaul.jpeg';
import prakritiNigamPhoto from '../assets/prakriti nigam.jpg';
import ajayChaturvediPhoto from '../assets/Ajay Chaturvedi.jpg';
import suryaPrakashPhoto from '../assets/Surya prakash upadhyay.jpeg';
import arnavBhavsarPhoto from '../assets/arnav bhavsar.jpeg';
import shyamMasakapalliPhoto from '../assets/shyam masakapalli.jpeg';
import shefaliVaidyaPhoto from '../assets/shefali vaidya.jpg';
import paritoshSharmaPhoto from '../assets/Paritosh Sharma.jpg';
import bhupendraMondalPhoto from '../assets/bhupendra mondal.jpg';
import bijitSinghaPhoto from '../assets/bijit singha.jpg';
import Sneha from '../assets/Sneha Dar.jpg'
import Mihir from '../assets/Mihir.jpg'
import Dhruv from '../assets/Dhruv.jpg'
import Devansh from '../assets/Devansh.jpg'
import Daksh from '../assets/Daksh.jpg'
import hansraj from '../assets/Hansraj.jpg'
import Devprakash from '../assets/Devprakash.jpg'
import Satyansh from '../assets/satyansh.jpg'
// ========================================================================
// CODE TO APPEND: Team Data and Reusable Carousel Component
// ========================================================================

// --- Placeholder Data for the Teams ---
// In a real application, you would fetch this data from an API.
const studentCouncilData = [
  {
    photoUrl: adityapandey, // Use the imported image variable
    name: 'Aditya Pandey',
    post: 'B.Tech Undergrad, IIT Mandi Co-Convenor',
  },
  {
    photoUrl: virinchi,
    name: 'E Virinchi',
    post: 'B.Tech Undergrad, IIT Mandi Co-Convenor',
  },
  {
    photoUrl: priyankari, // You can also use direct web links
    name: 'Priyankari',
    post: 'PhD Research Scholar, IIT Mandi Chief Operations',
  },
  {
    photoUrl: Dharma, // You can also use direct web links
    name: 'Dharma',
    post: 'PhD Scholar, IIT Mandi Head-Logistics',
  },
  {
    photoUrl: sheetalBhartiPhoto,
    name: 'Sheetal Bharti',
    post: 'PhD Scholar, IIT Mandi Head-Hospitality',
  },
  {
    photoUrl: nitinKumarPhoto,
    name: 'Nitin Kumar',
    post: 'Ph.D. Scholar, IIT Mandi Head-Research and Curation', // Placeholder - Please update post
  },
  {
    photoUrl: vaibhavDeepPhoto,
    name: 'Vaibhav Deep Jaiswal',
    post: 'Research scholar, IIT Mandi Research Curator', // Placeholder - Please update post
  },
  {
    photoUrl: nakulKumarPhoto,
    name: 'Nakul Kumar',
    post: 'B.Tech Undergrad, IIT Mandi Head-Social Media',
  },
  {
    photoUrl: piyushRoyPhoto,
    name: 'Piyush Roy',
    post: 'B.Tech Undergrad, IIT Mandi Strategy Advisor',
  },
  {
    photoUrl: pranshuPhoto,
    name: 'Pranshu',
    post: 'B.Tech Undergrad, IIT Mandi Head-Community & Artisan Engagementg',
  },
  {
    photoUrl: Sneha,
    name: 'Sneha Das',
    post: 'B.Tech Undergrad, IIT Mandi Head-Decor Team',
  },
  {
    photoUrl: Mihir,
    name: 'Mihir Singh',
    post: 'I-MBA Undergrad, IIT Mandi Head-Webdev Team',
  },
  {
    photoUrl: Dhruv,
    name: 'Dhruv Makhija',
    post: 'I-MBA Undergrad, IIT Mandi Head-Webdev Team',
  },
    {
    photoUrl: Devansh,
    name: 'Devansh Garg',
    post: 'B.Tech Undergrad, IIT Mandi Head-Operations',
  },
    {
    photoUrl: Daksh,
    name: 'Daksh Bidhuri',
    post: 'B.Tech Undergrad, IIT Mandi Head-Security',
  },
      {
    photoUrl: hansraj,
    name: 'Hansraj',
    post: 'B.Tech Undergrad, IIT Mandi Head-Finance',
  },
      {
    photoUrl: Devprakash,
    name: 'Devprakash',
    post: 'B.Tech Undergrad, IIT Mandi Head-Hospitality',
  },
      {
    photoUrl: Satyansh,
    name: 'Satyansh',
    post: 'B.Tech Undergrad, IIT Mandi Joint Head',
  },

];


const organizingCommitteeData = [
  {
    photoUrl: ajayChaturvediPhoto,
    name: 'Prof. Ajay Chaturvedi',
    post: 'Visiting Faculty, General Chair / Convenor',
  },
  {
    photoUrl: ajaySoniPhoto,
    name: 'Dr. Ajay Soni',
    post: 'Faculty, Chair',
  },
  {
    photoUrl: richaMishraPhoto,
    name: 'Dr. Richa Mishra',
    post: 'Parul University, Chair',
  },
  {
    photoUrl: dimpleKaulPhoto,
    name: 'Ms. Dimple Kaul',
    post: 'Indica, Chair',
  },
  {
    photoUrl: prakritiNigamPhoto,
    name: 'Ms. Prakriti Nigam',
    post: 'Chairperson, Being Shiva Foundation',
  },
  {
    photoUrl: suryaPrakashPhoto,
    name: 'Dr. Surya Prakash Upadhyaya',
    post: 'Faculty, Chair',
  },
  {
    photoUrl: arnavBhavsarPhoto,
    name: 'Dr. Arnav Bhavsar',
    post: 'Dean, Sponsored Research and Industrial Consultancy, Chair',
  },
  {
    photoUrl: shyamMasakapalliPhoto,
    name: 'Dr. Shyam Masakapalli',
    post: 'Faculty, Chair',
  },
  {
    photoUrl: shefaliVaidyaPhoto,
    name: 'Ms. Shefali Vaidya',
    post: 'Author, Public Intellectual and Expert on Temple Architecture & Textiles, Chair',
  },
  {
    photoUrl: paritoshSharmaPhoto,
    name: 'Mr. Paritosh Sharma',
    post: 'Founder & Professor, Shunya AI, Chair',
  },
  {
    photoUrl: bhupendraMondalPhoto,
    name: 'Mr. Bhupendra Mondal',
    post: 'Social Media Strategist',
  },
  {
    photoUrl: bijitSinghaPhoto,
    name: 'Mr. Bijit Singha',
    post: 'Physicist, Quantitative Finance Modeller, Author',
  },
];


// --- CORRECTED Finite Team Carousel Component ---
const TeamCarousel = ({ title, members, styles }) => {
  const trackRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // This function now runs after a scroll event to update the button states
  const updateButtonStates = () => {
    const track = trackRef.current;
    if (!track) return;

    // Check if we are at the beginning
    setIsAtStart(track.scrollLeft < 5); // Use a small tolerance

    // Check if we have scrolled to the end
    // scrollWidth is the total scrollable width
    // clientWidth is the visible width of the container
    const maxScroll = track.scrollWidth - track.clientWidth;
    setIsAtEnd(track.scrollLeft > maxScroll - 5); // Use a small tolerance
  };

  const handleScroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    // Calculate the width to scroll by (3 cards)
    const card = track.querySelector('.person-card');
    if (!card) return; // Exit if no cards are found

    const cardWidth = card.offsetWidth;
    const gap = parseInt(window.getComputedStyle(track).gap, 10) || 32; // Default gap to 32px if needed
    const scrollAmount = (cardWidth + gap) * 3;

    // Calculate the new scroll position
    const newScrollPosition = direction === 'right'
      ? track.scrollLeft + scrollAmount
      : track.scrollLeft - scrollAmount;

    track.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth',
    });
  };

  // This useEffect hook attaches an event listener to check the scroll position
  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      // Run the check once initially and then on every scroll
      updateButtonStates();
      track.addEventListener('scroll', updateButtonStates);

      // Clean up the event listener when the component unmounts
      return () => track.removeEventListener('scroll', updateButtonStates);
    }
  }, [members]); // Rerun if the members change

  return (
    <section style={styles.section} className="team-carousel-section">
      <h2 style={{ ...styles.sectionTitle, textAlign: 'center' }} className="animate-on-scroll">{title}</h2>
      <div className="carousel-wrapper">
        <button
          className="scroll-button left"
          onClick={() => handleScroll('left')}
          disabled={isAtStart}
        >
          <span>&#8249;</span>
        </button>
        <div className="carousel-container animate-on-scroll" ref={trackRef}>
          <div className="carousel-track">
            {members.map((member, index) => (
              <div className="person-card" key={index}>
                <img src={member.photoUrl} alt={member.name} className="person-photo" />
                <h3 className="person-name">{member.name}</h3>
                <p className="person-post">{member.post}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          className="scroll-button right"
          onClick={() => handleScroll('right')}
          disabled={isAtEnd}
        >
          <span>&#8250;</span>
        </button>
      </div>
    </section>
  );
};

// --- Placeholder SVG Icon Components ---
// For a real project, you would replace these with your actual SVG code.
const PerformancesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none">
    <path d="M16 20H2L5.22457 10.7557C6.79555 6.25189 7.58104 4 9 4C10.3373 4 11.1119 6 12.5116 10" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
    <path d="M6 20H22L17.4066 12.6585C15.8806 10.2195 15.1176 9 14 9C12.8824 9 12.1194 10.2195 10.5934 12.6585L9.12837 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
);
const FlavorsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none">
    <path d="M7 4.5C5.34315 4.5 4 5.84315 4 7.5C4 8.06866 4.15822 8.60037 4.43304 9.0535C3.04727 9.31855 2 10.537 2 12C2 13.463 3.04727 14.6814 4.43304 14.9465M7 4.5C7 3.11929 8.11929 2 9.5 2C10.8807 2 12 3.11929 12 4.5V19.5C12 20.8807 10.8807 22 9.5 22C8.11929 22 7 20.8807 7 19.5C5.34315 19.5 4 18.1569 4 16.5C4 15.9313 4.15822 15.3996 4.43304 14.9465M7 4.5C7 5.31791 7.39278 6.04408 8 6.50018M4.43304 14.9465C4.78948 14.3588 5.34207 13.9032 6 13.6707" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M17 19.4999C18.6569 19.4999 20 18.1567 20 16.4999C20 15.9312 19.8418 15.3995 19.567 14.9464C20.9527 14.6813 22 13.4629 22 11.9999C22 10.5369 20.9527 9.31843 19.567 9.05338M17 19.4999C17 20.8806 15.8807 21.9999 14.5 21.9999C13.1193 21.9999 12 20.8806 12 19.4999L12 4.49988C12 3.11917 13.1193 1.99988 14.5 1.99988C15.8807 1.99988 17 3.11917 17 4.49988C18.6569 4.49988 20 5.84302 20 7.49988C20 8.06854 19.8418 8.60024 19.567 9.05338M17 19.4999C17 18.682 16.6072 17.9558 16 17.4997M19.567 9.05338C19.2105 9.64109 18.6579 10.0966 18 10.3292" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
);
const CraftsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none">
    <path d="M12 12V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M12 12V13H15C18.3137 13 21 10.3137 21 7V6H18C14.6863 6 12 8.68629 12 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M12 10V11H9C5.68629 11 3 8.31371 3 5V4H6C9.31371 4 12 6.68629 12 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
);

const KEFAboutUsPage = () => {
  // useEffect for Mouse Parallax Effect in Hero Section
  useEffect(() => {
    const handleMouseMove = (e) => {
      const heroContent = document.querySelector('.hero-content-track');
      if (heroContent) {
        // Debounce or throttle this in a real app for better performance
        const { clientX, clientY } = e;
        const x = (window.innerWidth / 2 - clientX) / 30; // Divisor controls sensitivity
        const y = (window.innerHeight / 2 - clientY) / 30;
        heroContent.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // useEffect for handling scroll-based animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);


  return (
    <div style={styles.page}>

      {/* ===== Hero Section with Animated Background ===== */}
      <header style={styles.heroSection} className="hero-section">
        <div className="hero-background-orbs">
          {[...Array(10)].map((_, i) => <div key={i} className="orb"></div>)}
        </div>
        <div className="hero-content-track">
          <div style={styles.heroContent}>
            <h1 className="hero-title">
              {'About-KEF'.split('').map((char, i) => (
                <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>{char}</span>
              ))}
            </h1>
            <p style={styles.heroSubtitle}>
              KEF 2025 is envisioned and led by Prof. Ajay Chaturvedi – visionary entrepreneur, bestselling author (Lost Wisdom of the Swastika, the Time Trilogy), and architect of forgotten futures.
            </p>
            <button style={styles.ctaButton} className="cta-button">Explore the Fest</button>
          </div>
        </div>
      </header>

      {/* ===== About Section ===== */}
      <section
        id="about"
        className="flex justify-center px-4 py-16 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400"
      >
        <div className="max-w-4xl p-10 rounded-2xl shadow-xl bg-white/20 backdrop-blur-md transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(255,140,0,0.4)]">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-6 text-center tracking-wide drop-shadow-lg">
            Kullhad Economy Festival 2025
          </h2>
          <p className="text-lg leading-relaxed text-yellow-50 text-justify">
            Drawing from ancient Dharmic wisdom and combining it with modern innovation, Ajay brings together communities, students, artisans, business leaders, and policymakers to reimagine India’s role in shaping a sustainable global economy.
            Recognised as a Young Global Leader by the World Economic Forum, Youth Icon by many organisations, Founder of HarVa XPO, Kautilya Fellowship Network, and the Kullhad Economy, Ajay has consistently championed the idea that true wealth is created not by exploiting nature, but by flowing with it.
            His guiding philosophy:
            <br /><br />
            <em className="block text-xl font-semibold italic text-yellow-200 text-center my-6 tracking-wide drop-shadow-md">
              “He who wrote the first book, hadn’t read a book – be that man, every moment.”
            </em>
            The fundamental principle that drives the Kullhad Economy is Critical Thinking aligned with Nature and Time.
            Through KEF, Ajay invites the world to move:
            <br />• from <span className="text-yellow-200 font-semibold">consumerism</span> to <span className="text-yellow-300 font-semibold">creation</span>,
            <br />• from <span className="text-yellow-200 font-semibold">extraction</span> to <span className="text-yellow-300 font-semibold">circulation</span>,
            <br />• from <span className="text-yellow-200 font-semibold">fast and fleeting</span> to <span className="text-yellow-300 font-semibold">lasting and Dharmic</span>.
          </p>
        </div>
      </section>



      {/* ===== Animated SVG Divider ===== */}
      <div className="divider-container animate-on-scroll">
        <svg className="animated-divider" viewBox="0 0 200 20" preserveAspectRatio="none">
          <path d="M 10 10 Q 50 20 100 10 T 190 10" stroke="url(#gold-gradient)" fill="none" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* ===== Experience Section with Staggered Cards & Icons ===== */}
      <section id="experience" style={styles.section}>
        <h2 style={{ ...styles.sectionTitle, textAlign: 'center' }} className="animate-on-scroll">The KEF Experience</h2>
        <div style={styles.cardGrid}>
          <div className="card interactive-card animate-on-scroll">
            <div className="card-icon"><PerformancesIcon /></div>
            <h3>Sacred Geography</h3>
            <p>Located in Mandi (Chhoti Kāśī) at the feet of Parāśara Muni</p>
          </div>
          <div className="card interactive-card animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div className="card-icon"><FlavorsIcon /></div>
            <h3>Cultural Consciousness</h3>
            <p>Unique confluence of culture, consciousness, and capability</p>
          </div>
          <div className="card interactive-card animate-on-scroll" style={{ transitionDelay: '400ms' }}>
            <div className="card-icon"><CraftsIcon /></div>
            <h3>Living Crafts</h3>
            <p>Engage with skilled artisans and learn the stories behind timeless Indian handicrafts.</p>
          </div>
        </div>
      </section>
      {/* ===== PASTE THE NEW TEAM SECTIONS HERE ===== */}
      <TeamCarousel title="Organizing Committee" members={organizingCommitteeData} styles={styles} />
      <TeamCarousel title="Student Council" members={studentCouncilData} styles={styles} />


      {/* SVG Definitions for gradients */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFC300" />
            <stop offset="100%" stopColor="#FF9933" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// --- STYLES ---
const styles = {
  page: {
    background: "linear-gradient(to bottom, #fff7e6, #fffbea, #ffffff)", // soft cream → white
    color: "#3B0A00",
    fontFamily: "'Inter', sans-serif",
    backgroundImage: "url('https://www.transparenttextures.com/patterns/light-paper-fibers.png')",
  },
  heroSection: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #fff3e0, #ffe0b2, #ffffff)", // soft peach → white
    position: "relative",
    overflow: "hidden",
    color: "#3B0A00",
    textAlign: "center",
  },

  kefLogo: {
    height: '50px',
    width: '50px',
    marginRight: '1rem',
    borderRadius: '10px'
  },
  kefTitle: {
    fontFamily: "'Cinzel Decorative', serif",
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#FF6F00', // deep orange
  },
  heroContent: {
    zIndex: 2,
    maxWidth: '800px',
    padding: '2rem',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    color: '#FFF3E0',
    marginTop: '1rem',
  },
  ctaButton: {
    marginTop: '2rem',
    padding: '0.8rem 2rem',
    borderRadius: '25px',
    border: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    background: 'linear-gradient(90deg, #FF512F, #F09819)',
    color: '#fff',
    cursor: 'pointer',
    boxShadow: '0 6px 20px rgba(255, 100, 0, 0.4)',
    transition: 'all 0.3s ease',
  },
  section: {
    padding: '4rem 2rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '2rem',
    color: '#FF5722',
    fontWeight: '700',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
  },

};

export default KEFAboutUsPage;