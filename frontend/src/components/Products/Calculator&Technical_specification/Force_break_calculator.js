import React from 'react'
import './Calc_Tecnical.css'
import calculator from "./images/calculator.png";


const Force_break_calculator = () => {
  return (
    <div>
      <div className="third_part">
        <img src={calculator} alt="Third Part Image" />

        <div className="part_3_text">
          <p>
            You can use this calculator to calculate necessary tonnage for press brake to perform the bending of necessary part. It means that you can verify the max. Tonnage according to the technical specification of press brake or check the max. obtained tonnage by the press brake bending tooling compared to the necessary force. All bending tools have limits of force to be used.
          </p>

          <div className="calc_class">
            <p>This calculator is used for standard air bending process</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Force_break_calculator