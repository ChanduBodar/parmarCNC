import React from 'react'
import './Hero.css'
import firstImage from "./images_for_main_page/parmar_catalog[1]222 2.png";
import cncPressImg from "./images_for_main_page/Group 18.png";
import third_img from './images_for_main_page/Group 121.png'
import first_logo from './images_for_main_page/Group 119.png';
import second_logo from './images_for_main_page/Group 120.png';
import Media_buttons from '../Media_buttons/Media_buttons';

const Hero = () => {
  return (
    <div>
    
      <div className='hero_section'>
        <img src={firstImage}/>
        <div className='hero_text_section'>
            <div className='hero_img_section'>
                <img src={cncPressImg}/>
                
                  <Media_buttons/>
                

            </div>
        </div>
      </div>
  
    </div>
  )
}

export default Hero