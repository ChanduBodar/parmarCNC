import React from 'react'
// import './Shering_1.css'
import '../CNC_Press_break/Part_1.css'

const Shering_1 = () => {
    return (
        <div>
            <div className="ba_img">
                <img src={require("./Sherimg_images/istockphoto-1243283657-612x612.png")} alt="CNC Press Brake" />
                <div className="img_t_part">
                    <div className='lable_taging'>
                        <button className="CNC_b_t_n">SHEARING MACHINE
                        </button>
                    </div>

                    <div className='machne_image'>
                        <img src={require("./Sherimg_images/Group 118.png")} alt="Catalog" id="big_img" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Shering_1