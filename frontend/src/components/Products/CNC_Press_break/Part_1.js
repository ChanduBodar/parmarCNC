import React from 'react'
import './Part_1.css'
import './CNC_press_break.css'
const Part_1 = () => {
    return (
        <div>
            {/* Main Part Start 1 */}
            <div className="ba_img">
                <img src={require("./images/istockphoto-1243283657-612x612.png")} alt="CNC Press Brake" />
                <div className="img_t_part">
                    <div className='lable_taging'>
                        <button className="CNC_b_t_n">CNC PRESS BRAKE</button>
                    </div>

                    <div className='machne_image'>
                        <img src={require("./images/Group 117.png")} alt="Catalog" id="big_img" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Part_1