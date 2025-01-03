import React from 'react'
import './Second.css';
import { useNavigate } from 'react-router-dom';


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
            <div className="left_part">
              
              <p>
              <button  onClick={handleRedirect}>CNC PRESS BRAKE</button>
            
              </p>
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