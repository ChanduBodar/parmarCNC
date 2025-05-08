import React from 'react'
import './Calc_Tecnical.css'
import Force_break_calculator from './Force_break_calculator'
import Fourth_part from './Fourth_part'
import Legend from './Legend'
import Specification from './Specification'

const Calc_Technical = () => {
  return (
    <div>
        <Force_break_calculator/>
        <Fourth_part/>
        <Legend/>
        <Specification/>

    </div>
  )
}

export default Calc_Technical