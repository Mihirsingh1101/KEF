import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Your existing components and pages
import GifIntro from './components/GifIntro';
import MainPage from './components/MainPage';
import './App.css';

import Aboutpage from './pages/Aboutpage';
import Overview from './pages/Overview';
import Objectives from './pages/Objectives';
import KeyFeatures from './pages/KeyFeatures';
import SchedulePage from './pages/SchedulePage';

import Navbar from './components/Navbar';
import Content from './pages/Content';

// 1. Import your new CulturalFooter component
import Footer from './pages/Footer' // Make sure the path is correct

function AnimatedRoutes() {
  const location = useLocation();
  // Set initial state based on whether it's the very first load of the homepage
  const [isLoading, setIsLoading] = useState(sessionStorage.getItem('introPlayed') !== 'true' && location.pathname === "/");

  useEffect(() => {
    // Only show the intro GIF on the first visit to the homepage during a session
    if (location.pathname === "/" && sessionStorage.getItem('introPlayed') !== 'true') {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('introPlayed', 'true'); // Mark intro as played for this session
      }, 4000); // Match GIF duration
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <GifIntro key="intro" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <main style={{ flex: '1 0 auto' }}> {/* Optional: helps with sticky footer layout */}
            <Routes location={location} key={location.pathname}>
              {/* Main scrolling page */}
              <Route
                path="/"
                element={
                  <>
                    <section id="main">
                      <MainPage />
                    </section>
                    <section id="overview">
                      <Overview />
                    </section>
                    <section id="objectives">
                      <Objectives />
                    </section>
                    <section id="key-features">
                      <KeyFeatures />
                    </section>
                  </>
                }
              />

              {/* Other page routes */}
              <Route path="/about" element={<Aboutpage />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/content" element={<Content />} /> {/* Corrected path to be lowercase */}
            </Routes>
          </main>
          
          {/* 2. Add the CulturalFooter component here */}
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> {/* Optional: styles for sticky footer */}
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;