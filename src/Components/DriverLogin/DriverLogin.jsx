import React from 'react'
import { NavLink } from 'react-router-dom';
export default function DriverLogin(props) {
  return(props.trigger) ? (
   
    <div className="card">
    <div className="login">
    <div className="write">
        <p className="log">Login</p>
        <p className="closebutton">  <button onClick={()=>props.setTrigger(false)}>X</button></p>
    </div>
    <div className="userid">
   
    <input type="text" id="username" placeholder='Email /User Name'/>
    <label for="username">User Name/Email</label>
   
   
    </div>
    <div className="pass">
   
    <input type="text" id="password"placeholder='Password'/>
    <label htmlFor="password">Password</label>
    </div>
    <div className="Forgrem Remf">
        <div className="Remember">
        <input type="checkbox" id="remb" />
        <label htmlFor="remb">Remember me</label>
        </div>
        <div className="forget">
        <NavLink to="/forget" className="forgoption" style={({isActive})=>{return{ fontWeight:isActive?"bold":"",color:isActive?"purple":"",};}
        }>forget Password?</NavLink>
        </div>
    </div>
    <div className="button">
        <button className='buttn'>LogIn</button>
    </div>
    </div>
    </div>
     
  
    ):
    <>
   
  </>
   
}
