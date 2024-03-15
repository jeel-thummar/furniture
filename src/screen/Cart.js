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


function Cart({item}) {
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

   // Calculate Subtotal
   const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity * item.productprise;
    }, 0);
  };


  return (
    <>
    
      	
		{/* <!-- Start Hero Section --> */}
			<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Cart</h1>
							</div>
						</div>
						<div className="col-lg-7">
							
						</div>
					</div>
				</div>
			</div>
		{/* <!-- End Hero Section --> */}

		

		<div className="untree_co-section before-footer-section">
            <div className="container">
              <div className="row mb-5">
                <form className="col-md-12" method="post">
                  <div className="site-blocks-table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Image</th>
                          <th className="product-name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-total">Total</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                     {cartItems.map((item)=>(
                       <tbody key={item.id}>
                       <tr>
                         <td className="product-thumbnail">
                           <img src={item.productUrl} alt="Image" className="img-fluid"/>
                         </td>
                         <td className="product-name">
                           <h2 className="h5 text-black">{item.productname}</h2>
                         </td>
                         <td>{item.productprise}</td>
                         <td>
                           <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{maxwidth: 120}}>
                             <div className="input-group-prepend">
                               <button className="btn btn-outline-black decrease" type="button" onClick={() => handleDecrementQuantity(item)}>&minus;</button>
                             </div>
                             <input type="text" className="form-control text-center quantity-amount" value={item.quantity} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                             <div className="input-group-append">
                               <button className="btn btn-outline-black increase" type="button" onClick={() => handleIncrementQuantity(item)} >+</button>
                             </div>
                           </div>
       
                         </td>
                         <td>{ item.quantity*item.productprise}</td>
                         <td><a className="btn btn-black btn-sm" onClick={() => handleRemoveFromCart(item)}>X</a></td>
                       </tr>
       
                     
                       </tbody>
                     ))}
                    </table>
                  </div>
                </form>
              </div>
        
              <div className="row">
                <div className="col-md-6">
                  <div className="row mb-5">
                    {/* <div className="col-md-6 mb-3 mb-md-0">
                      <NavLink to={}><button className="btn btn-black btn-sm btn-block">Update Cart</button></NavLink>
                    </div> */}
                    <div className="col-md-6">
                      <NavLink to='/shop'><button className="btn btn-outline-black btn-sm btn-block">Continue Shopping</button></NavLink>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label className="text-black h4" for="coupon">Coupon</label>
                      <p>Enter your coupon code if you have one.</p>
                    </div>
                    <div className="col-md-8 mb-3 mb-md-0">
                      <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code"/>
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-black">Apply Coupon</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-5">
                  <div className="row justify-content-end">
                    <div className="col-md-7">
                      <div className="row">
                        <div className="col-md-12 text-right border-bottom mb-5">
                          <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <span className="text-black">cart item</span>
                        </div>
                        <div className="col-md-6 text-right">
                          <strong className="text-black">{cartItems.length}</strong>
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="col-md-6">
                          <span className="text-black">Total</span>
                        </div>
                        <div className="col-md-6 text-right">
                          <strong className="text-black">{calculateSubtotal().toFixed(2)}</strong>
                        </div>
                      </div>
        
                      <div className="row">
                        <div className="col-md-12">
                        <NavLink to='/checkout'><button className="btn btn-black btn-lg py-3 btn-block">Proceed To Checkout</button></NavLink>
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