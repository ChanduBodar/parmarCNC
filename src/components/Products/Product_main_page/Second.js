import React, { useEffect, useRef } from 'react';
import './Product.css';
import { useNavigate } from 'react-router-dom';

const Second = ({ imageSrc, buttonLabel, redirectPath, imageForMachine }) => {
  const navigate = useNavigate();
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  const handleRedirect = () => {
    navigate(redirectPath);
  };

  return (
    <div ref={componentRef}>
      <div className="machine_desc_part">
        <img src={imageSrc} alt="Product Background" loading="lazy" />
        <div className="machine_and_label_part">
          <button 
            className="label_btn" 
            onClick={handleRedirect}
            aria-label={`Navigate to ${buttonLabel}`}
          >
            {buttonLabel}
          </button>
          <img 
            src={imageForMachine} 
            alt="Machine" 
            id="machine_img" 
            loading="lazy" 
          />
        </div>
      </div>
    </div>
  );
};

export default Second;