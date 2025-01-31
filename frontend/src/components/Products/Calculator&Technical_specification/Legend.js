import React from 'react'
import './Calc_Tecnical.css'
import lg_1 from './images/Lagend_1.png'
import lg_2 from './images/Lagend_2.png'

const Legend = () => {
  return (
    <div>
        <div className="fifth_part">
      {/* Legend Section */}
      <div className="legend">
        <div className="legend_data">
          <p>
            The V opening of the bottom die is 8 times the thickness of the sheet.
            However, for the thicker plate, the V opening should be bigger. The following
            recommend V opening of the bottom die can be your reference.
          </p>
        </div>

        <img src={lg_1} alt="Group 30" />
      </div>

      {/* Legend Image Section */}
      <div className="legend_image">
        <img src={lg_2} alt="Group 31" />
      </div>
    </div>
    </div>
  )
}

export default Legend