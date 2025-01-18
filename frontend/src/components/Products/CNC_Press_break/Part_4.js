import React from 'react'
import './Part_2.css'
import './Part_4.css'

import { useNavigate } from 'react-router-dom';

const Part_4 = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/edge_h_series'); // Navigate to '/child' page
  };
  return (
    <div>
      <div className="last_part">
        <div className="back_img">
          <img id='front_img' src={require("./images/Group 98.png")} alt="CNC Press Brake Machine" />
          <div className="img_text_part_1">
           
         
              <img src={require("./images/CNC_Press_Brake_6000x800tone-removebg-preview 1.png")} alt="Catalog" id="big_img_2" />
              <div className="left_part_1">
              <p className='cnc_tag_name'>CNC PRESS BRAKE MACHINE EDGE H SERIES </p>
              <button  id='btn_view' onClick={handleRedirect}>VIEW</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Part_4