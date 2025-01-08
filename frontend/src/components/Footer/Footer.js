import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">

            <p id="contect">
                CONTACT US
            </p>

            <div className="ma_part">
                <div className="footer_text_2">
                    <p>
                        Survey No. 91, Jay Industrial Area, Hadamtala, 2 Rajkot - 360311 Gondal Road, Rajkot,
                        <br />
                        360002.Gujarat-India
                    </p>
                </div>

                <div className="foot_1">
                    <img src={require("./Footer_images/iso 2.png")} height="10%" width="10%" alt="Hero" />

                    <div className="middle_element">
                        <div className="tags">
                            <img src={require("./Footer_images/Vector-1.png")} alt="Vector-1" />
                            <img src={require("./Footer_images/Vactor-2.png")} alt="Vector-2" />
                            <img src={require("./Footer_images/Vector-3.png")} alt="Vector-3" />
                            <img src={require("./Footer_images/Vector-4.png")} alt="Vector-4" />
                        </div>

                        <div className="middle_element_text">
                            <p>+91 94272 54147 <br />+91 94272 54147</p>
                        </div>
                    </div>

                    <img src={require("./Footer_images/certificate 2.png")} height="130px" width="110px" />
                </div>

                <div className="footer_line">
                    <p>
                        We are an ISO 9001:2015 certified company established in 2009 engaged in manufacturing of All
                        type of Hydraulic Press Machine in Rajkot- Gujarat -India.
                    </p>
                </div>
            </div>

            <div className="footer_last_part">
                <p>©2024 Parmar CNC Machines (India) LLP, All rights reserved
                    <br />
                    Developed by ELVIS Software Private Limited
                </p>
            </div>

        </div>
    );
}

export default Footer;