import React from 'react'
import './Main_part.css';

const Main_part = () => {
  return (
    <div>
         <div className="two_image">
        <div className="forword_div">
          <p>
            We PARMAR CNC MACHINES (INDIA) LLP was established in the year 2009.
            Our products are under the brand name "PARMAR". We manufacture and
            supply an exclusive range of Power Press Machines, Mechanical Shearing
            Machines, Hydraulic Shearing Machines, and Hydraulic Press Brakes.
            <br />
            Our 15 years of experience and research in modern technology have
            made PARMAR CNC MACHINES (INDIA) LLP a renowned name in sheet metal
            machinery. Our office is situated in Rajkot with state-of-the-art
            production facilities, upgraded machinery, and testing equipment. Our
            major objectives are to provide quality, technology, innovation, and
            maintenance-free machines. These machines are manufactured using tested
            plates for higher efficiency and lower maintenance.
          </p>
        </div>

        <div className="backword_div">
          <img
            src={require("./images_for_main_page/Company_picture_1.png")}
            alt="Company Image 1"
          />
        </div>
      </div>
    </div>
  )
}

export default Main_part