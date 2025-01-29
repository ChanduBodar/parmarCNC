import React from 'react'
import './STD_components.css'
import p_6_1 from './images_for_main_page/parmar_6 1.png'
import p_7_1 from './images_for_main_page/parmar7 1.png'
import p_8_1 from './images_for_main_page/parmar_8 1.png'
import i_33 from './images_for_main_page/image 33.png'
import i_9_1 from './images_for_main_page/parmar_9 1.png'
import i_10_1 from './images_for_main_page/parmar_10 1.png'


const STD_components = () => {
  return (
    <div>
      <div>
      <div className="hydraulic_c">
        <p>STANDARD COMPONENTS</p>
      </div>

      <div className='std_main_div'>
        <div  className='item_div'>
          <img src={p_6_1}/>
          <p>Back Gauge</p>
        </div>
        
        <div className='item_div'>
          <img src={p_7_1}/>
          <p>Side Guard</p>
        </div>
        
        
        <div className='item_div'>
          <img src={p_8_1}/>
          <p>Linear Scale</p>
        </div>
        
      
        <div className='item_div'>
          <img src={i_33}/>
          <p>Fingers</p>
        </div>
        
       
        <div className='item_div'>
          <img src={i_9_1}/>
          <p>Back Gauge</p>
        </div>
        
        
        <div className='item_div'>
          <img src={i_10_1}/>
          <p>Back Gauge</p>
        </div>
      </div>

      
    </div>
    </div>
  )
}

export default STD_components