import React from 'react';
import './download.css';
import { downloadData } from '../../Data_Folders/Download'; // Import the download data
import downloadImg from '../../Images/download_hero_img.png'

const Download = () => {
  return (
    <div className="page-container">
      {/* Download Header Section */}
      <div className="hero-section">
              <div 
                className="hero-background"
                style={{
                  backgroundImage: `url(${downloadImg})`,
                }}
              >
                {/* <div className="hero-overlay"></div> */}
              </div>
              <div className="hero-content">
                <h1 className="hero-title animate-fade-in">DOWNLOAD</h1>
              </div>
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
