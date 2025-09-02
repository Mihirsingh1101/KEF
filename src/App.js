import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import GifIntro from './components/GifIntro';
import MainPage from './components/MainPage';
import './App.css';

// Sections
import Overview from './pages/Overview';
import Objectives from './pages/Objectives';
import KeyFeatures from './pages/KeyFeatures';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Adjust to GIF duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        {isLoading && <GifIntro key="intro" />}
      </AnimatePresence>

      {!isLoading && (
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
      )}
    </div>
  );
}

export default App;
