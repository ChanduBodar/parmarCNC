import React from 'react'
import './Excellernce.css'

const Excellernce = () => {
    return (
        <div>
            <div className="Excellence_part">
                <div className='our_label'>
                  <p>Our Excellence</p>
                </div>
                
                    <div className="ex_img">
                        <div className="ex_img_1">
                            <img src={require("./Frame27_images/image 36.png")} alt="" />
                            <div className="ex_label">
                                <p>Back Gauge</p>
                            </div>
                        </div>
                        <div className="ex_img_1">
                            <img src={require("./Frame27_images/image 37.png")} alt="" />
                            <div className="ex_label">
                                <p>Automatic Blade gap system</p>
                            </div>
                        </div>
                        <div className="ex_img_1">
                            <img src={require("./Frame27_images/parmar_18 1.png")} alt="" />
                            <div className="ex_label">
                                <p>Automatic sheet 2 stop sheet support</p>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default Excellernce