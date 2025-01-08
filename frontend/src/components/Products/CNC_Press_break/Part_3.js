import React from 'react'
import './Part_3.css'
import { useNavigate } from 'react-router-dom';

const Part_3 = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/hydarlic'); // Navigate to '/child' page
  };
  return (
    <div>
      <div className="last_part">
        <div className="back_img">
          <img src={require("./images/Group 98.png")} alt="CNC Press Brake Machine" />
          <div className="img_text_part_2">

            <div className="right_part_2">
              <img src={require("./images/PNCPBR1030_Rear_cylinder_press_brake-removebg-preview 1.png")} alt="Catalog" id="big_img_2" />

            </div>
            <div className="left_part_2">

              <div className='cnc_tag_name'>
                <p>Rear Cylinder Hydraulic Press Brake Machine</p>
              </div>


              <button onClick={handleRedirect} >VIEW</button>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Part_3