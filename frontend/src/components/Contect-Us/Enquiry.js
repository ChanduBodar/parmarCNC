import React from 'react'
import './Enquiry.css'

const Enquiry = () => {
    return (
        <div>
            {/* Inquire Section */}
            <div className="Enquiry_part">
                <div className="Enquiry_div">
                    {/* Enquiries */}
                    <div className="info_div">
                        <img id='pho_img' src={require("./images_for_main_page/Group 93.png")} alt="Enquiries" />
                        <div className="data_1">
                            <div className="d1">
                                <p>ENQUIRIES:</p>
                            </div>
                            <div className="contect_info">
                                <p>Domestic:<br></br>Export.parmarllp@gmail.com</p>
                                <p>International: Export.parmarllp@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div className="info_div">
                        <img id='pho_img' src={require("./images_for_main_page/Group 91.png")} alt="Contact Us" />
                        <div className="data_1">
                            <div className="d1">
                                <p>CONTACT US</p>
                            </div>
                            <div className="contect_info">
                                <p>Domestic: +9195108 22377</p>
                                <p>International: +9194272 54147</p>
                            </div>
                        </div>
                    </div>
                </div>

                <img id='s_img' src={require("./images_for_main_page/parmar_catalog[1]004 1.png")} alt="Catalog" />
            </div>

            <div className="line_border"></div>
        </div>
    )
}

export default Enquiry