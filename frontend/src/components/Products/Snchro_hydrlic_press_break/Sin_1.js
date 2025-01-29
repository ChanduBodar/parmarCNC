import React from 'react'
import './Sin1.css'

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
            <div className='sinchro_main_part'>
                <img  id='sn_img' src={cncPressImg} />
                
                    <div className='sinchro_desc_text'>
                        <div className='sinchro_label_text'>
                            <p id='sinchro_main_text'>
                             EDGE SERIES SYNCHRO HYDRAULIC PRESS BRAKE
                            </p>
                            <p id='sinchro_sub_text'>
                                Capacity : 40 Ton x 1000mm to 400 Ton x 4000mm
                            </p>
                        </div>

                         <div className='sinchro_media_button'>
                                              <img src={media_1}></img>
                                              <img src={media_2}></img>
                                              <img src={media_3} onClick={handleRedirect}/>
                                          
                        </div>


                    </div>
            
            </div>

        </div>
    )
}

export default Sin_1