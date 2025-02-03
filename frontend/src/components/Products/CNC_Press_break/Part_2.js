import React from 'react'
import './CNC_press_break.css'
import { useNavigate } from 'react-router-dom';

const Part_2 = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/edge_series'); // Navigate to '/child' page
  };
  return (
    <div>
      {/* Part-2 */}
      <div className='machine_parent_div'>
        <div className="machine_main_div">
          <img src={require("./images/istockphoto-1243283657-612x612.png")} alt="CNC Press Brake" />
          <div className="btn_and_img_div">

           
          <div className='machine_desc'>
              <p id="machine_label">CNC Press Brake Machine Edge Series</p>
              <button id='view' onClick={handleRedirect }>VIEW</button>
          </div>




            <img src={require("./images/Group 117.png")} alt="Catalog" id="machine_img" />


          </div>
        </div>
      </div>


    </div>
  )
}

export default Part_2