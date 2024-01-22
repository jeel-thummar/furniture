import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import '../Admin/dashbord.css'

function Dasbord() {
  return (
    <>
      <section style={{marginTop:130}}>
      <Container>
        <Row style={{paddingBottom:50}}>
          <Col className='lg-3'>
            <div className='revenue_box'>
              <h5>Total Sales</h5>
              <span>$522</span>
             </div>
          </Col>
          <Col className='lg-3'>
          <div className='order_box'>
              <h5>Orders</h5>
              <span>522</span>
             </div>
          </Col>
          <Col className='lg-3'>
          <div className='product_box'>
              <h5>Total Products</h5>
              <span>52</span>
             </div>
          </Col>
          <Col className='lg-3'>
          <div className='user_box'>
              <h5>Total Users</h5>
              <span>56</span>
             </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Dasbord