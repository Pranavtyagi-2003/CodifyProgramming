import logo from '../images/logo.png';
import './Navbar.css'
import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react'

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

  }, [])
  return (
    <div>
    <nav className= 'navbar background h-nav'>
        <div className="lefthalf">
                <Link to="/"><img src={logo} alt="Logo" /></Link>
                {(toggleMenu || screenWidth > 831) && (
                <ul className='navlist v-class'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/course">Course</Link></li>
                <li><Link to="/contactus">Contact us</Link></li>
            </ul>
             )}
        </div>
        <div className='righthalf v-class'>
          <Link to="/" className='spanlink'><h3>Codify <span>Programming</span></h3></Link> 
        </div>
        <div className='burger' onClick={toggleNav}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
    </nav>
</div>
  )
}

export default Navbar