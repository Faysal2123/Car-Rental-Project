import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const CarsDetails = () => {
    const details = useLoaderData();
    const { model, dailyPrice, availability, features, carImage, description, location } = details;
    const auth = getAuth();
    const userEmail = auth.currentUser?.email || 'Guest'; 
    const navigate=useNavigate()
    const handleBookingConfirm = () => {
        const auth = getAuth();
        const userEmail = auth.currentUser?.email;
    
        if (!userEmail) {
            
            Swal.fire({
                title: 'Login Required',
                text: 'Please log in to confirm your booking.',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#d33',
            });
            return; 
        }
    
        Swal.fire({
            title: 'Confirm Booking',
            text: `Are you sure you want to book the ${model}?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Book it!',
        }).then((result) => {
            if (result.isConfirmed) {
                const bookingData = {
                    carModel: model,
                    carImage,
                    dailyPrice,
                    userEmail,
                    bookingDate: new Date().toISOString(),
                    status:'Confirmed'
                    
                };
    
            
                fetch('https://assignment-11-server-ten-ecru.vercel.app/bookings', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(bookingData),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.insertedId) {
                            toast.success('Booking Confirmed!');
                            setTimeout(()=>{
                                navigate('/myBookings')
                            },1000)
                            Swal.fire('Booked!', 'Your booking has been confirmed.', 'success');
                        } else {
                            Swal.fire('Failed!', data.message || 'Booking failed!', 'error');
                        }
                    })
                    .catch(() => {
                        Swal.fire('Error!', 'Something went wrong. Please try again.', 'error');
                    });
            }
        });
    };
    

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
                    onClick={handleBookingConfirm}

                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
                >
                    Book Now
                </button>
            </div>

            
        </div>
    );
};

export default CarsDetails;
