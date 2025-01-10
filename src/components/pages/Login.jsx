import React, { useContext } from "react";
import loginLogo from '../../assets/lottie/Animation1.json'
import Lottie from "lottie-react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const {signIn,signInWithGoogle,setUser}=useContext(AuthContext)
   const location=useLocation();
   const navigate=useNavigate()
   const handleGoogleSignIn= async ()=>{
    try{
      await signInWithGoogle()
      toast.success('Login Successful')
      setTimeout(() => {
        navigate(location?.state || '/')
      },1000);
    }
    catch(err){
       toast.error(err?.message)
      
    }
   }
    const handleLogin=(e)=>{ 
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log({email,password})
        signIn(email,password)
        .then((result)=>{
          const user=result.user;
          axios.post('https://assignment-11-server-ten-ecru.vercel.app/jwt', {withCredential:true})
          .then(res=>console.log(res.data))
          setUser(user)
          toast.success("Login Successful")
          setTimeout(()=>{
            navigate(location?.state || "/")
          },1000)
        })
        .catch(()=>{
          toast.error(`Login Failed`)
        })
    }
  return (
    <div className="flex justify-center lg:flex-row flex-col  items-center lg:pt-20 pt-8 pb-6">
      <div className="lg:h-72 lg:w-72 h-28 w-28">
        <Lottie animationData={loginLogo}>
            
        </Lottie>
      </div>
      <div>
        
        <div className="card bg-base-100 w-full  shadow-2xl ">
          <form className="card-body w-full" onSubmit={handleLogin}>
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent">Login</button>
            </div>
            <div>
              <p> Don't have an account
                <Link to='/register' className="font-semibold text-blue-600">Register</Link>
              </p>
            </div>
            <div className="divider">OR</div>
               <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info">
                Sign in with Google
               </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
