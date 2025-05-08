import React from 'react'
import './CNC_controller.css'
import std_1 from './Imges/STD_Compo_1.png'
import std_2 from './Imges/STD_Compo_2.png'
import std_3 from './Imges/STD_Compo_3.png'
import std_4 from './Imges/STD_Compo_4.png'
import std_5 from './Imges/STD_Compo_5.png'
import std_6 from './Imges/STD_Compo_6.png'


const STD_components = () => {
  return (
    <div>
      <div>
      
        <p id='std_label'>STANDARD COMPONENTS</p>
      

      <div className='std_main_div'>
        <div  className='item_div'>
          <img src={std_1}/>
          <p>Back Gauge</p>
        </div>
        
        <div className='item_div'>
          <img src={std_2}/>
          <p>Side Guard</p>
        </div>
        
        
        <div className='item_div'>
          <img src={std_3}/>
          <p>Linear Scale</p>
        </div>
        
      
        <div className='item_div'>
          <img src={std_4}/>
          <p>Fingers</p>
        </div>
        
       
        <div className='item_div'>
          <img src={std_5}/>
          <p>Back Gauge</p>
        </div>
        
        
        <div className='item_div'>
          <img src={std_6}/>
          <p>Back Gauge</p>
        </div>
      </div>

      
    </div>
    </div>
  )
}

export default STD_components