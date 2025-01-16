import React from 'react'
import './Edge_1.css'

import firstImage from './images_for_main_page/CNC Press Brake 6000x800tone 3.png'
import Media_buttons from '../Media_buttons/Media_buttons';


const Edge_1 = () => {
  return (
    <div>
      <div className="hero_section">
        <img src={firstImage} alt="First Image" />

        {/* Right part */}
        <div className='hero_text_section'>
            <div className='hero_img_section'>
              <div className='machine_description'>
                <p id='main_text'>
                  CNC PRESS BRAKE MACHINE EDGE H SERIES
                </p>
                <p id='sub_text'>
                     Capacity : 400 Ton x 4000mm to 2000 Ton x 12000mm
                </p>
              </div>
                
                  <Media_buttons/>
                

            </div>
        </div>
      </div>
    </div>
  )
}

export default Edge_1