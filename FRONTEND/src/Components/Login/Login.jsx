import React, { useState } from 'react'
import './login.css'
import { NavLink } from 'react-router-dom';
import { doLogin } from '../../authorization/udLogin';
function Login(props) {
  const[loginDetail,setLoginDetail]=useState({
    email:"",
    password:""
  })

  const handleChange=(e,name)=>{
  
    let value=e.target.value
    setLoginDetail({
      ...loginDetail,
      [name]:value
    })
  }


  const handleSubmit=async(e)=>
  {
    e.preventDefault();
    if(loginDetail.email.trim()=='' || loginDetail.password.trim()==''){
      alert("username or password is requied")
      return

    }
    try{
      
     const data= await axios.post("http://localhost:8080//user/login",{
    
        loginDetail
      })
      console.log(data);
      // save the data to local storage
      doLogin(data,()=>{
        console.log("login detail is saved to storage")
        //redirect to user login page
      });
     }
     catch(e){
      console.log(e);
     }

  }
  return(props.trigger) ? (
   
    <div className="card">
    <div className="login">
    <div className="write">
        <p className="log">Login</p>
        <p className="closebutton">  <button onClick={()=>props.setTrigger(false)}>X</button></p>
    </div>
    <form onSubmit={handleSubmit}>
    <div className="userid">
   
    <input type="email" id="email" value={loginDetail.email} onChange={(e)=>handleChange(e,'email')} placeholder='Email'/>
    <label htmlFor="email">Email</label>
   
   
    </div>
    <div className="pass">
   
    <input type="password" id="password" value={loginDetail.password} onChange={(e)=>handleChange(e,'password')} placeholder='Password'/>
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
        <button type="submit">LogIn</button>
    </div>
    </form>
    </div>
    </div>
     
  
    ):
    <>
   
  </>
   
}

export default Login;