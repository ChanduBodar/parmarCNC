import React from 'react';
import './contect_us.css'

const HeroContainer = ({ heroData }) => {
  return (
    <div>
      <div className="hero_container">
        <div className="hero_image">
          <img src={heroData.image} alt="Hero" />
        </div>
        <p id="des_text">{heroData.title}</p>
      </div>
    </div>
  );
};

export default HeroContainer;
