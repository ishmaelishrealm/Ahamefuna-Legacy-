import React from 'react';
import { Crown, Star, Lock, Heart } from 'lucide-react';

interface GuestLimitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignUp: () => void;
  lessonsCompleted: number;
}

export const GuestLimitModal: React.FC<GuestLimitModalProps> = ({
  isOpen,
  onClose,
  onSignUp,
  lessonsCompleted
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-[#FFB6D9] via-[#9D4EDD] to-[#00FF94] rounded-3xl p-8 max-w-md w-full relative overflow-hidden">
        {/* Content */}
        <div className="text-center">
          {/* Lock Icon */}
          <div className="mb-6">
            <div className="relative inline-block">
              <Lock className="w-16 h-16 text-yellow-400" />
              <div className="absolute -top-2 -right-2 text-2xl">🔒</div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-white mb-4">
            Guest Limit Reached!
          </h2>

          {/* Message */}
          <p className="text-white/80 text-lg mb-6">
            You've completed {lessonsCompleted} lessons as a guest. Sign up to continue learning and unlock unlimited access!
          </p>

          {/* Features */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-6">
            <h3 className="text-white font-bold text-lg mb-4">Sign up to unlock:</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3 text-white">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>Unlimited lessons</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Heart className="w-5 h-5 text-red-400" />
                <span>Unlimited hearts</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Crown className="w-5 h-5 text-yellow-400" />
                <span>Premium features</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <span className="text-2xl">🏆</span>
                <span>Leaderboard access</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={onSignUp}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-4 px-6 rounded-2xl transition-all hover:scale-105 flex items-center justify-center gap-3"
            >
              <Crown className="w-5 h-5" />
              Sign Up to Continue
            </button>
            <button
              onClick={onClose}
              className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-2xl transition-all"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
