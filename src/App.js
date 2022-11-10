import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Home from './Components/Home';
import Aboutrouter from './Components/Aboutrouter';
import Courserouter from './Components/Courserouter';
import Contactrouter from './Components/Contactrouter';
import Blogrouter from './Components/Blogrouter';
import Videos from './Components/Videos';
import VideoFrame from './Components/VideoFrame';

function App() {
  return ( 
    <div className="App">
      {/* <VideoFrame/> */}
      <Router basename='my-website'>
         <Routes>
            <Route path='/' element = {<Home/>}></Route>
         </Routes>
         <Routes>
            <Route path='/about' element = {<Aboutrouter/>}></Route>
         </Routes>
         <Routes>
            <Route path='/course' element = {<Courserouter/>}></Route>
         </Routes>
         <Routes>
            <Route path='/contactus' element = {<Contactrouter/>}></Route>
         </Routes>
         <Routes>
            <Route path='/blog' element = {<Blogrouter/>}></Route>
         </Routes>
         <Routes>
            <Route path='/video' element = {<Videos/>}></Route>
         </Routes>
         <Routes>
            <Route path='/videoframe' element = {<VideoFrame/>}></Route>
         </Routes>
      </Router>
    </div>
  );
}

export default App;

