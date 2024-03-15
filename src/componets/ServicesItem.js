import React from 'react'
import Images from '../assets/img/imges'
import '../screen/Style.css'

function ServicesItem() {
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
    <div className="why-choose-section">
			<div className="container">
				<div className="row my-5">
					{services.map((items,index) => (
						<div key={index} className="col-6 col-md-6 col-lg-3 mb-4">
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
    </>
  )
}

export default ServicesItem