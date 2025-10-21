import React from 'react';
import { Trophy } from 'lucide-react';

interface LeaderboardButtonProps {
  onClick: () => void;
}

export const LeaderboardButton: React.FC<LeaderboardButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/30"
      aria-label="View Leaderboard"
    >
      <Trophy className="w-5 h-5 text-white" />
    </button>
  );
};
