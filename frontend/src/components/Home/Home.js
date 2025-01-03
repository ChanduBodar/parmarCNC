import React from "react";
import './home.css'
import './Home_media.css'


function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero_box">
        <div className="hero_image">
          <img src={require("./images_for_main_page/Hero_image.jpg")} alt="Hero" />
        </div>
        <div className="hero_text">
          <h1>WELCOME TO</h1>
          <h3>PARMAR CNC MACHINES (INDIA) LLP</h3>
        </div>
        <div className="hero_button">
          <button>LEARN MORE</button>
        </div>
      </div>

    

      {/* Text Section */}
      <div className="text_container">
        <p>
          We PARMAR CNC MACHINES (INDIA) LLP Established in the year 2009. Our products under
          brand name "PARMAR". We manufacture and supply an exclusive range of Power Press Machines,
          Mechanical Shearing Machines, Hydraulic Shearing Machines, and Hydraulic Press Brakes. <br /><br />
          With 15 years of experience, our research and integration of modern technology have made
          PARMAR a name renowned in sheet metal machinery. Our office is located in Rajkot, equipped
          with state-of-the-art production facilities and upgraded machinery. <br /><br />
          Our major objectives are providing quality, technology, innovations, and maintenance-free
          machines, manufactured using tested plates for higher efficiency and lower maintenance.
          We have been in this field for over a decade and devote all our efforts to provide superior
          quality products at reasonable prices, innovative designs, and professional after-sales services.
        </p>
      </div>

      {/* Overlap Image Section */}
      <div className="over_lap_class">
        <div className="overlap_1">
          <img src={require("./images_for_main_page/PARMAR_CNC-removebg-preview 3.png")} alt="Parmar CNC" />
          <div className="side_of_text">
            <p>20+ PRODUCTS</p>
            <div className="more_text">
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>

        <div className="overlap_1">
          <img src={require("./images_for_main_page/map 2.png")}alt="Map" />
          <div className="side_of_text">
            <p>ALL INDIA PRESENCE</p>
            <div className="more_text">
             <button>LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
