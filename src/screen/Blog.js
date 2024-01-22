import React from 'react'
import Images from '../assets/img/imges'




// import AdminNav from '../Admin/AdminNav'
// import AddProduct from '../Admin/AddProduct'
// import AllProduct from '../Admin/AllProduct'
// import User from '../Admin/User'
// import Dasbord from '../Admin/Dasbord'
// import Order from '../Admin/Order'

function Blog() {
  return (
    <>
     <div>
        	<div class="hero col-sm-12">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1>Blog</h1>
								<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><a href="" class="btn btn-secondary me-2">Shop Now</a></p>
							</div>
						</div>
						<div class="col-lg-7">
							<div class="hero-img-wrap">
								<img src={Images.couch} class="img-fluid"/>
							</div>
						</div>
					</div>
				</div>
			</div>
    </div>
	      
      
    </>
  )
}

export default Blog