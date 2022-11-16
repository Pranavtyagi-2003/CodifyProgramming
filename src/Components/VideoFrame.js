import React from 'react'
import './VideoFrame.css'
// import {useLocation} from "react-router-dom"

function VideoFrame({VideoLink,P}) {
  // const location = useLocation();
  return (
    <div className='frame'> 
      <div className="left">
        <iframe width="560" height="315" src={VideoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
      </div>
     <div className="right">
      <h5 className='video-title'>{P}</h5>
     </div>
    </div>
  )
}

export default VideoFrame