import React from 'react'
import './Datapart.css'
import Datalist from './Datalist'

const Datapart = () => {
  return (
    <div>
      <div className="">
        <div className="Datapart_data">
          <p>
            Edge Series Press Brake Heavy Duty Frame is Designed to minimize
            welding structures to the highest possible uniformity in the press brake
            frame structure. In addition to high quality, we achieve a cost-effective
            and fast manufacturing process that enables large-scale press brakes to
            be also delivered quickly and affordably to our customers.
          </p>
        </div>

        <div className="general_hader">
          <p>General Specifications :</p>
          <Datalist />
        </div>
      </div>
    </div>
  )
}

export default Datapart;