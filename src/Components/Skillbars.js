import SkillBar from 'react-skillbars';
import React from 'react'
import './Skill_bar.css';
function Skillbars() {
    const skills = [
        { type: 'C++', level: 100 , color: { bar: "#D36A0D",   title: { text: '#fff', background: '#124e8c' }}},
        { type: 'ReactJs', level: 90 ,color: { bar: "#02920D", title: { text: '#fff', background: '#333333' }}},
        { type: 'HTML', level: 85 ,color: { bar: "#E31002",title: { text: '#111', background: '#fff' }}},
        { type: 'CSS', level: 75 ,color: { bar: "#2980b9" , title: { text: '#fff', background: '#27ae60' }}},
        { type: 'DSA', level: 70 ,color: { bar: "#02684D"}},
        { type: 'JAVA', level: 65 ,color: { bar: "#E7EFEE", title: { text: '#fff', background: '#46465e' }}},
        { type: 'Python', level: 60 ,color: { bar: "#D0D30D",}}
      ];
  return (
    <div className='Mainouter'>
        <div><p><b>Available Couses on Website</b></p></div>
      <div className='skillbar'>
      <SkillBar className = 'bars' skills={skills} height={'5vh'}/>
      </div>
    </div>
  )
}

export default Skillbars