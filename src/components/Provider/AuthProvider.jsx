import React, { createContext, useEffect, useState } from 'react';
import auth from './firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const provider=new GoogleAuthProvider()
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,provider)
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
          setUser(currentUser)
          console.log(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    const logOut=()=>{
        return signOut()
    }
    const authInfo={
       loading,
       user,
       createUser,
       signIn,
       signInWithGoogle,
       logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;