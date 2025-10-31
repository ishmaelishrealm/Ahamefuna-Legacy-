import { useState, useEffect } from 'react';
import { InterfaceLanguage, Stage, Lesson, UserProgress } from '../../types';
import { Lock, Star, CheckCircle2, Trophy, Sparkles, Flame, Zap, Heart, Clock, Home, Trophy as TrophyIcon, BookOpen, Store, User, Settings, Shield, Gem } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { getLanguageById } from '../../data/languages';
import { FlagIcon } from '../language-select/FlagIcon';

interface LearningPathProps {
  interfaceLanguage: InterfaceLanguage;
  stages: Stage[];
  progress: UserProgress;
  onStartLesson: (lesson: Lesson) => void;
  onBackToLanguageSelect: () => void;
  onNavigate?: (screen: 'leaderboard' | 'shop' | 'profile' | 'settings' | 'quests') => void;
  currentLanguageId?: string;
}

export function LearningPath({ 
  interfaceLanguage, 
  stages, 
  progress, 
  onStartLesson, 
  onBackToLanguageSelect,
  onNavigate,
  currentLanguageId
}: LearningPathProps) {
  const isEnglish = interfaceLanguage === 'en';
  const [timeRemaining, setTimeRemaining] = useState('');
  const [logoError, setLogoError] = useState(false);
  const [activeSidebarItem, setActiveSidebarItem] = useState<'learn' | 'leaderboard' | 'quests' | 'shop' | 'profile' | 'settings'>('learn');
  const { user, userData, isGuest } = useAuth();
  
  // Get current language data for flag display
  const currentLanguage = currentLanguageId ? getLanguageById(currentLanguageId) : null;

  // Update countdown timer
  useEffect(() => {
    if (!progress.heartsResetTime) return;

    const updateTimer = () => {
      const now = Date.now();
      const diff = progress.heartsResetTime! - now;
      
      if (diff <= 0) {
        setTimeRemaining('');
        return;
      }
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeRemaining(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    
    return () => clearInterval(interval);
  }, [progress.heartsResetTime]);

  const isLessonUnlocked = (lesson: Lesson, lessonIndex: number): boolean => {
    if (lessonIndex === 0) return true;
    
    let totalPreviousLessons = 0;
    for (const stage of stages) {
      for (const l of stage.lessons) {
        if (l.id === lesson.id) break;
        totalPreviousLessons++;
      }
      if (stage.lessons.find(l => l.id === lesson.id)) break;
    }
    
    return (progress.completedLessons || []).length >= totalPreviousLessons;
  };

  const isLessonCompleted = (lessonId: string): boolean => {
    return (progress.completedLessons || []).includes(lessonId);
  };

  const calculateGlobalLessonIndex = (stageNumber: number, lessonNumber: number): number => {
    let index = 0;
    for (let i = 0; i < stageNumber - 1; i++) {
      if (stages[i] && stages[i].lessons) {
        index += stages[i].lessons.length;
      }
    }
    return index + lessonNumber - 1;
  };

  const handleSidebarClick = (item: 'learn' | 'leaderboard' | 'quests' | 'shop' | 'profile' | 'settings') => {
    setActiveSidebarItem(item);
    if (item !== 'learn' && onNavigate) {
      onNavigate(item);
    }
  };

  // Get first lesson that's not completed or current lesson
  const getCurrentLesson = () => {
    for (const stage of stages) {
      for (const lesson of stage.lessons) {
        const globalIndex = calculateGlobalLessonIndex(stage.stageNumber, lesson.lessonNumber);
        if (isLessonUnlocked(lesson, globalIndex) && !isLessonCompleted(lesson.id)) {
          return { lesson, stage };
        }
      }
    }
    return null;
  };

  const currentLessonInfo = getCurrentLesson();
  const firstStage = stages[0];
  const firstLesson = firstStage?.lessons[0];

  // Safety check
  if (!stages || stages.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-8">
          <div className="text-8xl animate-bounce">📚</div>
          <h2 className="text-5xl text-gray-900 mb-4">
            {isEnglish ? 'Lessons Coming Soon!' : 'Leçons à venir!'}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Sidebar */}
      <div className="w-20 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col items-center py-6">
        {/* Logo/Mascot at top */}
        <button
          onClick={() => handleSidebarClick('learn')}
          className="mb-6 w-14 h-14 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          {logoError ? (
            <div className="w-12 h-12 rounded-full bg-green-500" />
          ) : (
            <img
              src="/afroslang-logo.png"
              alt="Afroslang mascot"
              className="w-12 h-12 rounded-full object-contain animate-bounce hover:scale-110 transition-transform"
              onError={() => setLogoError(true)}
            />
          )}
        </button>

        {/* Navigation Icons */}
        <div className="flex flex-col gap-4 flex-1">
          {/* Learn (active when on this page) */}
          <div className="relative group">
            <button
              onClick={() => handleSidebarClick('learn')}
              className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                activeSidebarItem === 'learn'
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              aria-label="Learn"
            >
              <Home className="w-6 h-6" />
            </button>
            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
              {isEnglish ? 'Learn' : 'Apprendre'}
            </div>
          </div>

          {/* Leaderboards */}
          <div className="relative group">
            <button
              onClick={() => handleSidebarClick('leaderboard')}
              className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                activeSidebarItem === 'leaderboard'
                  ? 'bg-yellow-400 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              aria-label="Leaderboards"
            >
              <TrophyIcon className="w-6 h-6" />
            </button>
            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
              {isEnglish ? 'Leaderboards' : 'Classements'}
            </div>
          </div>

          {/* Quests */}
          <div className="relative group">
            <button
              onClick={() => handleSidebarClick('quests')}
              className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                activeSidebarItem === 'quests'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              aria-label="Quests"
            >
              <Shield className="w-6 h-6" />
            </button>
            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
              {isEnglish ? 'Quests' : 'Quêtes'}
            </div>
          </div>

          {/* Shop */}
          <div className="relative group">
            <button
              onClick={() => handleSidebarClick('shop')}
              className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                activeSidebarItem === 'shop'
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              aria-label="Shop"
            >
              <Store className="w-6 h-6" />
            </button>
            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
              {isEnglish ? 'Shop' : 'Boutique'}
            </div>
          </div>

          {/* Profile */}
          <div className="relative group">
            <button
              onClick={() => handleSidebarClick('profile')}
              className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                activeSidebarItem === 'profile'
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              aria-label="Profile"
            >
              <User className="w-6 h-6" />
            </button>
            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
              {isEnglish ? 'Profile' : 'Profil'}
            </div>
          </div>

          {/* Settings */}
          <div className="relative group">
            <button
              onClick={() => handleSidebarClick('settings')}
              className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                activeSidebarItem === 'settings'
                  ? 'bg-gray-700 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              aria-label="Settings"
            >
              <Settings className="w-6 h-6" />
            </button>
            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
              {isEnglish ? 'Settings' : 'Paramètres'}
            </div>
          </div>
        </div>
      </div>

      {/* Central Content Area */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Top Banner */}
        {firstStage && (
          <div className="bg-green-500 text-white px-8 py-6 flex items-center justify-between">
            <div>
              <button className="flex items-center gap-2 text-white/90 hover:text-white mb-2">
                <span className="text-sm font-semibold uppercase">SECTION 1, UNIT 1</span>
              </button>
              <h1 className="text-2xl font-bold">
                {isEnglish ? firstStage.title : firstStage.titleFr}
              </h1>
            </div>
            <button className="text-white hover:bg-white/20 rounded-lg p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        )}

        {/* Lesson Path */}
        <div className="flex-1 px-8 py-8 relative">
          <div className="max-w-3xl mx-auto relative">
            {/* START Button */}
            {firstLesson && !isLessonCompleted(firstLesson.id) && (
              <div className="mb-8 flex justify-center">
                <button
                  onClick={() => {
                    if (progress.hearts > 0 || isGuest || userData?.subscription?.active) {
                      onStartLesson(firstLesson);
                    }
                  }}
                  disabled={progress.hearts === 0 && !isGuest && !userData?.subscription?.active}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold px-8 py-3 rounded-lg transition-colors disabled:opacity-50"
                >
                  {isEnglish ? 'START' : 'COMMENCER'}
                </button>
              </div>
            )}

            {/* Lesson Nodes - Vertical Path */}
            <div className="relative flex flex-col items-center gap-6 py-8">
              {stages.flatMap((stage, stageIndex) =>
                stage.lessons.map((lesson, lessonIndex) => {
                  const globalIndex = calculateGlobalLessonIndex(stage.stageNumber, lesson.lessonNumber);
                  const isUnlocked = isLessonUnlocked(lesson, globalIndex);
                  const isCompleted = isLessonCompleted(lesson.id);
                  const isCurrent = !isCompleted && isUnlocked && lesson === currentLessonInfo?.lesson;
                  const isLast = stageIndex === stages.length - 1 && lessonIndex === stage.lessons.length - 1;

                  return (
                    <div key={lesson.id} className="relative flex flex-col items-center">
                      {/* Connecting line above (except first lesson) */}
                      {!(stageIndex === 0 && lessonIndex === 0) && (
                        <div className="w-1 h-12 bg-gray-300 mb-0" />
                      )}

                      {/* Lesson Node */}
                      <button
                        onClick={() => {
                          if (isUnlocked && (progress.hearts > 0 || isGuest || userData?.subscription?.active || isCompleted)) {
                            onStartLesson(lesson);
                          }
                        }}
                        disabled={!isUnlocked || (progress.hearts === 0 && !isGuest && !userData?.subscription?.active && !isCompleted)}
                        className={`
                          relative w-16 h-16 rounded-full flex items-center justify-center transition-all
                          ${isCurrent
                            ? 'bg-green-500 ring-4 ring-green-300 scale-110 shadow-lg z-10'
                            : isCompleted
                            ? 'bg-green-400 ring-2 ring-green-300 z-10'
                            : isUnlocked
                            ? 'bg-gray-400 hover:bg-gray-500 z-10'
                            : 'bg-gray-300 opacity-50 z-10'
                          }
                        `}
                      >
                        {isCompleted ? (
                          <Star className="w-8 h-8 text-white fill-white" />
                        ) : isCurrent ? (
                          <Star className="w-8 h-8 text-white fill-white" />
                        ) : isUnlocked ? (
                          <Star className="w-8 h-8 text-white" />
                        ) : (
                          <Lock className="w-8 h-8 text-gray-500" />
                        )}
                      </button>

                      {/* Connecting line below (except last lesson) */}
                      {!isLast && (
                        <div className="w-1 h-12 bg-gray-300 mt-0" />
                      )}

                      {/* Treasure Chest or Trophy between some lessons */}
                      {lessonIndex < stage.lessons.length - 1 && (
                        <div className="absolute top-full mt-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                          <Trophy className="w-6 h-6 text-yellow-500" />
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Mascot - Positioned to right of path */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
              {logoError ? (
                <div className="w-32 h-32 rounded-full bg-green-500 flex items-center justify-center text-6xl animate-bounce cursor-pointer hover:scale-110 transition-transform">
                  🌍
                </div>
              ) : (
                <img
                  src="/afroslang-logo.png"
                  alt="Afroslang mascot"
                  className="w-32 h-32 rounded-full object-contain animate-bounce hover:scale-110 transition-transform cursor-pointer"
                  onError={() => setLogoError(true)}
                  onClick={() => {
                    // Could add mascot interaction - animate, speak, etc.
                  }}
                />
              )}
            </div>
          </div>

          {/* Bottom Section - Next Unit Preview */}
          {stages.length > 1 && (
            <div className="mt-16 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">
                {isEnglish ? 'Ask how someone is' : 'Demander comment quelqu\'un va'}
              </p>
              <div className="flex gap-4 justify-center">
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-6 py-2 rounded-lg">
                  {isEnglish ? 'JUMP HERE?' : 'SAUTER ICI?'}
                </button>
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-6 py-2 rounded-full w-12 h-12 flex items-center justify-center">
                  →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 flex-shrink-0 bg-white border-l border-gray-200 overflow-y-auto relative">
        {/* Top Stats Bar */}
        <div className="border-b border-gray-200 px-4 py-4 flex items-center justify-between">
          {currentLanguage && currentLanguage.flags && currentLanguage.flags.length > 0 && (
            <FlagIcon country={currentLanguage.flags[0]} size="md" />
          )}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-semibold">{progress.streak || 0}</span>
            </div>
            <div className="flex items-center gap-1">
              <Gem className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold">{userData?.gems || 500}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
              <span className="text-sm font-semibold">{progress.hearts}</span>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-4">
          {/* Unlock Leaderboards Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-gray-900">Unlock Leaderboards!</h3>
              <Shield className="w-6 h-6 text-gray-400" />
            </div>
            <p className="text-sm text-gray-600">
              {isEnglish 
                ? 'Complete 10 more lessons to start competing'
                : 'Terminez 10 leçons de plus pour commencer à rivaliser'}
            </p>
          </div>

          {/* Daily Quests Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-gray-900">Daily Quests</h3>
              <a href="#" className="text-sm text-blue-600 font-semibold">VIEW ALL</a>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-gray-600">
                {isEnglish ? 'Earn 10 XP' : 'Gagnez 10 XP'}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '0%' }} />
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>0 / 10</span>
              <Trophy className="w-4 h-4" />
            </div>
          </div>

          {/* Create Profile Card */}
          {!user && !isGuest && (
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900 mb-3">
                {isEnglish 
                  ? 'Create a profile to save your progress!'
                  : 'Créez un profil pour sauvegarder votre progression!'}
              </h3>
              <div className="space-y-2">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors uppercase">
                  {isEnglish ? 'CREATE A PROFILE' : 'CRÉER UN PROFIL'}
                </button>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors uppercase">
                  {isEnglish ? 'SIGN IN' : 'SE CONNECTER'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Links */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-4 py-4 mt-auto">
          <div className="flex flex-wrap gap-3 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-700">ABOUT</a>
            <a href="#" className="hover:text-gray-700">BLOG</a>
            <a href="#" className="hover:text-gray-700">STORE</a>
            <a href="#" className="hover:text-gray-700">EFFICACY</a>
            <a href="#" className="hover:text-gray-700">CAREERS</a>
            <a href="#" className="hover:text-gray-700">INVESTORS</a>
            <a href="#" className="hover:text-gray-700">TERMS</a>
            <a href="#" className="hover:text-gray-700">PRIVACY</a>
          </div>
        </div>
      </div>
    </div>
  );
}
