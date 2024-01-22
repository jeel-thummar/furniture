import React,{useState, useEffect} from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import App from '../screen/Firebase';
import {getAuth} from 'firebase/auth'



function useAuth() {
    const auth = getAuth(App);
    const [currentUser, setCurrentUser] = ({})

    useEffect(() => {
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setCurrentUser(user)
            }else{
                setCurrentUser(null)
            }
        })
    })

  return (
    {currentUser}
  )
}

export default useAuth