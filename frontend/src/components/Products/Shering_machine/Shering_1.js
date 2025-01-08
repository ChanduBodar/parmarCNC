import React from 'react'
import './Shering_1.css'

const Shering_1 = () => {
    return (
        <div>
            <div className="back_img">
                <img src={require("./Sherimg_images/istockphoto-1243283657-612x612.png")} alt="CNC Press Brake" />
                <div className="img_text_part">
                    <div className="l_part">

                        <p>
                            <button >
                                SHEARING MACHINE
                            </button>
                        </p>
                    </div>
                    <div className="ri_part">
                        <img src={require("./Sherimg_images/Group 118.png")} alt="Catalog" id="big_img" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shering_1