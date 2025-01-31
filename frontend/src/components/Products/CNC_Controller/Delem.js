import React from 'react'
import './CNC_Controller'
import Delem_Child_1 from './Delem_Child_1'
import Delem_Child_2 from './Delem_Child_2'
const Delem = () => {
  return (
    <div className='delem_main_container'>
      
      <p id='delem_label'>DELEM</p>
      <div className='delem_main_div'>
        <Delem_Child_1/>
        <Delem_Child_2/>
      </div>
     </div>
  )
}

export default Delem