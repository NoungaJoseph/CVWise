# CVWise Backend API

Full-featured backend for CVWise CV builder application with MongoDB integration, JWT authentication, and PDF generation.

## Features

- **User Authentication**: Register and login with JWT tokens
- **CV Management**: Create, read, update, and delete CVs
- **PDF Generation**: Server-side PDF generation with full styling support
- **MongoDB Integration**: Persistent storage of user profiles and CVs
- **CORS Support**: Configured for frontend deployment

## Setup Instructions

### Prerequisites
- Node.js 16+ 
- MongoDB account with Atlas cluster

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your actual credentials:
```
MONGODB_URI=mongodb+srv://db_cvwise:YOUR_PASSWORD@cluster0.sc2nhco.mongodb.net/?appName=Cluster0
JWT_SECRET=your-secret-key
GEMINI_API_KEY=AIzaSyAs0PBT-mI7Pc2e8BD7JHbduOzJIBAIsgw
```

3. Start development server:
```bash
npm run dev
```

Server runs on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user profile
- `PUT /api/auth/profile` - Update user profile

### CV Management
- `POST /api/cv/save` - Create or update CV
- `GET /api/cv` - Get all user CVs
- `GET /api/cv/:cvId` - Get single CV
- `DELETE /api/cv/:cvId` - Delete CV

### PDF Download
- `POST /api/download/generate` - Generate PDF from CV data
- `GET /api/download/:cvId` - Download saved CV as PDF

## Deployment on Render

1. Connect GitHub repository to Render
2. Set environment variables in Render dashboard:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `GEMINI_API_KEY`
   - `NODE_ENV=production`

3. Configure build/start commands:
   - Build: `npm install`
   - Start: `npm start`

4. Deploy!

## Database Collections

### users
- `_id`: ObjectId
- `email`: String (unique)
- `password`: String (hashed)
- `firstName`: String
- `lastName`: String
- `createdAt`: Date
- `updatedAt`: Date

### cvs
- `_id`: ObjectId
- `userId`: ObjectId (foreign key)
- `title`: String
- `templateId`: String
- `personalInfo`: Object
- `experience`: Array
- `education`: Array
- `skills`: Array
- `projects`: Array
- `style`: Object
- `createdAt`: Date
- `updatedAt`: Date

## Notes

- All CV endpoints require JWT authentication (Bearer token in Authorization header)
- Passwords are hashed with bcryptjs
- PDF generation is done server-side for consistency
- Database indexes created automatically on startup
