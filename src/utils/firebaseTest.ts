import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Test Firebase configuration
export const testFirebaseConfig = async () => {
  try {
    console.log('Testing Firebase configuration...');
    console.log('Auth instance:', auth);
    console.log('Auth app:', auth.app);
    console.log('Auth config:', auth.config);
    
    // Test if auth is properly initialized
    if (auth && auth.app) {
      console.log('✅ Firebase Auth is properly initialized');
      return true;
    } else {
      console.error('❌ Firebase Auth is not properly initialized');
      return false;
    }
  } catch (error) {
    console.error('❌ Firebase configuration error:', error);
    return false;
  }
};

// Test Firebase Auth methods
export const testFirebaseAuth = async () => {
  try {
    console.log('Testing Firebase Auth methods...');
    
    // Test creating a user (this will fail but should give us more info)
    try {
      await createUserWithEmailAndPassword(auth, 'test@example.com', 'testpassword123');
    } catch (error: any) {
      console.log('Expected error (test user creation):', error.code, error.message);
      
      // Check if it's a configuration error
      if (error.code === 'auth/configuration-not-found') {
        console.error('❌ Firebase configuration not found. Check your Firebase project settings.');
        return false;
      } else if (error.code === 'auth/email-already-in-use') {
        console.log('✅ Firebase Auth is working (email already exists)');
        return true;
      } else if (error.code === 'auth/weak-password') {
        console.log('✅ Firebase Auth is working (weak password error)');
        return true;
      }
    }
    
    return true;
  } catch (error) {
    console.error('❌ Firebase Auth test failed:', error);
    return false;
  }
};
