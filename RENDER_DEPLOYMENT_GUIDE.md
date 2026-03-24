# Complete Render Deployment Guide for CVWise Backend

## 📋 Prerequisites

Before starting, ensure you have:
1. GitHub account with CVWise repository access
2. Render account (free tier available at render.com)
3. MongoDB credentials (already configured)
4. API keys ready:
   - Gemini API: `AIzaSyAs0PBT-mI7Pc2e8BD7JHbduOzJIBAIsgw`
   - MongoDB password: `Milloo123@`

---

## 🚀 Step-by-Step Backend Deployment on Render

### STEP 1: Create Render Account & Connect GitHub

1. Go to **https://render.com** and sign up/login
2. Click **"Dashboard"** in the top navigation
3. Click **"New +"** button → Select **"Web Service"**
4. Select **"Connect a repository"**
5. Choose **"GitHub"** as the provider
6. Authorize Render to access your GitHub account
7. Find and select **`NoungaJoseph/CVWise`** repository

---

### STEP 2: Configure Backend Service

After selecting the repository, you'll see the service configuration page.

#### 2.1 Basic Settings

- **Name**: `cvwise-backend` (or any name you prefer)
- **Region**: Select your closest region (e.g., `US (Ohio)`)
- **Branch**: `main`
- **Runtime**: `Node`

#### 2.2 Build & Start Commands

- **Root Directory**: `backend` ← **IMPORTANT: Make sure this is set correctly**
- **Build Command**: 
  ```
  npm install
  ```
- **Start Command**: 
  ```
  npm start
  ```

#### 2.3 Environment Variables

Click **"Advanced"** → **"Add Environment Variable"** for each:

| Key | Value |
|-----|-------|
| `MONGODB_URI` | `mongodb+srv://db_cvwise:Milloo123%40@cluster0.sc2nhco.mongodb.net/?appName=Cluster0` |
| `JWT_SECRET` | `cvwise-render-production-secret-2026` |
| `GEMINI_API_KEY` | `AIzaSyAs0PBT-mI7Pc2e8BD7JHbduOzJIBAIsgw` |
| `NODE_ENV` | `production` |
| `PORT` | `5000` |

**Note**: The `@` in MongoDB password is URL-encoded as `%40`

---

### STEP 3: Deploy Backend

1. Review all settings one more time
2. Click **"Create Web Service"** button (bottom right)
3. Render will start building:
   - Install dependencies
   - Start the server
   - Monitor logs

**Build typically takes 2-3 minutes**

---

### STEP 4: Get Your Backend URL

Once deployment completes (green checkmark):

1. Go to your service page (should auto-redirect)
2. Look at the top - you'll see your service URL:
   ```
   https://cvwise-backend.onrender.com
   ```
3. **Copy this URL** - you'll need it for the frontend

---

### STEP 5: Verify Backend is Running

Test the backend health check:

```bash
curl https://cvwise-backend.onrender.com/health
```

Expected response:
```json
{
  "status": "OK",
  "message": "CVWise Backend is running"
}
```

If you see this, your backend is working! ✅

---

## 🔗 Link Frontend to Backend

### STEP 6: Update Vercel Frontend Environment

Now that your backend is deployed, connect it to the frontend:

1. Go to **https://vercel.com/dashboard**
2. Select your **CVWise** project
3. Click **"Settings"** → **"Environment Variables"**
4. Find or create the variable: `VITE_API_URL`
5. Set the value to your backend URL:
   ```
   https://cvwise-backend.onrender.com/api
   ```
6. Click **"Save"**

#### Update the other variables if not present:

| Variable | Value |
|----------|-------|
| `VITE_API_URL` | `https://cvwise-backend.onrender.com/api` |
| `VITE_GEMINI_API_KEY` | `AIzaSyAs0PBT-mI7Pc2e8BD7JHbduOzJIBAIsgw` |

---

### STEP 7: Redeploy Frontend on Vercel

1. After updating environment variables
2. Go to **"Deployments"** tab
3. Click **"Redeploy"** next to the latest deployment
4. Or push a new commit to GitHub to trigger automatic redeploy

Frontend will rebuild with the new backend URL ✅

---

## ✅ Test Full Integration

### Test 1: User Registration

```bash
curl -X POST https://cvwise-backend.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email":"testuser@example.com",
    "password":"TestPassword123",
    "firstName":"John",
    "lastName":"Doe"
  }'
```

Expected response:
```json
{
  "message": "User registered successfully",
  "token": "eyJhbGc...",
  "userId": "507f1f77bcf86cd799439011",
  "user": {
    "email": "testuser@example.com",
    "firstName": "John",
    "lastName": "Doe"
  }
}
```

### Test 2: User Login

```bash
curl -X POST https://cvwise-backend.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email":"testuser@example.com",
    "password":"TestPassword123"
  }'
```

### Test 3: Frontend Login

1. Go to **https://your-vercel-app.vercel.app/login**
2. Use the test credentials:
   - Email: `testuser@example.com`
   - Password: `TestPassword123`
3. Should redirect to dashboard

### Test 4: PDF Download

1. Log in to your frontend
2. Create a sample CV with data
3. Go to Preview page
4. Click **"Download PDF"** button
5. PDF should download successfully

---

## 🔧 Common Issues & Solutions

### Issue: Backend Shows "500 Internal Server Error"

**Solution:**
1. Check MongoDB connection in Render logs
2. Verify all environment variables are set correctly
3. Look for specific error in Logs tab on Render

### Issue: CORS Error When Downloading PDF

**Solution:**
- Backend is pre-configured with CORS for your domains
- Verify `VITE_API_URL` is correctly set in Vercel

### Issue: "Database connection failed"

**Solution:**
1. Verify MongoDB URI is correct:
   ```
   mongodb+srv://db_cvwise:Milloo123%40@cluster0.sc2nhco.mongodb.net/?appName=Cluster0
   ```
2. Check MongoDB Atlas whitelist includes Render IPs
   - Go to MongoDB Atlas → Network Access
   - Allow access from `0.0.0.0/0` (all IPs) or Render's IP range

### Issue: Frontend Still Showing 404

**Solution:**
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
3. Verify `vercel.json` has SPA rewrites

---

## 📊 Monitoring & Logs

### View Backend Logs

1. Go to Render Dashboard
2. Select **"cvwise-backend"** service
3. Click **"Logs"** tab
4. Watch real-time logs as requests come in

### Common Log Messages

**Good**: 
```
✅ Connected to MongoDB
🚀 CVWise Backend running on port 5000
```

**Bad**:
```
❌ MongoDB connection failed
Error: ECONNREFUSED
```

---

## 🚨 Production Best Practices

1. **Change JWT Secret**: Update `JWT_SECRET` to a strong random string
2. **Update MongoDB**: Use strong password (already done: `Milloo123@`)
3. **Enable HTTPS**: Render automatically provides HTTPS ✅
4. **Monitor Performance**: Check Render metrics tab regularly
5. **Setup Alerts**: Enable email notifications for deployment failures

---

## 📱 Local Testing (Before Deployment)

If you want to test locally first:

```bash
cd backend
npm install
npm start
```

Backend runs on `http://localhost:5000`

Update frontend `.env.local`:
```
VITE_API_URL=http://localhost:5000/api
```

Then run frontend in another terminal:
```bash
cd frontend
npm run dev
```

Frontend runs on `http://localhost:3001`

---

## ✨ Summary

After completing these steps:

✅ Backend deployed on Render  
✅ Backend connected to MongoDB Atlas  
✅ Frontend connected to backend API  
✅ Users can register and login  
✅ Users can download PDF files  
✅ All data persists in MongoDB  

Your CVWise application is now **live and fully functional**! 🎉

---

## 📞 Support

If you encounter issues:

1. Check Render logs for backend errors
2. Check Vercel deployment logs for frontend errors
3. Use browser DevTools → Network tab to see API calls
4. Check MongoDB Atlas for database connection issues

**Backend Logs**: Render Dashboard → cvwise-backend → Logs  
**Frontend Logs**: Vercel Dashboard → CVWise → Logs  
**Database Logs**: MongoDB Atlas → Metrics
