import React from 'react'
import './Hydarlic.css'
import img_1 from './Frame_26_images/PNCPBR1030 Rear cylinder press brake 1.png'

import v_7 from './Frame_26_images/Vector 7.png'
import img_74 from './Frame_26_images/Group 74.png'
import img_75 from './Frame_26_images/Group 75.png'
import im_13 from './Frame_26_images/parmar_13 1.png'

import media_1 from '../Media_buttons/Media_images/Group 119.png'
import media_2 from '../Media_buttons/Media_images/Group 120.png'
import media_3 from '../Media_buttons/Media_images/Group 121.png'
import { useNavigate } from 'react-router-dom'
import Specification from '../Calculator&Technical_specification/Specification'

const Hydarlic = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
      navigate('/download');
    };
    return (
        
            <div className="edge_series" id="hydraulic_press_brake_page">
                {/* part-1 */}
                <div className="cnc_hero_section">
                    <img src={img_1} id='cnc_logo_img' alt="First Image" />

                    {/* Right part */}
                   
                        <div className='cnc_text_section'>
                            <div className='cnc_description'>
                                <p id='CNC_label_text'>
                                    REAR CYLINDER HYDRAULIC PRESS BRAKE
                                </p>
                                <p id='CNC_sub_label_text'>
                                   Capacity : 1270mm X 20 TON TO 6000mm x 600 TON
                                </p>
                            </div>

                            <div className='media_buttons'>
                                <img id='md_btn' src={media_1}></img>
                                <img id='md_btn' src={media_2}></img>
                                <img id='md_btn' src={media_3} onClick={handleRedirect}/>
                                             
                            </div>


                        
                    </div>
                </div>

                {/* part-2 */}
                <div className="img_and_data">
                    <div className="Datapart_main_part">
                        <p id='datapart_data'>
                            Rear Cylinder Hydraulic Press Brake Machine is durable and
                            manufactured using latest techniques to ensure excellent
                            performance. Rear Cylinder to Technically advanced features
                            of our hydraulic press brake make it extremely popular in the
                            global market.
                        </p>
                        
                        <p id='datapart_data'>
                            Press Brakes are developed by keeping latest technology
                            with cylinders are mounted at back side of press Brake
                            and are synchronize for parallelism between ram and table,
                            by providing mechanical links connected with cylinder. The
                            electric control panel is fixed on side wall at convenient
                            place for easy reach of operator. It includes push button
                            pendant and foot switch. Its high operational accuracy and
                            precise results, this machine is widely used and appreciated
                            by the clients for long service life.
                        </p>
                    </div>
                    <div className="hy_img_part">
                        <img src={img_1} alt="" className="hydraulic-press-no-bg" />
                    </div>
                </div>

                <div className="border">
                    <img src={v_7} alt="" />
                </div>

                {/* part-3 */}
                <div className="Hyralic_3">
                    <div className="Hyralic_3_img_1">
                        <img src={img_74} alt="" />
                    </div>
                    <div className="Hyralic_3_img_2">
                        <img src={img_75} alt="" />
                    </div>
                    <div className='hyralic_last_img'>
                        <div className='f_part'>
                            <p>CYBELIC</p>
                        </div>

                        <img id='hydrolic_img' src={im_13} />

                        <div className='cyb_part'>
                            <p>Cyb Touch 8</p>
                        </div>

                    </div>
                </div>

                {/* part-4 */}
                <Specification/>

                {/* part-5 */}
                <div className="part_5">
                    <div className="part_5_1">
                        <div className="first_label">
                            <p>Standard Features:</p>
                        </div>
                        <div className="first_label_data">
                            <ul>
                                <li>Front Sheet Support</li>
                                <li>Rear Gauge bt Front Operated</li>
                                <li>One Suitable Five Way Die</li>
                                <li>Punch</li>
                                <li>Manual Operated Lubrication System</li>
                                <li>Pair of Lifting Links</li>
                            </ul>
                        </div>
                    </div>

                    <div className="second_label_data">
                        <ul>
                            <li>
                                Movable Operation Console with <br />
                                Foot Switch & Various Operation Push Buttons
                            </li>
                            <li>Main Motor Drive</li>
                            <li>Die Clamp</li>
                            <li>
                                Electric Control Panel with Selection of <br />
                                'Auto', 'Inch' & 'Single' Cycle Mode Operation
                            </li>
                        </ul>
                    </div>

                    <div className="part_5_3">
                        <div className="first_label">
                            <p>Optional Accessories:</p>
                        </div>
                        <div className="first_label_data">
                            <ul>
                                <li>Motorised Back Gauge with PLC</li>
                                <li>Anti Detection System</li>
                                <li>Sliding Sheet with Swing Away Suppers</li>
                                <li>Extra Depth</li>
                                <li>NC Controller</li>
                                <li>Extra Horns</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Hydarlic