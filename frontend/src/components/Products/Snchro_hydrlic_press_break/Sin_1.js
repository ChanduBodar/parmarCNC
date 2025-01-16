import React from 'react'
import './Sin1.css'

import cncPressImg from './images_for_main_page/3200x160 tone (6+1axis) at Ms.Bobst India Pune 2.png'

import Media_buttons from '../Media_buttons/Media_buttons';
const Sin_1 = () => {
    return (
        <div>
            <div className='hero_section'>
                <img  id='sn_img' src={cncPressImg} />
                <div className='hero_text_section'>
                    <div className='hero_img_section'>
                        <div className='machine_description'>
                            <p id='main_text'>
                                CNC PRESS BRAKE MACHINE EDGE SERIES
                            </p>
                            <p id='sub_text'>
                                Capacity : 40 Ton x 1000mm to 400 Ton x 4000mm
                            </p>
                        </div>

                        <Media_buttons />


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sin_1