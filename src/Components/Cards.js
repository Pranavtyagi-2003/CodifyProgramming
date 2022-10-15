import React, { Component } from 'react'
import './cards.css'
import img1 from '../images/1.jpg';
import img2 from '../images/2.png';
import img3 from '../images/3.jpg';
import {Link} from 'react-router-dom';
export class Cards extends Component {
  render() {
    return (
      <div>
        <div className='Heading'>
            <p><b>Recommended Courses</b></p>
        </div>
        <div className='align'>
          <div className='cards grow'>
           <div>
           <img src={img1} alt="" />
           </div>
           <div>
            <p>Free Courses</p>
           </div>
           <div>
            <p className='p1'>OOPs Concept For Beginners</p>
           </div>
          <Link to = "/course"> <button type="button" class="btn btn-secondary">Start Watching</button></Link>
          </div>
          <div className='cards grow'>
          <div>
           <img src={img2} alt="" />
           </div>
           <div>
            <p>Free Courses</p>
           </div>
           <div>
            <p className='p1'>Function Calling Methods</p>
           </div>
           <Link to = "/course"> <button type="button" class="btn btn-secondary">Start Watching</button></Link>
          </div>
          <div className='cards grow'>
          <div>
           <img src={img3} alt="" />
           </div>
           <div>
            <p>Free Courses</p>
           </div>
           <div>
            <p className='p1'>Programming in C++ Full Course</p>
           </div>
           <Link to = "/course"> <button type="button" class="btn btn-secondary">Start Watching</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Cards