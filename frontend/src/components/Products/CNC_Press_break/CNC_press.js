import React from 'react';
import './CNC_press_break.css';

import Part_1 from './Part_1';
import Part_2 from './Part_2';
import Part_3 from './Part_3';
import Part_4 from './Part_4';
import Part_5 from './Part_5';


const CNC_press = () => {
   
    return (
        <div className='cnc_press'>
            <Part_1/>
            <Part_2/>
            <Part_3/>
            <Part_4/>
            <Part_5/>
           
        </div>
    )
}

export default CNC_press;