import React,{useEffect} from 'react'
import Navbar from './Navbar';
import Slider from './Slider';
import Cards from './Cards';
import Footer from './Footer';
import {useLocation} from "react-router-dom"

function Home() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default Home