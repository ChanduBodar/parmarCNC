import React from 'react'
import './Edge_series.css'
import Datalist from './Datalist'


const Datapart = () => {
  return (
    <div>
      <div className="Datapart_main_part">
        
          <p id='datapart_data'>
            Edge Series Press Brake Heavy Duty Frame is Designed to minimize
            welding structures to the highest possible uniformity in the press brake
            frame structure. In addition to high quality, we achieve a cost-effective
            and fast manufacturing process that enables large-scale press brakes to
            be also delivered quickly and affordably to our customers.
          </p>

        <div className="General_specification">
          <p id='general_label'>General Specifications :</p>
          <Datalist />
        </div>

      </div>
    </div>
  )
}

export default Datapart;