import React from 'react'
import './Shering_2.css'
import { useNavigate } from 'react-router-dom';

const Shering_2 = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
      navigate('/hydrolic_sharing_machine'); // Navigate to '/child' page
    };
  return (
    <div>
        <div className="last_part">
                    <div className="back_img">
                        <img src={require("./Sherimg_images/Group 14.png")} alt="CNC Press Brake Machine" />
                        <div className="img_text_part_1">
                            <div className="width_part">


                                <p>VARIABLE RACK ANGLE HYDRAULIC SHEARING MACHINE</p>

                                <button onClick={handleRedirect}>VIEW</button>


                            </div>
                            <div className="rg_part">
                                <img src={require("./Sherimg_images/parmar_14 1.png")} alt="Catalog" id="b_img" />

                            </div>
                        </div>
                    </div>
        </div>
    </div>
  )
}

export default Shering_2