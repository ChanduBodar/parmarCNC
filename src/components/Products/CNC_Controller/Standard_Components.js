import React from 'react'
import './CNC_controller.css'
import tool_holder_1 from './Imges/Tool_Holder_1.png'
import tool_holder_2 from './Imges/Tool_Holder_2.png'
import tool_holder_3 from './Imges/Tool_Holder_3.png'
import tool_holder_4 from './Imges/Tool_Holder_4.png'
import weel_holder_1 from './Imges/weela_tool_holder_1.png'
import weel_holder_2 from './Imges/weela_tool_holder_2.png'
import Bending_tool from './Bending_tool'
import Crowing from './Crowing'
import Hydrolic from './Hydrolic'
import STD_components from './STD_components'
import Acceseries from './Acceseries'

const Standard_Components = () => {
  return (
    <div className='standard_main_components'>
      <div>
        {/* STANDARD COMPONENTS part */}
        <p id='standard_label'>STANDARD COMPONENTS</p>

        <div className="tool_holder_part">

          <p id='de_text'>Tool Holder</p>
          <div className="img_pa">
            <div className="img_container">
              <img src={tool_holder_1} alt="" />
              <p>Single way quick clamp with manual anti deflection system</p>
            </div>

            <div className="img_container">
              <img src={tool_holder_2} alt="" />
              <p>Two way quick clamp with manual anti deflection system</p>
            </div>

            <div className="img_container">
              <img src={tool_holder_3} alt="" />
              <p>One way quick clamp with click with anti deflection system</p>
            </div>

            <div className="img_container">
              <img src={tool_holder_4} alt="" />
              <p>Two way quick clamp with click with reflection system</p>
            </div>
          </div>

          {/* Border lines */}

          <div className="second_border"></div>

          {/* weela tool holder */}
          <div className="wila_tool_holder">
            
            <p id='de_text'>Wila Tool Holder</p>
             

            <div className="will_imgs">
              <div className="im-1">
                <img src={weel_holder_1} alt="Wila Tool Holder 1" />
                <p>Wila style hydraulic/Pneumatic/Manual with anti deflection system</p>
              </div>
              <div className="im-1" id='img_2_will_tool'>
                <img src={weel_holder_2} alt="Wila Tool Holder 2" />
                <p>Wila style hydraulic/Pneumatic/Manual die hold</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bending_tool/>
      <Crowing/>
      <Hydrolic/>
      <STD_components/>
      <Acceseries/>
     


    </div>
  )
}

export default Standard_Components