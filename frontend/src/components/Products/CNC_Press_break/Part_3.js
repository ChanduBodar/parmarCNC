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
      <div className="last_part">
        <div className="back_img">
          <img id='front_img' src={require("./images/Group 98.png")} alt="CNC Press Brake Machine" />
          <div className="img_text_part_2">

            <div className="right_part_2">
              <img id="big_img_1" src={require("./images/PNCPBR1030_Rear_cylinder_press_brake-removebg-preview 1.png")} alt="Catalog"  />

            </div>
            <div className="left_part_2">

              
              <p className='cnc_tag_name'>Rear Cylinder Hydraulic Press Brake Machine</p>
              


              <button id='btn_view' onClick={handleRedirect} >VIEW</button>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Part_3