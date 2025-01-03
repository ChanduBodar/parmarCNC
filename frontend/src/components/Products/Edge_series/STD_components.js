import React from 'react'
import './STD_components.css'
import p_6_1 from './images_for_main_page/parmar_6 1.png'
import p_7_1 from './images_for_main_page/parmar7 1.png'
import p_8_1 from './images_for_main_page/parmar_8 1.png'
import i_33 from './images_for_main_page/image 33.png'
import i_9_1 from './images_for_main_page/parmar_9 1.png'
import i_10_1 from './images_for_main_page/parmar_10 1.png'


const STD_components = () => {
  return (
    <div>
        <div>
      <div className="hydraulic_c">
        <p>STANDARD COMPONENTS</p>
      </div>

      <div className="std_part">
        <table>
          <tr className="std_1">
            <td className="img_std_1">
              <img src={p_6_1} alt="" />
              <div className="tag_1">
                <p>Back Guard</p>
              </div>
            </td>
            <td className="img_std_1">
              <img src={p_7_1} alt="" />
              <div className="tag_1">
                <p>Side Guard</p>
              </div>
            </td>
            <td className="img_std_1">
              <img src={p_8_1} alt="" />
              <div className="tag_1">
                <p>Linear Scale</p>
              </div>
            </td>
          </tr>
          <tr className="std_1">
            <td className="img_std_1">
              <img src={i_33} alt="" />
              <div className="tag_1">
                <p>Fingers</p>
              </div>
            </td>
            <td className="img_std_1">
              <img src={i_9_1} alt="" />
              <div className="tag_1">
                <p>Back Guage</p>
              </div>
            </td>
            <td className="img_std_1">
              <img src={i_10_1} alt="" />
              <div className="tag_1">
                <p>Back Guage</p>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div className="hydraulic_c">
        <p>ACCESSORIES</p>
      </div>
    </div>
    </div>
  )
}

export default STD_components