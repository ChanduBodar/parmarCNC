import React from 'react'
import './Shering_hero.css'
import first_logo from '../Edge_series/images_for_main_page/Group 121.png';
import second_logo from '../Edge_series/images_for_main_page/Group 119.png';
import third_img from '../Edge_series/images_for_main_page/Group 120.png';
import Media_buttons from '../Media_buttons/Media_buttons';
import firstImage from './Frame27_images/parmar_14 1.png'

const Shering_hero = () => {
  return (
    <div>
      <div className="hero_section">
        <img src={firstImage} alt="First Image" />

        {/* Right part */}
        <div className='hero_text_section'>
            <div className='hero_img_section'>
              <div className='machine_description'>
                <p id='head_text'>
                VARIABLE RACK ANGLE HYDRAULIC SHEARING MACHINE
                </p>
                <p id='sub_text'>
                    CNC SERIES
                </p>
              </div>
                
                  <Media_buttons/>
                

            </div>
        </div>
      </div>
      <div className='border_part'>

      </div>
    </div>
  )
}

export default Shering_hero