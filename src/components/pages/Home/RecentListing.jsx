import React from 'react';
import camry from '../../../assets/images/camry.png';
import honda from '../../../assets/images/honda.png';
import ford from '../../../assets/images/Ford.png';
import tesla from '../../../assets/images/tesla.png';
import prado from '../../../assets/images/prado.png';
import bmw from '../../../assets/images/BMW-X5.png';
import audi from '../../../assets/images/audi.png';
import mercedes from '../../../assets/images/Mercedes.png';

const RecentListing = () => {
  return (
    <div className="px-4 py-8 bg-gray-200">
      <h2 className="lg:text-5xl text-3xl font-bold text-gray-800 text-center mb-6">Recent Car Listings</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 ">
        Explore our latest collection of cars available for rent. Choose from a wide variety of top models with competitive pricing.
      </p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Toyota Camry */}
        <div className="card bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
          <div className="p-6">
            <div className="relative w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={camry}
                alt="Toyota Camry 2023"
                className="object-contain h-full w-full transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-semibold mt-4 text-gray-800">Toyota Camry 2023</h3>
            <p className="text-lg text-gray-700">Daily Price: $45/day</p>
            <span className="badge badge-success text-white px-3 py-1 rounded-full text-sm">Available</span>
            <p className="text-gray-500 text-sm mt-2">Added 2 days ago</p>
          </div>
        </div>

        {/* Honda Civic */}
        <div className="card bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
          <div className="p-6">
            <div className="relative w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={honda}
                alt="Honda Civic 2022"
                className="object-contain h-full w-full transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-semibold mt-4 text-gray-800">Honda Civic 2022</h3>
            <p className="text-lg text-gray-700">Daily Price: $40/day</p>
            <span className="badge badge-success text-white px-3 py-1 rounded-full text-sm">Available</span>
            <p className="text-gray-500 text-sm mt-2">Added 5 days ago</p>
          </div>
        </div>

        {/* Ford Mustang */}
        <div className="card bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
          <div className="p-6">
            <div className="relative w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={ford}
                alt="Ford Mustang 2021"
                className="object-contain h-full w-full transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-semibold mt-4 text-gray-800">Ford Mustang 2021</h3>
            <p className="text-lg text-gray-700">Daily Price: $60/day</p>
            <span className="badge badge-error text-white px-3 py-1 rounded-full text-sm">Not Available</span>
            <p className="text-gray-500 text-sm mt-2">Added 3 days ago</p>
          </div>
        </div>

        {/* Tesla Model S */}
        <div className="card bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
          <div className="p-6">
            <div className="relative w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={tesla}
                alt="Tesla Model S 2023"
                className="object-contain h-full w-full transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-semibold mt-4 text-gray-800">Tesla Model S 2023</h3>
            <p className="text-lg text-gray-700">Daily Price: $75/day</p>
            <span className="badge badge-success text-white px-3 py-1 rounded-full text-sm">Available</span>
            <p className="text-gray-500 text-sm mt-2">Added 1 day ago</p>
          </div>
        </div>

        {/* Toyota Prado */}
        <div className="card bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
          <div className="p-6">
            <div className="relative w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={prado}
                alt="Toyota Prado 2022"
                className="object-contain h-full w-full transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-semibold mt-4 text-gray-800">Toyota Prado 2022</h3>
            <p className="text-lg text-gray-700">Daily Price: $65/day</p>
            <span className="badge badge-success text-white px-3 py-1 rounded-full text-sm">Available</span>
            <p className="text-gray-500 text-sm mt-2">Added 4 days ago</p>
          </div>
        </div>

        {/* BMW X5 */}
        <div className="card bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
          <div className="p-6">
            <div className="relative w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={bmw}
                alt="BMW X5 2021"
                className="object-contain h-full w-full transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-semibold mt-4 text-gray-800">BMW X5 2021</h3>
            <p className="text-lg text-gray-700">Daily Price: $70/day</p>
            <span className="badge badge-success text-white px-3 py-1 rounded-full text-sm">Available</span>
            <p className="text-gray-500 text-sm mt-2">Added 6 days ago</p>
          </div>
        </div>

        {/* Audi A4 */}
        <div className="card bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
          <div className="p-6">
            <div className="relative w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={audi}
                alt="Audi A4 2020"
                className="object-contain h-full w-full transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-semibold mt-4 text-gray-800">Audi A4 2020</h3>
            <p className="text-lg text-gray-700">Daily Price: $55/day</p>
            <span className="badge badge-success text-white px-3 py-1 rounded-full text-sm">Available</span>
            <p className="text-gray-500 text-sm mt-2">Added 7 days ago</p>
          </div>
        </div>

        {/* Mercedes GLC */}
        <div className="card bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
          <div className="p-6">
            <div className="relative w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={mercedes}
                alt="Mercedes GLC 2021"
                className="object-contain h-full w-full transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-semibold mt-4 text-gray-800">Mercedes GLC 2021</h3>
            <p className="text-lg text-gray-700">Daily Price: $80/day</p>
            <span className="badge badge-success text-white px-3 py-1 rounded-full text-sm">Available</span>
            <p className="text-gray-500 text-sm mt-2">Added 8 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentListing;
