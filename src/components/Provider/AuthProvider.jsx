import React, { createContext, useEffect, useState } from 'react';
import auth from './firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { updateProfile } from 'firebase/auth';
import axios from 'axios';


export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const provider=new GoogleAuthProvider()
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,provider)
    }
        useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
                try {
                    if (currentUser) {
                        const res = await axios.post(
                            'http://localhost:5000/jwt',
                            { email: currentUser.email },
                            { withCredentials: true }
                        );
                        console.log('Token:', res.data);
                        console.log(currentUser);
                        setUser(currentUser); 
                        setLoading(false);
                    } else {
                        const res = await axios.post(
                            'http://localhost:5000/logout',
                            {},
                            { withCredentials: true }
                        );
                        console.log('Logout:', res.data);
                        setUser(null); 
                        setLoading(false);
                    }
                } catch (err) {
                    console.error('Error:', err);
                }
            });
        
            return () => {
                unSubscribe();
            };
        }, []);     
    const logOut=()=>{
        return signOut(auth)
    }
    const updateUserProfile=(name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo,
        })
    }
    const authInfo={
       loading,
       user,
       setUser,
       createUser,
       signIn,
       signInWithGoogle,
       logOut,updateUserProfile,
       setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;