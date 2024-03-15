import React from 'react'
import Images from '../assets/img/imges'
import '../screen/Style.css'
import Footer from '../componets/Footer'
import Slider from '../componets/slider'





function Home() {
  return (
    <>
{/* <div>
  <div className="hero col-sm-12">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5 col-md-12">
          <div className="intro-excerpt">
            <h1>Modern Interior <span className="d-block">Design Studio</span></h1>
            <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <p><a className="btn btn-secondary me-2">Shop Now</a></p>
          </div>
        </div>
        <div className="col-lg-7 col-md-12">
          <div className="hero-img-wrap">
            <img src={Images.couch} className="img-fluid" alt="Couch" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}

    <div className="product-section">
			<div className="container">
				<div className="row">

					{/* <!-- Start Column 1 -->  */}
					<div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
						<h2 className="mb-4 section-title">Crafted with excellent material.</h2>
						<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
						<p><a className="btn">Explore</a></p>
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

	<div className="why-choose-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-6">
						<h2 className="section-title">Why Choose Us</h2>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

						<div className="row my-5">
							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src={Images.truck} alt="Image" className="imf-fluid"/>
									</div>
									<h3>Fast &amp; Free Shipping</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src={Images.bag} alt="Image" className="imf-fluid"/>
									</div>
									<h3>Easy to Shop</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src={Images.support} alt="Image" className="imf-fluid"/>
									</div>
									<h3>24/7 Support</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src={Images.retarn} alt="Image" className="imf-fluid"/>
									</div>
									<h3>Hassle Free Returns</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

						</div>
					</div>

					<div className="col-lg-5">
						<div className="img-wrap">
							<img src={Images.bgmg} alt="Image" className="img-fluid"/>
						</div>
					</div>

				</div>
			</div>
	</div>

	{/* <!-- Start We Help Section --> */}
		<div className="we-help-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-7 mb-5 mb-lg-0">
						<div className="imgs-grid">
							<div className="grid grid-1"><img src={Images.imggrid1} alt="Untree.co"/></div>
							<div className="grid grid-2"><img src={Images.imggrid2} alt="Untree.co"/></div>
							<div className="grid grid-3"><img src={Images.imggrid3} alt="Untree.co"/></div>
						</div>
					</div>
					<div className="col-lg-5 ps-lg-5">
						<h2 className="section-title mb-4">We Help You Make Modern Interior Design</h2>
						<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>

						<ul className="list-unstyled custom-list my-4">
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
						</ul>
						<p><a className="btn">Explore</a></p>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- End We Help Section --> */}


		{/* <!-- Start Popular Product --> */}
		<div className="popular-product">
			<div className="container">
				<div className="row">

					<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div className="product-item-sm d-flex">
							<div className="thumbnail">
								<img src={Images.product1} alt="Image" className="img-fluid"/>
							</div>
							<div className="pt-3">
								<h3>Nordic Chair</h3>
								<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
								<p><a >Read More</a></p>
							</div>
						</div>
					</div>

					<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div className="product-item-sm d-flex">
							<div className="thumbnail">
								<img src={Images.product2} alt="Image" className="img-fluid"/>
							</div>
							<div className="pt-3">
								<h3>Kruzo Aero Chair</h3>
								<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
								<p><a>Read More</a></p>
							</div>
						</div>
					</div>

					<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div className="product-item-sm d-flex">
							<div className="thumbnail">
								<img src={Images.product3} alt="Image" className="img-fluid"/>
							</div>
							<div className="pt-3">
								<h3>Ergonomic Chair</h3>
								<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
								<p><a>Read More</a></p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		{/* <!-- End Popular Product --> */}

		<Slider/>

		{/* <!-- Start Blog Section --> */}
		<div className="blog-section">
			<div className="container">
				<div className="row mb-5">
					<div className="col-md-6">
						<h2 className="section-title">Recent Blog</h2>
					</div>
					{/* <div className="">
						<a  className="more">View All Posts</a>
					</div> */}
				</div>

				<div className="row">

					<div className=" blog col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<a  className="post-thumbnail"><img src={Images.post1} alt="Image" className="img-fluid"/></a>
							<div className="blog-text post-content-entry">
								<h3><a>First Time Home Owner Ideas</a></h3>
								<div className="meta">
									<span>by <a>Kristin Watson</a></span> <span>on <a href="">Dec 19, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<a className="post-thumbnail"><img src={Images.post2} alt="Image" className="img-fluid"/></a>
							<div className="post-content-entry">
								<h3><a>How To Keep Your Furniture Clean</a></h3>
								<div className="meta">
									<span>by <a>Robert Fox</a></span> <span>on <a href="">Dec 15, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<a className="post-thumbnail"><img src={Images.post3} alt="Image" className="img-fluid"/></a>
							<div className="post-content-entry">
								<h3><a>Small Space Furniture Apartment Ideas</a></h3>
								<div className="meta">
									<span>by <a>Kristin Watson</a></span> <span>on <a>Dec 12, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		{/* <!-- End Blog Section --> */}
		{/* <Footer/> */}
    </>
  )
}

export default Home