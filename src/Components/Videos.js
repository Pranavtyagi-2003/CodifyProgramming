import React,{useEffect} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import VideoFrame from './VideoFrame'
import {useLocation} from "react-router-dom"

function Videos() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
        <Navbar/>
        <VideoFrame
         VideoLink = {location.state.VideoLink}
        />
        <Footer/>
    </div>
  )
}

export default Videos