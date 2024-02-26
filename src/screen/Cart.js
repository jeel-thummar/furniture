import React,{useState} from 'react'
import Images from '../assets/img/imges'
import '../screen/Style.css'
import { NavLink } from 'react-router-dom'
import useGetData from '../CustomHooks/useGetData'
import {  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart, } from '../Redux/CartSlice'
import { useDispatch , useSelector} from 'react-redux'


function Cart() {
  const [cartCount, setCartCount] = useState(0);
  const collectionName = 'cart';
	const product = useGetData(collectionName);
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item));
  };

  const handleIncrementQuantity = item => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrementQuantity = item => {
    dispatch(decrementQuantity(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  // const incrementCart = () => {
  //   setCartCount(cartCount + 1);
  // };

  // const decrementCart = () => {
  //   if (cartCount > 0) {
  //     setCartCount(cartCount - 1);
  //   }
  // };

  return (
    <>
    
      	
		{/* <!-- Start Hero Section --> */}
			<div class="hero">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1>Cart</h1>
							</div>
						</div>
						<div class="col-lg-7">
							
						</div>
					</div>
				</div>
			</div>
		{/* <!-- End Hero Section --> */}

		

		<div class="untree_co-section before-footer-section">
            <div class="container">
              <div class="row mb-5">
                <form class="col-md-12" method="post">
                  <div class="site-blocks-table">
                    <table class="table">
                      <thead>
                        <tr>
                          <th class="product-thumbnail">Image</th>
                          <th class="product-name">Product</th>
                          <th class="product-price">Price</th>
                          <th class="product-quantity">Quantity</th>
                          <th class="product-total">Total</th>
                          <th class="product-remove">Remove</th>
                        </tr>
                      </thead>
                     {cartItems.map((item)=>(
                       <tbody key={item.id}>
                       <tr>
                         <td class="product-thumbnail">
                           <img src={item.productUrl} alt="Image" class="img-fluid"/>
                         </td>
                         <td class="product-name">
                           <h2 class="h5 text-black">{item.productname}</h2>
                         </td>
                         <td>{item.productprise}</td>
                         <td>
                           <div class="input-group mb-3 d-flex align-items-center quantity-container" style={{maxwidth: 120}}>
                             <div class="input-group-prepend">
                               <button class="btn btn-outline-black decrease" type="button" onClick={() => handleDecrementQuantity(item)}>&minus;</button>
                             </div>
                             <input type="text" class="form-control text-center quantity-amount" value={item.quantity} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                             <div class="input-group-append">
                               <button class="btn btn-outline-black increase" type="button" onClick={() => handleIncrementQuantity(item)} >+</button>
                             </div>
                           </div>
       
                         </td>
                         <td>{ item.quantity*item.productprise}</td>
                         <td><a href="#" class="btn btn-black btn-sm" onClick={() => handleRemoveFromCart(item)}>X</a></td>
                       </tr>
       
                     
                       </tbody>
                     ))}
                    </table>
                  </div>
                </form>
              </div>
        
              <div class="row">
                <div class="col-md-6">
                  <div class="row mb-5">
                    {/* <div class="col-md-6 mb-3 mb-md-0">
                      <NavLink to={}><button class="btn btn-black btn-sm btn-block">Update Cart</button></NavLink>
                    </div> */}
                    <div class="col-md-6">
                      <NavLink to='/shop'><button class="btn btn-outline-black btn-sm btn-block">Continue Shopping</button></NavLink>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <label class="text-black h4" for="coupon">Coupon</label>
                      <p>Enter your coupon code if you have one.</p>
                    </div>
                    <div class="col-md-8 mb-3 mb-md-0">
                      <input type="text" class="form-control py-3" id="coupon" placeholder="Coupon Code"/>
                    </div>
                    <div class="col-md-4">
                      <button class="btn btn-black">Apply Coupon</button>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 pl-5">
                  <div class="row justify-content-end">
                    <div class="col-md-7">
                      <div class="row">
                        <div class="col-md-12 text-right border-bottom mb-5">
                          <h3 class="text-black h4 text-uppercase">Cart Totals</h3>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col-md-6">
                          <span class="text-black">Subtotal</span>
                        </div>
                        <div class="col-md-6 text-right">
                          <strong class="text-black">$230.00</strong>
                        </div>
                      </div>
                      <div class="row mb-5">
                        <div class="col-md-6">
                          <span class="text-black">Total</span>
                        </div>
                        <div class="col-md-6 text-right">
                          <strong class="text-black">$230.00</strong>
                        </div>
                      </div>
        
                      <div class="row">
                        <div class="col-md-12">
                        <NavLink to='/checkout'><button class="btn btn-black btn-lg py-3 btn-block">Proceed To Checkout</button></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Cart