import React from 'react';
import './download.css';
import { downloadData } from '../../Data_Folders/Download'; // Import the download data

const Download = () => {
  return (
    <div className="download_section">
      {/* Download Header Section */}
      <div className="download_section">
        <img src={require('../../Images/download_hero_img.png')} alt="Download Header" />
        <p id="Download_tag">DOWNLOAD</p>
      </div>

      {/* Download Part Section */}
      <div className="Down_part">
        {downloadData.map((download) => (
          <div className="download_img_part" key={download.id}>
            <img src={download.image} alt="Download Icon" />
            <div className="download_btn">
              <img src={download.icon} id="do_icon" alt="Download Button Icon" />
              <a href={download.fileName} className="download_text" download={download.downloadName}>
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Download;
