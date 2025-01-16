import React from 'react'
import { useState } from 'react';
import './contect_us.css'
import Get_touch from './Get_touch';
import Hero_container from './Hero_container';
import Enquiry from './Enquiry';
import CountryInfo from './CountryInfo';
const Contectpage = () => {
    
  return (
    <div className="contect_us">

      <Hero_container/>
      <Enquiry/>
      <CountryInfo/>
      <Get_touch/>    
    
  </div>
);
};


export default Contectpage