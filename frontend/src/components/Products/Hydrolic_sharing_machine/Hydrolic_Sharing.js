import React from 'react'
import './Hydrolic_sahring.css'
import Shering_hero from './Shering_hero'
import Sharing_controller from './Sharing_controller'
import Technical_specification_sahring from './Technical_specification_sahring'
import Standard_components from './Standard_components'
import Shering_com from './Shering_com'
import Excellernce from './Excellernce'


const Hydrolic_Sharing = () => {
  return (
    <div className='main_div'>
      <Shering_hero/>
      <Technical_specification_sahring/>
      <Sharing_controller/>
      <Standard_components/>
      <Shering_com/>
      <Excellernce/>
    </div>
  )
}

export default Hydrolic_Sharing