import React from 'react'

import '../CNC_Press_break/CNC_press_break.css'

const Shering_1 = () => {
    return (
        <div>
            <div className="machine_main_div_2">
                <img src={require("./Sherimg_images/shering_bg.png")} alt="CNC Press Brake" />
                <div className="btn_and_img_div">
                   
                    <p id='main_machine_label'>SHEARING MACHINE</p>

                    
                    <img id='machine_img' src={require("./Sherimg_images/sharing_machine_img.png")} alt="Catalog"  />
                

                </div>
            </div>
        </div>
    )
}

export default Shering_1