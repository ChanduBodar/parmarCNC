import React from 'react'
import './CNC_controller.css'
import Acceseries_1 from './Imges/Accesries_1.png'
import Acceseries_2 from './Imges/Accesries_2.png'
import Acceseries_3 from './Imges/Accesries_3.png'
import Acceseries_4 from './Imges/Accesries_4.png'


const Acceseries = () => {
  return (
    <div>
      
          <p id='accessories_label'>
          ACCESSORIES
          </p>
    
      <div className="std_part_2">
      <table>
        <tr className="std_2">
          <td className="img_std_2">
            <img src={Acceseries_1} alt="" />
            <div className="tag_2">
              <p>FRONT SHEET SUPPORT</p>
            </div>
          </td>
          <td className="img_std_2">
            <img src={Acceseries_2} alt="" />
            <div className="tag_2">
              <p>AUTOMATIC ANGLE MEASURE SYSTEM</p>
            </div>
          </td>
        </tr>
        <tr className="std_2">
          <td className="img_std_2">
            <img src={Acceseries_3}alt="" />
            <div className="tag_2">
              <p>AUTOMATIC SHEET FOLLOWERS</p>
            </div>
          </td>
          <td className="img_std_2">
            <img src={Acceseries_4} alt="" />
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