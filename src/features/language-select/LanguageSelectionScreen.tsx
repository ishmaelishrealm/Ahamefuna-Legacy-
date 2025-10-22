import { Language, InterfaceLanguage } from '../../types';
import { languages } from '../../data/languages';
import { FlagIcon } from './FlagIcon';
import { ChevronLeft, Globe, Sparkles, Star, Home } from 'lucide-react';

interface LanguageSelectionScreenProps {
  interfaceLanguage: InterfaceLanguage;
  onSelectLanguage: (languageId: string) => void;
  onBack: () => void;
}

export function LanguageSelectionScreen({ 
  interfaceLanguage, 
  onSelectLanguage,
  onBack 
}: LanguageSelectionScreenProps) {
  const isEnglish = interfaceLanguage === 'en';
  
  const regionNames = {
    west: isEnglish ? 'West Africa' : 'Afrique de l\'Ouest',
    east: isEnglish ? 'East Africa' : 'Afrique de l\'Est',
    central: isEnglish ? 'Central Africa' : 'Afrique Centrale',
    north: isEnglish ? 'North Africa' : 'Afrique du Nord',
    southern: isEnglish ? 'Southern Africa' : 'Afrique Australe'
  };

  const regionEmojis = {
    west: '🌴',
    east: '🗻',
    central: '🌿',
    north: '🏜️',
    southern: '🦁'
  };

  const regionColors = {
    west: 'from-[#FF1493] to-[#FF69B4]',
    east: 'from-[#00FF94] to-[#7FFF00]',
    central: 'from-[#9D4EDD] to-[#FFB6D9]',
    north: 'from-[#FFD700] to-[#FF6B35]',
    southern: 'from-[#FF6B35] to-[#FFD700]'
  };

  const groupedLanguages = {
    west: languages.filter(l => l.region === 'west'),
    east: languages.filter(l => l.region === 'east'),
    central: languages.filter(l => l.region === 'central'),
    north: languages.filter(l => l.region === 'north'),
    southern: languages.filter(l => l.region === 'southern')
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#FFB6D9] via-[#9D4EDD] to-[#00FF94]">
      {/* Floating Elements */}
      <div className="absolute bottom-5 sm:bottom-20 left-5 sm:left-20 text-2xl sm:text-6xl animate-float" style={{ animationDelay: '1s' }}>⭐</div>
      
      <div className="relative z-10 p-2 sm:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-4 sm:mb-12 flex items-center gap-2 sm:gap-6">
            <button
              onClick={onBack}
              className="w-8 h-8 sm:w-16 sm:h-16 rounded-lg sm:rounded-2xl bg-gradient-to-r from-[#9D4EDD] to-[#FFB6D9] game-border retro-shadow flex items-center justify-center hover:scale-110 hover:retro-shadow-lg transition-all group"
              aria-label="Back to interface select"
            >
              <Home className="w-4 h-4 sm:w-8 sm:h-8 text-white" strokeWidth={3} />
            </button>
            <div className="flex-1 bg-white rounded-xl sm:rounded-3xl p-3 sm:p-8 game-border retro-shadow">
              <div className="flex items-center gap-2 sm:gap-4">
                <Globe className="w-6 h-6 sm:w-12 sm:h-12 text-[#FF1493]" />
                <div>
                  <h1 className="text-lg sm:text-5xl text-transparent bg-gradient-to-r from-[#FF1493] to-[#00FF94] bg-clip-text uppercase tracking-wide">
                    {isEnglish ? 'Pick Your Quest!' : 'Choisissez Votre Quête!'}
                  </h1>
                  <p className="text-xs sm:text-2xl text-[#4A4A4A] mt-1 sm:mt-2">
                    {isEnglish ? 'Choose an African language to begin' : 'Choisissez une langue africaine'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Language Grid by Region */}
          <div className="space-y-4 sm:space-y-12">
            {Object.entries(groupedLanguages).map(([region, langs]) => (
              <div key={region} className="animate-[fadeIn_0.6s_ease-in]">
                <div className="mb-2 sm:mb-8">
                  <div className={`inline-flex items-center gap-2 sm:gap-4 px-3 sm:px-8 py-2 sm:py-5 bg-gradient-to-r ${regionColors[region as keyof typeof regionColors]} rounded-xl sm:rounded-3xl game-border retro-shadow-lg`}>
                    <span className="text-lg sm:text-5xl">{regionEmojis[region as keyof typeof regionEmojis]}</span>
                    <h2 className="text-white text-sm sm:text-4xl uppercase tracking-wider">
                      {regionNames[region as keyof typeof regionNames]}
                    </h2>
                    <span className="bg-white text-[#1A1A1A] px-2 sm:px-5 py-1 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-xl game-border retro-shadow-sm">
                      {langs.length} {isEnglish ? 'languages' : 'langues'}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6">
                  {langs.map((language) => (
                    <LanguageCard
                      key={language.id}
                      language={language}
                      onClick={() => onSelectLanguage(language.id)}
                      interfaceLanguage={interfaceLanguage}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-4 sm:mt-16 text-center">
            <div className="bg-white rounded-xl sm:rounded-3xl p-3 sm:p-8 game-border retro-shadow inline-block">
              <p className="text-sm sm:text-3xl text-[#1A1A1A] flex items-center gap-2 sm:gap-4">
                <Sparkles className="w-4 h-4 sm:w-8 sm:h-8 text-[#FFD700]" />
                {isEnglish ? 'More epic languages coming soon!' : 'Plus de langues épiques bientôt!'}
                <Sparkles className="w-4 h-4 sm:w-8 sm:h-8 text-[#FFD700]" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface LanguageCardProps {
  language: Language;
  onClick: () => void;
  interfaceLanguage: InterfaceLanguage;
}

function LanguageCard({ language, onClick, interfaceLanguage }: LanguageCardProps) {
  const displayName = interfaceLanguage === 'en' ? language.name : language.nameFr;
  
  return (
    <button
      onClick={onClick}
      className="group bg-white rounded-xl sm:rounded-3xl p-3 sm:p-8 game-border retro-shadow hover:retro-shadow-lg hover:scale-105 transition-all duration-300 text-left transform"
    >
      <div className="flex flex-col gap-2 sm:gap-5">
        {/* Flags Row */}
        <div className="flex gap-1 sm:gap-3 flex-wrap justify-center">
          {language.flags.map((flag, idx) => (
            <div key={idx} className="transform transition-transform group-hover:scale-125 group-hover:rotate-6">
              <FlagIcon country={flag} size="sm" className="sm:hidden" />
              <FlagIcon country={flag} size="lg" className="hidden sm:block" />
            </div>
          ))}
        </div>
        
        {/* Language Info */}
        <div className="space-y-1 sm:space-y-3 text-center">
          <h3 className="text-sm sm:text-3xl text-[#1A1A1A] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#FF1493] group-hover:to-[#00FF94] group-hover:bg-clip-text transition-all uppercase tracking-wide">
            {displayName}
          </h3>
          <p className="text-xs sm:text-xl text-[#4A4A4A]">
            {language.speakers}
          </p>
          
          {/* Start Button */}
          <div className="pt-1 sm:pt-3">
            <div className="bg-gradient-to-r from-[#FF1493] to-[#00FF94] px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-2xl game-border retro-shadow-sm opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100">
              <div className="flex items-center justify-center gap-1 sm:gap-2 text-white">
                <Star className="w-3 h-3 sm:w-5 sm:h-5 fill-white animate-pulse" />
                <span className="text-xs sm:text-xl uppercase tracking-wider">
                  {interfaceLanguage === 'en' ? 'START!' : 'COMMENCER!'}
                </span>
                <Star className="w-3 h-3 sm:w-5 sm:h-5 fill-white animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
