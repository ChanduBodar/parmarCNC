import React, { useEffect, useRef } from 'react';
import './Product.css'

export const First_part = ({ imageSrc, label1, label2 }) => {
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

  return (
    <div ref={componentRef}>
      <div className="two_image">
        <img id="first" src={imageSrc} alt="Product" loading="lazy" />
        <div className="prodct_part">
          <p id="label_1">{label1}</p>
          <p id="label_2">{label2}</p>
        </div>
      </div>
    </div>
  );
};