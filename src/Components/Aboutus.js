import React from 'react'
import './Aboutus.css';
import img1 from '../images/My.jpg';
function Aboutus() {
  return (
    <div>
      <div className='abouthead'><p><b>About Us</b></p></div>
      <div className='aboutcontent'>
        <div className='image'><img src={img1} alt="" /></div>
        <div className='content'>
          <p>
            Codify Programming website is all about creativity and innovative work in the field of Technology.
            We provide Programming in C++/C/Java/Python videos, web development courses videos, and articles.
            You will get all of my youtube videos source code and you are free to use it and make changes.
            This website aims at providing information on topics related to C++/C/Java/Python, Data Structure And Algorithm.
            Our approach is to explain the topic in the most simple manner which can be understood by people of any
            background.
          </p>
          <div className='Youtube'> <p>Here is my Youtube channel link  :) </p></div>
          <button className='btn2'><a href='https://www.youtube.com/c/CodifyProgramming'>Click Here !</a></button>
        </div>
      </div>
    </div>
  )
}

export default Aboutus