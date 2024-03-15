import React,{useEffect, useState} from 'react'
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

	//getting current user
	function GetUseruid(){
		const [uid, setUid] = useState(null)
		useEffect(()=>{
			auth.onAuthStateChanged(user=>{
				if(user){
					setUid(user.uid)
				}
			})
		},[])
		return uid;
	}
	const uid = GetUseruid()

	const handleAddToCart = async (product) => {
		// Add to Redux store
		if(uid != null){
			dispatch(AddtoCart({ ...product, quantity: 1 }));

		}
		else{
			navigate('/login')
		}
	
		// Add to Firestore
		// try {
		//   const cartRef = await addDoc(collection(db, 'cart'), {
		// 	productName: product.productname,
		// 	productPrice: product.productprise,
		// 	quantity: 1,
		// 	// Add more fields as needed
		//   });
		//   console.log('Document written with ID: ', cartRef.id);
		// } catch (error) {
		//   console.error('Error adding to cart:', error);
		// }
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
	     <div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Shop</h1>
							</div>
						</div>
						<div className="col-lg-7">
							
						</div>
					</div>
				</div>
			</div>
    	 <div className="untree_co-section product-section before-footer-section">
		    <div className="container">
		      	<div className="row"> 

		      		{/* <!-- Start Column 1 --> */}
					 {product.map((items) => (
            <div className="col-12 col-md-4 col-lg-3 mb-5">
						<a className="product-item">
							<img src={items.productUrl} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">{items.productname}</h3>
							<strong className="product-price">{items.productprise}</strong>

							<span className="icon-cross" onClick={() => handleAddToCart(items)}>
								<img src={Images.cross} className="img-fluid" />
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