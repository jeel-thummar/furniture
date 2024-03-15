import React from 'react'
import '../screen/Style.css'
import Images from '../assets/img/imges'

function Footer() {
  return (
    <>
    	{/* <!-- Start Footer Section --> */}
		<footer className="footer-section">
			<div className="container relative">

			

				<div className="row">
					<div className="col-lg-8">
						<div className="subscription-form">
							<h3 className="d-flex align-items-center"><span className="me-1"><img src={Images.eleoutline} alt="Image" className="img-fluid"/></span><span>Subscribe to Newsletter</span></h3>

							<form action="#" className="row g-3">
								<div className="col-auto">
									<input type="text" className="form-control" placeholder="Enter your name"/>
								</div>
								<div className="col-auto">
									<input type="email" className="form-control" placeholder="Enter your email"/>
								</div>
								<div className="col-auto">
									<button className="btn btn-primary">
										<span className="fa fa-paper-plane"></span>
									</button>
								</div>
							</form>

						</div>
					</div>
				</div>

				<div className="row g-5 mb-5">
					<div className="col-lg-4">
						<div className="mb-4 footer-logo-wrap"><a className="footer-logo">Furni<span>.</span></a></div>
						<p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

						<ul className="list-unstyled custom-social">
							<li><a><span className="fa fa-brands fa-facebook-f"></span></a></li>
							<li><a><span className="fa fa-brands fa-twitter"></span></a></li>
							<li><a><span className="fa fa-brands fa-instagram"></span></a></li>
							<li><a><span className="fa fa-brands fa-linkedin"></span></a></li>
						</ul>
					</div>

					<div className="col-lg-8">
						<div className="row links-wrap">
							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a>About us</a></li>
									<li><a>Services</a></li>
									<li><a>Blog</a></li>
									<li><a>Contact us</a></li>
								</ul>
							</div>

							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a>Support</a></li>
									<li><a>Knowledge base</a></li>
									<li><a>Live chat</a></li>
								</ul>
							</div>

							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a>Jobs</a></li>
									<li><a>Our team</a></li>
									<li><a>Leadership</a></li>
									<li><a>Privacy Policy</a></li>
								</ul>
							</div>

							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a>Nordic Chair</a></li>
									<li><a>Kruzo Aero</a></li>
									<li><a>Ergonomic Chair</a></li>
								</ul>
							</div>
						</div>
					</div>

				</div>

			

			</div>
		</footer>
		{/* <!-- End Footer Section -->	 */}
    </>
  )
}

export default Footer