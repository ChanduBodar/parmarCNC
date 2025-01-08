import React from 'react'
import './Part_3.css'
import './Part_5.css'
import { useNavigate } from 'react-router-dom';

const Part_5 = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/Synchro_hydrelic'); // Navigate to '/child' page
  };
  return (
    <div>
      <div className="last_part">
        <div className="back_img">
          <img src={require("./images/Group 98.png")} alt="CNC Press Brake Machine" />
          <div className="img_text_part_2">

            <div className="right_oo">
              <img src={require("./images/3200x160_tone__6+1axis__at_Ms.Bobst_India_Pune-removebg-preview 1.png")} alt="Catalog" id="big_img_5" />

            </div>
            <div className="left_p">

              <div className='cnc_tag_name'>
                <p>EDGE SERIES SYNCHRO HYDRAULIC PRESS BRAKE</p>
              </div>



              <button onClick={handleRedirect} id='my_btn'>VIEW</button>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Part_5