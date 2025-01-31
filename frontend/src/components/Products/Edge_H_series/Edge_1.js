import React from 'react'


import firstImage from './images_for_main_page/CNC Press Brake 6000x800tone 3.png'
import media_1 from '../Media_buttons/Media_images/Group 119.png'
import media_2 from '../Media_buttons/Media_images/Group 120.png'
import media_3 from '../Media_buttons/Media_images/Group 121.png'
import { useNavigate } from 'react-router-dom'


const Edge_1 = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/download');
  };
  return (
    <div>
      <div className="edge_H_main_part">
        <img src={firstImage} alt="First Image" />

        {/* Right part */}
        <div className='edge_H_hero_part'>

          <div className='edge_machine_description'>
            <p id='edge_main_text'>
              CNC PRESS BRAKE MACHINE EDGE H SERIES
            </p>
            <p id='edge_sub_text'>
              Capacity : 400 Ton x 4000mm to 2000 Ton x 12000mm
            </p>
          </div>

          <div>
            <div className='edge_media_button'>
              <img src={media_1}></img>
              <img src={media_2}></img>
              <img src={media_3} onClick={handleRedirect} />

            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default Edge_1