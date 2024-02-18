import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import Images from '../assets/img/imges'
import useGetData from '../CustomHooks/useGetData';
import App from '../screen/Firebase'
import { getAuth, deleteUser as deleteAuthUser } from 'firebase/auth';import {doc, deleteDoc, getFirestore} from 'firebase/firestore'


function User() {
  const db = getFirestore(App)

  const collectionName = 'users';
  const Users = useGetData(collectionName);
  const auth = getAuth(App);


  // deleteuser
  // const deleteUser = async id => {
  //   const auth = getAuth(App);
  //   const deleteAuthUser = deleteAuthUser(App)
  //   await deleteAuthUser(auth.currentUser);
  //   await deleteDoc(doc(db, 'users', id))
  // }
  const deleteUser = async (id, email) => {
  
    try {
      // Step 1: Delete user from Authentication
      await deleteAuthUser(auth.currentUser);
  
      // Step 2: Delete user's document from Firestore
      await deleteDoc(doc(db, 'users', id));
  
      console.log(`User with email ${email} and id ${id} successfully deleted.`);
    } catch (error) {
      console.error('Error deleting user:', error.message);
    }
  };
  
    if (!Users || Users.length === 0) {
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
    <>
    <section style={{marginTop:130}}>
      <Container>
        <Row>
          <Col lg='12'> <h4 className='fw-bold'>USers</h4></Col>
          <Col lg='12' className='pt-5'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {Users.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <img src={user.photoURL} style={{ height: 50, width: 50 }} alt="product" />
                      </td>
                      <td>{user.userName}</td>
                      <td>{user.email}</td>
                      <td>
                        <button className='btn btn-primary' onClick={() => {deleteUser(user.id)}}>Delete</button>
                      </td>
                    </tr>
                  ))}
              </tbody>

            </table>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default User