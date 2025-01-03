import React from 'react'
import { useState } from 'react';
import './contect_us.css'
import Get_touch from './Get_touch';
const Contectpage = () => {
    
  return (
    <div className="contect_us">
    {/* Hero Section */}
    <div className="hero_container">
      <div className="hero_image">
        <img src={require("./images_for_main_page/businessman-using-laptop-mobile-phone.png")} alt="Hero" />
      </div>

      <div className="des_text">
        <p>CONTACT US</p>
      </div>
    </div>

    {/* Inquire Section */}
    <div className="second_part">
      <div className="contect_div">
        {/* Enquiries */}
        <div className="info_div">
          <img id='pho_img'  src={require("./images_for_main_page/Group 93.png")} alt="Enquiries" />
          <div className="data_1">
            <div className="d1">
              <p>ENQUIRIES:</p>
            </div>
            <div className="contect_info">
              <p>Domestic:Export.parmarllp@gmail.com</p>
              <p>International: Export.parmarllp@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <div className="info_div">
          <img id='pho_img' src={require("./images_for_main_page/Group 91.png")} alt="Contact Us" />
          <div className="data_1">
            <div className="d1">
              <p>CONTACT US</p>
            </div>
            <div className="contect_info">
              <p>Domestic: +9195108 22377</p>
              <p>International: +9194272 54147</p>
            </div>
          </div>
        </div>
      </div>

      <img id='s_img' src={require("./images_for_main_page/parmar_catalog[1]004 1.png")} alt="Catalog" />
    </div>

    <div className="line_border"></div>

    {/* Country Representatives Section */}
    <div className="country">
      <div className="header_text">
        <p>Global Representatives</p>
      </div>

      <div className="country_info">
        <div className="country_divs">
          <div className="divs_1">
            <img src={require("./images_for_main_page/united-arab-emirates.png")} alt="UAE" />
            <div className="c_name">
              <p>United Arab Emirates</p>
            </div>
          </div>
          <div className="divs_1">
            <img src={require("./images_for_main_page/download (2).png")} alt="Saudi Arabia" />
            <div className="c_name">
              <p>Saudi Arabia</p>
            </div>
          </div>
        </div>

        <div className="divs_2">
          <img src={require("./images_for_main_page/download (3).png")}  alt="Bahrain" />
          <div className="c_name_2">
            <p>Bahrain</p>
          </div>
        </div>
      </div>
    </div>

    {/* get touch */}

    <Get_touch/>    
    
  </div>
);
};


export default Contectpage