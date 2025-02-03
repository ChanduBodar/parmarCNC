import React from 'react'
import './CNC_press_break.css'

import { useNavigate } from 'react-router-dom';

const Part_4 = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/edge_h_series'); // Navigate to '/child' page
  };
  return (
    <div>

      <div className='machine_parent_div'>
        <div className="machine_main_div">
          <img id='front_img' src={require("./images/Group 98.png")} alt="CNC Press Brake Machine" />
          <div className="btn_and_img_div">
            <div className='machine_desc'>
              <p id="machine_label">CNC PRESS BRAKE MACHINE EDGE H SERIES</p>
              <button id='view' onClick={handleRedirect}>VIEW</button>
            </div>
            <img src={require("./images/CNC_Press_Brake_6000x800tone-removebg-preview 1.png")} alt="Catalog" id="part_4_img" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Part_4