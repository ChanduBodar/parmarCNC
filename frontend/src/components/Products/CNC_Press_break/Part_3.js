import React from 'react'
import './Part_3.css';
import './Part_2.css';

import { useNavigate } from 'react-router-dom';

const Part_3 = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/hydarlic'); 
  };
  return (
    <div>
     <div className="part_3_main_div">
        <div className="img_and_tag_div">
          <img id='front_img' src={require("./images/Group 98.png")} alt="CNC Press Brake Machine" />
          <div className="tag_division">
             
            <img src={require("./images/PNCPBR1030_Rear_cylinder_press_brake-removebg-preview 1.png")} alt="Catalog" id="big_img_4" />
            <div className="my_data_part">
              <p className='cnc_tag_name'>Rear Cylinder Hydraulic Press Brake Machine</p>
              <button id='btn_view_3' onClick={handleRedirect}>VIEW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Part_3