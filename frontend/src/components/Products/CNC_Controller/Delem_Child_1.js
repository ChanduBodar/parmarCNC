import React from 'react'
import './CNC_controller.css'
import Da_53 from './Imges/Da_53.png';
import Da_58 from './Imges/Da_58.png';
import Da_66 from './Imges/Da_66.png';
import Da_69 from './Imges/Da_69.png';

const Delem_Child_1 = () => {
    return (
        <div>

            {/* 8.1 part */}
            <div className="machine_mega_div">
                <div className="machine_two_pair">
                    
                    <p id='label_of_machine'>DA- 53 T</p>
                    

                    
                    <img id='img_of_machine' src={Da_53} alt="" />
                

                    <div className="desc_of_machine">
                        <ul>
                            <li>"Hot-key" touch navigation</li>
                            <li>"10.1"high resolution colour TFT</li>
                            <li>Up to 4 axes (Y1, Y2 + 2 aux.axes)</li>
                            <li>Crowning control</li>
                            <li>Tool/material/ Product library</li>
                            <li>Servo and frequency inverter control</li>
                            <li>TandemLink (option)</li>
                            <li>USB memory stick interfacing</li>
                            <li>Profile-T offline software</li>
                        </ul>
                    </div>


                </div>
                <div className="machine_two_pair" id='second_machine'>
                    
                        <p id='label_of_machine'>DA- 58 T</p>
                    
                    
                        <img id='img_of_machine' src={Da_58} alt="" />
                    

                    <div className="desc_of_machine">
                        <ul>
                            <li>2D graphical touch screen programming</li>
                            <li>15" high resolution colour TFT</li>
                            <li>Bend sequence calculation</li>
                            <li>Crowning control</li>
                            <li>Servo and frequency inverter control</li>
                            <li>USB, peripheral interfacing</li>
                            <li>Profile-T offline software</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 8.2 part */}
            <div className="machine_mega_div">
                <div className="machine_two_pair">
                    
                        <p id='label_of_machine'>DA- 66 T</p>
                    

                
                        <img id='img_of_machine' src={Da_66} alt="" />
                   

                    <div className="desc_of_machine">
                        <ul>
                            <li>2D graphical touch screen programming mode</li>
                            <li>17" high resolution colour TFT</li>
                            <li>Full Windows application suite</li>
                            <li>Delem Modusys compatibility <br></br>
                                (module scalability and adaptivity)</li>
                            <li>USB, peripheral interfacing</li>
                            <li>User specific application support within the control's
                                multitasking enviroment
                            </li>
                            <li>Sensor bending & correction interface Profile-TL
                                offline software
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="machine_two_pair" id='da_69_T' >
                    
                        <p id='label_of_machine'>DA- 69 T</p>
                    
                    
                        <img id='img_of_machine' src={Da_69} alt="" />
                    

                    <div className="desc_of_machine">
                        <ul>
                            <li> 3D and 2D graphical touch screen programming mode</li>
                            <li>3D visualisation in simulation and production</li>
                            <li>17" high resolution colour TFT</li>
                            <li>Full windows application suite</li>
                            <li>Delem Modusys compatibility(module scalability and adaptivity)</li>
                            <li>USB. peripheral interfacing</li>
                            <li>User specific application suppport within the control's multitasking enviroment</li>
                            <li>Sensor bending & correction interface</li>
                            <li>Profile-T3D offline software</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border_line_1"></div>
        </div>

    )
}

export default Delem_Child_1