import React from 'react'
import im_3 from './Frame27_images/parmar_14 2.png'
import './Hydrolic_sahring.css'
import im_56 from './Frame27_images/Group 82.png'
import im_70 from './Frame27_images/Group 83.png'

const Technical_specification_sahring = () => {
  return (
    <div>
      <div className='img_and_data'>
        <div className='Datapart_main_part'>
          <p id='datapart_data'>
            PARMAR is manufactured Hydraulic Variable Rake Angle Shears
            which is rated as one of the best in the markets due to its
            tensile strength and robust build. The rake angle is adjustable
            to suit thickness and material; the sheets are clamped hydraulically
            before cut starts.These are designed and developed to shear plates
            with clean square edges. Further, these come with close working
            tolerances with options of different rake angles.
          </p>

          <p id='datapart_data'>
            We are a quality centric organization, therefore we fabricate our products
            implementing sophisticated technologies in accordance with the international
            quality standards. This shearing machine is highly praised by the clients for
            its smooth functionality and large scale production capability.
          </p>

        </div>

        <img src={im_3}></img>


      </div>
      <div className='Tech_images'>
        <img id='im_1' src={im_56}></img>
        <img  id='im_2'src={im_70}></img>
      </div>
    </div>

  )
}

export default Technical_specification_sahring