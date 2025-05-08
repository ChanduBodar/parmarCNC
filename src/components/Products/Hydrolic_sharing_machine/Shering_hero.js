import React from 'react'
import './Hydrolic_sahring.css'
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
      <div className="cnc_hero_section">
        <img id='cnc_logo_img' src={firstImage} alt="First Image" />

        {/* Right part */}
        <div className='cnc_text_section'>
            
              <div className='cnc_description'>
                <p id='CNC_label_text'>
                VARIABLE RACK ANGLE HYDRAULIC SHEARING MACHINE
                </p>
                <p id='CNC_sub_label_text'>
                    CNC SERIES
                </p>
              </div>
                
                <div className='media_buttons'>
                                     <img id='md_btn' src={media_1}></img>
                                     <img id='md_btn' src={media_2}></img>
                                     <img id='md_btn' src={media_3} onClick={handleRedirect}/>
                                 
                </div>   
                

          
        </div>
      </div>
      
    </div>
  )
}

export default Shering_hero