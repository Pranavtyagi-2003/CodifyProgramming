import React,{useEffect} from 'react'
import Blog from './Blog'
import Footer from './Footer'
import Navbar from './Navbar'
import {useLocation} from "react-router-dom"
function Blogrouter() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
        <Navbar/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default Blogrouter