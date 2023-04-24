import React, { useEffect } from "react";
import {Link} from 'react-router-dom';

function Nav(props) {

useEffect(() => {
  if (props.linkNavActivo==="nav-link-1") {
    document.getElementById("nav-link-1").classList.add("active")
  }else if (props.linkNavActivo==="nav-link-2") {
    document.getElementById("nav-link-2").classList.add("active")
  }else if (props.linkNavActivo==="nav-link-3") {
    document.getElementById("nav-link-3").classList.add("active")
  }
  
}, [ props.linkNavActivo])
const clickLink=(id)=>{
  if (id==="nav-link-1") {
    document.getElementById("nav-link-1").classList.add("active")
    document.getElementById("nav-link-2").classList.remove("active")
    document.getElementById("nav-link-3").classList.remove("active")
  }else if (id==="nav-link-2") {
    document.getElementById("nav-link-2").classList.add("active")
    document.getElementById("nav-link-3").classList.remove("active")
    document.getElementById("nav-link-1").classList.remove("active")
  }else if (id==="nav-link-3") {
    document.getElementById("nav-link-3").classList.add("active")
    document.getElementById("nav-link-2").classList.remove("active")
    document.getElementById("nav-link-1").classList.remove("active")
  }
}

  

  return (
    <nav  className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img style={{marginRight:"5px"}}  width="35" className="d-inline-block align-text-top" src="https://fakestoreapi.com/icons/logo.png" alt="LogoFakeStoreApi" />
          Tiendas Pipe
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav nav-tabs ">
            <li className="nav-item ">
              <Link onClick={()=>clickLink("nav-link-1")} id="nav-link-1" className="nav-link" aria-current="page" to="/about/about">Blog</Link>
            </li>
            <li className="nav-item">
              <Link onClick={()=>clickLink("nav-link-2")} id="nav-link-2" className="nav-link" to="/about/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link onClick={()=>clickLink("nav-link-3")} id="nav-link-3" className="nav-link" to="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
