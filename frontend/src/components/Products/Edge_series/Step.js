import React from 'react'
import './Step.css'
import im_1 from './images_for_main_page/parmar catalog[1]00000 1.png'
import im_21 from './images_for_main_page/image 21.png'
import im_22 from './images_for_main_page/image 22.png'
import im_23 from './images_for_main_page/parmar catalog[1]20 1.png'


const Step = () => {
  return (

         <div>
           {/* STEP part */}
           <div  id='sy'className="delem">
             <p >STEP</p>
           </div>
     
           <div className="step_container">
             
               <div className="products">
                 <div className="p_1">
                   <div className="label">
                     <p>ROCK 15+</p>
                   </div>
     
                   <div className="label_img">
                     <img src={im_1} alt="" />
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
                     <img src={im_21} alt="" />
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
                     <img src={im_22} alt="" />
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
                     <img src={im_23} alt="" />
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
         
      
    
  )
}

export default Step