import React from 'react'
import './Snchro_hydrlic_press_break.css'
import Sin_1 from './Sin_1'
import Sin_2 from './Sin_2'
import CNC_Controller from '../CNC_Controller/CNC_Controller';
import Calc_Technical from '../Calculator&Technical_specification/Calc_Technical';


const Snchro_hydrlic_press_break = () => {
  return (
    <div className='main_class'>
      <Sin_1/>
      <Sin_2/>
      
      <Calc_Technical/>
      <CNC_Controller/>
    </div>
  )
}

export default Snchro_hydrlic_press_break