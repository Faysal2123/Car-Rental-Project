import React from "react";
import loginLogo from '../../assets/lottie/Animation1.json'
import Lottie from "lottie-react";
const Login = () => {
    const handleLogin=(e)=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log({email,password})
    }
  return (
    <div className="flex justify-center lg:flex-row flex-col  items-center lg:pt-20 pt-8 pb-6">
      <div className="lg:h-72 lg:w-72 h-24 w-24">
        <Lottie animationData={loginLogo}>
            
        </Lottie>
      </div>
      <div>
        
        <div className="card bg-base-100 w-full  shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
