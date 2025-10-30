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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const brown = '#6B4F3A'; // dark brown
  const lightBrown = '#A67B5B';
  const green = '#10B981'; // text color
  const pink = '#EC4899'; // subtle accent

  const handleGetStarted = () => onSelect('en'); // default English

  // Check scroll position and update chevron states
  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      setScrollPosition(scrollLeft);
    }
  };

  // Scroll handlers
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.6; // Scroll by ~60% of visible width
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.6; // Scroll by ~60% of visible width
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (scrollContainerRef.current && document.activeElement?.closest('[role="listbox"]')) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          scrollLeft();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          scrollRight();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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

          {/* 15 Languages Carousel Section */}
          <div 
            className="w-full max-w-5xl mx-auto mt-12"
            style={{
              borderWidth: 2,
              borderColor: isDark ? 'white' : 'black',
              boxShadow: isDark 
                ? '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)' 
                : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              borderRadius: '8px',
            }}
          >
            {/* Top line */}
            <div 
              className="w-full h-0.5"
              style={{ backgroundColor: isDark ? 'white' : 'black' }}
            />
            
            {/* Carousel Container */}
            <div className="relative flex items-center h-20 sm:h-24 px-12 sm:px-16">
              {/* Left Chevron */}
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                aria-label="Previous languages"
                className={`absolute left-2 sm:left-4 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  canScrollLeft
                    ? isDark
                      ? 'bg-white/10 hover:bg-white/20 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    : 'opacity-30 cursor-not-allowed'
                }`}
                style={{
                  ...(canScrollLeft && {
                    boxShadow: isDark 
                      ? '0 2px 4px rgba(255, 255, 255, 0.1)'
                      : '0 2px 4px rgba(0, 0, 0, 0.1)'
                  })
                }}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Scrollable Languages List */}
              <div
                ref={scrollContainerRef}
                role="listbox"
                aria-label="Available languages"
                className="flex-1 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch',
                }}
                onScroll={updateScrollButtons}
              >
                <div className="flex items-center gap-3 sm:gap-4 px-2 h-full">
                  {languages.map((language, index) => {
                    const displayName = language.name.split('(')[0].trim();
                    return (
                      <button
                        key={language.id}
                        role="option"
                        tabIndex={0}
                        aria-label={`${displayName}, not selected`}
                        className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 snap-start min-w-fit"
                        style={{
                          color: green,
                          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = isDark 
                            ? 'rgba(255, 255, 255, 0.1)' 
                            : 'rgba(0, 0, 0, 0.06)';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = isDark
                            ? '0 4px 8px rgba(255, 255, 255, 0.15)'
                            : '0 4px 8px rgba(0, 0, 0, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = isDark 
                            ? 'rgba(255, 255, 255, 0.05)' 
                            : 'rgba(0, 0, 0, 0.03)';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            // Could add selection logic here if needed
                          }
                        }}
                      >
                        {/* Flag Icon */}
                        <div className="flex-shrink-0">
                          <FlagIcon country={language.flags[0]} size="sm" />
                        </div>
                        {/* Language Label */}
                        <span 
                          className="text-xs sm:text-sm font-bold uppercase tracking-wide whitespace-nowrap"
                          style={{ color: green }}
                        >
                          {displayName}
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
                className={`absolute right-2 sm:right-4 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  canScrollRight
                    ? isDark
                      ? 'bg-white/10 hover:bg-white/20 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    : 'opacity-30 cursor-not-allowed'
                }`}
                style={{
                  ...(canScrollRight && {
                    boxShadow: isDark 
                      ? '0 2px 4px rgba(255, 255, 255, 0.1)'
                      : '0 2px 4px rgba(0, 0, 0, 0.1)'
                  })
                }}
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Bottom line */}
            <div 
              className="w-full h-0.5"
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
