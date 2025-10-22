import { InterfaceLanguage } from '../../types';
import { Sparkles, Zap, Gamepad2 } from 'lucide-react';

interface InterfaceLanguageSelectorProps {
  onSelect: (language: InterfaceLanguage) => void;
}

// UK Flag Component
function UKFlag() {
  return (
    <svg viewBox="0 0 60 40" className="w-8 h-8 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl retro-shadow game-border">
      <rect width="60" height="40" fill="#012169"/>
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFFFFF" strokeWidth="8"/>
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4.8"/>
      <path d="M30,0 L30,40 M0,20 L60,20" stroke="#FFFFFF" strokeWidth="13.3"/>
      <path d="M30,0 L30,40 M0,20 L60,20" stroke="#C8102E" strokeWidth="8"/>
    </svg>
  );
}

// French Flag Component
function FrenchFlag() {
  return (
    <svg viewBox="0 0 60 40" className="w-8 h-8 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl retro-shadow game-border">
      <rect width="20" height="40" fill="#002395"/>
      <rect x="20" width="20" height="40" fill="#FFFFFF"/>
      <rect x="40" width="20" height="40" fill="#ED2939"/>
    </svg>
  );
}

export function InterfaceLanguageSelector({ onSelect }: InterfaceLanguageSelectorProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-2 sm:px-8 py-4 sm:py-16 relative overflow-hidden bg-gradient-to-br from-[#FFB6D9] via-[#9D4EDD] to-[#00FF94]">
      
      <div className="max-w-3xl w-full text-center space-y-4 sm:space-y-12 relative z-10">
        {/* Logo & Branding */}
        <div className="space-y-3 sm:space-y-8 animate-fadeIn">
          
          <div className="space-y-2 sm:space-y-6">
            <h1 className="text-2xl sm:text-7xl uppercase tracking-wider text-white drop-shadow-lg">
              Afroslang
            </h1>
            <div className="bg-white rounded-xl sm:rounded-3xl p-3 sm:p-8 game-border retro-shadow">
              <p className="text-sm sm:text-3xl text-[#1A1A1A] max-w-xl mx-auto leading-tight">
                🎮 Learn African Languages Through <span className="text-transparent bg-gradient-to-r from-[#FF1493] to-[#00FF94] bg-clip-text">EPIC</span> Game Quests! 🚀
              </p>
            </div>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-2 sm:mt-8">
              <div className="bg-gradient-to-r from-[#FF1493] to-[#FF69B4] px-3 sm:px-8 py-2 sm:py-4 rounded-lg sm:rounded-2xl game-border retro-shadow hover:scale-110 transition-all">
                <div className="flex items-center gap-1 sm:gap-3 text-white">
                  <span className="text-sm sm:text-3xl">🎯</span>
                  <span className="text-xs sm:text-xl uppercase tracking-wider">15 Languages</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#FFD700] to-[#FF6B35] px-3 sm:px-8 py-2 sm:py-4 rounded-lg sm:rounded-2xl game-border retro-shadow hover:scale-110 transition-all">
                <div className="flex items-center gap-1 sm:gap-3 text-white">
                  <Gamepad2 className="w-3 h-3 sm:w-8 sm:h-8" />
                  <span className="text-xs sm:text-xl uppercase tracking-wider">Gamified</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#00FF94] to-[#7FFF00] px-3 sm:px-8 py-2 sm:py-4 rounded-lg sm:rounded-2xl game-border retro-shadow hover:scale-110 transition-all">
                <div className="flex items-center gap-1 sm:gap-3 text-white">
                  <Zap className="w-3 h-3 sm:w-8 sm:h-8" />
                  <span className="text-xs sm:text-xl uppercase tracking-wider">100+ Quests</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Language Selection */}
        <div className="space-y-3 sm:space-y-8 animate-slideIn">
          <div className="bg-white rounded-xl sm:rounded-3xl px-3 sm:px-10 py-2 sm:py-4 game-border retro-shadow inline-block">
            <div className="flex items-center gap-1 sm:gap-3">
              <Sparkles className="w-3 h-3 sm:w-7 sm:h-7 text-[#FFD700]" />
              <span className="text-sm sm:text-2xl text-[#1A1A1A] uppercase tracking-wide">Choose Your Language</span>
              <Sparkles className="w-3 h-3 sm:w-7 sm:h-7 text-[#FFD700]" />
            </div>
          </div>
          
          <div className="space-y-2 sm:space-y-6">
            <button
              onClick={() => onSelect('en')}
              className="w-full bg-white rounded-xl sm:rounded-3xl p-3 sm:p-10 game-border retro-shadow-lg hover:retro-shadow hover:scale-105 transition-all duration-300 flex items-center gap-2 sm:gap-8 group"
            >
              <div className="flex-shrink-0 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                <UKFlag />
              </div>
              <div className="flex-1 text-left space-y-1 sm:space-y-2">
                <h3 className="text-sm sm:text-4xl text-[#1A1A1A] uppercase tracking-wide">English</h3>
                <p className="text-xs sm:text-2xl text-[#4A4A4A]">Learn in English</p>
              </div>
              <div className="text-lg sm:text-6xl text-[#FF1493] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-4 group-hover:scale-125 animate-pulse">
                ▶
              </div>
            </button>

            <button
              onClick={() => onSelect('fr')}
              className="w-full bg-white rounded-xl sm:rounded-3xl p-3 sm:p-10 game-border retro-shadow-lg hover:retro-shadow hover:scale-105 transition-all duration-300 flex items-center gap-2 sm:gap-8 group"
            >
              <div className="flex-shrink-0 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                <FrenchFlag />
              </div>
              <div className="flex-1 text-left space-y-1 sm:space-y-2">
                <h3 className="text-sm sm:text-4xl text-[#1A1A1A] uppercase tracking-wide">Français</h3>
                <p className="text-xs sm:text-2xl text-[#4A4A4A]">Apprendre en français</p>
              </div>
              <div className="text-lg sm:text-6xl text-[#FF1493] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-4 group-hover:scale-125 animate-pulse">
                ▶
              </div>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white rounded-xl sm:rounded-3xl p-3 sm:p-8 game-border retro-shadow animate-fadeIn" style={{ animationDelay: '0.5s' }}>
          <p className="text-xs sm:text-2xl text-[#1A1A1A] flex items-center justify-center gap-1 sm:gap-3">
            <span className="text-lg sm:text-4xl">✨</span>
            <span>Master vocabulary, grammar & culture!</span>
            <span className="text-lg sm:text-4xl">✨</span>
          </p>
        </div>
      </div>
    </div>
  );
}
