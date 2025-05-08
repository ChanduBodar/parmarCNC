import React from 'react'

import './Snchro.css'
import cncPressImg from './images_for_main_page/3200x160 tone (6+1axis) at Ms.Bobst India Pune 2.png'

import media_1 from '../Media_buttons/Media_images/Group 119.png'
import media_2 from '../Media_buttons/Media_images/Group 120.png'
import media_3 from '../Media_buttons/Media_images/Group 121.png'
import { useNavigate } from 'react-router-dom'

const Sin_1 = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
      navigate('/download');
    };
    return (
        <div>
            <div className='cnc_hero_section'>
                <img id='snchro_img' className='press_break_machine' src={cncPressImg} />
                
                    <div className='cnc_text_section'>
                        <div className='cnc_description'>
                            <p id='CNC_label_text'>
                             EDGE SERIES SYNCHRO HYDRAULIC PRESS BRAKE
                            </p>
                            <p id='CNC_sub_label_text'>
                                Capacity : 40 Ton x 1000mm to 400 Ton x 4000mm
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

export default Sin_1