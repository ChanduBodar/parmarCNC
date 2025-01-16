import React from 'react'
import './CountryInfo.css'
import Arab from './images_for_main_page/united-arab-emirates.png'
import nextImg from './images_for_main_page/download (2).png'
import brahin from './images_for_main_page/download (3).png'

const CountryInfo = () => {
    return (
        <div className='country'>
            <div className='header_text'>
                <p>Global Representatives</p>
            </div>
            <div className="country_info">
                <div className="country_divs">
                    <div className="divs_1">
                        <img src={Arab} alt="United Arab Emirates" />
                        <div className="c_name">
                            <p>United Arab Emirates</p>
                        </div>
                    </div>

                    <div className="divs_1">
                        <img src={nextImg} alt="Saudi Arabia" />
                        <div className="c_name">
                            <p>Saudi Arabia</p>
                        </div>
                    </div>
                </div>

                <div className="divs_2">
                    <img src={brahin} alt="Bahrain" />
                    <div className="c_name">
                        <p>Bahrain</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryInfo