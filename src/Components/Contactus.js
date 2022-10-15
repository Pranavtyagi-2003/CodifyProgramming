import React, { useRef } from 'react';
import './Contactus.css';
// import { BsTelephoneFill } from "react-icons/bs";
// import { ImHome3 } from "react-icons/im";
// import { GrMail } from "react-icons/gr";
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField'

function Contactus() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_skx52yq', 'template_fehzmym', form.current, 'xTiyjZF0u-vsjhq1u')
      .then((result) => {
        console.log('Success!', result);
        window.alert('Message Sent Successfully')
        e.target.reset();
      }, (error) => {
        console.log('Failed!', error);
        window.alert('Please enter information')
      });

  }
  return (
    <div className='contactus'>
      <div className="wrapper">
        <div className="header">
          <h1 className='Contact_us'>Contact us</h1>
          <p className='Do_you'>Do you have a question? Send us a message and we will respond as soon as possible.</p>
        </div>
        <form ref={form} className='hello' onSubmit={sendEmail}>
          {/* <h4>Name</h4> */}
          <TextField style={{ marginTop:"1rem" }} name='name' id="standard-basic" label="Name" variant="standard" required/>
          <TextField style={{ marginTop:"1rem" }} name='phone' id="standard-basic" label="Phone No" variant="standard" required/>
          {/* <h4>Email</h4> */}
          <TextField style={{ marginTop:"1rem" }} name='email' id="standard-basic" label="Email" variant="standard" required/>
          {/* <h4>Message</h4> */}
          <TextField style={{ marginTop:"1rem" }} name='message' id="standard-basic" label="Message" variant="standard" />
          <button className='submitbtn' style={{ marginTop:"3rem" }}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contactus