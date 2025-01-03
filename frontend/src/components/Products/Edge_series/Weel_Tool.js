import React from 'react'
import './Weel_Tool.css'
import i_27 from './images_for_main_page/image 27.png'
import i_28 from './images_for_main_page/image 28.png'

const Weel_Tool = () => {
    return (
        <div>
            <div className="wila_tool_holder">
                <div className="tag_name">
                    <p>Wila Tool Holder</p>
                </div>

                <div className="will_imgs">
                    <div className="im-1">
                        <img src={i_27} alt="Wila Tool Holder 1" />
                        <p>Wila style hydraulic/Pneumatic/Manual with anti deflection system</p>
                    </div>
                    <div className="im-1">
                        <img src={i_28}alt="Wila Tool Holder 2" />
                        <p>Wila style hydraulic/Pneumatic/Manual with anti deflection system</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weel_Tool