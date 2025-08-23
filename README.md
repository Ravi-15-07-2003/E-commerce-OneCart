OneCart - E-Commerce Web Application

OneCart is a MERN stack-based e-commerce platform that provides a seamless shopping experience for users and an admin panel for managing products, orders, and deliveries.
It includes secure authentication, payment integration, and cloud-based media storage.

🌐 Deployed Links

Frontend (User App): https://e-commerce-onecart-client.onrender.com

Admin Panel: https://e-commerce-onecart-admin.onrender.com

Backend (API Server): https://e-commerce-onecart-backend.onrender.com

✨ Features
👥 User (Frontend)

Browse products and view product details

Add items to cart and place orders

Secure authentication (JWT + Google Sign-In using Firebase)

Razorpay payment integration (test mode, can be extended to live mode)

Order history and tracking

AI-powered basic assistant component (implemented using conditional logic and browser functionalities)

👨‍💼 Admin (Admin Panel)

Add, update, and remove products

Manage orders and update delivery status

View customer details and order information

Only admins can access this panel

⚙️ Backend

RESTful APIs built with Express.js

Authentication & Authorization with JWT

Google Authentication via Firebase

Cloudinary integration for product image storage

Middleware for request validation and authentication

Separate routes & controllers for modular structure

🛠️ Tech Stack
Frontend & Admin

React.js

React Router

Axios (for API calls)

Firebase (Google Authentication)

CSS / Tailwind / Custom styling

Backend

Node.js

Express.js

MongoDB + Mongoose (Data Modeling with User, Product, and Order schemas)

Cloudinary (for image storage)

CORS (API security)

JWT Authentication

Razorpay (payment gateway - test mode)

📂 Project Structure
OneCart/
│── frontend/      # User-facing e-commerce app
│── admin/         # Admin dashboard
│── backend/       # Express + MongoDB API

Backend Structure
backend/
│── config/         # Database & app configuration
│── controller/     # Business logic (auth, cart, order, product, user)
│── middleware/     # Authentication & security middlewares
│── model/          # MongoDB Models (User, Product, Order)
│── routes/         # API routes
│── public/         # Static files
│── index.js        # Entry point

Frontend & Admin Structure
src/
│── assets/         # Static assets
│── component/      # Reusable components
│── context/        # Global state management
│── pages/          # Main pages (Home, Cart, Product, Login, etc.)
│── App.jsx         # Root component
│── main.jsx        # React entry point

🔐 Authentication Flow

JWT-based authentication:

Token generated on login/registration.

Token verified in backend using middlewares.

Google Authentication (Firebase):

Users can log in with Google account.

Token from Firebase is verified in backend.

💳 Payment Gateway

Razorpay (Test Mode): Implemented for practice.

Can be switched to Live Mode for real transactions.

🚀 Deployment

The app is deployed on Render:

Backend: Node/Express API

Frontend: React app

Admin: React admin dashboard

⚡ Installation & Setup

Clone the repository:

git clone <your-repo-url>
cd OneCart

Backend Setup
cd backend
npm install
npm start

Frontend Setup
cd frontend
npm install
npm run dev

Admin Setup
cd admin
npm install
npm run dev

📌 Future Improvements

Advanced AI chatbot for shopping assistance

Product recommendation system

Email notifications for order updates

Analytics dashboard for admin

👨‍💻 Author

Ravi Singh Bais
Full Stack Developer | MERN | AI Enthusiast
