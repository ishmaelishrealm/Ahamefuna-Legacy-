import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { UserData, loadUserData, createGuestUser, loadGuestProgress, saveGuestProgress } from '../utils/userData';

interface AuthContextType {
  user: User | null;
  userData: UserData | null;
  isGuest: boolean;
  loading: boolean;
  logout: () => Promise<void>;
  setUserData: (data: UserData) => void;
  setGuestMode: (isGuest: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isGuest, setIsGuest] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        setIsGuest(false);
        
        // Load user data from Firestore
        const data = await loadUserData(user.uid);
        setUserData(data);
      } else {
        setUser(null);
        setUserData(null);
        setIsGuest(false);
        
        // Check for guest progress
        const guestProgress = loadGuestProgress();
        if (guestProgress) {
          setUserData(guestProgress);
          setIsGuest(true);
        }
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setUserData(null);
      setIsGuest(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleSetUserData = (data: UserData) => {
    setUserData(data);
    if (isGuest) {
      saveGuestProgress(data);
    }
  };

  const handleSetGuestMode = (guestMode: boolean) => {
    setIsGuest(guestMode);
    if (guestMode) {
      const guestUser = createGuestUser();
      setUserData(guestUser);
      saveGuestProgress(guestUser);
    } else {
      setUserData(null);
    }
  };

  const value: AuthContextType = {
    user,
    userData,
    isGuest,
    loading,
    logout,
    setUserData: handleSetUserData,
    setGuestMode: handleSetGuestMode,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
