import React from 'react'
import './contect_us.css'
import Arab from '../../Images/country_img_1.png'
import nextImg from '../../Images/country_img_2.png'
import brahin from '../../Images/country_img_3.png'

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
                        <div className="c_name" id='my_name'>
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