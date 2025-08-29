import React from 'react';
import './App.css';
import Header from './components/Header';
import Overview from './pages/Overview';
import Objectives from './pages/Objectives';
import KeyFeatures from './pages/KeyFeatures';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Overview />
        <Objectives />
        <KeyFeatures />
      </main>
      <Footer />
    </div>
  );
}

export default App;
