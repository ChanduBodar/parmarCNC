import React from 'react'
import './CNC_press_break.css'

import { useNavigate } from 'react-router-dom';

const Part_3 = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/rear_cylinder_hydraulic_press_brake_machine');
  };
  return (
    <div>
      <div className='machine_parent_div'>
        <div className="machine_main_div_2">
          <img src={require("./images/Group 98.png")} alt="CNC Press Brake Machine" />
          <div className="btn_and_img_div_2">

            <img id='machine_img' src={require("./images/PNCPBR1030_Rear_cylinder_press_brake-removebg-preview 1.png")} alt="Catalog" />

            <div className='machine_desc_2'>
              <p id="machine_label_2">Rear Cylinder Hydraulic Press Brake Machine</p>
              <button id='view_2' onClick={handleRedirect}>VIEW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Part_3