import React from 'react';
import './Prouct.css'

export const First_part = ({ imageSrc, label1, label2 }) => {
  return (
    <div>
      <div className="two_image">
        <img id='first' src={imageSrc} alt="Product" />
        <div className="prodct_part">
          <p id='label_1'>{label1}</p>
          <p id='label_2'>{label2}</p>
        </div>
      </div>  
    </div>
  );
};
