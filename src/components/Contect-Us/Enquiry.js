import React from 'react';
import './contect_us.css'

const Enquiry = ({ enquiryData }) => {
  return (
    <div>
      <div className="Enquiry_part">
        <div className="Enquiry_div">
          {/* Enquiries */}
          <div className="info_div">
            <img id="pho_img" src={enquiryData.enquiryImage} alt="Enquiries" />
            <div className="data_1">
              <div className="d1">
                <p>ENQUIRIES:</p>
              </div>
              <div className="contect_info">
                <p>Domestic: {enquiryData.domesticEmail}</p>
                <p>International: {enquiryData.internationalEmail}</p>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="info_div">
            <img id="pho_img" src={enquiryData.contactUsImage} alt="Contact Us" />
            <div className="data_1">
              <div className="d1">
                <p>CONTACT US</p>
              </div>
              <div className="contect_info">
                <p>Domestic: {enquiryData.domesticPhone}</p>
                <p>International: {enquiryData.internationalPhone}</p>
              </div>
            </div>
          </div>
        </div>

        <img id="s_img" src={enquiryData.catalogImage} alt="Catalog" />
      </div>

      <div className="line_border"></div>
    </div>
  );
};

export default Enquiry;
