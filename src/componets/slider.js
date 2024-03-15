import React from "react";
import '../screen/Style.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Images from '../assets/img/imges'


function SliderComponent() {
  const CustomPrevArrow = (props) => (
    <button {...props} className="custom-prev-arrow">
      <FaChevronLeft />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props} className="custom-next-arrow">
      <FaChevronRight />
    </button>
  );

  const settings = {
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    // cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  const slider = [
		{
			SliderImage : Images.person1,
			Slidertesti : "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
			SliderPName : "Maria Jones",
			Position : "CEO, Co-Founder, XYZ Inc."
		},
		{
			SliderImage : Images.person2,
			Slidertesti : "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
			SliderPName : "Maria Jones",
			Position : "CEO, Co-Founder, XYZ Inc."
		},
		{
			SliderImage : Images.person3,
			Slidertesti : "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
			SliderPName : "Maria Jones",
			Position : "CEO, Co-Founder, XYZ Inc."
		},
		{
			SliderImage : Images.person4,
			Slidertesti : "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
			SliderPName : "Maria Jones",
			Position : "CEO, Co-Founder, XYZ Inc."
		},
	  ]

  return (
    <>
    	{/* <!-- Start Testimonial Slider --> */}
		<div className="testimonial-section">
			<div className="container" >
				<div className="row">
					<div className="col-lg-7 mx-auto text-center">
						<h2 className="section-title">Testimonials</h2>
					</div>
				</div>

				
        <div className="row justify-content-center">
					<div className="col-lg-12">
						<div className="testimonial-slider-wrap text-center">


							<div className="testimonial-slider">
							<Slider {...settings}>	
							{slider.map((item, index) => {
								return (
									<div className="item" key={index}>
										<div className="row justify-content-center">
											<div className="col-lg-8 mx-auto">

												<div className="testimonial-block text-center">
													<blockquote className="mb-5">
														<p>{item.Slidertesti}</p>
													</blockquote>

													<div className="author-info">
														<div className="author-pic" style={{ display: "flex", justifyContent: "center" }}>
															<img src={item.SliderImage} alt="Maria Jones" className="img-fluid" />
														</div>
														<h3 className="font-weight-bold">{item.SliderPName}</h3>
														<span className="position d-block mb-3">{item.Position}</span>
													</div>
												</div>

											</div>
										</div>
									</div>
								);
							})}
              </Slider>
								{/* <!-- END item --> */}

					

							

							</div>

						</div>
					</div>
				</div>
    
			</div>
		</div>
		{/* <!-- End Testimonial Slider --> */}
    </>
  );
}

export default SliderComponent;
