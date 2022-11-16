import React from 'react'
import CoursesDesign from './CoursesDesign'
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';
import img7 from '../images/7.png';
import img8 from '../images/9.jpg';
import img10 from '../images/10.jpg';
import img11 from '../images/8.png';
import img12 from '../images/11.png';
import img13 from '../images/12.png';
import img14 from '../images/13.png';
import img15 from '../images/14.png';
import img16 from '../images/15.png';

function Courses({courseimage1,courseimage2,courseimage3,Phead,P1,P2,P3,btnVal,VideoLink1,VideoLink2,VideoLink3}) {
  return (
    <div>
      <CoursesDesign
       courseimage1 = {img8}
       courseimage2 = {img7}
       courseimage3 = {img10}
       Phead = "Free Courses"
       P1 = "Introduction To Class In Hindi"
       P2 = "Data Member And Member Function"
       P3 = "Introduction To Constructor"
       btnVal = "Start Watching"
       VideoLink1 = "https://www.youtube.com/embed/Kj-CtpB5v4E"
       VideoLink2 = "https://www.youtube.com/embed/YpjkGPktzJc"
       VideoLink3 = "https://www.youtube.com/embed/f2VMzrkSbEs"
      />
      <CoursesDesign
       courseimage1 = {img5}
       courseimage2 = {img6}
       courseimage3 = {img4}
       Phead = "Free Courses"
       P1 = "Default Constructor In C++"
       P2 = "Parameterized Constructor In C++"
       P3 = "Copy Constructor In C++"
       btnVal = "Start Watching"
       VideoLink1 = "https://www.youtube.com/embed/Gk_Iq2Ggpd8"
       VideoLink2 = "https://www.youtube.com/embed/PgejItgB_yM"
       VideoLink3 = "https://www.youtube.com/embed/TqcbM4Nim0Q"
      />
      <CoursesDesign
       courseimage1 = {img11}
       courseimage2 = {img12}
       courseimage3 = {img13}
       Phead = "Free Courses"
       P1 = "Virtual Function In Hindi"
       P2 = "Call By Value In Hindi"
       P3 = "Call By Reference"
       btnVal = "Start Watching"
       VideoLink1 = "https://www.youtube.com/embed/HPIIEwJwhMw"
       VideoLink2 = "https://www.youtube.com/embed/kzqxGlWiz4Q"
       VideoLink3 = "https://www.youtube.com/embed/Fe0F7Dyr6mY"
      />
      <CoursesDesign
       courseimage1 = {img14}
       courseimage2 = {img15}
       courseimage3 = {img16}
       Phead = "Free Courses"
       P1 = "Call By Pointer/Address In Hindi"
       P2 = "Introduction Video"
       P3 = "Scientific Calculator Using Python"
       btnVal = "Start Watching"
       VideoLink1 = "https://www.youtube.com/embed/CTOCvD3qqsw"
       VideoLink2 = "https://www.youtube.com/embed/iY4xtjGSKIM"
       VideoLink3 = "https://www.youtube.com/embed/dz_iOeB3liA"
      />
    </div>
  )
}

export default Courses