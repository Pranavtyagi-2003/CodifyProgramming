import React,{useEffect} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Contactus from './Contactus'
import {useLocation} from "react-router-dom"
function Contactrouter() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
        <Navbar/>
        <Contactus/>
        <Footer/>
    </div>
  )
}

export default Contactrouter