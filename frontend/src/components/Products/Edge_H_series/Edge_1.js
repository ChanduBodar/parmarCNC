import React from 'react'
import './Edge_1.css'
import cncPressImg from './images_for_main_page/Group 18.png'
import firstImage from './images_for_main_page/CNC Press Brake 6000x800tone 3.png'
import Media_buttons from '../Media_buttons/Media_buttons';


const Edge_1 = () => {
  return (
    <div>
          <div className="hero_part">
              <img src={firstImage} alt="First Image" />
        
              {/* Right part */}
              <div className="my_images">
                <img className="cnc_1" src={cncPressImg} alt="CNC Press" />
                
                <Media_buttons/>
                
                
              </div>
            </div>
    </div>
  )
}

export default Edge_1