import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState(null); 
    useEffect(() => {
        fetch(`http://localhost:5000/cars/${id}`)
            .then((res) => res.json())
            .then((data) => setCar(data))
            .catch((error) => console.error('Error fetching car data:', error));
    }, [id]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedCar = {
            model: e.target.model.value,
            dailyPrice: e.target.dailyPrice.value,
            availability: e.target.availability.value,
            registrationNumber: e.target.registrationNumber.value,
            features: e.target.features.value.split(',').map((feature) => feature.trim()),
            description: e.target.description.value,
            carImage: e.target.carImage.value,
            location: e.target.location.value,
        };

        fetch(`http://localhost:5000/cars/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCar),
        })
            .then((res) => res.json())
            .then(() => {
                toast.success("Car Details Update Successful")
                navigate('/myCars');
            })
            .catch((error) => console.error('Error updating car:', error));
    };

   
    if (!car) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Update Car Details</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Car Model</label>
                    <input
                        type="text"
                        name="model"
                        defaultValue={car.model}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Daily Rental Price</label>
                    <input
                        type="number"
                        name="dailyPrice"
                        defaultValue={car.dailyPrice}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Availability</label>
                    <input
                        type="text"
                        name="availability"
                        defaultValue={car.availability}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Vehicle Registration Number</label>
                    <input
                        type="text"
                        name="registrationNumber"
                        defaultValue={car.registrationNumber}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Features</label>
                    <input
                        type="text"
                        name="features"
                        defaultValue={car.features}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Description</label>
                    <textarea
                        name="description"
                        defaultValue={car.description}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Image URL</label>
                    <input
                        type="text"
                        name="carImage"
                        defaultValue={car.carImage}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Location</label>
                    <input
                        type="text"
                        name="location"
                        defaultValue={car.location}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default UpdateDetails;
