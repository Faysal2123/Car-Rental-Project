import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const CarsDetails = () => {
    const details = useLoaderData(); // Fetch car details using loader
    const { model, dailyPrice, availability, features, carImage, description, location } = details;
    const [showModal, setShowModal] = useState(false); // State for modal visibility

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                <img
                    src={carImage}
                    alt={model}
                    className="w-full h-64 object-contain rounded-md shadow mb-6"
                />
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{model}</h1>
                <p className="text-lg text-gray-700 mb-2">
                    <span className="font-semibold">Price Per Day:</span> {dailyPrice}
                </p>
                <p
                    className={`text-lg font-semibold mb-4 ${
                        availability === 'Available' ? 'text-green-500' : 'text-red-500'
                    }`}
                >
                    Availability: {availability}
                </p>
                <p className="text-lg text-gray-700 mb-2">
                    <span className="font-semibold">Location:</span> {location}
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Features:</h2>
                <ul className="list-disc pl-6 mb-6">
                    {features.map((feature, index) => (
                        <li key={index} className="text-gray-700 text-lg">
                            {feature}
                        </li>
                    ))}
                </ul>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Description:</h2>
                <p className="text-gray-700 text-lg mb-6">{description}</p>
                <button
                    onClick={() => setShowModal(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
                >
                    Book Now
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Confirm Booking
                        </h2>
                        <p className="text-gray-700 mb-2">
                            <span className="font-semibold">Car Model:</span> {model}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <span className="font-semibold">Price Per Day:</span> {dailyPrice}
                        </p>
                        <p
                            className={`text-lg font-semibold mb-4 ${
                                availability === 'Available' ? 'text-green-500' : 'text-red-500'
                            }`}
                        >
                            Availability: {availability}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <span className="font-semibold">Location:</span> {location}
                        </p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-all mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => alert('Booking Confirmed!')}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CarsDetails;
