import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import GifIntro from './components/GifIntro';
import MainPage from './components/MainPage';
import './App.css';

function App() {
  // State to track if we are in the intro loading phase
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for a few seconds (e.g., 4 seconds) then hide the intro
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Adjust time to match your GIF length

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        {isLoading && <GifIntro key="intro" />}
      </AnimatePresence>
      {!isLoading && <MainPage />}
    </div>
  );
}

export default App;