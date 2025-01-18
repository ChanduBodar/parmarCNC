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
      <div className="ba_img">
        <img src={require("./images_for_main_page/istockphoto-1243283657-612x612.png")} alt="CNC Press Brake" />
        <div className="img_t_part">

          <div className='lable_taging'>
            <button className="CNC_b_t_n" onClick={handleRedirect}>CNC PRESS BRAKE</button>
          </div>

          <div className='machne_image'>
            <img src={require("./images_for_main_page/Group 117.png")} alt="Catalog" id="big_img" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Second