import React from 'react';
import './App.css';

import Overview from './pages/Overview';
import Objectives from './pages/Objectives';
import KeyFeatures from './pages/KeyFeatures';


function App() {
  return (
    <div className="App">
      <main>
        <Overview />
        <Objectives />
        <KeyFeatures />
      </main>
    </div>
  );
}

export default App;
