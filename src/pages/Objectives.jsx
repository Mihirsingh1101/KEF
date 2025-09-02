import React, { useEffect, useRef, useState } from 'react';
import './Objectives.css';
import clayVesselImg from '../assets/Clayvessels.png';
import communityImg from '../assets/Community.png';
import regionalArtImg from '../assets/Regionalart.png';
import natureFriendlyImg from '../assets/nature friendly.png';

const Objectives = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const timelineRef = useRef(null);

  const objectives = [
    {
      image: clayVesselImg,
      title: 'Promote Core Philosophy',
      text: 'Foster awareness about sustainable practices and the environmental benefits of using traditional clay vessels over plastic alternatives.',
      side: 'left'
    },
    {
      image: communityImg,
      title: 'Community Platform',
      text: 'Create a collaborative space where artisans, entrepreneurs, and community members can connect, share knowledge, and build lasting partnerships.',
      side: 'right'
    },
    {
      image: regionalArtImg,
      title: 'Showcase Regional Work',
      text: 'Highlight the diverse pottery traditions and craftsmanship from different regions, celebrating the rich cultural heritage of clay artistry.',
      side: 'left'
    },
    {
      image: natureFriendlyImg,
      title: 'Environmental Impact',
      text: 'Reduce plastic waste by promoting eco-friendly clay alternatives that are biodegradable and support a circular economy for sustainable living.',
      side: 'right'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => {
              if (!prev.includes(cardIndex)) {
                return [...prev, cardIndex].sort((a, b) => a - b);
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="objectives" className="objectives">
      <div className="container">
        <h2 className="section-title">
          Objectives
          <div className="title-underline"></div>
        </h2>
        
        <div className="timeline" ref={timelineRef}>
          {objectives.map((objective, index) => (
            <div 
              key={index} 
              className={`timeline-item ${objective.side} ${visibleCards.includes(index) ? 'show' : ''}`}
              data-index={index}
            >
              <div className="timeline-content">
                <div className="objective-image-container">
                  <img 
                    src={objective.image} 
                    alt={objective.title}
                    className="objective-image"
                  />
                </div>
                <h3 className="timeline-title">
                  {objective.title}
                </h3>
                <p className="timeline-text">
                  {objective.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
