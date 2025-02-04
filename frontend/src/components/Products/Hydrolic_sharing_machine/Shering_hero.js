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
      <div className="shering_main_part">
        <img src={firstImage} alt="First Image" />

        {/* Right part */}
        <div className='sherimg_right_part'>
            
              <div className='sharing_machine_desc'>
                <p id='sharing_main_text'>
                VARIABLE RACK ANGLE HYDRAULIC SHEARING MACHINE
                </p>
                <p id='sharig_sub_text'>
                    CNC SERIES
                </p>
              </div>
                
                <div className='sharig_media_buttons'>
                                     <img src={media_1}></img>
                                     <img src={media_2}></img>
                                     <img src={media_3} onClick={handleRedirect}/>
                                 
                </div>   
                

          
        </div>
      </div>
      
    </div>
  )
}

export default Shering_hero