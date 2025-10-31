export type InterfaceLanguage = 'en' | 'fr';

export type AfricanLanguage = 
  | 'swahili'
  | 'hausa'
  | 'yoruba'
  | 'zulu'
  | 'amharic'
  | 'igbo'
  | 'arabic'
  | 'shona'
  | 'somali'
  | 'berber'
  | 'moore'
  | 'lingala'
  | 'twi'
  | 'chichewa'
  | 'wolof';

export interface Language {
  id: AfricanLanguage;
  name: string;
  nameFr: string;
  countries: string[];
  flags: string[];
  region: 'west' | 'east' | 'central' | 'north' | 'southern';
  speakers: string;
}

export interface UserProgress {
  languageId: AfricanLanguage;
  xp: number;
  level: number;
  hearts: number; // Supports decimals (e.g., 4.5 for half hearts)
  heartsResetTime: number | null;
  streak: number;
  lastPracticeDate: string | null;
  streakDays?: number[]; // Array of day numbers in current month that have streaks (1-31)
  lessonsCompleted: number;
  wordsLearned: number;
  mistakeCount: number;
  completedLessons: string[]; // Array of completed lesson IDs
  currentStage: number; // Current stage the user is on
}

export interface Stage {
  id: string;
  stageNumber: number;
  title: string;
  titleFr: string;
  color: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  stageId: string;
  lessonNumber: number; // 1-5 within each stage
  type: 'vocabulary' | 'grammar' | 'writing' | 'culture';
  title: string;
  titleFr: string;
  xpReward: number;
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'match' | 'translate' | 'type-answer';
  question: string;
  questionFr: string;
  correctAnswer: string;
  correctAnswerFr?: string; // French version of correct answer
  options?: string[];
  optionsFr?: string[]; // French version of options
  hint?: string;
  hintFr?: string;
}

export interface CulturalCapsule {
  id: string;
  languageId: AfricanLanguage;
  type: 'proverb' | 'dialogue' | 'trivia';
  content: string;
  contentFr: string;
  translation: string;
  translationFr: string;
  explanation: string;
  explanationFr: string;
}
