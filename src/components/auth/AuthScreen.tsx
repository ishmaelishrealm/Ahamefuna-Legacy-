import React, { useState } from 'react';
import { Login } from './Login';
import { SignUp } from './SignUp';
import { useAuth } from '../../contexts/AuthContext';

type AuthMode = 'login' | 'signup';

export const AuthScreen: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>('login');
  const { setGuestMode } = useAuth();

  const handleAuthSuccess = () => {
    // Auth state will be updated automatically by the AuthContext
  };

  const handleGuestMode = () => {
    setGuestMode(true);
  };

  return (
    <div>
      {mode === 'login' ? (
        <Login
          onSuccess={handleAuthSuccess}
          onSwitchToSignUp={() => setMode('signup')}
          onGuestMode={handleGuestMode}
        />
      ) : (
        <SignUp
          onSuccess={handleAuthSuccess}
          onSwitchToLogin={() => setMode('login')}
        />
      )}
    </div>
  );
};
