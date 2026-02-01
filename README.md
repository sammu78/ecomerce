# E-commerce Website

A full-stack e-commerce application built with React, Vite, Express, and MongoDB Atlas.

## Features

- 🛍️ Browse 20+ products across multiple categories
- 🔍 Search functionality with real-time filtering
- 🛒 Shopping cart with add/remove items
- 💳 Checkout flow
- 👤 User authentication
- 📱 Responsive design
- 🎨 Modern UI with smooth animations

## Tech Stack

**Frontend:**
- React 18
- Vite
- React Router
- CSS3 with modern styling

**Backend:**
- Node.js
- Express.js
- MongoDB Atlas (Database)
- Mongoose ODM

## Project Structure

```
project/
├── src/                    # Frontend source code
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── context/           # Context providers
│   └── config.js          # API configuration
├── backend/               # Backend source code
│   ├── model/            # Mongoose models
│   ├── server.js         # Express server
│   └── .env              # Environment variables (not committed)
└── public/               # Static assets
```

## Local Development Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Git

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd project
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Install backend dependencies**
```bash
cd backend
npm install
cd ..
```

4. **Configure environment variables**

Create `backend/.env` file:
```env
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=5000
```

Create `.env` file in project root (optional for local dev):
```env
VITE_API_URL=http://localhost:5000
```

5. **Run the application**

Start backend server:
```bash
cd backend
npm run dev
```

Start frontend (in a new terminal):
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` and backend on `http://localhost:5000`.

## Deployment

### Backend Deployment (Render)

1. Create a new Web Service on [Render](https://render.com)
2. Connect your GitHub repository
3. Configure:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Add environment variable:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
5. Deploy

### Frontend Deployment (Vercel)

1. Import project on [Vercel](https://vercel.com)
2. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
3. Add environment variable:
   - `VITE_API_URL`: Your Render backend URL
4. Deploy

## Environment Variables

**Backend (.env)**
- `MONGODB_URI` - MongoDB Atlas connection string
- `PORT` - Server port (default: 5000)

**Frontend (.env)**
- `VITE_API_URL` - Backend API URL

## API Endpoints

- `GET /api/products` - Get all products (supports search with `?q=query`)
- `GET /api/products/:id` - Get single product by ID
- `GET /api/categories` - Get all categories
- `POST /api/login` - User login
- `GET /api/cart` - Get cart items
- `POST /api/cart` - Add item to cart
- `DELETE /api/cart/:id` - Remove item from cart
- `POST /api/cart/checkout` - Checkout cart

## Default Login Credentials

- **Username**: `user`
- **Password**: `pass`

## Database

The application uses MongoDB Atlas for data storage. On server startup, the database is automatically seeded with 20 products across various categories.

## License

MIT

## Author

Sameer
