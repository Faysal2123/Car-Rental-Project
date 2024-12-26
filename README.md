Car Portal Application

The Car Portal Application is a full-stack project that allows users to browse, book, and manage cars. It features user authentication, car management, and booking functionalities.

Features

User Authentication: Secure login and registration using Firebase and JWT.

Car Management: Add, view, update, and delete car listings.

Booking System: Book cars, view user-specific bookings, and manage bookings.

Responsive UI: Built with React and Tailwind CSS for a modern and mobile-friendly design.

Backend API: RESTful API using Express.js and MongoDB for data storage.

Tech Stack

Frontend: React, React Router, Firebase Authentication, React Hot Toast, Tailwind CSS

Backend: Node.js, Express.js, MongoDB

Authentication: Firebase Authentication, JWT (JSON Web Tokens)

State Management: Context API

Installation

Step 1: Prerequisites

Ensure Node.js is installed on your machine.

Set up a MongoDB connection string.

Configure a Firebase project.
API Endpoints

Authentication

POST /jwt: Generate JWT token.

POST /logout: Clear JWT token.

Cars

GET /cars: Fetch all cars.

GET /cars/email: Fetch cars by user email (requires authentication).

GET /cars/:id: Fetch a specific car by ID.

POST /cars: Add a new car.

PUT /cars/:id: Update car details.

DELETE /cars/:id: Delete a car.

Bookings

POST /bookings: Create a new booking.

GET /bookings: Fetch user-specific bookings (requires authentication).

PUT /bookings/:id/cancel: Cancel a booking.

DELETE /bookings/:id: Delete a booking.

Key Components

Backend

server.js: Main server file handling routes and middleware.

MongoDB Collections:

car-collection: Stores car details.

booking-collection: Stores booking details.

Frontend

CarsDetails: Displays car details and handles booking confirmation.

AuthProvider: Manages user authentication state and Firebase integration.

UseAxiosSecure: Axios instance with JWT and error handling.

How It Works

Users can browse available cars and view detailed information.

Authenticated users can book cars, which updates the car's booking count.

Users can manage their bookings (view, cancel, or update).

Admins can manage the car collection (add, update, delete).

Deployment

Frontend: Deployed on Firebase Hosting.

Backend: Hosted on a server or platform supporting Node.js.

Development Notes

Use React Hot Toast for notifications.

Maintain secure cookie handling for JWT in production.