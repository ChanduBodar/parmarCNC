import React from 'react'
import './event.css'
import Event_img from './imagef_for_event/Rectangle 168.png'
import event_img from './imagef_for_event/expo-2022-ahmedabad.png'


const Event = () => {
  return (
    <div className='Event_div'>
      <div className='hero_event'>
        <img src={Event_img} />
        <p id='event'>EVENT</p>
      </div>

      <div className='event_dicision_part'>

        <div className='event_part'>
          <img src={event_img} />
          <div className='event_label'>
              <p>Expo 2022 Bengaluru</p>
          </div>
        </div>

        
          <div className='event_part'>
            <img src={event_img} />
            <div className='event_label'>
              <p>Expo 2022 ahmedabad</p>
            </div>
          </div>
      

      </div>
    </div>
  )
}

export default Event;