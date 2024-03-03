import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Components/Home/Home'
import Layout from './Layout'
import About from './Components/About/About'
// import Login from './Components/Login/Login'
import Forget from './Components/Forget/Forget'
import JoinUs from './Components/JoinUs/JoinUs'
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path='about/' element={<About/>}/>
      {/* <Route path="Login/" element={<Login/>}/> */}
      <Route path="forget/" element={<Forget/>}/>
      <Route path="Joinus/" element={<JoinUs/>}/>
    </Route>

  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
