import React from 'react'
import './login.css'
function Login() {
  return (
    <>
    <div className="card">
    <div className="login">
    <div className="write">
        <p className="log">Login</p>
    </div>
    <div className="userid">
    <label for="username">User Name/Email</label>
    <input type="text" id="username" placeholder='Email /User Name'/>
    </div>
    <div className="pass">
    <label htmlFor="password">Password</label>
    <input type="text" id="password"placeholder='Password'/>
    </div>
    <div className="button">
        <button>LogIn</button>
    </div>
    </div>
    </div>
    </>  )
}

export default Login;