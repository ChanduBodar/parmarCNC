import React from 'react'
import './Hydrolic.css'
import im_64 from './images_for_main_page/Group 64.png'
import im_63 from './images_for_main_page/Group 63.png'
import p_1 from  './images_for_main_page/parmar_3 1.png'
import p_4 from  './images_for_main_page/parmar_4 1.png'
import p_5 from './images_for_main_page/parmar_5 1.png'


const Hydrolic = () => {
  return (
    <div> 
        <div>
          {/* HYDRAULIC COMPONENTS */}
          <div className="hydraulic_c">
            <p>HYDRAULIC COMPONENTS</p>
          </div>
    
          <div className="h_components">
            {/* Hydraulic System */}
            <div className="h_system">
              <div className="h_s_tag">
                <p>HYDRAULIC SYSTEM</p>
              </div>
              <div className="h_images">
                <div className="h_im_1">
                  <img src={im_64}alt="Hydraulic Unit Powered By Hawe" />
                  <p>Hydraulic Unit Powered By Hawe</p>
                </div>
                <div className="h_im_1">
                  <img src={im_63} alt="Hydraulic Unit Powered By Rexroth" />
                  <p>Hydraulic Unit Powered By Rexroth</p>
                </div>
              </div>
            </div>
    
            {/* Break Line */}
            <div className="b_r_l"></div>
    
            {/* Hydraulic Part */}
            <div className="hy_part">
              <div className="hy_img_part">
                <div className="hy_1">
                  <div className="hy_img_p_1">
                    <img src={p_1} alt="Edge Series Press Brake" />
                  </div>
                  <div className="d_img_part">
                    <p>Edge Series</p>
                  </div>
                </div>
                <p id="jj">Edge Series Press Brake with AC Motor with Standard Vane Pump</p>
              </div>
    
              <div className="hy_img_part">
                <div className="hy_1">
                  <div className="hy_img_p_1">
                    <img src={p_4} alt="Edge Servo Series" />
                  </div>
                  <div className="d_img_part">
                    <p>Edge Servo Series</p>
                  </div>
                </div>
                <p id="jj">Edge Servo Series Press Brake with AC Servo Motor and Drive With Standard Servo Pump for less noise with 30% energy saving</p>
              </div>
    
              <div className="hy_img_part">
                <div className="hy_1">
                  <div className="hy_img_p_1">
                    <img src={p_5} alt="Edge Hybrid Series" />
                  </div>
                  <div className="d_img_part">
                    <p>Edge Hy-brid Series</p>
                  </div>
                </div>
                <p id="jj">Edge Hybrid Series Press Brake with AC Servo Motor and Drive with Standard Servo Pump for less noise with 40% more productivity and 30% energy saving</p>
              </div>
            </div>
          </div>
        </div></div>
  )
}   

export default Hydrolic
