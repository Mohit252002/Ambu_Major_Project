import React from 'react'
import './login.css'
import { NavLink } from 'react-router-dom';
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
    <div className="Forgrem Remf">
        <div className="Remember">
        <input type="checkbox" id="forget" />
        <label htmlFor="Remember">Remember me</label>
        </div>
        <div className="forget">
        <NavLink to="/forget" className="forgoption" style={({isActive})=>{return{ fontWeight:isActive?"bold":"",color:isActive?"purple":"",};}
        }>forget Password?</NavLink>
        </div>
    </div>
    <div className="button">
        <button>LogIn</button>
    </div>
    </div>
    </div>
    </>  )
}

export default Login;