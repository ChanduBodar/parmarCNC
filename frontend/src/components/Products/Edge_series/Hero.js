import React from 'react'
import './Hero.css'
import './Edge_series.css'
import firstImage from "./images_for_main_page/parmar_catalog[1]222 2.png";

import Media_buttons from '../Media_buttons/Media_buttons';

const Hero = () => {
  return (
    <div>
    
      <div className='hero_section'>
        <img src={firstImage}/>
        <div className='hero_text_section'>
            <div className='hero_img_section'>
              <div className='machine_description'>
                <p id='main_text'>
                  CNC PRESS BRAKE MACHINE EDGE SERIES
                </p>
                <p id='sub_text'>
                     Capacity : 40 Ton x 1000mm to 400 Ton x 4000mm
                </p>
              </div>
                
                  <Media_buttons/>
                

            </div>
        </div>
      </div>
  
    </div>
  )
}

export default Hero