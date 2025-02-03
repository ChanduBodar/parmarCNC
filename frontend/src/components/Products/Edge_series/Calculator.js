import React from 'react'

import Datapart from './Datapart'
import firstImage from "./images_for_main_page/parmar_catalog[1]222 2.png";

const Calculator = () => {
  return (
    <div>
         
    <div className="img_and_data">

         <Datapart />

         <img src={firstImage}></img>
     
    </div>

    <div className=""></div>
  
    </div>
  )
}

export default Calculator