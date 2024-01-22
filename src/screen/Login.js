import React,{useState} from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import Footer from '../componets/Footer'

//Firebase
import App from './Firebase';
import {getAuth , signInWithEmailAndPassword } from 'firebase/auth'
import {addDoc , getFirestore ,collection} from 'firebase/firestore'
import {useAuthState} from "react-firebase-hooks/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(App);
  const [user ] = useAuthState(auth);
  const navigate = useNavigate();

    
  const loginWithEmailandPassword = async (e) => {
    e.preventDefault ();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/profile')
    } catch (err) {
      console.log(err);
		 	alert(err.message);
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
                    onChange={(e) => setPassword(e.target.value)} />
                    <label class="form-label" for="form2Example27">Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" type="button" onClick={loginWithEmailandPassword}>Login</button>
                  </div>

                  <a class="small text-muted" href="#!">Forgot password?</a>
                  <p class="mb-5 pb-lg-2">Don't have an account? <NavLink to={"/signup"}><a>Register here</a></NavLink></p>
                  
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

export default Login