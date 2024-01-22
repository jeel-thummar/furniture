import React, {useState} from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import Footer from '../componets/Footer'


//Firebase
import App from './Firebase';
import {getAuth ,createUserWithEmailAndPassword } from 'firebase/auth'
import {addDoc , getFirestore ,collection} from 'firebase/firestore'




function Signup() {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(App);
  const db = getFirestore(App);
  const navigate = useNavigate();

  const CreateAccount= async () => {
		try {
			const res =await createUserWithEmailAndPassword(auth , email, password )
			const user =res.user;
			console.log(user);
			await addDoc(collection (db , "users"),{
				uid :user.uid,
        userName,
				email,
        password,
				authProvider : "Local"
			})
			navigate('/profile')

		} catch(err){
			console.log(err);
		 	alert(err.message)
		}
	     
	}


  return (
    <>
      <section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" class="img-fluid"  />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form>

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3"></i>
                    <span class="h1 fw-bold mb-0">Logo</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style={{letterspacing : 1}}>Sign into your account</h5>


                  <div class="form-outline mb-4">
                    <input type="text"
                    id="form2Example27" 
                    class="form-control form-control-lg"
                    placeholder='Enter your name'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    />
                    <label class="form-label" for="form2Example17">Full Name</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="email" 
                    id="form2Example17" 
                    class="form-control form-control-lg"
                    placeholder='Enater your mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <label class="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" 
                    id="form2Example27" 
                    class="form-control form-control-lg"
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                     />
                    <label class="form-label" for="form2Example27" >Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" type="button" onClick={CreateAccount}>Create Account</button>
                  </div>

               
                  <p class="mb-5 pb-lg-2">Already have a login ? <NavLink to="/login"><a>Login</a></NavLink></p>
                  
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>
    <Footer/>
    </>
  )
}

export default Signup