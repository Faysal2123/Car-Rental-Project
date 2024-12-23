import React, { useContext, useState } from "react";
import RegisterLogo from '../../assets/lottie/Animation2.json'

import Lottie from "lottie-react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Register = () => {
    const{setUser, createUser, signInWithGoogle}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleGoogleSignUp=async ()=>{
      try{
        await signInWithGoogle()
        toast.success('Registration Successful')
        setTimeout(()=>{
          navigate('/login')
        },1000)
      }
      catch(err){
        console.log(err)
        toast.error(err?.message)
      }
    }
    
    const handleRegister=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const photo=form.photo.value;
        console.log({name,email,password,photo})
        createUser(email,password)
        .then(result=>{
          const user=result.user;
         
          setUser(user)
          toast.success('Registration Successful')
          setTimeout(()=>{
            navigate('/login')
          },1000)
        })
        .catch((err)=>{    
          toast.error(`Registration Failed:${err.message}`)
        })

    }
  return (
    <div className="flex justify-center lg:flex-row flex-col  items-center  pt-8 pb-6">
     <div className="lg:h-72 lg:w-72 h-28 w-28 flex justify-center">
        <Lottie animationData={RegisterLogo}></Lottie>
     </div>
     <div> <div className="card bg-base-100 w-full   shadow-2xl p-3">
        <form className="card-body" onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
            name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>       
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
            name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
           
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
            name="photo"
              type="url"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
           
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-error">Register</button>
          </div>
             <div>
              <p>Already have an account</p>
              <Link  className="font-semibold text-blue-600" to='/login'>Login</Link>
             </div>
             <div className="divider">OR</div>
             <button onClick={handleGoogleSignUp} className="btn btn-outline btn-error">
             Register with Google
             </button>
        </form>
      </div></div>
      
    </div>
  );
};

export default Register;
