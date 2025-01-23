import React from 'react'
import './Standard_Components.css'
import  im_23 from './images_for_main_page/image 23.png'
import  im_24 from './images_for_main_page/image 24.png'
import  im_25 from './images_for_main_page/image 25.png'
import  im_26 from './images_for_main_page/image 26.png'


export const Standard_Components= () => {
  return (
    <div>
        <div>
      {/* STANDARD COMPONENTS part */}
      <div className="standard">
        <p>STANDARD COMPONENTS</p>
      </div>

      <div className="tool_holder_part">
        <div className="de_text">
          <p>Tool Holder</p>
        </div>

        <div className="img_pa">
          <div className="img_container">
            <img src={im_23}alt="" />
            <p>Single way quick clamp with manual anti deflection system</p>
          </div>

          <div className="img_container">
            <img src={im_24} alt="" />
            <p>Two way quick clamp with manual anti deflection system</p>
          </div>

          <div className="img_container">
            <img src={im_25}alt="" />
            <p>One way quick clamp with click with anti deflection system</p>
          </div>

          <div className="img_container">
            <img src={im_26} alt="" />
            <p>Two way quick clamp with click with reflection system</p>
          </div>
        </div>

        {/* Border lines */}
      
        <div className="second_border">
            
        </div>
      </div>
    </div>
    </div>
  )
}

