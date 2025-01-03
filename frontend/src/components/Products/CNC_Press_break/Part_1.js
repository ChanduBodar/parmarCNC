import React from 'react'
import './Part_1.css'
const Part_1 = () => {
  return (
    <div>
         {/* Main Part Start 1 */}
         <div className="back_img">
                    <img src={require("./images/istockphoto-1243283657-612x612.png")} alt="CNC Press Brake" />
                    <div className="img_text_part">
                        <div className="left_part">

                            <p>
                                <button >CNC PRESS BRAKE</button>
                            </p>
                        </div>
                        <div className="right_part">
                            <img src={require("./images/Group 117.png")} alt="Catalog" id="big_img" />

                        </div>
                    </div>
        </div>
    </div>
  )
}

export default Part_1