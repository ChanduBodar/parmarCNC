// Product.js (Main Component)
import React, { useEffect } from 'react';
import './Product.css';
import { First_part } from './First_part';
import Second from './Second';
import Third from './Third';
import { productData } from '../../../Data_Folders/ProductData';

const Product = () => {
  // Add scroll reveal animation when component mounts
  useEffect(() => {
    // Check if the URL has a hash and scroll to that element with smooth behavior
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
    
    // For mobile optimization
    const handleResize = () => {
      // Set viewport height (vh) dynamically for mobile browsers
      document.documentElement.style.setProperty(
        '--vh', 
        `${window.innerHeight * 0.01}px`
      );
    };
    
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="hero_part">
      {productData.map((product) => {
        switch (product.component) {
          case 'First_part':
            return (
              <First_part
                key={product.id}
                imageSrc={product.imageSrc}
                label1={product.label1}
                label2={product.label2}
              />
            );
          case 'Second':  
            return (
              <Second
                key={product.id}
                imageSrc={product.imageSrc}
                buttonLabel={product.buttonLabel}
                redirectPath={product.redirectPath}
                imageForMachine={product.imageForMachine}
              />
            );
          case 'Third':
            return (
              <Third
                key={product.id}
                imageSrc={product.imageSrc}
                buttonLabel={product.buttonLabel}
                redirectPath={product.redirectPath}
                imageForMachine={product.imageForMachine}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Product;