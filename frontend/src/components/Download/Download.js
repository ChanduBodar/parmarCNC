import React from 'react'
import './download.css'
import down_img from './Img_for_download/WhatsApp Image 2025-01-08 at 11.04.33_225b4f00.jpg'
import { RiFileDownloadLine } from "react-icons/ri";

const Download = () => {

  return (
    <div>
      <div className='download_section'>

        <img src={down_img} alt='' />
        
        <div className='download_btn'>
          <RiFileDownloadLine id='do_icon' />
          <a href='ParmarCNC.pdf' class="download_text" download="Parmar.pdf"> Download</a>
        </div>


      </div>
    </div>
  )
}

export default Download