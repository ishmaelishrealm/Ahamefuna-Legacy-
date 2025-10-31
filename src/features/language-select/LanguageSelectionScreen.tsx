import { Language, InterfaceLanguage } from '../../types';
import { languages } from '../../data/languages';
import { FlagIcon } from './FlagIcon';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { AfroslangMascot } from '../../components/mascot/AfroslangMascot';

interface LanguageSelectionScreenProps {
  interfaceLanguage: InterfaceLanguage;
  onSelectLanguage: (languageId: string) => void;
  onBack: () => void;
  onInterfaceLanguageChange?: (lang: InterfaceLanguage) => void;
}

export function LanguageSelectionScreen({ 
  interfaceLanguage, 
  onSelectLanguage,
  onBack,
  onInterfaceLanguageChange
}: LanguageSelectionScreenProps) {
  const isEnglish = interfaceLanguage === 'en';
  const [showSiteLanguageDropdown, setShowSiteLanguageDropdown] = useState(false);

  const brown = '#6B4F3A'; // dark brown
  const lightBrown = '#A67B5B';
  const green = '#10B981';
  const white = '#FFFFFF';

  const handleSiteLanguageChange = (lang: InterfaceLanguage) => {
    if (onInterfaceLanguageChange) {
      onInterfaceLanguageChange(lang);
    }
    setShowSiteLanguageDropdown(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8 sm:py-12">
        {/* Logo and Site Language Selector - moved from header */}
        <div className="flex items-center justify-between mb-8">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <AfroslangMascot 
              size={40} 
              variant="logo" 
              animated={false} 
              interactive={false}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-gray-900">
              afroslang
            </span>
          </div>

          {/* Right: Site Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowSiteLanguageDropdown(!showSiteLanguageDropdown)}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              <span className="text-sm font-medium">
                {isEnglish ? 'SITE LANGUAGE: ENGLISH' : 'LANGUE DU SITE: FRANÇAIS'}
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Dropdown Menu */}
            {showSiteLanguageDropdown && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowSiteLanguageDropdown(false)}
                />
                <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20 min-w-[200px]">
                  <button
                    onClick={() => handleSiteLanguageChange('en')}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                      isEnglish ? 'bg-gray-50 font-semibold' : ''
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleSiteLanguageChange('fr')}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                      !isEnglish ? 'bg-gray-50 font-semibold' : ''
                    }`}
                  >
                    Français
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-center">
          {isEnglish ? 'Choose an African language to begin' : 'Choisissez une langue africaine pour commencer'}
        </h1>

        {/* Language Grid by Region */}
        <div className="space-y-12">
          {(() => {
            const groupedLanguages = {
              west: languages.filter(l => l.region === 'west'),
              east: languages.filter(l => l.region === 'east'),
              central: languages.filter(l => l.region === 'central'),
              north: languages.filter(l => l.region === 'north'),
              southern: languages.filter(l => l.region === 'southern')
            };

            const regionNames = {
              west: isEnglish ? 'West Africa' : 'Afrique de l\'Ouest',
              east: isEnglish ? 'East Africa' : 'Afrique de l\'Est',
              central: isEnglish ? 'Central Africa' : 'Afrique Centrale',
              north: isEnglish ? 'North Africa' : 'Afrique du Nord',
              southern: isEnglish ? 'Southern Africa' : 'Afrique Australe'
            };

            return Object.entries(groupedLanguages).map(([region, langs]) => {
              if (langs.length === 0) return null;
              
              return (
                <div key={region} className="space-y-4">
                  {/* Region Header */}
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {regionNames[region as keyof typeof regionNames]}
                    </h2>
                    <span className="text-sm text-gray-600">
                      {langs.length} {isEnglish ? 'languages' : 'langues'}
                    </span>
                  </div>

                  {/* Language Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
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
              );
            });
          })()}
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
      className="group bg-white rounded-xl border-2 border-gray-200 hover:border-green-500 hover:shadow-lg transition-all duration-200 p-6 text-center"
    >
      <div className="flex flex-col items-center gap-3">
        {/* Flag */}
        <div className="flex gap-2 justify-center">
          {language.flags.map((flag, idx) => (
            <div key={idx} className="transform transition-transform group-hover:scale-110">
              <FlagIcon country={flag} size="lg" />
            </div>
          ))}
        </div>
        
        {/* Language Name */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {displayName}
          </h3>
          <p className="text-sm text-gray-600">
            {language.speakers}
          </p>
        </div>
      </div>
    </button>
  );
}
