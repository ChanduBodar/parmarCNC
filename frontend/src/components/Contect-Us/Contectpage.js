import React from 'react';
import './contect_us.css';
import Get_touch from './Get_touch';
import HeroContainer from './Hero_container';
import Enquiry from './Enquiry';
import CountryInfo from './CountryInfo';

const Contectpage = () => {
  return (
    <div className="contect_us">
      <HeroContainer />
      <Enquiry />
      <CountryInfo />
      <Get_touch />
    </div>
  );
};

export default Contectpage;
