import React from 'react'
import './Hydrolic_sahring.css'

const Shering_com = () => {
    return (
        <div>
      
                <p id='shearing_label'>SHEARING CONTROLLER</p>
            

            <div className="sharig_images">
            {/* img_1 */}
            <div className="image_div">
                <div className='im_label'>
                    <img className="i_sharing" src={require("./Frame27_images/Group 122.png")} alt="Cyb Touch 8W" />
                    <div className="d_label">
                        <p>Cyb Touch 8W</p>
                    </div>
                </div>
                <div className="shering_data">
                    <ul>
                        <li>Intuitive and user-friendly interface.</li>
                        <li>Large, vivid, and high-contrast touchscreen.</li>
                        <li>Clear display, large keys, simple pages displaying all the information the operator needs.</li>
                        <li>Very simple cuts with EasyCut page.</li>
                        <li>Programming allows efficient mass-production of complex cuts.</li>
                        <li>Online help and warming pop-ups make it a very user-friendly software.</li>
                    </ul>
                </div>
            </div>

            {/* img_2 */}
            <div className="image_div">

                <div className='im_label'>
                    <img className="i_sharing" src={require('./Frame27_images/Group 123.png')} alt="Cyb Touch 12G" />
                    <div className="d_label">
                        <p>Cyb Touch 12G</p>
                    </div>
                </div>



                <div className="shering_data">
                    <ul>
                        <li>High-contrast touchscreen with vivid colors.</li>
                        <li>Simple pages, large keys, clear display with all the information the operator needs.</li>
                        <li>Intuitive and user-friendly interface.</li>
                        <li>Complete programming of parts in seconds.</li>
                        <li>Quick set up of the machine with the EasyCut page.</li>
                        <li>Contextual help and warning pop-up.</li>
                    </ul>
                </div>
            </div>

            {/* img_3 */}
            <div className="image_div">
                <div className='im_label'>
                    <img className="i_sharing" src={require("./Frame27_images/Group 124.png")} alt="DAC 360T" />
                    <div className="d_label">
                        <p>DAC 360T</p>
                    </div>
                </div>

                <div className="shering_data">
                    <ul>
                        <li>Panel-based housing.</li>
                        <li>Bright LCD screen.</li>
                        <li>Back gauge control.</li>
                        <li>Retract function.</li>
                        <li>Cutting angle or gap control.</li>
                        <li>Stroke length limitation.</li>
                        <li>Manual movement of axes.</li>
                        <li>Stock count.</li>
                    </ul>
                </div>
            </div>
        </div></div>
    )
}

export default Shering_com
