import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaTrashAlt, FaCalendarAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import UseAxiosSecure from "../../AxiosSecure/UseAxiosSecure";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [newDate, setNewDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/bookings?email=${user.email}`).then((res) => setBookings(res.data));
    }
  }, [axiosSecure, user.email]);

  const handleCancelBooking = (id) => {
    Swal.fire({
      title: "Are you sure you want to cancel this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Cancel it!",
      cancelButtonText: "No, Keep it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}/cancel`, {
          method: "PUT",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.updateResult.modifiedCount > 0) {
              setBookings(
                bookings.map((booking) =>
                  booking._id === id
                    ? { ...booking, status: "Cancelled" }
                    : booking
                )
              );

              Swal.fire(
                "Cancelled!",
                "Your booking status has been updated to Cancelled.",
                "success"
              );
            }
          })
          .catch((error) =>
            console.error("Error updating booking status:", error)
          );
      }
    });
  };

  const handleModifyDate = (bookingId) => {
    if (newDate) {
      fetch(`http://localhost:5000/bookings/${bookingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newDate }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            setBookings(
              bookings.map((booking) =>
                booking._id === bookingId
                  ? { ...booking, bookingDate: newDate }
                  : booking
              )
            );

            setShowDatePicker(false);
            setSelectedBooking(null);
            Swal.fire("Success!", "Booking date modified successfully.", "success");
          } else {
            Swal.fire("Error!", data.message || "Failed to modify date.", "error");
          }
        })
        .catch((error) => {
          console.error("Error modifying booking date:", error);
          Swal.fire("Error!", "Something went wrong.", "error");
        });
    } else {
      Swal.fire("Warning!", "Please select a valid date.", "warning");
    }
  };

  const handleDeleteBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, { method: 'DELETE' })
          .then((res) => res.json())
          .then(() => {
            setBookings(bookings.filter((booking) => booking._id !== id));
            Swal.fire("Deleted!", "Your booking has been deleted.", "success");
          })
          .catch(() => Swal.fire("Error!", "Something went wrong while deleting the booking.", "error"));
      }
    });
  };

  const chartData = bookings.map((booking) => ({
    date: new Date(booking.bookingDate).toLocaleDateString(),
    price: booking.dailyPrice,
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
                  <img
                    src={booking.carImage}
                    alt={booking.carModel}
                    className="w-16 h-16 mx-auto object-contain rounded-md"
                  />
                </td>
                <td className="p-2">{booking.carModel}</td>
                <td className="p-2">
                  {new Date(booking.bookingDate).toLocaleString()}
                </td>
                <td className="p-2">{booking.dailyPrice}</td>
                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                      booking.status === "Cancelled"
                        ? "bg-red-100 text-red-500"
                        : "bg-green-100/60 text-green-500"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        booking.status === "Cancelled"
                          ? "bg-red-500"
                          : "bg-green-500"
                      }`}
                    ></span>
                    <h2 className="text-sm font-normal ">
                      {booking.status}
                    </h2>
                  </div>
                </td>
                <td className="p-2 space-y-2">
                  {booking.status !== "Cancelled" && (
                    <>
                      <button
                        onClick={() => setSelectedBooking(booking)}
                        className="w-full px-2 py-1 bg-blue-500 text-white rounded text-sm flex items-center justify-center"
                      >
                        <FaCalendarAlt className="mr-1" /> Modify Date
                      </button>
                      <button
                        onClick={() => handleCancelBooking(booking._id)}
                        className="w-full px-2 py-1 bg-red-500 text-white rounded text-sm flex items-center justify-center"
                      >
                        <FaTrashAlt className="mr-1" /> Cancel
                      </button>
                    </>
                  )}
                  {booking.status === "Cancelled" && (
                    <button
                      onClick={() => handleDeleteBooking(booking._id)}
                      className="w-full px-2 py-1 bg-gray-500 text-white rounded text-sm flex items-center justify-center"
                    >
                      <FaTrashAlt className="mr-1" /> Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bar Chart */}
      <div className="my-6">
        <h2 className="text-xl font-semibold text-center">
          Daily Rental Price
        </h2>
        <div className="w-full h-[300px] max-w-[100%]">
          <ResponsiveContainer>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid #ddd",
                }}
                labelStyle={{ fontWeight: "bold" }}
                itemStyle={{ fontSize: "14px", color: "#333" }}
              />
              <Legend verticalAlign="top" height={36} />
              <Bar dataKey="price" fill="#82ca9d" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {selectedBooking && (
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
                onClick={() => setSelectedBooking(null)}
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
