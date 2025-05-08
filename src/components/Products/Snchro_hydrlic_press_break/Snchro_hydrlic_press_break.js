import React from 'react'
import Sin_1 from './Sin_1'
import Sin_2 from './Sin_2'
import CNC_Controller from '../CNC_Controller/CNC_Controller';
import Calc_Technical from '../Calculator&Technical_specification/Calc_Technical';
import '../Edge_series/Edge_series.css'
import './Snchro.css'


const Snchro_hydrlic_press_break = () => {
  return (
    <div className='edge_series'>
      <Sin_1/>
      <Sin_2/>
      
      <Calc_Technical/>
      <CNC_Controller/>
    </div>
  )
}

export default Snchro_hydrlic_press_break