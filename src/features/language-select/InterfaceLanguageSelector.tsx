import { useState, useRef, useEffect } from 'react';
import { InterfaceLanguage } from '../../types';
import { Moon, Sun, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const brown = '#6B4F3A'; // dark brown
  const lightBrown = '#A67B5B';
  const green = '#10B981'; // text color (bright green like Duolingo)
  const pink = '#EC4899'; // subtle accent

  const handleGetStarted = () => onSelect('en'); // default English
  const handleLogin = () => onSelect('en'); // Navigate to login/auth

  // Check scroll position and update chevron states
  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Scroll handlers
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Initialize and watch scroll position
  useEffect(() => {
    updateScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollButtons);
      return () => container.removeEventListener('scroll', updateScrollButtons);
    }
  }, []);

  return (
    <div className={`${isDark ? 'bg-black' : 'bg-white'} min-h-screen flex flex-col`}>
      {/* Top Section - Logo centered */}
      <div className="w-full flex justify-center pt-6 sm:pt-8 pb-4">
        <div className="flex items-center gap-3">
          {logoError ? (
            <div className="w-12 h-12 rounded-full" style={{ backgroundColor: isDark ? lightBrown : brown }} />
          ) : (
            <img
              src="/afroslang-logo.png"
              alt="Afroslang logo"
              className="w-12 h-12 rounded-full object-contain"
              onError={() => setLogoError(true)}
            />
          )}
          <span className="text-3xl sm:text-4xl font-extrabold" style={{ color: green }}>
            Afroslang
          </span>
          {/* Theme toggle - small in corner */}
          <button
            onClick={() => setIsDark((v) => !v)}
            className={`ml-4 p-2 rounded-full transition-colors ${
              isDark ? 'text-white hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Middle Section - Logo and Country Facts */}
      <div className="flex-1 flex items-center justify-center px-4 py-8 sm:py-12">
        <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            {logoError ? (
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full" style={{ backgroundColor: isDark ? lightBrown : brown }} />
            ) : (
              <img
                src="/afroslang-logo.png"
                alt="Afroslang logo"
                className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-contain"
                onError={() => setLogoError(true)}
              />
            )}
          </div>

          {/* Right: Country Facts Oval Box */}
          <div className={`flex-1 w-full lg:max-w-md ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-full px-8 py-6 sm:px-10 sm:py-8 shadow-lg border-2 ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Did You Know?
            </h2>
            <div className="space-y-3">
              <p className={`text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <span className="font-semibold">🌍 Africa</span> is home to over <span className="font-bold">2,000 languages</span>, making it the most linguistically diverse continent on Earth.
              </p>
              <p className={`text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <span className="font-semibold">Nigeria</span> alone has over <span className="font-bold">500 languages</span>, with Hausa, Yoruba, and Igbo among the most widely spoken.
              </p>
              <p className={`text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <span className="font-semibold">Swahili</span> is spoken by over <span className="font-bold">200 million</span> people across East Africa and is one of the official languages of the African Union.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Headline Text Section */}
      <div className="px-4 pb-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            The free, fun, and effective way to
            <br />
            <span className="font-extrabold">learn African languages!</span>
          </h1>
        </div>
      </div>

      {/* Call-to-Action Buttons Section */}
      <div className="px-4 pb-8">
        <div className="flex flex-col items-center gap-4 pt-4">
            {/* Primary Button - GET STARTED (bright green like Duolingo) */}
            <button
              onClick={handleGetStarted}
              className="w-full max-w-xs py-4 px-8 rounded-lg font-bold text-lg text-white uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-offset-2"
              style={{
                backgroundColor: green,
              }}
              onFocus={(e) => {
                e.currentTarget.style.boxShadow = `0 0 0 4px ${green}40`;
              }}
              onBlur={(e) => {
                e.currentTarget.style.boxShadow = '';
              }}
            >
              GET STARTED
            </button>

            {/* Secondary Button - I ALREADY HAVE AN ACCOUNT */}
            <button
              onClick={handleLogin}
              className={`w-full max-w-xs py-4 px-8 rounded-lg font-bold text-lg uppercase tracking-wide border-2 transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                isDark 
                  ? 'bg-transparent border-white/30 text-white hover:border-white/50' 
                  : 'bg-white border-gray-300 text-blue-600 hover:border-gray-400'
              }`}
            >
              I ALREADY HAVE AN ACCOUNT
            </button>
        </div>
      </div>

      {/* Bottom Section - Language Selector Bar */}
      <div className={`w-full ${isDark ? 'bg-gray-900' : 'bg-gray-100'} border-t ${isDark ? 'border-gray-800' : 'border-gray-200'} py-4`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="relative flex items-center">
            {/* Left Chevron */}
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              aria-label="Previous languages"
              className={`flex-shrink-0 p-2 rounded-full transition-all ${
                canScrollLeft
                  ? isDark
                    ? 'text-white hover:bg-white/10'
                    : 'text-gray-600 hover:bg-gray-200'
                  : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Scrollable Languages List */}
            <div
              ref={scrollContainerRef}
              className="flex-1 overflow-x-auto scrollbar-hide scroll-smooth mx-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
              }}
              onScroll={updateScrollButtons}
            >
              <div className="flex items-center gap-4 sm:gap-6 py-2">
                {languages.map((language) => {
                  const displayName = language.name.split('(')[0].trim();
                  return (
                    <button
                      key={language.id}
                      className="flex items-center gap-2 sm:gap-3 flex-shrink-0 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-lg px-2"
                    >
                      <FlagIcon country={language.flags[0]} size="sm" />
                      <span className={`text-sm sm:text-base font-semibold whitespace-nowrap ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {displayName.toUpperCase()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Chevron */}
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              aria-label="Next languages"
              className={`flex-shrink-0 p-2 rounded-full transition-all ${
                canScrollRight
                  ? isDark
                    ? 'text-white hover:bg-white/10'
                    : 'text-gray-600 hover:bg-gray-200'
                  : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
