# Firebase Setup Guide for Afroslang

## 🔥 Firebase Configuration Issue: `auth/configuration-not-found`

This error occurs when Firebase Authentication is not properly configured in your Firebase project. Follow these steps to fix it:

## 📋 Step-by-Step Setup

### 1. **Firebase Console Setup**

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `ahamefuna-legacy`
3. Navigate to **Authentication** → **Sign-in method**
4. Enable **Email/Password** authentication:
   - Click on "Email/Password"
   - Toggle "Enable" to ON
   - Click "Save"

### 2. **Firebase Project Configuration**

1. Go to **Project Settings** (gear icon)
2. Scroll down to **Your apps** section
3. If you don't have a web app, click **Add app** → **Web** (</> icon)
4. Register your app with nickname: `Afroslang Web`
5. Copy the configuration object

### 3. **Environment Variables Setup**

Create a `.env.local` file in your project root:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=ahamefuna-legacy.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=ahamefuna-legacy
VITE_FIREBASE_STORAGE_BUCKET=ahamefuna-legacy.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=941773844005
VITE_FIREBASE_APP_ID=1:941773844005:web:ef68b2356d03ba425d19cc
VITE_FIREBASE_MEASUREMENT_ID=G-GZ64C1GG74

# Stripe Configuration
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# App Configuration
NEXT_PUBLIC_BASE_URL=http://localhost:5173
```

### 4. **Firestore Database Setup**

1. Go to **Firestore Database** in Firebase Console
2. Click **Create database**
3. Choose **Start in test mode** (for development)
4. Select a location (choose closest to your users)
5. Click **Done**

### 5. **Firestore Security Rules**

Update your Firestore rules to allow user data access:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Leaderboard data (read-only for users)
    match /leaderboards/{document=**} {
      allow read: if request.auth != null;
      allow write: if false; // Only server can write
    }
  }
}
```

### 6. **Firebase Hosting Setup (Optional)**

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init`
4. Deploy: `firebase deploy`

## 🔧 Troubleshooting

### Common Issues:

1. **`auth/configuration-not-found`**
   - ✅ Enable Email/Password authentication in Firebase Console
   - ✅ Check that your Firebase config is correct
   - ✅ Verify environment variables are loaded

2. **`auth/domain-not-authorized`**
   - ✅ Add your domain to authorized domains in Firebase Console
   - ✅ Go to Authentication → Settings → Authorized domains

3. **`auth/operation-not-allowed`**
   - ✅ Enable the specific sign-in method in Firebase Console

4. **Firestore permission denied**
   - ✅ Update Firestore security rules
   - ✅ Check that user is authenticated

### Debug Steps:

1. **Check Browser Console**
   - Open Developer Tools (F12)
   - Look for Firebase-related errors
   - Check network tab for failed requests

2. **Verify Firebase Config**
   - The app will show Firebase status in the signup form
   - Look for "✅ Firebase is properly configured" message

3. **Test Firebase Connection**
   ```javascript
   // Add this to your browser console
   import { auth } from './src/firebase';
   console.log('Auth instance:', auth);
   console.log('Auth app:', auth.app);
   ```

## 🚀 Production Deployment

### Vercel Environment Variables:

Add these to your Vercel project settings:

```
VITE_FIREBASE_API_KEY=your_production_api_key
VITE_FIREBASE_AUTH_DOMAIN=ahamefuna-legacy.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=ahamefuna-legacy
VITE_FIREBASE_STORAGE_BUCKET=ahamefuna-legacy.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=941773844005
VITE_FIREBASE_APP_ID=1:941773844005:web:ef68b2356d03ba425d19cc
VITE_FIREBASE_MEASUREMENT_ID=G-GZ64C1GG74
```

### Production Firestore Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    match /leaderboards/{document=**} {
      allow read: if request.auth != null;
      allow write: if false;
    }
  }
}
```

## 📞 Support

If you're still experiencing issues:

1. Check the Firebase Console for any error messages
2. Verify your Firebase project is active and not suspended
3. Ensure you have the correct permissions for the Firebase project
4. Try creating a new Firebase project if the current one has issues

## ✅ Verification Checklist

- [ ] Firebase project created and active
- [ ] Email/Password authentication enabled
- [ ] Firestore database created
- [ ] Security rules configured
- [ ] Environment variables set
- [ ] App deployed and accessible
- [ ] User registration working
- [ ] User data saving to Firestore