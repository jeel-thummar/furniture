import React from 'react'
import Images from '../assets/img/imges'
import product from '../componets/Product'
import '../screen/Style.css'

function Team() {
  return (
    <>
    <div className="untree_co-section">
			<div className="container">

				<div className="row mb-5">
					<div className="col-lg-5 mx-auto text-center">
						<h2 className="section-title">Our Team</h2>
					</div>
				</div>

				<div className="row">

					{/* <!-- Start Column 1 --> */}
					{product.Team.map((people) => (
                        <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                                    <img src={people.PersinImage} className="img-fluid mb-5"/>
                                    <h3 clas><a>{people.PersonName}</a></h3>
                        <span className="d-block position mb-4">{people.Position}</span>
                        <p>{people.descripition}</p>
                        <p className="mb-0"><a className="more dark">{people.Pbtn}</a></p>
                        </div>
                    ))} 
                    {/* <!-- End Column 1 --> */}
				</div>
			</div>
	</div>
    </>
  )
}

export default Team