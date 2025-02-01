// src/HomePage.js

import React from "react";
import { useNavigate } from 'react-router-dom';
import { heroData, textContent1,textContent2,textContent3, images, overlapData } from '../../Data_Folders/Homedata'; // Import data

import './home.css';


function HomePage() {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero_box">
        <div className="hero_image">
          <img src={heroData.heroImage} alt="Hero" />
        </div>
        <div className="hero_text">
          <h1>{heroData.title}</h1>
          <h3>{heroData.subtitle}</h3>
        </div>
        <button className="hero_button" onClick={() => handleRedirect('/products')}>LEARN MORE</button>
      </div>

      {/* Image Box Section */}
      <div className="two_name_container">
        <img src={images.imageBox1} alt="img" />
        <img src={images.imageBox2} alt="img" />
      </div>

      {/* Text Section */}
      <div className="text_container">
        <p>{textContent1}</p> <br/>
        <p>{textContent2}</p> <br/>
        <p>{textContent3}</p>
      </div>

      {/* Overlap Image Section */}
      <div className="over_lap_class">

        {overlapData.map((item, index) => (
          <div className="overlap_1" key={index}>
            <img src={item.image} alt={item.text} />
            <div className="side_of_text">
              <p>{item.text}</p>
              
                <button id="learn_more_btn" onClick={() => handleRedirect(item.redirectPath)}>{item.buttonText}</button>
              
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default HomePage;
