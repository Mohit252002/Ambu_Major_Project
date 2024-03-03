import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
function Services() {
  const[Visible,setVisible]=useState(false);
  return (
    <>
   <section className="ambulance-header d-flex">
  <div className="left d-flex flex-column align-items-start">
    <h1 className="main-heading">Ambulances</h1>
    <div className="d-flex flex-column gap-4">
      <p className="primary-text">
        Choose the ambulance that best fits your needs and book online
        through our App or website.
      </p>
      <p className="primary-text">
        With a hassle-free booking process that makes it easy to get the
        medical transport you require
      </p>
    </div>
  </div>
  <div className="right">
   <img src=" https://medcab.in/assets/website-compressed-image/ambulance-header-img.webp"  alt="" />
  </div>
</section>
    </>
  )
}

export default Header


















