import React from 'react'
import './Calculator.css'
import Datapart from './Datapart'
import firstImage from "./images_for_main_page/parmar_catalog[1]222 2.png";

const Calculator = () => {
  return (
    <div>
       
    <div className="second_part">
      <Datapart />
      <img src={firstImage} alt="Second Part Image" />
    </div>

    <div className="border_line"></div>
  
    </div>
  )
}

export default Calculator