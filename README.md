# E-commerce Backend API

A complete e-commerce backend API built with Node.js, Express, MongoDB, and Redis. Features include user authentication, product management, shopping cart, payment processing with Stripe, and coupon system.

## Features

- 🔐 **Authentication & Authorization**
  - JWT-based authentication with refresh tokens
  - Role-based access control (Admin/Customer)
  - Secure cookie-based token storage

- 🛍️ **Product Management**
  - CRUD operations for products
  - Featured products with Redis caching
  - Product categories and recommendations
  - Image upload with Cloudinary

- 🛒 **Shopping Cart**
  - Add/remove items
  - Quantity management
  - Persistent cart storage

- 💳 **Payment Processing**
  - Stripe integration for secure payments
  - Checkout sessions
  - Order management

- 🎫 **Coupon System**
  - Coupon validation and application
  - Automatic coupon generation
  - Discount calculations

- 📦 **Order Management**
  - Order creation and tracking
  - Order status updates
  - Order history

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Cache**: Redis
- **Authentication**: JWT
- **Payment**: Stripe
- **File Storage**: Cloudinary
- **Validation**: Express-validator

## Prerequisites

- Node.js (v16 or higher)
- MongoDB
- Redis
- Stripe account
- Cloudinary account

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd e-commerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp backend/env.example backend/.env
   ```
   
   Fill in your environment variables in `backend/.env`:
   - Database connection string
   - JWT secrets
   - Redis URL
   - Stripe API keys
   - Cloudinary credentials

4. **Start the server**
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh-token` - Refresh access token
- `GET /api/auth/profile` - Get user profile

### Products
- `GET /api/products` - Get all products (Admin only)
- `GET /api/products/featured` - Get featured products
- `GET /api/products/category/:category` - Get products by category
- `GET /api/products/recommendations` - Get recommended products
- `POST /api/products` - Create product (Admin only)
- `PATCH /api/products/:id` - Toggle featured status (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Cart
- `GET /api/cart` - Get cart items
- `POST /api/cart` - Add item to cart
- `DELETE /api/cart` - Remove all items from cart
- `PUT /api/cart/:id` - Update item quantity

### Orders
- `GET /api/orders/my-orders` - Get user orders
- `GET /api/orders/:id` - Get specific order
- `GET /api/orders` - Get all orders (Admin only)
- `PATCH /api/orders/:id/status` - Update order status (Admin only)

### Payments
- `POST /api/payments/create-checkout-session` - Create Stripe checkout session
- `POST /api/payments/checkout-success` - Handle successful payment

### Coupons
- `GET /api/coupons` - Get user's active coupon
- `POST /api/coupons/validate` - Validate coupon code

## Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/ecommerce
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
UPSTASH_REDIS_URL=your_redis_url
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLIENT_URL=http://localhost:3000
```

## Project Structure

```
backend/
├── controllers/
│   ├── auth.controller.js
│   ├── cart.controller.js
│   └── order.controller.js
├── middleware/
│   ├── error.middleware.js
│   └── validation.middleware.js
├── models/
│   └── order.model.js
├── routes/
│   ├── auth.route.js
│   ├── cart.route.js
│   ├── coupon.route.js
│   └── order.route.js
├── server.js
```

## Error Handling

The API includes comprehensive error handling:
- Validation errors
- Authentication errors
- Database errors
- External service errors
- Global error handler

## Security Features

- JWT token-based authentication
- Secure HTTP-only cookies
- CORS configuration
- Input validation
- Password hashing with bcrypt
- Role-based access control

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the ISC License.
