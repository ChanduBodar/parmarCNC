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
          <img src={require("./images/Group 98.png")} alt="CNC Press Brake Machine" />
          <div className="img_text_part_1">
            <div className="left_part_4">

              <div className='cnc_tag_name'>
                <p>CNC PRESS BRAKE MACHINE EDGE H SERIES </p>
              </div>


              <button id='view_btn' onClick={handleRedirect}>VIEW</button>


            </div>
            <div className="right_part_4">
              <img src={require("./images/CNC_Press_Brake_6000x800tone-removebg-preview 1.png")} alt="Catalog" id="big_img_3" />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Part_4