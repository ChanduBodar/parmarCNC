import React from 'react'
import './CNC_press_break.css'

import { useNavigate } from 'react-router-dom';

const Part_3 = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/hydarlic');
  };
  return (
    <div>
      <div className='machine_parent_div'>
        <div className="machine_main_div">
          <img src={require("./images/Group 98.png")} alt="CNC Press Brake Machine" />
          <div className="btn_and_img_div" id='part_3_div'>

            <img id='part_3_img' src={require("./images/PNCPBR1030_Rear_cylinder_press_brake-removebg-preview 1.png")} alt="Catalog" />

            <div className='machine_desc'>
              <p id="machine_label">Rear Cylinder Hydraulic Press Brake Machine</p>
              <button id='view' onClick={handleRedirect}>VIEW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Part_3