import React from 'react';
import './contect_us.css'

const HeroContainer = ({ heroData }) => {
  return (
    <div className="hero-section">
                  <div 
                    className="hero-background"
                    style={{
                      backgroundImage: `url(${heroData.image})`,
                    }}
                  >
                    {/* <div className="hero-overlay"></div> */}
                  </div>
                  <div className="hero-content">
                    <h1 className="hero-title animate-fade-in">CONTACT US</h1>
                  </div>
      </div>
  );
};

export default HeroContainer;
