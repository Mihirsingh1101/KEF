import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <h3>Kullhad Economy Festival</h3>
            <p>Celebrating tradition, sustainability, and craftsmanship</p>
          </div>
          <div className="social-icons">
            <div className="social-icon">📘</div>
            <div className="social-icon">📷</div>
            <div className="social-icon">🐦</div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Kullhad Economy Festival. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
