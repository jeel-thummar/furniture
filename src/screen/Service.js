import React from 'react'
import Images from '../assets/img/imges'
import '../screen/Style.css'
import ServicesItem from '../componets/ServicesItem'
import HomeProductshop from '../componets/HomeProductshop'

function Service() {
 
  return (
    <>
		 <div>
        	<div className="hero col-sm-12">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Service</h1>
								<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><a  className="btn btn-secondary me-2">Shop Now</a></p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<img src={Images.couch} className="img-fluid"/>
							</div>
						</div>
					</div>
				</div>
			</div>
    </div>
     <ServicesItem/>
	 <HomeProductshop/>



    </>
  )
}

export default Service