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
      {/* <!-- Start Why Choose Us Section --> */}
		<div className="why-choose-section">
			<div className="container">
				
				
				<div className="row my-5">
					{services.map((items) => (
            <div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src={items.servicesImage} alt="Image" className="imf-fluid"/>
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
    <div className="product-section">
			<div className="container">
				<div className="row">

					{/* <!-- Start Column 1 -->  */}
					<div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
						<h2 className="mb-4 section-title">Crafted with excellent material.</h2>
						<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
						<p><a  className="btn">Explore</a></p>
					</div> 
					{/* <!-- End Column 1 --> */}

					{/* <!-- Start Column 2 --> */}
					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a className="product-item">
							<img src={Images.product1} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Nordic Chair</h3>
							<strong className="product-price">$50.00</strong>

							<span className="icon-cross">
								<img src={Images.cross} className="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 2 --> */}

					{/* <!-- Start Column 3 --> */}
					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a className="product-item">
							<img src={Images.product2} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Kruzo Aero Chair</h3>
							<strong className="product-price">$78.00</strong>

							<span className="icon-cross">
								<img src={Images.cross} className="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 3 --> */}

					{/* <!-- Start Column 4 --> */}
					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a className="product-item">
							<img src={Images.product3} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src={Images.cross} className="img-fluid"/>
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