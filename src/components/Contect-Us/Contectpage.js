import React from 'react';
import './contect_us.css';
import GetTouch from './Get_touch';
import HeroContainer from './Hero_container';
import Enquiry from './Enquiry';
import CountryInfo from './CountryInfo';
import { contactPageData } from '../../Data_Folders/ContectusData';

const Contectpage = () => {
  return (
    <div className="page-container">
      <HeroContainer heroData={contactPageData.heroSection} />
      <Enquiry enquiryData={contactPageData.enquirySection} />
      <CountryInfo />
      <GetTouch getInTouchData={contactPageData.getInTouchForm} />
    </div>
  );
};

export default Contectpage;
