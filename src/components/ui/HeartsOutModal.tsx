import React, { useState, useEffect } from 'react';
import { Heart, Clock, Crown, X } from 'lucide-react';
import { getTimeUntilNextReset, formatTimeRemaining } from '../../utils/heartsTimer';

interface HeartsOutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: () => void;
  heartsData: {
    currentHearts: number;
    lastResetTime: number;
    maxHearts: number;
  };
  isGuest?: boolean;
}

export const HeartsOutModal: React.FC<HeartsOutModalProps> = ({
  isOpen,
  onClose,
  onSubscribe,
  heartsData,
  isGuest = false
}) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    if (!isOpen) return;

    const updateTimer = () => {
      const remaining = getTimeUntilNextReset(heartsData.lastResetTime);
      setTimeRemaining(remaining);
    };

    // Update immediately
    updateTimer();

    // Update every second
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [isOpen, heartsData.lastResetTime]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-[#FFB6D9] via-[#9D4EDD] to-[#00FF94] rounded-3xl p-8 max-w-md w-full relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
        >
          <X className="w-4 h-4 text-white" />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Hearts Animation */}
          <div className="mb-6">
            <div className="relative inline-block">
              <Heart className="w-16 h-16 text-red-500 animate-pulse" fill="currentColor" />
              <div className="absolute -top-2 -right-2 text-2xl">💔</div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-white mb-4">
            {isGuest ? "Oops! No More Hearts!" : "Hearts Run Out!"}
          </h2>

          {/* Message */}
          <p className="text-white/80 text-lg mb-6">
            {isGuest 
              ? "You've used all your free hearts. Sign up to get more hearts and continue learning!"
              : "You've used all your hearts for today. Wait for them to regenerate or subscribe for unlimited hearts!"
            }
          </p>

          {/* Countdown Timer */}
          {!isGuest && (
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">Hearts Reset In:</span>
              </div>
              <div className="text-2xl font-bold text-white">
                {formatTimeRemaining(timeRemaining)}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            {isGuest ? (
              <button
                onClick={onSubscribe}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-4 px-6 rounded-2xl transition-all hover:scale-105 flex items-center justify-center gap-3"
              >
                <Crown className="w-5 h-5" />
                Sign Up for More Hearts
              </button>
            ) : (
              <>
                <button
                  onClick={onSubscribe}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-4 px-6 rounded-2xl transition-all hover:scale-105 flex items-center justify-center gap-3"
                >
                  <Crown className="w-5 h-5" />
                  Subscribe for Unlimited Hearts
                </button>
                <button
                  onClick={onClose}
                  className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-2xl transition-all"
                >
                  Wait for Hearts to Reset
                </button>
              </>
            )}
          </div>

          {/* Hearts Display */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: heartsData.maxHearts }, (_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  i < heartsData.currentHearts
                    ? 'bg-gradient-to-br from-[#FF1493] to-[#FF69B4]'
                    : 'bg-gray-300'
                }`}
              >
                <Heart
                  className={`w-4 h-4 ${
                    i < heartsData.currentHearts
                      ? 'fill-white text-white'
                      : 'text-gray-400'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
