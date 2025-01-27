import React from 'react';
import { videoData } from '../../Data_Folders/VideoData'; 
import video_img from './images/Group 126.png';
import './video.css';

const Videos = () => {
  return (
    <div className="video_division">
      {/* Video Section Header */}
      <div className="video_div">
        <img src={video_img} alt="Video Section" />
        <p id="video_lable">VIDEOS</p>
      </div>

      {/* Render Videos Dynamically */}
      <div>
        {videoData.map((video) => (
          <div key={video.id} className="video_container">
            <iframe
              width="560"
              height="315"
              src={video.videoUrl}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
