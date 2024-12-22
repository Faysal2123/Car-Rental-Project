import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo/logo2 .png'


const Navbar = () => {
  const Links = (
    <>
      <li>
      <NavLink to='/'>
        Home
      </NavLink>
      </li>
     <li >
     <NavLink to='/availableCars'>
        Available Cars
      </NavLink>
     </li>
      <li>
      <NavLink to='/addCar'>
         Add Car
      </NavLink>
      </li>
      <li>
      <NavLink to='/myCars'>
      My Cars
      </NavLink>
      </li>
      <li>
      <NavLink to='/myBookings'>
      My Bookings 
      </NavLink>
      </li>
    </>
  );
  return (
    <div className="items-center ">
      <div className="navbar bg-slate-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
             {Links}
            </ul>
          </div>
         <div className="flex gap-2 items-center">
            <img src={logo} className="md:h-20 md:w-20  h-14 w-14" alt="" />
            <a className=" lg:text-4xl text-2xl font-bold"><span className="text-orange-700">Elite</span>Rides</a>
         </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base">
            {Links}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <Link to='/login' className="btn btn-accent">Login</Link>
          <Link to='/register' className="btn btn-error">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
