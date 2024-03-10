// isLoggedIn
 export const isLoggedIn=()=>{
    localStorage.getItem("data")
    if(data==null){
        return false;
    }
    else{
        return true;
    }
 }
// doLogin
export const doLogin=(data,next)=>{
    localStorage.setItem("data",json.stingify(data))
    next()
}


// doLogout
export const doLogout=(next)=>{

    
    localStorage.removeItem("data")
    next()
}
// get currentUser

export const getCurrentDetail=()=>{
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem("data")).user;
    }
    else{
        return false;
    }
}