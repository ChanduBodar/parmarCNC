import React from 'react';
import './Second.css';
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
          <div className='lable_taging'>
            <button className="CNC_b_t_n" onClick={handleRedirect}>{buttonLabel}</button>
          </div>
          <div className='machne_image'>
            <img src={imageForMachine} alt="Machine" id="big_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
