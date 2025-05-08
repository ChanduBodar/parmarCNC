import React from 'react'
import './CNC_controller.css'
import bandig_main_img from './Imges/banding_tool_main_img.png'
import punch_1 from './Imges/Punch_1.png'
import punch_2 from './Imges/Punch_2.png'
import punch_3 from './Imges/Punch_3.png'
import punch_4 from './Imges/Punch_4.png'
import punch_5 from './Imges/Punch_5.png'
import punch_6 from './Imges/Punch_6.png'
import die_1 from './Imges/Die_1.png'
import die_2 from './Imges/Die_2.png'
import die_3 from './Imges/Die_3.png'
import die_4 from './Imges/Die_4.png'
import die_5 from './Imges/Die_5.png'
import die_6 from './Imges/Die_6.png'





const Bending_tool = () => {
  return (
    <div>
         <div>
      {/* EDGE SERIES BENDING TOOLS */}
     
        <p id='edge_label'>EDGE SERIES BENDING TOOLS</p>
      

      {/* EDGE TOOLS PART */}
      <div className="edge_tools_part">
        {/* Parmar Part */}
        <div className="parmar_part">
          <div className="text_part">
            <p>
              <b>PARMAR</b> has a wide range of bending tool solutions, such as 1V and multi-V lower tools
              and different upper tool solutions. All tools are top quality in terms of design and accuracy.
              We sell only what our customers truly need. We even design tools based on our customers' needs from
              the very beginning.
            </p>
          </div>
          <img src={bandig_main_img} alt="Parmar Tools" />
        </div>

        {/* Punch Part */}
        <div className="punch_part">
          <div className="punch_div">
            <p id='label_header'>PUNCH</p>
          </div>
          <div className="imgs">
            <div className="im">
              <img src={punch_1} alt="Standard Sectioning Punch" />
              <p>Standard Sectioning Punch</p>
            </div>
            <div className="im">
              <img src={punch_2} alt="Standard Semi Gooseneck Punch" />
              <p>Standard Semi Gooseneck Punch</p>
            </div>
            <div className="im">
              <img src={punch_3}alt="Standard Sharp Punch" />
              <p>Standard Sharp Punch</p>
            </div>
            <div className="im">
              <img src={punch_4} alt="Straight Sharp Punch" />
              <p>Straight Sharp Punch</p>
            </div>
            <div className="im">
              <img src={punch_5} alt="Gooseneck Punch" />
              <p>Gooseneck Punch</p>
            </div>
            <div className="im">
              <img src={punch_6} alt="Wil Style Punch" />
              <p>Wil Style Punch</p>
            </div>
          </div>
        </div>

        {/* Die Part */}
        <div className="die_part">
          <div className="die_div">
            <p id='label_header'>DIE</p>
          </div>
          <div className="die_img">
            <div className="die">
              <img src={die_1} alt="Standard Sectioning Die" />
              <p>Standard Sectioning Die</p>
            </div>
            <div className="die">
              <img src={die_2} alt="Standard Semi Gooseneck Die" />
              <p>Standard Semi Gooseneck Die</p>
            </div>
            <div className="die">
              <img src={die_3} alt="Standard Sharp Die" />
              <p>Standard Sharp Die</p>
            </div>
            <div className="die">
              <img src={die_4} alt="Straight Sharp Die" />
              <p>Straight Sharp Die</p>
            </div>
            <div className="die">
              <img src={die_5} alt="Gooseneck Die" />
              <p>Gooseneck Die</p>
            </div>
            <div className="die">
              <img src={die_6} alt="Wil Style Die" />
              <p>Wil Style Die</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Bending_tool