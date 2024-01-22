  import React from 'react'
  import {Container ,Row , Col} from 'react-bootstrap' 
  import Images from '../assets/img/imges'
  import useGetData from '../CustomHooks/useGetData'
  import App from '../screen/Firebase'
  import {doc, deleteDoc, getFirestore} from 'firebase/firestore'


  function AllProduct() {
    const db = getFirestore(App)
    // const { data:productsData } = useGetData('products');
    // console.log('data:',productsData)
    const collectionName = 'products';
    const data = useGetData(collectionName);
    // console.log(data)

    //delete product
    const deleteProduct = async id => {
      await deleteDoc(doc(db, 'products', id))
    }
    if (!data || data.length === 0) {
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
                <th>Image</th>
                <th>Title</th>
                <th>Prise</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.productUrl} style={{ height: 50, width: 50 }} alt="product" />
                      </td>
                      <td>{item.productname}</td>
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

  export default AllProduct