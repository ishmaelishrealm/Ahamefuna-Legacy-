import React, { useState } from 'react';
import { ProfileDropdown } from '../ui/ProfileDropdown';
import { LeaderboardButton } from '../ui/LeaderboardButton';
import { AuthModal } from '../auth/AuthModal';
import { Crown, BarChart3 } from 'lucide-react';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  onBack?: () => void;
  onLeaderboard?: () => void;
  onSubscription?: () => void;
  onFeedback?: () => void;
  isSubscribed?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ 
  title = "Afroslang", 
  showBackButton = false, 
  onBack,
  onLeaderboard,
  onSubscription,
  onFeedback,
  isSubscribed = false
}) => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const handleSignIn = () => {
    setAuthMode('login');
    setAuthModalOpen(true);
  };

  const handleSignUp = () => {
    setAuthMode('signup');
    setAuthModalOpen(true);
  };

  const handleCloseAuth = () => {
    setAuthModalOpen(false);
  };
  return (
    <header className="bg-gradient-to-r from-[#FFB6D9] via-[#9D4EDD] to-[#00FF94] shadow-lg">
      <div className="max-w-7xl mx-auto px-1 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-10 sm:h-16">
          {/* Left side - Back button and title */}
          <div className="flex items-center space-x-1 sm:space-x-4 min-w-0 flex-1">
            {showBackButton && onBack && (
              <button
                onClick={onBack}
                className="flex items-center justify-center w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm flex-shrink-0 touch-manipulation"
              >
                <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            <div className="flex flex-col">
              <h1 className="text-sm sm:text-xl font-bold text-white drop-shadow-lg truncate">{title}</h1>
              <div className="text-[10px] sm:text-xs text-white/70 -mt-0.5 sm:mt-0">
                <span className="hidden sm:inline">Beta v1.0 • </span>
                <span className="sm:hidden">v1.0 • </span>
                <span className="hidden sm:inline">Parent: Sonoaac</span>
                <span className="sm:hidden">Sonoaac</span>
              </div>
            </div>
          </div>

          {/* Right side - Premium buttons, Leaderboard and Profile */}
          <div className="flex items-center gap-1 sm:gap-3 flex-shrink-0">
            {onFeedback && isSubscribed && (
              <button
                onClick={onFeedback}
                className="hidden sm:flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/30"
                aria-label="View Feedback"
              >
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            )}
            
            {onSubscription && !isSubscribed && (
              <button
                onClick={onSubscription}
                className="flex items-center justify-center w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 shadow-lg hover:shadow-xl touch-manipulation"
                aria-label="Subscribe to Premium"
              >
                <Crown className="w-3 h-3 sm:w-5 sm:h-5 text-black" />
              </button>
            )}
            
            {onLeaderboard && (
              <LeaderboardButton onClick={onLeaderboard} />
            )}
            
            <ProfileDropdown 
              onSignIn={handleSignIn}
              onSignUp={handleSignUp}
            />
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={authModalOpen}
        onClose={handleCloseAuth}
        initialMode={authMode}
      />
    </header>
  );
};
