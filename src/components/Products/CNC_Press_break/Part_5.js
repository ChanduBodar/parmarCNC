import React from 'react'
import './CNC_press_break.css'
import { useNavigate } from 'react-router-dom';

const Part_5 = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/edge_series_synchro_hydraulic_Press_Brake'); // Navigate to '/child' page
  };
  return (
  
      <div>
      <div className='machine_parent_div'>
        <div className="machine_main_div_2">
        <img  src={require("./images/Group 98.png")} alt="CNC Press Brake Machine" />
          <div className="btn_and_img_div_2" id='part_5_div' >

          <img id="machine_img_5" src={require("./images/3200x160_tone__6+1axis__at_Ms.Bobst_India_Pune-removebg-preview 1.png")} alt="Catalog"  />

            <div className='machine_desc_2'>
              <p id='machine_label_2' >EDGE SERIES SYNCHRO HYDRAULIC PRESS BRAKE</p>
              <button id='view_2' onClick={handleRedirect}>VIEW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  
  )
}

export default Part_5