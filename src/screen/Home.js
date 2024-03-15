import React from 'react'
import '../screen/Style.css'
import HomeProductshop from '../componets/HomeProductshop'
import WhuChoseUs from '../componets/WhuChoseUs'
import Slider from '../componets/slider'
import HelpSection from '../componets/HelpSection'
import PopulerProduct from '../componets/PopulerProduct'
import BlogSection from '../componets/BlogSection'





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

  <HomeProductshop/>
  <WhuChoseUs/>
  <HelpSection/>
  <PopulerProduct/>
  <Slider/>
  <BlogSection/>


	


	

	

		{/* <!-- Start Blog Section --> */}
	
		{/* <!-- End Blog Section --> */}
		{/* <Footer/> */}
    </>
  )
}

export default Home