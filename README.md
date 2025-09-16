🛍️ Style - E-Commerce Website

Style is a modern e-commerce platform built with React.js (frontend), Node.js/Express (backend), and MySQL (database).
It provides a seamless shopping experience with product browsing, cart management, and secure checkout.

🚀 Features

🖥️ Frontend: Responsive UI built with React + Tailwind CSS

⚙️ Backend: Node.js + Express REST API

🗄️ Database: MySQL (for users, products, and orders)

🔑 Authentication: User login/signup with session management

🛒 Shopping Cart: Add, update, and remove products

💳 Checkout System: Order placement and payment integration (future scope)

🏗️ Tech Stack

Frontend

React.js

Tailwind CSS

Axios

Backend

Node.js

Express.js

MySQL
📂 Project Structure
style/
├── backend/        # Node.js + Express + MySQL API
│   ├── config/     # Database connection
│   ├── routes/     # API endpoints
│   ├── models/     # Database models
│   └── server.js   # Entry point
│
├── frontend/       # React app
│   ├── public/
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Product, Cart, Checkout
│   │   └── App.js
│   └── package.json
│
└── README.md

⚡ Installation & Setup
1. Clone Repository
git clone https://github.com/your-username/style.git
cd style

2. Setup Backend
cd backend
npm install


Configure .env file:

DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=style_db
PORT=5000


Run backend:

npm start

3. Setup Frontend
cd frontend
npm install
npm start

🗄️ Database Setup

Run the following in MySQL:

CREATE DATABASE style_db;

USE style_db;

-- Users Table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products Table
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  description TEXT,
  price DECIMAL(10,2),
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders Table
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  total DECIMAL(10,2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

