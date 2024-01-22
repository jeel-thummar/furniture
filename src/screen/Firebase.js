import {initializeApp} from 'firebase/app'
 
const firebaseConfig = {
    apiKey: "AIzaSyBu23kOj4foJYUESEhTdW6X42xg0e2RosA",
    authDomain: "furniture-39c70.firebaseapp.com",
    projectId: "furniture-39c70",
    storageBucket: "furniture-39c70.appspot.com",
    messagingSenderId: "1072673110727",
    appId: "1:1072673110727:web:f2e3d3daf02eaec716dce2",
    measurementId: "G-4JW2GLL6VE"
  };

  const App = initializeApp(firebaseConfig)
  export default App;