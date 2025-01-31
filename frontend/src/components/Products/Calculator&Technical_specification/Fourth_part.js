import React from 'react'
import './Calc_Tecnical.css'
import force_1 from './images/Force_calc_1.png'
import force_2 from './images/Force_calc_2.png'
import force_calculator from './images/force_calculator.png'

const Fourth_part = () => {
  return (
    <div>
       <div className="fourth_part">
      {/* Image part */}
      <div className="image_part">
        
          <img src={force_1} alt="Image 1" />
        
        
          <img src={force_2} alt="Image 2" />
      
      </div>

      {/* Image data part */}
      <div className="image_data_part">
        <p>Press brake Air bending force calculator</p>
        <img src={force_calculator} alt="Calculator Image" />
      </div>
    </div>
    </div>
  )
}

export default Fourth_part