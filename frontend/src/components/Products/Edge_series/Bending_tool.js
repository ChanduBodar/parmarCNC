import React from 'react'
import './Bending_tool.css'
import im_29 from './images_for_main_page/image 29.png'
import im_99 from './images_for_main_page/Group 99.png'
import im_100 from './images_for_main_page/Group 100.png'
import im_111 from './images_for_main_page/Group 111.png'
import im_102 from './images_for_main_page/Group 102.png'
import im_103 from './images_for_main_page/Group 103.png'
import im_104 from './images_for_main_page/Group 104.png'
import im_105 from './images_for_main_page/Group 105.png'
import im_106 from './images_for_main_page/Group 106.png'
import im_107 from './images_for_main_page/Group 107.png'
import im_108 from './images_for_main_page/Group 108.png'
import im_109 from './images_for_main_page/Group 109.png'
import im_110 from './images_for_main_page/Group 110.png'




const Bending_tool = () => {
  return (
    <div>
         <div>
      {/* EDGE SERIES BENDING TOOLS */}
      <div className="edge">
        <p>EDGE SERIES BENDING TOOLS</p>
      </div>

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
          <img src={im_29} alt="Parmar Tools" />
        </div>

        {/* Punch Part */}
        <div className="punch_part">
          <div className="punch_div">
            <p>PUNCH</p>
          </div>
          <div className="imgs">
            <div className="im">
              <img src={im_99} alt="Standard Sectioning Punch" />
              <p>Standard Sectioning Punch</p>
            </div>
            <div className="im">
              <img src={im_100} alt="Standard Semi Gooseneck Punch" />
              <p>Standard Semi Gooseneck Punch</p>
            </div>
            <div className="im">
              <img src={im_111}alt="Standard Sharp Punch" />
              <p>Standard Sharp Punch</p>
            </div>
            <div className="im">
              <img src={im_102} alt="Straight Sharp Punch" />
              <p>Straight Sharp Punch</p>
            </div>
            <div className="im">
              <img src={im_103} alt="Gooseneck Punch" />
              <p>Gooseneck Punch</p>
            </div>
            <div className="im">
              <img src={im_104} alt="Wil Style Punch" />
              <p>Wil Style Punch</p>
            </div>
          </div>
        </div>

        {/* Die Part */}
        <div className="die_part">
          <div className="die_div">
            <p>DIE</p>
          </div>
          <div className="die_img">
            <div className="die">
              <img src={im_105} alt="Standard Sectioning Die" />
              <p>Standard Sectioning Die</p>
            </div>
            <div className="die">
              <img src={im_106} alt="Standard Semi Gooseneck Die" />
              <p>Standard Semi Gooseneck Die</p>
            </div>
            <div className="die">
              <img src={im_107} alt="Standard Sharp Die" />
              <p>Standard Sharp Die</p>
            </div>
            <div className="die">
              <img src={im_108} alt="Straight Sharp Die" />
              <p>Straight Sharp Die</p>
            </div>
            <div className="die">
              <img src={im_109} alt="Gooseneck Die" />
              <p>Gooseneck Die</p>
            </div>
            <div className="die">
              <img src={im_110} alt="Wil Style Die" />
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