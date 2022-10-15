import React,{useEffect} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Courses from './Courses'
import {useLocation} from "react-router-dom"
function Courserouter() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
        <Navbar/>
        <Courses/>
        <Footer/>
    </div>
  )
}

export default Courserouter