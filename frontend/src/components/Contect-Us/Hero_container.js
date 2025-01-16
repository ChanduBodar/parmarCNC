import React from 'react'
import './Hero_container.css'

const Hero_container = () => {
    return (
        <div>
            <div className="hero_container">
                <div className="hero_image">
                    <img src={require("./images_for_main_page/Group 127.png")} alt="Hero" />
                </div>

                <div className="des_text">
                    <p  id='des_text' >CONTACT US</p>
                </div>
            </div>
        </div>
    )
}

export default Hero_container