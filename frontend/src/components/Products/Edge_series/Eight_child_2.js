import React from 'react'
import './Delem.css'
import img_3 from './images_for_main_page/image 3.png'
import img_9 from './images_for_main_page/image 9.png'
import img_10 from './images_for_main_page/image 10.png'
import img_6 from './images_for_main_page/image 6.png'

const Eight_child_2 = () => {
  return (
    <div >
      <div >
        {/* 8.1 part */}

        <div className="products">
          <div className="p_1">
            <div className="label">
              <p>DA- 53 T</p>
            </div>

            <div className="label_img">
              <img src={img_3} alt="" />
            </div>

            <div className="product_desc">
              <ul>
                <li>"Hot-key" touch navigation</li>
                <li>"10.1" high resolution colour TFT</li>
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
          <div className="p_2">
            <div className="label">
              <p>DA- 58 T</p>
            </div>
            <div className="label_img">
              <img src={img_9} alt="" />
            </div>

            <div className="product_desc">
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
        <div className="products">
          <div className="p_1">
            <div className="label">
              <p>DA- 66 T</p>
            </div>

            <div className="label_img">
              <img src={img_10} alt="" />
            </div>

            <div className="product_desc">
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
          <div className="p_2">
            <div className="label">
              <p>DA- 69 T</p>
            </div>
            <div className="label_img">
              <img src={img_6} alt="" />
            </div>

            <div className="product_desc">
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

       
      </div>
    </div>
  )
}

export default Eight_child_2