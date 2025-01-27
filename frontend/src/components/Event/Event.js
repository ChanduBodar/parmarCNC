import React from 'react';
import './event.css';
import EventImg from '../../Images/event_hero_img.png';
import { eventData } from '../../Data_Folders/EventData'; // Import the event data

const Event = () => {
  return (
    <div className="Event_div">
      <div className="hero_event">
        <img src={EventImg} alt="Event Header" />
        <p id="event">EVENT</p>
      </div>

      <div className="event_dicision_part">
        {eventData.map((event) => (
          <div className="event_part" key={event.id}>
            <img src={event.image} alt={event.title} />
            <div className="event_label">
              <p>{event.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
