import React from 'react'
import './Hydrolic_sahring.css'
import Shering_hero from './Shering_hero'

import Technical_specification_sahring from './Technical_specification_sahring'
import Standard_components from './Standard_components'
import Shering_com from './Shering_com'
import Excellernce from './Excellernce'
import Specification from '../Calculator&Technical_specification/Specification'


const Hydrolic_Sharing = () => {
  return (
    <div className='edge_series'>
      <Shering_hero/>
      <Technical_specification_sahring/>
      <Specification/>
      <Standard_components/>
      <Shering_com/>
      <Excellernce/>
    </div>
  )
}

export default Hydrolic_Sharing