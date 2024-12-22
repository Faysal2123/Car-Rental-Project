import React, { useContext } from "react";
import RegisterLogo from '../../assets/lottie/Animation2.json'
import toast, { Toaster } from 'react-hot-toast';
import Lottie from "lottie-react";
import { AuthContext } from "../Provider/AuthProvider";
const Register = () => {
    const{user, createUser}=useContext(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const photo=form.photo.value;
        console.log({name,email,password,photo})
        createUser(email,password)
        .then(data=>console.log(data))
        toast.success('Registration Successful')

    }
  return (
    <div className="flex justify-center lg:flex-row flex-col  items-center  pt-8 pb-6">
     <div className="lg:h-72 lg:w-72 h-24 w-24 flex justify-center">
        <Lottie animationData={RegisterLogo}></Lottie>
     </div>
     <div> <div className="card bg-base-100 w-full   shadow-2xl">
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
            <button className="btn btn-error">Login</button>
          </div>
        </form>
      </div></div>
    </div>
  );
};

export default Register;
