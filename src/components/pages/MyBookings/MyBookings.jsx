import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaTrashAlt, FaCalendarAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
                Swal.fire('Cancelled!', 'Your booking has been successfully cancelled.', 'success');
            }
        });
    };

    const showModifyDate = (booking) => {
        setSelectedBooking(booking);
        setShowDatePicker(true);
    };

    const chartData = bookings.map(booking => ({
        date: new Date(booking.bookingDate).toLocaleDateString(),
        price: booking.dailyPrice
    }));

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-center">My Bookings</h1>

            {/* Responsive Table */}
            <div className="overflow-x-auto mt-4">
                <table className="table-auto w-full border border-gray-300 text-sm">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2">Car Image</th>
                            <th className="p-2">Car Model</th>
                            <th className="p-2">Booking Date</th>
                            <th className="p-2">Total Price</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking._id} className="text-center border-b">
                                <td className="p-2">
                                    <img src={booking.carImage} alt={booking.carModel} className="w-16 h-16 mx-auto object-contain rounded-md" />
                                </td>
                                <td className="p-2">{booking.carModel}</td>
                                <td className="p-2">{new Date(booking.bookingDate).toLocaleString()}</td>
                                <td className="p-2">{booking.dailyPrice}</td>
                                <td className={`p-2 ${
                                    booking.status === 'Cancelled' ? 'text-red-500' :
                                    booking.status === 'Confirmed' ? 'text-green-500' : 'text-yellow-500'
                                }`}>
                                    {booking.status === 'Cancelled' ? 'Cancelled' :
                                    booking.status === 'Confirmed' ? 'Confirmed' : 'Pending'}
                                </td>
                                <td className="p-2 space-y-2">
                                    <button
                                        onClick={() => showCancelConfirmation(booking)}
                                        className="w-full px-2 py-1 bg-red-500 text-white rounded text-sm flex items-center justify-center"
                                    >
                                        <FaTrashAlt className="mr-1" /> Cancel
                                    </button>
                                    <button
                                        onClick={() => showModifyDate(booking)}
                                        className="w-full px-2 py-1 bg-blue-500 text-white rounded text-sm flex items-center justify-center"
                                    >
                                        <FaCalendarAlt className="mr-1" /> Modify Date
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Bar Chart */}
            <div className="my-6">
                <h2 className="text-xl font-semibold text-center">Daily Rental Price</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                        <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip
                            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', border: '1px solid #ddd' }}
                            labelStyle={{ fontWeight: 'bold' }}
                            itemStyle={{ fontSize: '14px', color: '#333' }}
                        />
                        <Legend verticalAlign="top" height={36} />
                        <Bar dataKey="price" fill="#82ca9d" barSize={30} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

           
            {showDatePicker && selectedBooking && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                        <h2 className="text-lg font-semibold">Modify Booking Date</h2>
                        <DatePicker
                            selected={newDate}
                            onChange={(date) => setNewDate(date)}
                            minDate={new Date()}
                            showTimeSelect
                            dateFormat="Pp"
                            className="w-full p-2 border rounded mt-4"
                        />
                        <div className="flex justify-between mt-4">
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
