import React,{useState} from 'react'
import Images from '../assets/img/imges'
import {Container ,Row , Col, Image} from 'react-bootstrap' 
import { useNavigate } from 'react-router-dom'
import { AddtoCart } from '../Redux/CartSlice'
import { useDispatch } from 'react-redux'


import useGetData from '../CustomHooks/useGetData'

//firebase
import App from './Firebase';
import {getAuth} from 'firebase/auth'
import {useAuthState} from "react-firebase-hooks/auth";


import { getFirestore, collection, addDoc } from 'firebase/firestore';


function Shop() {
	const dispatch = useDispatch();
	const auth = getAuth(App);
    const [user] = useAuthState(auth);
    const db = getFirestore(App)
	const navigate = useNavigate()
	const collectionName = 'products';
	const product = useGetData(collectionName);

    // const handleAddToCart = async (items) => {
	// 	// Dispatch action to update Redux store
	// 	console.log('Items:', items);
	// 	dispatch(AddtoCart({ ...items, quantity: 1 }));
	
	// 	try {
	// 	  const cartRef = await addDoc(collection(db, "cart"), {
    //   		productName: items.productname,
    //   		productPrice: items.productprise,
	//   		productUrl: items.productUrl
    //   // Add more fields as needed
    // });
	// 	} catch (error) {
	// 	  console.error('Error adding to cart:', error);
	// 	}
	//   };

	const handleAddToCart = async (product) => {
		// Add to Redux store
		dispatch(AddtoCart({ ...product, quantity: 1 }));
	
		// Add to Firestore
		try {
		  const cartRef = await addDoc(collection(db, 'cart'), {
			productName: product.productname,
			productPrice: product.productprise,
			quantity: 1,
			// Add more fields as needed
		  });
		  console.log('Document written with ID: ', cartRef.id);
		} catch (error) {
		  console.error('Error adding to cart:', error);
		}
	  };

	//   const handleAddToCart = async (items) => {
	// 	// Dispatch action to update Redux store
	// 	// console.log('Items:', items);
	// 	dispatch(AddtoCart(items));
	
	// 	try {
		
	// 		await addDoc(collection (db , "cart"),{
	// 			items: [...cartSnapshot.data().items, product],

	// 		})
	// 		navigate('/cart')

	// 	} catch(err){
	// 		console.error(err);
	// 	 	alert(err.message)
	// 	}
	//   };
	
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

							<span class="icon-cross" onClick={() => handleAddToCart(items)}>
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