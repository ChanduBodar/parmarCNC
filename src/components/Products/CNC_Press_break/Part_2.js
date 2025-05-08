import React from 'react'
import './CNC_press_break.css'
import { useNavigate } from 'react-router-dom';

const Part_2 = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/cnc_press_Brake_machine_edge_series'); // Navigate to '/child' page
  };
  return (
    <div>
      {/* Part-2 */}
      
        <div className="machine_main_div_2">
          <img src={require("./images/istockphoto-1243283657-612x612.png")} alt="CNC Press Brake" />
          <div className="btn_and_img_div_2">

           
          <div className='machine_desc_2'>
              <p id="machine_label_2">CNC Press Brake Machine Edge Series</p>
              <button id='view_2' onClick={handleRedirect }>VIEW</button>
          </div>




            <img src={require("./images/Group 117.png")} alt="Catalog" id="machine_img" />


          </div>
        </div>
      </div>


  
  )
}

export default Part_2