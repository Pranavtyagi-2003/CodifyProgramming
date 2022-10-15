import React from 'react'
import './VideoFrame.css'
// import {useLocation} from "react-router-dom"

function VideoFrame({VideoLink}) {
  // const location = useLocation();
  return (
    <div className='frame'>
      <iframe width="560" height="315" src={VideoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default VideoFrame