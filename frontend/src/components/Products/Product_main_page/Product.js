import React from 'react';
import './Prouct.css';
import { First_part } from './First_part';
import Second from './Second';
import Third from './Third';
import {productData}  from '../../../Data_Folders/ProductData'; 

const Company = () => {
  return (
    <div className="hero_part">
      {productData.map(product => {
        if (product.component === 'First_part') {
          return (
            <First_part
              key={product.id}
              imageSrc={product.imageSrc}
              label1={product.label1}
              label2={product.label2}
            />
          );
        } else if (product.component === 'Second') {
          return (
            <Second
              key={product.id}
              imageSrc={product.imageSrc}
              buttonLabel={product.buttonLabel}
              redirectPath={product.redirectPath}
              imageForMachine={product.imageForMachine}
            />
          );
        } else if (product.component === 'Third') {
          return (
            <Third
              key={product.id}
              imageSrc={product.imageSrc}
              buttonLabel={product.buttonLabel}
              redirectPath={product.redirectPath}
              imageForMachine={product.imageForMachine}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default Company;

