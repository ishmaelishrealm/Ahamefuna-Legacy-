import React from 'react';
import { Trophy } from 'lucide-react';

interface LeaderboardButtonProps {
  onClick: () => void;
}

export const LeaderboardButton: React.FC<LeaderboardButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-4 h-4 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/30 touch-manipulation"
      aria-label="View Leaderboard"
    >
      <Trophy className="w-2 h-2 sm:w-5 sm:h-5 text-white" />
    </button>
  );
};
