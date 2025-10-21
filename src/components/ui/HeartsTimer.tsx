import React, { useState, useEffect } from 'react';
import { HeartsData, getTimeUntilNextReset, formatTimeRemaining } from '../../utils/heartsTimer';
import { Heart, Clock } from 'lucide-react';

interface HeartsTimerProps {
  heartsData: HeartsData;
  isSubscribed: boolean;
}

export const HeartsTimer: React.FC<HeartsTimerProps> = ({ heartsData, isSubscribed }) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    if (isSubscribed || heartsData.currentHearts >= heartsData.maxHearts) {
      setTimeRemaining(0);
      return;
    }

    const updateTimer = () => {
      const remaining = getTimeUntilNextReset(heartsData.lastResetTime);
      setTimeRemaining(remaining);
    };

    // Update immediately
    updateTimer();

    // Update every second
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [heartsData, isSubscribed]);

  if (isSubscribed) {
    return (
      <div className="flex items-center gap-2 text-white">
        <Heart className="w-5 h-5 fill-white" />
        <span className="text-lg font-bold">∞</span>
        <span className="text-sm">Unlimited</span>
      </div>
    );
  }

  if (heartsData.currentHearts >= heartsData.maxHearts) {
    return (
      <div className="flex items-center gap-2 text-white">
        <Heart className="w-5 h-5 fill-white" />
        <span className="text-lg font-bold">{heartsData.currentHearts}</span>
        <span className="text-sm">Full Hearts</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-white">
      <Heart className="w-5 h-5 fill-white" />
      <span className="text-lg font-bold">{heartsData.currentHearts}</span>
      <div className="flex items-center gap-1">
        <Clock className="w-4 h-4" />
        <span className="text-sm">
          {formatTimeRemaining(timeRemaining)}
        </span>
      </div>
    </div>
  );
};
