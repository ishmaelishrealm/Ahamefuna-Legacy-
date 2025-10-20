import { UserProgress, InterfaceLanguage } from '../types';
import { getLanguageById } from '../data/languages';
import { Heart, Flame, Award, BookOpen, Sparkles, Trophy, Target } from 'lucide-react';
import { FlagIcon } from './FlagIcon';

interface DashboardProps {
  interfaceLanguage: InterfaceLanguage;
  progress: UserProgress;
  onStartLesson: (type: 'vocabulary' | 'grammar' | 'writing' | 'culture') => void;
  onChangeLang: () => void;
}

export function Dashboard({ 
  interfaceLanguage, 
  progress, 
  onStartLesson,
  onChangeLang 
}: DashboardProps) {
  const isEnglish = interfaceLanguage === 'en';
  const language = getLanguageById(progress.languageId);
  const displayName = language ? (isEnglish ? language.name : language.nameFr) : '';

  const heartsRemaining = progress.hearts;
  const heartsMax = 5;
  
  // Calculate time until hearts reset
  const getTimeUntilReset = () => {
    if (!progress.heartsResetTime) return '';
    const now = Date.now();
    const diff = progress.heartsResetTime - now;
    if (diff <= 0) return '';
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5E6] via-[#F9F9F9] to-[#E8F5F0]"></div>
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEuNSIgZmlsbD0iI0Y0QTMwMCIgb3BhY2l0eT0iMC4zIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-md border-b border-[#E5E5E5] px-6 py-5 shadow-sm">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#F4A300] via-[#FF5E73] to-[#006D48] rounded-2xl flex items-center justify-center text-3xl shadow-lg transform hover:scale-105 transition-transform">
                🌍
              </div>
              <div>
                <h2 className="text-[#1A1A1A] mb-1">LingoAfrica</h2>
                <button 
                  onClick={onChangeLang}
                  className="flex items-center gap-2 text-sm text-[#666666] hover:text-[#F4A300] transition-colors group"
                >
                  <span className="group-hover:underline">{displayName}</span>
                  {language?.flags[0] && <FlagIcon country={language.flags[0]} size="sm" />}
                </button>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="flex items-center gap-6">
              {/* Streak */}
              <div className="flex items-center gap-2 bg-gradient-to-r from-[#FF5E73]/10 to-[#FF8A9A]/10 px-4 py-2 rounded-full border border-[#FF5E73]/20">
                <Flame className="w-5 h-5 text-[#FF5E73]" />
                <div className="flex flex-col">
                  <span className="text-xs text-[#999999]">{isEnglish ? 'Streak' : 'Série'}</span>
                  <span className="text-[#1A1A1A]">{progress.streak}</span>
                </div>
              </div>

              {/* Hearts */}
              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border-2 border-[#E5E5E5] shadow-sm">
                <div className="flex gap-1">
                  {Array.from({ length: heartsMax }).map((_, i) => (
                    <Heart
                      key={i}
                      className={`w-5 h-5 transition-all ${
                        i < heartsRemaining 
                          ? 'fill-[#FF5E73] text-[#FF5E73] scale-110' 
                          : 'text-[#E5E5E5]'
                      }`}
                    />
                  ))}
                </div>
                {heartsRemaining < heartsMax && (
                  <span className="text-xs text-[#666666] bg-[#FFF5E6] px-2 py-1 rounded-full">
                    {getTimeUntilReset()}
                  </span>
                )}
              </div>

              {/* XP */}
              <div className="flex items-center gap-2 bg-gradient-to-r from-[#F4A300] to-[#FF5E73] px-5 py-3 rounded-full shadow-lg">
                <Award className="w-5 h-5 text-white" />
                <div className="flex flex-col text-white">
                  <span className="text-xs opacity-90">XP</span>
                  <span>{progress.xp}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-6 py-12">
          {/* Progress Overview */}
          <div className="bg-white/90 backdrop-blur-sm rounded-[2rem] p-8 shadow-xl mb-10 border-2 border-[#E5E5E5] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F4A300]/10 to-[#FF5E73]/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="w-7 h-7 text-[#F4A300]" />
                    <h1 className="text-[#1A1A1A]">
                      {isEnglish ? `Learning ${displayName}` : `Apprendre ${displayName}`}
                    </h1>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-[#F4A300]" />
                      <span className="text-[#666666]">
                        {isEnglish ? 'Level' : 'Niveau'} <span className="text-[#1A1A1A]">{progress.level}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-[#006D48]" />
                      <span className="text-[#666666]">
                        <span className="text-[#1A1A1A]">{progress.wordsLearned}</span> {isEnglish ? 'words learned' : 'mots appris'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#FF5E73]" />
                      <span className="text-[#666666]">
                        <span className="text-[#1A1A1A]">{progress.lessonsCompleted}</span> {isEnglish ? 'lessons' : 'leçons'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  {language?.flags.map((flag, idx) => (
                    <div key={idx} className="transform hover:scale-110 transition-transform">
                      <FlagIcon country={flag} size="xl" />
                    </div>
                  ))}
                </div>
              </div>

              {/* XP Progress Bar */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#666666]">
                    {isEnglish ? 'Progress to next level' : 'Progrès vers le niveau suivant'}
                  </span>
                  <span className="text-[#F4A300] bg-[#FFF5E6] px-3 py-1 rounded-full text-sm">
                    {progress.xp % 100}/100 XP
                  </span>
                </div>
                <div className="h-4 bg-[#E5E5E5] rounded-full overflow-hidden shadow-inner">
                  <div 
                    className="h-full bg-gradient-to-r from-[#F4A300] via-[#FF5E73] to-[#FF8A9A] rounded-full transition-all duration-700 ease-out relative"
                    style={{ width: `${(progress.xp % 100)}%` }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Paths */}
          <div>
            <h2 className="text-[#1A1A1A] mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-[#F4A300] to-[#FF5E73] rounded-full"></span>
              {isEnglish ? 'Choose Your Path' : 'Choisissez votre parcours'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <LearningCard
                icon={<BookOpen className="w-9 h-9 text-white" />}
                title={isEnglish ? 'Vocabulary' : 'Vocabulaire'}
                description={isEnglish ? 'Learn new words & phrases' : 'Apprendre de nouveaux mots'}
                color="from-[#F4A300] via-[#FF9500] to-[#F4A300]"
                gradient="from-[#F4A300]/20 to-[#FF9500]/5"
                onClick={() => onStartLesson('vocabulary')}
                disabled={heartsRemaining === 0}
              />
              
              <LearningCard
                icon={<span className="text-5xl">📝</span>}
                title={isEnglish ? 'Grammar' : 'Grammaire'}
                description={isEnglish ? 'Build sentences correctly' : 'Construire des phrases'}
                color="from-[#006D48] via-[#00A86B] to-[#006D48]"
                gradient="from-[#006D48]/20 to-[#00A86B]/5"
                onClick={() => onStartLesson('grammar')}
                disabled={heartsRemaining === 0}
              />
              
              <LearningCard
                icon={<span className="text-5xl">✍️</span>}
                title={isEnglish ? 'Writing Practice' : 'Pratique d\'écriture'}
                description={isEnglish ? 'Type and translate' : 'Taper et traduire'}
                color="from-[#FF5E73] via-[#FF8A9A] to-[#FF5E73]"
                gradient="from-[#FF5E73]/20 to-[#FF8A9A]/5"
                onClick={() => onStartLesson('writing')}
                disabled={heartsRemaining === 0}
              />
              
              <LearningCard
                icon={<span className="text-5xl">🎭</span>}
                title={isEnglish ? 'Cultural Stories' : 'Histoires culturelles'}
                description={isEnglish ? 'Proverbs & dialogues' : 'Proverbes et dialogues'}
                color="from-[#8B5CF6] via-[#A78BFA] to-[#8B5CF6]"
                gradient="from-[#8B5CF6]/20 to-[#A78BFA]/5"
                onClick={() => onStartLesson('culture')}
                disabled={progress.level < 5}
                locked={progress.level < 5}
                lockMessage={isEnglish ? `Unlock at Level 5` : `Débloquer au niveau 5`}
              />
            </div>
          </div>

          {/* No Hearts Warning */}
          {heartsRemaining === 0 && (
            <div className="mt-10 bg-gradient-to-r from-[#FFF5E6] to-[#FFE8EC] border-2 border-[#F4A300] rounded-3xl p-8 text-center shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-lg">
                <Heart className="w-9 h-9 text-[#FF5E73]" />
              </div>
              <h3 className="text-[#1A1A1A] mb-3">
                {isEnglish ? 'Out of hearts!' : 'Plus de cœurs!'}
              </h3>
              <p className="text-[#666666] max-w-md mx-auto">
                {isEnglish 
                  ? `Hearts will reset in ${getTimeUntilReset()}. Meanwhile, you can practice other languages!`
                  : `Les cœurs seront réinitialisés dans ${getTimeUntilReset()}. Entre-temps, vous pouvez pratiquer d'autres langues!`
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface LearningCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  gradient: string;
  onClick: () => void;
  disabled?: boolean;
  locked?: boolean;
  lockMessage?: string;
}

function LearningCard({ icon, title, description, color, gradient, onClick, disabled, locked, lockMessage }: LearningCardProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || locked}
      className={`
        relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#E5E5E5]
        transition-all duration-300 text-left overflow-hidden group
        ${disabled || locked 
          ? 'opacity-60 cursor-not-allowed' 
          : 'hover:border-[#F4A300] hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]'
        }
      `}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      <div className="relative z-10">
        <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg transform transition-all duration-300 ${!disabled && !locked ? 'group-hover:scale-110 group-hover:rotate-3' : ''}`}>
          {icon}
        </div>
        <h3 className="text-[#1A1A1A] mb-2">{title}</h3>
        <p className="text-[#666666] text-sm">{description}</p>
        
        {locked && lockMessage && (
          <div className="mt-4 flex items-center gap-2 text-xs text-[#999999]">
            <span>🔒</span>
            <span>{lockMessage}</span>
          </div>
        )}
      </div>
      
      {locked && (
        <div className="absolute top-4 right-4 text-3xl opacity-50">🔒</div>
      )}
    </button>
  );
}
