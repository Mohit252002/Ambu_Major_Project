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
          <NavLink to="/" className="navoption" style={({isActive})=>{return{ fontWeight:isActive?"bold":"",};}
        }>Home </NavLink>
        
        </li>
        <li> <NavLink to="aboutUs"  className="navoption"style={({isActive})=>{return{ fontWeight:isActive?"bold":""};}
        }>AboutUs </NavLink></li>
        <li> <NavLink to="/JoinUs" className="navoption" style={({isActive})=>{return{ fontWeight:isActive?"bold":""};}
        }>JoinUs </NavLink></li>
<<<<<<< HEAD
        
=======
        {/* <li> <NavLink to="/Login" className="navoption" style={({isActive})=>{return{ fontWeight:isActive?"bold":"",color:isActive?"#C70039":"",};}
        }>Login </NavLink></li> */}
        
        <li> <NavLink to="/Services" className="navoption" style={({isActive})=>{return{ fontWeight:isActive?"bold":"",color:isActive?"#C70039":"",};}
        }>Services </NavLink></li>

<li> <NavLink to="/RegisterUser" className="navoption" style={({isActive})=>{return{ fontWeight:isActive?"bold":"",color:isActive?"#C70039":"",};}
        }>Register </NavLink></li>
>>>>>>> 086c7efffe587f6d958f4d55f34b309aff17baaf
        <li>
          <button onClick={()=>setVisible(true)}>Login</button>
          <Login trigger={Visible} setTrigger={setVisible}>
           
          </Login>
        </li>
     
    </div>
    </div>
    </>
  )
}

export default Header
