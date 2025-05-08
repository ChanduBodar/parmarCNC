import React from 'react'
import './Edge_series.css'
import Hero from './Hero';
import Calculator from './Calculator'

import CNC_Controller from '../CNC_Controller/CNC_Controller';
import Calc_Technical from '../Calculator&Technical_specification/Calc_Technical';




const Edge_series = () => {
  return (
    <div className='edge_series'>
        <Hero/>
        <Calculator/>
        <Calc_Technical/>
        <CNC_Controller/> 
        
        
        
    </div>
  )
}

export default Edge_series;