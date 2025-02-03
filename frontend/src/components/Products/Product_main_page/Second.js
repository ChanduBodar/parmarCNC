import React from 'react';
import './Prouct.css'
import { useNavigate } from 'react-router-dom';

const Second = ({ imageSrc, buttonLabel, redirectPath, imageForMachine }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(redirectPath);
  };

  return (
    <div>
      <div className="machine_desc_part">
        <img src={imageSrc} alt="Product" />
        <div className="machine_and_label_part">
     
            <button className="label_btn" onClick={handleRedirect}>{buttonLabel}</button>
          
      
            <img src={imageForMachine} alt="Machine" id="machine_img" />
          
        </div>
      </div>
    </div>
  );
};

export default Second;
