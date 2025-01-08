import React from 'react'
import './Fourth_part.css'
import image1 from "./images_for_main_page/Group 28.png";
import image2 from "./images_for_main_page/image 2.png";
import calculatorImage from "./images_for_main_page/parmar catalog[1] 1.png";

const Fourth_part = () => {
  return (
    <div>
       <div className="fourth_part">
      {/* Image part */}
      <div className="image_part">
        
          <img src={image1} alt="Image 1" />
        
        
          <img src={image2} alt="Image 2" />
      
      </div>

      {/* Image data part */}
      <div className="image_data_part">
        <p>Press brake Air bending force calculator</p>
        <img src={calculatorImage} alt="Calculator Image" />
      </div>
    </div>
    </div>
  )
}

export default Fourth_part