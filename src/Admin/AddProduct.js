import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom';


//Firebase
import App from '../screen/Firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {getAuth} from 'firebase/auth';
import { collection,getFirestore,addDoc } from "firebase/firestore";
import {getStorage, storage} from 'firebase/storage';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


function AddProduct() {

  const [productName, setProductName] = useState('');
    const [productPrise, setProductPrise] = useState('');
    const [productImage, setProductImage] = useState(null);
    const [photoURL, setPhotoURL] = useState("");
    const [successMsg, setSuccessMsg] = useState('');
    const [uplodError, setUplodError] = useState('');
    const [imageError, setimageError] = useState('');
    const auth = getAuth(App);
    const db = getFirestore(App);
    const storage = getStorage(App);
  
    const [user ] = useAuthState(auth);
    const navigate = useNavigate();
  
  
    const type = ['image/jpg', 'image/jpeg', 'image/png', 'image/PNG']
    const handleProductImage =(e) => {
      let  selectdeimage = e.target.files[0];
      if (selectdeimage) {
        if (selectdeimage && type.includes(selectdeimage.type)) {
          setProductImage(selectdeimage);
          setimageError('')
          
        } else {
          setProductImage(null);
          setimageError('please select a valid image file type (png or jpg)')
        }
        
      }else{
        console.log('please select your image');
      }
    }
  
    
    const handleAddProduct = async (e) => {
      e.preventDefault();
    
      const product = {
        productname: productName,
        productprise: productPrise,
        productUrl: productImage,
      };
    
      try {
        const docRef = collection(db, 'products');
        const storageRef = ref(storage, `productimages/${productImage.name}`);
        
        // Use productImage directly, not productImage.name
        const uplodTask = uploadBytesResumable(storageRef, productImage);
    
        uplodTask.on(
          'state_changed',
          (snapshot) => {
            // Handle progress if needed
          },
          (error) => {
            alert('Image not uploaded');
            console.error('Error uploading image:', error);
          },
          async () => {
            try {
              const downloadurl = await getDownloadURL(uplodTask.snapshot.ref);
              
              await addDoc(docRef, {
                productname: productName,
                productprise: productPrise,
                productUrl: downloadurl,
              });
    
              // alert('Product added successfully');
              navigate('/dashbord/all-product')
              setProductName('');
              setProductPrise('');
              document.getElementById('file').value = '';
            } catch (error) {
              console.error('Error adding product to DB:', error);
            }
          }
        );
      } catch (error) {
        console.error('Error:', error);
        console.log('Product not added to DB');
      }
    };
    
  return (

    
  
    <>
    <section style={{marginTop:130}}>
    <div className='container' style={{marginBottom:50}}>
      <br></br>
      <br></br>
      <h1>Add Products</h1>
      <hr></hr>

      {successMsg && <>
        <br/>
        <div className='success-msg'>{successMsg}</div>
      </>}
      
        <form className='form-group' onSubmit={handleAddProduct}>
        <label>Product Name</label>
        <input type='text' 
        className='form-control'
        value={productName}
        onChange={(e) => setProductName(e.target.value)}/>
        <br/>

        <label>Product Prise</label>
        <input type='number' 
        className='form-control'
        value={productPrise}
        onChange={(e) => setProductPrise(e.target.value)}/>
        <br/>

        <label>Product Image</label>
        <input type='file'
        id='file' 
        className='form-control'
        // value={productImage}
        onChange={(e)=> setProductImage(e.target.files[0])}/>
        
        {imageError && <>
          <br/>
        <div className='error-msg'>{imageError}</div>
        
        </>}
        <br/>
        <div style={{display:'flex', justifyContent:'center'}}>
          <button type='submit' className='btn btn-success btn-md'>Submit</button>
        </div>

      </form>
      {uplodError && <>
        <br/>
        <div className='error-msg'>{uplodError}</div>
      </>}

    </div>
    </section>
    </>
  )
}

export default AddProduct