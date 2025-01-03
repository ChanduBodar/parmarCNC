import React from 'react'
import './Legend.css'
import group30Image from "./images_for_main_page/Group 30.png";
import group31Image from "./images_for_main_page/Group 31.png";

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

        <img src={group30Image} alt="Group 30" />
      </div>

      {/* Legend Image Section */}
      <div className="legend_image">
        <img src={group31Image} alt="Group 31" />
      </div>
    </div>
    </div>
  )
}

export default Legend