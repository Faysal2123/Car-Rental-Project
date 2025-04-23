import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AvailableCars = () => {
    const data = useLoaderData(); 
    const [cars, setCars] = useState(data); 
    const [view, setView] = useState('grid'); 
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('model'); 

    const filteredCars = cars
        .filter((car) =>
            car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
            car.brand?.toLowerCase().includes(searchTerm.toLowerCase()) || 
            car.location?.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOption === 'model') {
                return a.model.localeCompare(b.model);
            } else if (sortOption === 'price') {
                return parseInt(a.dailyPrice.replace(/\D/g, '')) - parseInt(b.dailyPrice.replace(/\D/g, ''));
            }
            return 0;
        });

    return (
        <div className="p-6 bg-gradient-to-b from-gray-100 to-blue-50 min-h-screen">

            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Available Cars: {filteredCars.length}</h1>

            <p className="text-center text-lg text-gray-600 mb-8">
                Explore a wide range of cars available for rent. Whether you're looking for a luxury ride or a budget-friendly option, we have something for every need. Search, sort, and book your perfect car today!
            </p>
         
            <div className="flex flex-wrap items-center gap-4 mb-8">
                <input
                    type="text"
                    placeholder="Search by model, brand, or location"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border px-4 py-2 rounded-md shadow-md w-full sm:w-auto"
                />
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="border px-4 py-2 rounded-md shadow-md"
                >
                    <option value="model">Sort by Model</option>
                    <option value="price">Sort by Price</option>
                </select>
                <button
                    onClick={() => setView(view === 'grid' ? 'list' : 'grid')}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md"
                >
                    {view === 'grid' ? 'Switch to List View' : 'Switch to Grid View'}
                </button>
            </div>

            <div
                className={
                    view === 'grid'
                        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
                        : 'flex flex-col gap-6'
                }
            >
                {filteredCars.map((car) => (
                    <div
                        key={car._id}
                        className="border rounded-xl shadow-lg p-6 flex flex-col bg-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden mb-4">
  <img
    src={car.carImage}
    alt={car.model}
    className="max-w-full max-h-full object-contain"
  />
</div>
                        <h2 className="text-lg font-semibold text-gray-800">{car.model}</h2>
                        <p className="text-gray-600">{car.dailyPrice}</p>
                        <p className={`text-sm font-medium my-2 ${car.availability === 'Available' ? 'text-green-500' : 'text-red-500'}`}>
                            {car.availability}
                        </p>
                        <p className="text-gray-700 text-sm my-2">
                            {car.description}
                        </p>
                        <ul className="text-sm text-gray-600 list-disc pl-5 mb-4">
                            {car.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <p className="text-sm text-gray-600 mb-4">
                            <strong>Location:</strong> {car.location}
                        </p>
                        {/* Display Booking Count */}
                        <p className="text-sm text-gray-600 mb-4">
                            <strong>Bookings:</strong> {car.bookingCount}
                        </p>
                        <Link
                            to={`/carsDetails/${car._id}`}
                            className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all text-center"
                        >
                            Book Now
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvailableCars;
