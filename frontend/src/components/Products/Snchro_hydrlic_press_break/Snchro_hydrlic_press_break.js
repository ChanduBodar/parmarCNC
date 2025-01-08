import React from 'react'
import './Snchro_hydrlic_press_break.css'
import Sin_1 from './Sin_1'
import Sin_2 from './Sin_2'
import Force_break_calculator from '../Edge_series/Force_break_calculator';
import Fourth_part from '../Edge_series/Fourth_part';
import Legend from '../Edge_series/Legend';
import Specification from '../Edge_series/Specification';
import CNC_controller from '../Edge_series/CNC_controller';
import Delem from '../Edge_series/Delem';
import Cybelic from '../Edge_series/Cybelic';
import Step from '../Edge_series/Step';
import  {Standard_Components}  from '../Edge_series/Standard_Components';
import Weel_Tool from '../Edge_series/Weel_Tool';
import Bending_tool from '../Edge_series/Bending_tool';
import { Crowing } from '../Edge_series/Crowing';
import Hydrolic from '../Edge_series/Hydrolic';
import STD_components from '../Edge_series/STD_components';
import Acceseries from '../Edge_series/Acceseries';


const Snchro_hydrlic_press_break = () => {
  return (
    <div>
      <Sin_1/>
      <Sin_2/>
      
      <Fourth_part/>
     
        <Legend/>
        <Specification/>
        <CNC_controller/>
        <Delem/>
        <Cybelic/>
        <Step/>
        <Standard_Components/>
        <Weel_Tool/>
        <Bending_tool/>
        <Crowing/>
        <Hydrolic/>
        <STD_components/>
        <Acceseries/>
    </div>
  )
}

export default Snchro_hydrlic_press_break