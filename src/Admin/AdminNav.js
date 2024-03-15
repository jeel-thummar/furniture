import React from 'react'
import { NavLink } from 'react-router-dom'
import '../screen/Style.css'


function AdminNav() {
  return (
    <header className='admin_header'>
        <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark col-12  navbar fixed-top" arial-label="Furni navigation bar">

<div className="container">
  <a className="navbar-brand">Furni<span>.</span></a>

  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarsFurni">
    <ul className="custom-navbar-nav navbar-nav">
      <li className="nav-item">
        <a className="nav-link"><NavLink to="/dashbord">Dashbord</NavLink></a>
      </li>
      <li className="nav-item"><a className="nav-link"><NavLink to="/dashbord/add-product">Add-Product</NavLink></a></li>
      <li className="nav-item"><a className="nav-link"><NavLink to="/dashbord/all-product">All-Products</NavLink></a></li>
      <li className="nav-item"><a className="nav-link"><NavLink to="/dashbord/order">Order</NavLink></a></li>
      <li className="nav-item"><a className="nav-link"><NavLink to="/dashbord/user">User</NavLink></a></li>
    </ul>

    
  </div>
</div>
  
</nav>

    </header>
  )
}

export default AdminNav