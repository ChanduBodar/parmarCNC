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

      <div className="last_part">
        <div className="back_img">
          <img id='front_img' src={require("./images/Group 98.png")} alt="CNC Press Brake Machine" />
          <div className="img_text_part_1">


            <img src={require("./images/parmar_catalog[1]222 2.png")} alt="Catalog" id="big_img_1" />
            <div className="left_part_1">
              <p className='cnc_tag_name'>CNC Press Brake Machine Edge Series</p>
              <button id='btn_view' onClick={handleRedirect}>VIEW</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Part_2