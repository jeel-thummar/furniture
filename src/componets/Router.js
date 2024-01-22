import React from 'react'
import {Routes, Route } from 'react-router-dom';


//screen
import Home from '../screen/Home';
import Shop from '../screen/Shop';
import About from '../screen/About';
import Service from '../screen/Service';
import Blog from '../screen/Blog';
import Contact from '../screen/Contact';
import Cart from '../screen/Cart';
import Thnks from '../screen/Thnks';
import Login from '../screen/Login';
import Signup from '../screen/Signup';
import Profile from '../screen/Profile/Profile';
import Edit from '../screen/Edit/Edit';
import ForgetPassword from '../screen/ForgetPass';

//Admin
import AddProduct from '../Admin/AddProduct'
import AllProduct from '../Admin/AllProduct'
import User from '../Admin/User'
import Dasbord from '../Admin/Dasbord'
import Order from '../Admin/Order'
// import AdminNav from './Admin/AdminNav';

function Router() {
  return (
   
    <Routes>
       
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/services' element={<Service/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/thanks' element={<Thnks/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/edit' element={<Edit/>}></Route>
      <Route path='/fpass' element={<ForgetPassword/>}></Route>
      <Route path='/dashbord' element={<Dasbord/> }></Route>
      <Route path='/dashbord/add-product' element={<AddProduct/>}></Route>
      <Route path='/dashbord/all-product' element={<AllProduct/>}></Route>
      <Route path='/dashbord/user' element={<User/>}></Route>
      <Route path='/dashbord/order' element={<Order/>}></Route>

      
      
    </Routes>
  )
}

export default Router