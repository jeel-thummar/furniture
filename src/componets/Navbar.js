import React from 'react'
import Images from '../assets/img/imges'
import '../screen/Style.css'
import { NavLink } from 'react-router-dom'

//firebase
import App from '../screen/Firebase';
import {getAuth} from 'firebase/auth'
import {useAuthState} from "react-firebase-hooks/auth";



function Navbar() {
  const auth = getAuth(App);
  const [user] = useAuthState(auth);

  return (
   <>
   	<nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark navbar fixed-top" arial-label="Furni navigation bar">

<div className="container">
  <a className="navbar-brand">Furni<span>.</span></a>

  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarsFurni">
    <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
    <li className="nav-item">
            <a className="nav-link"><NavLink to="/">Home</NavLink></a>
          </li>
          <li className="nav-item"><a className="nav-link"><NavLink to="/shop" >Shop</NavLink></a></li>
          <li className="nav-item"><a className="nav-link"><NavLink to="/about" >About us</NavLink></a></li>
          <li className="nav-item"><a className="nav-link"><NavLink to="/services" >Services</NavLink></a></li>
          <li className="nav-item"><a className="nav-link"><NavLink to="/blog" >Blog</NavLink></a></li>
          <li className="nav-item"><a className="nav-link"><NavLink to="/contact" >Contact us</NavLink></a></li>
    </ul>
    <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
          {!user ? (<li className="nav-item"><a className="nav-link"><NavLink to="/login">Login</NavLink></a></li>)
          :(<li><a className="nav-link" ><NavLink to="/profile"><img src={Images.uslogin}/></NavLink></a></li>
          )}
          <li><a className="nav-link" ><NavLink to="/cart"><img src={Images.cart}/></NavLink></a></li>
        </ul>
  </div>
</div>
  
    </nav>
   </>
  )
  
}

export default Navbar