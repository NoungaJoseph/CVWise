# CVWise - Deployment Guide

## Vercel Frontend Deployment

### Step 1: Set Up Frontend Environment Variables

In Vercel Dashboard → Project Settings → Environment Variables:

```
VITE_API_URL = https://cvwise-backend.onrender.com/api
VITE_GEMINI_API_KEY = AIzaSyAs0PBT-mI7Pc2e8BD7JHbduOzJIBAIsgw
```

### Step 2: Deploy Configuration

The `vercel.json` includes:
- ✅ SPA routing fix (rewrites all routes to /index.html to fix 404 errors)
- ✅ Build command pointing to frontend directory
- ✅ Output directory set to frontend/dist

## Render Backend Deployment

### Step 1: Create a New Web Service

1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect GitHub repository

### Step 2: Configure Build Settings

**Build Command:**
```bash
npm install
```

**Start Command:**
```bash
npm start
```

**Root Directory:** `backend`

### Step 3: Environment Variables

Add these in Render Dashboard → Environment:

```
MONGODB_URI=mongodb+srv://db_cvwise:Milloo123%40@cluster0.sc2nhco.mongodb.net/?appName=Cluster0
JWT_SECRET=cvwise-render-production-secret-key-2026
GEMINI_API_KEY=AIzaSyAs0PBT-mI7Pc2e8BD7JHbduOzJIBAIsgw
NODE_ENV=production
PORT=5000
```

### Step 4: Deploy

Render will automatically deploy on:
- Push to main branch
- Manual trigger from dashboard

## Testing After Deployment

### Test Frontend
```bash
https://cvwise.vercel.app
```

### Test Backend Health
```bash
curl https://cvwise-backend.onrender.com/health
```

### Test API Endpoints

**Register:**
```bash
curl -X POST https://cvwise-backend.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"pass123","firstName":"John","lastName":"Doe"}'
```

**Login:**
```bash
curl -X POST https://cvwise-backend.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"pass123"}'
```

**Download PDF:**
```bash
curl -X POST https://cvwise-backend.onrender.com/api/download/generate \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{...cvData...}'
```

## CORS Configuration

Backend is configured to accept requests from:
- http://localhost:3001 (dev)
- https://cvwise.vercel.app (production)

## Important Notes

1. **MongoDB URI**: The @ symbol in password is URL-encoded as `%40`
2. **JWT Secret**: Should be changed in production (currently: cvwise-render-production-secret-key-2026)
3. **API Timeout**: Render free tier has 30-second request timeout
4. **Cold Starts**: Free tier instances spin down after inactivity

## Monitoring

- Vercel: Dashboard → Analytics
- Render: Service → Logs & Metrics

## Troubleshooting

### 404 Error on Vercel
✅ Fixed with rewrites in vercel.json

### Backend Not Responding
1. Check Render logs for errors
2. Verify MongoDB connection (MONGODB_URI)
3. Ensure port 5000 is accessible

### PDF Download Fails
1. Check backend logs
2. Verify auth token in request
3. Check server-side PDF generation logs
