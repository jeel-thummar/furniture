import React,{useState, useEffect} from 'react'
import './edit.css'
import {useNavigate } from 'react-router-dom';
import imges from '../../assets/img/imges';




//firebase
import App from '../Firebase';
import {getAuth ,updateEmail} from 'firebase/auth'
import {getDocs , where  ,collection ,query ,getFirestore, updateDoc, doc} from "firebase/firestore"
import {useAuthState} from "react-firebase-hooks/auth";
import {getStorage} from 'firebase/storage';
// import {useAuth} from '../../CustomHooks/useAuth';

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



function Edit() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [image, setImage] = useState("");
    const [uploaded, setUploaded] = useState(false);
    const [photoURL, setPhotoURL] = useState("");
    const [err, setErr] = useState(false);


    const auth = getAuth(App);
    const db = getFirestore(App);
    const storage = getStorage(App);


    const [user] = useAuthState(auth);
    const navigate = useNavigate();
       //Profile image

       const handleImageChange = (e) => {
        if(e.target.files[0]) {
          setImage(e.target.files[0]);
        }
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        // const file = e.target[0].files[0];
    
        //Create a unique image name
        const date = new Date().getTime();
        const storageRef = ref(storage,`profile/${userName}`);
        const userRef = query(
          collection(db, "users"),
          where("uid", "==", user?.uid)
        );
        const findUsers = await getDocs(userRef);
        findUsers.forEach(async (user) => {
          const getUser = doc(db, "users", user.id);
          await uploadBytesResumable(storageRef, image).then(() => {
            getDownloadURL(storageRef).then(async (downloadURL) => {
              try {
                //Update profile
                await updateDoc(getUser, {
                  photoURL: downloadURL,
                });
                setPhotoURL(downloadURL)
                navigate("/profile");
                setUploaded(true);
              } catch {
                console.log(err);
                setPhotoURL(imges.profile)
                setErr(true);
              }
            });
          });
        });
      };

      //FetchUser
  const fetchUser = async () => {
    try {
        const q = query(collection(db , "users"),where("uid","==", user ?.uid));
         const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setUserName(data.userName);
        setEmail(data.email);
        // setPassword(data.password);
        setPhotoURL(data.photoURL)

        // setPhoneNumber(data.phoneNumber);
    }catch (err){
        console.error(err);
        alert("An error occured while fetching user data")
    }
  };

  const updateUser = async () => {
    const userRef = query(collection(db, "users"), where("uid", "==", user?.uid));
    const findUsers = await getDocs(userRef);
    findUsers.forEach( async (user) => {
     const getUser = doc(db, 'users', user.id);
     await updateDoc(getUser, {
      userName : userName,
      email: email,
      // phoneNumber: phoneNumber,
     });
    });
    if (user) {
      updateEmail(auth.currentUser, email)
        .then(() => {
          console.log("Email Updated...!");
        })
        .catch((err) => {
          console.log(err);
        });
      navigate("/profile");
    }
   } 
        
   useEffect(() => {
    if (!user) return navigate("/Sign-up");
    fetchUser();
  }, [user]);
  return (
    <>
    <div class="container-xl px-4 mt-4">

<hr class="mt-0 mb-4"/>
<div class="row">
    <div class="col-xl-4">
        {/* <!-- Profile picture card--> */}
        <div class="card mb-4 mb-xl-0">
            <div class="card-header">Profile Picture</div>
            <div class="card-body text-center">
                {/* <!-- Profile picture image--> */}
                <img class="img-account-profile rounded-circle mb-2" src={photoURL} alt="" style={{height:150, width:150}}/>
                {/* <!-- Profile picture help block--> */}
                <div class="small font-italic text-muted mb-4"><input type='file'className='filebtn' style={{}} onChange={handleImageChange}/></div>
                {/* <!-- Profile picture upload button--> */}
                <button class="btn btn-primary" type="button" onClick={handleSubmit}>Upload new image</button>
            </div>
        </div>
    </div>
    <div class="col-xl-8">
        {/* <!-- Account details card--> */}
        <div class="card mb-4">
            <div class="card-header">Account Details</div>
            <div class="card-body">
                <form>
                    {/* <!-- Form Group (username)--> */}
                    <div class="mb-3">
                        <label class="small mb-1" for="inputUsername">Full Name</label>
                        <input class="form-control" 
                        id="inputUsername" type="text" 
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
               
               
                    {/* <!-- Form Group (email address)--> */}
                    <div class="mb-3">
                        <label class="small mb-1" for="inputEmailAddress">Email address</label>
                        <input class="form-control" 
                        id="inputEmailAddress" 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {/* <!-- Form Row--> */}
                    <div class="row gx-3 mb-3">
                        {/* <!-- Form Group (phone number)--> */}
                        <div class="col-md-6">
                            <label class="small mb-1" for="inputPhone">Phone number</label>
                            <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="555-123-4567"/>
                        </div>
                    
                    </div>
                    {/* <!-- Save changes button--> */}
                    <button class="btn btn-primary" type="button" onClick={updateUser}>Save changes</button>
                </form>
            </div>
        </div>
    </div>
</div>
</div>
    </>
  )
}

export default Edit