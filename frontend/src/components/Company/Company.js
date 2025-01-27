import React from 'react';
import './company.css';
import { companyData } from '../../Data_Folders/CompanyData'; // Import the data file

const Company = () => {
  const { mainPart, vision, whyUs } = companyData;

  return (
    <div className="company-section">
      
      {/* Main Part */}
      <div className="two_image">
        <div className="forword_div">
          <p>{mainPart.description}</p>
        </div>
        <div className="backword_div">
          <img
            src={require(`${mainPart.image}`)}
            alt="Company Image 1"
          />
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="text_header">
        <h1>{vision.title}</h1>
      </div>
      <div className="two_image_1">
        <div className="backword_div_1">
          <img
            src={require(`${vision.image}`)}
            alt="Company Image 2"
          />
        </div>
        <div className="forword_div_1">
          <p>{vision.description}</p>
        </div>
      </div>

      {/* Why Us */}
      <div className="text_header">
        <h1>{whyUs.title}</h1>
      </div>
      <div className="two_image_2">
        <div className="forword_div_2">
          <p>{whyUs.description}</p>
        </div>
        <div className="backword_div_2">
          <img
            src={require(`${whyUs.image}`)}
            alt="Company Image 3"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Company;
