import React from 'react'
import { isLoggedIn } from '../../authorization/udLogin'
import { Navigate, Outlet } from 'react-router-dom'
function User() {
    
    const isLogged=true;
  if(isLogged==true){
    return <Outlet/>;
  }
  else{
     return <Navigate to={"/"}/>;
  }
  
}

export default User
