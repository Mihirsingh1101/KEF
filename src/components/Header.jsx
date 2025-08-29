import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <h2>KEF</h2>
        </div>
        <nav className="nav-links">
          <a href="#overview" className="nav-link">Overview</a>
          <a href="#objectives" className="nav-link">Objectives</a>
          <a href="#key-features" className="nav-link">Key Features</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
