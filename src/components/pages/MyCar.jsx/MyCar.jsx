import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // React SweetAlert2
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import UseAxiosSecure from '../../AxiosSecure/UseAxiosSecure';

const MyCar = () => {
    const { user } = useContext(AuthContext);
    const [cars, setCars] = useState([]);
    const [sortOption, setSortOption] = useState('dateAdded');
    const axiosSecure=UseAxiosSecure()

    useEffect(() => {
        if (user?.email) {
            axiosSecure.get(`/cars/email?email=${user.email}`)
            .then((res) => setCars(res.data))
        }
    }, [axiosSecure, user]);

    const handleSortChange = (e) => setSortOption(e.target.value);

    const sortedCars = [...cars].sort((a, b) => {
        if (sortOption === 'dateAdded') {
            return new Date(b.dateAdded) - new Date(a.dateAdded); // Newest First
        } else if (sortOption === 'priceLowToHigh') {
            return parseInt(a.dailyPrice.replace(/\D/g, '')) - parseInt(b.dailyPrice.replace(/\D/g, '')); // Price Low to High
        } else if (sortOption === 'priceHighToLow') {
            return parseInt(b.dailyPrice.replace(/\D/g, '')) - parseInt(a.dailyPrice.replace(/\D/g, '')); // Price High to Low
        }
        return 0;
    });

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to delete this car permanently?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        })
        .then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cars/${id}`, { method: 'DELETE' })
                    .then((res) => res.json())
                    .then(() => {
                        setCars(cars.filter((car) => car._id !== id));
                        toast.success('Car deleted successfully!');
                    })
                    .catch((error) => console.error('Error deleting car:', error));
            }
        });
    };

    return (
        <div className="p-6 bg-gradient-to-b from-gray-100 to-blue-50 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">My Added Cars</h1>

            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <select
                    value={sortOption}
                    onChange={handleSortChange}
                    className="border px-4 py-2 rounded-md shadow-md"
                >
                    <option value="dateAdded">Sort by Date Added</option>
                    <option value="priceLowToHigh">Sort by Price (Low to High)</option>
                    <option value="priceHighToLow">Sort by Price (High to Low)</option>
                </select>
                {cars.length === 0 && (
                    <div className="text-center">
                        <p>
                            No cars added yet.{' '}
                            <Link to="/addCar" className="text-white btn bg-blue-500">
                                Add a car
                            </Link>
                        </p>
                    </div>
                )}
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2 px-4 border-b">Car Image</th>
                            <th className="py-2 px-4 border-b">Car Model</th>
                            <th className="py-2 px-4 border-b">Daily Rental Price</th>
                            <th className="py-2 px-4 border-b">Availability</th>
                            <th className="py-2 px-4 border-b">Date Added</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedCars.map((car) => (
                            <tr key={car._id} className="text-center">
                                <td className="py-2 px-4 border-b">
                                    <img src={car.carImage} alt={car.model} className="w-20 h-20 object-cover mx-auto" />
                                </td>
                                <td className="py-2 px-4 border-b">{car.model}</td>
                                <td className="py-2 px-4 border-b">{car.dailyPrice}</td>
                                <td className="py-2 px-4 border-b">{car.availability}</td>
                                <td className="py-2 px-4 border-b">{car.addedDate}</td>
                                <td className="py-2 px-4 border-b flex flex-col gap-2 items-center">
                                    <Link
                                        to={`/updateDetails/${car._id}`}
                                        className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm"
                                    >
                                        Update
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(car._id)}
                                        className="px-4 py-2 bg-red-500 text-white rounded-md text-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCar;
