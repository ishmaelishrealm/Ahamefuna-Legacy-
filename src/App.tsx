import { useState, useEffect } from 'react';
import { InterfaceLanguage, AfricanLanguage, UserProgress, Lesson } from './types';
import { InterfaceLanguageSelector } from './features/language-select/InterfaceLanguageSelector';
import { LanguageSelectionScreen } from './features/language-select/LanguageSelectionScreen';
import { LearningPath } from './features/lessons/LearningPath';
import { LessonScreen } from './features/lessons/LessonScreen';
import { LessonComplete } from './features/lessons/LessonComplete';
import { AuthScreen } from './components/auth/AuthScreen';
import { useAuth } from './contexts/AuthContext';
import { getLanguageById } from './data/languages';
import { getStagesForLanguage, getLessonById } from './data/lessons';
import { saveUserProgress } from './utils/userData';

type Screen = 'auth' | 'interface-select' | 'language-select' | 'path' | 'lesson' | 'complete';

function App() {
  const { user, userData, isGuest, loading } = useAuth();
  const [currentScreen, setCurrentScreen] = useState<Screen>('auth');
  const [interfaceLanguage, setInterfaceLanguage] = useState<InterfaceLanguage>('en');
  const [currentLanguage, setCurrentLanguage] = useState<AfricanLanguage | null>(null);
  const [userProgressMap, setUserProgressMap] = useState<Record<string, UserProgress>>({});
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [lastCompletedXP, setLastCompletedXP] = useState(0);

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedInterface = localStorage.getItem('afroslang_interface');
    const savedProgress = localStorage.getItem('afroslang_progress');
    const savedCurrentLang = localStorage.getItem('afroslang_current_language');

    if (savedInterface) {
      setInterfaceLanguage(savedInterface as InterfaceLanguage);
    }

    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      
      // Check and reset hearts if 24 hours passed, and normalize data
      const updatedProgress = { ...progress };
      Object.keys(updatedProgress).forEach(langId => {
        const prog = updatedProgress[langId];
        // Ensure completedLessons is always an array
        if (!prog.completedLessons) {
          prog.completedLessons = [];
        }
        if (prog.heartsResetTime && Date.now() >= prog.heartsResetTime) {
          prog.hearts = 5;
          prog.heartsResetTime = null;
        }
      });
      setUserProgressMap(updatedProgress);
    }

    if (savedCurrentLang && savedProgress) {
      setCurrentLanguage(savedCurrentLang as AfricanLanguage);
      setCurrentScreen('path');
    } else if (savedInterface) {
      setCurrentScreen('language-select');
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (Object.keys(userProgressMap).length > 0) {
      localStorage.setItem('afroslang_progress', JSON.stringify(userProgressMap));
    }
  }, [userProgressMap]);

  useEffect(() => {
    if (currentLanguage) {
      localStorage.setItem('afroslang_current_language', currentLanguage);
    }
  }, [currentLanguage]);

  useEffect(() => {
    localStorage.setItem('afroslang_interface', interfaceLanguage);
  }, [interfaceLanguage]);

  const handleInterfaceLanguageSelect = (lang: InterfaceLanguage) => {
    setInterfaceLanguage(lang);
    setCurrentScreen('language-select');
  };

  const handleLanguageToLearnSelect = (languageId: string) => {
    const lang = languageId as AfricanLanguage;
    setCurrentLanguage(lang);

    // Initialize progress if not exists
    if (!userProgressMap[lang]) {
      const newProgress: UserProgress = {
        languageId: lang,
        xp: 0,
        level: 1,
        hearts: 5,
        heartsResetTime: null,
        streak: 0,
        lastPracticeDate: null,
        lessonsCompleted: 0,
        wordsLearned: 0,
        mistakeCount: 0,
        completedLessons: [],
        currentStage: 1
      };
      setUserProgressMap(prev => ({ ...prev, [lang]: newProgress }));
    }

    setCurrentScreen('path');
  };

  const handleStartLesson = (lesson: Lesson) => {
    setActiveLesson(lesson);
    setCurrentScreen('lesson');
  };

  const handleLessonComplete = async (xpEarned: number, heartsLost: number, heartsGained: number) => {
    if (!currentLanguage || !activeLesson) return;

    setLastCompletedXP(xpEarned);

    // Save to Firebase if user is authenticated
    if (user && !isGuest) {
      await saveUserProgress(user.uid, currentLanguage, activeLesson.id, xpEarned, heartsLost);
    }

    setUserProgressMap(prev => {
      const current = prev[currentLanguage] || {
        languageId: currentLanguage,
        xp: 0,
        level: 1,
        hearts: 5,
        heartsResetTime: null,
        streak: 0,
        lastPracticeDate: null,
        lessonsCompleted: 0,
        wordsLearned: 0,
        mistakeCount: 0,
        completedLessons: [],
        currentStage: 1
      };

      const newXp = current.xp + xpEarned;
      const newLevel = Math.floor(newXp / 100) + 1;
      
      // Calculate new hearts: subtract lost, add gained, max at 5
      let newHearts = Math.min(5, current.hearts - heartsLost + heartsGained);
      let newResetTime = current.heartsResetTime;

      if (newHearts === 0) {
        // Set reset time to 7 hours from now
        newResetTime = Date.now() + (7 * 60 * 60 * 1000);
      } else if (newHearts > 0 && current.heartsResetTime) {
        // If they had no hearts but now have some, clear the reset timer
        newResetTime = null;
      }

      // Update streak
      const today = new Date().toDateString();
      const lastDate = current.lastPracticeDate;
      let newStreak = current.streak;

      if (!lastDate || lastDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (lastDate === yesterday.toDateString()) {
          newStreak += 1;
        } else {
          newStreak = 1;
        }
      }

      // Add lesson to completed list if not already there
      const currentCompletedLessons = current.completedLessons || [];
      const completedLessons = currentCompletedLessons.includes(activeLesson.id)
        ? currentCompletedLessons
        : [...currentCompletedLessons, activeLesson.id];

      return {
        ...prev,
        [currentLanguage]: {
          ...current,
          xp: newXp,
          level: newLevel,
          hearts: newHearts,
          heartsResetTime: newResetTime,
          streak: newStreak,
          lastPracticeDate: today,
          lessonsCompleted: current.lessonsCompleted + 1,
          wordsLearned: current.wordsLearned + 3,
          mistakeCount: heartsLost > 0 ? current.mistakeCount + heartsLost : current.mistakeCount,
          completedLessons
        }
      };
    });

    setCurrentScreen('complete');
  };

  const handleContinueAfterComplete = () => {
    setCurrentScreen('path');
  };

  const handleBackToLanguageSelect = () => {
    setCurrentScreen('language-select');
  };

  const handleExitLesson = () => {
    setCurrentScreen('path');
  };

  const getCurrentProgress = (): UserProgress => {
    if (!currentLanguage) {
      return {
        languageId: 'swahili',
        xp: 0,
        level: 1,
        hearts: 5,
        heartsResetTime: null,
        streak: 0,
        lastPracticeDate: null,
        lessonsCompleted: 0,
        wordsLearned: 0,
        mistakeCount: 0,
        completedLessons: [],
        currentStage: 1
      };
    }

    return userProgressMap[currentLanguage] || {
      languageId: currentLanguage,
      xp: 0,
      level: 1,
      hearts: 5,
      heartsResetTime: null,
      streak: 0,
      lastPracticeDate: null,
      lessonsCompleted: 0,
      wordsLearned: 0,
      mistakeCount: 0,
      completedLessons: [],
      currentStage: 1
    };
  };

  // Show loading screen while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="text-white text-xl">Loading Afroslang...</div>
      </div>
    );
  }

  // Show authentication screen if not logged in and not in guest mode
  if (!user && !isGuest && currentScreen === 'auth') {
    return <AuthScreen />;
  }

  // Redirect to interface select if authenticated
  if ((user || isGuest) && currentScreen === 'auth') {
    setCurrentScreen('interface-select');
  }

  return (
    <>
      {currentScreen === 'interface-select' && (
        <InterfaceLanguageSelector onSelect={handleInterfaceLanguageSelect} />
      )}

      {currentScreen === 'language-select' && (
        <LanguageSelectionScreen
          interfaceLanguage={interfaceLanguage}
          onSelectLanguage={handleLanguageToLearnSelect}
          onBack={() => setCurrentScreen('interface-select')}
        />
      )}

      {currentScreen === 'path' && currentLanguage && (
        <LearningPath
          interfaceLanguage={interfaceLanguage}
          stages={getStagesForLanguage(currentLanguage)}
          progress={getCurrentProgress()}
          onStartLesson={handleStartLesson}
          onBackToLanguageSelect={() => setCurrentScreen('language-select')}
        />
      )}

      {currentScreen === 'lesson' && currentLanguage && activeLesson && (
        <LessonScreen
          interfaceLanguage={interfaceLanguage}
          lesson={activeLesson}
          languageName={getLanguageById(currentLanguage)?.name || ''}
          hearts={getCurrentProgress().hearts}
          onComplete={handleLessonComplete}
          onExit={handleExitLesson}
          onBackToLanguageSelect={() => setCurrentScreen('language-select')}
        />
      )}

      {currentScreen === 'complete' && (
        <LessonComplete
          interfaceLanguage={interfaceLanguage}
          xpEarned={lastCompletedXP}
          onContinue={handleContinueAfterComplete}
          onBackToLanguageSelect={() => setCurrentScreen('language-select')}
        />
      )}
    </>
  );
}

export default App;
