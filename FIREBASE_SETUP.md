# Firebase Setup for Afroslang

## 🔥 Firebase Configuration

To complete the authentication setup, you need to configure Firebase with your project credentials.

### Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Name your project: **"Ahamefuna Legacy"** (or "Afroslang")
4. Enable Google Analytics (optional)
5. Create the project

### Step 2: Enable Authentication

1. In your Firebase project, go to **Authentication** → **Sign-in method**
2. Enable **Email/Password** authentication
3. Save the changes

### Step 3: Enable Firestore Database

1. Go to **Firestore Database**
2. Click **Create database**
3. Choose **Start in test mode** (for development)
4. Select a location (choose closest to your users)
5. Create the database

### Step 4: Get Firebase Configuration

1. Go to **Project Settings** (gear icon)
2. Scroll down to **Your apps**
3. Click **Add app** → **Web app** (</> icon)
4. Register your app with a nickname: **"Afroslang Web"**
5. Copy the Firebase configuration object

### Step 5: Update Firebase Config

Replace the placeholder values in `src/firebase.js` with your actual Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

### Step 6: Set Up Firestore Security Rules

In the Firestore Database → Rules tab, update the rules to:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read and write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 🚀 Features Implemented

### ✅ Authentication System
- **Sign Up**: Create account with email, password, and username
- **Sign In**: Login with email and password
- **Guest Mode**: Continue without account (local storage)
- **Auto-login**: Persistent sessions

### ✅ User Data Management
- **Firestore Integration**: Secure cloud storage
- **Progress Tracking**: XP, hearts, completed lessons
- **Language Progress**: Per-language statistics
- **Guest Mode**: Local storage for temporary users

### ✅ Data Structure

**User Document in Firestore:**
```json
{
  "username": "string",
  "email": "string", 
  "hearts": 5,
  "xp": 0,
  "subscription": {
    "active": false,
    "plan": null
  },
  "createdAt": "ISO string",
  "languages": {
    "swahili": {
      "completedLessons": ["lesson-id-1", "lesson-id-2"],
      "xp": 150,
      "hearts": 3
    }
  }
}
```

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run typecheck
```

## 🎯 Next Steps (Future Features)

1. **Subscription System**: Integrate Stripe for premium features
2. **Social Features**: Friends, leaderboards, achievements
3. **Offline Support**: PWA capabilities
4. **Mobile App**: React Native version
5. **Analytics**: User behavior tracking
6. **Admin Panel**: Content management system

## 🔒 Security Notes

- All user data is protected by Firestore security rules
- Authentication is handled by Firebase Auth
- Guest mode data is stored locally (not synced)
- No sensitive data is stored in localStorage

## 📱 User Experience

1. **First Visit**: Users see authentication screen
2. **Sign Up**: Create account → Interface language selection
3. **Sign In**: Login → Continue where they left off
4. **Guest Mode**: Temporary progress (not saved to cloud)
5. **Progress Sync**: All progress automatically saved to Firebase

Your Afroslang app is now ready with full authentication and user management! 🎉
