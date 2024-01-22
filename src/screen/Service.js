import React from 'react'
import Images from '../assets/img/imges'
import '../screen/Style.css'

function Service() {
  const services = [
    {
      servicesImage : Images.truck,
      servicesHeading : "Fast & Free Shipping",
      servicesDescripition : "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." 
    },
    {
      servicesImage : Images.bag,
      servicesHeading : "Easy to Shop",
      servicesDescripition : "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." 
    },
    {
      servicesImage : Images.support,
      servicesHeading : "24/7 Support",
      servicesDescripition : "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." 
    },
    {
      servicesImage : Images.retarn,
      servicesHeading : "Hassle Free Returns",
      servicesDescripition : "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." 
    },
    {
      servicesImage : Images.truck,
      servicesHeading : "Fast & Free Shipping",
      servicesDescripition : "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." 
    },
    {
      servicesImage : Images.bag,
      servicesHeading : "Easy to Shop",
      servicesDescripition : "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." 
    }, 
    {
      servicesImage : Images.retarn,
      servicesHeading : "24/7 Support",
      servicesDescripition : "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." 
    },
    {
      servicesImage : Images.truck,
      servicesHeading : "Hassle Free Returns",
      servicesDescripition : "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." 
    },

  ]
  return (
    <>
		 <div>
        	<div class="hero col-sm-12">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1>Service</h1>
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
      {/* <!-- Start Why Choose Us Section --> */}
		<div class="why-choose-section">
			<div class="container">
				
				
				<div class="row my-5">
					{services.map((items) => (
            <div class="col-6 col-md-6 col-lg-3 mb-4">
						<div class="feature">
							<div class="icon">
								<img src={items.servicesImage} alt="Image" class="imf-fluid"/>
							</div>
							<h3>{items.servicesHeading}</h3>
							<p>{items.servicesDescripition}</p>
						</div>
					</div>
          ))}
				</div>
			
			</div>
		</div>
		{/* <!-- End Why Choose Us Section --> */}

    {/* product section */}
    <div class="product-section">
			<div class="container">
				<div class="row">

					{/* <!-- Start Column 1 -->  */}
					<div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
						<h2 class="mb-4 section-title">Crafted with excellent material.</h2>
						<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
						<p><a href="shop.html" class="btn">Explore</a></p>
					</div> 
					{/* <!-- End Column 1 --> */}

					{/* <!-- Start Column 2 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="cart.html">
							<img src={Images.product1} class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Nordic Chair</h3>
							<strong class="product-price">$50.00</strong>

							<span class="icon-cross">
								<img src={Images.cross} class="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 2 --> */}

					{/* <!-- Start Column 3 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="cart.html">
							<img src={Images.product2} class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Kruzo Aero Chair</h3>
							<strong class="product-price">$78.00</strong>

							<span class="icon-cross">
								<img src={Images.cross} class="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 3 --> */}

					{/* <!-- Start Column 4 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="cart.html">
							<img src={Images.product3} class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Ergonomic Chair</h3>
							<strong class="product-price">$43.00</strong>

							<span class="icon-cross">
								<img src={Images.cross} class="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 4 --> */}

				</div>
			</div>
	</div>
    {/* product section */}

    </>
  )
}

export default Service