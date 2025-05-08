import React from 'react'
import './CNC_controller.css'
import hydrolic_1 from './Imges/Hydrolic_1.png'
import hydrolic_2 from './Imges/Hydrolic_2.png'
import hydrolic_3 from './Imges/Hydrolic_3.png'
import hydrolic_4 from './Imges/Hydrolic_4.png'
import hydrolic_5 from './Imges/Hydrolic_5.png'


const Hydrolic = () => {
  return (
    <div> 
        <div>
          {/* HYDRAULIC COMPONENTS */}
          
            <p id='hydraulic_c'>HYDRAULIC COMPONENTS</p>
          
    
          <div className="h_components">
            {/* Hydraulic System */}
            <div className="h_system">
              
                <p id= 'h_s_tag'>HYDRAULIC SYSTEM</p>
              
              <div className="h_images">
                <div className="h_im_1">
                  <img src={hydrolic_1}alt="Hydraulic Unit Powered By Hawe" />
                  <p>Hydraulic Unit Powered By Hawe</p>
                </div>
                <div className="h_im_1">
                  <img src={hydrolic_2} alt="Hydraulic Unit Powered By Rexroth" />
                  <p>Hydraulic Unit Powered By Rexroth</p>
                </div>
              </div>
            </div>
    
            {/* Break Line */}
            
    
            <div className="hydro_part">
              <div className="hy_img_part">
                <div className="hy_1">
                  <div className="hy_img_p_1">
                    <img src={hydrolic_3} alt="Edge Series Press Brake" />
                  </div>
                 
                    <p id='d_img_part'>Edge Series</p>
                
                </div>
                <p id="jj">Edge Series Press Brake with AC Motor with Standard Vane Pump</p>
              </div>
    
              <div className="hy_img_part">
                <div className="hy_1">
                  <div className="hy_img_p_1">
                    <img src={hydrolic_4} alt="Edge Servo Series" />
                  </div>
                  
                  <p id='d_img_part'>Edge Servo Series</p>
               
                </div>
                <p id="jj">Edge Servo Series Press Brake with AC Servo Motor and Drive With Standard Servo Pump for less noise with 30% energy saving</p>
              </div>
    
              <div className="hy_img_part">
                <div className="hy_1">
                  <div className="hy_img_p_1">
                    <img src={hydrolic_5} alt="Edge Hybrid Series" />
                  </div>
                 
                  <p id='d_img_part'>Edge Hy-brid Series</p>
                 
                </div>
                <p id="jj">Edge Hybrid Series Press Brake with AC Servo Motor and Drive with Standard Servo Pump for less noise with 40% more productivity and 30% energy saving</p>
              </div>
            </div>
          </div>
        </div></div>
  )
}   

export default Hydrolic
