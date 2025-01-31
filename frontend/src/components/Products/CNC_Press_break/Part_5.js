import React from 'react'
import './CNC_press_break.css'
import { useNavigate } from 'react-router-dom';

const Part_5 = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/Synchro_hydrelic'); // Navigate to '/child' page
  };
  return (
    <div>
      <div className="part_3_main_div">
        <div className="img_and_tag_div">
          <img id='front_img' src={require("./images/Group 98.png")} alt="CNC Press Brake Machine" />
          <div className="tag_division">
             
            <img src={require("./images/3200x160_tone__6+1axis__at_Ms.Bobst_India_Pune-removebg-preview 1.png")} alt="Catalog" id="big_img_5" />
            <div className="my_data_part">
              <p className='cnc_tag_name'>EDGE SERIES SYNCHRO HYDRAULIC PRESS BRAKE</p>
              <button id='btn_view_3' onClick={handleRedirect}>VIEW</button>
            </div>
          </div>
        </div>
      </div>
      </div>
  
  )
}

export default Part_5