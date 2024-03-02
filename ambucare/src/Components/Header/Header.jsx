import React, { useState } from 'react'
import {Link,NavLink} from 'react-router-dom'
// import Home from '../Home/Home';
import Login from '../Login/Login'
import './head.css'
function Header() {
  const[Visible,setVisible]=useState(false);
  return (
    <>
    <div className="navbar">
    <div className="logo">
      <img src="assests\_d6e5f5c7-a831-4072-af67-91f232e506db.jpg" alt="load your logo"/>
    </div> 
    <div className="options">
      
        <li >
          <NavLink to="/" className="navoption" style={({isActive})=>{return{ fontWeight:isActive?"bold":"",color:isActive?"#C70039":"",};}
        }>Home </NavLink>
        
        </li>
        <li> <NavLink to="aboutUs"  className="navoption"style={({isActive})=>{return{ fontWeight:isActive?"bold":"",color:isActive?"#C70039":"",};}
        }>AboutUs </NavLink></li>
        <li> <NavLink to="/JoinUs" className="navoption" style={({isActive})=>{return{ fontWeight:isActive?"bold":"",color:isActive?"#C70039":"",};}
        }>JoinUs </NavLink></li>
        {/* <li> <NavLink to="/Login" className="navoption" style={({isActive})=>{return{ fontWeight:isActive?"bold":"",color:isActive?"#C70039":"",};}
        }>Login </NavLink></li> */}
        <li>
          <button onClick={()=>setVisible(true)}>Login</button>
          <Login trigger={Visible} setTrigger={setVisible}>
           
          </Login>
        </li>
        <li> <NavLink to="/Services" className="navoption" style={({isActive})=>{return{ fontWeight:isActive?"bold":"",color:isActive?"#C70039":"",};}
        }>Services </NavLink></li>
     
    </div>
    </div>
    </>
  )
}

export default Header
