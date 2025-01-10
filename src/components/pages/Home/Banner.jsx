import React from "react";
import banner from "../../../assets/images/pexels-mikebirdy-120049.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative">
     
      <div className="lg:h-[70vh] h-[400px] relative">
        <img
          className="h-full w-full object-cover brightness-75"
          src={banner}
          alt="Car banner"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Overlay Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-6 lg:w-[80%] w-[90%] lg:h-[60%] h-auto flex flex-col justify-center items-center bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-10">
        <h1 className="lg:text-7xl text-3xl font-extrabold text-white mb-4 drop-shadow-lg">
          Drive Your Dreams Today!
        </h1>
        <p className="lg:text-xl text-sm text-white lg:mb-6 mb-4 lg:w-[900px] w-full drop-shadow-md">
          Discover a wide range of luxury cars available for rent at unbeatable
          prices. Start your adventure today and enjoy the road like never
          before.
        </p>
        <Link
          to="/availableCars"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full text-lg transition-transform transform hover:scale-105 shadow-md"
        >
          View Available Cars
        </Link>
      </div>
    </div>
  );
};

export default Banner;
