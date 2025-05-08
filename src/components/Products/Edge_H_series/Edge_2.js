import React from 'react'

import Datapart from '../Edge_series/Datapart'
import firstImage from './images_for_main_page/CNC Press Brake 6000x800tone 4.png'

const Edge_2 = () => {
    return (
        <div>
            <div className='img_and_data'>
                <Datapart />
                <img src={firstImage} alt="Second Part Image" />
            </div>
            <div className="border_line"></div>

        </div>


    )
}

export default Edge_2