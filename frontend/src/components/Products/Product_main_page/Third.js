import React from 'react'
import './Third.css'
import { useNavigate } from 'react-router-dom';
const Third = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/Shering_machine');
  };
  return (
  
    <div>
         <div className="ba_img">
          <img src={require("./images_for_main_page/Group 98.png")} />
          <div className="above_div">
            <div className="right_text_part">
              <img
                src={require("./images_for_main_page/Group 118.png")}
                alt="Shearing Machine 1"
                id="big"
              />
            </div>
            <div className="tag_part">
              <button onClick={handleRedirect}>SHEARING MACHINE</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Third