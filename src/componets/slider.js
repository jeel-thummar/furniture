import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Images from '../assets/img/imges'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function slider() {
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
<Carousel responsive={responsive}>
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
  {/* <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div> */}
</Carousel>
  )
}

export default slider