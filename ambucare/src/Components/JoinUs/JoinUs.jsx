import React from 'react'
import './JoinUs.css'
import { useState,useRef } from 'react';
export default function JoinUs() {
  const [formData, setFormData] = useState({
    userName: '',
    firstName: '',
    middleName: '',
    lastName: '',
    mobileNumber: '',
    gmail: '',
    ambulanceNumber: '',
    ambulanceType: '',
    organizationAffiliated: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };
  const section=useRef();
  const scrollHandler=(eleRef)=>{
    window.scrollTo({top:eleRef.current.offsetTop,behaviour:"smooth"});
  }
  return (
    <div className='joinus'>
      <div className="community">
        <div className="slogan">
        <h1 >Join As An Ambulance Service Driver</h1>
        <h3>Be a Saver</h3>

        <button className='Jobutton' onClick={()=>scrollHandler(section)}>Join us</button>
        </div>
        <div className="ambuphoto">
        <img src="../assests/Join.png" alt="" />
        </div>
      </div>
      <form className="form-container"  ref={section} onSubmit={handleSubmit}>
      <div className="form-group">
        <label>User Name:</label>
        <input type="text" name="userName" value={formData.userName} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Middle Name:</label>
        <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Mobile Number:</label>
        <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Gmail:</label>
        <input type="email" name="gmail" value={formData.gmail} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Ambulance Number:</label>
        <input type="text" name="ambulanceNumber" value={formData.ambulanceNumber} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Ambulance Type:</label>
        <input type="text" name="ambulanceType" value={formData.ambulanceType} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Organization Ambulance Affiliated With:</label>
        <input type="text" name="organizationAffiliated" value={formData.organizationAffiliated} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
      </div>

     
  )
}
