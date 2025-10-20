import { useState, useEffect } from 'react';
import { InterfaceLanguage, Stage, Lesson, UserProgress } from '../types';
import { Lock, Star, CheckCircle2, Trophy, Sparkles, Flame, Zap, Heart, Clock, Home } from 'lucide-react';

interface LearningPathProps {
  interfaceLanguage: InterfaceLanguage;
  stages: Stage[];
  progress: UserProgress;
  onStartLesson: (lesson: Lesson) => void;
  onBackToLanguageSelect: () => void;
}

export function LearningPath({ interfaceLanguage, stages, progress, onStartLesson, onBackToLanguageSelect }: LearningPathProps) {
  const isEnglish = interfaceLanguage === 'en';
  const [timeRemaining, setTimeRemaining] = useState('');

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
    // First lesson is always unlocked
    if (lessonIndex === 0) return true;
    
    // Check if all previous lessons in all stages are completed
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

  const getLessonIcon = (type: Lesson['type']) => {
    const icons = {
      vocabulary: '📚',
      grammar: '📝',
      writing: '✍️',
      culture: '🎭'
    };
    return icons[type];
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

  // Safety check
  if (!stages || stages.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFB6D9] via-[#9D4EDD] to-[#00FF94] p-6">
        <div className="text-center space-y-8 bg-white rounded-[3rem] p-16 retro-shadow-lg game-border max-w-2xl">
          <div className="text-8xl animate-bounce">📚</div>
          <div>
            <h2 className="text-5xl text-[#1A1A1A] mb-4">
              {isEnglish ? 'Lessons Coming Soon!' : 'Leçons à venir!'}
            </h2>
            <p className="text-2xl text-[#4A4A4A]">
              {isEnglish 
                ? 'We\'re cooking up something awesome!'
                : 'Nous préparons quelque chose d\'extraordinaire!'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#FFB6D9] via-[#9D4EDD] to-[#00FF94] py-12 px-6">
      {/* Floating game elements */}
      <div className="absolute top-10 left-10 text-6xl animate-float">🌟</div>
      <div className="absolute top-40 right-20 text-6xl animate-float" style={{ animationDelay: '1s' }}>⚡</div>
      <div className="absolute bottom-20 left-1/4 text-6xl animate-float" style={{ animationDelay: '2s' }}>🎮</div>
      <div className="absolute bottom-40 right-1/3 text-6xl animate-float" style={{ animationDelay: '1.5s' }}>🔥</div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Home Button - Top Right */}
        <div className="flex justify-end mb-6 animate-fadeIn">
          <button
            onClick={onBackToLanguageSelect}
            className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#9D4EDD] to-[#FFB6D9] game-border retro-shadow flex items-center justify-center hover:scale-110 hover:retro-shadow-lg transition-all group"
            aria-label="Back to language selection"
          >
            <Home className="w-8 h-8 text-white" strokeWidth={3} />
          </button>
        </div>

        {/* Header - Game Style */}
        <div className="text-center mb-12 space-y-6 animate-fadeIn">
          <div className="inline-block relative">
            <div className="bg-white rounded-3xl p-8 game-border retro-shadow-lg">
              <div className="flex items-center gap-6">
                <div className="w-28 h-28 bg-gradient-to-br from-[#FFD700] to-[#FF6B35] rounded-2xl flex items-center justify-center retro-shadow game-border animate-pulse">
                  <Trophy className="w-16 h-16 text-white" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-8 h-8 text-[#FFD700]" />
                    <span className="text-4xl text-[#1A1A1A]">{progress.xp} XP</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Flame className="w-6 h-6 text-[#FF1493]" />
                    <span className="text-2xl text-[#4A4A4A]">Level {progress.level}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 game-border retro-shadow">
            <h1 className="text-5xl text-transparent bg-gradient-to-r from-[#FF1493] via-[#9D4EDD] to-[#00FF94] bg-clip-text uppercase tracking-wide mb-3">
              {isEnglish ? '🎮 Your Quest' : '🎮 Votre Quête'}
            </h1>
            <p className="text-2xl text-[#4A4A4A]">
              {(progress.completedLessons || []).length} {isEnglish ? 'missions completed!' : 'missions terminées!'}
            </p>
          </div>
        </div>

        {/* No Hearts Warning */}
        {progress.hearts === 0 && progress.heartsResetTime && (
          <div className="mb-12 animate-fadeIn">
            <div className="bg-white rounded-3xl p-10 game-border retro-shadow-lg">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#FF1493] to-[#FF69B4] rounded-2xl flex items-center justify-center game-border retro-shadow animate-pulse">
                  <Heart className="w-14 h-14 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl text-transparent bg-gradient-to-r from-[#FF1493] to-[#9D4EDD] bg-clip-text mb-3 uppercase tracking-wide">
                    {isEnglish ? '💔 Out of Hearts!' : '💔 Plus de Cœurs!'}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-7 h-7 text-[#FF1493]" />
                    <p className="text-3xl text-[#1A1A1A]">
                      {timeRemaining} {isEnglish ? 'till refill' : 'avant rechargement'}
                    </p>
                  </div>
                  <p className="text-2xl text-[#4A4A4A]">
                    {isEnglish 
                      ? '🌍 Try other languages while you wait!'
                      : '🌍 Essayez d\'autres langues en attendant!'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stages - Game Levels */}
        <div className="space-y-16">
          {stages.map((stage, stageIndex) => {
            const stageCompleted = stage.lessons.every(l => isLessonCompleted(l.id));
            const stageStarted = stage.lessons.some(l => isLessonCompleted(l.id));
            
            return (
              <div key={stage.id} className="space-y-8 animate-slideIn" style={{ animationDelay: `${stageIndex * 0.1}s` }}>
                {/* Stage Header - Game Level Style */}
                <div className="relative">
                  <div className={`bg-white rounded-3xl p-10 game-border retro-shadow-lg ${stageCompleted ? 'animate-neonGlow' : ''}`}>
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex items-center gap-6 flex-1">
                        <div className={`w-24 h-24 rounded-2xl flex items-center justify-center text-5xl game-border retro-shadow ${
                          stageCompleted 
                            ? 'bg-gradient-to-br from-[#00FF94] to-[#7FFF00] animate-pulse' 
                            : stageStarted
                            ? 'bg-gradient-to-br from-[#FFD700] to-[#FF6B35]'
                            : 'bg-gray-300'
                        }`}>
                          {stageCompleted ? '🏆' : stageStarted ? '⭐' : '🔒'}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="bg-gradient-to-r from-[#FF1493] to-[#9D4EDD] text-white px-6 py-2 rounded-xl text-xl uppercase tracking-wider game-border retro-shadow-sm">
                              {isEnglish ? 'LEVEL' : 'NIVEAU'} {stage.stageNumber}
                            </span>
                            {stageCompleted && (
                              <div className="flex items-center gap-2 bg-gradient-to-r from-[#00FF94] to-[#7FFF00] text-white px-4 py-2 rounded-xl game-border retro-shadow-sm">
                                <CheckCircle2 className="w-6 h-6" />
                                <span className="uppercase tracking-wider">{isEnglish ? 'COMPLETE!' : 'TERMINÉ!'}</span>
                              </div>
                            )}
                          </div>
                          <h2 className="text-4xl text-[#1A1A1A]">
                            {isEnglish ? stage.title : stage.titleFr}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lessons - Mission Cards */}
                <div className="grid grid-cols-1 gap-6 pl-0 md:pl-8">
                  {stage.lessons.map((lesson, lessonIndex) => {
                    const globalIndex = calculateGlobalLessonIndex(stage.stageNumber, lesson.lessonNumber);
                    const isUnlocked = isLessonUnlocked(lesson, globalIndex);
                    const isCompleted = isLessonCompleted(lesson.id);

                    return (
                      <div
                        key={lesson.id}
                        className="relative"
                        style={{ animationDelay: `${(stageIndex * 5 + lessonIndex) * 0.05}s` }}
                      >
                        <button
                          onClick={() => {
                            if (isUnlocked && lesson.exercises.length > 0 && !isCompleted && progress.hearts > 0) {
                              onStartLesson(lesson);
                            } else if (isCompleted) {
                              onStartLesson(lesson); // Allow replaying completed lessons
                            }
                          }}
                          disabled={!isUnlocked || lesson.exercises.length === 0 || (!isCompleted && progress.hearts === 0)}
                          className={`
                            relative w-full group
                            ${isUnlocked && lesson.exercises.length > 0 && (isCompleted || progress.hearts > 0) ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'}
                          `}
                        >
                          <div
                            className={`
                              bg-white rounded-2xl p-8 game-border transition-all duration-300
                              ${isCompleted
                                ? 'retro-shadow-lg bg-gradient-to-r from-[#00FF94]/20 to-[#7FFF00]/20'
                                : isUnlocked
                                ? 'retro-shadow hover:retro-shadow-lg hover:scale-105 hover:-translate-y-2'
                                : 'retro-shadow-sm'
                              }
                            `}
                          >
                            <div className="flex items-center gap-6">
                              {/* Icon */}
                              <div
                                className={`
                                  w-20 h-20 rounded-xl flex items-center justify-center text-4xl game-border retro-shadow-sm transition-transform duration-300
                                  ${isCompleted
                                    ? 'bg-gradient-to-br from-[#00FF94] to-[#7FFF00] group-hover:scale-110 group-hover:rotate-12'
                                    : isUnlocked
                                    ? 'bg-gradient-to-br from-[#FF1493] to-[#FF69B4] group-hover:scale-110 group-hover:-rotate-6'
                                    : 'bg-gray-300'
                                  }
                                `}
                              >
                                {isCompleted ? (
                                  <CheckCircle2 className="w-12 h-12 text-white" />
                                ) : isUnlocked ? (
                                  <span>{getLessonIcon(lesson.type)}</span>
                                ) : (
                                  <Lock className="w-10 h-10 text-gray-500" />
                                )}
                              </div>

                              {/* Content */}
                              <div className="flex-1 text-left">
                                <div className="flex items-center gap-3 mb-2">
                                  <span className="bg-[#1A1A1A] text-white px-4 py-1 rounded-lg text-sm uppercase tracking-wider">
                                    {isEnglish ? 'MISSION' : 'MISSION'} {lesson.lessonNumber}
                                  </span>
                                  {isCompleted && (
                                    <div className="flex items-center gap-2 text-[#00FF94]">
                                      <Star className="w-5 h-5 fill-current" />
                                      <span className="text-lg">+{lesson.xpReward} XP</span>
                                    </div>
                                  )}
                                </div>
                                <h3 className="text-2xl text-[#1A1A1A] mb-2">
                                  {isEnglish ? lesson.title : lesson.titleFr}
                                </h3>
                                <div className="flex items-center gap-3">
                                  <span className="bg-gray-100 px-4 py-2 rounded-lg text-[#4A4A4A] game-border">
                                    {lesson.exercises.length} {isEnglish ? 'questions' : 'questions'}
                                  </span>
                                  {isUnlocked && !isCompleted && progress.hearts > 0 && (
                                    <span className="bg-gradient-to-r from-[#FFD700] to-[#FF6B35] text-white px-6 py-2 rounded-lg flex items-center gap-2 game-border retro-shadow-sm animate-pulse">
                                      <Sparkles className="w-4 h-4" />
                                      {isEnglish ? 'START!' : 'COMMENCER!'}
                                    </span>
                                  )}
                                  {isUnlocked && !isCompleted && progress.hearts === 0 && (
                                    <span className="bg-gradient-to-r from-[#FF1493] to-[#FF69B4] text-white px-6 py-2 rounded-lg flex items-center gap-2 game-border retro-shadow-sm">
                                      <Heart className="w-4 h-4" />
                                      {isEnglish ? 'NO HEARTS' : 'PLUS DE CŒURS'}
                                    </span>
                                  )}
                                </div>
                              </div>

                              {/* Play Arrow */}
                              {isUnlocked && !isCompleted && progress.hearts > 0 && (
                                <div className="text-6xl text-[#FF1493] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-4 transition-all duration-300 animate-pulse">
                                  ▶
                                </div>
                              )}
                              {isUnlocked && !isCompleted && progress.hearts === 0 && (
                                <div className="text-6xl text-gray-400">
                                  🔒
                                </div>
                              )}
                            </div>
                          </div>
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Stage Completion Badge */}
                {stageCompleted && (
                  <div className="bg-white rounded-3xl p-8 game-border retro-shadow-lg animate-fadeIn">
                    <div className="flex items-center justify-center gap-6">
                      <Trophy className="w-16 h-16 text-[#FFD700] animate-bounce" />
                      <div className="text-center">
                        <p className="text-4xl text-transparent bg-gradient-to-r from-[#00FF94] to-[#7FFF00] bg-clip-text uppercase tracking-wide">
                          🎊 {isEnglish ? 'LEVEL COMPLETE!' : 'NIVEAU TERMINÉ!'} 🎊
                        </p>
                        <p className="text-xl text-[#4A4A4A] mt-2">
                          {isEnglish ? 'You\'re on FIRE!' : 'Vous êtes EN FEU!'}
                        </p>
                      </div>
                      <Trophy className="w-16 h-16 text-[#FFD700] animate-bounce" style={{ animationDelay: '0.5s' }} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Motivation */}
        <div className="mt-16 text-center animate-fadeIn">
          <div className="bg-white rounded-3xl p-10 game-border retro-shadow-lg inline-block">
            <div className="flex items-center gap-4">
              <Flame className="w-12 h-12 text-[#FF1493] animate-pulse" />
              <span className="text-3xl text-[#1A1A1A]">
                {isEnglish ? '⚡ Keep crushing it! ⚡' : '⚡ Continuez comme ça! ⚡'}
              </span>
              <Flame className="w-12 h-12 text-[#FF1493] animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
