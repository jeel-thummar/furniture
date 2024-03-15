import React,{useState, useEffect} from 'react'
import {Container ,Row , Col} from 'react-bootstrap' 
import Images from '../assets/img/imges'
import useGetData from '../CustomHooks/useGetData'
import App from '../screen/Firebase'
import {doc, deleteDoc, getFirestore} from 'firebase/firestore'
import {getAuth } from 'firebase/auth'


function Order() {
  
  const auth = getAuth(App)
  const db = getFirestore(App)
    	// currentuser
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

  const collectionName = 'cart' + uid ;
  const Order = useGetData(collectionName);

    //delete product
    const deleteProduct = async id => {
      await deleteDoc(doc(db, 'cart' + uid, id))
    }
    if (!Order || Order.length === 0) {
      // Data is still loading or empty, you can render a loading state or alternative content
      return (
        <section style={{ marginTop: 130 }}>
          <Container>
            <Row>
              <Col lg='12'>
                <h4 className='fw-bold'>All-Product</h4>
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
      <section style={{marginTop:130}}>
        <Container>
          <Row>
          <Col lg='12'> <h4 className='fw-bold'>All-Product</h4></Col>

          <Col lg='12'>
          <table className='table'>
            <thead>
              <tr>
                <th>Username</th>
                <th>Product Name</th>
                <th>Product Quantity</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
            {Order.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img src={ item.productUrl	} style={{ height: 50, width: 50 }} alt="product" />
                      </td>
                      <td>{item.productName}</td>
                      <td>{item.quantity}</td>
                      <td>{item.productprise}</td>
                      <td>
                        <button className='btn btn-primary' onClick={()=>{deleteProduct(item.id)}}>Delete</button>
                      </td>
                    </tr>
                  ))}
               
              
            </tbody>
          </table>
          </Col>
          </Row>
        </Container>
      </section>
    )
}

export default Order