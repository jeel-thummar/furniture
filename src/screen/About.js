import React from 'react'

import Images from '../assets/img/imges'
import '../screen/Style.css'
import product from '../componets/Product'


function About() {
  return (
    <>
	 	 <div>
        	<div class="hero col-sm-12">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1>About us</h1>
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
     <div class="why-choose-section">
			<div class="container">
				<div class="row justify-content-between">
					<div class="col-lg-6">
						<h2 class="section-title">Why Choose Us</h2>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

						<div class="row my-5">
							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={Images.truck} alt="Image" class="imf-fluid"/>
									</div>
									<h3>Fast &amp; Free Shipping</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={Images.bag} alt="Image" class="imf-fluid"/>
									</div>
									<h3>Easy to Shop</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={Images.support} alt="Image" class="imf-fluid"/>
									</div>
									<h3>24/7 Support</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={Images.retarn} alt="Image" class="imf-fluid"/>
									</div>
									<h3>Hassle Free Returns</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

						</div>
					</div>

					<div class="col-lg-5">
						<div class="img-wrap">
							<img src={Images.bgmg} alt="Image" class="img-fluid"/>
						</div>
					</div>

				</div>
			</div>
	</div>

  {/* <!-- Start Team Section --> */}
		<div class="untree_co-section">
			<div class="container">

				<div class="row mb-5">
					<div class="col-lg-5 mx-auto text-center">
						<h2 class="section-title">Our Team</h2>
					</div>
				</div>

				<div class="row">

					{/* <!-- Start Column 1 --> */}
					{product.Team.map((people) => (
            <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
						<img src={people.PersinImage} class="img-fluid mb-5"/>
						<h3 clas><a href="#">{people.PersonName}</a></h3>
            <span class="d-block position mb-4">{people.Position}</span>
            <p>{people.descripition}</p>
            <p class="mb-0"><a href="#" class="more dark">{people.Pbtn}</a></p>
					</div>
          ))} 
					{/* <!-- End Column 1 --> */}
				</div>
			</div>
		</div>
		{/* <!-- End Team Section --> */}

	
    </>
  )
}

export default About