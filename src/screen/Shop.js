import React,{useState} from 'react'
import Images from '../assets/img/imges'
import {Container ,Row , Col} from 'react-bootstrap' 
import { useNavigate } from 'react-router-dom'

import useGetData from '../CustomHooks/useGetData'

//firebase
import App from './Firebase';
import {getAuth} from 'firebase/auth'
import {useAuthState} from "react-firebase-hooks/auth";

// import {getAuth ,createUserWithEmailAndPassword } from 'firebase/auth'
import {addDoc , getFirestore ,collection} from 'firebase/firestore'


function Shop() {
	const auth = getAuth(App);
    const [user] = useAuthState(auth);
    const db = getFirestore(App)
	const navigate = useNavigate()
	const collectionName = 'products';
	const product = useGetData(collectionName);
	const [productName, setProductName] = useState('');

    const [productPrise, setProductPrise] = useState('');

    const [productImage, setProductImage] = useState(null);

    
	const Addtocart= async (products) => {
		try {
				
				await addDoc(collection (db , "Cart"),{
					productname:products.productprise,
					productprise: productPrise,
					productUrl: productImage,
				})
				// navigate('')
				alert('suce')
	
			} catch(err){
				console.error(err);
				 alert(err.message)
			}
			 
		}
	
	if (!product || product.length === 0) {
		// Data is still loading or empty, you can render a loading state or alternative content
		return (
		  <section style={{ marginTop: 130 }}>
			<Container>
			  <Row>
				<Col lg='12'>
				  <h4 className='fw-bold'>Product</h4>
				</Col>
				<Col lg='12'>
				  <p>Loading...</p>
				</Col>
			  </Row>
			</Container>
		  </section>
		);
	  }
  return (
    <>
	     <div class="hero">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1>Shop</h1>
							</div>
						</div>
						<div class="col-lg-7">
							
						</div>
					</div>
				</div>
			</div>
    	 <div class="untree_co-section product-section before-footer-section">
		    <div class="container">
		      	<div class="row"> 

		      		{/* <!-- Start Column 1 --> */}
					 {product.map((items) => (
            <div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src={items.productUrl} class="img-fluid product-thumbnail"/>
							<h3 class="product-title">{items.productname}</h3>
							<strong class="product-price">{items.productprise}</strong>

							<span class="icon-cross" onClick={Addtocart}>
								<img src={Images.cross} class="img-fluid" />
							</span>
						</a>
					</div> 
          ))} 
					{/* <!-- End Column 1 --> */}
						
					

		      	 </div>
		    </div>
		</div> 
    </>
  )
}

export default Shop