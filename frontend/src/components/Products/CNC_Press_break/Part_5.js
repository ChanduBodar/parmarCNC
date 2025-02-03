import React from 'react'
import './CNC_press_break.css'
import { useNavigate } from 'react-router-dom';

const Part_5 = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/Synchro_hydrelic'); // Navigate to '/child' page
  };
  return (
  
      <div>
      <div className='machine_parent_div'>
        <div className="machine_main_div">
        <img  src={require("./images/Group 98.png")} alt="CNC Press Brake Machine" />
          <div className="btn_and_img_div" id='part_5_div' >

          <img id="part_5_img" src={require("./images/3200x160_tone__6+1axis__at_Ms.Bobst_India_Pune-removebg-preview 1.png")} alt="Catalog"  />

            <div className='machine_desc'>
              <p id='machine_label' >EDGE SERIES SYNCHRO HYDRAULIC PRESS BRAKE</p>
              <button id='view' onClick={handleRedirect}>VIEW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  
  )
}

export default Part_5