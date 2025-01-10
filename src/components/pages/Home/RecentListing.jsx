import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const RecentListing = () => {
  const cars = useLoaderData();

  return (
    <div className="px-4 py-12 bg-gray-100">

      <div className="text-center">
        <h2 className="lg:text-5xl text-3xl font-extrabold text-gray-900 mb-4">
          Recent Car Listings
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our latest collection of cars available for rent. Choose from
          a wide variety of top models with competitive pricing.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {cars.slice(0, 6).map((car) => (
          <div
            key={car._id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden"
          >       
            <div className='h-60 w-full p-5 bg-gray-200 '>
             <div className="relative w-full h-full  flex items-center justify-center overflow-hidden rounded-xl mb-4 ">
                <img
                  src={car.carImage}
                  alt={car.model}
                  className="object-contain h-full transition-transform duration-500 hover:scale-110
                  "
                />
              </div>
             </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 transition-all">
                {car.model}
              </h3>
              <p className="text-lg text-gray-700 mt-2">
                Daily Price:{" "}
                <span className="font-bold text-orange-500">{car.dailyPrice}</span>
              </p>
              <div className="mt-3">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    car.availability === "Available"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {car.availability}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Bookings: {car.bookingCount || 0}
              </p>
              <p className="text-gray-500 text-sm mt-1">Added 2 days ago</p>
              <div>
              <Link
                  to={`/carsDetails/${car._id}`}
                  className="mt-3 inline-block px-6 py-2 text-white bg-zinc-400 rounded-lg shadow-md hover:bg-zinc-600 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Car Details
                </Link>
            </div>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentListing;
