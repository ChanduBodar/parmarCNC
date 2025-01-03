import React from 'react'
import './Third.css'
const Third = () => {
  return (
    <div className='last_part'>
         <div className="back_img">
          <img  src={require("./images_for_main_page/Group 98.png")} />
          <div className="above_div">
            <div className="right_text_part">
              <img
                src={require("./images_for_main_page/Group 118.png")}
                alt="Shearing Machine 1"
                id="big"
              />
            </div>
            <div className="tag_part">
              <p>SHEARING MACHINE</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Third