import React from 'react';
import './KeyFeatures.css';

// Import images
import Workshop from '../assets/Workshop.png';
import CulturalPerformance from '../assets/CulturalPerformance.jpg';
import FestivalItems from '../assets/festivalitems.png';

const KeyFeatures = () => {
  const features = [
    {
      number: '01',
      title: 'Artisan Market',
      description: 'Browse authentic handcrafted kullhads and pottery',
      image: FestivalItems
    },
    {
      number: '02',
      title: 'Cultural Performances',
      description: 'Enjoy traditional dance and music celebrations',
      image: CulturalPerformance
    },
    {
      number: '03',
      title: 'Workshop Sessions',
      description: 'Learn pottery techniques from master artisans',
      image: Workshop
    }
  ];

  return (
    <section id="key-features" className="key-features">
      <div className="container">
        <h2 className="section-title">
          Key Features
          <div className="title-underline"></div>
        </h2>
        
        <div className="card__container">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`animated-card card-${index + 1}`} 
              tabIndex="0"
              role="button"
              aria-label={`Feature: ${feature.title}`}
            >
              <div className="card-content">
                <div className="feature-number">{feature.number}</div>
                <div 
                  className="feature-image-cover" 
                  style={{
                    backgroundImage: `url(${feature.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="image-overlay"></div>
                </div>
                <div className="feature-text-content">
                  <h3 className="feature-title">
                    {feature.title}
                  </h3>
                  <p className="feature-description">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
