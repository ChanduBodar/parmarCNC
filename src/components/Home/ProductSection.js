import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductSection.css';

// Import product images
import EdgeSeries from '../../Images/CNC PRESS BRAKE MACHINE EDGE SERIES.png';
import RearCylinder from '../../Images/Hydrolic_press_break_machine_img.png';
import EdgeHSeries from '../../Images/CNC PRESS BRAKE MACHINE EDGE H SERIES.png';
import SynchroHydraulic from '../../Images/synchro_hydrolic_machine_img.png';
import VariableRack from '../../Images/Sharing_machine_img.png';

const ProductSection = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: 'CNC PRESS BRAKE MACHINE EDGE SERIES',
      image: EdgeSeries,
      url: '/cnc_press_Brake_machine_edge_series'
    },
    {
      id: 2,
      title: 'REAR CYLINDER HYDRAULIC PRESS BRAKE',
      image: RearCylinder,
      url: '/rear_cylinder_hydraulic_press_brake_machine'
    },
    {
      id: 3,
      title: 'CNC PRESS BRAKE MACHINE EDGE H SERIES',
      image: EdgeHSeries,
      url: '/cnc_press_brake_machine_edge_h_series'
    },
    {
      id: 4,
      title: 'EDGE SERIES SYNCHRO HYDRAULIC PRESS BRAKE',
      image: SynchroHydraulic,
      url: '/edge_series_synchro_hydraulic_press_brake'
    },
    {
      id: 5,
      title: 'VARIABLE RACK ANGLE HYDRAULIC SHEARING MACHINE',
      image: VariableRack,
      url: '/variable_rack_angle_hydraulic_shearing_machine'
    }
  ];

  const handleProductClick = (url) => {
    navigate(url);
  };

  return (
    <section className="product-section">
      <h2 className="product-section-title">Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product.url)}
          >
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <h3 className="product-title">{product.title}</h3>
            <div className="nav-circle">→</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;