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
      <div className="ba_img">
        <img src={imageSrc} alt="Product" />
        <div className="img_t_part">
     
            <button className="CNC_b_t_n" onClick={handleRedirect}>{buttonLabel}</button>
          
      
            <img src={imageForMachine} alt="Machine" id="big_img" />
          
        </div>
      </div>
    </div>
  );
};

export default Second;
