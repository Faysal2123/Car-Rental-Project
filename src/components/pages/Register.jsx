import React from "react";
import RegisterLogo from '../../assets/lottie/Animation2.json'
import Lottie from "lottie-react";
const Register = () => {
  return (
    <div className="flex justify-center lg:flex-row flex-col  items-center  pt-8 pb-6">
     <div className="lg:h-72 lg:w-72 h-24 w-24 flex justify-center">
        <Lottie animationData={RegisterLogo}></Lottie>
     </div>
     <div> <div className="card bg-base-100 w-full   shadow-2xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
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
              type="url"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
           
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-error">Login</button>
          </div>
        </form>
      </div></div>
    </div>
  );
};

export default Register;
