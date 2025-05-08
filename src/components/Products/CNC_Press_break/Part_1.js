import React from 'react'

import './CNC_press_break.css'
const Part_1 = () => {
    return (
        <div>
            {/* Main Part Start 1 */}
            <div className="machine_main_div_2">
                <img src={require("./images/istockphoto-1243283657-612x612.png")} alt="CNC Press Brake" />
                <div className="btn_and_img_div">
                 
                        <p id="main_machine_label">CNC PRESS BRAKE</p>
                    

                   
                        <img id='machine_img' src={require("./images/Group 117.png")} alt="Catalog"/>
                    

                </div>
            </div>
        </div>
    )
}

export default Part_1