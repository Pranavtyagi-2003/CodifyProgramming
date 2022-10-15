import React from 'react'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './CourseDesign.css'
function CoursesDesign({courseimage1,courseimage2,courseimage3,Phead,P1,P2,P3,btnVal,VideoLink1,VideoLink2,VideoLink3}) {
  const navigate = useNavigate();
  const sendlink1 = () => {
    navigate("/video",{state:{VideoLink:VideoLink1}});
    console.log(VideoLink1);
  }
  const sendlink2 = () => {
    navigate("/video",{state:{VideoLink:VideoLink2}});
    console.log(VideoLink2);
  }
  const sendlink3 = () => {
    navigate("/video",{state:{VideoLink:VideoLink3}});
    console.log(VideoLink3);
  }
  return (
    <div className='main'>
        <div className='heading1'><p><b></b></p></div>
        <div className='align1'>
          <div className='cards1 grow1 grow1'>
            <div>
              <img src={courseimage1} alt="" />
            </div>
            <div>
              <p>{Phead}</p>
            </div>
            <div>
              <p className='p1'>{P1}</p>
            </div>
            <button type="button" class="btn btn-secondary" onClick={sendlink1}>{btnVal}</button>
          </div>
          <div className='cards1 grow1 grow1'>
            <div>
              <img src={courseimage2} alt="" />
            </div>
            <div>
              <p>{Phead}</p>
            </div>
            <div>
              <p className='p1'>{P2}</p>
            </div>
            <button type="button" class="btn btn-secondary" onClick={sendlink2}>{btnVal}</button>
          </div>
          <div className='cards1 grow1 grow1'>
            <div>
              <img src={courseimage3} alt="" />
            </div>
            <div>
              <p>{Phead}</p>
            </div>
            <div>
              <p className='p1'>{P3}</p>
            </div>
            <button type="button" class="btn btn-secondary" onClick={sendlink3}>{btnVal}</button>
          </div>
        </div>
      </div>
  )
}

export default CoursesDesign