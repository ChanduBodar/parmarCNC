import React from 'react'
import './CNC_press_break.css'

import { useNavigate } from 'react-router-dom';

const Part_4 = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/cnc_press_brake_machine_edge_h_series'); // Navigate to '/child' page
  };
  return (
    <div>

      <div className='machine_parent_div'>
        <div className="machine_main_div_2">
          <img id='front_img' src={require("./images/Group 98.png")} alt="CNC Press Brake Machine" />
          <div className="btn_and_img_div_2">
            <div className='machine_desc_2'>
              <p id="machine_label_2">CNC PRESS BRAKE MACHINE EDGE H SERIES</p>
              <button id='view_2' onClick={handleRedirect}>VIEW</button>
            </div>
            <img  id='machine_img' src={require("./images/CNC_Press_Brake_6000x800tone-removebg-preview 1.png")} alt="Catalog" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Part_4