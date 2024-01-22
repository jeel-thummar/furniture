import React from 'react'
import { useLocation } from 'react-router-dom'

import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'
import Router from '../componets/Router'
import AdminNav from '../Admin/AdminNav'
function Laayout() {
    const location = useLocation();
  return (
    <>
    {location.pathname.startsWith('/dashbord')?
    (<>
    <AdminNav/>
    <div>
        <Router />
    </div>
    </>)
    :(<>
    <Navbar/>  
    <div>
        <Router/>
    </div>
    <Footer/>
    </>) 
    }
  
    </>
  )
}

export default Laayout