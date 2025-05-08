import React from 'react'
import './Snchro.css'
import Datapart from '../Edge_series/Datapart'
import firstImage from './images_for_main_page/3200x160 tone (6+1axis) at Ms.Bobst India Pune 2.png'

const Sin_2 = () => {
  return (
    <div>
         <div>
            <div className='img_and_data_1'>
                <Datapart />
                <img src={firstImage} alt="Second Part Image" />
            </div>
            <div className="border_line"></div>

        </div>
    </div>
  )
}

export default Sin_2