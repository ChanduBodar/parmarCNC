import React from 'react'
import './CNC_controller.css';
import CNC_Controller from '../CNC_Controller/CNC_Controller';

const CNC_controller = () => {
  return (
    <div>
        <div>
        {/* CNC Controller Header */}
        <div className="cnc_header">
            <p>CNC Controller</p>
        </div>

        <CNC_Controller/>
    </div>
    </div>
  )
}

export default CNC_controller