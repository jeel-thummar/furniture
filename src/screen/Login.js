import React,{useState} from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import Footer from '../componets/Footer'
// import Fpass from '../screen/ForgetPass'

//Firebase
import App from './Firebase';
import {getAuth , signInWithEmailAndPassword } from 'firebase/auth'
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
  <section className="vh-100" style={{marginTop:50}}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card">
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                  alt="login form" className="img-fluid"  />
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">

                  <form>

                    <div className="d-flex align-items-center mb-3 pb-1">
                      <i className="fas fa-cubes fa-2x me-3"></i>
                      <span className="h1 fw-bold mb-0">Logo</span>
                    </div>

                    <h5 className="fw-normal mb-3 pb-3" style={{letterspacing : 1}}>Sign into your account</h5>

                    <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example17">Email address</label>

                      <input type="email" 
                      id="form2Example17" 
                      className="form-control form-control-lg"
                      placeholder='Enater your mail'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example27">Password</label>

                      <input type="password" 
                      id="form2Example27" 
                      className="form-control form-control-lg"
                      placeholder='Enter password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="pt-1 mb-4">
                      <button className="btn btn-dark btn-lg btn-block" type="button" onClick={loginWithEmailandPassword}>Login</button>
                    </div>

                    <NavLink to='/fpass'><a className="small text-muted">Forgot password?</a></NavLink>
                    <p className="mb-5 pb-lg-2">Don't have an account? <NavLink to="/signup"><a>Register here</a></NavLink></p>
                    
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