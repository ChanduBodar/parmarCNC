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
        <div className="last_part">
        <div className="back_img">
          <img id='front_img' src={require("./Sherimg_images/Group 34.png")} alt="CNC Press Brake Machine" />
          <div className="img_text_part_1">
           
         
              <img src={require("./Sherimg_images/parmar_14 1.png")} alt="Catalog" id="big_5" />
              <div className="left_part_1">
              <p className='cnc_tag_name_5'>VARIABLE RACK ANGLE HYDRAULIC SHEARING MACHINE</p>
              <button  id='btn_view' onClick={handleRedirect}>VIEW</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shering_2