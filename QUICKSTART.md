# CVWise - Quick Start Guide

## For Local Development

### Backend

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Start development server
npm run dev
# or npm start

# Server runs on http://localhost:5000
```

### Frontend

```bash
# In a new terminal, navigate to frontend
cd frontend

# Install dependencies (already done)
npm install

# Start development server
npm run dev

# Frontend runs on http://localhost:3001
```

### Environment Setup

**Backend `.env` file is already configured with:**
```
MONGODB_URI=mongodb+srv://db_cvwise:Milloo123%40@cluster0.sc2nhco.mongodb.net/?appName=Cluster0
JWT_SECRET=cvwise-super-secret-jwt-key-2026
GEMINI_API_KEY=AIzaSyAs0PBT-mI7Pc2e8BD7JHbduOzJIBAIsgw
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:3001
```

## Production Deployment

### Step 1: Deploy Backend to Render

1. Go to https://render.com
2. Create new Web Service
3. Connect GitHub repository (NoungaJoseph/CVWise)
4. Settings:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add Environment Variables (from `.env` file):
   ```
   MONGODB_URI=mongodb+srv://db_cvwise:Milloo123%40@cluster0.sc2nhco.mongodb.net/?appName=Cluster0
   JWT_SECRET=your-production-secret
   GEMINI_API_KEY=AIzaSyAs0PBT-mI7Pc2e8BD7JHbduOzJIBAIsgw
   NODE_ENV=production
   PORT=5000
   ```
6. Click "Create Web Service"
7. Wait for deployment (2-3 minutes)
8. Copy the service URL (e.g., `https://cvwise-backend.onrender.com`)

### Step 2: Deploy Frontend to Vercel

1. Go to https://vercel.com
2. Import Repository (GitHub)
3. Select CVWise project
4. Settings:
   - **Framework Preset**: React
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
5. Environment Variables:
   ```
   VITE_API_URL=https://cvwise-backend.onrender.com/api
   VITE_GEMINI_API_KEY=AIzaSyAs0PBT-mI7Pc2e8BD7JHbduOzJIBAIsgw
   ```
6. Click "Deploy"
7. Wait for deployment (1-2 minutes)

## Verify Deployment

### Test Backend
```bash
curl https://cvwise-backend.onrender.com/health
# Should return: {"status":"OK","message":"CVWise Backend is running"}
```

### Test Frontend
```
https://your-project.vercel.app
```

### Test Full Flow
1. Register new account
2. Create a CV
3. Download as PDF
4. Verify PDF preserves all styling

## Troubleshooting

### Backend won't connect to MongoDB
- Check `.env` MONGODB_URI is correct
- Verify password URL encoding: `@` → `%40`
- Check MongoDB Atlas whitelist includes Render IP

### Frontend shows 404 on page reload
- ✅ Already fixed with `vercel.json`
- This should not happen

### PDF download fails
- Check network tab for API errors
- Verify auth token is being sent
- Check backend logs on Render

### API CORS errors
- Backend is configured for all necessary origins
- Check Origin header matches whitelisted domains

## Important Files

- `backend/src/server.js` - Main backend server
- `backend/src/routes/` - API endpoints
- `backend/.env` - Environment variables
- `frontend/src/lib/api.ts` - Frontend API client
- `vercel.json` - Vercel routing configuration
- `DEPLOYMENT.md` - Detailed deployment guide
- `IMPLEMENTATION_SUMMARY.md` - Full feature list

## MongoDB Database

- **Cluster**: cluster0.sc2nhco.mongodb.net
- **Database**: cvwise
- **Collections**: users, cvs
- **Username**: db_cvwise
- **Password**: Milloo123@

## Support

See `DEPLOYMENT.md` for detailed deployment guide.
See `backend/README.md` for backend documentation.
See `IMPLEMENTATION_SUMMARY.md` for complete feature list.
