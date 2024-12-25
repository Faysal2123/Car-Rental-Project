import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaTrashAlt, FaCalendarAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [newDate, setNewDate] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/bookings?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => setBookings(data))
                .catch((error) => console.error('Error fetching bookings:', error));
        }
    }, [user?.email]);

    const handleCancelBooking = (bookingId) => {
        fetch(`http://localhost:5000/bookings/${bookingId}`, {
            method: 'DELETE',
        }).then((res) => {
            if (res.ok) {
                setBookings(bookings.filter((booking) => booking._id !== bookingId));
            }
        });
    };

    const handleModifyDate = (bookingId) => {
        if (newDate) {
            fetch(`http://localhost:5000/bookings/${bookingId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ newDate: newDate })
            }).then((res) => {
                if (res.ok) {
                    setBookings(
                        bookings.map((booking) =>
                            booking._id === bookingId ? { ...booking, bookingDate: newDate } : booking
                        )
                    );
                    setShowDatePicker(false);
                }
            });
        }
    };

    const showCancelConfirmation = (booking) => {
        Swal.fire({
            title: `Are you sure you want to cancel the booking for ${booking.carModel}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Cancel it!',
            cancelButtonText: 'No, Keep it!',
        }).then((result) => {
            if (result.isConfirmed) {
                handleCancelBooking(booking._id);
                Swal.fire('Cancelled!', 'Your booking has been cancelled.', 'success');
            }
        });
    };

    const showModifyDate = (booking) => {
        setSelectedBooking(booking);
        setShowDatePicker(true);
    };

    // Daily Price Data for the Chart
    const chartData = bookings.map(booking => ({
        date: new Date(booking.bookingDate).toLocaleDateString(),
        price: booking.dailyPrice,
    }));

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">My Bookings</h1>
            
            {/* Table with Booking Details */}
            <table className="w-full mt-4 border-collapse border border-gray-200">
                <thead>
                    <tr>
                        <th>Car Image</th>
                        <th>Car Model</th>
                        <th>Booking Date</th>
                        <th>Total Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking._id} className="hover:bg-gray-100 text-center">
                            <td className='flex justify-center'>
                                <img src={booking.carImage} alt={booking.carModel} className="w-20 h-20 object-contain rounded-md" />
                            </td>
                            <td>{booking.carModel}</td>
                            <td>{new Date(booking.bookingDate).toLocaleString()}</td>
                            <td>{booking.dailyPrice}</td>
                            <td className={booking.status === 'Cancelled' ? 'text-red-500' : 
                                           booking.status === 'Confirmed' ? 'text-green-500' : 'text-yellow-500'}>
                                {booking.status}
                            </td>
                            <td className="flex space-x-2">
                                <button
                                    onClick={() => showCancelConfirmation(booking)}
                                    className="px-4 py-2 bg-red-500 text-white rounded flex items-center"
                                >
                                    <FaTrashAlt className="mr-2" />
                                    Cancel
                                </button>
                                <button
                                    onClick={() => showModifyDate(booking)}
                                    className="px-4 py-2 bg-blue-500 text-white rounded flex items-center"
                                >
                                    <FaCalendarAlt className="mr-2" />
                                    Modify Date
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Recharts - Daily Rental Price Chart */}
            <div className="my-6">
                <h2 className="text-xl font-semibold">Daily Rental Price</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="5 5" />
                        <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip 
                            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', border: '1px solid #ddd' }}
                            labelStyle={{ fontWeight: 'bold' }}
                            itemStyle={{ fontSize: '14px', color: '#333' }}
                        />
                        <Legend verticalAlign="top" height={36} />
                        <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={3} dot={{ r: 4 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Date Picker for Modifying Booking */}
            {showDatePicker && selectedBooking && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold">Modify Booking Date</h2>
                        <DatePicker
                            selected={newDate}
                            onChange={(date) => setNewDate(date)}
                            minDate={new Date()}
                            showTimeSelect
                            dateFormat="Pp"
                            className="w-full p-2 border rounded mt-4"
                        />
                        <div className="flex justify-between mt-4 items-center">
                            <button
                                onClick={() => setShowDatePicker(false)}
                                className="px-4 py-2 bg-gray-500 text-white rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => handleModifyDate(selectedBooking._id)}
                                className="px-4 py-2 bg-blue-600 text-white rounded"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyBookings;
