import React from 'react'
import './Second.css';
import { useNavigate } from 'react-router-dom';
import './Prouct.css'


const Second = () => {
    const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/cnc_press'); // Navigate to '/child' page
  };
  return (
    <div>
          <div className="back_img">
        <img src={require("./images_for_main_page/istockphoto-1243283657-612x612.png")} alt="CNC Press Brake" />
          <div className="img_text_part">
            
            <div className="CNC_button">
              <button  onClick={handleRedirect}>CNC PRESS BRAKE</button>
            
            </div>
            <div className="right_part">
              <img src={require("./images_for_main_page/Group 117.png")} alt="Catalog" id="big_img" />
              
            </div> 
          </div>
        </div>
    </div>
  )
}

export default Second