import React from 'react'
import './Hero_container.css'

const Hero_container = () => {
    return (
        <div>
            <div className="hero_container">
                <div className="hero_image">
                    <img src={require("./images_for_main_page/businessman-using-laptop-mobile-phone.png")} alt="Hero" />
                </div>

                <div className="des_text">
                    <p>CONTACT US</p>
                </div>
            </div>
        </div>
    )
}

export default Hero_container