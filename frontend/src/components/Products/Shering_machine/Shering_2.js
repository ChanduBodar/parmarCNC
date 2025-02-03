import React from 'react'
import './Shering.css'
import '../CNC_Press_break/CNC_press_break.css'
import { useNavigate } from 'react-router-dom';

const Shering_2 = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/hydrolic_sharing_machine'); // Navigate to '/child' page
  };
  return (
    <div>
      <div className="machine_parent_div">
        <div className="machine_main_div">
          <img  src={require("./Sherimg_images/shering_bg.png")} alt="CNC Press Brake Machine" />
          <div className="btn_and_img_div">

            <div className="machine_desc">
              <p id='sharing_label'>VARIABLE RACK ANGLE HYDRAULIC SHEARING MACHINE</p>
              <button id='view_btn' onClick={handleRedirect}>VIEW</button>

            </div>
            <img src={require("./Sherimg_images/single_mchine.png")} alt="Catalog" id="sharing_machine_img" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Shering_2