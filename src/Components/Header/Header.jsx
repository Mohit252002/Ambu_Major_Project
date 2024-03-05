import React, { useState } from 'react'
import {Link,NavLink} from 'react-router-dom'
import DriverLogin from '../DriverLogin/DriverLogin'
import Login from '../Login/Login'
import './Head.css'
function Header() {
  const[Visible,setVisible]=useState(false);
  const[Dvisible,setDvisible]=useState(false);
  return (
    <>
    <div className="navbar">
    <div className="logo">
      <img src="assests\_d6e5f5c7-a831-4072-af67-91f232e506db.jpg" alt="load your logo"/>
    </div> 
    <div className="options">
      
        <li >
          <NavLink to="/" className="navoption" style={({isActive})=>{return{ fontWeight:isActive?"bold":"",};}
        }>Home </NavLink>
        
        </li>
       
        <li> <NavLink to="/JoinUs" className="navoption" style={({isActive})=>{return{ fontWeight:isActive?"bold":""};}
        }>JoinUs </NavLink></li>
        
        
        <li> <NavLink to="/Services" className="navoption" style={({isActive})=>{return{ fontWeight:isActive?"bold":"",color:isActive?"#C70039":"",};}
        }>Services </NavLink></li>

<li> <NavLink to="/RegisterUser" className="navoption" style={({isActive})=>{return{ fontWeight:isActive?"bold":"",color:isActive?"#C70039":"",};}
        }>Register </NavLink></li>
        <li>
          <button className="Driverl" onClick={()=>setDvisible(true)}>DriverLogin</button>
          <DriverLogin trigger={Dvisible} setTrigger={setDvisible}>
           
          </DriverLogin>
        </li>
        
        <li>
          <button className='Userl' onClick={()=>setVisible(true)}>UserLogin</button>
          <Login trigger={Visible} setTrigger={setVisible}>
           
          </Login>
        </li>
     
    </div>
    </div>
    </>
  )
}

export default Header
