import React,{useState,useEffect} from 'react'
import './profile.css';
import { NavLink, useNavigate } from 'react-router-dom';

//firebase
import App from '../Firebase';
import {getAuth ,signOut } from 'firebase/auth'
import {getDocs , where  ,collection ,query ,getFirestore} from "firebase/firestore"
import {useAuthState} from "react-firebase-hooks/auth";


function Profile() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const auth = getAuth(App);
  const db = getFirestore(App);
  const [user ] = useAuthState(auth);
  const navigate = useNavigate();
   
  //FetchUser
  const fetchUser = async () => {
    try {
        const q = query(collection(db , "users"),where("uid" , "==" , user ?.uid));
         const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setUserName(data.userName);
        setEmail(data.email);
        setPassword(data.password);
        setPhotoURL(data.photoURL)

        // setPhoneNumber(data.phoneNumber);
    }catch (err){
        console.error(err);
        alert("An error occured while fetching user data")
    }
  };
  useEffect(() => {
    // if (loading) return;
    if (!user) return navigate("/signup");
    fetchUser();
  }, [user]);

  //Logout
  const Logout = () =>{
    signOut(auth);
};
  return (
    <>
      <section style={{backgroundcolor:"lightblue"}}>
        <div class="container py-5">
      
          <div class="row">
            <div class="col-lg-4">
              <div class="card mb-4">
                <div class="card-body text-center">
                  <img src={photoURL} alt="avatar"
                    class="rounded-circle img-fluid" style={{width: 150}}/>
                  <h5 class="my-3">{userName}</h5>
                 
                </div>
              </div>
           
            </div>
            <div class="col-lg-8">
              <div class="card mb-4">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Full Name</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{userName}</p>
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Email</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{email}</p>
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Password</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{password}</p>
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Mobile</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">(098) 765-4321</p>
                    </div>
                  </div>
                  <hr/>
                 <div className='d-flex'>
                 <div class="d-flex justify-content-center mb-2">
                    <button type="button" class="btn btn-primary" style={{}} ><NavLink to='/edit' style={{color :'white', textDecoration : 'none'}}>Edit Profile</NavLink></button>
                  </div>
                  <div class="d-flex justify-content-center mb-2 ml-20" style={{marginLeft: 10}}>
                    <button type="button" class="btn btn-primary" onClick={Logout}>Log Out</button>
                  </div>
                 </div>
           
                </div>
              </div>
           
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Profile