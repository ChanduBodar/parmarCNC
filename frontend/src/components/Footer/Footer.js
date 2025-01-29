// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { footerText, footerImages } from '../../Data_Folders/Footerdata'; // Import the data

const Footer = () => {
    return (
        <div className="footer">
            <p id="contact">{footerText.contactTitle}</p>

            <div className="ma_part">
                <div className="footer_text_2">
                    <p>{footerText.address}</p>
                </div>

                <div className="foot_1">
                    <img id="iso_img" src={require(`${footerImages.isoImage}`)} alt="ISO Certification" />

                    <div className="middle_element">
                        <div className="tags">
                            {footerImages.vectorImages.map((image, index) => (
                                <img key={index} src={require(`${image}`)} alt={`Vector-${index + 1}`} />
                            ))}
                        </div>

                        <div className="middle_element_text">
                            <p dangerouslySetInnerHTML={{ __html: footerText.phoneNumbers }}></p>
                        </div>
                    </div>

                    <img id="certificate_img" src={require(`${footerImages.certificateImage}`)} alt="Certificate" />
                </div>

                <div className="footer_text">
                    <p>{footerText.companyDescription}</p>
                </div>
            </div>

            <div className="footer_last_part">
                <p>
                    {footerText.copyrightText}
                    <br />
                    {footerText.developerText}
                </p>
            </div>
        </div>
    );
};

export default Footer;
