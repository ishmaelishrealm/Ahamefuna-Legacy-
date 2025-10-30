import { useState } from 'react';
import { InterfaceLanguage } from '../../types';
import { Moon, Sun } from 'lucide-react';
import { languages } from '../../data/languages';
import { FlagIcon } from './FlagIcon';

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
  const [isDark, setIsDark] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const brown = '#6B4F3A'; // dark brown
  const lightBrown = '#A67B5B';
  const green = '#10B981'; // text color
  const pink = '#EC4899'; // subtle accent

  const handleGetStarted = () => onSelect('en'); // default English

  return (
    <div className={`${isDark ? 'bg-black' : 'bg-white'} min-h-screen flex flex-col items-center px-4 py-8 sm:py-12`}>
      {/* Top bar: centered logo + name, right-aligned theme toggle */}
      <div className="w-full max-w-5xl flex items-center justify-between mb-10">
        <div className="flex-1" />
        <div className="flex items-center gap-3">
          {/* Logo centered with text */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
            {/* Logo image (place file at public/afroslang-logo.png) */}
            {logoError ? (
              <div className="w-10 h-10 rounded-full" style={{ backgroundColor: isDark ? lightBrown : brown }} />
            ) : (
              <img
                src="/afroslang-logo.png"
                alt="Afroslang logo"
                className="w-10 h-10 rounded-full object-contain"
                onError={() => setLogoError(true)}
              />
            )}
            <span className="text-2xl sm:text-3xl font-extrabold" style={{ color: green }}>
              Afroslang
            </span>
          </div>

          {/* Theme toggle */}
          <button
            onClick={() => setIsDark((v) => !v)}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-full border transition-colors ${
              isDark ? 'border-white text-white' : 'border-black text-black'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            <span className="text-xs font-semibold">{isDark ? 'Dark' : 'Light'}</span>
          </button>
        </div>
      </div>

      {/* Main content: minimal hero with Get Started */}
      <div className="flex-1 w-full flex flex-col items-center justify-center">
        <div className="text-center space-y-8">
          {/* Minimal accent underline under title area (optional subtle pink accent) */}
          <div className="mx-auto w-16 h-1 rounded-full" style={{ backgroundColor: pink }} />

          <button
            onClick={handleGetStarted}
            className="px-10 py-4 rounded-full font-extrabold text-lg tracking-wide shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              backgroundColor: isDark ? brown : brown,
              color: green,
              borderWidth: 2,
              borderColor: isDark ? 'white' : 'black',
            }}
          >
            Get Started
          </button>

          {/* 15 Languages Section */}
          <div 
            className="w-full max-w-4xl mx-auto mt-12 p-6 sm:p-8 rounded-lg"
            style={{
              borderWidth: 2,
              borderColor: isDark ? 'white' : 'black',
              boxShadow: isDark 
                ? '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)' 
                : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
          >
            {/* Top line */}
            <div 
              className="w-full h-0.5 mb-6"
              style={{ backgroundColor: isDark ? 'white' : 'black' }}
            />
            
            {/* Languages Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-6">
              {languages.map((language) => (
                <div 
                  key={language.id} 
                  className="flex flex-col items-center gap-2"
                >
                  {/* Flag - use first flag for each language */}
                  <div className="flex-shrink-0">
                    <FlagIcon country={language.flags[0]} size="md" />
                  </div>
                  {/* Language name - small text */}
                  <span 
                    className="text-xs sm:text-sm font-bold text-center leading-tight"
                    style={{ color: green }}
                  >
                    {language.name.split('(')[0].trim()}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Bottom line */}
            <div 
              className="w-full h-0.5 mt-6"
              style={{ backgroundColor: isDark ? 'white' : 'black' }}
            />
          </div>

          {/* English/French quick links (optional, subtle) */}
          <div className="flex items-center justify-center gap-6 pt-2">
            <button
              onClick={() => onSelect('en')}
              className={`text-sm font-bold underline-offset-4 hover:underline ${isDark ? 'text-white' : 'text-black'}`}
              style={{ color: green }}
            >
              English
            </button>
            <button
              onClick={() => onSelect('fr')}
              className={`text-sm font-bold underline-offset-4 hover:underline ${isDark ? 'text-white' : 'text-black'}`}
              style={{ color: green }}
            >
              Français
            </button>
          </div>
        </div>
      </div>

      {/* Bottom padding spacer */}
      <div className="h-6" />
    </div>
  );
}
