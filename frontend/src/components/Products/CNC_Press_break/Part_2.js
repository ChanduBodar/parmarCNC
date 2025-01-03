import React from 'react'
import './Part_2.css'
import { useNavigate } from 'react-router-dom';

const Part_2 = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
      navigate('/edge_series'); // Navigate to '/child' page
    };
  return (
    <div>
          {/* Part-2 */}
        
          <div className="last_part">
                    <div className="back_img">
                        <img src={require("./images/Group 98.png")} alt="CNC Press Brake Machine" />
                        <div className="img_text_part_1">
                            <div className="left_part_1">


                                <p>CNC Press Brake Machine Edge Series</p>

                                <button onClick={handleRedirect}>VIEW</button>


                            </div>
                            <div className="right_part_1">
                                <img src={require("./images/parmar_catalog[1]222 2.png")} alt="Catalog" id="big_img_1" />

                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Part_2