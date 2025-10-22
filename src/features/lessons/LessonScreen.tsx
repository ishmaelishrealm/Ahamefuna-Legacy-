import { useState, useEffect } from 'react';
import { InterfaceLanguage, Lesson, Exercise } from '../../types';
import { X, Heart, CheckCircle2, XCircle, Lightbulb, Sparkles, Zap, RotateCcw, Home } from 'lucide-react';
import { checkIgboAnswer } from '../../utils/igboTextUtils';
import { HeartsTimer } from '../../components/ui/HeartsTimer';
import { HeartsOutModal } from '../../components/ui/HeartsOutModal';
import { GuestLimitModal } from '../../components/ui/GuestLimitModal';
import { HeartsData, updateHearts, updateGuestHearts } from '../../utils/heartsTimer';

interface LessonScreenProps {
  interfaceLanguage: InterfaceLanguage;
  lesson: Lesson;
  languageName: string;
  hearts: number;
  heartsData?: HeartsData;
  isSubscribed?: boolean;
  userId?: string;
  isGuest?: boolean;
  onComplete: (xpEarned: number, heartsLost: number, heartsGained: number) => void;
  onExit: () => void;
  onBackToLanguageSelect: () => void;
}

interface ExerciseWithState extends Exercise {
  wasWrong?: boolean; // Track if this was previously answered wrong
  hasRetried?: boolean; // Track if redemption was attempted
}

export function LessonScreen({ 
  interfaceLanguage, 
  lesson,
  languageName,
  hearts,
  heartsData,
  isSubscribed = false,
  userId,
  isGuest = false,
  onComplete,
  onExit,
  onBackToLanguageSelect
}: LessonScreenProps) {
  const isEnglish = interfaceLanguage === 'en';
  
  // Initialize exercise queue with all exercises
  const [exerciseQueue, setExerciseQueue] = useState<ExerciseWithState[]>(() => 
    [...lesson.exercises].map(ex => ({ ...ex }))
  );
  const [currentExercise, setCurrentExercise] = useState<ExerciseWithState | null>(
    exerciseQueue[0] || null
  );
  const [correctAnswers, setCorrectAnswers] = useState(0);
  
  const [userAnswer, setUserAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [totalHeartsLost, setTotalHeartsLost] = useState(0);
  const [totalHeartsGained, setTotalHeartsGained] = useState(0);
  const [currentHearts, setCurrentHearts] = useState(hearts);
  const [showHeartsOutModal, setShowHeartsOutModal] = useState(false);
  const [showGuestLimitModal, setShowGuestLimitModal] = useState(false);

  const totalQuestions = lesson.exercises.length;
  const progress = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;

  // Check guest lesson limit
  useEffect(() => {
    if (isGuest) {
      // Get completed lessons count from localStorage
      const guestProgress = JSON.parse(localStorage.getItem('afroslang_guest_progress') || '{}');
      const completedLessons = Object.values(guestProgress.languages || {}).reduce((total: number, lang: any) => {
        return total + (lang.completedLessons?.length || 0);
      }, 0);
      
      if (completedLessons >= 3) {
        setShowGuestLimitModal(true);
      }
    }
  }, [isGuest]);

  useEffect(() => {
    // Reset answer when exercise changes
    setUserAnswer('');
    setShowFeedback(false);
  }, [currentExercise?.id]);

  if (!currentExercise) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-[#FFB6D9] via-[#9D4EDD] to-[#00FF94]">
        <div className="text-center space-y-6 bg-white rounded-3xl p-12 retro-shadow-lg game-border max-w-2xl">
          <div className="text-8xl mb-6 animate-bounce">📚</div>
          <h2 className="text-[#1A1A1A] text-4xl">
            {isEnglish ? 'No lessons available yet' : 'Aucune leçon disponible pour le moment'}
          </h2>
          <p className="text-[#4A4A4A] text-xl max-w-md mx-auto leading-relaxed">
            {isEnglish 
              ? 'More lessons are coming soon for this language! Check back later.'
              : 'Plus de leçons arrivent bientôt pour cette langue! Revenez plus tard.'}
          </p>
          <button
            onClick={onExit}
            className="mt-8 px-12 py-5 rounded-2xl bg-gradient-to-r from-[#FF1493] to-[#9D4EDD] text-white retro-shadow-lg game-border hover:scale-110 transition-all duration-300 text-xl uppercase tracking-wider"
          >
            {isEnglish ? '← Go Back' : '← Retour'}
          </button>
        </div>
      </div>
    );
  }

  // Get the correct answer based on interface language
  const getCorrectAnswer = () => {
    if (!isEnglish && currentExercise.correctAnswerFr) {
      return currentExercise.correctAnswerFr;
    }
    return currentExercise.correctAnswer;
  };

  // Get options based on interface language
  const getOptions = () => {
    if (!isEnglish && currentExercise.optionsFr) {
      return currentExercise.optionsFr;
    }
    return currentExercise.options || [];
  };

  const handleSubmit = () => {
    // Check if user has hearts (for non-subscribers)
    if (!isSubscribed && currentHearts <= 0) {
      setShowHeartsOutModal(true);
      return;
    }

    const correctAnswer = getCorrectAnswer();
    // Use Igbo text utility for better accent handling
    const correct = checkIgboAnswer(userAnswer, correctAnswer);
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      setCorrectAnswers(prev => prev + 1);
      
      // If this was a redemption, give half heart back
      if (currentExercise.wasWrong && !currentExercise.hasRetried) {
        setTotalHeartsGained(prev => prev + 0.5);
        setCurrentHearts(prev => Math.min(5, prev + 0.5));
      }
    } else {
      // Wrong answer - only lose hearts if not subscribed
      if (!isSubscribed) {
        if (currentExercise.wasWrong && !currentExercise.hasRetried) {
          // Failed redemption - lose another heart
          setTotalHeartsLost(prev => prev + 1);
          if (currentHearts > 0) {
            setCurrentHearts(prev => Math.max(0, prev - 1));
            
            // Update hearts in database/localStorage
            if (userId && !isGuest) {
              updateHearts(userId, 1);
            } else if (isGuest) {
              updateGuestHearts(1);
            }
          }
        } else if (!currentExercise.wasWrong) {
          // First time wrong - lose heart and add back to queue randomly
          setTotalHeartsLost(prev => prev + 1);
          if (currentHearts > 0) {
            setCurrentHearts(prev => Math.max(0, prev - 1));
            
            // Update hearts in database/localStorage
            if (userId && !isGuest) {
              updateHearts(userId, 1);
            } else if (isGuest) {
              updateGuestHearts(1);
            }
          }
        }
      }
        
      // Add this question back to the queue at a random position (not immediately next)
      const wrongExercise: ExerciseWithState = { 
        ...currentExercise, 
        wasWrong: true,
        hasRetried: false
      };
      
      // Insert at a random position in the remaining queue (at least 2 positions ahead)
      setExerciseQueue(prevQueue => {
        const newQueue = [...prevQueue];
        if (newQueue.length > 2) {
          const randomPos = Math.floor(Math.random() * (newQueue.length - 2)) + 2;
          newQueue.splice(randomPos, 0, wrongExercise);
        } else {
          newQueue.push(wrongExercise);
        }
        return newQueue;
      });
    }
  };

  const handleNext = () => {
    // Remove current exercise from queue
    const newQueue = exerciseQueue.slice(1);
    setExerciseQueue(newQueue);
    
    if (newQueue.length > 0) {
      setCurrentExercise(newQueue[0]);
      setUserAnswer('');
      setShowFeedback(false);
    } else {
      // Lesson complete - XP based only on correct answers
      const xpPerCorrect = Math.floor(lesson.xpReward / totalQuestions);
      const xpEarned = Math.max(correctAnswers * xpPerCorrect, 5);
      onComplete(xpEarned, totalHeartsLost, totalHeartsGained);
    }
  };

  const getLessonIcon = () => {
    const icons = {
      vocabulary: '📚',
      grammar: '📝',
      writing: '✍️',
      culture: '🎭'
    };
    return icons[lesson.type];
  };

  const answerColors = ['#FF1493', '#9D4EDD', '#FFD700', '#00FF94'];

  // Render hearts with half heart support and infinity for subscribers
  const renderHearts = () => {
    const hearts = [];
    
    // If subscribed, show infinity symbol
    if (isSubscribed) {
      return (
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#FF1493] to-[#FF69B4] scale-110 retro-shadow-sm game-border">
            <Heart className="w-6 h-6 fill-white text-white" />
          </div>
          <span className="text-2xl text-white font-bold">∞</span>
        </div>
      );
    }
    
    // For non-subscribers, show regular hearts
    const fullHearts = Math.floor(currentHearts);
    const hasHalfHeart = currentHearts % 1 !== 0;
    
    for (let i = 0; i < 5; i++) {
      const isFull = i < fullHearts;
      const isHalf = i === fullHearts && hasHalfHeart;
      
      hearts.push(
        <div
          key={i}
          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
            isFull || isHalf
              ? 'bg-gradient-to-br from-[#FF1493] to-[#FF69B4] scale-110 retro-shadow-sm' 
              : 'bg-gray-300'
          } game-border`}
        >
          {isHalf ? (
            <div className="relative w-6 h-6">
              <Heart className="absolute w-6 h-6 text-gray-300" />
              <div className="absolute inset-0 overflow-hidden" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}>
                <Heart className="w-6 h-6 fill-white text-white" />
              </div>
            </div>
          ) : (
            <Heart
              className={`w-6 h-6 ${
                isFull 
                  ? 'fill-white text-white' 
                  : 'text-gray-400'
              }`}
            />
          )}
        </div>
      );
    }
    
    return hearts;
  };

  const isRedemption = currentExercise.wasWrong && !currentExercise.hasRetried;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#FFB6D9] via-[#9D4EDD] to-[#00FF94]">
        {/* Header */}
        <div className="bg-white/95 backdrop-blur-md game-border border-b-0 px-1 sm:px-6 py-1 sm:py-4">
        <div className="max-w-6xl mx-auto">
          {/* Mobile Layout */}
          <div className="flex flex-col sm:hidden space-y-2">
            {/* Top Row - Exit and Progress */}
            <div className="flex items-center justify-between">
              <button
                onClick={onExit}
                className="p-1.5 bg-[#FF1493] hover:bg-[#FF69B4] rounded-lg transition-all retro-shadow-sm"
                aria-label="Exit lesson"
              >
                <X className="w-4 h-4 text-white" strokeWidth={3} />
              </button>
              
              <div className="bg-gradient-to-r from-[#FFD700] to-[#FF6B35] px-2 py-1 rounded-lg game-border retro-shadow-sm">
                <span className="text-white text-xs font-bold">
                  {correctAnswers}/{totalQuestions}
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-4 bg-[#2D2D2D] rounded-full overflow-hidden game-border p-0.5">
              <div 
                className="h-full bg-gradient-to-r from-[#00FF94] via-[#7FFF00] to-[#FFD700] rounded-full transition-all duration-500 relative overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              </div>
            </div>

            {/* Hearts and Home */}
            <div className="flex items-center justify-between">
              <div className="flex gap-0.5">
                {heartsData ? (
                  <HeartsTimer heartsData={heartsData} isSubscribed={isSubscribed} />
                ) : (
                  renderHearts()
                )}
              </div>
              
              <button
                onClick={onBackToLanguageSelect}
                className="p-1.5 bg-gradient-to-r from-[#9D4EDD] to-[#FFB6D9] hover:scale-110 rounded-lg transition-all retro-shadow-sm"
                aria-label="Back to language selection"
              >
                <Home className="w-4 h-4 text-white" strokeWidth={3} />
              </button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden sm:flex items-center gap-4 lg:gap-6">
            <button
              onClick={onExit}
              className="p-3 bg-[#FF1493] hover:bg-[#FF69B4] rounded-xl transition-all hover:scale-110 retro-shadow-sm"
              aria-label="Exit lesson"
            >
              <X className="w-6 h-6 text-white" strokeWidth={3} />
            </button>

            {/* Progress Bar */}
            <div className="flex-1 h-8 bg-[#2D2D2D] rounded-full overflow-hidden game-border p-1">
              <div 
                className="h-full bg-gradient-to-r from-[#00FF94] via-[#7FFF00] to-[#FFD700] rounded-full transition-all duration-500 relative overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              </div>
            </div>

            {/* Question Counter */}
            <div className="bg-gradient-to-r from-[#FFD700] to-[#FF6B35] px-6 py-2 rounded-xl game-border retro-shadow-sm">
              <span className="text-white text-xl uppercase tracking-wider">
                {correctAnswers}/{totalQuestions}
              </span>
            </div>

            {/* Hearts */}
            <div className="flex gap-2">
              {heartsData ? (
                <HeartsTimer heartsData={heartsData} isSubscribed={isSubscribed} />
              ) : (
                renderHearts()
              )}
            </div>
            
            {/* Home Button */}
            <button
              onClick={onBackToLanguageSelect}
              className="p-3 bg-gradient-to-r from-[#9D4EDD] to-[#FFB6D9] hover:scale-110 rounded-xl transition-all retro-shadow-sm group"
              aria-label="Back to language selection"
            >
              <Home className="w-6 h-6 text-white" strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>

        {/* Exercise Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-2 sm:p-8 max-w-5xl mx-auto w-full">
        {/* XP & Type indicator */}
        <div className="mb-2 sm:mb-8 flex flex-col sm:flex-row items-center gap-1 sm:gap-4">
          <div className="bg-white px-2 sm:px-8 py-1 sm:py-3 rounded-lg sm:rounded-2xl game-border retro-shadow-sm flex items-center gap-1 sm:gap-3">
            <span className="text-lg sm:text-4xl">{getLessonIcon()}</span>
            <div className="flex items-center gap-1 sm:gap-2">
              <Zap className="w-3 h-3 sm:w-6 sm:h-6 text-[#FFD700]" />
              <span className="text-sm sm:text-2xl text-[#1A1A1A]">
                {correctAnswers}/{totalQuestions} ✓
              </span>
            </div>
          </div>
          
          {/* Redemption Badge */}
          {isRedemption && !showFeedback && (
            <div className="bg-gradient-to-r from-[#9D4EDD] to-[#FFB6D9] px-2 sm:px-8 py-1 sm:py-3 rounded-lg sm:rounded-2xl game-border retro-shadow-sm animate-pulse">
              <div className="flex items-center gap-1 sm:gap-3 text-white">
                <RotateCcw className="w-3 h-3 sm:w-6 sm:h-6" />
                <span className="text-xs sm:text-xl uppercase tracking-wider">
                  {isEnglish ? 'REDEMPTION!' : 'RÉDEMPTION!'}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Question Box */}
        <div className="w-full bg-white rounded-xl sm:rounded-3xl p-3 sm:p-10 game-border retro-shadow-lg mb-3 sm:mb-10">
          <h2 className="text-lg sm:text-4xl text-center text-[#1A1A1A] leading-tight">
            {isEnglish ? currentExercise.question : currentExercise.questionFr}
          </h2>
          {isRedemption && !showFeedback && (
            <p className="text-center text-sm sm:text-2xl text-[#9D4EDD] mt-2 sm:mt-6">
              💜 {isEnglish ? 'Get half a heart back!' : 'Récupérez un demi-cœur!'}
            </p>
          )}
        </div>

        {/* Multiple Choice */}
        {currentExercise.type === 'multiple-choice' && currentExercise.options && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 w-full">
            {getOptions().map((option, index) => {
              const isSelected = userAnswer === option;
              const isCorrectAnswer = option === getCorrectAnswer();
              const showCorrect = showFeedback && isCorrectAnswer;
              const showIncorrect = showFeedback && isSelected && !isCorrect;
              
              return (
                  <button
                    key={index}
                    onClick={() => setUserAnswer(option)}
                    disabled={showFeedback}
                    className={`
                      p-2 sm:p-8 rounded-lg sm:rounded-2xl game-border transition-all text-left flex items-center justify-between min-h-[60px] sm:min-h-[120px]
                      ${showCorrect
                        ? 'bg-gradient-to-br from-[#00FF94] to-[#7FFF00] retro-shadow-lg scale-105 animate-pop'
                        : showIncorrect
                        ? 'bg-gradient-to-br from-[#FF1493] to-[#FF69B4] retro-shadow-lg'
                        : isSelected
                        ? 'bg-gradient-to-br from-[#FFD700] to-[#FF6B35] retro-shadow-lg scale-105'
                        : 'bg-white hover:bg-gradient-to-br hover:from-[#FFB6D9] hover:to-[#9D4EDD] retro-shadow hover:scale-105'
                      }
                      ${showFeedback ? 'cursor-not-allowed' : 'hover:retro-shadow-lg'}
                    `}
                  style={{
                    backgroundColor: !isSelected && !showCorrect && !showIncorrect ? answerColors[index % 4] + '20' : undefined
                  }}
                >
                  <span className={`text-sm sm:text-2xl ${showCorrect || showIncorrect || isSelected ? 'text-white' : 'text-[#1A1A1A]'}`}>
                    {option}
                  </span>
                  {showCorrect && (
                    <div className="bg-white rounded-full p-1 sm:p-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-8 sm:h-8 text-[#00FF94]" />
                    </div>
                  )}
                  {showIncorrect && (
                    <div className="bg-white rounded-full p-1 sm:p-2">
                      <XCircle className="w-4 h-4 sm:w-8 sm:h-8 text-[#FF1493]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Type Answer */}
        {(currentExercise.type === 'type-answer' || currentExercise.type === 'translate' || currentExercise.type === 'fill-blank') && (
          <div className="w-full max-w-3xl">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={showFeedback}
              placeholder={isEnglish ? 'Type your answer...' : 'Tapez votre réponse...'}
              className={`
                w-full p-8 rounded-3xl game-border text-2xl text-center transition-all
                ${showFeedback
                  ? isCorrect
                    ? 'bg-gradient-to-r from-[#00FF94] to-[#7FFF00] text-white retro-shadow-lg'
                    : 'bg-gradient-to-r from-[#FF1493] to-[#FF69B4] text-white retro-shadow-lg'
                  : 'bg-white focus:retro-shadow-lg focus:outline-none focus:scale-105'
                }
              `}
              autoFocus
            />
          </div>
        )}

        {/* Hint */}
        {currentExercise.hint && !showFeedback && (
          <div className="mt-8 p-6 rounded-2xl bg-white game-border retro-shadow w-full max-w-3xl">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FF6B35] p-3 rounded-xl">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <p className="text-xl text-[#1A1A1A] flex-1">
                {isEnglish ? currentExercise.hint : currentExercise.hintFr}
              </p>
            </div>
          </div>
        )}

        {/* Feedback */}
        {showFeedback && (
          <div className="mt-8 w-full max-w-3xl">
            <div className={`
              p-8 rounded-3xl game-border retro-shadow-lg animate-fadeIn
              ${isCorrect 
                ? 'bg-gradient-to-r from-[#00FF94] to-[#7FFF00]' 
                : 'bg-gradient-to-r from-[#FF1493] to-[#FF69B4]'
              }
            `}>
              <div className="flex items-center gap-6">
                <div className="bg-white rounded-2xl p-4">
                  {isCorrect ? (
                    <CheckCircle2 className="w-12 h-12 text-[#00FF94]" />
                  ) : (
                    <XCircle className="w-12 h-12 text-[#FF1493]" />
                  )}
                </div>
                <div className="flex-1 text-white">
                  <p className="text-3xl mb-2">
                    {isCorrect 
                      ? isRedemption
                        ? (isEnglish ? '💜 REDEEMED! +0.5 ❤️' : '💜 RÉDEMPTÉ! +0.5 ❤️')
                        : (isEnglish ? '🎉 AMAZING!' : '🎉 INCROYABLE!')
                      : (isEnglish ? 'Correct answer:' : 'Bonne réponse:')}
                  </p>
                  {!isCorrect && (
                    <>
                      <p className="text-2xl mb-2">{getCorrectAnswer()}</p>
                      {!isRedemption && (
                        <p className="text-xl opacity-90">
                          💡 {isEnglish ? 'You\'ll get a chance to redeem yourself later!' : 'Vous aurez une chance de vous racheter plus tard!'}
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Button Area */}
      <div className="bg-white/95 backdrop-blur-md game-border border-t-0 p-2 sm:p-8 max-w-5xl mx-auto w-full">
        {!showFeedback ? (
          <button
            onClick={handleSubmit}
            disabled={!userAnswer}
            className={`
              w-full py-3 sm:py-6 rounded-xl sm:rounded-2xl game-border transition-all text-lg sm:text-3xl uppercase tracking-wider retro-shadow-lg
              ${userAnswer
                ? 'bg-gradient-to-r from-[#00FF94] to-[#7FFF00] text-white hover:scale-105 hover:retro-shadow-lg animate-pulse'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }
            `}
          >
            {isEnglish ? '✓ CHECK' : '✓ VÉRIFIER'}
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="w-full py-3 sm:py-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#FFD700] to-[#FF6B35] text-white game-border retro-shadow-lg hover:scale-105 transition-all text-lg sm:text-3xl uppercase tracking-wider"
          >
            {exerciseQueue.length > 1
              ? (isEnglish ? 'NEXT →' : 'SUIVANT →')
              : (isEnglish ? '🏆 FINISH' : '🏆 TERMINER')}
          </button>
        )}
      </div>

      {/* Hearts Out Modal */}
      <HeartsOutModal
        isOpen={showHeartsOutModal}
        onClose={() => setShowHeartsOutModal(false)}
        onSubscribe={() => {
          setShowHeartsOutModal(false);
          // Navigate to subscription page - this would need to be passed as a prop
          // For now, just close the modal
        }}
        heartsData={heartsData || { currentHearts: 0, lastResetTime: Date.now(), maxHearts: 5 }}
        isGuest={isGuest}
      />

      {/* Guest Limit Modal */}
      <GuestLimitModal
        isOpen={showGuestLimitModal}
        onClose={() => setShowGuestLimitModal(false)}
        onSignUp={() => {
          setShowGuestLimitModal(false);
          // Navigate to sign up - this would need to be passed as a prop
          // For now, just close the modal
        }}
        lessonsCompleted={3}
      />
    </div>
  );
}
