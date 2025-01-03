import React from 'react'
import './Whyus.css';

const Whyus = () => {
  return (
    <div>
        <div className="text_header">
             <h1>WHY US</h1> 
         </div>
      {/* Part 3: Two Image Container - Forward and Backward Div */}
      <div className="two_image_2">
        <div className="forword_div_2">
          <p>
            We at PARMAR CNC MACHINES (INDIA) LLP are committed to customer
            satisfaction by providing products that consistently meet or exceed
            customer requirements. We aim to grow as an industry leader by
            exceeding customer expectations through continuous improvement by
            the integrity, teamwork, and commitment of our people.
            <br />
            Our mission is to find the best engineering solutions for our
            customer's particular requirements, which results in the creation of
            long-standing commercial relationships built on mutual trust and
            understanding.
          </p>
        </div>

        <div className="backword_div_2">
          <img
            src={require("./images_for_main_page/Company_picture_3.png")}
            alt="Company Image 3"
          />
        </div>
      </div>
    </div>
  )
}

export default Whyus