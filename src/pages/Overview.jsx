import React, { useEffect, useState } from 'react';
import './Overview.css';
import womanPotteryImage from '../assets/Womanclaypot.png';
import manPotteryImage from '../assets/Manpotmaking.png';

const Overview = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="overview" className="overview">
      <div className="overview-container">
        {/* Left Section - Text Content */}
        <div className="text-section">
          <div className="mud-texture-bg">
            <h1 className="main-heading">
              Do you have any clay pots in your home?
            </h1>
            <div className="description-container">
              <p className="description-text">
                Clay or ceramic pieces can be found in many different places in the home. From your kitchen bowls to your garden pots, clay is a versatile and popular material.
              </p>
            </div>
          </div>
        </div>

        {/* Curved Divider */}
        <div className="curved-divider">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 Q50,100 100,0 L100,100 L0,100 Z" fill="var(--kef-cream)" />
          </svg>
        </div>

        {/* Right Section - Images */}
        <div className="images-section">
          <div className="images-container">
            <div className={`pot-image-wrapper ${isVisible ? 'animate' : ''}`}>
              <img
                src={womanPotteryImage}
                alt="Woman making clay pot"
                className="pot-image woman-pot"
              />
            </div>
            <div className={`pot-image-wrapper ${isVisible ? 'animate' : ''} delay-1`}>
              <img
                src={manPotteryImage}
                alt="Man making pottery"
                className="pot-image man-pot"
              />
            </div>
          </div>

          {/* Additional Content */}
          <div className="overview-mission">
            <h2 className="section-title">
              Overview
            </h2>
            <div className="title-underline"></div>
            <div className="mission-content">
              <p className="mission-text">
                The Kullhad Economy Festival (KEF) is more than a festival — it is a movement for economic and cultural renewal.
                For decades, the world has been driven by an extractive and marketing-led consumerist model — fast food, fast fashion, fast construction to name a few — built for repeat sales rather than enduring value. This has created debt, resource exhaustion, and social alienation.
                KEF introduces an alternative: the Kullhad Economy. Drawing on Dharmic principles, ancient and Vedic techniques, and India’s grassroots wisdom, it champions production-driven economies that are:
                Decentralised, empowering local producers and villages.
                Sustainable, in harmony with nature and time-tested traditions.
                Future-ready, blending tradition with cutting-edge technology.
                Here, a potter’s wheel and a 3D printer don’t compete — they co-create the same dream of lasting value.
              </p>
              <p className="mission-text">
                Our mission is to revive the kullhad culture, support local artisans, and create awareness about eco-friendly alternatives to plastic containers. Join us in this journey of preserving heritage while building a sustainable future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
