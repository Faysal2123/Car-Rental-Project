import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
const axiosInstance = axios.create({
    baseURL: 'https://assignment-11-server-ten-ecru.vercel.app',
    withCredentials:true
  });

const UseAxiosSecure = () => {
    const{logOut}=useContext(AuthContext)
    const navigate=useNavigate()
    useEffect(()=>{
        axiosInstance.interceptors.response.use(response=>{
            return response
        },error =>{
            console.log('error caught interceptor' )
            if(error.status===401 || error.status === 403){
                console.log('need to logout the user')
                logOut()
                .then(()=>{
                    console.log('Logged Out User')
                    navigate('/login')
                })
                .catch(error => console.log(error))
            }
            return Promise.reject(error)
        })
    },[])
    return axiosInstance

};

export default UseAxiosSecure;