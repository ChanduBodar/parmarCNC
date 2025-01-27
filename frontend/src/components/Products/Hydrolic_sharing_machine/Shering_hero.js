import React from 'react'
import './Shering_hero.css'
import media_1 from '../Media_buttons/Media_images/Group 119.png'
import media_2 from '../Media_buttons/Media_images/Group 120.png' 
import media_3 from '../Media_buttons/Media_images/Group 121.png'
import firstImage from './Frame27_images/parmar_14 1.png'
import { useNavigate } from 'react-router-dom';

const Shering_hero = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/download');
  };
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
                
                <div className='media_section'>
                                     <img src={media_1}></img>
                                     <img src={media_2}></img>
                                     <img src={media_3} onClick={handleRedirect}/>
                                 
                </div>   
                

            </div>
        </div>
      </div>
      <div className='border_part'>

      </div>
    </div>
  )
}

export default Shering_hero