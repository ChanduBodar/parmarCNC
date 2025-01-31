import React from 'react'
import './Edge_series.css'
import firstImage from "./images_for_main_page/parmar_catalog[1]222 2.png";
import media_1 from '../Media_buttons/Media_images/Group 119.png'
import media_2 from '../Media_buttons/Media_images/Group 120.png'
import media_3 from '../Media_buttons/Media_images/Group 121.png'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/download');
  };
  return (
    <div>

      <div className='cnc_hero_section'>
        <img id='cnc_logo_img' src={firstImage} />

        <div className='cnc_text_section'>
          <div className='cnc_description'>
            <p id='CNC_label_text'>
              CNC PRESS BRAKE MACHINE EDGE SERIES
            </p>
            <p id='CNC_sub_label_text'>
              Capacity : 40 Ton x 1000mm to 400 Ton x 4000mm
            </p>
          </div>

          <div className='media_buttons'>
            <img id='md_btn' src={media_1}></img>
            <img id='md_btn' src={media_2}></img>
            <img id='md_btn' src={media_3} onClick={handleRedirect} />

          </div>

        </div>

      </div>
    </div>
  )
}

export default Hero