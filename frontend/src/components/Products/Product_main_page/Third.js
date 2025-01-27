import React from 'react';
import './Third.css';
import { useNavigate } from 'react-router-dom';

const Third = ({ imageSrc, buttonLabel, redirectPath, imageForMachine }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(redirectPath);
  };

  return (
    <div>
      <div className="ba_img">
        <img src={imageSrc} alt="Product" />
        <div className="above_div">
          <div className="right_text_part">
            <img src={imageForMachine} alt="Machine" id="big" />
          </div>
          <div className="tag_part">
            <button onClick={handleRedirect}>{buttonLabel}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
