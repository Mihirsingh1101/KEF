import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GifIntro from './components/GifIntro';
import MainPage from './components/MainPage';
import './App.css';

import Aboutpage from './pages/Aboutpage';
import Overview from './pages/Overview';
import Objectives from './pages/Objectives';
import KeyFeatures from './pages/KeyFeatures';

import SchedulePage from './pages/SchedulePage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Match GIF duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        {isLoading && <GifIntro key="intro" />}
      </AnimatePresence>

      {!isLoading && (
        <Router>
          <Routes>
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
            <Route path="/Schedule" element={<SchedulePage />} />

          </Routes>
          
        </Router>
      )}
    </div>
  );
}

export default App;