import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RecentListing = () => {
  const cars = useLoaderData(); 
  console.log(cars);

  return (
    <div className="px-4 py-8 bg-gray-200">
      <h2 className="lg:text-5xl text-3xl font-bold text-gray-800 text-center mb-6">
        Recent Car Listings
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Explore our latest collection of cars available for rent. Choose from a wide variety of top models with competitive pricing.
      </p>

  
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cars.slice(0, 8).map((car) => (
          <div
            key={car._id}
            className="card bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500"
          >
            <div className="p-6">
              {/* Car Image */}
              <div className="relative w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={car.carImage}
                  alt={car.model}
                  className="object-contain h-full w-full transition-transform duration-500 hover:scale-110"
                />
              </div>        
              <h3 className="text-2xl font-semibold mt-4 text-gray-800">{car.model}</h3>
              <p className="text-lg text-gray-700">Daily Price: {car.dailyPrice}</p>
              <span
                className={`badge px-3 py-1 rounded-full text-sm ${
                  car.availability === 'Available'
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                }`}
              >
                {car.availability}
              </span>
             
              <p className="text-sm text-gray-600 mt-2">Bookings: {car.bookingCount || 0}</p>
             
              <p className="text-gray-500 text-sm mt-2">Added 2 days ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentListing;
