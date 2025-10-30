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
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-16 relative overflow-hidden bg-gradient-to-br from-[#FFB6D9] via-[#9D4EDD] to-[#00FF94]">
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <h1 className="text-[150px] sm:text-[300px] font-bold text-white uppercase tracking-wider">
          Afroslang
        </h1>
      </div>

      {/* Auth Container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo & Branding */}
        <div className="text-center mb-8 animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-wider text-white drop-shadow-lg mb-2">
            Afroslang
          </h1>
          <p className="text-white/90 text-sm sm:text-base">
            Learn African Languages Through EPIC Game Quests! 🚀
          </p>
        </div>

        {/* Auth Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
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

        {/* Footer */}
        <p className="text-center text-white/80 text-xs sm:text-sm mt-6">
          🌍 Master Swahili, Hausa, Yoruba, Zulu and more!
        </p>
      </div>
    </div>
  );
};
