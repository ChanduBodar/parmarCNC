import React from 'react'
import './Sin1.css'

import cncPressImg from './images_for_main_page/3200x160 tone (6+1axis) at Ms.Bobst India Pune 2.png'
import firstImage from './images_for_main_page/Group 18.png'
import Media_buttons from '../Media_buttons/Media_buttons';
const Sin_1 = () => {
    return (
        <div>
            <div className="S_1_part">
                <img src={cncPressImg} alt="CNC Press" />


                
                <div className="my_images_part">
                    <img src={firstImage} className='tab_part' alt="First Image" />

                   <Media_buttons/>
                </div>
            </div>

        </div>
    )
}

export default Sin_1