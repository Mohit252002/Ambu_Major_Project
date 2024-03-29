import React from 'react'
import { useState } from 'react';
import './Register.css'
import axios from 'axios'
export default function RegisterUser() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNo: 0,
    dob:'',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };         

  const handleSubmit = async(e) => {
    e.preventDefault();
   try{
    alert("submitted");
   
    const url = 'http://localhost:8080/RegisterUser/save'
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    };
    fetch(url, requestOptions)
        .then(response => console.log('Submitted successfully'))
        .catch(error => console.log('Form submit error', error))

   }
   catch(e){
    console.log(e);
   }
  };
  return (
   
    <div className="contain">
    <div className="centered">
      <div className="signup-container">
        <h2 className="title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="label">Username</label>
            <input type="text" id="username" name="username" className="input" value={formData.username} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="label">Email</label>
            <input type="email" id="email" name="email" className="input" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNo" className="label">Phone Number</label>
            <input type="number" id="phoneNumber" name="phoneNo" className="input" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="dob" className="label">Date Of Birth</label>
            <input type="date" id="dateid" name="dob" className="input" value={formData.date} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">Password</label>
            <input type="password" id="password" name="password" className="input" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword" className="label">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" className="input" value={formData.confirmPassword} onChange={handleChange} required />
          </div>
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
      </div>
    </div>
  </div>

  )
}
