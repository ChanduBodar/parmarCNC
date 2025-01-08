import React from 'react'
import './Media_buttons.css'
import media_1 from './Media_images/Group 119.png'
import media_2 from './Media_images/Group 120.png'
import media_3 from './Media_images/Group 121.png'
import { useNavigate } from 'react-router-dom'


const Media_buttons = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
      navigate('/download');
    };
  return (
    <div className='media_section'>
        <img src={media_1}></img>
        <img src={media_2}></img>
        <img src={media_3} onClick={handleRedirect}/>
    </div>
  )
}

export default Media_buttons