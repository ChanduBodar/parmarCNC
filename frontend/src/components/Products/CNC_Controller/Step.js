import React from 'react'
import './CNC_controller.css'

import Rock15 from './Imges/Rock15.png'
import Rock17 from './Imges/Rock17.png'
import Dual22 from './Imges/Dual22.png'
import Dual27 from './Imges/Dual27.png'

const Step = () => {
  return (
    <div>
      <div className='step_main_container'>
                 {/* STEP part */}
                 <p id='delem_label'>STEP</p>
           
                 <div className="delem_main_div">
                   
                     <div className="products">
                       <div className="p_1">
                         <div className="label">
                           <p>ROCK 15+</p>
                         </div>
           
                         <div className="label_img">
                           <img src={Rock15} alt="" />
                         </div>
           
                         <div className="product_desc">
                           <ul>
                             <li>INDUSTRY 4.0 READY Producation management and scheduling</li>
                             <li>Quick Editor function to create quickly 2D parts</li>
                             <li>3D Simulation with automatic best bend sequence
                             identification with collision detection.
                             </li>
                             <li>Tool navigator for a quick tooling up</li>
                             <li>Quick and fine tuning set -up of the machine thnaks to direct
                               access to perameters and specific function like realtime monitor
                               and oscilloscope</li>
               
                             <li>TeamViewer for Remote assistance</li>
                             <li>TeamViewer for Remote assistance</li>
                             <li>Linux OS</li>
                           </ul>
                         </div>
                       </div>
           
                       <div className="p_2">
                         <div className="label">
                           <p>ROCK 17+</p>
                         </div>
           
                         <div className="label_img">
                           <img src={Rock17} alt="" />
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
                           <p>DUAL 22</p>
                         </div>
           
                         <div className="label_img">
                           <img src={Dual22} alt="" />
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
                           <p>DUAL 27</p>
                         </div>
           
                         <div className="label_img">
                           <img src={Dual27} alt="" />
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

export default Step