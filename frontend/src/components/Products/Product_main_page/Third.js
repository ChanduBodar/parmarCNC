import React from 'react';
import './Prouct.css'
import { useNavigate } from 'react-router-dom';

const Third = ({ imageSrc, buttonLabel, redirectPath, imageForMachine }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(redirectPath);
  };

  return (
    <div>
      <div className="ba_img_2">
        <img src={imageSrc} alt="Product" />
        <div className="above_div">
         
            <img src={imageForMachine} alt="Machine" id="big" />
          
          
            <button className='CNC_b_t_n' onClick={handleRedirect}>{buttonLabel}</button>
          
        </div>
      </div>
    </div>
  );
};

export default Third;
