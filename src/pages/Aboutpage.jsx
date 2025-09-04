import React, { useEffect } from 'react';
import './KEFAboutUs.css'; // The CSS file that will contain all styles
import kefLogo from '../assets/kef-logo.jpg'; 

// ========================================================================
// CODE TO APPEND: Team Data and Reusable Carousel Component
// ========================================================================

// --- Placeholder Data for the Teams ---
// In a real application, you would fetch this data from an API.
const studentCouncilData = Array.from({ length: 10 }, (_, i) => ({
  photoUrl: `https://i.pravatar.cc/150?u=student${i}`,
  name: `Student Name ${i + 1}`,
  post: `Council Post ${i + 1}`,
}));

const advisoryBoardData = Array.from({ length: 12 }, (_, i) => ({
  photoUrl: `https://i.pravatar.cc/150?u=advisor${i}`,
  name: `Advisor Name ${i + 1}`,
  post: `Board Member`,
}));

const organizingCommitteeData = Array.from({ length: 12 }, (_, i) => ({
  photoUrl: `https://i.pravatar.cc/150?u=organiser${i}`,
  name: `Organiser Name ${i + 1}`,
  post: `Committee Head`,
}));


// --- Reusable Team Carousel Component ---
const TeamCarousel = ({ title, members, styles }) => {
  // We calculate the animation duration based on the number of members
  // to keep the scroll speed consistent across carousels.
  const animationDuration = members.length * 4; // 4 seconds per card

  return (
    <section style={styles.section} className="team-carousel-section">
      <h2 style={{...styles.sectionTitle, textAlign: 'center'}} className="animate-on-scroll">{title}</h2>
      <div className="carousel-container animate-on-scroll">
        <div className="carousel-track" style={{ animationDuration: `${animationDuration}s` }}>
          {/* We map the members array twice for the infinite loop effect */}
          {[...members, ...members].map((member, index) => (
            <div className="person-card" key={index}>
              <img src={member.photoUrl} alt={member.name} className="person-photo" />
              <h3 className="person-name">{member.name}</h3>
              <p className="person-post">{member.post}</p>
            </div>
          ))}
        </div>
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
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"fill="none">
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

  const sponsors = [
    'https://cdn.worldvectorlogo.com/logos/google-2015.svg',
    'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg',
    'https://cdn.worldvectorlogo.com/logos/meta-1.svg',
    'https://cdn.worldvectorlogo.com/logos/netflix-2.svg',
    'https://cdn.worldvectorlogo.com/logos/samsung-4.svg',
    'https://cdn.worldvectorlogo.com/logos/red-bull-1.svg',
    'https://cdn.worldvectorlogo.com/logos/state-bank-of-india-1.svg',
  ];

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
              An IIT Mandi celebration of India's vibrant cultural tapestry.
            </p>
            <button style={styles.ctaButton} className="cta-button">Explore the Fest</button>
          </div>
        </div>
      </header>

      {/* ===== About Section ===== */}
      <section id="about" style={styles.section}>
        <div className="card animate-on-scroll">
          <h2 style={styles.sectionTitle}>Why IIT Mandi?</h2>
          <p style={styles.sectionText}>
            IIT Mandi lies at a unique confluence of culture, consciousness, and capability. Nestled in the heart of Himachal — in Mandi (Chhoti Kāśī), at the feet of Parāśara Muni, the sage who gave us the Viṣṇu Purāṇa and the Bṛhat Parāśara Horā Śāstra — the institute offers an ideal setting to reclaim indigenous production systems and embed them within futuristic design frameworks.The Kullhad Economy Festival reflects IIT Mandi's deeper commitment — not merely to be a centre of knowledge, but to serve as a civilisational catalyst, shaping India's economic and ecological future from the roots upward.
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
        <h2 style={{...styles.sectionTitle, textAlign: 'center'}} className="animate-on-scroll">The KEF Experience</h2>
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
      <TeamCarousel title="Student Council" members={studentCouncilData} styles={styles} />
      <TeamCarousel title="Advisory Board" members={advisoryBoardData} styles={styles} />
      <TeamCarousel title="Organizing Committee" members={organizingCommitteeData} styles={styles} />

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} KEF - IIT Mandi | Celebrating Unity in Diversity</p>
      </footer>
      
      {/* SVG Definitions for gradients */}
      <svg width="0" height="0" style={{position: 'absolute'}}>
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
    backgroundColor: '#FFFBEF',
    color: '#4E342E',
    fontFamily: "'Inter', sans-serif",
    backgroundImage: "url('https://www.transparenttextures.com/patterns/light-paper-fibers.png')",
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 3rem',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: 'rgba(255, 251, 239, 0.85)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
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
    color: '#4E342E',
  },
  navbarNav: {
    listStyle: 'none',
    display: 'flex',
    gap: '3rem',
    margin: 0,
    padding: 0
  },
  heroSection: {
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem',
    position: 'relative',
    overflow: 'hidden',
  },
  heroContent: {},
  heroSubtitle: {
    fontSize: '1.5rem',
    maxWidth: '600px',
    margin: '1.5rem auto 2.5rem auto',
    color: '#6D4C41',
  },
  ctaButton: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '1rem',
    fontWeight: '600',
    color: '#FFFFFF',
    background: 'linear-gradient(45deg, #FF9933, #FFB74D)',
    border: 'none',
    borderRadius: '50px',
    padding: '1rem 2.5rem',
    cursor: 'pointer',
  },
  section: {
    padding: '80px 40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontFamily: "'Cinzel Decorative', serif",
    fontSize: '2.8rem',
    color: '#4E342E',
    marginBottom: '2rem',
  },
  sectionText: {
    fontSize: '1.1rem',
    lineHeight: 1.8,
    color: '#6D4C41',
    maxWidth: '800px',
    margin: '0 auto',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2.5rem',
  },
  footer: {
    padding: '2.5rem',
    textAlign: 'center',
    color: '#6D4C41',
    backgroundColor: '#FFFFFF',
    marginTop: '60px',
    boxShadow: '0 -5px 20px rgba(0, 0, 0, 0.05)',
  },
};

export default KEFAboutUsPage;