import React from 'react'
import './Edge_series.css'
import Hero from './Hero';
import Calculator from './Calculator'
import Force_break_calculator from './Force_break_calculator';
import Fourth_part from './Fourth_part';
import Legend from './Legend';
import Specification from './Specification';
import CNC_controller from './CNC_controller';
import Delem from './Delem';
import Cybelic from './Cybelic';
import Step from './Step';
import  {Standard_Components}  from './Standard_Components';
import Weel_Tool from './Weel_Tool';
import Bending_tool from './Bending_tool';
import { Crowing } from './Crowing';
import Hydrolic from './Hydrolic';
import STD_components from './STD_components';
import Acceseries from './Acceseries';

const Edge_series = () => {
  return (
    <div className='edge_series'>
        <Hero/>
        <Calculator/>
        <Force_break_calculator/>
        <Fourth_part/>
        <Legend/>
        <Specification/>
        <CNC_controller/>
        {/* <Delem/>
        <Cybelic/>
        <Step/>
        <Standard_Components/>
        <Weel_Tool/>
        <Bending_tool/>
        <Crowing/>
        <Hydrolic/>
        <STD_components/>
        <Acceseries/> */}
        
        
    </div>
  )
}

export default Edge_series;