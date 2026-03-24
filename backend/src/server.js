import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import authRoutes from './routes/auth.js';
import cvRoutes from './routes/cv.js';
import downloadRoutes from './routes/download.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
let db;
const mongoUri = process.env.MONGODB_URI || 'mongodb+srv://db_cvwise:@cluster0.sc2nhco.mongodb.net/?appName=Cluster0';
const client = new MongoClient(mongoUri);

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3001',
    'http://localhost:3000',
    'https://cvwise.vercel.app',
    'https://cvwise-frontend.vercel.app'
  ],
  credentials: true
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Connect to MongoDB
async function connectDB() {
  try {
    await client.connect();
    db = client.db('cvwise');
    console.log('✅ Connected to MongoDB');
    
    // Ensure indexes
    await db.collection('users').createIndex({ email: 1 }, { unique: true });
    await db.collection('cvs').createIndex({ userId: 1 });
    await db.collection('cvs').createIndex({ createdAt: -1 });
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1);
  }
}

// Initialize DB connection
connectDB();

// Make db available to routes
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/cv', cvRoutes);
app.use('/api/download', downloadRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'CVWise Backend is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 CVWise Backend running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down gracefully...');
  await client.close();
  process.exit(0);
});
