import React from 'react'
import './Shering_hero.css'
import first_logo from '../Edge_series/images_for_main_page/Group 121.png';
import second_logo from '../Edge_series/images_for_main_page/Group 119.png';
import third_img from '../Edge_series/images_for_main_page/Group 120.png';

const Shering_hero = () => {
  return (
    <div>
      <div className="S_hero">

        <img src={require('./Frame27_images/parmar_14 1.png')} alt="" />
        <div className="S_hero_2">
          <img src={require('./Frame27_images/Group 18.png')} alt="" />

          <div className='m_buttons_shering'>
            <img src={second_logo} alt="CNC Press" />
            <img src={third_img} alt="CNC Press" />
            <img src={first_logo} alt="CNC Press" />
          </div>

        </div>
      </div>
      <div className='border_part'>

      </div>
    </div>
  )
}

export default Shering_hero