# Greenora Nursery

A full-stack plant nursery application with a React frontend and an Express/MongoDB backend.

## Project Structure

```text
Backend/   Express API and MongoDB models
Frontend/  React application
```

## Requirements

- Node.js 18 or later
- npm
- MongoDB connection string

## Run the Backend

```bash
cd Backend
npm install
```

Create `Backend/.env`:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the API:

```bash
npm start
```

To load the sample plant data:

```bash
node seed.js
```

## Run the Frontend

```bash
cd Frontend
npm install
npm start
```

The frontend uses `https://nursery-4jtk.onrender.com` as its production backend by default. For local development, set `REACT_APP_API_URL` before starting the frontend:

```env
REACT_APP_API_URL=http://localhost:5000
```

## API Endpoints

- `GET /` - Backend health check
- `GET /api/plants` - List all plants
- `GET /api/plants?category=Indoor%20Plants` - Filter plants by category
- `GET /api/plants/:id` - Get plant details
- `POST /api/plants/recommend` - Get plant recommendations
- `GET /api/plants/categories` - List available categories

## Production Build

```bash
cd Frontend
npm run build
```