import React from 'react'
import './Hero.css'
import firstImage from "./images_for_main_page/parmar_catalog[1]222 2.png";
import cncPressImg from "./images_for_main_page/Group 18.png";
import third_img from './images_for_main_page/Group 121.png'
import first_logo from './images_for_main_page/Group 119.png';
import second_logo from './images_for_main_page/Group 120.png';

const Hero = () => {
  return (
    <div>
    
    <div className="first_part">
      <img src={firstImage} alt="First Image" />

      {/* Right part */}
      <div className="many_images">
        <img className="cnc_press_img" src={cncPressImg} alt="CNC Press" />
        <div className='logo_buttons'>
          
          <img  src={first_logo} alt="CNC Press" />
          <img  src={second_logo} alt="CNC Press" />
          <img  src={third_img} alt="CNC Press" />
        </div>
      </div>
    </div>
  
    </div>
  )
}

export default Hero