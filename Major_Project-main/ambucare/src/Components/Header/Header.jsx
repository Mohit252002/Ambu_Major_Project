import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import './Head.css'
function Header() {
  return (
    <>
    <div className="navbar">
    <div className="logo">
      <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="load your logo"/>
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
        <li> <NavLink to="/Login" className="navoption" style={({isActive})=>{return{ fontWeight:isActive?"bold":"",color:isActive?"#C70039":"",};}
        }>Login/Register </NavLink></li>
        <li> <NavLink to="/Services" className="navoption" style={({isActive})=>{return{ fontWeight:isActive?"bold":"",color:isActive?"#C70039":"",};}
        }>Services </NavLink></li>
     
    </div>
    </div>
    </>
  )
}

export default Header
