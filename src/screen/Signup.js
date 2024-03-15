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
  // const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [password, setPassword] = useState("");
  const auth = getAuth(App);
  const db = getFirestore(App);
  const navigate = useNavigate();
   //Full name validatin
  const validateFullName = (inputFullName) => {
    // Regular expression for a basic full name validation
    const fullNameRegex = /^[a-zA-Z\s]+$/;
    return fullNameRegex.test(inputFullName);
  };

  const handleFullNameChange = (e) => {
    const inputFullName = e.target.value;
    setUserName(inputFullName);

    // Validate full name and set the fullNameError state accordingly
    if (validateFullName(inputFullName)) {
      setFullNameError(null);
    } else {
      setFullNameError("Please enter a valid full name");
    }
  };


  //password validation
  const validatePassword = (inputPassword) => {
    // Regular expression for a basic password validation (at least 8 characters)
    const passwordRegex = /^.{8,}$/;
    return passwordRegex.test(inputPassword);
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

    // Validate password and set the passwordError state accordingly
    if (validatePassword(inputPassword)) {
      setPasswordError(null);
    } else {
      setPasswordError("Password must be at least 8 characters");
    }
  };

  //email validation
  const validateEmail = (inputEmail) => {
    // Regular expression for a basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    
    // Validate email and set the emailError state accordingly
    if (validateEmail(inputEmail)) {
      setEmailError(null);
    } else {
      setEmailError("Please enter a valid email address");
    }
  };

  // const CreateAccount= async () => {
  //   try {
	// 		const res =await createUserWithEmailAndPassword(auth , email, password )
	// 		const user =res.user;
	// 		console.log(user);
	// 		await addDoc(collection (db , "users"),{
	// 			uid :user.uid,
  //       userName,
	// 			email,
  //       password,
	// 			authProvider : "Local"
	// 		})
	// 		navigate('/profile')

	// 	} catch(err){
	// 		console.error(err);
	// 	 	alert(err.message)
	// 	}
	     
	// }
  const CreateAccount = async () => {
    try {
      // Check for validation errors before attempting to create an account
      if (fullNameError || emailError || passwordError) {
        alert("Please fix the validation errors before creating an account");
        return;
      }

      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      console.log(user);
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        userName,
        email,
        password,
        authProvider: "Local"
      });
      navigate('/profile');
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };



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
                  <label className="form-label" for="form2Example17">Full Name</label>
                  <input
                      type="text"
                      id="form2Example27"
                      className={`form-control form-control-lg ${fullNameError ? 'is-invalid' : ''}`}
                      placeholder='Enter your name'
                      value={userName}
                      onChange={handleFullNameChange}
                    />
                    {fullNameError && <div className="invalid-feedback">{fullNameError}</div>}
                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" for="form2Example17">Email address</label>
                   <input
                    type="email"
                    id="form2Example17"
                    className={`form-control form-control-lg ${emailError ? 'is-invalid' : ''}`}
                    placeholder='Enter your mail'
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {emailError && <div className="invalid-feedback">{emailError}</div>}
                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" for="form2Example27" >Password</label>
                  <input
                    type="password"
                    id="form2Example27"
                    className={`form-control form-control-lg ${passwordError ? 'is-invalid' : ''}`}
                    placeholder='Enter password'
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="button" onClick={CreateAccount}>Create Account</button>
                  </div>

               
                  <p className="mb-5 pb-lg-2">Already have a login ? <NavLink to="/login"><a>Login</a></NavLink></p>
                  
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