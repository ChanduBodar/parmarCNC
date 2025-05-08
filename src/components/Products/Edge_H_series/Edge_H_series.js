import React from 'react'
import '../CNC_Press_break/CNC_press_break.css'
import Edge_1 from './Edge_1'
import Edge_2 from './Edge_2'
import CNC_Controller from '../CNC_Controller/CNC_Controller'
import Calc_Technical from '../Calculator&Technical_specification/Calc_Technical'



const Edge_H_series = () => {
  return (
    <div className='edge_series'>
        <Edge_1/>
        <Edge_2/>
        <Calc_Technical/>

        <CNC_Controller/>
    </div>
  )
}

export default Edge_H_series