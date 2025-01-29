import React from 'react'
import './CNC_controller.css'
import Delem from './Delem'
import Cybelic from './Cybelic'
import bg_img from './Imges/bg_for_controller.png'
import delem_img from './Imges/img_for_delem.png'
import cybelic_img from './Imges/cybelec_img.png' 
import step_img from './Imges/img_for_step.png'
import std_component from './Imges/img_for_std_compo.png'

const CNC_Controller = () => {
  return (
    <div>
      <div className='conroller_main_controller'>
        <img src={bg_img} />

        <div className='delem_Cybelic_part'>

          {/* delem_part */}
          <div className='delem_part'>
            <div className='delem_desc'>
              <p id='machine_text_label'>DELEM</p>
              <button id='label_btn'>View</button>
            </div>
            <img src={delem_img} />
          </div>

          {/* cybellic_part */}
          <div className='cybelic_div'>
            <div className='cybelic_desc'>
              <p id='machine_text_label'>CYBELEC</p>
              <button id='label_btn'>View</button>
            </div>
            <img src={cybelic_img} />
          </div>
          
        </div>

      </div>
      <div className='conroller_main_controller'>
        <img src={bg_img} />
        <div className='delem_Cybelic_part'>

          {/* delem_part */}
          <div className='delem_part'>
            <div className='delem_desc'>
              <p id='machine_text_label'>STEP</p>
              <button id='label_btn'>View</button>
            </div>
            <img src={step_img} />
          </div>

          {/* cybellic_part */}
          <div className='cybelic_div'>
            <div className='cybelic_desc'>
              <p id='machine_text_label'>Standard Components</p>
              <button id='label_btn'>View</button>
            </div>
            <img src={std_component} />
          </div>
          
        </div>

      </div>
    </div>


  )
}

export default CNC_Controller