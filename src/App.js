import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import GifIntro from './components/GifIntro';
import MainPage from './components/MainPage';
import './App.css';

import Aboutpage from './pages/Aboutpage';
import Overview from './pages/Overview';
import Objectives from './pages/Objectives';
import KeyFeatures from './pages/KeyFeatures';
import SchedulePage from './pages/SchedulePage';

import Navbar from './components/Navbar';

function AnimatedRoutes() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(location.pathname === "/");

  useEffect(() => {
    if (location.pathname === "/") {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
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

            {/* About page route */}
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/schedule" element={<SchedulePage />} />
          </Routes>
        </>
      )}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
