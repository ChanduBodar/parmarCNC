import React from 'react'
import './CNC_controller.css'
import crowing_main_part from './Imges/crowimg_main_img.png'
import edge_1 from './Imges/Edge_series_1.png'
import edge_2 from './Imges/Edge_series_2.png'
import edge_3 from './Imges/Edge_series_3.png'
import edge_4 from './Imges/Edge_series_4.png'
import edge_5 from './Imges/Edge_series_5.png'
import edge_6 from './Imges/Edge_series_6.png'
import edge_7 from './Imges/Edge_series_7.png'
import edge_8 from './Imges/Edge_series_8.png'
import edge_9 from './Imges/Edge_series_9.png'
import edge_10 from './Imges/Edge_series_10.png'





export const Crowing = () => {
  return (
    <div>
         
    <div>
      {/* CNC CROWNING & HEAVY TOOLS */}
      
        <p id='crowningheavy_label'>CNC CROWNING & HEAVY TOOLS</p>
      

      <div className="CNC_crowning_and_heavy_tools">
        {/* Heavy Part */}
        <div className="heavy_part">
          <div className="heavy_desc">
            <p id="front">Front & Back Guage</p>
            <p id="frout_text">
              The high-speed ballscrew back gauge system movement is also supported with linear guides, which helps the back gauge achieve long life, greater sensitivity, and strengthens against any collisions.
            </p>
          </div>

          <div className="heavy_img">
            <img src={crowing_main_part} alt="Heavy Duty Sheet Support" />
            <p id="heavy">Heavy Duty Sheet Support</p>
          </div>
        </div>

        {/* H Series */}
        <div className="h_series">
          <div className="h-series_desc_part">
            <div className="heading_part">
              <p id="Edge_h">Edge H Series</p>
              <p id="edge_b">Bending Tools</p>
            </div>
            <div className="h_desc_part">
              <p  id='frout_text'>
                <b>Parmar</b> has a wide range of bending tool solutions, such as 1V and multi-V lower tools and different upper tool solutions. All tools are manufactured from high-class materials. They are hardened, so the durability and accuracy are top quality. Our own production ensures that we always deliver exactly what our customers truly need. We even design the right tool for a customer's needs from the very beginning if needed.
              </p>
            </div>
          </div>

          <div className="h_series_img_part">
            <div className="h_img">
              <img src={edge_1} alt="Automatic Motorized CNC Operated Die" />
              <p>Automatic Motorized CNC Operated Die</p>
            </div>
            <div className="h_img">
              <img src={edge_2} alt="Hard Operated Adjustable V Die" />
              <p>Hard Operated Adjustable V Die</p>
            </div>
            <div className="h_img">
              <img src={edge_3}alt="Manual Adjustable V Die" />
              <p>Manual Adjustable V Die</p>
            </div>
            <div className="h_img">
              <img src={edge_4} alt="Multi-V Lower Die Without Rollers" />
              <p>Multi-V Lower Die Without Rollers</p>
            </div>
            <div className="h_img">
              <img src={edge_5} alt="Lower Die With Rollers" />
              <p>Lower Die With Rollers</p>
            </div>
            <div className="h_img">
              <img src={edge_6} alt="Upper Holder With Changeable Tools" />
              <p>Upper Holder With Changeable Tools</p>
            </div>
          </div>
        </div>

        {/* H Series 1 */}
        <div className="h_series_1">
          <div className="h_desc_part_1">
            <p id='frout_text'>
              The CNC Crowning automatically compensates the deflection of the lower frame. It regulates the wedges/hydraulic cylinder of the lower table automatically in order to create a perfect crowning for each single bend, according to the different lengths and bending forces.
              <br />
              <br />
              It allows a constant bending angle over the length, even if the bending parameters are different from the common rule of using a V-die with a measure 8 times the thickness of the bent material. This offers more bending freedom to increase productivity and ease of work.
            </p>
          </div>

          <div className="h_series_img_part_1">
            <div className="h_img_1">
              <img src={edge_7} alt="Automatic Motorized CNC Operated Die" />
              <p>Automatic Motorized CNC Operated Die</p>
            </div>
            <div className="h_img_1">
              <img src={edge_8} alt="Hard Operated Adjustable V Die" />
              <p>Hard Operated Adjustable V Die</p>
            </div>
            <div className="h_img_1">
              <img src={edge_9} alt="Manual Adjustable V Die" />
              <p>Manual Adjustable V Die</p>
            </div>
            <div className="h_img_1">
              <img src={edge_10} alt="Multi-V Lower Die Without Rollers" />
              <p>Multi-V Lower Die Without Rollers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Crowing;
