import React from 'react'
import { useState } from 'react';
import './Register.css'
export default function RegisterUser() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };
  return (
   
    <div className="container">
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
            <label htmlFor="phoneNumber" className="label">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" className="input" value={formData.phoneNumber} onChange={handleChange} required />
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
