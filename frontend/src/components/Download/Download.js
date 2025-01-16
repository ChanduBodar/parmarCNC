import React from 'react'
import './download.css'
import down_img from './Img_for_download/Group 125.png'
import icon from './Img_for_download/Group.png'
import downlaod_img from './Img_for_download/PDF_file_icon.svg 1.png'

const Download = () => {

  return (
    <div className='download_section'>

      <div className='download_section'>

        <img src={down_img} alt='' />
        <p id='Download_tag'>
             DOWNLOAD
        </p>
      </div>

      {/* download part section */}
      <div className='Down_part'>
        <div className='download_img_part'>
          <img  src={downlaod_img}/>
          <div className='download_btn'>
            <img src={icon} id='do_icon' />
            <a href='ParmarCNC.pdf' class="download_text" download="Parmar.pdf"> Download</a>
          </div>
        </div>

        <div className='download_img_part'>
          <img  src={downlaod_img}/>
          <div className='download_btn'>
            <img src={icon} id='do_icon' />
            <a href='ParmarCNC.pdf' class="download_text" download="Parmar.pdf"> Download</a>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Download