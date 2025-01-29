import React from 'react'
import './Cybelic.css'
import './Delem.css'
import ps8 from './Imges/8ps.png';
import ps12 from './Imges/12ps.png'
import ps15 from './Imges/15ps.png'
import mx24 from './Imges/24mx.png'

const Cybelic = () => {
  return (
    <div className='cybelic_main_part'>
       <div>
           <p id='delem_label'>CYBELEC</p>
      
              {/* CYBELEC part */}
              <div className="delem_main_div">
               
                  <div className="products">
                    <div className="p_1">
                      <div className="label">
                        <p>DA- 53 T</p>
                      </div>
      
                      <div className="label_img">
                        <img src={ps8} alt="" />
                      </div>
      
                      <div className="product_desc">
                        <ul>
                          <li>"Hot-key" touch navigation</li>
                          <li>"10.1" high resolution colour TFT</li>
                          <li>Up to 4 axes (Y1, Y2 + 2 aux. axes)</li>
                          <li>Crowning control</li>
                          <li>Tool/material/Product library</li>
                          <li>Servo and frequency inverter control</li>
                          <li>TandemLink (option)</li>
                          <li>USB memory stick interfacing</li>
                          <li>Profile-T offline software</li>
                        </ul>
                      </div>
                    </div>
                    <div className="p_2">
                      <div className="label">
                        <p>DA- 58 T</p>
                      </div>
                      <div className="label_img">
                        <img src={ps12} alt="" />
                      </div>
      
                      <div className="product_desc">
                        <ul>
                          <li>2D graphical touch screen programming</li>
                          <li>15" high resolution colour TFT</li>
                          <li>Bend sequence calculation</li>
                          <li>Crowning control</li>
                          <li>Servo and frequency inverter control</li>
                          <li>USB, peripheral interfacing</li>
                          <li>Profile-T offline software</li>
                        </ul>
                      </div>
                    </div>
                  </div>
      
                  {/* 8.2 part */}
                  <div className="products">
                    <div className="p_1">
                      <div className="label">
                        <p>DA- 66 T</p>
                      </div>
      
                      <div className="label_img">
                        <img src={ps15} alt="" />
                      </div>
      
                      <div className="product_desc">
                        <ul>
                          <li>2D graphical touch screen programming mode</li>
                          <li>17" high resolution colour TFT</li>
                          <li>Full Windows application suite</li>
                          <li>Delem Modusys application suite (module scalability and adaptivity)</li>
                          <li>USB, peripheral interfacing</li>
                          <li>User-specific application support within the control's multitasking environment</li>
                          <li>Sensor bending & correction interface Profile-TL offline software</li>
                        </ul>
                      </div>
                    </div>
                    <div className="p_2">
                      <div className="label">
                        <p>DA- 69 T</p>
                      </div>
                      <div className="label_img">
                        <img src={mx24} alt="" />
                      </div>
      
                      <div className="product_desc">
                        <ul>
                          <li>3D and 2D graphical touch screen programming mode</li>
                          <li>3D visualisation in simulation and production</li>
                          <li>17" high resolution colour TFT</li>
                          <li>Full Windows application suite</li>
                          <li>Delem Modusys compatibility (module scalability and adaptivity)</li>
                          <li>USB, peripheral interfacing</li>
                          <li>User-specific application support within the control's multitasking environment</li>
                          <li>Sensor bending & correction interface</li>
                          <li>Profile-T3D offline software</li>
                        </ul>
                      </div>
                    </div>
                  </div>
      
                </div>
              </div>
        
      
    </div>
  )
}

export default Cybelic