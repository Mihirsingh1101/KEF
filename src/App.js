import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Firebase Auth context
import { AuthProvider } from './context/AuthContext';

// Import all necessary components and pages
import GifIntro from './components/GifIntro';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import NewsTicker from './components/NewsTicker'; // 🔹 Import NewsTicker

import MainPage from './components/MainPage';
import Aboutpage from './pages/Aboutpage';
import SchedulePage from './pages/SchedulePage';
import AdvisoryBoard from './pages/AdvisoryBoard';
import Content from './pages/Content';
import Overview from './pages/Overview';
import Objectives from './pages/Objectives';
import KeyFeatures from './pages/KeyFeatures';
import Artist from './pages/Artist';

// Firebase Auth pages
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import ProtectedRoute from './pages/ProtectedRoute';

import './App.css';

function AnimatedRoutes() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(
    sessionStorage.getItem('introPlayed') !== 'true' && location.pathname === "/"
  );

  useEffect(() => {
    if (location.pathname === "/" && sessionStorage.getItem('introPlayed') !== 'true') {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('introPlayed', 'true');
      }, 4000); // match GIF duration
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
          <main style={{ flex: '1 0 auto', paddingBottom: '50px' }}> 
            {/* paddingBottom ensures content won’t overlap with ticker */}
            <Routes location={location} key={location.pathname}>
              {/* Main page with sections */}
              <Route
                path="/"
                element={
                  <>
                    <section id="main"><MainPage /></section>
                    <section id="overview"><Overview /></section>
                    <section id="objectives"><Objectives /></section>
                    <section id="key-features"><KeyFeatures /></section>
                  </>
                }
              />

              {/* Other pages */}
              <Route path="/about" element={<Aboutpage />} />
              <Route path="/schedule" element={
                <> <SchedulePage />
                  <Artist />
                </>
              } />
              <Route path="/content" element={<Content />} />
              <Route path="/advisory" element={<AdvisoryBoard />} />

              {/* Auth pages */}
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
          <NewsTicker /> {/* 🔹 Always visible at bottom */}
        </>
      )}
    </>
  );
}

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AuthProvider>
        <Router>
          <AnimatedRoutes />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
