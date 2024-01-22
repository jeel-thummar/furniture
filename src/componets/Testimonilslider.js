import React from 'react'
import Images from '../assets/img/imges'
import '../screen/Style.css'
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';





function Testimonilslider() {
	const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true
};

	  const slider = [
		{
			SliderImage : Images.girl1,
			Slidertesti : "&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;",
			SliderPName : "Maria Jones",
			Position : "CEO, Co-Founder, XYZ Inc."
		},
		{
			SliderImage : Images.girl2,
			Slidertesti : "&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;",
			SliderPName : "Maria Jones",
			Position : "CEO, Co-Founder, XYZ Inc."
		},
		{
			SliderImage : Images.girl1,
			Slidertesti : "&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;",
			SliderPName : "Maria Jones",
			Position : "CEO, Co-Founder, XYZ Inc."
		},
		{
			SliderImage : Images.girl2,
			Slidertesti : "&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;",
			SliderPName : "Maria Jones",
			Position : "CEO, Co-Founder, XYZ Inc."
		},
	  ]
  return (
    <>
    	{/* <!-- Start Testimonial Slider --> */}
		<div class="testimonial-section">
			<div class="container">
				<div class="row">
					<div class="col-lg-7 mx-auto text-center">
						<h2 class="section-title">Testimonials</h2>
					</div>
				</div>
                <TinySlider settings={settings}>
				<div class="row justify-content-center">
					<div class="col-lg-12">
						<div class="testimonial-slider-wrap text-center">

							<div id="testimonial-nav">
								<span class="prev" data-controls="prev"><span class="fa fa-chevron-left"></span></span>
								<span class="next" data-controls="next"><span class="fa fa-chevron-right"></span></span>
							</div>

							<div class="testimonial-slider">
								
								<div class="item">
									<div class="row justify-content-center">
										<div class="col-lg-8 mx-auto">
										
											{slider.map((items) => (
												<div class="testimonial-block text-center">
												<blockquote class="mb-5">
													<p>{items.Slidertesti}</p>
												</blockquote>

												<div class="author-info">
													<div class="author-pic">
														<img src={items.SliderImage} alt="Maria Jones" class="img-fluid"/>
													</div>
													<h3 class="font-weight-bold">{items.SliderPName}</h3>
													<span class="position d-block mb-3">{items.Position}</span>
												</div>
											</div>
											))}
                                        
										</div>
									</div>
								</div> 
								{/* <!-- END item --> */}

							

							</div>

						</div>
					</div>
				</div>
				</TinySlider>
			</div>
		</div>
		{/* <!-- End Testimonial Slider --> */}
    </>
  )
}

export default Testimonilslider