import React from 'react'
import './Acceseries.css'
import i_34 from './images_for_main_page/image 34.png'
import G_112 from './images_for_main_page/Group 112.png'
import G_113 from './images_for_main_page/Group 113.png'
import i_135 from './images_for_main_page/image 35.png'

const Acceseries = () => {
  return (
    <div>
      <div className="std_part_2">
      <table>
        <tr className="std_2">
          <td className="img_std_2">
            <img src={i_34} alt="" />
            <div className="tag_2">
              <p>FRONT SHEET SUPPORT</p>
            </div>
          </td>
          <td className="img_std_2">
            <img src={G_112} alt="" />
            <div className="tag_2">
              <p>AUTOMATIC ANGLE MEASURE SYSTEM</p>
            </div>
          </td>
        </tr>
        <tr className="std_2">
          <td className="img_std_2">
            <img src={G_113}alt="" />
            <div className="tag_2">
              <p>AUTOMATIC SHEET FOLLOWERS</p>
            </div>
          </td>
          <td className="img_std_2">
            <img src={i_135} alt="" />
            <div className="tag_2">
              <p>LASER SAFETY</p>
            </div>
          </td>
        </tr>
      </table>
    </div>
    </div>
  )
}

export default Acceseries