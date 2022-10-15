import React,{useEffect} from 'react'
import Navbar from './Navbar';
import Aboutus from './Aboutus';
import Footer from './Footer';
import {useLocation} from "react-router-dom"

function Aboutrouter() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
        <Navbar/>
        <Aboutus/>
        <Footer/>
    </div>
  )
}

export default Aboutrouter