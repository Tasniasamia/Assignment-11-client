/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from 'react';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../../../../../Firebase/Firebase_config';

export const authdata=createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);
   
  
    
 

    const data="Tasnia";
    
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
// google sign
const googlesign=()=>{
    setLoading(true);
return  signInWithPopup(auth, provider)  ;  
 

  
}
//resister
const resister=(email,password)=>{
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password)

}
//sign in
const signin=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)

}
//signout
const signout=()=>{
    signOut(auth).then(() => {
        setUser('')
        
      }).catch((error) => {
       
      });
}
// email verification

//onAuthChanged
useEffect(()=>{
  
   const unsubscribe=onAuthStateChanged(auth,(user) => {
  

        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        setLoading(false);

     
    
 
    
       
      
      });
      return ()=>{
        return unsubscribe()
        };

       
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
 //update displayname
 function displayname(name,photo){
setLoading(true);
 return updateProfile(auth.currentUser, {
        displayName: name,photoURL:photo

      })
}
    const Authvaluedata={
        data,resister,signin,signout,user,displayname,setUser,googlesign,loading
    }
    return (
        <div>
            <authdata.Provider value={Authvaluedata}>
           {children}
            </authdata.Provider>
            
        </div>
    );
};

export default AuthProvider;