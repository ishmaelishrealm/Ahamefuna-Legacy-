import { useState } from 'react';
import { InterfaceLanguage } from '../../types';
import { Flame, Calendar, Lock, ChevronLeft, ChevronRight } from 'lucide-react';
import { X } from 'lucide-react';

interface StreakPopupProps {
  interfaceLanguage: InterfaceLanguage;
  streak: number;
  streakDays: number[]; // Array of day numbers that have streaks (1-31)
  onClose: () => void;
  onStartLesson?: () => void;
}

export function StreakPopup({ 
  interfaceLanguage, 
  streak, 
  streakDays = [],
  onClose,
  onStartLesson 
}: StreakPopupProps) {
  const isEnglish = interfaceLanguage === 'en';
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Get first day of month and days in month
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  // Generate calendar days
  const calendarDays: (number | null)[] = [];
  // Add empty cells for days before month starts
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const monthNames = isEnglish 
    ? ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    : ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

  const dayHeaders = isEnglish 
    ? ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    : ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const isStreakDay = (day: number | null): boolean => {
    if (day === null) return false;
    // Check if this day is in the current month/year and has a streak
    const today = new Date();
    const isCurrentMonth = currentMonth === today.getMonth() && currentYear === today.getFullYear();
    if (isCurrentMonth && streakDays.includes(day)) {
      return true;
    }
    return false;
  };

  const isToday = (day: number | null): boolean => {
    if (day === null) return false;
    const today = new Date();
    return day === today.getDate() && 
           currentMonth === today.getMonth() && 
           currentYear === today.getFullYear();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <Flame className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl font-bold text-gray-900">
              {isEnglish ? 'Your Streak' : 'Votre Série'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Streak Display */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Flame className="w-12 h-12 text-orange-500" />
              <span className="text-5xl font-bold text-orange-500">
                {streak} {isEnglish ? 'day streak' : 'jours de série'}
              </span>
            </div>
          </div>

          {/* Start Streak Card */}
          {streak === 0 && (
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-orange-200">
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 rounded-full p-3">
                  <Calendar className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-medium mb-2">
                    {isEnglish 
                      ? 'Do a lesson today to start a new streak!'
                      : 'Faites une leçon aujourd\'hui pour commencer une nouvelle série !'}
                  </p>
                  {onStartLesson && (
                    <button
                      onClick={onStartLesson}
                      className="text-blue-600 underline font-semibold hover:text-blue-700 transition-colors"
                    >
                      {isEnglish ? 'START A STREAK' : 'COMMENCER UNE SÉRIE'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Calendar Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">
              {isEnglish ? 'Calendar' : 'Calendrier'}
            </h3>
            
            {/* Month Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePreviousMonth}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <h4 className="text-lg font-semibold text-gray-900">
                {monthNames[currentMonth].toUpperCase()} {currentYear}
              </h4>
              <button
                onClick={handleNextMonth}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Day Headers */}
              <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
                {dayHeaders.map((day, index) => (
                  <div
                    key={index}
                    className="text-center py-2 text-sm font-semibold text-gray-700"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7">
                {calendarDays.map((day, index) => {
                  if (day === null) {
                    return <div key={index} className="aspect-square" />;
                  }
                  
                  const hasStreak = isStreakDay(day);
                  const isTodayDay = isToday(day);
                  
                  return (
                    <div
                      key={index}
                      className={`aspect-square border border-gray-100 flex items-center justify-center text-sm font-medium transition-all ${
                        hasStreak 
                          ? 'bg-orange-100 text-orange-900 border-orange-300' 
                          : isTodayDay
                          ? 'bg-blue-50 text-blue-900 border-blue-300'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Streak Society */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="bg-gray-200 rounded-full p-3">
                <Lock className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {isEnglish ? 'Streak Society' : 'Société de Série'}
                </h4>
                <p className="text-gray-700">
                  {streak < 7 
                    ? (isEnglish 
                        ? `Reach a 7 day streak to join the Streak Society and earn exclusive rewards.`
                        : `Atteignez une série de 7 jours pour rejoindre la Société de Série et gagner des récompenses exclusives.`)
                    : (isEnglish
                        ? 'Congratulations! You\'re a member of the Streak Society! Keep it going!'
                        : 'Félicitations ! Vous êtes membre de la Société de Série ! Continuez !')
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
