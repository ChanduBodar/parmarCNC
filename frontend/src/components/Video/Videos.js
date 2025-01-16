import React from 'react'
import video_img from './images/Group 126.png'
import './video.css'

const Videos = () => {
  return (
    <div className='video_division'>
      <div className='video_div'>
        <img src={video_img} />
        <p id='video_lable'>VIDEOS</p>
      </div>
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/d6rSHlYkT9c?si=n1SqCNb2HtByg6Bu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0XHGbWYj-P8?si=igoFsjzS6SBQaL-o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default Videos