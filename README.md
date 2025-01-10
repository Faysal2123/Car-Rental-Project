🚗 Car Portal Application

The Car Portal Application is a full-stack car rental platform that allows users to browse, book, and manage car listings efficiently. It features secure authentication, dynamic car management, and a seamless booking system, ensuring a smooth user experience.

✨ Features

🔐 Authentication & Security


User Registration & Login: Secure authentication via Firebase & JWT

Token-Based Access: Protected routes with JWT authorization

🚘 Car Management


List & Manage Cars: Add, update, and delete car listings

User-Specific Listings: Fetch cars based on owner details

📅 Booking System


Car Reservations: Users can book available cars

Manage Bookings: View, update, or cancel reservations

User-Specific Bookings: Personalized dashboard for booking history

📱 Responsive UI & Performance


Modern UI: Built with React & Tailwind CSS

Interactive Experience: Toast notifications with React Hot Toast

⚡ Backend API & Data Storage


RESTful API with Express.js & MongoDB

Secure Cookie Handling for JWT in production

🛠 Tech Stack

Frontend


React.js, React Router, Tailwind CSS

Firebase Authentication, React Hot Toast

Backend


Node.js, Express.js, MongoDB

JWT (JSON Web Token) for authentication

State Management

Context API


📌 API Endpoints

🔐 Authentication


POST /jwt → Generate JWT token

POST /logout → Clear JWT token

🚘 Cars Management


GET /cars → Fetch all cars

GET /cars/email → Fetch cars by owner email (requires authentication)

GET /cars/:id → Fetch a specific car by ID

POST /cars → Add a new car

PUT /cars/:id → Update car details

DELETE /cars/:id → Remove a car

📅 Bookings Management


POST /bookings → Create a new booking

GET /bookings → Fetch user-specific bookings (requires authentication)

PUT /bookings/:id/cancel → Cancel a booking

DELETE /bookings/:id → Delete a booking

📂 Key Components


Backend


server.js → Main server file handling routes & middleware

MongoDB Collections:


car-collection → Stores car details

booking-collection → Stores booking details

Frontend


CarDetails Component → Displays car details & handles booking confirmations

AuthProvider → Manages user authentication state & Firebase integration

useAxiosSecure → Secure Axios instance with JWT & error handling

⚙️ How It Works


Users can browse available cars and view detailed information

Authenticated users can book cars, updating the car's booking count

Users can manage their bookings (view, cancel, or update reservations)

Admins can manage the car collection (add, update, delete)

🚀 Deployment


Frontend

Deployed on Firebase Hosting

Backend


Hosted on a Node.js-compatible server

📝 Development Notes


React Hot Toast for user-friendly notifications

JWT authentication for secure access

Responsive UI optimized for all devices

🔗 Live Demo: [Your Live Link]

📌 GitHub Repository: https://assignment-11-9153e.web.app/