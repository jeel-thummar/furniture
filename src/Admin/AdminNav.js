import React from 'react'
import { NavLink } from 'react-router-dom'
import '../screen/Style.css'


function AdminNav() {
  return (
    <header className='admin_header'>
        <nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark col-12  navbar fixed-top" arial-label="Furni navigation bar">

<div class="container">
  <a class="navbar-brand" href="index.html">Furni<span>.</span></a>

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarsFurni">
    <ul class="custom-navbar-nav navbar-nav">
      <li class="nav-item">
        <a class="nav-link"><NavLink to="/dashbord">Dashbord</NavLink></a>
      </li>
      <li class="nav-item"><a class="nav-link"><NavLink to="/dashbord/add-product">Add-Product</NavLink></a></li>
      <li class="nav-item"><a class="nav-link"><NavLink to="/dashbord/all-product">All-Products</NavLink></a></li>
      <li class="nav-item"><a class="nav-link"><NavLink to="/dashbord/order">Order</NavLink></a></li>
      <li class="nav-item"><a class="nav-link"><NavLink to="/dashbord/user">User</NavLink></a></li>
    </ul>

    
  </div>
</div>
  
</nav>

    </header>
  )
}

export default AdminNav