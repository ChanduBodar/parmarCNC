import React from 'react'
import './CNC_controller.css'
import delem_img from './Imges/delem.png'
import cybelic_img from './Imges/cybelic.png' 
import step_img from './Imges/step.png'
import std_component from './Imges/starndard_img.png'
import { useNavigate } from 'react-router-dom'

const CNC_Controller = () => {
  const navigate = useNavigate();

  const handlerDelem = () => {
    navigate('/delem'); 
  };
  const handlerCybelic = () => {
    navigate('/cybelic'); 
  };
  const handlerStep = () => {
    navigate('/step'); 
  };
  const handlerStandardComponent = () => {
    navigate('/standard_components'); 
  };
  return (
    <div>
      <div className='conroller_main_controller'>
        <p id='cnc_label'>
            CNC CONTROLLER
        </p>
     
        <div className='delem_Cybelic_part'>

          {/* delem_part */}
          <div className='delem_part'>
          <img src={delem_img} />
            <div className='delem_desc'>
              <p id='machine_text_label'>DELEM</p>
              <button id='label_btn' onClick={handlerDelem}>View</button>
            </div>
            
          </div>

          {/* cybellic_part */}
          <div className='cybelic_div'>
          
            <div className='cybelic_desc'>
              <p id='machine_text_label'>CYBELEC</p>
              <button id='label_btn' onClick={handlerCybelic}>View</button>
            </div>
            <img src={cybelic_img} />
            
          </div>
          
        </div>

      </div>
      <div className='conroller_main_controller'>
       
        <div className='delem_Cybelic_part'>

        {/* step */}
          <div className='delem_part'>
          <img src={step_img} />
            <div className='delem_desc'>
              <p id='machine_text_label'>STEP</p>
              <button id='label_btn'onClick={handlerStep}>View</button>
            </div>
            
            
          </div>

          {/* standard components */}
          <div className='cybelic_div'>
            
            <div className='cybelic_desc'>
              <p id='machine_text_label'>STANDARD COMPONENTS</p>
              <button id='label_btn' onClick={handlerStandardComponent}>View</button>
            </div>
            <img src={std_component} />
            
          </div>
          
        </div>

      </div>
    </div>


  )
}

export default CNC_Controller